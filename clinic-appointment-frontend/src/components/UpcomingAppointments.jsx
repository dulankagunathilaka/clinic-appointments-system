import { useState, useEffect } from 'react';
import { fetchAppointmentsByEmail, updateAppointmentStatus } from '../services/appointmentService';

const UpcomingAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Replace with actual user email from authentication context/state
  const userEmail = 'john@example.com'; // TODO: Get from auth context

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      setLoading(true);
      const allAppointments = await fetchAppointmentsByEmail(userEmail);
      
      // Filter for upcoming appointments (Pending or Confirmed status)
      const upcoming = allAppointments.filter(app => 
        ['Pending', 'Confirmed'].includes(app.status) &&
        new Date(app.appointmentDate) >= new Date()
      );
      
      setAppointments(upcoming);
    } catch (err) {
      setError('Failed to load appointments. Please try again.');
      console.error('Error loading appointments:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async (appointmentId) => {
    if (!window.confirm('Are you sure you want to cancel this appointment?')) {
      return;
    }

    try {
      await updateAppointmentStatus(appointmentId, 'Cancelled');
      // Reload appointments
      await loadAppointments();
      alert('Appointment cancelled successfully!');
    } catch (err) {
      alert('Failed to cancel appointment. Please try again.');
      console.error('Error cancelling appointment:', err);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  if (loading) {
    return (
      <div className="text-center py-16">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <p className="mt-4 text-gray-600">Loading appointments...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-red-500 text-lg">{error}</p>
        <button 
          onClick={loadAppointments}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {appointments.map((appointment) => (
        <div
          key={appointment._id}
          className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
        >
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              {/* Date and Time */}
              <div className="flex items-center gap-4 mb-3">
                <span className="text-2xl">📅</span>
                <span className="font-bold text-xl text-gray-800">
                  {formatDate(appointment.appointmentDate)}
                </span>
                <span className="text-2xl">🕐</span>
                <span className="font-bold text-xl text-gray-800">
                  {appointment.appointmentTime}
                </span>
              </div>

              {/* Appointment Details */}
              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-semibold">Appointment ID :</span> {appointment._id?.slice(-6)}
                </p>
                <p>
                  <span className="font-semibold">With :</span> {appointment.doctorName}
                </p>
                <p>
                  <span className="font-semibold">Reason :</span> {appointment.reasonForVisit}
                </p>
                <p>
                  <span className="font-semibold">Status :</span>{' '}
                  <span className={`font-bold ${
                    appointment.status === 'Confirmed' ? 'text-green-600' : 'text-yellow-600'
                  }`}>
                    {appointment.status}
                  </span>
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => alert('Reschedule functionality coming soon!')}
                className="px-8 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Reschedule
              </button>
              <button 
                onClick={() => handleCancel(appointment._id)}
                className="px-8 py-2.5 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Empty state */}
      {appointments.length === 0 && (
        <div className="text-center py-16 text-gray-500 text-lg">
          No upcoming appointments found.
        </div>
      )}
    </div>
  );
};

export default UpcomingAppointments;