import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/api';
import EditUser from './EditUser';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState('');
  const [editingUserId, setEditingUserId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers(page);
        setUsers(data.data);
        setTotalPages(data.total_pages);
      } catch (err) {
        setError('Failed to fetch users.');
      }
    };
    fetchUsers();
  }, [page]);

  const filteredUsers = users.filter(user =>
    `${user.first_name} ${user.last_name} ${user.email}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter(user => user.id !== id));
      alert('User deleted successfully.');
    } catch (err) {
      alert('Failed to delete user.');
    }
  };

  const handleUpdateUser = (id, updatedUser) => {
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  return (
    <div>
      <h2>User List (Page {page} of {totalPages})</h2>
      
      <div className="search-bar">
        <input 
          type="text"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      {error && <p className="error">{error}</p>}
      <div className="user-cards-container">
        {filteredUsers.map(user => (
          <div key={user.id} className="user-card">
            <img 
              src={user.avatar} 
              alt={`${user.first_name} ${user.last_name}`} 
            />
            <h3>{user.first_name} {user.last_name}</h3>
            <p>{user.email}</p>
            <button onClick={() => setEditingUserId(user.id)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
            {editingUserId === user.id && (
              <EditUser 
                user={user} 
                onClose={() => setEditingUserId(null)}
                onUpdate={handleUpdateUser}
              />
            )}
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevious} disabled={page === 1}>Previous</button>
        <button onClick={handleNext} disabled={page === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default UserList;
