import axios from 'axios';

const API_BASE_URL = 'https://reqres.in';

export const loginUser = async (credentials) => {
  // POST the credentials to the API endpoint
  const response = await axios.post(`${API_BASE_URL}/api/login`, credentials);
  // Assuming the token is returned as response.data.token
  return response.data.token;
};
