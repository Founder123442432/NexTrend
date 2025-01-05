import useStopScrolling from "../customhooks/stopscroling";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function EdditProductViewer({
  setViewEditProduct,
  products,
  id,
}) {
  const Editproduct = products?.find((product) => product.id === id);

  useStopScrolling();
  const [updating, setupdating] = useState(false);
  const [productName, setproductName] = useState(Editproduct.productname);
  const [Productfor, setProductfor] = useState(Editproduct.productfor);
  const [brand, setbrand] = useState(Editproduct.productbrand);
  const [type, settytpe] = useState(Editproduct.type);
  const [price, setprice] = useState(Editproduct.productprice);
  const [Quantity, setQuantity] = useState(Editproduct.productquantity);
  const [discription, setdiscription] = useState(
    Editproduct.productdescription
  );
  const [color, setcolor] = useState(Editproduct.productcolor);
  const [sizes, setssizes] = useState([]);

  async function Edit(id) {
    try {
      setupdating(true);
      const docRef = doc(db, "products", id);
      await updateDoc(docRef, {
        productname: productName,
        type: type,
        productprice: price,
        productcolor: color,
        productdescription: discription,
        productfor: Productfor,
        productquantity: Quantity,
        productbrand: brand,
        size: sizes,
      });
      toast.success("product updated");

      setupdating(false);
    } catch (err) {
      toast.error("something went wrong");
      setupdating(false);
      throw new Error(err, "somthing went wrong");
    }
  }
  function addsizes(size) {
    setssizes(
      sizes.includes(size) ? sizes.filter((s) => s !== size) : [...sizes, size]
    );
  }

  return (
    <>
      <ToastContainer />
      <section className="w-full mb-10 h-[100dvh]  fixed   overflow-auto top-0 z-50 backdrop-blur-3xl left-0">
        <h1 className="text-3xl text-gray-800 font-extrabold text-left my-5 font-sans mx-7">
          Edit Product
        </h1>
        <svg
          onClick={() => setViewEditProduct(null)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute right-3 cursor-pointer top-3 size-11"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        <form className="font-[sans-serif] max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="relative flex items-center">
              <input
                type="text"
                value={productName}
                onChange={(e) => setproductName(e.target.value)}
                // onChange={(e) => on_State_Change("productname", e.target.value)}
                placeholder="Product name"
                className="px-2 py-3  rounded-md  bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none"
              />
            </div>

            <div className="relative flex items-center">
              <select
                // value={productfor}
                value={Productfor}
                onChange={(e) => setProductfor(e.target.value)}
                // onChange={(e) => on_State_Change("productfor", e.target.value)}
                className="px-2 py-3 bg-white rounded-md  w-full text-sm border-b-2 focus:border-[#007bff] outline-none text-slate-400 "
              >
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="kids">Kids</option>
              </select>
            </div>
            <div className="relative flex items-center">
              <input
                type="text"
                value={brand}
                onChange={(e) => setbrand(e.target.value)}
                // onChange={(e) => on_State_Change("productbrand", e.target.value)}
                placeholder="Product brand"
                className="px-2  rounded-md  py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none"
              />
            </div>

            <div className="relative flex items-center">
              <select
                value={type}
                onChange={(e) => settytpe(e.target.value)}
                // onChange={(e) => on_State_Change("type", e.target.value)}
                className="px-2  rounded-md  py-3 bg-white  w-full text-sm border-b-2 focus:border-[#007bff] outline-none text-slate-400 "
              >
                <option value="clothes">clothes</option>
                <option value="chouse">chouse</option>
                <option value="items">items</option>
              </select>
            </div>

            <div className="relative flex items-center">
              <input
                type="number"
                // onChange={(e) => on_State_Change("productprice", e.target.value)}
                placeholder="Product Price"
                value={price}
                onChange={(e) => setprice(Number(e.target.value))}
                className="px-2  rounded-md  py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none"
              />
            </div>

            <div className="relative flex items-center">
              <input
                type="Number"
                // onChange={(e) =>
                //   on_State_Change("productquantity", e.target.value)
                // }
                placeholder="Quantity"
                value={Quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="px-2 py-3  rounded-md  bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none"
              />
            </div>

            {/*add image */}

            <div className="relative flex items-center sm:col-span-2">
              <textarea
                value={discription}
                onChange={(e) => setdiscription(e.target.value)}
                // onChange={(e) =>
                //   on_State_Change("productdescription", e.target.value)
                // }
                placeholder="Description"
                className="px-2  rounded-md  py-3 bg-white text-black h-32 w-full text-sm border-b-2 focus:border-[#007bff] outline-none"
              />
            </div>
          </div>
          <div className="flex justify-center w-full border p-5 my-10">
            <img className="rounded-lg" src={Editproduct.productimage} />
          </div>
          <div className="flex items-center">
            {/*size*/}

            <span className="text-md text-gray-500 inline-block w-32">
              Product Size:
            </span>

            <div className="flex  my-10 justify-center flex-wrap  items-center w-full">
              <button
                onClick={(e) => addsizes(e.target.value)}
                value="XS"
                type="button"
                className={`px-5 mx-4 py-2.5 rounded-lg my-3 text-sm tracking-wider font-medium border border-green-700 outline-none ${
                  sizes.includes("XS") && "bg-green-700 text-white"
                }   transition-all duration-300`}
              >
                XS
              </button>

              <button
                onClick={(e) => addsizes(e.target.value)}
                type="button"
                value="S"
                className={`px-5 mx-4 py-2.5 my-3 rounded-lg text-sm tracking-wider font-medium border border-green-700 outline-none ${
                  sizes.includes("S") && "bg-green-700 text-white"
                }   transition-all duration-300`}
              >
                S
              </button>

              <button
                onClick={(e) => addsizes(e.target.value)}
                type="button"
                value="M"
                className={`px-5 mx-4 py-2.5 my-3 rounded-lg text-sm tracking-wider font-medium border border-green-700 outline-none ${
                  sizes.includes("M") && "bg-green-700 text-white"
                }   transition-all duration-300`}
              >
                M
              </button>

              <button
                onClick={(e) => addsizes(e.target.value)}
                value="XL"
                type="button"
                className={`px-5 mx-4 my-3 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-green-700 outline-none ${
                  sizes.includes("XL") && "bg-green-700 text-white"
                }   transition-all duration-300`}
              >
                XL
              </button>

              <button
                onClick={(e) => addsizes(e.target.value)}
                value="XXL"
                type="button"
                className={`px-5 mx-4 my-3 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-green-700 outline-none ${
                  sizes.includes("XXL") && "bg-green-700 text-white"
                }   transition-all duration-300`}
              >
                XXL
              </button>
            </div>
          </div>
          <div className="relative  sm:col-span-2">
            <label className="text-gray-500">Product color</label>
            <input
              // onChange={(e) => on_State_Change("productcolor", e.target.value)}
              type="color"
              value={color}
              onChange={(e) => setcolor(e.target.value)}
              className="px-2 py-3 bg-white text-black w-full h-40 text-sm border-b-2 focus:border-[#007bff] outline-none"
            />
          </div>

          <button
            // onClick={addproduct}
            // disabled={adding}
            onClick={() => Edit(Editproduct.id)}
            type="button"
            className="mt-10 px-6 py-2.5 w-full text-sm bg-[#007bff] text-white hover:bg-[#006bff] rounded-sm"
          >
            {/* {adding ? <p>uploading... </p> : <p>Add Product</p>} */}

            {updating ? "updating..." : "Update"}
          </button>
        </form>
      </section>
    </>
  );
}
