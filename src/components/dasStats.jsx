export default function Dashstats({ products, orders, income }) {
  return (
    <div className="flex  gap-2 justify-center border- w-full flex-wrap mr-4- my-5">
      <div className="card relative cursor-pointer hover:translate-y-3 transition-all h-[230px] w-[340px] flex flex-col justify-end px-6 py-10 text-white rounded-3xl gap-8 bg-gradient-to-r from-purple-500 to-pink-500">
        <p className="text-2xl  font-medium">Total Users</p>
        <div className="flex justify-between gap-10">
          <p className="text-lg font-medium">500 User</p>
          <div className="flex-1 flex flex-col justify-end">
            <p className="self-end">This Month</p>
            <p className="self-end">+45% </p>
          </div>
          <div className="self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="card relative h-[230px] hover:translate-y-3 transition-all cursor-pointer w-[340px] flex flex-col justify-end px-6 py-10 text-white rounded-3xl gap-8 bg-gradient-to-r from-blue-700 to-cyan-300">
        <p className="text-2xl  font-medium">Total Orders</p>
        <div className="flex justify-between gap-10">
          <p className="text-lg font-medium"> {orders?.length} Order</p>
          <div className="flex-1 flex flex-col justify-end">
            <p className="self-end">This Month</p>
            <p className="self-end">+45% </p>
          </div>
          <div className="self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="card relative hover:translate-y-3 transition-all cursor-pointer h-[230px] w-[340px] flex flex-col justify-end px-6 py-10 text-white rounded-3xl gap-8 bg-gradient-to-r from-green-400 to-amber-300">
        <p className="text-2xl  font-medium">Total Products</p>
        <div className="flex justify-between gap-10">
          <p className="text-lg font-medium">{products?.length} Product</p>
          <div className="flex-1 flex flex-col justify-end">
            <p className="self-end">This Month</p>
            <p className="self-end">+45% </p>
          </div>
          <div className="self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="card hover:translate-y-3 transition-all cursor-pointer relative h-[230px] w-[340px] flex flex-col justify-end px-6 py-10 text-white rounded-3xl gap-8 bg-gradient-to-r from-slate-600 to-gray-800">
        <p className="text-2xl  font-medium">Total Income</p>
        <div className="flex justify-between gap-10">
          <p className="text-4xl font-medium"> {income} $ </p>
          <div className="flex-1 flex flex-col justify-end">
            <p className="self-end">This Month</p>
            <p className="self-end">+45% </p>
          </div>
          <div className="self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
