import React, { useContext } from 'react'
import { myContext } from '../Context'
import { useParams } from 'react-router-dom'
import Navbar1 from '../Navbar/Navbar1'

function BrowseHot() {
    const {hotProducts,cart,setCart} = useContext(myContext)
    const {id} = useParams()

    const data=hotProducts.filter((item)=>item.id===parseInt(id))

    const AddtoCart = () =>{
      if(cart.includes(data[0])){
        alert("This Product is already added!")
      }else{
        setCart([...cart,...data])
        alert("Product added")
      }
    }
  return (
    <div className='pt-5 pl-3 overflow-x-hidden'>
    <Navbar1/>
    <div className='flex justify-center items-center h-[100vh]'>
        {
            data.map((item)=>(
                <div className=" w-[30rem] h-[28rem] border-2 border-gray-300 shadow-lg">
                <div className="flex items-center justify-around flex-col gap-7 pt-3">
                  <div>
                    <img
                      src={item.src}
                      alt="image"
                      className="h-[10rem] "
                    />
                  </div>
                  <div>
                    <p className="text-sm text-blue-500 font-poppins">
                      Smart Phone{" "}
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
                      <p className="text-gray-500 font-bold line-through">{item.notemi}/-</p>
                    </span>
                  </div>
                  <button onClick={AddtoCart} className="bg-blue-500 text-white pt-3 pb-3 pl-8 pr-8 text-xs font-bold hover:bg-blue-700">
                    ADD TO CART
                  </button>
                </div>
                </div>  
            ))
        }
    </div>
    </div>
  )
}

export default BrowseHot