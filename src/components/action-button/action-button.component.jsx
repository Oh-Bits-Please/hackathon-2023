import React from "react";
import { Link } from "react-router-dom";

function ActionButton() {
  return (
    <>
      <div className="flex flex-col m-2 p-2 md:m-8">
        <div className="flex justify-center">
          <h3 className="font-sans font-bold md:text-xl">
            Got an item to compare prices?
          </h3>
        </div>
        <div className="flex justify-center">
          <Link to="/products">
            <button className="w-80 text-white bg-darkRed focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-xl px-5 py-2.5 text-center hover:bg-orangeRed">
              Search Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ActionButton;
