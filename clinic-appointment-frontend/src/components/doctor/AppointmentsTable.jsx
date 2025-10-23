const AppointmentsTable = ({ onPatientClick }) => {
  // Hardcoded appointments data
  const appointments = [
    {
      id: 1,
      appointmentId: '001',
      name: 'Hansi Dias',
      age: 31,
      gender: 'F',
      contactNo: '712345678',
      address: '11/A',
      status: 'Completed',
      notes: ''
    },
    {
      id: 2,
      appointmentId: '002',
      name: 'I.M. Perera',
      age: 44,
      gender: 'M',
      contactNo: '7023415676',
      address: '33/B',
      status: 'Completed',
      notes: ''
    },
    {
      id: 3,
      appointmentId: '003',
      name: 'K. De Silva',
      age: 20,
      gender: 'F',
      contactNo: '7711233555',
      address: 'Wisdom Rd',
      status: 'Completed',
      notes: ''
    },
    {
      id: 4,
      appointmentId: '004',
      name: 'Nimal Fernando',
      age: 52,
      gender: 'M',
      contactNo: '7600100233',
      address: 'Ferry Rd',
      status: 'Completed',
      notes: ''
    },
    {
      id: 5,
      appointmentId: '005',
      name: 'Ishan Liyanage',
      age: 26,
      gender: 'M',
      contactNo: '7633360088',
      address: '23/A',
      status: 'Completed',
      notes: ''
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Appointment ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Age
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Gender
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Contact
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Address
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-blue-50 divide-y divide-blue-200">
            {appointments.map((appointment, index) => (
              <tr key={appointment.id} className="hover:bg-blue-100 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-700">{index + 1}</td>
                <td 
                  className="px-6 py-4 text-sm text-gray-700 cursor-pointer hover:text-blue-600 hover:underline font-medium"
                  onClick={() => onPatientClick(appointment)}
                >
                  {appointment.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">{appointment.age}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{appointment.gender}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{appointment.contactNo}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{appointment.address}</td>
                <td className="px-6 py-4 text-sm">
                  <span className="text-blue-600 font-semibold">{appointment.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="bg-white px-6 py-4 flex items-center justify-center gap-4 border-t border-gray-200">
        <button className="text-blue-500 hover:text-blue-700 font-medium">
          Pre
        </button>
        <span className="text-gray-700">1</span>
        <span className="text-gray-700">2</span>
        <span className="text-gray-700">...</span>
        <button className="text-blue-500 hover:text-blue-700 font-medium">
          Next
        </button>
      </div>
    </div>
  );
};

export default AppointmentsTable;