import profileImg from '../assets/profile_img.png';

const ProfileHeader = ({ name, avatarUrl }) => {
  return (
    <div className="flex flex-col items-center mb-10">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">
        My Profile
      </h1>
      
      <div className="relative mb-6">
        {/* Outer glow ring */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-indigo-300 rounded-full blur-lg opacity-50"></div>
        
        {/* Profile image container */}
        <div className="relative w-36 h-36 rounded-full overflow-hidden bg-gradient-to-br from-blue-300 via-blue-200 to-indigo-200 flex items-center justify-center shadow-2xl border-4 border-white ring-4 ring-blue-100">
          <img 
            src={avatarUrl || profileImg} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-1">{name}</h2>
     </div>
  );
};

export default ProfileHeader;