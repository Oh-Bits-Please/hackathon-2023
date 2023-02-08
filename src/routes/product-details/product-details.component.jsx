import React from "react";
import MapBox from "../../components/Map/Map";
import { useParams } from "react-router-dom";
import { ketchup } from "../products/ProductList";

function ProductDetails() {
  const { id } = useParams();

  const product = ketchup.find((product) => product.id === Number(id));
  console.log(product);

  return (
    <div>
      <h1 className="w-96 text-2xl font-bold text-center p-4">
        Product Details
      </h1>
      <div className="rounded-md flex border border-darkRed my-4 p-4 cursor-pointer">
        <div className="border border-lightGray rounded-lg">
          <img className="w-28 h-auto p-2" src={product.img} alt="" />
        </div>
        <div className="mx-2 w-full">
          <div className="flex justify-between">
            <h1 className="font-bold text-lg">{product.name}</h1>
          </div>
          <p>{product.price}</p>
          <p>{product.location}</p>
          {/* <p>Location: {location ? location : "Not found"}</p> */}
        </div>
      </div>
      <div className="flex justify-center p-4">
        <MapBox product={product} />
      </div>
    </div>
  );
}

export default ProductDetails;
