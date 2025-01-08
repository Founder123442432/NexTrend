import { motion } from "framer-motion";

export default function Section3() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="my-10 relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black/50 before:z-10"
      >
        <img
          src="src/assets/imgs/modern-blue-sports-shoe-design-close-up-fashionable-generated-by-ai_188544-19682.jpg"
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="min-h-[380px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center p-6">
          <h4 className="text-white sm:text-4xl text-2xl font-bold mb-6">
            Showcase Your Product or Service in Style
          </h4>
          <p className="text-base text-center text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            accumsan, nunc et tempus blandit, metus mi consectetur nibh, a
            pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque
            ultrices, non consequat mauris tincidunt.
          </p>
          <button
            type="button"
            className="px-6 py-3 mt-12 rounded-full text-white text-base tracking-wider font-semibold outline-none  bg-orange-600 hover:bg-orange-700 border-2 border-orange-600 transition-all duration-300"
          >
            Getting started now
          </button>
        </div>
      </motion.div>
    </div>
  );
}
