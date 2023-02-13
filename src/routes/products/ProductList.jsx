import React, { useState } from "react";
import Product from "./Product";
import RiceImg from "../../../src/assets/img/rice.jpeg";
import KetchupImg from "../../../src/assets/img/ketchup.png";
import PastaImg from "../../../src/assets/img/pasta.png";
import MapBox from "../../components/Map/Map";
import { Link } from "react-router-dom";

export const pasta = [
  {
    id: 1,
    name: "Pasta",
    price: "8 USD",
    discount: "5%",
    img: PastaImg,
    location: "Walmart",
    lat: 42.7089555,
    lng: -73.81888489,
    zip: "12205",
  },
  {
    id: 2,
    name: "Pasta",
    price: "8.10 USD",
    discount: "5%",
    img: PastaImg,
    location: "Target",
    lat: 29.921124,
    lng: -90.117495,
    zip: "70115",
  },
  {
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
    id: 4,
    name: "Pasta",
    price: "9 USD",
    discount: "5%",
    img: PastaImg,
    location: "Whole Foods",
    lat: 35.146488,
    lng: -106.556026,
    zip: "87109",
  },
  {
    id: 5,
    name: "Pasta",
    price: "10 USD",
    discount: "5%",
    img: PastaImg,
    location: "Walgreens",
    lat: 32.953182,
    lng: -96.821423,
    zip: "75254",
  },
];

export const rice = [
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
  {
    id: 7,
    name: "Rice",
    price: "8.10 USD",
    discount: "5%",
    img: RiceImg,
    location: "Target",
    lat: 29.921124,
    lng: -90.117495,
    zip: "70115",
  },
  {
    id: 8,
    name: "Rice",
    price: "9 USD",
    discount: "5%",
    img: RiceImg,
    location: "Safeway",
    lat: 30.220346,
    lng: -97.841947,
    zip: "78749",
  },
  {
    id: 9,
    name: "Rice",
    price: "9 USD",
    discount: "5%",
    img: RiceImg,
    location: "Whole Foods",
    lat: 35.146488,
    lng: -106.556026,
    zip: "87109",
  },
  {
    id: 10,
    name: "Rice",
    price: "10 USD",
    discount: "5%",
    img: RiceImg,
    location: "Walgreens",
    lat: 32.953182,
    lng: -96.821423,
    zip: "75254",
  },
];

export const ketchup = [
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
    id: 12,
    name: "Ketchup",
    price: "8.10 USD",
    discount: "5%",
    img: KetchupImg,
    location: "Target",
    lat: 29.921124,
    lng: -90.117495,
    zip: "70115",
  },
  {
    id: 13,
    name: "Ketchup",
    price: "9 USD",
    discount: "5%",
    img: KetchupImg,
    location: "Safeway",
    lat: 30.220346,
    lng: -97.841947,
    zip: "78749",
  },
  {
    id: 14,
    name: "Ketchup",
    price: "9 USD",
    discount: "5%",
    img: KetchupImg,
    location: "Whole Foods",
    lat: 35.146488,
    lng: -106.556026,
    zip: "87109",
  },
  {
    id: 15,
    name: "Ketchup",
    price: "10 USD",
    discount: "5%",
    img: KetchupImg,
    location: "Walgreens",
    lat: 32.953182,
    lng: -96.821423,
    zip: "75254",
  },
];

const ProductList = () => {
  const [search, setSearch] = useState(false);
  const [product, setProduct] = useState("");
  const [productList, setProductList] = useState("");

  const updateProductList = (product) => {
    if (product == "ketchup") {
      setProductList(ketchup);
    } else if (product == "rice") {
      setProductList(rice);
    } else if (product == "pasta") {
      setProductList(pasta);
    } else {
      setProductList("");
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    updateProductList(product);
    setProduct("");
  };

  const searching = () => {
    setSearch((state) => !state);
  };

  return (
    <div className="m-4">
      <form className="flex items-center" onSubmit={handleSubmit}>
        <label for="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-slate-500"
              fill="lightGray"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            name="product"
            value={product}
            onChange={(evt) => setProduct(evt.target.value)}
            className="bg-gray-50 border border-darkRed text-gray-900 text-sm rounded-lg focus:ring-darkRed focus:border-darkRed block w-full pl-10 p-2.5 "
            placeholder="Search products"
          />
        </div>
        <button
          type="submit"
          className="p-2.5 ml-2 text-sm font-medium text-white bg-darkRed rounded-lg border border-white hover:bg-darkRed focus:ring-4 focus:outline-none focus:ring-white"
          // onClick={searching}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>
      {productList ? (
        productList.map((product) => {
          return (
            // <Link to={`/product-details/${product.id}`}>
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
            // </Link>
          );
        })
      ) : (
        <div className="p-2 text-left font-bold">
          No products found. Search above.
        </div>
      )}

      {/* {products.map((product) => {
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
            // url={`/product-details/${product.id}`}
          />
        );
      })} */}

      {/* <div>
        <MapBox />
      </div> */}
    </div>
  );
};

export default ProductList;
