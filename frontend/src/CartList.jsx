import React from 'react';
import './App.css'
const CartList = () => {
  return (
    <div className='cart-list'>
      <div className='mdcart'>
  <h1 className='mcart'>My cart</h1>
  </div>
  <div className='cart-item'>
    <span>Product Name: Iphone</span>
    <span>Price: 100$</span>
    <button className='cart-list-button'>Remove</button>
  </div>
  <div className='cart-item'>
    <span>Product Name: pc</span>
    <span>Price: 100$</span>
    <button className='cart-list-button'>Remove</button>
  </div>
  <div className='cart-item'>
    <span>Product Name: machine</span>
    <span>Price: 100$</span>
    <button className='cart-list-button'>Remove</button>
  </div>
  <div className='d'>
  <h3>Total: 300$</h3>
  <button >checkout</button>
  </div>
</div>
  )
}

export default CartList