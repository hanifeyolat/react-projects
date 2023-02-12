import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {FaShoppingCart, FaShoppingBag} from "react-icons/fa"
import { useSelector } from 'react-redux'

const Header = () => {

  const ReduxCartItem = useSelector(state => state.product.cart)
  let [quantity,setQuantity] = useState(0)
  let items=[...ReduxCartItem]

  let calcuteProductsQuantity=()=>{
    quantity=0
    items.map((item) => quantity=quantity+Number(item.quantity)) 
    setQuantity(quantity)
  }

  useEffect(() => {
    calcuteProductsQuantity()
  },[ReduxCartItem])

  return (
    <div className='header-container'>
        <div className='container'>
            <Link to="/products" className='header-link'>  <FaShoppingBag/> Products</Link>
            <Link to="/cart" className='header-link'>
                <p>Cart</p>
                <div className='link-icon'>
                 <FaShoppingCart/>
                 <span className='cart-badge'>{quantity}</span>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Header