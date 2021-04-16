import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <div className="w-full py-5 shadow-md bg-green-500 flex justify-center items-center">
        <div>
          <h2>Next js</h2>
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      {children}
    </>
  );
}
