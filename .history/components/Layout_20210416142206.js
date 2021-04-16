import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <nav className="bg-white px-8 pt-2 shadow-md">
        <div className="-mb-px flex justify-center">
          <a className="nav-bar" href="#">
            Home
          </a>
          <a className="nav-bar" href="#">
            About
          </a>
          <a className="nav-bar" href="#">
            Contact
          </a>
        </div>
      </nav>
      {children}
    </>
  );
}
