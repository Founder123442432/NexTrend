export default function Orderssts({ status, statusText, num, icon }) {
  return (
    <div className="relative cursor-pointer rounded-xl w-72 h-fit overflow-hidden flex flex-col items-center shadow-lg bg-white font-Roboto-light">
      <div className="h-24 w-full bg-blue-600"></div>
      <div className="top-16 z-10 flex items-center flex-col gap-4 px-5 py-5">
        <div className="-mt-20">
          <img className="border p-1 rounded-full w-14" src={icon} />
        </div>

        <div className="flex items-center flex-col">
          <p className="text-black font-Roboto-md">{status} </p>
          <p className="text-xs text-gray-500 font-medium">{statusText}</p>
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-green-400 transition-all gradient text-[15px] text-white px-3 py-[6px] rounded-full flex items-center gap-1">
            {num} order
          </button>
        </div>
      </div>
    </div>
  );
}
