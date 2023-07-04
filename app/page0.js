"use client";
import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://www.hackercoop.dev/api/boop", {
        body: JSON.stringify({
          'content': message,
        }),
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer HackerSummer2023"
        },
        method: "POST",
      })

      let resJson = await res.json();
      if (res.status === 200) {
        setMessage("Message sent successfully!");
      } else {
        setMessage("Oops -- an error occured!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <h1>Homework</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          placeholder="Enter a message..."
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default App;
