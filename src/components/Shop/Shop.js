import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product product={product}/>)
                }
            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
                <h5>Items Ordered:</h5>
            </div>
        </div>
    );
};

export default Shop;