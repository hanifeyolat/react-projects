import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContext'

const Siparis = () => {
  const context =useContext(UserContext)


  return (
   <div className='kitaplar'>
        {context.data.map( book => {
          return (
             <div key={book.id} className="book-item">
                  <img src={book.image} alt={book.name}></img>
                  <div className='book-text-content'>
                    <h2>{book.name}</h2>
                    <p>{book.author}</p>
                    <p className="book-price">{book.price} TL</p>
                    <button className='sepete-ekle' data-id={book.id} 
                          onClick={context.addToCart}>Sepete Ekle</button>
                  </div>
             </div>
          )
        })}
   </div>
  )
}

export default Siparis