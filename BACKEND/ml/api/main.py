from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import pandas as pd
from pathlib import Path

app = FastAPI()


# =========================
# CORS
# =========================
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# =========================
# LOAD MODEL
# =========================
BASE_DIR = Path(__file__).resolve().parent.parent
MODEL_PATH = BASE_DIR / "model" / "vehicle_fraud_final_model.pkl"

model = joblib.load(MODEL_PATH)

print("MODEL TYPE:", type(model))

if hasattr(model, "feature_names_in_"):
    print("MODEL FEATURES:")
    print(model.feature_names_in__)


# =========================
# REQUEST MODEL
# =========================
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


# =========================
# HOME
# =========================
@app.get("/")
def home():
    return {
        "message": "Vehicle Fraud Detection API is running"
    }


# =========================
# PREDICTION
# =========================
@app.post("/predict")
def predict(data: VehicleData):

    input_data = pd.DataFrame([
        {
            "age_of_driver": data.age_of_driver,
            "safety_rating": data.safety_rating,
            "annual_income": data.annual_income,
            "high_education": data.high_education,
            "address_change": data.address_change,
            "property_status": data.property_status,
            "claim_date": data.claim_date,
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
            "policy_deductible": data.policy_deductible,
            "annual_premium": data.annual_premium,
            "days_open": data.days_open,
            "form_defects": data.form_defects
        }
    ])

    print("\nINPUT DATA:")
    print(input_data)

    prediction = model.predict(input_data)[0]

    print("PREDICTION:", prediction)

    if prediction == 1:
        result = "Fraud"
    else:
        result = "Not Fraud"

    response = {
        "prediction": int(prediction),
        "result": result
    }

    print("RESPONSE:", response)

    return response