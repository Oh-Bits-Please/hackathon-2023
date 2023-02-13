import React, { useState } from "react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Product = ({ id, name, price, discount, img, location, lat, lng }) => {
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div className="rounded-md flex border border-darkRed my-4 p-4 cursor-pointer justify-between">
      <Link to={`/product-details/${id}`} className="flex w-full">
        <div className="border border-lightGray rounded-lg ">
          <img className="w-24 h-auto p-1" src={img} alt="" />
        </div>
        <div className="mx-2 w-full flex flex-col align-middle justify-center">
          <div className="flex justify-between">
            <h1 className="font-bold text-lg">{name}</h1>
          </div>
          <p>{price}</p>
          <p>Location: {location ? location : "Not found"}</p>
        </div>
      </Link>
      <div className="flex">
        <div className="bg-lightGreen rounded-md w-14 flex justify-center items-center h-5 ">
          <p className="text-sm text-white font-semibold">{`${discount} off`}</p>
        </div>
          {favorite ? (
            <HiHeart
              onClick={handleFavorite}
              className="text-red ml-2 text-[1.4rem] cursor-pointer"
            />
          ) : (
            <HiOutlineHeart
              onClick={handleFavorite}
              className="text-red ml-2 text-[1.4rem] cursor-pointer"
            />
          )}
      </div>
    </div>
  );
};

export default Product;
