import React from 'react'
import UserDashboardCard  from '../Others/UserDashboardCard';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Leads from '../Others/Leads';
import { useState, useEffect } from 'react';

const UserDash = () => {

  {/* ---------------- LOGOUT ---------------- */}
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
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
    <div className="min-h-screen w-full flex flex-col font-outfit
      bg-[#faf7f2] dark:bg-gray-900 transition-colors">

      {/* Navbar */}
      <nav className="w-full px-8 py-4 flex items-center justify-between
        bg-white dark:bg-gray-800
        border-b border-gray-200 dark:border-gray-700
        shadow-sm">

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center
            bg-gray-100 dark:bg-gray-700">
            <span className="text-2xl">👤</span>
          </div>

          <h1 className="text-2xl font-bold
            text-gray-800 dark:text-gray-100">
            User Dashboard
          </h1>
        </div>

        <div className="flex items-center gap-4">

          <Link
            to="/create-opportunity"
            className="px-4 py-2 rounded-lg font-bold transition
              text-gray-800 dark:text-gray-200
              border border-gray-200 dark:border-gray-600
              hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            CreateOpportunity
          </Link>

          {/* <Link
            to="/leads"
            className="px-4 py-2 rounded-lg transition
              text-gray-800 dark:text-gray-200
              border border-gray-200 dark:border-gray-600
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
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              Welcome to your CRM User Panel
            </h2>
            <p className="text-xl text-gray-600">
              Manage your contacts, tasks, and activities with ease
            </p>
          </div> */}

          {/* Icons */}
          {/* <div className="flex justify-center gap-8 mb-16">
            {[ "📋", "📞", "✅" ].map((icon, i) => (
              <div key={i} className="w-28 h-28 rounded-full flex items-center justify-center bg-white border border-gray-200 shadow-sm">
                <span className="text-6xl">{icon}</span>
              </div>
            ))}
          </div> */}

          {/* Info Section */}
          {/* <div className="bg-white rounded-2xl p-10 shadow-md border border-gray-200 mb-8">
            <h3 className="text-3xl font-bold mb-6 text-center text-gray-800">
              Your Personal CRM Workspace
            </h3>

            <p className="text-lg text-gray-600 text-center leading-relaxed mb-8">
              Access your contacts, manage tasks, track your activities,
              and stay organized in one place.
            </p> */}

            {/* Feature Cards */}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <UserDashboardCard
                icon="📇"
                title="Contact Directory"
                description="View and manage all your customer contacts in one organized place"
              />
              <UserDashboardCard
                icon="📝"
                title="Task Management"
                description="Keep track of your to-dos and never miss an important task"
              />
              <UserDashboardCard
                icon="📈"
                title="Activity Tracking"
                description="Monitor your interactions and track your productivity"
              />
            </div>
          </div> */}

          {/* Bottom Cards */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "💼",
                title: "Stay Organized",
                desc: "Keep all your customer information and follow-ups in one place.",
              },
              {
                icon: "🎯",
                title: "Boost Productivity",
                desc: "Prioritize tasks and manage your time more effectively.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl p-8 bg-white border border-gray-200 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{item.icon}</span>
                  <h4 className="text-2xl font-semibold text-gray-800">
                    {item.title}
                  </h4>
                </div>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

        </div> 
      </main> */}


      <main className="flex-1 p-8">

        {/* ✅ Keep this line as you requested */}
        <h2 className="text-3xl font-bold mb-6 text-center
          text-gray-800 dark:text-gray-100">
          Welcome to your CRM User Panel
        </h2>

        {/* ✅ Leads directly inside dashboard */}
        <Leads />

      </main>

    </div>
  );
};

export default UserDash;
