import React from 'react'
import {FaTrash} from "react-icons/fa"
import { useDispatch } from 'react-redux'
import { DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_FROM_CART } from '../../redux/ProjectSlice'


const CartItem = ({product}) => {


    const dispatch=useDispatch()


  return (
    <div className='cart-product-item' key={product.id}>
        <div className='item-area'>
            <div className='item-img'>
                <img src={require(`../../images/${product.url}`)} alt={product.name}/>
            </div>  
            <div className='item-text'>
                <h3>{product.name}</h3>
            </div>
        </div>
        <p className='product-total'> ${product.price}</p>
        <div className='quantity-area'>
            <button className="quantity-btn" onClick={() => dispatch(INCREASE_QUANTITY({product: product}))}> + </button>
            <span className="quantity"> {product.quantity} </span>
            <button className="quantity-btn" onClick={() => dispatch(DECREASE_QUANTITY({product: product}))}> - </button>
        </div>
        <div className='subtotal'>
            <p> $ {product.price*product.quantity}</p>
            <button className='trash-btn' onClick={() => dispatch(REMOVE_FROM_CART({product: product}))}> <FaTrash/> </button>
        </div>
    </div>
  )
}

export default CartItem