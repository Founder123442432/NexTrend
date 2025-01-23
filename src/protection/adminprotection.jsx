import { useContext } from "react";
import { Appcontext } from "../App";
import { Navigate } from "react-router-dom";

export default function Adminprotection({ children }) {
  const { user } = useContext(Appcontext);
  const amdinEmil = import.meta.env.VITE_ADMIN_EMAIL;

  return user?.email == amdinEmil ? children : <Navigate to="/401" />;
}
