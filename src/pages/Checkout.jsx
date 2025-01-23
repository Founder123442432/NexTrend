import { useContext, useReducer } from "react";
import useTitle from "../customhooks/title";
import { Appcontext } from "../App";
import Total from "../assets/buttons/total";
import { toast } from "react-toastify";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
export default function Checkout() {
  const { cart, Empty_cart, totalPrice, ttc, user } = useContext(Appcontext);

  useTitle("checkout");

  const initialstate = {
    firsetname: "",
    lastname: "",
    phonenumber: "",
    email: user?.email || "",
    address: "",
    city: "",
    zipcode: "",
    state: "",
  };
  const day = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  const date = `${day}-${month}-${year}`;

  const touserpage = useNavigate();
  function reducer(state, action) {
    switch (action.type) {
      case "on_state_change":
        return { ...state, [action.name]: action.payload };
    }
  }
  function on_state_change(name, payload) {
    dispatch({ type: "on_state_change", name, payload });
  }
  const [
    { firsetname, state, lastname, phonenumber, email, address, city, zipcode },
    dispatch,
  ] = useReducer(reducer, initialstate);

  function order() {
    try {
      if (
        !firsetname ||
        !lastname ||
        !phonenumber ||
        !email ||
        !address ||
        !city ||
        !zipcode ||
        !state
      )
        return toast.error("Please fill out all required fields");
      if (cart.length === 0) return toast.error("your cart is empty");
      const docRef = addDoc(collection(db, "orders"), {
        firsetname,
        lastname,
        phonenumber,
        email,
        address,
        city,
        zipcode,
        state,
        order: cart,
        Subtotal: totalPrice,
        Shipping: ttc.Shipping,
        Tax: ttc.Tax,
        fullprice: totalPrice + ttc.Tax + ttc.Shipping,
        date,
        OrderStatus: "Pending",
        img: user?.photoURL,
      });

      setTimeout(() => touserpage("/yourprofile"), 2000);

      Empty_cart();
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("there was an error");
    }
  }
  return (
    <div className="font-[sans-serif] bg-white">
      <div className="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full">
        <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 sm:h-screen sm:sticky sm:top-0 lg:min-w-[370px] sm:min-w-[300px]">
          <div className="relative h-full">
            <div className="px-4 py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
              <div className="space-y-4">
                {cart?.map((item) => (
                  <>
                    <div key={item.id} className="flex items-start gap-4">
                      <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-300 rounded-md">
                        <img
                          src={item.productimage}
                          className="w-full rounded-full object-contain"
                        />
                      </div>
                      <div className="w-full">
                        <h3 className="text-base text-white">
                          {item.productname}
                        </h3>
                        <ul className="text-xs text-gray-300 space-y-2 mt-2">
                          <li className="flex flex-wrap gap-4">
                            Size
                            <span className="ml-auto"> {item.selectsize} </span>
                          </li>
                          <li className="flex flex-wrap gap-4">
                            Quantity
                            <span className="ml-auto"> {item.quantity} </span>
                          </li>
                          <li className="flex flex-wrap gap-4">
                            Total Price
                            <span className="ml-auto">
                              ${item.productprice * item.quantity}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                ))}

                <Total total={totalPrice + ttc.Shipping + ttc.Tax} />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl w-full h-max rounded-md px-4 py-8 sticky top-0">
          <h2 className="text-2xl font-bold text-gray-800">
            Complete your order
          </h2>
          <form className="mt-8">
            <div>
              <h3 className="text-base text-gray-800 mb-4">Personal Details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    onChange={(e) =>
                      on_state_change("firsetname", e.target.value)
                    }
                    placeholder="First Name"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) =>
                      on_state_change("lastname", e.target.value)
                    }
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={user?.email}
                    disabled
                    onChange={(e) => on_state_change("email", e.target.value)}
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>

                <div>
                  <input
                    type="number"
                    placeholder="Phone No."
                    onChange={(e) =>
                      on_state_change("phonenumber", e.target.value)
                    }
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-base text-gray-800 mb-4">Shipping Address</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Address Line"
                    onChange={(e) => on_state_change("address", e.target.value)}
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="City"
                    onChange={(e) => on_state_change("city", e.target.value)}
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="State"
                    onChange={(e) => on_state_change("state", e.target.value)}
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Zip Code"
                    onChange={(e) => on_state_change("zipcode", e.target.value)}
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>
              </div>

              <div className="flex gap-4 max-md:flex-col mt-8">
                <button
                  type="button"
                  className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-800 max-md:order-1"
                >
                  Cancel
                </button>
                <button
                  onClick={order}
                  type="button"
                  className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Complete Purchase
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
