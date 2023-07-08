// home page
"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

import NProgress from 'nprogress';
import 'bootstrap/dist/css/bootstrap.css'; //styles of bootstrap

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
      let res = await fetch(process.env.NEXT_PUBLIC_API_TEST, {
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
    }
  };

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
          <h5 className="text-light">
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
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="discord"
                name="discord"
                aria-describedby="discordHelp"
                style={{height: 132, paddingBottom: 25 + "%"}}
                size="32"
                minLength="1"
                maxLength="140"
                placeholder="Enter a message..."
                pattern="^[\w\d\s\S\D\W]{1,140}"
                title="Should be only letters or numbers."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <div id="discordHelp" className="form-text text-body-seondary">
                Only letters and spaces allowed.
              </div>
            </div>
            <button
              className="btn btn-secondary"
              type="submit"
              onClick={handleSubmit}
              >Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}