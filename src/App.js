// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import 'bootstrap/dist/css/bootstrap.css';
import SignupPage from './pages/SignupPage';
import DoctorDashboard from './components/Dashboard/DoctorDashboard';
import PatientDashboard from './components/Dashboard/PatientDashboard';
import AdCampaignForm from './components/AdCampaign/AdCampaignForm';
import AdCampaignList from './components/AdCampaign/AdCampaignList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/ads" element={<AdCampaignForm/>} />
        <Route path="/adslist" element={<AdCampaignList/>} />
        <Route path="/dashboard/doctor" element={<DoctorDashboard />} />
        <Route path="/dashboard/patient" element={<PatientDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
