import { useState } from "react";
import "./App.css";
import Home from "./Home";
import { hotProductsdata } from "./assets/HotProductsList";
import { myContext } from "./Components/Context";

function App() {
  const [hotProducts, setHotProducts] = useState(hotProductsdata);
  return (
    <>
      <>
        <myContext.Provider value={{hotProducts,setHotProducts}}>
          <Home />
        </myContext.Provider>
      </>
    </>
  );
}

export default App;
