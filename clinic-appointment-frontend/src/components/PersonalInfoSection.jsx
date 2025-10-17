import { useState } from 'react';
import { MdEmail, MdLocationOn, MdPerson, MdCalendarToday, MdPhone } from 'react-icons/md';

const PersonalInfoSection = ({ data, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(data);

  const handleSave = () => {
    onSave(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(data);
    setIsEditing(false);
  };

  const InfoRow = ({ icon: Icon, label, value, field }) => (
    <div className="flex items-center gap-4 py-4 border-b border-blue-100 last:border-0">
      <div className="bg-gradient-to-br from-blue-400 to-indigo-400 p-2.5 rounded-lg shadow-sm">
        <Icon size={20} className="text-white" />
      </div>
      <span className="text-gray-700 font-semibold w-40 text-sm">{label}</span>
      {isEditing ? (
        <input
          type={field === 'dob' ? 'date' : 'text'}
          value={formData[field]}
          onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
          className="flex-1 px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
        />
      ) : (
        <span className="text-gray-800 flex-1 font-medium">{value}</span>
      )}
    </div>
  );

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-blue-100">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-2xl font-bold text-blue-600">
            Personal Info
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mt-2"></div>
        </div>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all shadow-md hover:shadow-lg text-sm font-semibold transform hover:scale-105"
          >
            Edit Information
          </button>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={handleCancel}
              className="px-5 py-2.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all text-sm font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all shadow-md hover:shadow-lg text-sm font-semibold transform hover:scale-105"
            >
              Save
            </button>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <InfoRow icon={MdEmail} label="Email" value={formData.email} field="email" />
        <InfoRow icon={MdLocationOn} label="Address" value={formData.address} field="address" />
        <InfoRow icon={MdPerson} label="Gender" value={formData.gender} field="gender" />
        <InfoRow icon={MdCalendarToday} label="DOB" value={formData.dob} field="dob" />
        <InfoRow icon={MdPhone} label="Contact Number" value={formData.contactNumber} field="contactNumber" />
      </div>
    </div>
  );
};

export default PersonalInfoSection;