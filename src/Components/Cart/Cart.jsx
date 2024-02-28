
import React, { useContext, useState } from "react";
import { Button, Card, Typography } from "@material-tailwind/react";
import { myContext } from "../Context";
import { MdDelete } from "react-icons/md";

const TABLE_HEAD = ["Product", "Price", "Quantity", "Subtotal","", ""];

function Cart() {
  const { cart, setCart } = useContext(myContext);

  const handleDecrement = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.qty > 1) {
        return { ...item, qty: item.qty - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleIncrement = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  return (
    <div>
      <h1 className="text-center text-4xl font-poppins">Cart Items</h1>
      <Card className="h-full w-full overflow pt-4 pr-6 pl-6">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
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
            {cart.map((item, index) => (
              <tr key={index} className="even:bg-blue-gray-50/50">
                <td className="p-4 flex items-center gap-3">
                  <img src={item.src} alt="image" className="h-[2rem]" />
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold"
                  >
                    {item.name}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold"
                  >
                    {item.emi}/-
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal flex gap-2 items-center"
                  >
                    <button
                      onClick={() => handleDecrement(item.id)}
                      className="p-2 font-bold text-lg "
                    >
                      -
                    </button>
                    <span className="p-2 font-bold text-lg">{item.qty}</span>
                    <button
                      onClick={() => handleIncrement(item.id)}
                      className="p-2 font-bold text-lg"
                    >
                      +
                    </button>
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-bold"
                  >
                    {item.emi * item.qty}/-
                  </Typography>
                </td>
                <td className="p-4">
                  <Button>Buy</Button>
                </td>
                <td className="p-4">
                  <Typography
                    as="a"
                    href="#"
                    color="blue-gray"
                    className="text-xl"
                  >
                    <MdDelete />
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

export default Cart;
