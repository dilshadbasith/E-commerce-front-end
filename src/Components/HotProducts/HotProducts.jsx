import React, { useContext } from "react";
import { myContext } from "../Context";
import { useNavigate } from "react-router-dom";

function HotProducts() {
  const { hotProducts } = useContext(myContext);
  const navigate = useNavigate()
  return (
    <div className="pt-10 pl-36 pb-10 pr-36">
      <div className="flex justify-between">
      <h1 className="pb-5 text-4xl font-poppins font-bold">Products</h1>
      <h1 className=" font-poppins font-bold cursor-pointer" onClick={()=>navigate('/allproducts')}>All Products</h1>
      </div>
      <div className="flex">
        <div className=" w-[40rem] h-[30rem] border-2 border-gray-300">
          <div className="flex items-center justify-around flex-col gap-7 pt-3">
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/054b/b5af/fb4c15d6c8e92034193e188cfbde0b22?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jPq0iu3HKd0QzJirpaDMEe5cznydD4T~78SOJKvxVAUKWqaYvMx9cPWRW3z8SPHbpgJwXxwmGOYK39jhGHs14x0gT1rGtN4rS-ncqJHWfakew4dSIRBdq64xczr3qYKMh~KOOdi2wn9EFEujIWhXuSM4atNGhH5pchxVVGP8nXaaA5Kn7SzC4SILpkoEOMcombA4ffejV7fi46KWDFp0ItKhSa81zDR0LIpLXkRVAO8qaVR1~2nJA3tAA~WRQ99Fekg-Qgz3t1XCGazgn9fMzFiELy1frXBF4XL9JoPHftqpqNFXGZYzcMPQT0C3VCT8xijFMeXXwaHyLs4oZEsSxw__"
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
                <p className="font-bold">4,699/-</p>
                <p className="text-gray-500 font-bold line-through">5,799/-</p>
              </span>
            </div>
            <button className="bg-blue-500 text-white pt-3 pb-3 pl-8 pr-8 text-xs font-bold hover:bg-blue-700">
              ADD TO CART
            </button>
          </div>
        </div>

        <div className="flex  flex-wrap">
          {hotProducts.map((item, index) => (
            <div
              key={index}
              className=" w-[15rem] h-[15rem] border-2 border-gray-300 cursor-pointer"
              onClick={()=>navigate(`/browseHot/${item.id}`)}
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
