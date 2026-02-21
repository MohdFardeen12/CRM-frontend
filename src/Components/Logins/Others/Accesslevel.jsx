import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../../../Services/api";

const AccessLevel = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "employee",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //new handlesubmit for admin access
  const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        await API.post("/admin/set-access", {
          email: formData.email,
          role: formData.role,
        });
    
        alert("Access updated successfully");
      } catch (err) {
        alert(err.response?.data?.message || "Failed to set access");
      }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Access Data:", formData);
  //   // later you can send this to backend
  // };

  return (
     <div className="min-h-screen flex items-center justify-center
      bg-white dark:bg-gray-900 border-gray-200 p-4">

      <div className="w-full max-w-md bg-white dark:bg-gray-800
        rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">

        <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-gray-100 mb-6">
          Set Access Level
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg
              bg-white dark:bg-gray-900
              border-gray-300 dark:border-gray-600
              text-gray-800 dark:text-gray-100
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password
          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div> */}

          {/* Role Selection */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Access Role</label>
            <div className="flex gap-4 text-gray-800 dark:text-gray-200">
              <label className="flex items-center gap-2">
                <input type="radio" name="role" value="employee"
                  checked={formData.role === "user"} onChange={handleChange} />
                User Email
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="role" value="admin"
                  checked={formData.role === "admin"} onChange={handleChange} />
                Admin Email
              </label>
            </div>
          </div>

          {/* Buttons */}
          <button
            type="submit"
            className="w-full py-2 bg-indigo-500 text-white
            rounded-lg font-semibold hover:bg-indigo-600 transition"
          >
            Save Access
          </button>
        </form>

        <Link
          to="/admin-dashboard"
          className="block text-center text-indigo-500 mt-6 hover:underline"
        >
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default AccessLevel;
