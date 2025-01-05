import useStopScrolling from "../customhooks/stopscroling";
export default function Adminviewproduct({ products, id, setviewitem }) {
  const productviewed = products.find((product) => product.id == id);
  useStopScrolling();

  return (
    <div className="bg-transparent overflow-auto transition-all fixed top-0 right-0 w-full h-[100dvh] z-50 backdrop-blur-md ">
      <div className="font-sans p-8 tracking-wide  max-lg:max-w-2xl mx-auto relative">
        <svg
          onClick={() => setviewitem(null)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className=" absolute size-12 right-5 top-5 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        <div>
          <h2 className="text-2xl font-extrabold text-gray-800">
            {productviewed.productname}
          </h2>
          <p className="text-sm text-gray-600 mt-2"> {productviewed.type} </p>
        </div>

        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
          <div>
            <div className="flex gap-4 text-center">
              <div className="space-y-4">
                <div className="bg-slate-900 rounded-lg flex justify-center p-4 w-[400px] h-[300px] items-center  ">
                  <img
                    src={productviewed.productimage}
                    alt="Product"
                    className="rounded-lg max-h-full object-contain object-top"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <ul className="flex border-b">
                <li className="text-gray-800 font-bold text-sm bg-gray-100 py-3 px-8 border-b-2 border-gray-800 cursor-pointer transition-all">
                  Description
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-800">
                  Product Description
                </h3>
                <p className="text-sm text-gray-600 mt-4 leading-6">
                  {productviewed.productdescription}
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-xl">
            <p className="text-gray-800 py-7 text-3xl font-bold">
              Product Price: ${productviewed.productprice}
            </p>
            <div className="flex gap-3 space-x-1 mt-4">
              <p className="text-2xl font-bold">Product For:</p>
              <span
                type="button"
                className="px-2.5 py-1.5 border font-bold bg-gray-100 text-xs text-gray-800 rounded flex items-center !ml-4"
              >
                {productviewed.productfor}
              </span>
              <p className="text-2xl font-bold">Product Color:</p>
              <span
                type="button"
                style={{ backgroundColor: productviewed.productcolor }}
                className="px-2.5 py-1.5 bg-gray-100 text-xs text-white rounded flex items-center !ml-4"
              >
                {productviewed.productcolor}
              </span>
            </div>

            <hr className="my-8" />

            <div>
              <h3 className="text-lg font-bold text-zinc-950">Product Sizes</h3>
              <div className="flex flex-wrap gap-4 mt-4">
                {productviewed.size?.map((size) => (
                  <button
                    type="button"
                    className="w-12 h-12 border-2 hover:border-gray-800 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <hr className="my-8" />

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                className="min-w-[200px] px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold rounded"
              >
                {productviewed.productquantity} on stuck
              </button>
              <button
                type="button"
                className="min-w-[200px] px-4 py-2.5 border border-gray-800 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded"
              >
                {productviewed.type}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
