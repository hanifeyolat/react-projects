import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FILTER_PRODUCTS,
         selectedProducts, 
         SET_PRODUCTS,
         FREE_SHIPPING} from '../../redux/ProjectSlice'

const SideFilterPanel = () => {

      const dispatch =useDispatch()
      const products= useSelector(selectedProducts)
      var categories = [...new Set ( products.map(p => p.category))]
      var brands = [...new Set ( products.map(p => p.brand))]
      var prices =[...new Set ( products.map(p => p.price))]
      var maxPrice = Math.max(...prices)
      var minPrice = Math.min(...prices)

      const [search,setSearch] = useState("")
      const [range,setRange] = useState(100000)
      const [selectedCategory,setSelectedCategory] = useState("all")
      const [selectedBrand,setSelectedBrand] = useState("all")
     

      useEffect(() => {
            let newSearch=search.toLowerCase()
            dispatch(FILTER_PRODUCTS({search: newSearch}))
      }, [search,dispatch])

      useEffect(() => {
            let newSearch=search.toLowerCase()
            let newCategory=selectedCategory.toLowerCase()
            let newBrand=selectedBrand.toLowerCase()
            dispatch(FILTER_PRODUCTS({category: newCategory ,search: newSearch, range: range, brand: newBrand}))
      }, [selectedCategory,selectedBrand,search,range,dispatch])
      
      const clearFilters = () => {
            setSelectedCategory("all")
            setSelectedBrand("all")
            setRange(100000)
            setSearch("")
            dispatch(SET_PRODUCTS({products:products}))
      }


  return (
    <div className='side-filter-container'>
      <input type="text"
             className='search-bar'
             placeholder='Search a product ... '
             value={search}
             onChange={ (e)=> setSearch(e.target.value)}  />

      <div className='flex-item '>
            <h4>Categories</h4>
            <div className="categories-btns">
                  <button className='cat-btn btn-active' value="All">All</button>
                  
                  {categories.map((cat,idx)=> (
                        <button className='cat-btn'
                              value={`${cat}`}
                              key={idx}
                              onClick={(e) => setSelectedCategory(e.target.value)} >{cat}</button>  ))}
            </div>
      </div>

      <div className='flex-item'>
            <h4>Brands</h4>
            <select className='company-selector' onChange={(e)=> setSelectedBrand(e.target.value)}>
                <option value="All">All</option>
                {
                  brands.map((brand,idx)=> (
                        <option value={`${brand}`} key={idx}>{brand}</option>
                  ))
                }
            </select>
      </div>

      <div className='flex-item'>
            <h4>Price</h4>
            <p>{range ? `$${range}` : `$${minPrice} - $${maxPrice}`}</p>
            <input type="range" className='range' min={minPrice} max={maxPrice} value={range} onChange={(e) => setRange(e.target.value)}  />
      </div>

      <button className='clear-filter-btn'  onClick={() => clearFilters()}> Clear Filters</button>
    </div>
  )
}

export default SideFilterPanel