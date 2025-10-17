const PatientDetailsModal = ({ isOpen, onClose, patient }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-blue-50 rounded-3xl shadow-2xl max-w-3xl w-full mx-4 p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          ×
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-white px-8 py-3 rounded-full">
            <h2 className="text-blue-500 font-semibold text-lg">Patient's Information</h2>
          </div>
        </div>

        {/* Patient Details */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-6 mb-8">
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <span className="font-semibold text-gray-800">Appointment ID:</span>
              <span className="ml-4 text-gray-700">{patient.appointmentId}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-800">Patient Name:</span>
              <span className="ml-4 text-gray-700">{patient.name}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-800">Age:</span>
              <span className="ml-4 text-gray-700">{patient.age}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-800">Gender:</span>
              <span className="ml-4 text-gray-700">{patient.gender === 'M' ? 'Male' : 'Female'}</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <span className="font-semibold text-gray-800">Contact No:</span>
              <span className="ml-4 text-gray-700">{patient.contactNo}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-800">Address:</span>
              <span className="ml-4 text-gray-700">{patient.address}</span>
            </div>
          </div>
        </div>

        {/* Notes Section */}
        <div className="mb-8">
          <div className="font-semibold text-gray-800 mb-2">Notes:</div>
          <textarea
            className="w-full h-32 p-4 bg-white rounded-lg border border-gray-200 resize-none"
            placeholder="Add notes here..."
            defaultValue={patient.notes || ''}
          />
        </div>

        {/* Status Toggle */}
        <div className="flex items-center gap-4">
          <span className="font-semibold text-gray-800">Status</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              defaultChecked={patient.status === 'Completed'}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
          </label>
          <span className="text-gray-700">{patient.status}</span>
        </div>
      </div>
    </div>
  );
};

export default PatientDetailsModal;