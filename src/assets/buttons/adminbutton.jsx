import { Link } from "react-router-dom";

export default function Adminbutton() {
  return (
    <Link to="/admin/Dashboard">
      <button className="relative px-8 py-2  bg-white isolation-auto z-10   before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-[#A12347] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center text-sm font-semibold text-black  border border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
        Admin
      </button>
    </Link>
  );
}
