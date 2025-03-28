import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';

const Login = () => {
  // Prefill with the required credentials
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that both fields are filled (they should already be prefilled)
    if (!email || !password) {
      setError('Both email and password are required.');
      return;
    }
    
    // Ensure the user is using the specific credentials (optional, since fields are prefilled)
    if (email !== 'eve.holt@reqres.in' || password !== 'cityslicka') {
      setError('Please use the provided credentials.');
      return;
    }
    
    try {
      // Call the API with the hardcoded credentials
      const token = await loginUser({ email, password });
      if (token) {
        // Store the token in localStorage
        localStorage.setItem('token', token);
        // Navigate to the Users List page
        navigate('/users');
      } else {
        setError('Login failed, token not received.');
      }
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      <div>
        <label>Password:</label>
        <input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
