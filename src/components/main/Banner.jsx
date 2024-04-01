import { FaDownload } from "react-icons/fa6";
import print3 from "../../assets/home-printer-based-toner.jpg";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const sqaureVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
const Banner = () => {
  return (
    <div className="hello container overflow-hidden bg-[#F1F5FE] md:text-wrap w-full h-screen flex flex-col md:flex-row items-center justify-between p-20  pt-32 md:p-36">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="show"
        className="left flex flex-col md:font-light w-full md:w-[50%]"
      >
        <motion.div
          variants={sqaureVariant}
          className="w-60 h-10  md:text-justify font-semibold object-fit bg-white rounded-full text-center flex items-center justify-center gap-1 text-black"
        >
          <span className="text-center text-2xl font-bold text-red-400">_</span>{" "}
          Digital Printing Services
        </motion.div>
        <motion.div className="text text-4xl flex flex-col md:text-7xl mt-7 capitalize font-semibold text-black">
          <h1>Print Documents </h1>
          <h1>
            <Typewriter
              options={{
                strings: ["Anytime", "Anywhere"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </motion.div>
        <motion.div>
          <p className="mt-7 md:ml-4 text-base md:text-lg text-black">
            Print Documents Anytime, Anywhere
            <br />
            Delivering quality and affordability.
          </p>
        </motion.div>
        <motion.div className="relative mt-16 w-60 cursor-pointer ">
          <motion.div className="upper flex gap-3 w-52 h-10 md:h-16 md:w-60 text-[2.5vh] font-semibold bg-white rounded-full text-center items-center justify-center text-black mb-2 -mt-10 md:mt-6">
            Start Printing <FaDownload />
          </motion.div>
          <motion.div className="lower absolute hover:scale-50 top-0 left-0 h-10  bg-purple-500  rounded-full -z-10 w-[100%]">
            {" "}
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="right w-full md:w-[50%] -mb-2 md:mb-7 mt-10 md:mt-0">
        <motion.div className="images w-full relative flex items-center justify-center">
          <img
            src={print3}
            className="min-w-[12rem] md:min-w-72 border-8 shadow-lg object-fit border-white"
            alt="Print Example"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;