import React, { useEffect, useState } from 'react'
import {HiViewGrid} from "react-icons/hi"
import {MdViewHeadline} from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux'
import { filteredProducts, selectedProducts, SORT_PRODUCTS } from '../../redux/ProjectSlice'
import ProductItem from './ProductItem'


const MainFilterPanel = () => {

    const products = useSelector(selectedProducts)
    const filterPr = useSelector(state=>state.product.filteredProducts)
    var prices =[...new Set(products.map(p => p.price))]
    const [column, setColumn] = useState(true)
    const dispatch =useDispatch()

    const SortProducts = (e) => {
        const option=e.target.value.toLowerCase()
        dispatch(SORT_PRODUCTS({option: option , prices: prices}))
    }

  
  return (
            <div className='main-filter-container'>
                <div className='top-container'>
                    <div className='grid-icons'>
                        <HiViewGrid size={22} onClick={ () => setColumn(true)}/>
                        <MdViewHeadline size={25} onClick={ () => setColumn(false)}/>
                    </div>
                    <span> {filterPr===[] ? products.length : filterPr.length } Products Found </span>
                    <span className='line'></span>
                    <span> Sort By </span>
                    <select className='sort-selector' onChange={(e) => SortProducts(e)}>
                        <option value="Highest Price">Highest Price</option>
                        <option value="Lowest Price">Lowest Price</option>
                        <option value="A-Z"> A-Z</option>
                        <option value="Z-A"> Z-A</option>
                    </select>
                </div>
                <div className={column ? "bottom-container-grid" : "bottom-container-flex"}>   
                    {
                        filterPr.length===0 ?  <h2 className='no-products'> No produts found!</h2>  : 
                        filterPr.map((product,idx)=> <ProductItem product={product} column={column} key={idx}/>)
                    }
                </div>
            </div>
        )
}

export default MainFilterPanel