import axios from 'axios';

const API_BASE_URL = 'https://reqres.in';

// Login API (already exists)
export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_BASE_URL}/api/login`, credentials);
  return response.data.token;
};

// Fetch users API
export const getUsers = async (page = 1) => {
  const response = await axios.get(`${API_BASE_URL}/api/users?page=${page}`);
  return response.data; // returns { page, per_page, total, total_pages, data }
};

// Update user API: PUT /api/users/{id}
export const updateUser = async (id, updatedData) => {
  const response = await axios.put(`${API_BASE_URL}/api/users/${id}`, updatedData);
  return response.data;
};

// Delete user API: DELETE /api/users/{id}
export const deleteUser = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/api/users/${id}`);
  return response.data; // usually returns an empty object on success
};
