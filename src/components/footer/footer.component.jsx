import React from "react";
import logo from "../../assets/img/icons8-fruits-flaticons.png";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="p-4 flex flex-col m-auto">
      <div className="flex flex-row justify-center align-middle m-4">
        <img src={logo} className="h-6" />
        <p className="font-bold">Apples to Oranges</p>
      </div>
      <div className="text-center">
        <ul>
          <li className="font-semibold">
            <Link to="/login">Login</Link>
          </li>
          <li className="font-semibold">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="font-semibold">
            <Link to="/products">Search</Link>
          </li>
          <li>Blog</li>
          <li>Features</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className="m-4">
        <p className="text-sm">
          © {year} | Code with 💗 by{" "}
          <a
            href="https://github.com/Oh-Bits-Please"
            target="_blank"
            className="font-bold"
          >
            Oh-Bits-Please
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Footer;
