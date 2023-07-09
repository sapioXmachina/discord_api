import React from 'react';
import axios from 'axios';


function DiscordService() {

  const Send = async (data) => {
    const body = {
      "content": "Message from Postman: evening y'all!"
    };

    try {
      const data = await axios.post(
        "https://discord.com/api/webhooks/1126411932103086120/8NKth6WdnNanjeflYKR4ITZpildJWogLYX9VEinSdJbMcNpegt3I_6XMUZBaSzI7VJys",
        body
        );
      console.log(data);

    } catch (error) {
      console.error(error);
    }


  };

  return {
    Send,
  };
}

export default DiscordService;