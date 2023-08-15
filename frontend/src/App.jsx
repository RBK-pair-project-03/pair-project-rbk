import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';
import Search from "./Search";
import CartList from './CartList';
import CartDetails from './CartDetails';
import CartList from './CartList';

const App = () => {

const [menuView, setMenuView] = useState(false);
const [view,setView] = useState("productList");
const [accesories,setAccesories] = useState([]);
const [computers,setCat] = useState([]);
const [dog,setDog] = useState([]);
const [oneCard,setOneCard]=useState({});
const [trigger,setTrigger]=useState({});
const [data,setData]=useState([])

useEffect(()=>{

  axios.get('http://localhost:5000/api/pet')

.then((res)=> {

  setData(res.data)

  const cat=data.filter((e)=>e.category === "cats")
  const dog=data.filter((e)=>e.category === "dogs")
  const accesories=data.filter((e)=>e.category === "accesories")
  const food = data.filter((e)=>e.category === "foods")

setDog(dog)
setCat(cat)
setaccesories(accesories)


}).catch((err)=>{
  console.log(err)
})
},[trigger])

const cartStal = (obj) => {
    setCart([...cart,obj])
    }
    const removeStal =(index)=>{
      var newState = [...cart]
      newState.splice(index,1)
      setCart(newState)
      }
    const emptyCart = () => {
      setCart([])
    }

    
    const bucketSearch = (terms) => {
        if (!terms) {
          setTrigger(!trigger);
        } else {
          setData(
            data.filter((e) =>
              e.name.toLowerCase().includes(terms.toLowerCase())
            )
          );
        }
      };
    const bucketUpdate =(view,obj)=>{
    setView(view)
    setUpdate(obj)
    }


const toggly = ()=> {
  setMenuView(!menuView)
}
const switchView = (x) => {
  setView(x)
}



const bucket=(obj)=>{
  setOneCard(obj)
  setView("detail")
}

  return (
    <div >
        <div >
          <span  onClick={()=>switchView ("CardList")}>BichBich SHOP</span>
          { view ==="CardList" && <Search />}
        { view ==="CardList" && <span onClick={toggly}>
          &#9660;
            CATEGORIES 
            &#9660;
          </span>}
          <span onClick={()=>switchView ("cart")}>
            CART
          </span>
        </div>
       {menuView && <div>
            <span >computers</span>
            <span onClick={setDog}>dog</span>
            <span>accesories</span>
          </div>}
          {view ==="cartList" && <CartList one={bucket} card={data}/>}
          {view ==="cart"&&<CartList/>}  
          {view === "detail" && <CartDetails one={oneCard}/>} 
          {view==="update"&&<Update obj={update}/>}
          {view === "search" && <Search />}
          {view==="add" && <Add ones={bucket} />}
    </div>
  );
}

export default App;
