"use client";
import Image from 'next/image'
import "./globals.css";
import { useEffect } from "react";
import Form from "./Form";

function App() {
  // You can skip useEffect if you're not using TailwindCSS
  // Otherwise, for the production usage refer to https://tailwindcss.com/docs/installation
  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="App">
        <header className="App-header">
        <div className="py-3">
          <img src="/vercel.svg" className="App-logo" alt="logo" />
          <div className="py-6">
            <Form />
          </div>
        </div>
        </header>
      </div>
    </main>
  );
}

export default App;
