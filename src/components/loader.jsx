export default function Loader() {
  return (
    <div className="w-full h-[92dvh] flex justify-center items-center backdrop-blur-3xl">
      <div className="spinner-5 relative animate-spin w-4 h-4 rounded-full bg-red-500">
        <div className="absolute left-[-1.5rem] w-4 h-4 bg-black rounded-full"></div>
        <div className="absolute right-[-1.5rem] w-4 h-4 bg-black rounded-full"></div>
      </div>
    </div>
  );
}
