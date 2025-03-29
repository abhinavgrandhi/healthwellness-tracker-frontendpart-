// src/services/api.js

const API_BASE_URL = "https://your-api-url.com"; // Replace with actual backend URL

// Function to fetch user data
export const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`);
    if (!response.ok) throw new Error("Failed to fetch users");
    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

// Function to delete a user
export const deleteUser = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete user");
    return await response.json();
  } catch (error) {
    console.error("Error deleting user:", error);
    return null;
  }
};

// Default export (optional, in case you need to import everything)
const api = {
  fetchUsers,
  deleteUser,
};

export default api;
