"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/users") // Fetch users from backend
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Registered Users</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300 p-2">{user.name}</td>
              <td className="border border-gray-300 p-2">{user.email}</td>
              <td className="border border-gray-300 p-2">{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
