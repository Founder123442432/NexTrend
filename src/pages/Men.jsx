import { useContext, useState } from "react";
import Filter from "../components/filter";
import { Appcontext } from "../App";
import Loader from "../components/loader";
import { Link, useNavigate } from "react-router-dom";
import Offer from "../components/offer";
import Banner from "../components/banner";
import useTitle from "../customhooks/title";
import useTop from "../customhooks/scrolltop";
import Emptyhearticon from "../assets/buttons/emptyheart";
import Fullhearticon from "../assets/buttons/fullheart";
import { motion } from "framer-motion";
export default function Men() {
  const parvarients = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const childvarients = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // const [like, setlike] = useState([]);
  // console.log(like);
  const TologIn = useNavigate();
  // function removelikedproduct(id) {
  //   setlike((like) => like.filter((item) => item.id === id));
  // }
  useTitle("Men's Fashion  ");
  useTop();
  const {
    products,
    itemsFilter,
    addTOwishlist,
    isproducterror,
    user,
    remove_from_wishlist,
    wishlist,
    isproducstloading,
  } = useContext(Appcontext);
  // function likeproduct(id) {
  //   if (!user) return TologIn("/Login");
  //   setlike((like) => [...like, id]);
  // }
  const Men = products?.filter((product) => product.productfor === "Men") || [];
  if (isproducstloading) return <Loader />;
  if (!products) return <p>error</p>;
  return (
    <>
      {/*benner */}
      <Banner
        h="Men's Fashion"
        p="If you encounter any issues or have questions, don't hesitate to reach out. Contact us anytime for support."
        link={<Link to="/contact">Contact Us</Link>}
      />
      {/* products list*/}
      <div className="font-[sans-serif] bg-gray-100">
        <Filter clothes={"clothes"} chouse={"chouse"} items={"items"} />
        <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
            Explore Men's Products
          </h2>

          <motion.div
            variants={parvarients}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6"
          >
            {itemsFilter == "All" ? (
              Men.map((product) => (
                <motion.div
                  variants={childvarients}
                  key={product.id}
                  className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative"
                >
                  <div className="bg-gray-100 w-7 z-50 h-7 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                    {wishlist?.map((item) => item.id).includes(product.id) ? (
                      <Fullhearticon
                        onClick={() => remove_from_wishlist(product.id)}
                      />
                    ) : (
                      <Emptyhearticon onClick={() => addTOwishlist(product)} />
                    )}
                  </div>

                  <Link to={`/productpage/${product.id}`} className="z-10">
                    <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                      <img
                        src={product.productimage}
                        alt="Product"
                        className="h-full w-full rounded-full object-contain"
                      />
                    </div>

                    <div>
                      <h3 className="text-md font-bold text-gray-800">
                        {product.productname}
                      </h3>
                      <p className="text-gray-600 text-sm mt-2">
                        {product.productfor}, {product.type}
                      </p>
                      <h4 className="text-lg text-gray-800 font-bold mt-4">
                        $ {product.productprice}
                      </h4>
                    </div>
                  </Link>
                </motion.div>
              ))
            ) : (
              <>
                {Men.filter((product) => product.type == itemsFilter).map(
                  (product) => (
                    <motion.div
                      variants={childvarients}
                      key={product.id}
                      className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative"
                    >
                      <div className="bg-gray-100 w-7 h-7 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                        {wishlist
                          ?.map((item) => item.id)
                          .includes(product.id) ? (
                          <Fullhearticon
                            onClick={() => remove_from_wishlist(product.id)}
                          />
                        ) : (
                          <Emptyhearticon
                            onClick={() => addTOwishlist(product)}
                          />
                        )}
                      </div>
                      <Link to={`/productpage/${product.id}`}>
                        <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                          <img
                            src={product.productimage}
                            alt="Product"
                            className="h-full w-full rounded-full object-contain"
                          />
                        </div>

                        <div>
                          <h3 className="text-md font-bold text-gray-800">
                            {product.productname}
                          </h3>
                          <p className="text-gray-600 text-sm mt-2">
                            {product.productfor}, {product.type}
                          </p>
                          <h4 className="text-lg text-gray-800 font-bold mt-4">
                            $ {product.productprice}
                          </h4>
                        </div>
                      </Link>
                    </motion.div>
                  )
                )}
              </>
            )}
          </motion.div>
        </div>
      </div>
      {/*  Get offer */}
      <Offer />
    </>
  );
}
