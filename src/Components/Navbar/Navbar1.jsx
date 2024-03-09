import React, { useContext } from "react";
import Logo from "../../assets/DEMO.png";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { myContext } from "../Context";

function Navbar1() {
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate();
  const { cart } = useContext(myContext);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <form class="flex items-center max-w-sm mx-auto">
      <div class="flex relative w-full">
        <input
          type="text"
          id="simple-search"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="What are you looking for?"
        />
        <button
          type="submit"
          class="p-2.5  text-sm font-medium text-white bg-black    hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span class="sr-only">Search</span>
        </button>
      </div>
    </form>
  );
  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+44px)] overflow">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <img src={Logo} alt="image" onClick={() => navigate("/")} />
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
                onClick={() => navigate("/cart")}
              >
                <div className="flex">
                  <FaShoppingCart className="text-lg" />
                  <sup className="bg-red-600 text-white ">{cart.length}</sup>  
                </div>
              </Button>
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <FaHeart className="text-lg" />
              </Button>
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <FaUser className="text-lg" />
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex flex-col  items-center gap-x-1">
            <Button
              variant="text"
              size="sm"
              className=" lg:inline-block flex "
              fullWidth
            >
              <span className="flex items-center gap-1">
                <FaShoppingCart className="text-lg" />
                <h3>Cart</h3>
              </span>
            </Button>
            <Button
              variant="text"
              size="sm"
              className=" lg:inline-block flex "
              fullWidth
            >
              <span className="flex items-center gap-1">
                <FaHeart className="text-lg" />
                <h3>Wishlist</h3>
              </span>
            </Button>
            <Button
              variant="text"
              size="sm"
              className=" lg:inline-block flex "
              fullWidth
            >
              <span className="flex items-center gap-1">
                <FaUser className="text-lg" />
                <h3>User</h3>
              </span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
}

export default Navbar1;
