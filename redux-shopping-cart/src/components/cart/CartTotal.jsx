import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CLEAR_CART } from '../../redux/ProjectSlice'

const CartTotal = () => {

    const ReduxCartItem = useSelector(state => state.product.cart)
    let [FreeShipping,setFreeShipping] = useState(false)
    let [subTotal,setSubTotal] = useState(0)
    let [orderTotal,setOrderTotal] = useState(0)
    const dispatch =useDispatch()

    const calculateTotal = () => {
        subTotal=0
        orderTotal=0
        ReduxCartItem.map( (item) =>subTotal= subTotal+(Number(item.price)*Number(item.quantity)) )
        setSubTotal(subTotal)
        FreeShipping ? setOrderTotal(subTotal+5) : setOrderTotal(subTotal) 
    }

    useEffect(() => {  
        calculateTotal()
    },[ReduxCartItem,FreeShipping])

  
    return (
        <div className='flex-container'>
            <div className='cart-total-container'>
                <h2>{`Subtotal: $${subTotal}`}</h2>
                <div className='free-shipping'>
                    <label htmlFor="free-shipping"> Free Shipping</label>
                    <input name="free-shipping" type="checkbox" onChange={(e)=> setFreeShipping(!FreeShipping)}/>
                </div>
                <hr className='cart-total-line'/>
                <p>{`Order Total: $${orderTotal}`}</p>
            </div>
            <button className='clear-shopping-cart' onClick={() => dispatch(CLEAR_CART())}> Clear Shopping Cart</button>
        </div>
    )
}

export default CartTotal