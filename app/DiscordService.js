import React from 'react';
import axios from 'axios';

import { initialFormState } from "./page.js";

import NProgress from 'nprogress';
import { toast } from 'react-toastify';

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
      setFormData(initialFormState);
      toast.success('Message sent successfully!');
      toast('Thanks for checking out my app! :)');
      
      NProgress.done();
      
    } catch (error) {
      console.error(error);
      toast.error('Oops -- something went wrong!');
    }
  };

  return {
    Send,
  };
}

export default DiscordService;