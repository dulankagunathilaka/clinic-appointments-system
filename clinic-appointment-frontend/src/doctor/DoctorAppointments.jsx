import React, { useEffect, useState } from "react";
import { fetchAppointmentsByDoctor } from "../api/appointments";

const DoctorAppointments = ({ doctorId }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const loadAppointments = async () => {
      const data = await fetchAppointmentsByDoctor(doctorId);
      setAppointments(data);
    };
    loadAppointments();
  }, [doctorId]);

  return (
    <div>
      <h2>My Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <ul>
          {appointments.map((a) => (
            <li key={a._id}>
              {new Date(a.appointmentDate).toLocaleDateString()} - {a.appointmentTime} with {a.patientId?.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DoctorAppointments;
