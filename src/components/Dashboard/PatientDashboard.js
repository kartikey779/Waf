// src/components/Dashboard/PatientDashboard.js
import React from 'react';
import '../../styles/Dashboard.css';

const PatientDashboard = () => {
  // Sample data for demonstration
  const appointments = [
    { id: 1, doctorName: 'Dr. Smith', time: '10:00 AM', status: 'Confirmed' },
    { id: 2, doctorName: 'Dr. Brown', time: '2:00 PM', status: 'Pending' },
  ];

  const recentActivities = [
    { id: 1, activity: 'Checked blood pressure' },
    { id: 2, activity: 'Completed follow-up survey' },
  ];

  return (
    <div className="dashboard">
      <h1>Patient Dashboard</h1>
      <div className="section">
        <h2>Upcoming Appointments</h2>
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id}>
              <p>Doctor: {appointment.doctorName}</p>
              <p>Time: {appointment.time}</p>
              <p>Status: {appointment.status}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h2>Recent Activities</h2>
        <ul>
          {recentActivities.map((activity) => (
            <li key={activity.id}>
              <p>{activity.activity}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PatientDashboard;
