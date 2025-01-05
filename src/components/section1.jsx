export default function Section1() {
  return (
    <div className="flex flex-col items-center">
      <h2
        className=" bg-teal-400 w-full text-white flex justify-center text-center font-bold py-5 
                     lg:text-7xl md:text-5xl sm:text-4xl text-3xl"
      >
        Fashion Between Your Hands
      </h2>
      <div className="flex justify-evenly font-mono w-full opacity-90">
        <video
          className="w-full"
          src="src/assets/videos/3205917-hd_1280_720_25fps.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
}
