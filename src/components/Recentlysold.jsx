export default function Recentlysold({ orders }) {
  const Lastorder = orders.map((order) => order.order)[1];

  return (
    <div className="overflow-hidden font-[sans-serif] ">
      <h2 className="text-2xl font-bold py-3 my-4"> Last Order</h2>
      <table className="min-w-full overflow-x-scroll bg-white">
        <thead className="bg-gray-100 whitespace-nowrap overflow-x-hidden">
          <tr>
            <th className="pl-4 w-8 ">quantity</th>
            <th className="p-4 text-left text-sm font-semibold text-black">
              Product
            </th>
            <th className="p-4 text-left text-sm font-semibold text-black">
              Price
            </th>
            <th className="p-4 text-left text-sm font-semibold text-black">
              In stock
            </th>
            <th className="p-4 text-left text-sm font-semibold text-black">
              size
            </th>
            <th className="p-4 text-left text-sm font-semibold text-black">
              {" "}
              for
            </th>
          </tr>
        </thead>

        <tbody className="whitespace-nowrap divide-y divide-gray-200">
          {Lastorder.map((product) => (
            <tr>
              <td className="pl-4 w-8">{product.quantity}</td>
              <td className="p-4 text-sm">
                <div className="flex items-center cursor-pointer">
                  <img
                    src={product.productimage}
                    className="w-10 h-10 p-1.5 shrink-0 bg-gray-100"
                  />
                  <div className="mx-4">
                    <p className="text-sm text-black">
                      {" "}
                      {product.productname}{" "}
                    </p>
                  </div>
                </div>
              </td>
              <td className="p-4 text-sm">$ {product.productprice} </td>
              <td className="p-4 text-sm"> {product.productquantity} </td>
              <td className="p-4 text-sm"> {product.selectsize} </td>
              <td className="p-4 text-sm">{product.productfor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
