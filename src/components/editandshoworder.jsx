import { useState } from "react";
import useStopScrolling from "../customhooks/stopscroling";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { toast } from "react-toastify";
export default function Editandshoworder({ setopenOrderD, orders, id }) {
  const showOrder = orders?.find((order) => order.id == id);
  const [EditStatusOpen, setEditStatusOpen] = useState(false);
  const [EditStatus, setEditStatus] = useState("Pending");
  const [isEditStatus, setisEditStatus] = useState(false);

  async function EditDetails(id) {
    try {
      setisEditStatus(true);
      const docRef = doc(db, "orders", id);
      await updateDoc(docRef, {
        OrderStatus: EditStatus,
      });
      setisEditStatus(false);
      toast.success("order status updated");
    } catch (err) {
      console.log(err);
      toast.error("something went wrong");
      setisEditStatus(false);
    }
  }
  useStopScrolling();
  return (
    <div className="fixed    top-0 left-0 right-0 w-full h-full  z-50 bg-gradient-to-b from-gray-100 to-gray-200">
      <svg
        onClick={() => setopenOrderD(null)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-10 sc right-0 absolute top-0 m-5 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>

      <h1 className="text-center text-3xl font-bold my-5">order summary </h1>
      <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto h-full overflow-auto">
        <div className="flex justify-start item-start space-y-2 flex-col ">
          <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
            Order # {orders.indexOf(showOrder) + 1}
          </h1>
          <p className="text-base font-medium leading-6 text-gray-600">
            ordered in: {showOrder.date}
          </p>
        </div>
        <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
              <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
                Customer’s Order
              </p>
              {showOrder.order?.map((order) => (
                <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                  <div className="pb-4 md:pb-8 w-full md:w-40">
                    <img
                      className="w-full hidden md:block"
                      src={order.productimage}
                      alt="dress"
                    />
                  </div>
                  <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                    <div className="w-full flex flex-col justify-start items-start space-y-8">
                      <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                        {order.productname}
                      </h3>
                      <div className="flex justify-start items-start flex-col space-y-2">
                        <p className="text-sm leading-none text-gray-800">
                          <span className="text-gray-300">Type: </span>
                          {order.type}
                        </p>
                        <p className="text-sm leading-none text-gray-800">
                          <span className="text-gray-300">Size: </span>
                          {order.selectsize}
                        </p>
                        <p className="text-sm leading-none text-gray-800">
                          <span className="text-gray-300">For: </span>
                          {order.productfor}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between space-x-8 items-start w-full">
                      <p className="text-base xl:text-lg leading-6">
                        <span className="w-8 h-10 bg-black "></span>
                      </p>
                      <p className="text-base xl:text-lg leading-6 text-gray-800">
                        {order.quantity}
                      </p>
                      <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                        ${order.productprice}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
              <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                <h3 className="text-xl font-semibold leading-5 text-gray-800">
                  Summary
                </h3>
                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                  <div className="flex justify-between  w-full">
                    <p className="text-base leading-4 text-gray-800">
                      Subtotal
                    </p>
                    <p className="text-base leading-4 text-gray-600">
                      ${showOrder.Subtotal}
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-base leading-4 text-gray-800">Tax</p>
                    <p className="text-base leading-4 text-gray-600">
                      $ {showOrder.Tax}
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-base leading-4 text-gray-800">
                      Shipping
                    </p>
                    <p className="text-base leading-4 text-gray-600">
                      ${showOrder.Shipping}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base font-semibold leading-4 text-gray-800">
                    Total
                  </p>
                  <p className="text-base font-semibold leading-4 text-gray-600">
                    ${showOrder.fullprice}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                <h3 className="text-xl font-semibold leading-5 text-gray-800">
                  Shipping
                </h3>
                <div className="flex justify-between items-start w-full">
                  <div className="flex justify-center items-center space-x-4">
                    <div className="w-8 h-8">
                      <img
                        className="w-full h-full"
                        alt="logo"
                        src="https://i.ibb.co/L8KSdNQ/image-3.png"
                      />
                    </div>
                    <div className="flex flex-col justify-start items-center">
                      <p className="text-lg leading-6 font-semibold text-gray-800">
                        DPD Delivery
                        <br />
                        <span className="font-normal">
                          Delivery with 24 Hours
                        </span>
                      </p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold leading-6 text-gray-800">
                    ${showOrder.Shipping}
                  </p>
                </div>
                <div className="w-full flex justify-center items-center">
                  <button className="hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">
                    View Carrier Details
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
            <h3 className="text-xl font-semibold leading-5 text-gray-800">
              Customer
            </h3>
            <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
              <div className="flex flex-col justify-start items-start flex-shrink-0">
                <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                  <img
                    src={showOrder.img}
                    alt="avatar"
                    className="rounded-md"
                  />
                  <div className=" flex justify-start items-start flex-col space-y-2">
                    <p className="text-base font-semibold leading-4 text-left text-gray-800">
                      {showOrder.firsetname} {showOrder.lastname}
                    </p>
                    <p className="text-sm leading-5 text-gray-600">
                      {showOrder.phonenumber}
                    </p>
                  </div>
                </div>

                <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                      stroke="#1F2937"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 7L12 13L21 7"
                      stroke="#1F2937"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="cursor-pointer text-sm leading-5 text-gray-800">
                    {showOrder.email}
                  </p>
                </div>
              </div>
              <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
                <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                  <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">
                      Shipping Address
                    </p>
                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                      {showOrder.address}
                    </p>
                  </div>
                  <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 ">
                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">
                      Id:
                    </p>
                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                      {showOrder.id}
                    </p>
                  </div>
                  <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 ">
                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">
                      Status:
                    </p>
                    <p className="w-48 flex  lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                      This Order Is {showOrder.OrderStatus}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5 ml-6 cursor-pointer"
                        onClick={() =>
                          setEditStatusOpen((EditStatusOpen) => !EditStatusOpen)
                        }
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                        />
                      </svg>
                    </p>
                    <>
                      {EditStatusOpen && (
                        <div className="block w-full">
                          <select
                            id="countries"
                            value={EditStatus}
                            onChange={(e) => setEditStatus(e.target.value)}
                            className="h-12 border border-gray-300 text-gray-600 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none"
                          >
                            <option value="Pending">Pending</option>
                            <option value="shipped">shipped</option>
                            <option value="received">received</option>
                            <option value="canceled">canceled</option>
                          </select>
                        </div>
                      )}
                    </>
                  </div>
                </div>
                <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                  {EditStatusOpen && (
                    <button
                      disabled={isEditStatus}
                      onClick={() => EditDetails(showOrder.id)}
                      className={`mt-6  bg-orange-500 text-white md:mt-0 py-5 transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base leading-4 `}
                    >
                      {isEditStatus ? "Editing..." : "Edit Details"}
                    </button>
                  )}
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
