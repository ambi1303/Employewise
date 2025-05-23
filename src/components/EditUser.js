import React, { useState } from 'react';
import { updateUser } from '../services/api';

const EditUser = ({ user, onClose, onUpdate }) => {
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(user.id, { first_name: firstName, last_name: lastName, email });
      setMessage('User updated successfully.');
      onUpdate(user.id, { ...user, first_name: firstName, last_name: lastName, email });
      onClose();
    } catch (error) {
      setMessage('Update failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <h3>Edit User</h3>
      <div className="form-group">
        <label>First Name:</label>
        <input 
          type="text" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Last Name:</label>
        <input 
          type="text" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Update</button>
      <button type="button" onClick={onClose}>Cancel</button>
      {message && <p className={message.includes('successfully') ? 'success' : 'error'}>{message}</p>}
    </form>
  );
};

export default EditUser;
