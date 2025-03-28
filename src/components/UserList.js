import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/api';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState('');

  // Fetch users whenever the page number changes
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

  // Handlers for pagination
  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div>
      <h2>User List (Page {page} of {totalPages})</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {users.map(user => (
          <div key={user.id} style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              width: '200px',
              textAlign: 'center'
            }}>
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
            <h3>{user.first_name} {user.last_name}</h3>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '1rem' }}>
        <button onClick={handlePrevious} disabled={page === 1}>
          Previous
        </button>
        <button onClick={handleNext} disabled={page === totalPages} style={{ marginLeft: '1rem' }}>
          Next
        </button>
      </div>
    </div>
  );
};

export default UserList;
