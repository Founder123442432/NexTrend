export default function Showuserorder({
  name,
  price,
  ordersimg,
  productdescription,
}) {
  return (
    <div
      className={`
    w-96
       transition-all duration-700 h-44 flex flex-col justify-center gap-2 bg-indigo-500 rounded-lg shadow px-3 py-3`}
    >
      <div className="flex  gap-2">
        <img
          src={ordersimg}
          className="bg-purple-200 w-24 h-24 shrink-0 rounded-lg"
        />
        <div className="flex flex-col text-white">
          <span className=" font-bold  text-pretty		  italic"> {name} </span>
          <p className="line-clamp-3 ">{productdescription}</p>
        </div>
      </div>
      <button className="hover:bg-purple-300 bg-neutral-50 font-bold text-indigo-500 rounded p-2">
        $ {price}
      </button>
    </div>
  );
}
