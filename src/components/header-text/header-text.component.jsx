import React from "react";

function HeaderText() {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="w-96 text-2xl font-bold text-center p-4 md:text-4xl md:w-3/6 lg:w-2/5">
          Compare Apples to Oranges. Find alternative prices in other stores
          near you!
        </h1>
      </div>
      <div className="flex justify-center">
        <img src="/src/assets/img/shopper.png" className="w-50 h-50" />
      </div>
    </>
  );
}

export default HeaderText;
