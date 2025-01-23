import { Link } from "react-router-dom";

export default function Noresolts() {
  return (
    <>
      <div className="flex  h-[90dvh] items-center flex-col justify-center py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-4 ">
        <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-gray-800">
          No Results Found{" "}
        </h1>

        <Link to="/">
          <button className="w-full lg:w-auto my-4 border rounded-md px-1 sm:px-16 py-5 bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
            Go back to Homepage
          </button>
        </Link>
      </div>
    </>
  );
}
