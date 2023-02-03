import React from 'react';
import Product from './Product';
import RiceImg from "../../../src/assets/img/rice.jpeg";
import KetchupImg from "../../../src/assets/img/ketchup.png";
import PastaImg from "../../../src/assets/img/pasta.png"

const products = [
    {
        name: "Ketchup",
        price: "10 USD",
        discount: "5%",
        img: KetchupImg
    },
    {
        name: "Pasta",
        price: "14 USD",
        discount: "8%",
        img: PastaImg
    },
    {
        name: "Rice",
        price: "15 USD",
        discount: "15%",
        img: RiceImg
    }
]

const ProductList = () => {
    return (
        <div className='m-4'>
            <form className="flex items-center">
                <label for="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-slate-500" fill="lightGray" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="simple-search" className="bg-gray-50 border border-darkRed text-gray-900 text-sm rounded-lg focus:ring-darkRed focus:border-darkRed block w-full pl-10 p-2.5 " placeholder="Search products" />
                </div>
                <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-darkRed rounded-lg border border-white hover:bg-darkRed focus:ring-4 focus:outline-none focus:ring-white">
                    <svg className="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <span className="sr-only">Search</span>
                </button>
            </form>
            {products.map(product => {
                return (
                    <Product name={product.name} price={product.price} discount={product.discount} img={product.img} />
                )
            })}
        </div>
    )
}

export default ProductList;
