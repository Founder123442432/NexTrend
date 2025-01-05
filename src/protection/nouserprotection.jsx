import { useContext } from "react";
import { Appcontext } from "../App";
import { Navigate } from "react-router-dom";

export default function NoUserProtection({ children }) {
  const { user } = useContext(Appcontext);
  return !user ? <Navigate to="/login" /> : children;
}
