// homework page
'use client';
import { useEffect, useState } from 'react';
import DiscordService from "./DiscordService";
import NProgress from 'nprogress';
import Link from 'next/link';

export const initialFormState = {
  data: {
    message: ""
  },
  error: {}
};

export default function Page() {
  useEffect(() => {
    NProgress.start();
  }, []);
  
  const [formData, setFormData] = useState(initialFormState);
  
  const setDynamicFormData = (name, value) => {
    setFormData({
      data: {
        ...formData.data,
        message: value
      },
      error: {}
    });
  };
  
  const { Send } = DiscordService(setFormData);
  
  const PostToDiscord = () => {
    const description = Object.entries(formData.data)
      .map((d) => `${d[0]}: ${d[1]}`)
      .join("\n");
    Send(description);
  };
  
  useEffect(() => {
    NProgress.done();
  }, []);

  return (
    <div className="vh-100 flex min-h-screen flex-col bg-secondary align-items-center text-center justify-between">
      <nav className="sticky-top w-100 p-2 bg-dark text-center">
        <div className="flex justify-content-center align-items-center">
          <h4 className="text-secondary">
            Summer 2023
          </h4>
          <h1 className="text-light pb-3">
            HackerCoop
          </h1>
        </div>
        <div className="d-flex justify-content-center items-center pb-3">
          <Link href="/" className="link-secondary text-decoration-none">
            [&nbsp;Discord API&nbsp;]
          </Link>
          &nbsp;&nbsp;
          <Link href="/homework" className="link-secondary text-decoration-none">
            [&nbsp;&nbsp;&lt;&gt;&nbsp;&nbsp;]
          </Link>
          &nbsp;&nbsp;
          <Link href="/nprogress" className="link-secondary text-decoration-none">
            [&nbsp;NProgress&nbsp;]
          </Link>
        </div>
      </nav>
      <div className="d-flex justify-content-center align-items-start pt-6">
        <div className="card ps-3 pe-3 pt-2 pb-3 mt-5 bg-dark-subtle">
          <p
            className="fs-1 fw-bold pt-4"
            style={{lineHeight: 0}}
            >Homework
          </p>
          <hr className="hr" />
          <form onSubmit={(e) => {
            e.preventDefault();
            PostToDiscord();
          }}
          >
            <div className="mb-3">
              <textarea
                type="text"
                className="form-control"
                name="message"
                value={formData.data.message}
                onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }}
                aria-describedby="discordHelp"
                rows="5"
                cols="28"
                minLength="1"
                maxLength="140"
                placeholder="Enter a message..."
                title="Letters, numbers, spaces and punctuation symbols allowed. Up to 140 characters."
                required
              />
              <div id="discordHelp" className="mw-75 form-text text-wrap text-body-seondary">
                Letters, numbers, spaces and<br />
                punctuation symbols allowed.<br />
                Up to 140 characters.
              </div>
            </div>
            <button type="submit" className="btn btn-secondary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}