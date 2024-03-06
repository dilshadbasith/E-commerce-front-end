import React, { useContext } from "react";
import bgImage from "../../assets/bg1.jpg";
import "../Browse Products/BrowseProduct.css";
import { useParams } from "react-router-dom";
import { myContext } from "../Context";

function BrowseProduct() {
  const { id } = useParams();
  const { products } = useContext(myContext);

  const filtered = products.filter((item) => item.id == id);

  return (
    <div>
      {filtered.map((item) => (
        <div className="bg-cover bg-center bg-no-repeat h-screen flex items-center justify-around flex-wrap"
        style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="card1"><img src={item.src} alt="" className="h-[25rem]"/></div>
          <div className="card1">
            <h2 className="text-4xl text-white">{item.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BrowseProduct;
