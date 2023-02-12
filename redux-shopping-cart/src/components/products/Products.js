import React from 'react'
import { useSelector } from 'react-redux'
import { filteredProducts, selectedProducts } from '../../redux/ProjectSlice'
import MainFilterPanel from './MainFilterPanel'
import SideFilterPanel from './SideFilterPanel'

const Products = () => {
  
  const products= useSelector(selectedProducts)

  return (
   <div className='products-container'>
    <div className='filter-panel-container'>
        <SideFilterPanel products={products} />
        <MainFilterPanel products={products} />   
    </div>
   </div>
  )
}

export default Products