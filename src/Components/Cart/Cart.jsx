import React, { useContext } from 'react'
import { Card, Typography } from "@material-tailwind/react";
import { myContext } from '../Context';

const TABLE_HEAD = ["Product", "Price", "Quantity", "Subtotal"];

function Cart() {
    const {cart}=useContext(myContext)
  return (
    <div>
        <h1 className='text-center text-4xl font-poppins'>Cart Items</h1>
         <Card className="h-full w-full overflow pt-4 pr-6 pl-6">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cart.map((item,index) => (
            <tr key={index} className="even:bg-blue-gray-50/50">
              <td className="p-4 flex items-center gap-3">
                <img src={item.src} alt="image" className='h-[2rem]'/>
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {item.name}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {item.emi}/-
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                  Edit
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
    </div>
  )
}

export default Cart