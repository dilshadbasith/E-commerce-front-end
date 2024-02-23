import { useState } from "react";
import "./App.css";
import Home from "./Home";
import { hotProductsdata } from "./assets/HotProductsList";
import { myContext } from "./Components/Context";
import { Route, Routes } from "react-router-dom";
import BrowseHot from "./Components/BrowseHot/BrowseHot";

function App() {
  const [hotProducts, setHotProducts] = useState(hotProductsdata);
  return (
    <>
      <>
        <myContext.Provider value={{hotProducts,setHotProducts}}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/browseHot/:id" element={<BrowseHot/>}/>
          </Routes>
        </myContext.Provider>
      </>
    </>
  );
}

export default App;
