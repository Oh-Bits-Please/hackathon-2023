import React from "react";
import MapBox from "../../components/Map/Map";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ketchup } from "../products/ProductList";

function ProductDetails() {
  const [location, setCurrentLocation] = useState(null);
  const { id } = useParams();

  // get user coords and city
  useEffect(() => {
    const getUserCoords = async () => {
      await navigator.geolocation.getCurrentPosition((position) => {
        const p = position.coords;
        console.log(
          `This is from the function getcoords ${p.latitude}, ${p.longitude}`
        );
        fetchLocationName(p.latitude, p.longitude);
      });
    };

    const fetchLocationName = async (lat, lng) => {
      await fetch(
        `https://www.mapquestapi.com/geocoding/v1/reverse?key=${
          import.meta.env.VITE_MAPQUEST
        }&location=${lat}%2C${lng}&outFormat=json&thumbMaps=false`
      )
        .then((response) => response.json())
        .then((responseJson) => {
          console.log("ADDRESS GEOCODE is BACK!! => " + responseJson);
          const location = responseJson;
          setCurrentLocation(location);
        });
    };
    getUserCoords();
  }, []);

  const product = ketchup.find((product) => product.id === Number(id));

  return (
    <div>
      <h1 className="w-96 text-2xl font-bold text-center p-4">
        Product Details
      </h1>
      <h2 className="w-96 text-2xl font-bold text-center p-4">
        {location
          ? `Your location: ${
              location?.results[0].locations[0].adminArea5
            }${", "}${location?.results[0].locations[0].adminArea3}`
          : "Loading your location..."}
      </h2>
      <div className="rounded-md flex border border-darkRed my-4 mx-8 p-4 cursor-pointer">
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
