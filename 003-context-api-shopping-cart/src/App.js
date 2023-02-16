
import React, { useEffect,useState } from "react"
import Siparis from './Siparis';
import Cart from './Cart';
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom';
import { UserContext } from "./UserContext.js";
import {data as data} from "./data.js"

function App() {

  const [cart, setCart] = useState([])
  console.log("App komponentinin içindeki cart: " , cart)
  const [total,setTotal] = useState(0)
  let addToCart = (e) => {
    e.preventDefault()
      
    if(cart.length ===0 ) {
      setCart(
        [
          {id:e.target.dataset.id, count:1}
        ]
      )
    }else{
      console.log("cart: ",cart)
      let x= cart.find( item => Number(item.id) === Number( e.target.dataset.id) && item.count++ )    
      if(!x) {
        setCart([...cart , {id: e.target.dataset.id , count: 1}])
      }

    }

  }

  let removeFromCart = (e) => {
    e.preventDefault()
    console.log(e.target)
    setCart([ ... cart.filter(item => Number(e.target.dataset.id) !== Number(item.id))])
    
  }
 let increase = (e) => {
    e.preventDefault()
    console.log(e.target.dataset.id)
    cart.find( item => Number(e.target.dataset.id) === Number(item.id)).count++
    setCart([...cart])
    console.log("increase içindeki cart: ", cart)
 }
  let decrease =(e) =>{
    e.preventDefault()
    console.log("tiklandiiii")
    cart.find( item => Number(e.target.dataset.id) === Number(item.id)).count > 1 ?  cart.find( item => Number(e.target.dataset.id) === Number(item.id)).count-- : console.log("item count 1")

    setCart([...cart])
    console.log("decrease içindeki cart: ", cart)
   
  }
  useEffect(() => {
    let  totalPrice=0
    cart.map(item => (
      data.map( book => {
          if(Number(item.id) ===Number(book.id)){

            totalPrice= totalPrice+ (item.count * book.price)
          }
         })
      ))

    setTotal(totalPrice)
  },[cart])

  return (
        <UserContext.Provider value={{data,cart,setCart,addToCart,removeFromCart,increase,decrease,total}}>
           <div className="uygulama">  
              <h1>BASIC SHOPPING CART</h1>

              <ul className='menu-container'>
                <li><Link to="/siparis" element={<Siparis />}> Kitap Listesi</Link></li>
                <li><Link to="/cart"  element={<Cart/>}> Sepetim</Link></li>
              </ul>

              <Routes>
                <Route exact path="/siparis"  element={<Siparis/>}/>
                <Route  path="/cart" element={<Cart/>}/>
              </Routes>

            
          </div>

        </UserContext.Provider>
  );
}

export default App;
