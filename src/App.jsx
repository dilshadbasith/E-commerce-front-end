import { useState } from "react";
import "./App.css";
import Home from "./Home";
import { myContext } from "./Components/Context";
import { Route, Routes } from "react-router-dom";
import BrowseHot from "./Components/BrowseHot/BrowseHot";
import Cart from "./Components/Cart/Cart";
import { productsdata } from "./assets/Products";
import AllProducts from "./Components/All products/AllProducts";
import BrowseProduct from "./Components/Browse Products/BrowseProduct";

function App() {
  const [products, setProducts] = useState(productsdata);
  const [cart,setCart] = useState([])
  return (
    <>
      <>
        <myContext.Provider value={{cart,setCart,products,setProducts}}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/browseHot/:id" element={<BrowseHot/>}/>
            <Route path="/browseProduct" element={<BrowseProduct/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/allproducts" element={<AllProducts/>}/>
          </Routes>
        </myContext.Provider>
      </>
    </>
  );
}

export default App;
