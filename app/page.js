"use client";
import React, { useState } from "react";
import Image from 'next/image';

export default function Home() {
  const [message, setMessage] = useState("");
  const discordMessage = "Message from sapioXmachina: ";

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://www.hackercoop.dev/api/boop", {
        body: JSON.stringify({
          'content': discordMessage + message,
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>Discord API</h1>
        <h2>Hacker Coop | Summer 2023</h2>
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Github :&nbsp;
          <code className="font-mono font-bold">@sapioXmachina</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="h-full text-center">
        <h1 className="text-3xl text-left font-bold underline">Homework</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <textarea
            type="text"
            value={message}
            placeholder="Enter a message..."
            onChange={(e) => setMessage(e.target.value)}
          />
          <br /><br />
          <button className="text-center" type="submit">[ Send Message ]</button>
        </form>
      </div>
      
      <div></div>
      <div></div>
      
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>Discord API</h1>
        <h2>Hacker Coop | Summer 2023</h2>
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Github :&nbsp;
          <code className="font-mono font-bold">@sapioXmachina</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
    </main>
  );
}
