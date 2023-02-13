import React from "react";
import Hamburger from "hamburger-react";
import MenuLinks from "../menulinks/menuLinks";

function Menu({ open, setOpen }) {
  return (
    <div
      className={
        open
          ? "w-36 flex flex-col bg-green h-screen text-left p-2 absolute top-16 right-0 translate-x-full duration-200"
          : "w-36 flex flex-col bg-green h-screen text-left p-2 absolute top-16 right-0 translate-x-0 duration-200 rounded-l-lg"
      }
    >
      <MenuLinks />
    </div>
  );
}

export default Menu;
