import React, { useState, useEffect } from "react";
import "./Dashboard.css"; // New CSS file

const Dashboard = () => {
  // Placeholder states for various health metrics
  const [steps, setSteps] = useState(0);
  const [calories, setCalories] = useState(0);
  const [sleepHours, setSleepHours] = useState(0);
  const [mood, setMood] = useState("Neutral");

  // Simulate fetching health metrics (replace with API calls later)
  useEffect(() => {
    // Simulated API call delay
    setTimeout(() => {
      setSteps(7500);
      setCalories(2100);
      setSleepHours(7.5);
      setMood("Happy");
    }, 1000);
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2 className="dashboard-title">Dashboard</h2>

        {/* Health Metrics Grid */}
        <div className="metrics-grid">
          {/* Steps Card */}
          <div className="metric-card steps-card">
            <h3>Steps</h3>
            <p>{steps}</p>
            <span>Today</span>
          </div>

          {/* Calories Card */}
          <div className="metric-card calories-card">
            <h3>Calories</h3>
            <p>{calories}</p>
            <span>Consumed</span>
          </div>

          {/* Sleep Card */}
          <div className="metric-card sleep-card">
            <h3>Sleep</h3>
            <p>{sleepHours} hrs</p>
            <span>Last Night</span>
          </div>

          {/* Mood Card */}
          <div className="metric-card mood-card">
            <h3>Mood</h3>
            <p>{mood}</p>
            <span>Today</span>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="recent-activity">
          <h3>Recent Activity</h3>
          <p>
            [Placeholder for recent health activities, workout logs, or nutrition updates...]
          </p>
        </div>

        {/* Weekly Trends Section */}
        <div className="weekly-trends">
          <h3>Weekly Trends</h3>
          <p>
            [Placeholder for charts/graphs showing weekly trends in steps, calories, etc.]
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;