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

    // Validate inputs
    if (!email || !password) {
      setError('Both email and password are required.');
      return;
    }
    
    // Ensure correct credentials are used
    if (email !== 'eve.holt@reqres.in' || password !== 'cityslicka') {
      setError('Please use the provided credentials.');
      return;
    }
    
    try {
      const token = await loginUser({ email, password });
      if (token) {
        localStorage.setItem('token', token);
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
      <div className="form-group">
        <label>Email:</label>
        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      {error && <p className="error">{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
