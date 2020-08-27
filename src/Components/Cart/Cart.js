import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price, 0);
    return (
        <div className="cart-container">
            <h2>Order information</h2>
            <h3>Course ordered : <small class="text-secondary">${cart.length}</small> </h3>
            <h3>Course amount : <small class="text-secondary">${total}</small> </h3>
            <h3>Total Amount : <small class="text-secondary">${total}</small></h3>
            <button class="btn btn-danger">Buy Now</button>
        </div>
    );
};

export default Cart;