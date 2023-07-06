// home page
"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css'; //styles of bootstrap

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
      let res = await fetch(process.env.NEXT_PUBLIC_API_, {
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
      // setStatus(true);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-dark-subtle items-center text-center justify-between">
      <nav className="fixed-top p-2 bg-dark text-center">
        <span className="text-light">
          New Homework Form
        </span>
        <br />
        <div className="flex">
        <Link href="/" className="text-decoration-none">
          &gt;&gt;
        </Link><br />
        &nbsp;|&nbsp;
        <Link href="/test" className="text-decoration-none">
          Test
        </Link>
        </div>
      </nav>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="discord"
              name="discord"
              aria-describedby="discordHelp"
              style={{height: 100, paddingBottom: 33 + "%"}}
              minlength="1"
              maxlength="140"
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
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}


// function validateFormWithJS() {
//     const discord = document.querySelector('#message').value;
 
//     if (!discord) {
//       alert('Please enter a message.');
//       return false;
//     }
//   }