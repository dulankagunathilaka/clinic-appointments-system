import { useState, useEffect } from 'react';
import { fetchAppointmentsByEmail } from '../services/appointmentService';

const PastAppointments = () => {
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
      
      // Filter for past appointments (Completed or Cancelled, or past date)
      const past = allAppointments.filter(app => 
        app.status === 'Completed' || 
        app.status === 'Cancelled' ||
        new Date(app.appointmentDate) < new Date()
      );
      
      setAppointments(past);
    } catch (err) {
      setError('Failed to load appointments. Please try again.');
      console.error('Error loading appointments:', err);
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
    <div className="space-y-4 max-w-4xl mx-auto">
      {appointments.map((appointment) => (
        <div
          key={appointment._id}
          className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
        >
          <div className="flex justify-between items-start">
            <div className="space-y-3">
              {/* Date and Time - Less emphasized */}
              <div className="text-gray-700 font-semibold text-lg">
                {formatDate(appointment.appointmentDate)} • {appointment.appointmentTime}
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
                    appointment.status === 'Completed' ? 'text-blue-600' : 
                    appointment.status === 'Cancelled' ? 'text-red-600' : 'text-gray-600'
                  }`}>
                    {appointment.status}
                  </span>
                </p>
              </div>
            </div>

            {/* Rate Doctor Button - Only show for completed appointments */}
            {appointment.status === 'Completed' && (
              <div>
                <button 
                  onClick={() => handleRateDoctor(appointment._id)}
                  className="px-8 py-2.5 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-800 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Rate Doctor
                </button>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Empty state */}
      {appointments.length === 0 && (
        <div className="text-center py-16 text-gray-500 text-lg">
          No past appointments found.
        </div>
      )}
    </div>
  );
};

export default PastAppointments;