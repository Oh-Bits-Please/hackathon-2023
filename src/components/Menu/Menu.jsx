import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

function Menu({ open, setOpen }) {
  return (
    <div
      className={
        open
          ? "flex flex-col bg-white h-screen text-left p-2 absolute top-10 right-0 translate-x-full duration-100 z-0"
          : "flex flex-col bg-white h-screen text-left p-2 absolute top-10 right-0 translate-x-0 duration-100"
      }
    >
      <Link to="/" className="font-bold py-2">
        🏠 Home
      </Link>
      <Link to="/login" className="font-bold py-2">
        🔑 Login
      </Link>
      <Link to="/signup" className="font-bold py-2">
        ✏️ Signup
      </Link>
    </div>
  );
}

export default Menu;
