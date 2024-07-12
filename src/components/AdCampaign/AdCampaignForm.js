import React, { useState } from 'react';
import { sendAdCampaign } from '../../api/whatsappApi';
import Input from '../Common/Input';   // Adjusted import path
import Button from '../Common/Button'; // Adjusted import path
import '../../styles/AdCampaign.css';

const AdCampaignForm = () => {
  const [campaign, setCampaign] = useState({
    title: '',
    message: '',
    recipients: '',
  });

  const handleChange = (e) => {
    setCampaign({
      ...campaign,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendAdCampaign(campaign);
      console.log('Ad campaign sent:', response);
    } catch (error) {
      console.error('Error sending ad campaign:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="campaign-form">
      <Input name="title" value={campaign.title} onChange={handleChange} placeholder="Title" />
      <Input name="message" value={campaign.message} onChange={handleChange} placeholder="Message" />
      <Input name="recipients" value={campaign.recipients} onChange={handleChange} placeholder="Recipients" />
      <Button type="submit">Send Campaign</Button>
    </form>
  );
};

export default AdCampaignForm;
