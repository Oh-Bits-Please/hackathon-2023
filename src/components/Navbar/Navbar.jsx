import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Hamburger from "hamburger-react";
import Menu from "../Menu/Menu";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="container flex flex-row justify-between">
          <div className="">
            <Link to="/">
              <img
                src="/src/images/cart.png"
                alt="cart image with words find it"
                className="w-12 h-12"
              />
            </Link>
          </div>
          <div className="flex">
            <Link to="/profile">
              <img
                src="/src/images/avatar.png"
                alt="profile image"
                className="w-12 h-12"
              />
            </Link>
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color="#087E8B"
              className="z-0"
            />
            <Menu open={!isOpen} setOpen={setOpen} className="z-10" />
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default Navbar;
