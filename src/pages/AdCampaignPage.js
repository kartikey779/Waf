// src/pages/AdCampaignPage.js
import React from 'react';
import AdCampaignForm from '../components/AdCampaign/AdCampaignForm';
import AdCampaignList from '../components/AdCampaign/AdCampaignList';
import '../styles/AdCampaign.css';

const AdCampaignPage = () => {
  return (
    <div className="campaign-page">
      <h1>Ad Campaign Management</h1>
      <div className="campaign-container">
        <AdCampaignForm />
        <AdCampaignList />
      </div>
    </div>
  );
};

export default AdCampaignPage;
