import { Link } from "react-router-dom";
import Explore from "../assets/buttons/Explore";
import { motion } from "framer-motion";

export default function Section2() {
  return (
    <div className="flex flex-col items-center">
      <h3 className="font-bold w-full text-5xl flex justify-center bg-red-400 py-5">
        EXPLORE TYPES
      </h3>
      <div className="flex">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="overflow-hidden  cursor-pointer  sm:w-48 lg:w-full md:w-full"
        >
          <img
            className="hover:scale-150 transition-all z-0  duration-500"
            src="src/assets/imgs/full-length-portrait-happy-satisfied-sportsman-jumping_171337-13457.jpg"
          />
          <div className="z-50 flex justify-evenly bg-emerald-300 items-center py-5">
            <Link to="/men">
              <Explore />
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="overflow-hidden cursor-pointer  sm:w-48 md:w-full lg:w-full"
        >
          <img
            className="hover:scale-150 transition-all z-0 duration-500"
            src="src/assets/imgs/full-length-portrait-slim-healthy-fitness-woman-posing_171337-10244.jpg"
          />
          <div className="flex cursor-pointer justify-evenly bg-emerald-300 items-center py-5">
            <Link to="/women">
              <Explore />
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="overflow-hidden cursor-pointer  sm:w-48 md:w-full lg:w-full"
        >
          <img
            className="hover:scale-150 transition-all z-0 duration-500"
            src="src/assets/imgs/full-length-portrait-smiling-little-girl-hat_171337-13769.jpg"
          />
          <div className="flex justify-evenly bg-emerald-300 items-center py-5">
            <Link to="/kids">
              <Explore />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
