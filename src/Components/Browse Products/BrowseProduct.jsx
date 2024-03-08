import React, { useContext } from "react";
import bgImage from "../../assets/bg1.jpg";
import "../Browse Products/BrowseProduct.css";
import { useParams } from "react-router-dom";
import { myContext } from "../Context";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
function BrowseProduct() {
  const { id } = useParams();
  const { products } = useContext(myContext);

  const filtered = products.filter((item) => item.id == id);

  return (
    <div>
      {filtered.map((item) => (
        <div
          className="bg-cover bg-center bg-no-repeat h-screen flex items-center justify-around flex-wrap"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="card1">
            <img src={item.src} alt="" className="h-[25rem]" />
          </div>
          <div className="card2">
            <div className="flex justify-start items-center flex-col">
              <h2 className="text-4xl text-white pt-3">{item.name}</h2>
              <h2 className="text-2xl text-blue-800">{item.spec}</h2>
              <h2 className="text-lg text-white p-4 text-center">
                {item.spec1}
              </h2>
              <h2 className="text-xl text-red-600 font-bold pb-3 text-center line-through">
                RS:{item.notemi}/-
              </h2>
              <h2 className="text-2xl text-blue-700 font-bold text-center">
                NOW AT {item.emi}/-
              </h2>
            </div>
            <div className="flex justify-around">
              <button className="bg-red-700 p-3 font-bold text-white rounded-xl flex items-center gap-1"><FaHeart />Add To Wishlist</button>
              <button className="bg-blue-700 pt-3 pb-3 font-bold pl-5 pr-5 text-white rounded-xl flex items-center gap-1"><FaCartShopping />Add To Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BrowseProduct;
