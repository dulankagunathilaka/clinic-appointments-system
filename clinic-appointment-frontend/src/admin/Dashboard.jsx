import React from "react";
import {
  Handshake,
  CheckCircle,
  MessageSquare,
  User,
  Stethoscope,
  BedDouble,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

const Dashboard = () => {
  const cards = [
    { title: "Total Appointments", value: 550, sub: "24 Today", icon: <Handshake size={28} />, color: "from-blue-200 to-blue-400", trend: "up" },
    { title: "Done Appointments", value: 444, sub: "12 Today", icon: <CheckCircle size={28} />, color: "from-green-200 to-green-400", trend: "up" },
    { title: "Pending Appointments", value: 20, sub: "10 Today", icon: <MessageSquare size={28} />, color: "from-teal-100 to-teal-300", trend: "down" },
    { title: "Total Doctors", value: 100, sub: "", icon: <User size={28} />, color: "from-cyan-100 to-cyan-300", trend: "up" },
    { title: "Active Doctors", value: 56, sub: "", icon: <Stethoscope size={28} />, color: "from-indigo-200 to-indigo-400", trend: "up" },
    { title: "Total Patients", value: 10, sub: "", icon: <BedDouble size={28} />, color: "from-pink-100 to-pink-300", trend: "up" },
  ];

  return (
    <div className="flex-1 flex flex-col items-center p-6 sm:p-10 bg-gray-50 min-h-screen">
      
      {/* Modern Clinic Header */}
      <div className="relative w-full max-w-7xl mb-16">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl shadow-xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
          
          {/* Text Section */}
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-3">
              Welcome to MediTrust
            </h1>
            <p className="text-md sm:text-lg text-blue-700 mb-2">
              Your Clinic Dashboard ► Overview of Appointments & Patients
            </p>
            <p className="text-sm text-blue-500">
              Keep track of your clinic’s daily operations and patient activity.
            </p>
          </div>

          {/* Illustration / Icon */}
          <div className="hidden sm:flex flex-1 justify-end relative">
            <div className="bg-white p-6 rounded-full shadow-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6 4a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            {/* Soft Circle Background */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-100 rounded-full opacity-50 blur-2xl"></div>
            <div className="absolute -right-5 -bottom-5 w-20 h-20 bg-blue-200 rounded-full opacity-30 blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br ${card.color} rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between cursor-pointer hover:scale-105`}
          >
            <div className="flex items-center mb-4">
              <div className="bg-white p-4 rounded-full shadow flex items-center justify-center mr-4">
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-700">{card.title}</h3>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-4xl font-extrabold text-gray-800">{card.value}</p>
              {card.sub && <span className="text-sm text-gray-600 font-medium">{card.sub}</span>}
            </div>
            {/* Trend Indicator */}
            <div className="mt-2 flex items-center text-sm font-medium text-gray-700">
              {card.trend === "up" ? (
                <ArrowUpRight className="text-green-500 mr-1" size={16} />
              ) : (
                <ArrowDownRight className="text-red-500 mr-1" size={16} />
              )}
              {card.trend === "up" ? "Increasing" : "Decreasing"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
