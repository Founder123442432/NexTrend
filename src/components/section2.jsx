import { Link } from "react-router-dom";
import Explore from "../assets/buttons/Explore";

export default function Section2() {
  return (
    <div className="flex flex-col items-center">
      <h3 className="font-bold w-full text-5xl flex justify-center bg-red-400 py-5">
        EXPLORE TYPES
      </h3>
      <div className="flex">
        <div className="overflow-hidden sm:w-48 lg:w-full md:w-full">
          <img
            className="hover:scale-150 transition-all z-0 "
            src="src/assets/imgs/full-length-portrait-happy-satisfied-sportsman-jumping_171337-13457.jpg"
          />
          <div className="z-50 flex justify-evenly bg-emerald-300 items-center py-5">
            <Link to="/men">
              <Explore />
            </Link>
          </div>
        </div>
        <div className="overflow-hidden sm:w-48 md:w-full lg:w-full">
          <img
            className="hover:scale-150 transition-all z-0 "
            src="src/assets/imgs/full-length-portrait-slim-healthy-fitness-woman-posing_171337-10244.jpg"
          />
          <div className="flex justify-evenly bg-emerald-300 items-center py-5">
            <Link to="/women">
              <Explore />
            </Link>
          </div>
        </div>
        <div className="overflow-hidden sm:w-48 md:w-full lg:w-full">
          <img
            className="hover:scale-150 transition-all z-0 "
            src="src/assets/imgs/full-length-portrait-smiling-little-girl-hat_171337-13769.jpg"
          />
          <div className="flex justify-evenly bg-emerald-300 items-center py-5">
            <Link to="/kids">
              <Explore />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
