// home page
"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css' //stules of bootstrap

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
    <div className="flex min-h-screen flex-col items-center justify-between">
      <nav className="fixed-top p-2 bg-dark text-center">
        <p className="text-light">New Homework Form</p>
      </nav>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
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