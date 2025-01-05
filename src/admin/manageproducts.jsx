import { useContext } from "react";
import Mpsts from "../components/mpsts";
import { Appcontext } from "../App";
import AdminLoader from "../components/adminloader";
import Adminviewproduct from "../components/adminviewproduct";
import { useState } from "react";
import EdditProductViewer from "../components/edditproductviewer";
import { deleteDoc, doc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import { db } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function ManageProducts() {
  const { products, isproducstloading } = useContext(Appcontext);
  function pf(productfor) {
    const flt = products?.filter((product) => product.productfor == productfor);
    return flt;
  }
  const MensProducts = pf("Men");
  const womenProducts = pf("Women");
  const KidsProducts = pf("kids");
  if (isproducstloading) return <AdminLoader />;

  const [viewitem, setviewitem] = useState();
  const [ViewEditProduct, setViewEditProduct] = useState();
  function opentviewitem(id) {
    setviewitem((viewitem) => id);
  }
  const toProductsmanagment = useNavigate();

  async function delateproduct(id) {
    try {
      if (confirm("are you sure you want to delete this product")) {
        const docRef = doc(db, "products", id);
        await deleteDoc(docRef);
        toProductsmanagment("/admin/ManageProducts");
        toast.success("product deleted");
      }
    } catch (err) {
      toast.error("something went wrong");
    }
  }
  return (
    <div className="relative">
      <ToastContainer />
      {ViewEditProduct && (
        <EdditProductViewer
          products={products}
          id={ViewEditProduct}
          setViewEditProduct={setViewEditProduct}
        />
      )}
      {viewitem && (
        <Adminviewproduct
          products={products}
          setviewitem={setviewitem}
          id={viewitem}
        />
      )}
      <h1 className="text-3xl font-bold px-4 py-5">Products Management</h1>
      <div className="flex flex-wrap w-full justify-center bg-slate-200 py-10  gap-2 max-[500px]:grid-cols-1 px-3">
        <Mpsts
          Title="Total Products"
          num={products?.length}
          color="bg-teal-400"
          svg={
            <svg
              className="w-12 size-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
          }
        />
        <Mpsts
          Title="Women's Products"
          num={womenProducts.length}
          color="bg-orange-700"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
          }
        />
        <Mpsts
          Title="Men's Products"
          num={MensProducts.length}
          color="bg-violet-950"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>
          }
        />
        <Mpsts
          Title="Kids's Products"
          num={KidsProducts.length}
          color="bg-green-800"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288"
              />
            </svg>
          }
        />
      </div>
      <div className="mt-20">
        <h2 className="text-xl mx-4 font-bold py-3">Manage Products </h2>
        <div className="font-[sans-serif] overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="whitespace-nowrap">
              <tr>
                <th className="p-4 text-left text-sm font-semibold text-black">
                  Product
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 fill-gray-400 inline cursor-pointer ml-2"
                    viewBox="0 0 401.998 401.998"
                  >
                    <path
                      d="M73.092 164.452h255.813c4.949 0 9.233-1.807 12.848-5.424 3.613-3.616 5.427-7.898 5.427-12.847s-1.813-9.229-5.427-12.85L213.846 5.424C210.232 1.812 205.951 0 200.999 0s-9.233 1.812-12.85 5.424L60.242 133.331c-3.617 3.617-5.424 7.901-5.424 12.85 0 4.948 1.807 9.231 5.424 12.847 3.621 3.617 7.902 5.424 12.85 5.424zm255.813 73.097H73.092c-4.952 0-9.233 1.808-12.85 5.421-3.617 3.617-5.424 7.898-5.424 12.847s1.807 9.233 5.424 12.848L188.149 396.57c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428l127.907-127.906c3.613-3.614 5.427-7.898 5.427-12.848 0-4.948-1.813-9.229-5.427-12.847-3.614-3.616-7.899-5.42-12.848-5.42z"
                      data-original="#000000"
                    />
                  </svg>
                </th>
                <th className="p-4 text-left text-sm font-semibold text-black">
                  Type
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 fill-gray-400 inline cursor-pointer ml-2"
                    viewBox="0 0 401.998 401.998"
                  >
                    <path
                      d="M73.092 164.452h255.813c4.949 0 9.233-1.807 12.848-5.424 3.613-3.616 5.427-7.898 5.427-12.847s-1.813-9.229-5.427-12.85L213.846 5.424C210.232 1.812 205.951 0 200.999 0s-9.233 1.812-12.85 5.424L60.242 133.331c-3.617 3.617-5.424 7.901-5.424 12.85 0 4.948 1.807 9.231 5.424 12.847 3.621 3.617 7.902 5.424 12.85 5.424zm255.813 73.097H73.092c-4.952 0-9.233 1.808-12.85 5.421-3.617 3.617-5.424 7.898-5.424 12.847s1.807 9.233 5.424 12.848L188.149 396.57c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428l127.907-127.906c3.613-3.614 5.427-7.898 5.427-12.848 0-4.948-1.813-9.229-5.427-12.847-3.614-3.616-7.899-5.42-12.848-5.42z"
                      data-original="#000000"
                    />
                  </svg>
                </th>
                <th className="p-4 text-left text-sm font-semibold text-black">
                  For
                </th>
                <th className="p-4 text-left text-sm font-semibold text-black">
                  Edit
                </th>
              </tr>
            </thead>

            <tbody className="whitespace-nowrap">
              <>
                {products?.map((product) => (
                  <tr
                    key={product.id}
                    className="odd:bg-blue-50 cursor-pointer"
                  >
                    <td
                      title="view product"
                      className="p-4 text-sm"
                      onClick={() => opentviewitem(product.id)}
                    >
                      <div className="flex items-center cursor-pointer w-max">
                        <img
                          src={product.productimage}
                          className="w-9 h-9 rounded-full shrink-0"
                        />
                        <div className="ml-4">
                          <p className="text-sm text-black">
                            {product.productname}{" "}
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5">
                            {product.productprice} $
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-black"> {product.type} </td>
                    <td className="p-4"> {product.productfor} </td>
                    <td className="p-4">
                      <button
                        className="mr-4 "
                        title="Edit"
                        onClick={() => setViewEditProduct(product.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 fill-blue-500 hover:fill-blue-700"
                          viewBox="0 0 348.882 348.882"
                        >
                          <path
                            d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                            data-original="#000000"
                          />
                          <path
                            d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                            data-original="#000000"
                          />
                        </svg>
                      </button>
                      <button
                        title="Delete"
                        onClick={() => delateproduct(product.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 fill-red-500 hover:fill-red-700"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                            data-original="#000000"
                          />
                          <path
                            d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                            data-original="#000000"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </>
            </tbody>
          </table>

          <div className="md:flex m-4">
            <p className="text-sm text-gray-500 flex-1">
              Showind 1 to 5 of 100 entries
            </p>

            <div className="flex items-center max-md:mt-4">
              <ul className="flex space-x-1 ml-2">
                <li className="flex items-center justify-center cursor-pointer bg-blue-100 w-7 h-7 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 fill-gray-500"
                    viewBox="0 0 55.753 55.753"
                  >
                    <path
                      d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                      data-original="#000000"
                    />
                  </svg>
                </li>
                <li className="flex items-center justify-center cursor-pointer text-sm w-7 h-7 text-gray-500 rounded">
                  1
                </li>
                <li className="flex items-center justify-center cursor-pointer text-sm bg-[#007bff] text-white w-7 h-7 rounded">
                  2
                </li>
                <li className="flex items-center justify-center cursor-pointer text-sm w-7 h-7 text-gray-500 rounded">
                  3
                </li>
                <li className="flex items-center justify-center cursor-pointer text-sm w-7 h-7 text-gray-500 rounded">
                  4
                </li>
                <li className="flex items-center justify-center cursor-pointer bg-blue-100 w-7 h-7 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 fill-gray-500 rotate-180"
                    viewBox="0 0 55.753 55.753"
                  >
                    <path
                      d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                      data-original="#000000"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
