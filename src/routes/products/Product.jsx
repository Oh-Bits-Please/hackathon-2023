import React from 'react';

const Product = ({ name, price, discount, img, location }) => {
    console.log(location)
    return (
        <div className="rounded-md flex border border-darkRed my-4 p-4 cursor-pointer">
            <div className='border border-lightGray rounded-lg'>
                <img className="w-28 h-auto p-2" src={img} alt="" />
            </div>
            <div className='mx-2 w-full'>
                <div className='flex justify-between'>
                    <h1 className='font-bold text-lg'>{name}</h1>
                    <div className='bg-lightGreen rounded-md w-14 flex justify-center items-center '>
                        <p className='text-sm text-white font-semibold'>{`${discount} off`}</p>
                    </div>
                </div>
                <p>{price}</p>
                <p>Location: {location ? location : "Not found"}</p>
            </div>

        </div>
    )
}

export default Product;
