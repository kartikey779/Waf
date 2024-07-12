// src/components/Dashboard/DoctorDashboard.js
import React from 'react';
import '../../styles/Dashboard.css';

const DoctorDashboard = () => {
  // Sample data for demonstration
  const appointments = [
    { id: 1, patientName: 'John Doe', time: '10:00 AM', status: 'Confirmed' },
    { id: 2, patientName: 'Jane Smith', time: '11:00 AM', status: 'Pending' },
  ];

  const recentActivities = [
    { id: 1, activity: 'Reviewed lab results for John Doe' },
    { id: 2, activity: 'Scheduled follow-up for Jane Smith' },
  ];

  return (
    <div className="dashboard">
      <h1>Doctor Dashboard</h1>
      <div className="section">
        <h2>Upcoming Appointments</h2>
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id}>
              <p>Patient: {appointment.patientName}</p>
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

export default DoctorDashboard;
