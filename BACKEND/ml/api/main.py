from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import pandas as pd
from pathlib import Path






app = FastAPI(
    title="Vehicle Insurance Fraud Detection API",
    version="1.0.0"
)






app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://ml-1-dtiv.onrender.com",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)






BASE_DIR = Path(__file__).resolve().parent.parent

MODEL_PATH = (
    BASE_DIR
    / "model"
    / "vehicle_fraud_final_model.pkl"
)






print("========================================")
print("LOADING ML MODEL")
print("========================================")

print("MODEL PATH:")
print(MODEL_PATH)

try:

    model = joblib.load(MODEL_PATH)

    print("MODEL LOADED SUCCESSFULLY")
    print("MODEL TYPE:")
    print(type(model))

    if hasattr(model, "feature_names_in_"):

        print("MODEL FEATURES:")

        print(
            model.feature_names_in_
        )

except Exception as e:

    print("MODEL LOADING ERROR:")
    print(repr(e))

    raise






class VehicleData(BaseModel):

    age_of_driver: int

    safety_rating: int

    annual_income: float

    high_education: int

    address_change: int

    property_status: str

    claim_date: str

    claim_day_of_week: str

    accident_site: str

    past_num_of_claims: int

    witness_present: int

    liab_prct: float

    channel: str

    police_report: int

    age_of_vehicle: int

    vehicle_category: str

    vehicle_price: float

    total_claim: float

    injury_claim: float

    policy_deductible: float

    annual_premium: float

    days_open: float

    form_defects: int






def create_features(df):

    print("========================================")
    print("STARTING FEATURE ENGINEERING")
    print("========================================")


    
    
    

    df["claim_date"] = pd.to_datetime(
        df["claim_date"],
        errors="coerce"
    )


    if df["claim_date"].isna().any():

        raise ValueError(
            "Invalid claim_date format."
        )


    
    
    

    df["claim_year"] = (
        df["claim_date"].dt.year
    )

    df["claim_month"] = (
        df["claim_date"].dt.month
    )

    df["claim_day"] = (
        df["claim_date"].dt.day
    )

    df["claim_day_number"] = (
        df["claim_date"].dt.dayofweek
    )

    df["claim_week"] = (
        df["claim_date"]
        .dt.isocalendar()
        .week
        .astype(float)
    )


    
    
    

    df["claim_vehicle_ratio"] = (
        df["total_claim"]
        / (df["vehicle_price"] + 1)
    )


    df["claim_premium_ratio"] = (
        df["total_claim"]
        / (df["annual_premium"] + 1)
    )


    df["injury_claim_ratio"] = (
        df["injury_claim"]
        / (df["total_claim"] + 1)
    )


    
    
    

    df = df.drop(
        columns=["claim_date"]
    )


    print("FEATURE ENGINEERING COMPLETED")

    print("ENGINEERED FEATURES:")

    print(
        [
            "claim_year",
            "claim_month",
            "claim_day",
            "claim_day_number",
            "claim_week",
            "claim_vehicle_ratio",
            "claim_premium_ratio",
            "injury_claim_ratio"
        ]
    )


    return df






@app.get("/")
def home():

    return {
        "message":
        "Vehicle Fraud Detection API is running"
    }






@app.get("/health")
def health():

    return {

        "status":
        "healthy",

        "model_loaded":
        model is not None
    }

@app.post("/predict")
def predict(data: VehicleData):

    # =========================
    # DATE FEATURES
    # =========================
    claim_date = pd.to_datetime(data.claim_date)

    claim_year = int(claim_date.year)
    claim_month = int(claim_date.month)
    claim_day = int(claim_date.day)

    # Monday = 0, Sunday = 6
    claim_day_number = int(claim_date.dayofweek)

    # ISO week number
    claim_week = int(claim_date.isocalendar().week)

    # =========================
    # RATIO FEATURES
    # =========================

    claim_vehicle_ratio = (
        data.total_claim / data.vehicle_price
        if data.vehicle_price != 0
        else 0
    )

    claim_premium_ratio = (
        data.total_claim / data.annual_premium
        if data.annual_premium != 0
        else 0
    )

    injury_claim_ratio = (
        data.injury_claim / data.total_claim
        if data.total_claim != 0
        else 0
    )

    # =========================
    # CREATE MODEL INPUT
    # =========================

    input_data = pd.DataFrame([
        {
            "age_of_driver": data.age_of_driver,
            "safety_rating": data.safety_rating,
            "annual_income": data.annual_income,
            "high_education": data.high_education,
            "address_change": data.address_change,
            "property_status": data.property_status,
            "claim_day_of_week": data.claim_day_of_week,
            "accident_site": data.accident_site,
            "past_num_of_claims": data.past_num_of_claims,
            "witness_present": data.witness_present,
            "liab_prct": data.liab_prct,
            "channel": data.channel,
            "police_report": data.police_report,
            "age_of_vehicle": data.age_of_vehicle,
            "vehicle_category": data.vehicle_category,
            "vehicle_price": data.vehicle_price,
            "total_claim": data.total_claim,
            "injury_claim": data.injury_claim,

            "policy deductible": data.policy_deductible,
            "annual premium": data.annual_premium,
            "days open": data.days_open,
            "form defects": data.form_defects,

            # Derived date features
            "claim_year": claim_year,
            "claim_month": claim_month,
            "claim_day": claim_day,
            "claim_day_number": claim_day_number,
            "claim_week": claim_week,

            # Derived ratio features
            "claim_vehicle_ratio": claim_vehicle_ratio,
            "claim_premium_ratio": claim_premium_ratio,
            "injury_claim_ratio": injury_claim_ratio,
        }
    ])

    # =========================
    # CHECK MODEL FEATURES
    # =========================

    print("\n==============================")
    print("INPUT COLUMNS")
    print("==============================")
    print(input_data.columns.tolist())

    if hasattr(model, "feature_names_in_"):

        expected_columns = model.feature_names_in_.tolist()

        print("\n==============================")
        print("MODEL EXPECTED COLUMNS")
        print("==============================")
        print(expected_columns)

        missing_columns = [
            col for col in expected_columns
            if col not in input_data.columns
        ]

        extra_columns = [
            col for col in input_data.columns
            if col not in expected_columns
        ]

        print("\nMISSING COLUMNS:")
        print(missing_columns)

        print("\nEXTRA COLUMNS:")
        print(extra_columns)

        if missing_columns:
            raise ValueError(
                f"Missing model features: {missing_columns}"
            )

        # VERY IMPORTANT:
        # Put columns in exactly the same order
        # as during model training.
        input_data = input_data[expected_columns]

    # =========================
    # PREDICT
    # =========================

    print("\nFINAL MODEL INPUT:")
    print(input_data)

    prediction = model.predict(input_data)[0]

    print("\nPREDICTION:", prediction)

    if prediction == 1:
        result = "Fraud"
    else:
        result = "Not Fraud"

    response = {
        "prediction": int(prediction),
        "result": result
    }

    print("\nFINAL RESPONSE:")
    print(response)

    return response



      