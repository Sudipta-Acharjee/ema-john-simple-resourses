import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const header = () => {
    return (
        <div className="Header">
            <img src={logo} alt=""></img>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Inventory</a>
            </nav>
        </div>
    );
};

export default header;