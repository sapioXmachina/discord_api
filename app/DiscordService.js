import React from 'react';
import axios from 'axios';
import { initialFormState } from "./page.js"

import NProgress from 'nprogress';

function DiscordService(setFormData) {

  const Send = async (data) => {
    const body = {
      content: data
    };

    try {
      NProgress.start();
      
      const data = await axios.post(
        "https://discord.com/api/webhooks/1126411932103086120/8NKth6WdnNanjeflYKR4ITZpildJWogLYX9VEinSdJbMcNpegt3I_6XMUZBaSzI7VJys",
        body
      );
        console.log(data);
        setFormData(initialFormState);
      
      NProgress.done();
      
    } catch (error) {
      console.error(error);
    }
  };

  return {
    Send,
  };
}

export default DiscordService;