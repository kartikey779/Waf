// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import RootLayout from './components/RootLayout/RootLayout';
import Home from './components/Home/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DoctorDashboard from './components/Dashboard/DoctorDashboard';
import PatientDashboard from './components/Dashboard/PatientDashboard';
import AdCampaignForm from './components/AdCampaign/AdCampaignForm';
import AdCampaignList from './components/AdCampaign/AdCampaignList';
import Practice from './pages/Practice';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<SignupPage />} />
          <Route path="ads" element={<AdCampaignForm />} />
          <Route path="adslist" element={<AdCampaignList />} />
          <Route path="dashboard/doctor" element={<DoctorDashboard />} />
          <Route path="dashboard/patient" element={<PatientDashboard />} />
          <Route path="practice" element={<Practice />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
