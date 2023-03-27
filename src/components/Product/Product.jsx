import React from 'react';
import './Product.css';

import { BsFillCartPlusFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const Product = (props) => {
    
    const {img, name, seller, quantity, price, ratings} = props.product;
    const handleAddToCart = props.handleAddToCart;

    
    
    return (
        <div className='product'>
            <img src={img?img: "NO image Found"} alt="NO image Found" />

            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Ratings: {ratings} Stars <FaStar/></p>
            </div>

            <button onClick={()=> handleAddToCart(props.product)} className='btn-addToCart'>Add to Cart <BsFillCartPlusFill/></button>

            
        </div>
    );
};

export default Product;