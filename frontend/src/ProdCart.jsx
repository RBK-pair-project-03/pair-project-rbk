import React from 'react'

function ProdCart(props) {
  return (
    <div>
    <div>
  <div>
    <img src= {props.imageUrl} />
  </div>
  <div>
    <h1>{props.name}</h1>
    <p>{props.description}</p>
    <h2>Price : {props.price}</h2>
    <button>Add to Cart</button>
  </div>
</div>   
</div>
  )
}

export default ProdCart
