import { useState, useEffect } from 'react';
import axios from 'axios';

const UpcomingAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const API_URL = 'http://localhost:4000/api';

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      setLoading(true);
      setError('');
      
      // Fetch ALL appointments from database
      const response = await axios.get(`${API_URL}/appointments`);
      
      if (response.data.success) {
        const allAppointments = response.data.data;
        
        // Filter for upcoming appointments (Pending or Confirmed status)
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        const upcoming = allAppointments.filter(app => {
          const appointmentDate = new Date(app.appointmentDate);
          appointmentDate.setHours(0, 0, 0, 0);
          
          return (
            ['Pending', 'Confirmed'].includes(app.status) &&
            appointmentDate >= today
          );
        });
        
        // Sort by date (earliest first)
        upcoming.sort((a, b) => new Date(a.appointmentDate) - new Date(b.appointmentDate));
        
        setAppointments(upcoming);
      }
    } catch (err) {
      console.error('Error loading appointments:', err);
      setError('Failed to load appointments. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async (appointmentId) => {
    if (!window.confirm('Are you sure you want to cancel this appointment?')) {
      return;
    }

    try {
      // Update appointment status to Cancelled
      const response = await axios.patch(
        `${API_URL}/appointments/${appointmentId}/status`,
        { status: 'Cancelled' }
      );

      if (response.data.success) {
        alert('Appointment cancelled successfully!');
        // Reload appointments
        await loadAppointments();
      }
    } catch (err) {
      console.error('Error cancelling appointment:', err);
      alert('Failed to cancel appointment. Please try again.');
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
    <div className="space-y-4 max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Upcoming Appointments</h2>
      
      {appointments.map((appointment) => (
        <div
          key={appointment._id}
          className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
        >
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="space-y-3 flex-1">
              {/* Date and Time */}
              <div className="flex flex-wrap items-center gap-4 mb-3">
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
                  <span className="font-semibold">Patient:</span> {appointment.patientName}
                </p>
                <p>
                  <span className="font-semibold">Email:</span> {appointment.email}
                </p>
                <p>
                  <span className="font-semibold">Doctor:</span> {appointment.doctorName}
                </p>
                <p>
                  <span className="font-semibold">Reason:</span> {appointment.reasonForVisit}
                </p>
                <p>
                  <span className="font-semibold">Status:</span>{' '}
                  <span className={`font-bold px-2 py-1 rounded ${
                    appointment.status === 'Confirmed' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {appointment.status}
                  </span>
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex md:flex-col gap-3 w-full md:w-auto">
              <button 
                onClick={() => alert('Reschedule functionality coming soon!')}
                className="flex-1 md:flex-none px-6 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Reschedule
              </button>
              <button 
                onClick={() => handleCancel(appointment._id)}
                className="flex-1 md:flex-none px-6 py-2.5 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Empty state */}
      {appointments.length === 0 && (
        <div className="text-center py-16 bg-gray-50 rounded-xl">
          <div className="text-6xl mb-4">📅</div>
          <p className="text-gray-500 text-lg font-semibold">No upcoming appointments found</p>
          <p className="text-gray-400 text-sm mt-2">Scheduled appointments will appear here</p>
        </div>
      )}
    </div>
  );
};

export default UpcomingAppointments;