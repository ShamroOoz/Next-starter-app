import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <div className="w-full py-3 shadow-md bg-green-500 grid grid-cols-2 gap-3">
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
