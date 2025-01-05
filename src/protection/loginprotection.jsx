import { useContext } from "react";
import { Appcontext } from "../App";

export default function LoginProtection({ children }) {
  const { user } = useContext(Appcontext);
  return !user ? children : <Navigate to="/" />;
}
