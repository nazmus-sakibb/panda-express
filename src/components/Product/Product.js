import React from 'react';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
    const { name, img, seller, price, stock } = product;

    return (
        <div className="product">
            <div>
                <img src={img} alt="" className="product-image" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button className="btn-regular" onClick={() => handleAddToCart(product)}>Add To Cart</button>
            </div>
        </div >
    );
};

export default Product;