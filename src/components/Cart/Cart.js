import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {cart.length}</h5>
        </div>
    );
};

export default Cart;