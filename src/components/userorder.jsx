export default function Userorder({ setshoworders, orders }) {
  const imgs = orders.order?.map((order) => order.productimage).slice(0, 2);
  return (
    <div className=" w-full font-sans max-w-5xl max-md:max-w-xl mx-auto bg-white py-4">
      <div className="  mt-16">
        <div className="md:col-span-2 space-y-4">
          <div className="grid grid-cols-3 items-start gap-4 ">
            <div className="col-span-2 flex items-start gap-4">
              <div className="w-28 flex h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                {imgs.map((img) => (
                  <img src={img} className="w-12 h-full object-contain" />
                ))}
              </div>

              <div className="flex flex-col">
                <h3 className="text-base font-bold text-gray-800">
                  walid ibourk
                </h3>
                <p className="text-xs font-semibold text-gray-500 mt-0.5">
                  Date: {orders.date}
                </p>
                <p className="text-xs font-semibold text-gray-500 mt-0.5">
                  Products: {orders.order.length}
                </p>

                <span
                  type="button"
                  className={`${
                    orders.Status == "Pending" && "text-amber-300 "
                  } 
                  ${orders.OrderStatus == "shipped" && "text-sky-300 "} 
                  
                  ${
                    orders.OrderStatus == "canceled" && "text-red-400 "
                  }  relative grid items-center px-2 py-1 font-sans text-xs font-bold ${
                    orders.OrderStatus == "received" && "text-green-900 "
                  } uppercase rounded-md select-none whitespace-nowrap `}
                >
                  {orders.OrderStatus}
                </span>
              </div>
            </div>

            <div className="ml-auto">
              <h4 className="text-lg max-sm:text-base font-bold text-gray-800">
                $ {orders.fullprice}
              </h4>

              <button
                onClick={() =>
                  setshoworders((showorders) => (showorders ? null : orders.id))
                }
                type="button"
                className="mt-6 flex items-center px-3 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
              >
                show products
              </button>
            </div>
          </div>

          <hr className="border-gray-300" />
        </div>
      </div>
    </div>
  );
}
