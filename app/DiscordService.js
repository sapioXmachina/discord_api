// page DiscordService
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
        process.env.NEXT_PUBLIC_API_SAPIO,
        body
      );
      setFormData(initialFormState);
      toast.success('Message sent successfully!');
      toast('Thanks for checking out my app! :)');
      NProgress.done();
      
    } catch (error) {
      toast.error('Oops -- something went wrong! Webhook may no longer be active :(.');
      NProgress.done();
    }
  };

  return {
    Send,
  };
}

export default DiscordService;