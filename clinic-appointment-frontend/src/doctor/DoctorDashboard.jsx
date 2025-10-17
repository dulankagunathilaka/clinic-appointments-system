import React from "react";
import {
  Handshake,
  CheckCircle,
  MessageSquare,
  User,
  Stethoscope,
  BedDouble,
} from "lucide-react";

const DoctorDashboard = () => {
  const cards = [
    {
      title: "Total Appointments",
      value: 550,
      sub: "24 Today",
      icon: <Handshake size={36} strokeWidth={1.8} />,
      color: "from-[#C8D9FF] to-[#E3ECFF]",
    },
    {
      title: "Done Appointments",
      value: 444,
      sub: "12 Today",
      icon: <CheckCircle size={36} strokeWidth={1.8} />,
      color: "from-[#C8FFD4] to-[#E3FFEC]",
    },
    {
      title: "Pending Appointments",
      value: 20,
      sub: "10 Today",
      icon: <MessageSquare size={36} strokeWidth={1.8} />,
      color: "from-[#FFE8C8] to-[#FFF6E3]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-8">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white rounded-2xl p-6 mb-10 shadow-md">
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <p className="text-sm text-blue-100 mt-1">
          Doctor ► Dashboard Overview
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br ${card.color} rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-7 flex flex-col items-center text-center hover:scale-105 cursor-pointer`}
          >
            <div className="mb-4 text-[#1E40AF] bg-white rounded-full p-4 shadow-md">
              {card.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-1">
              {card.title}
            </h3>
            <p className="text-5xl font-extrabold text-[#1E3A8A] tracking-tight">
              {card.value}
            </p>
            {card.sub && (
              <span className="text-sm mt-2 text-gray-600 font-medium">
                {card.sub}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorDashboard;
