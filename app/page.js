// page
'use client';
import { useEffect, useState } from 'react';
import DiscordService from "./DiscordService";

import 'bootstrap/dist/css/bootstrap.css'; //styles of bootstrap
import Link from 'next/link';

import NProgress from 'nprogress';
// import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function Page() {
  useEffect(() => {
    NProgress.start();
  }, []);

  // const [message, setMessage] = useState('');
  // const prefix = process.env.NEXT_PUBLIC_API_MSG + ' ';
  // const discord = prefix  + message;

  // let handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     NProgress.start();

  //     let res = await fetch(process.env.NEXT_PUBLIC_API_SAPIO, {
  //       body: JSON.stringify({
  //         'content': discord,
  //       }),
  //       headers: {
  //         'Content-Type': process.env.NEXT_PUBLIC_API_CONT
  //       },
  //       method: 'POST',
  //     });

  //     NProgress.done();

  //     let resJson = await res.json();
  //     if (res.status === 200) {
  //       setMessage('');
  //       toast('Message sent successfully!');
  //       console.log(discord);
  //     } else {
  //       setMessage(message);
  //       toast('Oops -- something went wrong!');
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  
  const [formData, setFormData] = useState({
    data: {
      message: "",
    },
    error: {}
  });
  
  const { send } = DiscordService();
  
  useEffect(() => {
    NProgress.done();
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-secondary align-items-center text-center justify-between">
      <nav className="sticky-top w-100 p-2 bg-dark text-center">
        <div className="flex justify-content-center align-items-center">
          <h4 className="text-secondary">
            Summer
          </h4>
          &nbsp;&nbsp;
          <h1 className="text-light">
            HackerCoop
          </h1>
          &nbsp;&nbsp;
          <h4 className="text-secondary">
            2023
          </h4>
        </div>
        <div>
          <h5 className="text-secondary-emphasis">
            Group 2
          </h5>
        </div>
        <div className="d-flex justify-content-center items-center">
          <Link href="/" className="link-secondary text-decoration-none">
            [&nbsp;&nbsp;&lt;&gt;&nbsp;&nbsp;]
          </Link>
          &nbsp;&nbsp;
          <Link href="/homework" className="link-secondary text-decoration-none">
            [&nbsp;Homework&nbsp;]
          </Link>
          &nbsp;&nbsp;
          <Link href="/nprogress" className="link-secondary text-decoration-none">
            [&nbsp;NProgress&nbsp;]
          </Link>
        </div>
      </nav>
      <div className="vh-100 d-flex justify-content-center align-items-start pt-6">
        <div className="card ps-3 pe-3 pt-2 pb-3 mt-3 bg-dark-subtle">
          <p
            className="fs-1 fw-bold text-left pt-4"
            style={{lineHeight: 0}}
            >Discord API
          </p>
          <hr className="hr" />
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <textarea
                type="text"
                id="message"
                name="message"
                className="form-control"
                value={message}
                onChange={(e) => {
                  const { name, value } = e.target;
                  console.log(name, value)
                }}
                  
                // onChange={(e) => setMessage(e.target.value)}
                aria-describedby="discordHelp"
                rows="6"
                cols="32"
                minLength="1"
                maxLength="2"
                placeholder="Enter a message..."
                // pattern=""
                title="Only letters and spaces allowed."
                required
              />
              <div id="discordHelp" className="form-text text-body-seondary">
                Only letters and spaces allowed.
              </div>
            </div>
            <button type="submit" className="btn btn-secondary">
              Send Message
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}