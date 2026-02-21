import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Leads from '../Others/Leads';



const AdminDash = () => {

  {/* ---------------- LOGOUT ---------------- */}

  const navigate = useNavigate();

  const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  navigate("/"); // or /login
  };

  {/* ---------------- THEME TOGGLE ---------------- */}
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

    useEffect(() => {
      if (dark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }, [dark]);
    
  return (
    <div className="min-h-screen w-full flex flex-col font-poppins
    bg-[#faf7f2] dark:bg-gray-900">

      {/* Navbar */}
      <nav className="w-full px-8 py-4 flex items-center justify-between
      bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center
          bg-gray-100 dark:bg-gray-700">
            <span className="text-2xl">⚡</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Admin Dashboard
          </h1>
        </div>

        <div className="flex items-center gap-4">

          <Link
            to="/access-level"
            className="px-4 py-2 rounded-lg font-medium border transition
            text-gray-700 dark:text-gray-200
            border-gray-200 dark:border-gray-600
            hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            AccessLevel
          </Link>

          {/* <Link
            to="/leads"
            className="px-4 py-2 rounded-lg font-medium border transition
            text-gray-700 dark:text-gray-200
            border-gray-200 dark:border-gray-600
            hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            ViewLeads
          </Link> */}

          <button
            onClick={handleLogout}
            className="px-4 py-2 font-bold rounded-lg transition
              bg-red-400 text-white
              hover:bg-red-500"
          >
            LogOut
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-2 border rounded-lg transition
            bg-white dark:bg-gray-700
            text-gray-700 dark:text-gray-200
            border-gray-200 dark:border-gray-600"
          >
            {dark ? "☀️" : "🌙"}
          </button>

        </div>
      </nav>

      {/* Main */}
      {/* <main className="flex-1 overflow-auto p-8">
        <div className="max-w-6xl mx-auto"> */}

          {/* Welcome */}
          {/* <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4
            text-gray-800 dark:text-gray-100">
              Welcome to your CRM Admin Panel
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Your central hub for managing customer relationships and business operations
            </p>
          </div> */}

          {/* Icon */}
          {/* <div className="flex justify-center mb-16">
            <div className="w-32 h-32 rounded-full flex items-center justify-center
            bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
              <span className="text-7xl">🎯</span>
            </div>
          </div> */}

          {/* Info Section */}
          {/* <div className="bg-white dark:bg-gray-800 rounded-2xl p-10
          shadow-md border border-gray-200 dark:border-gray-700 mb-8">

            <h3 className="text-3xl font-bold mb-6 text-center
            text-gray-800 dark:text-gray-100">
              Your CRM Command Center
            </h3>

            <p className="text-lg text-center leading-relaxed mb-8
            text-gray-600 dark:text-gray-300">
              Manage your customer relationships, track interactions, analyze data,
              and grow your business all from one powerful platform.
            </p> */}

            {/* Features */}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { icon: "👥", title: "Customer Management", desc: "Organize customer info" },
                { icon: "📊", title: "Analytics & Reports", desc: "Powerful insights" },
                { icon: "🔒", title: "Secure & Reliable", desc: "Data protection" },
              ].map((f, i) => (
                <div
                  key={i}
                  className="text-center p-6 rounded-xl transition
                  bg-gray-50 dark:bg-gray-700
                  border border-gray-200 dark:border-gray-600
                  hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <div className="text-5xl mb-4">{f.icon}</div>
                  <h4 className="text-xl font-semibold mb-2
                  text-gray-800 dark:text-gray-100">
                    {f.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">{f.desc}</p>
                </div>
              ))}
            </div>
          </div> */}

          {/* Bottom Cards */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "✨", title: "Streamlined Workflow", desc: "Automate tasks." },
              { icon: "🚀", title: "Scale Your Business", desc: "Grow easily." },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-xl p-8 shadow-sm border
                bg-white dark:bg-gray-800
                border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{card.icon}</span>
                  <h4 className="text-2xl font-semibold
                  text-gray-800 dark:text-gray-100">
                    {card.title}
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {card.desc}
                </p>
              </div>
            ))}
          </div> 

        </div>
      </main>*/}

      <main className="flex-1 p-8">

        {/* ✅ Keep this line as you requested */}
        <h2 className="text-3xl font-bold mb-6
          text-gray-800 dark:text-gray-100 text-center" >
          Welcome to your CRM Admin Panel
        </h2>

        {/* ✅ Leads directly inside dashboard */}
        <Leads />

      </main>




    </div>
  );
};

export default AdminDash;
