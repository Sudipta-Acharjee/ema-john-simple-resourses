import React from 'react';
import Product from '../header/Product/Product';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    let shipping = 0;
    if (total > 15 && total < 35) {
        shipping = 4.99
    }
    else if (total > 35) {
        shipping = 0;
    }
    else if (total < 15 && total > 1) {
        shipping = 12.99;
    }
    const tax = (total / 10).toFixed(2);
    let grandTotal = (total + shipping + Number(tax)).toFixed(2);

    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {total}</p>
            <p><small>Shipping Cost : {shipping}</small></p>
            <p><small>Tax+ Vat:{tax}</small></p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;