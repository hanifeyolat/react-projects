import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_CART } from '../../redux/ProjectSlice'


const ProductItem = ({product,column}) => {
    
    const dispatch=useDispatch()
    const ReduxCartItem = useSelector(state => state.product.cart)
    
    const addToCart = (product) => {
        dispatch(ADD_TO_CART({product:product}))

    }
    return (
        <>
            {column ? 
                 <div className='product-item-cart'>
                    <div className='product-img'>
                        <img src={require(`../../images/${product.url}`)} alt={product.name}/>
                    </div>
                    <div className="product-text">
                        <h3>{product.name}</h3>
                        <h3 className='price'>${product.price}</h3>
                    </div>
                    <button className='add-btn' onClick={() => addToCart(product)} >Add To Cart</button>
                </div>
            :      
                <div className='product-item-row'>
                    <div className='product-img'>
                        <img src={require(`../../images/${product.url}`)} alt={product.name}/>
                    </div>
                    <div className="product-text">
                        <h2>{product.name}</h2>
                        <h2 className='price'>${product.price}</h2>
                        <p>{`${product.desc}`}</p>
                        <button className='add-btn' onClick={() => addToCart(product)} >Add To Cart</button>
                    </div>
                </div>
            }
        </>
    )
}

export default ProductItem