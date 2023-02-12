import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className='banner-container'>
        <div className='banner'> 
          <Link className='link' to="/watchlist">İzlenecekler</Link>
          <div className="d-flex"> 
          <Link className='link' to="/watched">İzlenenler</Link>
          <Link className='link' to="/add"><div className='add-btn'><i className="fa-solid fa-plus "></i></div></Link>
          </div>
        </div>
    </div>
  )
}

export default Header