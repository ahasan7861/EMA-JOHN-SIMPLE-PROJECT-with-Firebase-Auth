import React from 'react';
import './ReviewIteam.css';

import { BsTrash } from "react-icons/bs";

const ReviewIteam = ({product}) => {
    const {id, img, price, name, quantity} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />

            <div className='review-details'>
        <p className='product-title'>{name}</p>
        <p>Price: <span className='orange-text'>${price}</span> </p>
        <p>Order Quantity: <span className='orange-text'>{quantity}</span> </p>       
            </div>

            <button className='btn-delete'> <span className='delete-icon'><BsTrash/> </span></button>
        </div>
    );
};

export default ReviewIteam;