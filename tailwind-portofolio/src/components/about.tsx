import Hanif from "../assets/hanifahmad.png";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main>
      <div className="flex w-full h-[100vh] flex-col items-center gap-7 pt-20 box-content dark:bg-donker" id='about'>
        <motion.div className="text-center"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            ease: "linear",
            duration: 0.8,
          }}
        >
          <p className="text-[21px] dark:text-white">A bit about me</p>
          <h1 className="text-5xl font-bold text-[#e7fb04] my-4 *:">Who am I ?</h1>
        </motion.div>
        <motion.div
          className="w-[250px] h-[250px] bg-base-300 rounded-[50%] overflow-hidden border-4 border-[#e7fb04]"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            ease: "linear",
            duration: 1,
          }}
        >
          <img src={Hanif} alt="Hanif" />
        </motion.div>
        <p className="text-center inline-block w-[400px] dark:text-white">My name is Hanif Ahmad Rizqullah, and i'm learning at purwadhika by now. i intend to scale up my coding skill till i can become web developer. I have interest in artificial intelligence.</p>
      </div>
    </main>
  )
}