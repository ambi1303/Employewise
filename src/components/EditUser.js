import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";

const EditUser = () => {
  const { state: user } = useLocation();
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const navigate = useNavigate();

  const handleUpdate = async () => {
    try {
      await api.put(`/users/${user.id}`, { first_name: firstName, last_name: lastName });
      navigate("/users");
    } catch (err) {
      console.error("Error updating user", err);
    }
  };

  return (
    <div className="p-8">
      <h2>Edit User</h2>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className="border p-2 mb-2 w-full" />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="border p-2 mb-2 w-full" />
      <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2">Update</button>
    </div>
  );
};

export default EditUser;
