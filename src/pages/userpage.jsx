import { useContext, useState } from "react";
import { Appcontext } from "../App";
import { Link, useParams, useSearchParams } from "react-router-dom";
import Userorder from "../components/userorder";
import Showuserorder from "../components/showuserorder";

export default function Userpage() {
  const { user, orders, cart, wishlist } = useContext(Appcontext);
  const [siiuid, setsiiuid] = useSearchParams({ show: "info" });
  const currentshow = siiuid.get("show");
  const size = siiuid.get("size");
  const { id } = useParams();
  const userorder = orders?.filter((order) => order.email == user?.email);

  const [showorders, setshoworders] = useState(null);
  return (
    <div className="p-16">
      <div className="p-8 bg-white shadow mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
            <div>
              <p className="font-bold text-gray-700 text-xl">
                {" "}
                {cart?.length}{" "}
              </p>
              <p className="text-gray-400">In Your cart</p>
            </div>
            <div>
              <p className="font-bold text-gray-700 text-xl">
                {" "}
                {wishlist?.length}
              </p>
              <p className="text-gray-400">IN Your wishlist</p>
            </div>
            <div>
              <p className="font-bold text-gray-700 text-xl">
                {" "}
                {userorder.length || 0}{" "}
              </p>
              <p className="text-gray-400">your orders</p>
            </div>
          </div>
          <div className="relative">
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <img className="h-24 w-24 rounded-full" src={user?.photoURL} />
            </div>
          </div>
          <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            <button
              onClick={() => setsiiuid({ show: "info" }, { replace: true })}
              className={`text-white py-2 px-4 uppercase rounded ${
                currentshow === "info" ? "bg-blue-500" : "bg-gray-700"
              }  hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5`}
            >
              Info
            </button>

            <button
              onClick={() =>
                setsiiuid(
                  {
                    show: "cart",
                  },
                  { replace: true }
                )
              }
              className={`text-white py-2 px-4 uppercase rounded ${
                currentshow === "cart" ? "bg-blue-500" : "bg-gray-700"
              }  hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5`}
            >
              Cart
            </button>
            <button
              onClick={() =>
                setsiiuid(
                  {
                    show: "Order",
                  },
                  { replace: true }
                )
              }
              className={`text-white py-2 px-4 uppercase rounded ${
                currentshow === "Order" ? "bg-blue-500" : "bg-gray-700"
              }  hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5`}
            >
              Order
            </button>
            <button
              onClick={() => setsiiuid({ show: "wishlist" }, { replace: true })}
              className={`text-white py-2 px-4 uppercase rounded ${
                currentshow === "wishlist" ? "bg-blue-500" : "bg-gray-700"
              }  hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5`}
            >
              Wishlist
            </button>
          </div>
        </div>
        <div className="mt-20 text-center border-b pb-12">
          <h1 className="text-4xl font-medium text-gray-700">
            {user?.displayName}{" "}
          </h1>
          <p className="font-light text-gray-600 mt-3"> {user?.email} </p>
          <p className="mt-8 text-gray-500">id: {user?.uid}</p>
        </div>
        <div className="mt-12 flex flex-col justify-center">
          {currentshow === "info" && (
            <>
              <span className="text-center my-5 text-lg font-bold">
                Order Confirmation Policy:
              </span>
              <p className="text-gray-600 text-center font-light lg:px-16">
                After placing your order, a member of our team will contact you
                via phone to confirm the details. Please ensure your contact
                information is accurate and accessible. Orders that cannot be
                confirmed within 24 hours may be canceled automatically. If you
                wish to cancel your order, you can do so during the confirmation
                call or by contacting our support team directly. Once an order
                is confirmed, any further changes or cancellations may be
                subject to additional conditions.
              </p>
              <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
                Show more
              </button>
            </>
          )}
          {currentshow === "cart" && (
            <>
              <div className="font-sans bg-white py-4 mx-auto lg:max-w-7xl md:max-w-4xl">
                <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-16">
                  Your Cart
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-sm:justify-center gap-y-8 gap-x-6">
                  {cart?.map((item) => (
                    <Link to="/cart" key={item.id}>
                      <div className="flex gap-6 overflow-hidden cursor-pointer">
                        <div className="w-24 h-24 shrink-0 bg-gray-100 p-3 overflow-hidden aspect-w-16 aspect-h-8 rounded-lg">
                          <img
                            src={item.productimage}
                            alt="product3"
                            className="h-full w-full object-contain"
                          />
                        </div>

                        <div>
                          <h3 className="text-base font-bold text-gray-800">
                            {item.productname}
                          </h3>
                          <h4 className="text-lg text-blue-600 font-bold mt-2">
                            ${item.productprice}
                          </h4>
                        </div>
                      </div>
                    </Link>
                  ))}

                  <div className="flex gap-6 overflow-hidden cursor-pointer"></div>
                </div>
              </div>
            </>
          )}

          {currentshow === "wishlist" && (
            <>
              <div className="font-sans bg-white py-4 mx-auto lg:max-w-7xl md:max-w-4xl">
                <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-16">
                  Your whishlist
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-sm:justify-center gap-y-8 gap-x-6">
                  {wishlist?.map((item) => (
                    <Link key={item.id} to={`/productpage/${item.id}`}>
                      <div className="flex gap-6 overflow-hidden cursor-pointer">
                        <div className="w-24 h-24 shrink-0 bg-gray-100 p-3 overflow-hidden aspect-w-16 aspect-h-8 rounded-lg">
                          <img
                            src={item.productimage}
                            alt="product3"
                            className="h-full w-full object-contain"
                          />
                        </div>

                        <div>
                          <h3 className="text-base font-bold text-gray-800">
                            {item.productname}
                          </h3>
                          <h4 className="text-lg text-blue-600 font-bold mt-2">
                            ${item.productprice}
                          </h4>
                        </div>
                      </div>
                    </Link>
                  ))}
                  <div className="flex gap-6 overflow-hidden cursor-pointer"></div>
                </div>
              </div>
            </>
          )}
          {currentshow === "Order" && (
            <>
              <div className="w-full font-sans bg-white py-4 mx-auto lg:max-w-7xl md:max-w-4xl">
                <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-16">
                  Your Orders
                </h2>
                {userorder.map((orders) => (
                  <>
                    <Userorder setshoworders={setshoworders} orders={orders} />
                    {showorders == orders.id && (
                      <div className="flex w-full flex-wrap gap-4 justify-center">
                        {orders.order?.map((order) => (
                          <Showuserorder
                            showorders={showorders}
                            name={order.productname}
                            ordersimg={order.productimage}
                            price={order.productprice}
                            quantity={order.quantity}
                            productdescription={order.productdescription}
                          />
                        ))}
                      </div>
                    )}
                  </>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
