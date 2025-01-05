import { Link } from "react-router-dom";

export default function Banner({ h, p, link }) {
  return (
    <div className="bg-gradient-to-r from-[#6626d9] via-[#a91079] to-[#e91e63] py-20 px-6 font-[sans-serif]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6"> {h} </h2>
        <p className="text-lg text-white mb-12">{p}</p>
        <Link className="bg-white text-[#a91079] hover:bg-[#a91079] hover:text-white py-3 px-8 rounded-full text-lg font-semibold transition duration-300 hover:shadow-lg">
          {link}
        </Link>
      </div>
    </div>
  );
}
