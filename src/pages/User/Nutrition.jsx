import React, { useState } from "react";
import "./Nutrition.css"; // Custom CSS
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS

const Nutrition = () => {
  const [meals, setMeals] = useState([]);
  const [food, setFood] = useState("");
  const [calories, setCalories] = useState("");
  const [goal, setGoal] = useState(2000);
  const [trendView, setTrendView] = useState("weekly");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedFood, setEditedFood] = useState("");
  const [editedCalories, setEditedCalories] = useState("");
  const [dietPlan, setDietPlan] = useState("");

  const handleAddOrUpdateMeal = () => {
    if (food && calories) {
      if (editingIndex !== null) {
        const updatedMeals = meals.map((meal, index) =>
          index === editingIndex ? { food: editedFood, calories: Number(editedCalories) } : meal
        );
        setMeals(updatedMeals);
        setEditingIndex(null);
        setEditedFood("");
        setEditedCalories("");
      } else {
        setMeals([...meals, { food, calories: Number(calories) }]);
      }
      setFood("");
      setCalories("");
    }
  };

  const handleDeleteMeal = (index) => {
    const updatedMeals = meals.filter((_, i) => i !== index);
    setMeals(updatedMeals);
  };

  const handleEditMeal = (index) => {
    setEditingIndex(index);
    setEditedFood(meals[index].food);
    setEditedCalories(meals[index].calories);
  };

  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);
  const progressPercentage = Math.min((totalCalories / goal) * 100, 100);

  return (
    <div className="nutrition-container">
      <div className="nutrition-card">
        <h2 className="nutrition-title">Daily Nutrition Tracker</h2>

        {/* Calorie Goal Input */}
        <div className="calorie-goal mb-4">
          <label className="goal-label">Set Your Calorie Goal:</label>
          <input
            type="number"
            value={goal}
            onChange={(e) => setGoal(Number(e.target.value))}
            className="goal-input"
            placeholder="Enter your calorie goal"
          />
        </div>

        {/* Meal Input Form */}
        <div className="meal-input mb-4">
          {editingIndex === null ? (
            <>
              <input
                type="text"
                placeholder="Food Item"
                value={food}
                onChange={(e) => setFood(e.target.value)}
                className="meal-input-field"
              />
              <input
                type="number"
                placeholder="Calories"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                className="meal-input-field calorie-field"
              />
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Edit Food Item"
                value={editedFood}
                onChange={(e) => setEditedFood(e.target.value)}
                className="meal-input-field"
              />
              <input
                type="number"
                placeholder="Edit Calories"
                value={editedCalories}
                onChange={(e) => setEditedCalories(e.target.value)}
                className="meal-input-field calorie-field"
              />
            </>
          )}
          <button
            onClick={handleAddOrUpdateMeal}
            className="btn btn-primary add-btn"
          >
            {editingIndex === null ? "Add Meal" : "Update Meal"}
          </button>
        </div>

        {/* Progress Bar */}
        <div className="progress-section mb-4">
          <p className="progress-text">Calories Consumed: {totalCalories}/{goal}</p>
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Meal List with Edit & Delete */}
        <div className="meal-history mb-4">
          <h3 className="history-title">Meal History</h3>
          {meals.length > 0 ? (
            <ul className="meal-list">
              {meals.map((meal, index) => (
                <li key={index} className="meal-item">
                  <span>{meal.food}</span>
                  <span>{meal.calories} kcal</span>
                  <div className="meal-actions">
                    <button
                      onClick={() => handleEditMeal(index)}
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteMeal(index)}
                      className="btn btn-sm btn-outline-danger"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-meals">No meals logged yet.</p>
          )}
        </div>

        {/* View Toggle for Weekly/Monthly Trends */}
        <div className="view-toggle text-center mb-4">
          <button
            className={`btn ${trendView === "weekly" ? "btn-primary" : "btn-outline-primary"} me-2`}
            onClick={() => setTrendView("weekly")}
          >
            Weekly
          </button>
          <button
            className={`btn ${trendView === "monthly" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setTrendView("monthly")}
          >
            Monthly
          </button>
        </div>

        {/* Trends Section */}
        <div className="trends-section mb-4">
          {trendView === "weekly" ? (
            <div>
              <h3 className="trends-title">Weekly Nutrition Trends</h3>
              <p className="trends-placeholder">
                [Placeholder for weekly nutrition trend chart or data...]
              </p>
            </div>
          ) : (
            <div>
              <h3 className="trends-title">Monthly Nutrition Trends</h3>
              <p className="trends-placeholder">
                [Placeholder for monthly nutrition trend chart or data...]
              </p>
            </div>
          )}
        </div>

        {/* Nutritionist Diet Plan Section */}
        <div className="diet-plan-section">
          <h3 className="diet-plan-title">Nutritionist Diet Plan</h3>
          <p className="diet-plan-description">
            [Placeholder: If the user grants permission, the nutritionist can view your logged meals and share a personalized diet plan.]
          </p>
          <textarea
            value={dietPlan}
            onChange={(e) => setDietPlan(e.target.value)}
            className="diet-plan-input"
            placeholder="Enter diet recommendations here..."
          />
          <button className="btn btn-success mt-2">
            Send Diet Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;