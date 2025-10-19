import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarCheck,
  UserCircle,
  LogOut,
} from "lucide-react";
import mediTrust from "../../assets/meditrust.png";

const DoctorSidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={18} />,
      path: "/doctor/dashboard",
    },
    {
      name: "Appointments",
      icon: <CalendarCheck size={18} />,
      path: "/doctor/appointments",
    },
    {
      name: "Profile",
      icon: <UserCircle size={18} />,
      path: "/doctor/profile",
    },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="w-64 bg-[#E7F0FA] p-5 flex flex-col shadow-lg h-full">
      {/* Logo */}
      <div className="flex justify-center mb-10">
        <img src={mediTrust} alt="MediTrust Logo" className="w-20 h-20" />
      </div>

      {/* Menu */}
      <ul className="space-y-2">
        {menuItems.map((item, i) => (
          <li key={i} className="relative">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-l-xl pr-6 font-medium transition-all duration-300 relative ${
                  isActive
                    ? "bg-[#D6E4FF] text-[#1E40AF]"
                    : "text-gray-700 hover:bg-[#D6E4FF] hover:text-[#1E40AF]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="flex items-center gap-3 w-full">
                    {item.icon}
                    <span>{item.name}</span>
                  </span>

                  {/* Triangle Indicator */}
                  {isActive && (
                    <span
                      className="absolute right-[-10px] top-1/2 -translate-y-1/2 
                      w-0 h-0 border-t-[10px] border-t-transparent 
                      border-b-[10px] border-b-transparent 
                      border-l-[10px] border-l-[#D6E4FF]"
                    ></span>
                  )}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Logout Button at Bottom */}
      <div className="mt-auto mb-5">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 p-3 rounded-l-xl pr-6 font-medium text-red-600 hover:bg-red-100 transition-all duration-300 w-full"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default DoctorSidebar;
