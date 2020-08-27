import React from 'react';
import './Course.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import Data from '../../fakeData/Data'
import { useState } from 'react';

const Course = () => {
    const [cart, setCart] = useState([]);
    const handelAddCourse = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <div className="course-container">
            <div className="product-container">
                {
                    Data.map(pd => <Product handelAddCourse={handelAddCourse} product={pd}></Product>)
                }
                </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Course;