import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Section from './section';
import Cards from './Cards';
import axios from 'axios'
import CartList from './CartList';
import Category from './category';

function App() {

  const [menuView, setMenuView] = useState(false);
  const [view,setView] = useState("Allcarts");
  const [oneCard,setOneCard]=useState({});
  const [trigger,setTrigger]=useState({});
  const [data,setData]=useState([]);
  const[dog,setDog]=useState([]);
  const[cat,setCat]=useState([])
  const[accesories,setAccesories]=useState([]);
  const [food,setFood]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:5000/api/get').then((res)=>{
      setData(res.data)
      const dog=data.filter((e)=>e.category === "dog")
      const cat=data.filter((e)=>e.category === "cat")
      const food=data.filter((e)=>e.category === "food")
      const accesories=data.filter((e)=>e.category === "accesories")
    
      setDog(dog)
    setCat(cat)
    setAccesories(accesories)
    setFood(food)
    }).catch((err)=>{
      console.log(err)
    })
  },[trigger])

  const toggleMenu = ()=> {
    setMenuView(!menuView)
  }
  const switchView = (x) => {
    setView(x)
  }

  const one=(obj)=>{
    setOneProduct(obj)
    setView("detail")
  }

  return (
    <div>
    <Navbar c={switchView} toggle={toggleMenu}/>
    <Section />
    {view === "category" && <Category /> }
    {view ==="cart" && <CartList/>} 
    {view === "detail" && <ProdCart oneCard={oneCard}/>} 
    {view === "Allcarts" && <Cards one={one} datas={data} /> }
    </div>
  )
}

export default App
