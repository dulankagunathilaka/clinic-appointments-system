const UpcomingAppointments = () => {
  // Hardcoded upcoming appointments data
  const upcomingAppointments = [
    {
      id: 1,
      date: 'Oct 11, 2025',
      time: '9.00 AM',
      appointmentId: '01',
      doctor: 'Dr. Jessica Smith',
      specialty: 'Pediatrician',
      roomNo: '18',
      status: 'Confirmed'
    },
    {
      id: 2,
      date: 'Oct 20, 2025',
      time: '7.00 PM',
      appointmentId: '22',
      doctor: 'Dr. R. Silva',
      specialty: 'Eye Surgeon',
      roomNo: '47',
      status: 'Confirmed'
    }
  ];

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {upcomingAppointments.map((appointment) => (
        <div
          key={appointment.id}
          className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
        >
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              {/* Date and Time */}
              <div className="flex items-center gap-4 mb-3">
                <span className="text-2xl">📅</span>
                <span className="font-bold text-xl text-gray-800">
                  {appointment.date}
                </span>
                <span className="text-2xl">🕐</span>
                <span className="font-bold text-xl text-gray-800">
                  {appointment.time}
                </span>
              </div>

              {/* Appointment Details */}
              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-semibold">Appointment ID :</span> {appointment.appointmentId}
                </p>
                <p>
                  <span className="font-semibold">With :</span> {appointment.doctor} ({appointment.specialty})
                </p>
                <p>
                  <span className="font-semibold">Room No :</span> {appointment.roomNo}
                </p>
                <p>
                  <span className="font-semibold">Status :</span>{' '}
                  <span className="font-bold text-green-600">
                    {appointment.status}
                  </span>
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <button className="px-8 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg transform hover:scale-105">
                Reschedule
              </button>
              <button className="px-8 py-2.5 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg transform hover:scale-105">
                Cancel
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Empty state */}
      {upcomingAppointments.length === 0 && (
        <div className="text-center py-16 text-gray-500 text-lg">
          No upcoming appointments found.
        </div>
      )}
    </div>
  );
};

export default UpcomingAppointments;