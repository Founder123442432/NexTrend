import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import LoginButton from "../assets/buttons/loginbutton";
import { Appcontext } from "../App";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import Adminbutton from "../assets/buttons/adminbutton";
import navlogo from "/public/logo.png";
export default function NavBar() {
  const [NavOpen, setNavOpen] = useState(false);
  const { user, cart } = useContext(Appcontext);
  const location = useLocation();
  useEffect(() => {
    setNavOpen((NavOpen) => false);
  }, [location]);
  const currentpage = location.pathname;
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOffline = () => toast.error("You are offline!");
    const handleOnline = () => toast.success("You are back online!");

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return (
    <nav className="flex relative shadow-md py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px] tracking-wide  z-50">
      <div className="flex flex-wrap items-center justify-between gap-4 w-full">
        <Link to="/">
          <motion.img
            animate={{ transform: "scale(1)" }}
            transition={{ duration: 1 }}
            src={navlogo}
            alt="logo"
            className="w-36"
          />
        </Link>

        <div
          id="collapseMenu"
          className={`${
            NavOpen ? "block" : "hidden lg:block"
          } lg:!block  max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50
        
          `}
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            onClick={() => setNavOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
              <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
            </svg>
          </button>

          <ul className="lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 hidden max-lg:block">
              <Link to="/">
                <img src={navlogo} alt="logo" className="w-36" />
              </Link>
            </li>
            {["Home", "Men", "Women", "Kids", "About", "Contact"].map(
              (item) => (
                <li key={item} className="max-lg:border-b max-lg:py-3 px-3">
                  <NavLink
                    to={item == "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={`hover:text-[#007bff]  font-bold block text-base  ${
                      currentpage === `/${item.toLowerCase()}` &&
                      "text-[#007bff]"
                    } `}
                  >
                    {item}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <Adminbutton />
        </div>
        <div className="flex items-center max-lg:ml-auto space-x-5">
          {user ? (
            <Link to="/yourprofile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                className="cursor-pointer hover:fill-[#007bff] inline"
              >
                <circle cx="10" cy="7" r="6" />
                <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" />
              </svg>
            </Link>
          ) : (
            <Link to="login">
              <LoginButton />
            </Link>
          )}

          <Link to="/Cart">
            <span className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                className="cursor-pointer hover:fill-[#007bff] inline"
                viewBox="0 0 512 512"
              >
                <path d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0" />
              </svg>
              <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                {cart.length}
              </span>
            </span>
          </Link>
          {!NavOpen && (
            <button
              id="toggleOpen"
              className="lg:hidden !ml-7"
              onClick={() => setNavOpen((NavOpen) => !NavOpen)}
            >
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
