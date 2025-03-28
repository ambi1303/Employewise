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
      // Call PUT /api/users/{id} with updated data
      await updateUser(user.id, { first_name: firstName, last_name: lastName, email });
      setMessage('User updated successfully.');
      // Propagate the updated data to the parent component
      onUpdate(user.id, { ...user, first_name: firstName, last_name: lastName, email });
      // Optionally, close the edit form
      onClose();
    } catch (error) {
      setMessage('Update failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #ddd', padding: '1rem', marginTop: '1rem' }}>
      <h3>Edit User</h3>
      <div>
        <label>First Name:</label>
        <input 
          type="text" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input 
          type="text" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Update</button>
      <button type="button" onClick={onClose} style={{ marginLeft: '0.5rem' }}>Cancel</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default EditUser;
