import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../components/header/Product/Product';
import fakeData from '../fakeData'

const ProductDetail = () => {
    const { productKey } = useParams();
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    document.title="product title"

    
    useEffect(() => {
        fetch('/product/' + productKey)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
    })
    return (
        <div>
            <h1>Your Product Details.</h1>
            {
                loading ? <p>Loading...</p> : <Product showAddToCart={false} product={product}></Product>
            }
        </div>
    );
};

export default ProductDetail;