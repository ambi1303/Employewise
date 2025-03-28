import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const fetchUsers = async () => {
    try {
      const response = await api.get(`/users?page=${page}`);
      setUsers(response.data.data);
    } catch (err) {
      console.error("Error fetching users", err);
    }
  };

  const handleEdit = (user) => {
    navigate(`/edit/${user.id}`, { state: user });
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      console.error("Error deleting user", err);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">User List</h2>
      <div className="grid grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 bg-gray-100 rounded-lg">
            <img src={user.avatar} alt={user.first_name} className="w-16 h-16 rounded-full" />
            <h3 className="mt-2">{user.first_name} {user.last_name}</h3>
            <button onClick={() => handleEdit(user)} className="bg-green-500 text-white px-4 py-2 m-2">Edit</button>
            <button onClick={() => handleDelete(user.id)} className="bg-red-500 text-white px-4 py-2">Delete</button>
          </div>
        ))}
      </div>
      <button onClick={() => setPage(page - 1)} disabled={page === 1} className="m-2">Prev</button>
      <button onClick={() => setPage(page + 1)} className="m-2">Next</button>
    </div>
  );
};

export default UserList;
