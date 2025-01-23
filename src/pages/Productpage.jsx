import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Appcontext } from "../App";
import Loader from "../components/loader";
import Goback from "../assets/buttons/goback";
import useTitle from "../customhooks/title";
import useTop from "../customhooks/scrolltop";

export default function Productpage() {
  const { id } = useParams();
  const {
    products,
    isproducterror,
    remove_from_wishlist,
    cart,
    isproducstloading,
    addTOwishlist,
    wishlist,
    addToCart,
    remove_from_cart,
    selectsize,
    setselectsize,
  } = useContext(Appcontext);
  const product = products?.find((product) => product.id == id) || [];

  useTitle(product.productname);
  useTop();

  if (isproducstloading) return <Loader />;
  const goback = useNavigate();
  return (
    <div className="font-sans">
      <Goback navigateback={() => goback(-1)} />

      <div
        key={product.id}
        className="grid items-start grid-cols-1 md:grid-cols-2 p-4 gap-12 max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-2 md:sticky top-0 gap-3">
          <div>
            <img
              src={product.productimage}
              alt="Product"
              className="w-full h-full object-cover object-top rounded-md"
            />
          </div>
          <div>
            <img
              src={product.productimage}
              alt="Product"
              className="w-full h-full object-cover object-top rounded-md"
            />
          </div>
          <div>
            <img
              src={product.productimage}
              alt="Product"
              className="w-full h-full object-cover object-top rounded-md"
            />
          </div>
          <div>
            <img
              src={product.productimage}
              alt="Product"
              className="w-full h-full object-cover object-top rounded-md"
            />
          </div>
        </div>

        <div className="max-lg:max-w-2xl">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-800">
              {product.productname}
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              {" "}
              {product.productfor}, {product.type}{" "}
            </p>
          </div>

          <div className="mt-8">
            <p className="text-gray-800 text-4xl font-bold">
              ${product.productprice}
            </p>
            <p className="text-gray-500 text-sm mt-2">
              {/* <strike>$42</strike> */}
              <span className="text-sm ml-1">Tax included</span>
              {product.productquantity < 10 && (
                <span className="text-sm ml-1 block text-red-600 font-bold py-2">
                  * {product.productquantity} pieces left
                </span>
              )}
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-800">
              Colors Available
            </h3>
            <div className="flex flex-wrap gap-2 mt-4">
              <button
                type="button"
                style={{ backgroundColor: product.productcolor }}
                className="w-10 h-10 bg-gray-800 border border-orange-500 hover:border-orange-500 rounded-full shrink-0"
              ></button>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-800">Choose a Size</h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {product.size?.map((size) => (
                <button
                  key={size}
                  onClick={(e) => setselectsize(e.target.value)}
                  type="button"
                  value={size}
                  className={`${
                    selectsize === size && "border-orange-500"
                  }  w-10 h-10 border hover:border-orange-500 font-semibold text-gray-800 text-sm rounded-full flex items-center justify-center shrink-0`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-4 max-w-xs">
            {cart.map((item) => item.id).includes(product.id) ? (
              <button
                onClick={() => remove_from_cart(product.id)}
                type="button"
                className="w-full px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-md"
              >
                {product.productquantity === 0
                  ? "Out of stock"
                  : "Remove from cart"}
              </button>
            ) : (
              <button
                onClick={() => addToCart(product)}
                type="button"
                className="w-full px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-md"
              >
                {product.productquantity === 0 ? "Out of stock" : "Add to cart"}
              </button>
            )}
            {wishlist.map((item) => item.id).includes(product.id) ? (
              <button
                onClick={() => remove_from_wishlist(product.id)}
                type="button"
                className="w-full px-4 py-2.5 border border-orange-500 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded-md"
              >
                Remove from wishlist
              </button>
            ) : (
              <button
                onClick={() => addTOwishlist(product)}
                type="button"
                className="w-full px-4 py-2.5 border border-orange-500 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded-md"
              >
                Add to wishlist
              </button>
            )}
          </div>

          <div className="mt-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                Product Description
              </h3>
              <p className="text-sm text-gray-500 mt-4">
                {product.productdescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
