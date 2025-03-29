import React, { useState } from "react";
import "./Profile.css"; // Update path according to your structure

const Profile = () => {
  const [user, setUser] = useState({
    name: "Enter_Name",
    email: "Enter_Email",
    age: 25,
    weight: 70,
    height: 175,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleInputChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(updatedUser);
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title">User Profile</h1>
      
      {!isEditing ? (
        <div className="profile-info">
          <InfoItem icon="👤" label="Name" value={user.name} />
          <InfoItem icon="📧" label="Email" value={user.email} />
          <InfoItem icon="🎂" label="Age" value={user.age} />
          <InfoItem icon="⚖️" label="Weight" value={`${user.weight} kg`} />
          <InfoItem icon="📏" label="Height" value={`${user.height} cm`} />

          <button
            className="btn btn-primary"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </button>
        </div>
      ) : (
        <form className="profile-form" onSubmit={handleSubmit}>
          <FormInput
            label="Name"
            name="name"
            value={updatedUser.name}
            onChange={handleInputChange}
          />
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={updatedUser.email}
            onChange={handleInputChange}
          />
          <FormInput
            label="Age"
            name="age"
            type="number"
            value={updatedUser.age}
            onChange={handleInputChange}
          />
          <FormInput
            label="Weight (kg)"
            name="weight"
            type="number"
            value={updatedUser.weight}
            onChange={handleInputChange}
          />
          <FormInput
            label="Height (cm)"
            name="height"
            type="number"
            value={updatedUser.height}
            onChange={handleInputChange}
          />

          <div className="button-group">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-success"
            >
              Save Changes
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

// Reusable components
const InfoItem = ({ icon, label, value }) => (
  <div className="profile-info-item">
    <span className="info-icon">{icon}</span>
    <div className="info-content">
      <span className="info-label">{label}</span>
      <p className="info-value">{value}</p>
    </div>
  </div>
);

const FormInput = ({ label, name, type = "text", value, onChange }) => (
  <div className="form-group">
    <label className="form-label">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="form-input"
    />
  </div>
);

export default Profile;
