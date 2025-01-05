export default function Mpsts({ Title, num, color, svg }) {
  return (
    <div
      className={`group w-96 rounded-lg ${color} p-5 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0_-8px_0px_0px_rgb(244,67,54)] flex justify-between items-center`}
    >
      <div>
        <p className="text-white text-2xl">{num}</p>
        <p className="text-white text-sm">{Title}</p>
      </div>

      <div>{svg}</div>
    </div>
  );
}
