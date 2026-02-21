import React, { useState } from "react";
import API from "../../Services/api";
import { useNavigate } from "react-router-dom";

const Mainlogin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");

  /* ---------------- LOGIN STATE ---------------- */
  const [loginData, setLoginData] = useState({
    officeEmail: "",
    password: "",
  });

  /* ---------------- SIGNUP STATE ---------------- */
  const [signupData, setSignupData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    personalPhone: "",
    officePhone: "",
    personalEmail: "",
    officeEmail: "",
    password: "",
    designation: "",
    reportingManager: "",
    department: "",
    photo: null,
  });

  /* ---------------- LOGIN HANDLER ---------------- */
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/signin", loginData);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate(
      res.data.user.role === "admin"
        ? "/admin-dashboard"
        : "/employee-dashboard"
      );
    } 
    catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  /* ---------------- SIGNUP HANDLER ---------------- */
  const handleSignup = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(signupData).forEach(([key, value]) => {
      if (value !== null && value !== "") {
      formData.append(key, value);
      }
    });
    // const formData = new FormData();
    // Object.keys(signupData).forEach((key) => {
    //   formData.append(key, signupData[key]);
    // });

    try {
      await API.post("/auth/signup", formData);

      // await API.post("/auth/signup", formData, {
      //   headers: { "Content-Type": "multipart/form-data" },
      // });

      alert("Account created successfully");
      setActiveTab("login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen w-full bg-indigo-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md">

          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-8 animate-fadeIn">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2
                  c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857
                  M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0
                  019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0
                  11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              CRM Portal
            </h1>
            <p className="text-gray-600">
              Welcome back!
            </p>
          </div>

          {/* Tabs */}
          <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("login")}
              className={`flex-1 py-2 rounded-md ${
                activeTab === "login"
                  ? "bg-white text-purple-600 shadow"
                  : "text-gray-600"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab("signup")}
              className={`flex-1 py-2 rounded-md ${
                activeTab === "signup"
                  ? "bg-white text-purple-600 shadow"
                  : "text-gray-600"
              }`}
            >
              Sign Up
            </button>
          </div>
{/* ---------------- LOGIN ---------------- */}
          
          {activeTab === "login" && (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border rounded-lg"
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, officeEmail: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border rounded-lg"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />
              </div>

              <button className="w-full bg-linear-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold">
                Sign In
              </button>
              <div className="text-sm text-gray-900 text-center">
                Doesn't have an account ?<span className="underline">SignUp</span> 
              </div>
            </form>
          )}

          {/* ---------------- SIGNUP ---------------- */}
          {activeTab === "signup" && (
            <form onSubmit={handleSignup} className="space-y-4">

              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <div className="grid grid-cols-3 gap-3">
                  <input placeholder="First" className="border p-2 rounded"
                    onChange={(e)=>setSignupData({...signupData,firstName:e.target.value})}/>
                  <input placeholder="Middle" className="border p-2 rounded"
                    onChange={(e)=>setSignupData({...signupData,middleName:e.target.value})}/>
                  <input placeholder="Last" className="border p-2 rounded"
                    onChange={(e)=>setSignupData({...signupData,lastName:e.target.value})}/>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Contact Numbers
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <input placeholder="Personal" className="border p-2 rounded"
                    onChange={(e)=>setSignupData({...signupData,personalPhone:e.target.value})}/>
                  <input placeholder="Office" className="border p-2 rounded"
                    onChange={(e)=>setSignupData({...signupData,officePhone:e.target.value})}/>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Addresses
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <input placeholder="Personal Email" className="border p-2 rounded"
                    onChange={(e)=>setSignupData({...signupData,personalEmail:e.target.value})}/>
                  <input placeholder="Office Email" className="border p-2 rounded"
                    onChange={(e)=>setSignupData({...signupData,officeEmail:e.target.value})}/>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input type="password" className="border p-2 rounded w-full"
                  onChange={(e)=>setSignupData({...signupData,password:e.target.value})}/>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Designation</label>
                <input className="border p-2 rounded w-full"
                  onChange={(e)=>setSignupData({...signupData,designation:e.target.value})}/>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Reporting Manager
                </label>
                <input className="border p-2 rounded w-full"
                  onChange={(e)=>setSignupData({...signupData,reportingManager:e.target.value})}/>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Department</label>
                <input className="border p-2 rounded w-full"
                  onChange={(e)=>setSignupData({...signupData,department:e.target.value})}/>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Upload Photo
                </label>
                <input type="file"
                  name="photo"
                  onChange={(e)=>setSignupData({...signupData,photo:e.target.files[0]})}/>
              </div>

              <button className="w-full bg-linear-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold">
                Create Account
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};

export default Mainlogin;
