import { useState, useEffect } from 'react';
import axios from 'axios';

const PastAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Replace with actual user email from authentication context/state
  const userEmail = 'test3@gmail.com'; // TODO: Get from auth context
  const API_URL = 'http://localhost:4000/api';

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      setLoading(true);
      setError('');
      
      // Fetch appointments by email
      const response = await axios.get(`${API_URL}/appointments/email/${userEmail}`);
      
      if (response.data.success) {
        const allAppointments = response.data.data;
        
        // Filter for past appointments (Completed, Cancelled, or past date)
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        const past = allAppointments.filter(app => {
          const appointmentDate = new Date(app.appointmentDate);
          appointmentDate.setHours(0, 0, 0, 0);
          
          return (
            app.status === 'Completed' || 
            app.status === 'Cancelled' ||
            appointmentDate < today
          );
        });
        
        // Sort by date (most recent first)
        past.sort((a, b) => new Date(b.appointmentDate) - new Date(a.appointmentDate));
        
        setAppointments(past);
      }
    } catch (err) {
      console.error('Error loading appointments:', err);
      setError('Failed to load appointments. Please try again.');
    } finally {
      setLoading(false);
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

  const handleRateDoctor = (appointmentId) => {
    // TODO: Implement rating functionality
    alert('Rating functionality coming soon!');
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
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Past Appointments</h2>
      
      {appointments.map((appointment) => (
        <div
          key={appointment._id}
          className="bg-gray-50 border-2 border-gray-300 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
        >
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="space-y-3 flex-1">
              {/* Date and Time */}
              <div className="flex flex-wrap items-center gap-4 mb-3">
                <span className="text-2xl">📅</span>
                <span className="font-bold text-lg text-gray-700">
                  {formatDate(appointment.appointmentDate)}
                </span>
                <span className="text-2xl">🕐</span>
                <span className="font-bold text-lg text-gray-700">
                  {appointment.appointmentTime}
                </span>
              </div>

              {/* Appointment Details */}
              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-semibold">Appointment ID:</span> {appointment._id?.slice(-8).toUpperCase()}
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
                    appointment.status === 'Completed' 
                      ? 'bg-blue-100 text-blue-700' :
                    appointment.status === 'Cancelled' 
                      ? 'bg-red-100 text-red-700' 
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {appointment.status}
                  </span>
                </p>
              </div>
            </div>

            {/* Rate Doctor Button - Only for completed appointments */}
            {appointment.status === 'Completed' && (
              <div className="w-full md:w-auto">
                <button 
                  onClick={() => handleRateDoctor(appointment._id)}
                  className="w-full md:w-auto px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-800 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  ⭐ Rate Doctor
                </button>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Empty state */}
      {appointments.length === 0 && (
        <div className="text-center py-16 bg-gray-50 rounded-xl">
          <div className="text-6xl mb-4">📋</div>
          <p className="text-gray-500 text-lg font-semibold">No past appointments found</p>
          <p className="text-gray-400 text-sm mt-2">Your completed or cancelled appointments will appear here</p>
        </div>
      )}
    </div>
  );
};

export default PastAppointments;