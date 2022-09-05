import React from 'react';
import { connect } from 'react-redux';

import { clearItem, addItem, removeItem } from '../../redux/cart/cart.actions';


import './checkout-item.styles.scss'

let count = 0;

const CheckoutItem = ({ cartItem, dispatch }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    console.log(count++);
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt="item" />
            </div>

            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => dispatch((removeItem(cartItem)))}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => dispatch(addItem(cartItem))} >&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className="remove-button" onClick={() => dispatch(clearItem(cartItem))}>
                &#10007;
            </div>

        </div>
    )
}


export default connect()(CheckoutItem)