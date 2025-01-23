import { useContext, useState } from "react";
import { Appcontext } from "../App";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroimg from "/src/assets/imgs/management-img.jpg";
export default function Hero() {
  const { products } = useContext(Appcontext);

  const [searsh, setsearsh] = useState("");
  return (
    <header className="font-[sans-serif] max-w-6xl max-md:max-w-md mx-auto h-[100dvh] flex flex-col justify-center">
      <div className="grid md:grid-cols-2 items-center md:gap-10 gap-6">
        <div className="max-md:order-1 max-md:text-center">
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="mt-4 text-sm font-bold text-blue-600"
          >
            <span className="rotate-90 inline-block mr-2 mb-2">|</span>
            Checking off everything on our to-do list in new
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0, x: 0 }}
            transition={{ duration: 1 }}
            className="text-gray-800  md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px]"
          >
            Schedule meetings effortlessly
          </motion.h1>
          <motion.p className="mt-5 text-base text-gray-500 leading-relaxed">
            Discover the latest trends, shop your style, and redefine your
            wardrobe—all in one place
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-10 flex px-4 py-4 rounded-lg bg-gray-100 overflow-hidden"
          >
            <input
              type="text"
              onChange={(e) => setsearsh(e.target.value)}
              placeholder="Search Something..."
              className="w-full    outline-none bg-transparent text-sm"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="20px"
              className="cursor-pointer fill-gray-400"
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
          </motion.div>
          {searsh !== "" && (
            <div className="w-full px-4 py-3 overflow-x-auto bg-gray-200 h-auto">
              {searsh !== "" &&
                products
                  ?.filter((product) =>
                    product.productname.toLowerCase().startsWith(searsh)
                  )
                  .map((product) => (
                    <div>
                      {!product ? (
                        <p>no product found</p>
                      ) : (
                        <Link
                          key={product.id}
                          to={`/productpage/${product.id}`}
                        >
                          <div class="flex bg-white my-2 flex-wrap items-center cursor-pointer shadow-[0_2px_6px_-1px_rgba(0,0,0,0.3)] rounded-lg w-full p-4">
                            <img
                              src={product.productimage}
                              class="w-10 h-10 rounded-full"
                            />
                            <div class="ml-4 flex-1">
                              <p class="text-sm text-gray-800 font-semibold">
                                {product.productname}
                              </p>
                              <p class="text-xs text-gray-500 mt-0.5">
                                {product.productprice} $
                              </p>
                            </div>
                          </div>
                        </Link>
                      )}
                    </div>
                  ))}
            </div>
          )}
        </div>

        <div className="md:h-[400px] p-2">
          <motion.img
            initial={{ width: "100px" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1 }}
            src={heroimg}
            className="w-full h-full object-contain rounded-lg"
            alt="Dining Experience"
          />
        </div>
      </div>
    </header>
  );
}
