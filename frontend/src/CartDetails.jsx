import React from 'react'
const CartDetails=(props)=>{
      return (
        <div>
          <div>
            <img src={props.one.imageUrl} />
          </div>
          <div>
            <h1>{props.one.name}</h1>
            <p>{props.one.description}</p>
            <h2>Price :{props.one.price}</h2>
            <button>Add to Cart</button>
          </div>
        </div>
      );
}
export default CartDetails;