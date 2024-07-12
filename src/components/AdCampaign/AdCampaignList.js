// src/components/AdCampaign/AdCampaignList.js
import React from 'react';
import '../../styles/AdCampaign.css';

const AdCampaignList = () => {
  // This is a placeholder component, replace with real data
  const campaigns = [
    { id: 1, title: 'Campaign 1', message: 'Message 1', recipients: 'Recipients 1' },
    { id: 2, title: 'Campaign 2', message: 'Message 2', recipients: 'Recipients 2' },
  ];

  return (
    <div className="campaign-list">
      <h2>Existing Campaigns</h2>
      <ul>
        {campaigns.map(campaign => (
          <li key={campaign.id}>
            <h3>{campaign.title}</h3>
            <p>{campaign.message}</p>
            <p>Recipients: {campaign.recipients}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdCampaignList;
