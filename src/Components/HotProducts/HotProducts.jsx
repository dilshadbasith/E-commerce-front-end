import React, { useContext, useEffect } from "react";
import { myContext } from "../Context";
import { useNavigate } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'

function HotProducts() {
  const { products } = useContext(myContext);
  const navigate = useNavigate()


  const hotProducts=products.filter((item)=>item.status=="hot")

  useEffect(()=>{
    AOS.init({duration:1000})
  },[])
  return (
    <div className="pt-10 pl-36 pb-10 pr-36">
      <div className="flex justify-between">
      <h1 className="pb-5 text-4xl font-poppins font-bold" data-aos="fade-down">Products</h1>
      <h1 className=" font-poppins font-bold cursor-pointer" onClick={()=>navigate('/allproducts')}>All Products</h1>
      </div>
      <div className="flex" >
        <div className=" w-[40rem] h-[30rem] border-2 border-gray-300" data-aos="fade-right">
          <div className="flex items-center justify-around flex-col gap-7 pt-3">
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/054b/b5af/fb4c15d6c8e92034193e188cfbde0b22?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iLPUC7jveawC9kGmuz25o7JQ-XdVkLFA9r0BTz8fHyagMoNwG9-6RPySgKFKa32jiJRyo~ejXcqwLkVfdetqXsOComCb8x4KUgdniRY0MYorI67StNBcJ-2B7K4IGIX6TxtN~4WiVBmw2CRLIU8wIHqrtbU48SXRCwi-tPralTyfSkR1cxRZZkc7T6yEPy5ayeGnjzxEMQ3HDf~2-fYZ1b-QA0CEYGBuivYt~JpupOBO0qNQt4SlTCKarBBsN-LR9YkxZYx6VGnDRZLGDkFNkCVOoLop59kS4uDzduhl7tDY1cBbx3jfZSGEvasil3q4dDuBnnLEIt4eJNPcqCRYhQ__"
                alt="image"
                className="h-[10rem] "
              />
            </div>
            <div>
              <p className="text-sm text-blue-500 font-poppins">
                AUDIO AMPLIFIER,HDMI PROJECTORS{" "}
              </p>
            </div>
            <div>
              <p className="text-lg text-center font-bold font-poppins">
                iPhone 14 Pro max 256GB - Deep purple
              </p>
            </div>
            <div>
              <span className="flex gap-3 items-center">
                <p className="text-sm">OMR</p>
                <p className="font-bold">120000/-</p>
                <p className="text-gray-500 font-bold line-through">125000/-</p>
              </span>
            </div>
            <button className="bg-blue-500 text-white pt-3 pb-3 pl-8 pr-8 text-xs font-bold hover:bg-blue-700">
              ADD TO CART
            </button>
          </div>
        </div>

        <div className="flex  flex-wrap" data-aos="fade-left">
          {hotProducts?.map((item, index) => (
            <div
              key={index}
              className=" w-[15rem] h-[15rem] border-2 border-gray-300 cursor-pointer"
              onClick={()=>navigate(`/browseHot/${item.id}`)}
              data-aos="flip-left"
            >
              <h1 className="bg-green-600 mt-3 ml-2 mr-44 pl-3 text-xs text-white pt-1 pb-1">HOT</h1>

              <div className="flex items-center justify-around flex-col gap-2 pt-3">
                <div>
                  <img src={item.src} alt="image" className="h-[5rem] " />
                </div>
                <div>
                  <p className="text-sm text-blue-500 font-poppins">
                    SMART PHONE{" "}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-center font-bold font-poppins">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HotProducts;
