import React from 'react'

const Product = ({ name, price, discount, image }) => {
    return (
        <div className="rounded-md flex bg-red-500">
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h1>{name}</h1>
                <p>{price}</p>
                <p>{discount}</p>
            </div>

        </div>
    )
}

export default Product;
