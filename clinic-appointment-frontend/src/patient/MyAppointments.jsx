import React, { useEffect, useState } from "react";
import { fetchAppointmentsByPatient } from "../api/appointments";

const MyAppointments = ({ patientId }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const loadAppointments = async () => {
      const data = await fetchAppointmentsByPatient(patientId);
      setAppointments(data);
    };
    loadAppointments();
  }, [patientId]);

  return (
    <div>
      <h2>My Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <ul>
          {appointments.map((a) => (
            <li key={a._id}>
              {new Date(a.appointmentDate).toLocaleDateString()} - {a.appointmentTime} with Dr. {a.doctorName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyAppointments;
