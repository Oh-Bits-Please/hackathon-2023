import React from "react";
import AvatarPicture from "../../assets/img/avatar.png";
import {
  HiHeart,
  HiEnvelope,
  HiPhone,
  HiMapPin,
  HiUser,
} from "react-icons/hi2";
import ProductList from "../products/ProductList";
import RiceImg from "../../assets/img/rice.jpeg";
import KetchupImg from "../../assets/img/ketchup.png";
import PastaImg from "../../assets/img/pasta.png";
import Product from "../products/Product";

function Profile() {
  const products = [
    {
      id: 11,
      name: "Ketchup",
      price: "8 USD",
      discount: "5%",
      img: KetchupImg,
      location: "Walmart",
      lat: 42.7089555,
      lng: -73.81888489,
      zip: "12205",
    },
    {
      img: PastaImg,
      id: 3,
      name: "Pasta",
      price: "9 USD",
      discount: "5%",
      img: PastaImg,
      location: "Safeway",
      lat: 30.220346,
      lng: -97.841947,
      zip: "78749",
    },
    {
      id: 6,
      name: "Rice",
      price: "8 USD",
      discount: "5%",
      img: RiceImg,
      location: "Walmart",
      lat: 42.7089555,
      lng: -73.81888489,
      zip: "12205",
    },
  ];

  return (
    <div className="lg:grid lg:grid-cols-3 lg:gap-4">
      <div className=" lg:col-span-1">
        <h1 className="w-96 text-2xl font-bold p-4 md:text-4xl md:w-3/6 lg:w-fukk">
          Profile
        </h1>
        <div className="bg-orangeRed m-4 rounded-md text-sm flex justify-center md:flex-wrap">
          <div className="p-2 md:flex md:items-center md: ">
            <div className="flex justify-center">
              <img src={AvatarPicture} className="w-40" alt="" />
            </div>
            <div className="text-white flex flex-col">
              <h2 className="flex items-center">
                <HiUser className="mr-1" />
                Name: Jane Doe
              </h2>
              <p className="flex items-center">
                <HiEnvelope className="mr-1" />
                Email: jane_doe@gmail.com
              </p>
              <p className="flex items-center">
                <HiMapPin className="mr-1" />
                Address: 1234 Dortha St
              </p>
              <p className="flex items-center">
                <HiPhone className="mr-1" />
                Phone number: (801) 345-55-5555
              </p>
              <a className=" text-darkBlue font-bold rounded-lg text-center underline hover:text-darkRed cursor-pointer">
                Change password
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2">
        <div className="flex items-center w-100  ">
          <h1 className=" text-2xl font-bold ml-4 py-4 md:text-4xl">
            Favorites{" "}
          </h1>
          <HiHeart className="pl-2 text-red text-3xl" />
        </div>
        {/* <ProductList /> */}
        {products ? (
          products.map((product) => {
            return (
              <Product
                id={product.id}
                name={product.name}
                price={product.price}
                discount={product.discount}
                img={product.img}
                location={product.location}
                lat={product.lat}
                lng={product.lng}
                zip={product.zip}
              />
            );
          })
        ) : (
          <div className="p-2 text-left font-bold">
            No favorite products found.
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
