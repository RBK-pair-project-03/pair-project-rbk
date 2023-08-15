import React, { useEffect, useState } from "react";
const CartList = (props) => {
  return (
    <div className="cart-list">
      <h1>My cart</h1>
      {data.map((e, i) => {
        return (
          <div>
            <span>Product Name:{e.name}</span>
            <span>Price:{e.price}</span>
            <button onClick={()=>{
              props.remove(i)
              setTrigger(!trigger)
            }}>Remove</button>
          </div>
        );
      })}
      <h3>Total:{sum}$</h3>
      <button onClick={()=>{
         var sum = data.reduce((acc,e)=>acc+e.price,0)
        alert(`you paid ${sum} succesfully` )
        props.empty()
        setTrigger(!trigger)
      }}>checkout</button>
    </div>
  );
};
export default CartList;







