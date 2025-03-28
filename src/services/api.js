import axios from 'axios';

const API_BASE_URL = 'https://reqres.in';

// Login API (already exists)
export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_BASE_URL}/api/login`, credentials);
  return response.data.token;
};

// New function: Fetch users for a given page
export const getUsers = async (page = 1) => {
  const response = await axios.get(`${API_BASE_URL}/api/users?page=${page}`);
  return response.data; // Contains { page, per_page, total, total_pages, data }
};
