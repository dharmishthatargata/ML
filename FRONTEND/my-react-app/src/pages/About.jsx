import React from "react";
import {
  Search,
  Cpu,
  BarChart2,
  CheckCircle2,
  UserCheck,
  Car,
  FileText,
  DollarSign,
  Info,
  Shield,
  Layers,
  Activity,
  Sparkles,
  ChevronRight,
  Sun,
  Layout,
  Sliders,
} from "lucide-react";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      <div className="about-container">

        <section className="story-card">
          <div className="story-content">
            <span className="eyebrow-label">
              <Sparkles size={12} /> Project Story
            </span>
            <h1>FraudShield AI</h1>
            <p>
              FraudShield AI is a machine-learning based vehicle insurance claim analysis 
              project designed to explore how historical claim information can be used to 
              identify patterns associated with potentially fraudulent claims.
            </p>
            <p>
              The application allows users to enter driver, vehicle, claim and financial 
              information and sends the prepared information through the project's machine-learning 
              pipeline to generate a prediction.
            </p>
            <div className="story-badges">
              <div className="badge-item">
                <Car size={16} /> Vehicle Data
              </div>
              <div className="badge-item">
                <DollarSign size={16} /> Financial Metrics
              </div>
              <div className="badge-item">
                <Cpu size={16} /> ML Pipeline
              </div>
            </div>
          </div>

          <div className="story-visual">
            <span className="eyebrow-label">Interactive Input Flow</span>
            <div className="interactive-mock-node">
              <div className="icon-box"><UserCheck size={16} /></div>
              <span>1. Driver & Vehicle Profile</span>
            </div>
            <div className="interactive-mock-node">
              <div className="icon-box"><FileText size={16} /></div>
              <span>2. Claim & Financial Data</span>
            </div>
            <div className="interactive-mock-node">
              <div className="icon-box"><Cpu size={16} /></div>
              <span>3. ML Inference Engine</span>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        <section>
          <div className="section-header-center">
            <span className="eyebrow-label">Project Objectives</span>
            <h2>Why This Project?</h2>
            <p>Exploring automated analytical patterns in modern insurance technology.</p>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <div className="icon-container"><Search size={20} /></div>
              <h3>Understand Claim Patterns</h3>
              <p>Identify implicit structural behaviors and claim anomalies from past histories.</p>
            </div>
            <div className="why-card">
              <div className="icon-container"><Cpu size={20} /></div>
              <h3>Explore Machine Learning</h3>
              <p>Apply classification algorithms directly to insurance claims datasets.</p>
            </div>
            <div className="why-card">
              <div className="icon-container"><Layers size={20} /></div>
              <h3>Process Multiple Attributes</h3>
              <p>Standardize multi-variable driver, vehicle, and policy indicators seamlessly.</p>
            </div>
            <div className="why-card">
              <div className="icon-container"><BarChart2 size={20} /></div>
              <h3>Automated Predictions</h3>
              <p>Compute dynamic probability classifications instantly via real-time inference.</p>
            </div>
            <div className="why-card">
              <div className="icon-container"><Layout size={20} /></div>
              <h3>Accessible Web Interface</h3>
              <p>Deliver complex classification metrics through clean, interactive web visualizers.</p>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        <section>
          <div className="section-header-center">
            <span className="eyebrow-label">System Architecture</span>
            <h2>How The System Works</h2>
            <p>Hover over steps to inspect data transformations across the flow.</p>
          </div>

          <div className="pipeline-flow-wrapper">
            <div className="pipeline-node-card">
              <div className="node-icon-wrapper"><UserCheck size={20} /></div>
              <h4>USER</h4>
            </div>

            <ChevronRight className="pipeline-connector" size={18} />

            <div className="pipeline-node-card">
              <div className="node-icon-wrapper"><FileText size={20} /></div>
              <h4>CLAIM INFO</h4>
            </div>

            <ChevronRight className="pipeline-connector" size={18} />

            <div className="pipeline-node-card">
              <div className="node-icon-wrapper"><Sliders size={20} /></div>
              <h4>PREPARATION</h4>
            </div>

            <ChevronRight className="pipeline-connector" size={18} />

            <div className="pipeline-node-card">
              <div className="node-icon-wrapper"><Cpu size={20} /></div>
              <h4>ML MODEL</h4>
            </div>

            <ChevronRight className="pipeline-connector" size={18} />

            <div className="pipeline-node-card">
              <div className="node-icon-wrapper"><Activity size={20} /></div>
              <h4>PREDICTION</h4>
            </div>

            <ChevronRight className="pipeline-connector" size={18} />

            <div className="pipeline-node-card">
              <div className="node-icon-wrapper"><CheckCircle2 size={20} /></div>
              <h4>RESULT</h4>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        <section>
          <div className="section-header-center">
            <span className="eyebrow-label">Data Pipeline Steps</span>
            <h2>Machine Learning Process</h2>
            <p>Sequential stages executed from raw data ingestion to probability output.</p>
          </div>

          <div className="ml-process-grid">
            <div className="ml-step-card">
              <span className="step-num-badge">01</span>
              <h4>Historical Data</h4>
              <p>Ingests initial dataset records containing past claims and policy details.</p>
            </div>

            <div className="ml-step-card">
              <span className="step-num-badge">02</span>
              <h4>Data Preparation</h4>
              <p>Cleans missing entries, handles noise, and normalizes numeric distributions.</p>
            </div>

            <div className="ml-step-card">
              <span className="step-num-badge">03</span>
              <h4>Feature Processing</h4>
              <p>Vectorizes categorical features and scales numerical input bounds.</p>
            </div>

            <div className="ml-step-card">
              <span className="step-num-badge">04</span>
              <h4>Train / Test Split</h4>
              <p>Stratifies records into an 80% training set and a 20% holdout test evaluation set.</p>
            </div>

            <div className="ml-step-card">
              <span className="step-num-badge">05</span>
              <h4>Logistic Regression</h4>
              <p>Fits regularized linear boundaries with balanced class weighting strategies.</p>
            </div>

            <div className="ml-step-card">
              <span className="step-num-badge">06</span>
              <h4>Model Evaluation</h4>
              <p>Calculates cross-entropy loss, holdout accuracy, and confusion indicators.</p>
            </div>

            <div className="ml-step-card">
              <span className="step-num-badge">07</span>
              <h4>Prediction</h4>
              <p>Outputs calibrated probability scores for newly submitted claim instances.</p>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        <section>
          <div className="section-header-center">
            <span className="eyebrow-label">Telemetry & Metrics</span>
            <h2>Model Metrics Summary</h2>
            <p>Real statistical metrics evaluated on project datasets.</p>
          </div>

          <div className="metrics-dashboard-grid">
            <div className="metric-card-box bg-light-blue">
              <div className="metric-value-text">12,002</div>
              <div className="metric-label-text">Dataset Records</div>
            </div>

            <div className="metric-card-box bg-light-indigo">
              <div className="metric-value-text">29</div>
              <div className="metric-label-text">Original Features</div>
            </div>

            <div className="metric-card-box bg-light-cyan">
              <div className="metric-value-text">24</div>
              <div className="metric-label-text">Model Input Features</div>
            </div>

            <div className="metric-card-box bg-light-blue">
              <div className="metric-value-text">80/20</div>
              <div className="metric-label-text">Train / Test Split</div>
            </div>

            <div className="metric-card-box bg-light-teal">
              <div className="metric-value-text">57.14%</div>
              <div className="metric-label-text">Training Accuracy</div>
            </div>

            <div className="metric-card-box bg-light-teal">
              <div className="metric-value-text">53.56%</div>
              <div className="metric-label-text">Testing Accuracy</div>
            </div>

            <div className="metric-card-box bg-light-indigo">
              <div className="metric-value-text">0.63995</div>
              <div className="metric-label-text">Log Loss</div>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        <section className="panels-duo-grid">
          <div className="info-panel-box">
            <div className="panel-icon-circle">
              <Info size={22} />
            </div>
            <div className="panel-body">
              <h3>Understanding Model Performance</h3>
              <p>
                The reported accuracy values describe how the current model performed 
                on the project's training and evaluation data. They should not be interpreted 
                as a guarantee that every individual claim will be classified correctly.
              </p>
            </div>
          </div>

          <div className="info-panel-box shield-theme">
            <div className="panel-icon-circle">
              <Shield size={22} />
            </div>
            <div className="panel-body">
              <h3>Prediction ≠ Final Decision</h3>
              <p>
                FraudShield AI provides a machine-learning prediction that can be used as 
                an analytical signal. A prediction should be reviewed together with the underlying 
                claim information and should not be treated as a final determination of fraud.
              </p>
            </div>
          </div>
        </section>

        <hr className="section-divider" />

        <section>
          <div className="section-header-center">
            <span className="eyebrow-label">Application Capabilities</span>
            <h2>Project Features</h2>
            <p>Core functionalities available inside the FraudShield AI workspace.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card-item bg-light-blue">
              <div className="feature-icon"><Car size={20} /></div>
              <h4>Vehicle Claim Analysis</h4>
              <p>Extracts vehicle characteristics, policy age, and accident details.</p>
            </div>

            <div className="feature-card-item bg-light-indigo">
              <div className="feature-icon"><UserCheck size={20} /></div>
              <h4>Driver Information Analysis</h4>
              <p>Evaluates historical driver records and risk demographic indicators.</p>
            </div>

            <div className="feature-card-item bg-light-cyan">
              <div className="feature-icon"><FileText size={20} /></div>
              <h4>Claim Information Processing</h4>
              <p>Processes claim types, incident details, and reporting delays.</p>
            </div>

            <div className="feature-card-item bg-light-teal">
              <div className="feature-icon"><DollarSign size={20} /></div>
              <h4>Financial Information Analysis</h4>
              <p>Analyzes financial claim amounts, deductible scales, and ratios.</p>
            </div>

            <div className="feature-card-item bg-light-blue">
              <div className="feature-icon"><Cpu size={20} /></div>
              <h4>Machine-Learning Prediction</h4>
              <p>Runs submitted data through regularized logistic regression models.</p>
            </div>

            <div className="feature-card-item bg-light-indigo">
              <div className="feature-icon"><BarChart2 size={20} /></div>
              <h4>Prediction Result Visualization</h4>
              <p>Presents risk probabilities with actionable visual breakdowns.</p>
            </div>

            <div className="feature-card-item bg-light-cyan">
              <div className="feature-icon"><Layout size={20} /></div>
              <h4>Responsive Interface</h4>
              <p>Seamless design adapts smoothly to desktop, tablet, and mobile views.</p>
            </div>

            <div className="feature-card-item bg-light-teal">
              <div className="feature-icon"><Sun size={20} /></div>
              <h4>Light/Dark Theme</h4>
              <p>Features high-contrast light and dark options for accessibility.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}