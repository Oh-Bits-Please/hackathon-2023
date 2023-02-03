import { data } from 'autoprefixer'
import React from 'react'
import Product from './Product'

const products = [
    {
        name: "Ketchup",
        price: "10 USD",
        discount: "5%"
    },
    {
        name: "Pasta",
        price: "14 USD",
        discount: "8%"
    },
    {
        name: "Rice",
        price: "15 USD",
        discount: "15%"
    }
]

const ProductList = () => {
    return (
        <div>
            <h1>Search Bar placeholder</h1>
            {products.map(product => {
                return (
                    <Product name={product.name} price={product.price} discount={product.discount} />
                )
            })}
        </div>
    )
}

export default ProductList;
