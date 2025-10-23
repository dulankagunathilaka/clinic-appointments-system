import { FaUser, FaCalendarAlt, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const menuItems = [
    { id: 'profile', label: 'My Profile', icon: FaUser, path: '/PatientProfile' },
    { id: 'appointments', label: 'My Appointments', icon: FaCalendarAlt, path: '/MyAppointments' },
    { id: 'settings', label: 'Settings', icon: FaCog, path: null },
  ];

  const handleMenuClick = (item) => {
    setActiveTab(item.id);
    if (item.path) {
      navigate(item.path);
    }
  };

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <div className="w-64 bg-gradient-to-b from-blue-200 via-blue-100 to-indigo-100 min-h-screen p-6 flex flex-col shadow-lg">
      {/* Logo Section */}
      <div className="mb-8 flex justify-center">
        <img 
          src="/src/assets/MediTrust.png" 
          alt="MediTrust Logo" 
          className="h-20 w-auto"
        />
      </div>

      {/* Divider */}
      <div className="h-px bg-white/50 mb-6"></div>

      {/* Menu Items */}
      <nav className="flex-1 space-y-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item)}
              className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-white text-blue-600 shadow-lg scale-105 font-bold'
                  : 'text-gray-700 hover:bg-white/40 hover:translate-x-1'
              }`}
            >
              <Icon size={22} />
              <span className="text-sm">{item.label}</span>
              {isActive && (
                <span className="ml-auto text-blue-600 text-lg">▶</span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Divider */}
      <div className="h-px bg-white/50 mb-4"></div>

      {/* Logout Button */}
      <button 
        onClick={handleLogout}
        className="flex items-center gap-3 px-5 py-4 text-gray-700 hover:bg-white/40 rounded-xl transition-all duration-200 hover:translate-x-1"
      >
        <FaSignOutAlt size={22} />
        <span className="text-sm font-medium">Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;