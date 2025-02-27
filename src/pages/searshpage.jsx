import { useContext } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Appcontext } from "../App";
import useTitle from "../customhooks/title";

export default function SearshPage() {
  const { search } = useParams();
  const { products, addToCart } = useContext(Appcontext);
  const searchResolts = products?.filter((product) =>
    product.productname.toLowerCase().startsWith(search.toLowerCase())
  );
  useTitle(`results for "${search}"`);
  if (searchResolts.length === 0) return <Navigate to="/noresolts" />;
  return (
    <div className="font-[sans-serif] py-4 mx-auto lg:max-w-4xl max-w-lg md:max-w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {searchResolts?.map((resolt) => (
          <Link key={resolt.id} to={`/productpage/${resolt.id}`}>
            <div className="bg-gray-200 flex flex-col rounded-md cursor-pointer transition-all relative overflow-hidden">
              <div className="p-4 sm:p-6">
                <div className="bg-pink-100 w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full cursor-pointer absolute top-2 right-2 sm:top-4 sm:right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    className="fill-pink-600 inline-block"
                    viewBox="0 0 64 64"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
                <div className="w-full">
                  <img
                    src={resolt.productimage}
                    alt="Product 3"
                    className="w-full aspect-[230/220] object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col h-full text-center bg-gray-100 p-4">
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-gray-800">
                    {resolt.productname}
                  </h3>
                  <h4 className="text-sm sm:text-base text-gray-800 font-bold mt-4">
                    ${resolt.productprice}
                    <strike className="text-gray-400 ml-2 font-medium">
                      $17
                    </strike>
                  </h4>
                </div>
                <button
                  onClick={() => addToCart(resolt)}
                  type="button"
                  className="w-full flex items-center justify-center gap-2 mt-6 px-2 py-2.5 sm:px-4 bg-yellow-400 hover:bg-yellow-500 text-sm text-gray-800 font-semibold rounded-md transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                      data-original="#000000"
                    ></path>
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
