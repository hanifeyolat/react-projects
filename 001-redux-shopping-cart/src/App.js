import {BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from './components/Footer';
import Header from './components/Header';
import './index.css';

import Products from "./components/products/Products"
import Cart from "./components/cart/Cart"
import {data} from "./data"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SET_PRODUCTS } from "./redux/ProjectSlice";




function App() {

    var productsData = [...data]
    const dispatch=useDispatch()

    useEffect(() => {
      dispatch(SET_PRODUCTS({products: productsData}))
    }, [dispatch,productsData])
  
  return (
    <BrowserRouter>
       <div className="App">
          <Header/>
           <Routes>
              <Route path="/" exact element={<Products/>} />
              <Route path="/products" exact element={<Products/>} />
              <Route path="/cart" element={<Cart/>} /> 
           </Routes>
          <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;
