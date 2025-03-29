import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Steps.css"; // Import custom CSS

const Steps = () => {
  const [steps, setSteps] = useState(0);
  const [goal, setGoal] = useState(10000);
  const [view, setView] = useState("weekly"); // "weekly" or "monthly"

  // Simulate fetching step data (replace with API integration later)
  useEffect(() => {
    setTimeout(() => {
      setSteps(6500);
    }, 1000);
  }, []);

  const progressPercentage = Math.min((steps / goal) * 100, 100);

  return (
    <div className="steps-container">
      <div className="steps-card">
        <h2 className="steps-title">Daily Step Tracker</h2>
        
        {/* Display current steps */}
        <div className="steps-display">
          <p className="steps-label">Today's Steps</p>
          <p className="steps-count">{steps}</p>
          <p className="steps-goal">Goal: {goal} steps</p>
        </div>
        
        {/* Progress Bar */}
        <div className="progress-bar-container">
          <div 
            className="progress-bar"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        
        {/* Goal Setting */}
        <div className="goal-setting">
          <label htmlFor="goal" className="goal-label">Set Your Daily Step Goal:</label>
          <input 
            id="goal"
            type="number"
            value={goal}
            onChange={(e) => setGoal(Number(e.target.value))}
            className="goal-input"
            placeholder="Enter your step goal"
          />
        </div>
        
        {/* Weekly/Monthly View Buttons */}
        <div className="view-buttons text-center mb-4">
          <button 
            className={`btn ${view === "weekly" ? "btn-primary" : "btn-outline-primary"} me-2`}
            onClick={() => setView("weekly")}
          >
            Weekly
          </button>
          <button 
            className={`btn ${view === "monthly" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setView("monthly")}
          >
            Monthly
          </button>
        </div>

        {/* Weekly/Monthly Trends Section */}
        <div className="weekly-trends">
          {view === "weekly" ? (
            <div>
              <h3 className="trends-title">Weekly Trends</h3>
              <p className="trends-placeholder">
                [Placeholder for weekly step trend chart or data...]
              </p>
            </div>
          ) : (
            <div>
              <h3 className="trends-title">Monthly Trends</h3>
              <p className="trends-placeholder">
                [Placeholder for monthly step trend chart or data...]
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Steps;
