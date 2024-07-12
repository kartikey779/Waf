// src/api/whatsappApi.js
export const sendAdCampaign = async (campaign) => {
    try {
      const response = await fetch('https://api.whatsapp.com/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add authorization headers if needed
        },
        body: JSON.stringify(campaign),
      });
      return await response.json();
    } catch (error) {
      console.error('Error sending ad campaign:', error);
      throw error;
    }
  };
  