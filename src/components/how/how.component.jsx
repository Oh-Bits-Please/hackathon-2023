import React from "react";
import shopper from '../../assets/img/shopping-blush-design.png';

function HowTo() {
  return (
    <div className="p-2 md:p-8 bg-lightBlue flex flex-col justify-center align-middle ">
      <div className="w-96 md:w-3/6 lg:w-2/5 flex flex-col m-auto">
        <h2 className="text-2xl font-bold md:text-3xl m-auto text-center">
          How does Apples to Oranges work?
        </h2>
        <img src={shopper} />
        <p className="p-4 md:text-lg m-auto text-center">
          So you're browsing in the grocery store and you're wondering if this
          item's price is better elsewhere.
        </p>
        <p className="p-4 md:text-lg m-auto text-center">
          1. Click on Search Now
        </p>
        <p className="p-4 md:text-lg m-auto text-center">
          2. Type in the item's name
        </p>
        <p className="p-4 md:text-lg m-auto text-center">
          3. See the list of item prices
        </p>
        <p className="p-4 md:text-lg m-auto text-center">
          4. Click on the item's location to locate near you!
        </p>
      </div>
    </div>
  );
}

export default HowTo;
