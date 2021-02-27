import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img}></img>
            </div>
            <div className="product-name">
                <h4>{name}</h4>
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <br />
                <p><small>Only {stock} left in stock-Order soon</small></p>
                <button className="main-button"
                onClick={() => props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>
        </div>
    );
};

export default Product;