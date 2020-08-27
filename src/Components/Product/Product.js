import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, price, img} = props.product;
    const handelAddCourse = props.handelAddCourse;
    
    return (
        <div className="product-container">
            <img src={img} alt=""/>
            <h1>Course Name: <small style={{color: 'orange'}}>{name}</small> </h1>
            <h4 class="text-secondary">Price: ${price}</h4>
            <button class="btn btn-danger" onClick={() =>handelAddCourse(props.product)}>Enroll now</button>
        </div>
    );
};

export default Product;