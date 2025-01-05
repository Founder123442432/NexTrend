import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/Home";
import Footer from "./components/footer";
import Error404 from "./pages/404";
import Men from "./pages/Men";
import LogIn from "./pages/login";
import Productpage from "./pages/Productpage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/contact";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./firebase/firebase";
import { ToastContainer, toast } from "react-toastify";
import { createContext, useEffect, useReducer, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";
import Admin from "./admin/admin";
import Addproduct from "./admin/addproduct";
import Women from "./pages/women";
import Kids from "./pages/kids";
import NoUserProtection from "./protection/nouserprotection";
import LoginProtection from "./protection/loginprotection";
import Userpage from "./pages/userpage";
import About from "./pages/about";
import Dashboard from "./admin/dashboard";
import ManageProducts from "./admin/manageproducts";
import Orders from "./admin/orders";
import Loader from "./components/loader";
export const Appcontext = createContext();
// export const Admincontext = createContext();
async function getProducts() {
  try {
    const getproduct = await getDocs(collection(db, "products"));
    const items = getproduct.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return items;
  } catch (err) {
    console.log(err);
  }
}
async function getorders() {
  try {
    const getorders = await getDocs(collection(db, "orders"));
    const orders = getorders.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return orders;
  } catch (err) {
    console.log(err);
  }
}

function App() {
  const [itemsFilter, setitemsFilter] = useState("All");
  const [offer, setoffer] = useState(true);
  const [selectsize, setselectsize] = useState(null);
  const [loginIn, setloginIn] = useState(false);
  const Tohome = useNavigate();
  const googleprov = new GoogleAuthProvider();

  const {
    data: products,
    isError: isproducterror,
    isLoading: isproducstloading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  const {
    data: orders,
    isError: isorderserror,
    isLoading: ispordersloading,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: getorders,
  });
  const initialstate = {
    cart: [],
    wishlist: [],
    user: null,
  };
  function reducer(state, action) {
    switch (action.type) {
      case "Add_to_cart":
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, selectsize, quantity: 1 }],
        };
      case "inc_quantity":
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      case "dec_quantity":
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload
              ? {
                  ...item,
                  quantity:
                    item.quantity === 0 ? item.quantity : item.quantity - 1,
                }
              : item
          ),
        };
      case "Empty_cart":
        return { ...state, cart: [] };
      case "add_to_wishlist":
        return {
          ...state,
          wishlist: [...state.wishlist, action.payload],
        };
      case "remove_from_wishlist":
        return {
          ...state,
          wishlist: state.wishlist.filter((item) => item.id !== action.payload),
        };
      case "remove_from_cart":
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
        };
      case "add-_user":
        return { ...state, user: action.payload };
    }
  }
  function inc_quantity(product) {
    dispatch({ type: "inc_quantity", payload: product });
  }
  function Empty_cart() {
    dispatch({ type: "Empty_cart" });
  }
  function dec_quantity(id) {
    dispatch({ type: "dec_quantity", payload: id });
  }
  function addToCart(product) {
    if (!selectsize) return toast.error("select a size");
    dispatch({ type: "Add_to_cart", payload: product });
    toast.success(`product added to Cart`);
  }
  function addTOwishlist(product) {
    if (!user)
      return toast("please login to add product to wishlist", {
        duration: 1000,
      });
    dispatch({
      type: "add_to_wishlist",
      payload: { ...product, selectsize },
    });

    toast.success("product added to wishlist");
    setselectsize(null);
  }
  function remove_from_wishlist(id) {
    dispatch({ type: "remove_from_wishlist", payload: id });
    toast.success("product removed from wishlist.", {
      style: {
        border: "1px solid #713200",
        padding: "16px",
        color: "#713200",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    });
  }
  function remove_from_cart(id) {
    dispatch({ type: "remove_from_cart", payload: id });
    toast.success("product removed from cart");
  }
  const [{ cart, wishlist, user }, dispatch] = useReducer(
    reducer,
    initialstate
  );
  // console.log(likedproducts);

  const totalPrice = cart?.reduce(
    (total, itemprice) => total + itemprice.productprice * itemprice.quantity,
    0
  );
  async function googlelogin() {
    try {
      setloginIn(true);
      const res = await signInWithPopup(auth, googleprov);
      dispatch({ type: "add-_user", payload: res?.user });
      localStorage.setItem("user", JSON.stringify(res?.user));
      Tohome("/");
      setloginIn(false);
    } catch (err) {
      console.log(err);
      setloginIn(false);
    }
  }

  const Shipping = 4.0;
  const Tax = 4.0;
  const ttc = { Shipping, Tax };

  return (
    <Appcontext.Provider
      value={{
        isproducstloading,
        isproducterror,
        user,
        products,
        orders,
        ispordersloading,
        googlelogin,
        itemsFilter,
        setitemsFilter,
        offer,
        setoffer,
        addToCart,
        addTOwishlist,
        cart,
        selectsize,
        setselectsize,
        remove_from_cart,
        inc_quantity,
        dec_quantity,
        totalPrice,
        ttc,
        wishlist,
        Empty_cart,
        loginIn,
        remove_from_wishlist,
      }}
    >
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route
          path="/yourprofile"
          element={
            <NoUserProtection>
              <Userpage />
            </NoUserProtection>
          }
        />
        <Route
          path="/Login"
          element={
            <LoginProtection>
              <LogIn />
            </LoginProtection>
          }
        />
        <Route path="/About" element={<About />} />
        <Route path="/productpage/:id" element={<Productpage />} />
        <Route path="/Cart" element={<Cart />} />
        <Route
          path="/Checkout/:id"
          element={
            <NoUserProtection>
              <Checkout />
            </NoUserProtection>
          }
        />
        <Route path="/Contact" element={<Contact />} />

        <Route element={<Admin />}>
          <Route path="/admin/Addproduct" element={<Addproduct />} />
          <Route path="/admin/Dashboard" element={<Dashboard />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/ManageProducts" element={<ManageProducts />} />
        </Route>
      </Routes>
      <Footer />
    </Appcontext.Provider>
  );
}

export default App;
