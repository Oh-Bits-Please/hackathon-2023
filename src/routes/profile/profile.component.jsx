import React from 'react';
import AvatarPicture from "../../assets/img/avatar.png";
import { HiHeart, HiEnvelope, HiPhone, HiMapPin, HiUser } from "react-icons/hi2";
import ProductList from "../products/ProductList";
import RiceImg from "../../assets/img/rice.jpeg";
import KetchupImg from "../../assets/img/ketchup.png";
import PastaImg from "../../assets/img/pasta.png";

function Profile() {

  const products = [
    {
      name: "Ketchup",
      price: "10 USD",
      discount: "5%",
      img: KetchupImg,
    },
    {
      name: "Pasta",
      price: "14 USD",
      discount: "8%",
      img: PastaImg,
    },
    {
      name: "Rice",
      price: "15 USD",
      discount: "15%",
      img: RiceImg,
    },
  ];

  return (
    <div>
      <h1 className="w-96 text-2xl font-bold p-4 md:text-4xl md:w-3/6 lg:w-2/5">Profile</h1>
      <div className='bg-orangeRed m-4 rounded-md text-sm'>
        <div className='p-2 flex'>
          <img src={AvatarPicture} className='w-40' alt="" />
          <div className='flex flex-wrap text-white'>
            <h2 className='flex items-center'><HiUser className='mr-1' />Name: Jane Doe</h2>
            <p className='flex items-center'><HiEnvelope className='mr-1' />Email: jane_doe@gmail.com</p>
            <p className='flex items-center'><HiMapPin className='mr-1' />Address: 1234 Dortha St</p>
            <p className='flex items-center'><HiPhone className='mr-1' />Phone number: (801) 345-55-5555</p>
            <a className=" text-darkBlue font-bold rounded-lg text-center underline hover:text-darkRed cursor-pointer">Change password</a>
          </div>
        </div>
      </div>
      <div className='flex items-center'>
        <h1 className=" text-2xl font-bold ml-4 py-4 md:text-4xl md:w-3/6 lg:w-2/5">Favorites </h1>
        <HiHeart className='pl-2 text-red text-3xl' />
      </div>
      <ProductList />
    </div>
  )
}

export default Profile