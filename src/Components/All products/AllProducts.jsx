import React, { useContext } from "react";
import { myContext } from "../Context";
import Navbar1 from "../Navbar/Navbar1";
import { useNavigate } from "react-router-dom";

function AllProducts() {
  const { products } = useContext(myContext);
  const navigate = useNavigate()


  return (
    <>
      <div className="pt-4 pl-3">
        <Navbar1 />
      </div>
      <div className="flex justify-around items-center flex-wrap gap-4 pt-8 ">
        {products?.map((item) => (
          <div
            key={item.id}
            className=" w-[25rem] h-[27rem] border-2  shadow-2xl hover:scale-105 transition"
          >
            <div className="flex items-center justify-around flex-col gap-7 pt-3">
              <div>
                <img src={item.src} alt="image" className="h-[10rem] " />
              </div>
              <div>
                <p className="text-sm text-blue-500 font-poppins">
                  {item.spec}
                </p>
              </div>
              <div>
                <p className="text-lg text-center font-bold font-poppins">
                  {item.name}
                </p>
              </div>
              <div>
                <span className="flex gap-3 items-center">
                  <p className="text-sm">OMR</p>
                  <p className="font-bold">{item.emi}/-</p>
                  <p className="text-gray-500 font-bold line-through">
                    {item.notemi}/-
                  </p>
                </span>
              </div>
              <button onClick={()=>navigate(`/browseProduct/${item.id}`)} className="bg-blue-500 text-white pt-3 pb-3 pl-8 pr-8 text-xs font-bold hover:bg-blue-700">
                Veiw
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllProducts;
