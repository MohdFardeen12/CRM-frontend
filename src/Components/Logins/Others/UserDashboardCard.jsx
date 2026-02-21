import React from "react";

const UserDashboardCard = ({ icon, title, description, animation }) => {
  return (
    <div
      className={`${animation} text-center p-6 rounded-xl
      bg-linear-to-br from-emerald-500/10 to-green-400/10
      transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03]`}
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h4 className="text-xl font-semibold mb-2 text-emerald-600">
        {title}
      </h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default UserDashboardCard 
