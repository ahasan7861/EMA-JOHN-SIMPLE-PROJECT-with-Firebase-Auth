import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewIteam from '../ReviewIteam/ReviewIteam';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { BsFillCalendar2WeekFill } from "react-icons/bs";

const Orders = () => {
    const savedCart = useLoaderData()
    const [cart, setCart] = useState(savedCart);
    

    const handleRemoveFromCart = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }




    
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewIteam key={product.id} product={product} handleRemoveFromCart={handleRemoveFromCart}></ReviewIteam> )
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} handleClearCart={handleClearCart}>
                
                <Link className='proceed-link' to="/checkout">

                <button  className='btn-proceed'>
                <span>Proceed Checkout</span><BsFillCalendar2WeekFill/></button>
                    
                
                </Link>

                </Cart>
            </div>
            
        </div>
    );
};

export default Orders;