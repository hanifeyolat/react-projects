import React, {useContext} from 'react'
import { UserContext } from './UserContext.js'
const Cart = () => {
  const {data,cart,decrease,increase,removeFromCart,total} =useContext(UserContext)
  console.log("cart komponentinin içindeki cart : " , cart)
  return(
      <div className='cart-container'>
        <h1 className='total'> Total : {total} TL</h1>
        {
           cart.map(item => (
             data.map( book => {
                  if(Number(item.id) === Number(book.id)) {
                      return (
                        <div key={book.id} className="book-item">
                            <img src={book.image} alt={book.name}></img>
                            <div className='book-text-content'>
                              <h2>{book.name}</h2>
                              <p>{book.author}</p>
                              <p> Sepetinizde {item.count} adet bulunmaktadır.</p>
                              <p className="book-price">{book.price} TL</p>
                              <div className='cart-buttons'>
                                  <button data-id={book.id} onClick={decrease}>-</button>
                                  <button data-id={book.id} onClick={removeFromCart}>Sepetten Çıkar</button>
                                  <button data-id={book.id} onClick={increase}>+</button>
                              </div>
                            </div>
                        </div>
                      )
                  }
            })
             ))
        }
      </div>
  )
  
}

export default Cart