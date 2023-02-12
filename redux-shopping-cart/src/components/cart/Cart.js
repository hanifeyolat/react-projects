import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import CartTotal from './CartTotal'


const Cart = () => {

      const ReduxCartItem = useSelector(state => state.product.cart)
    

      return (
        <div className='products-container'>
              <div className='cart-inner-container'>
             
                  <div className='cart-top-container'>
                      <p>Item</p>
                      <p>Price</p>
                      <p>Quantity</p>
                      <p>Subtotal</p>
                  </div>
                  <hr className='cart-line'/>
                  <div className='cart-products-container'>
                  {
                    ReduxCartItem.length===0 ? 
                    <h2>Shopping Cart is empty. Please add something to buy.</h2> : 
                    ReduxCartItem.map( (product,idx) =>  <CartItem product={product} key={idx}/>)
                  }
                  </div>
                  <hr className='cart-line'/>
                  <div className='cart-btn-container'>
                      <Link to="/products" className='continue-shopping-cart'> &larr; {`  Continue Shopping`}</Link>
                      <CartTotal/>
                  </div>
              </div>
            </div>
      )
}

export default Cart