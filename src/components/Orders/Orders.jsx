import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewIteam from '../ReviewIteam/ReviewIteam';
import './Orders.css'

const Orders = () => {
    const cart = useLoaderData()
    console.log(cart);
    
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewIteam key={product.id} product={product}></ReviewIteam> )
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Orders;