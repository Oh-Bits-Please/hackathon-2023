import React from "react";
import { Link } from "react-router-dom";

function MenuLinks() {
  return (
    <>
      <Link to="/" className="font-bold m-2">
        🏠 Home
      </Link>
      <Link to="/login" className="font-bold m-2">
        🔑 Login
      </Link>
      <Link to="/signup" className="font-bold m-2">
        ✏️ Signup
      </Link>
    </>
  );
}

export default MenuLinks;
