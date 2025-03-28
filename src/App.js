import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/users" element={<UserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
