// test page
"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ToastContainer, toast } from 'react-toastify';

import NProgress from 'nprogress';

export default function Page() {
  useEffect(() => {
    NProgress.start();
    NProgress.done();
  }, []);
  
  const [message, setMessage] = useState("");
  const discordMessage = process.env.NEXT_PUBLIC_API_MSG + " ";

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(process.env.NEXT_PUBLIC_API_URL, {
        body: JSON.stringify({
          'content': discordMessage + message,
        }),
        headers: {
          "Content-Type": process.env.NEXT_PUBLIC_API_CONT,
          "Authorization": process.env.NEXT_PUBLIC_API_AUTH
        },
        method: "POST",
      });

      let resJson = await res.json();
      if (res.status === 200) {
        setMessage("");
        toast("Message sent successfully!");
      } else {
        setMessage(message);
        toast("Oops -- something went wrong!");
      }
    } catch (err) {
      console.log(err);
      setStatus(true);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div><>
          <ul>
            <div className='flex'>
              <Link href="/">
                Home
              </Link>
              &nbsp;|&nbsp;
              <Link href="/about">
                About
              </Link>
              &nbsp;|&nbsp;
              <Link href="/test">
                &nbsp;&gt;&gt;
              </Link>
            </div>
          </ul>
          </>
        </div>

        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          {process.env.NEXT_PUBLIC_APP_TITLE}
          &nbsp;| Github:&nbsp;
          <Link target="_blank" href={process.env.NEXT_PUBLIC_GIT_URL}>
            <code className="font-mono font-bold">{process.env.NEXT_PUBLIC_GIT_HUB}</code>
          </Link>
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
        <h1 className="text-3xl text-left font-bold underline">TEST</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <textarea
            rows="3"
            type="textarea"
            pattern="[\w\d\s]{1,140}"
            title="Should be only letters or numbers."
            placeholder="Enter a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <br />
          <button className="text-center" type="submit">[ Send Message ]</button>
        </form>
        <ToastContainer />
      </div>

      <div></div>
      <div></div>

    </main>
  );
}