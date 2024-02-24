import { useState } from "react";
import "./App.css";
import Home from "./Home";
import { hotProductsdata } from "./assets/HotProductsList";
import { myContext } from "./Components/Context";
import { Route, Routes } from "react-router-dom";
import BrowseHot from "./Components/BrowseHot/BrowseHot";
import Cart from "./Components/Cart/Cart";

function App() {
  const [hotProducts, setHotProducts] = useState(hotProductsdata);
  const [cart,setCart] = useState([])
  return (
    <>
      <>
        <myContext.Provider value={{hotProducts,setHotProducts,cart,setCart}}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/browseHot/:id" element={<BrowseHot/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </myContext.Provider>
      </>
    </>
  );
}

export default App;
