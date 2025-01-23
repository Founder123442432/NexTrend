import { Link } from "react-router-dom";
import useTitle from "../customhooks/title";
import error401 from "/src/assets/imgs/401.jpg";
import { motion } from "framer-motion";
export default function Error401() {
  useTitle("401");
  return (
    <>
      <div className="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
        <div className="w-full lg:w-1/2">
          <motion.img
            initial={{
              x: -300,
              opacity: 0,
            }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="rounded-xl"
            src={error401}
          />
        </div>
        <motion.div
          initial={{
            x: 300,
            opacity: 0,
          }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2"
        >
          <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-gray-800">
            Access Denied
          </h1>
          <p className="py-4 text-base text-gray-800">
            You do not have permission to access this resource. Please check the
            following:
          </p>
          <p className="py-2 flex flex-col gap-y-3 text-base text-gray-800">
            <span className="font-bold">
              - Ensure you have the correct permissions or login credentials.
            </span>
            <span className="font-bold">
              - Contact support if you believe this is an error.
            </span>
          </p>
          <Link to="/">
            <button className="w-full lg:w-auto my-4 border rounded-md px-1 sm:px-16 py-5 bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
              Go back to Homepage
            </button>
          </Link>
        </motion.div>
      </div>
    </>
  );
}
