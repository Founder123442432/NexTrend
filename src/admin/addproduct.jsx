import { useContext, useEffect, useState } from "react";
import { useReducer } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../firebase/firebase";
import { Appcontext } from "../App";
import { useNavigate } from "react-router-dom";
export default function Addproduct() {
  const toProductsmanagment = useNavigate();

  const initialState = {
    productfor: "Men",
    productcolor: "black",
    productdescription: "",
    productimage: null,
    productname: "",
    productprice: null,
    productquantity: null,
    type: "clothes",
    productbrand: "",
  };
  // const { user } = useContext(Appcontext);
  // console.log(user);
  function reducer(state, action) {
    switch (action.type) {
      case "on_State_Change":
        return {
          ...state,
          [action.name]: action.payload,
        };
    }
  }
  const [
    {
      productbrand,
      productcolor,
      productdescription,
      productimage,
      productname,
      productprice,
      productquantity,
      type,
      productfor,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  function on_State_Change(name, payload) {
    dispatch({ type: "on_State_Change", name, payload: payload });
  }
  const [imageUrl, setImageUrl] = useState(null);
  useEffect(() => {
    if (productimage) {
      const url = URL.createObjectURL(productimage);
      setImageUrl(url);

      return () => URL.revokeObjectURL(url);
    }
  }, [productimage]);
  const [size, setsize] = useState([]);

  function Add_size(newsize) {
    setsize((size) =>
      size.includes(newsize)
        ? size.filter((s) => s !== newsize)
        : [...size, newsize]
    );
  }

  async function uploadimage() {
    try {
      if (!productimage) return;
      const imgref = ref(storage, `nextrendproductsimgs/${productimage?.name}`);
      await uploadBytes(imgref, productimage);
      const imageuploadedurl = await getDownloadURL(imgref);
      return imageuploadedurl;
    } catch (e) {
      console.log(e);
    }
  }
  const [adding, setadding] = useState(false);
  async function addproduct() {
    try {
      if (
        !productbrand ||
        !productcolor ||
        !productdescription ||
        !productimage ||
        !productname ||
        !productprice ||
        !productquantity ||
        !type ||
        !productfor ||
        !size
      ) {
        return toast.error("Please fill out all required fields.");
      }

      setadding((adding) => true);
      const imageurl = await uploadimage();
      await addDoc(collection(db, "products"), {
        productcolor,
        productdescription,
        productimage: imageurl,
        productname,
        productprice: Number(productprice),
        productquantity: Number(productquantity),
        type,
        productfor,
        size,
        productbrand,
      });

      setTimeout(() => {
        toast.success("product added successfully");
      }, 2000);
      setadding((adding) => false);
    } catch (e) {
      console.log(e);
      setadding((adding) => false);
      toast.error("somthing went wrong");
    }
  }
  return (
    <section className="w-full mb-10">
      <ToastContainer />
      <h1 className="text-3xl text-gray-800 font-extrabold text-left my-5 font-sans mx-7">
        Add Product
      </h1>

      <form className="font-[sans-serif] max-w-4xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="relative flex items-center">
            <input
              type="text"
              onChange={(e) => on_State_Change("productname", e.target.value)}
              placeholder="Product name"
              className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none"
            />
          </div>

          <div className="relative flex items-center">
            <select
              value={productfor}
              onChange={(e) => on_State_Change("productfor", e.target.value)}
              className="px-2 py-3 bg-white  w-full text-sm border-b-2 focus:border-[#007bff] outline-none text-slate-400 "
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="kids">Kids</option>
            </select>
          </div>
          <div className="relative flex items-center">
            <input
              type="text"
              onChange={(e) => on_State_Change("productbrand", e.target.value)}
              placeholder="Product brand"
              className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none"
            />
          </div>

          <div className="relative flex items-center">
            <select
              onChange={(e) => on_State_Change("type", e.target.value)}
              className="px-2 py-3 bg-white  w-full text-sm border-b-2 focus:border-[#007bff] outline-none text-slate-400 "
            >
              <option value="clothes">clothes</option>
              <option value="chouse">chouse</option>
              <option value="items">items</option>
            </select>
          </div>

          <div className="relative flex items-center">
            <input
              type="number"
              onChange={(e) => on_State_Change("productprice", e.target.value)}
              placeholder="Product Price"
              className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none"
            />
          </div>

          <div className="relative flex items-center">
            <input
              type="Number"
              onChange={(e) =>
                on_State_Change("productquantity", e.target.value)
              }
              placeholder="Quantity"
              className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none"
            />
          </div>

          {/*add image */}

          <div className="relative justify-center  flex items-center sm:col-span-2">
            {!imageUrl ? (
              <label
                for="uploadFile1"
                className="bg-white w-full text-gray-500 font-semibold text-base rounded max-w-md h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-11 mb-2 fill-gray-500"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                    data-original="#000000"
                  />
                  <path
                    d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                    data-original="#000000"
                  />
                </svg>
                Upload file
                <input
                  type="file"
                  id="uploadFile1"
                  className="hidden"
                  onChange={(e) =>
                    on_State_Change("productimage", e.target.files[0])
                  }
                />
                <p className="text-xs font-medium text-gray-400 mt-2">
                  PNG, JPG SVG
                </p>
              </label>
            ) : (
              <div className=" relative">
                <span
                  onClick={() => setImageUrl((imageUrl) => null)}
                  className="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer  bg-red-700 text-white  absolute top-[-12px] right-[-12px]"
                >
                  X
                </span>
                <img
                  src={imageUrl}
                  alt="Product"
                  className="w-56 rounded-3xl"
                />
              </div>
            )}
          </div>

          <div className="relative flex items-center sm:col-span-2">
            <textarea
              onChange={(e) =>
                on_State_Change("productdescription", e.target.value)
              }
              placeholder="Description"
              className="px-2 py-3 bg-white text-black h-32 w-full text-sm border-b-2 focus:border-[#007bff] outline-none"
            />
          </div>
        </div>
        <div className="flex items-center">
          {/*size*/}

          <span className="text-md text-gray-500 inline-block w-32">
            Product Size:
          </span>

          <div className="flex  my-10 justify-center flex-wrap  items-center w-full">
            <button
              onClick={(e) => Add_size(e.target.value, e.target.value)}
              value="XS"
              type="button"
              className={`px-5 mx-4 py-2.5 rounded-lg my-3 text-sm tracking-wider font-medium border border-green-700 outline-none ${
                size.includes("XS") && "bg-green-700 text-white"
              } `}
            >
              XS
            </button>

            <button
              onClick={(e) => Add_size(e.target.value)}
              type="button"
              value="S"
              className={`px-5 mx-4 py-2.5 my-3 rounded-lg text-sm tracking-wider font-medium border border-green-700 outline-none ${
                size.includes("S") && "bg-green-700 text-white"
              } `}
            >
              S
            </button>

            <button
              onClick={(e) => Add_size(e.target.value)}
              type="button"
              value="M"
              className={`px-5 mx-4 py-2.5 my-3 rounded-lg text-sm tracking-wider font-medium border border-green-700 outline-none ${
                size.includes("M") && "bg-green-700 text-white"
              } `}
            >
              M
            </button>

            <button
              onClick={(e) => Add_size(e.target.value)}
              value="XL"
              type="button"
              className={`px-5 mx-4 my-3 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-green-700 outline-none ${
                size.includes("XL") && "bg-green-700 text-white"
              } `}
            >
              XL
            </button>

            <button
              onClick={(e) => Add_size(e.target.value)}
              value="XXL"
              type="button"
              className={`px-5 mx-4 my-3 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-green-700 outline-none ${
                size.includes("XXL") && "bg-green-700 text-white"
              } `}
            >
              XXL
            </button>
          </div>
        </div>
        <div className="relative  sm:col-span-2">
          <label className="text-gray-500">Product color</label>
          <input
            onChange={(e) => on_State_Change("productcolor", e.target.value)}
            type="color"
            className="px-2 py-3 bg-white text-black w-full h-40 text-sm border-b-2 focus:border-[#007bff] outline-none"
          />
        </div>

        <button
          onClick={addproduct}
          disabled={adding}
          type="button"
          className="mt-10 px-6 py-2.5 w-full text-sm bg-[#007bff] text-white hover:bg-[#006bff] rounded-sm"
        >
          {adding ? <p>uploading... </p> : <p>Add Product</p>}
        </button>
      </form>
    </section>
  );
}
