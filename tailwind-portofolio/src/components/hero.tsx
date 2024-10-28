import Programmer from "../assets/programmer.png";
import TypingAnimation from "./typeAnimation";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="hero min-h-screen relative overflow-hidden" style={{
      backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
    }} id='home'>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content max-lg:flex-col max-lg:py-20 max-lg:gap-10">
        <div className="w-[35rem] max-sm:w-[26rem] animate-leftIn">
          <TypingAnimation />
          <p className="mb-5 text-xl dark:text-white">
            This is my portofolio, you may know me further with this porto. I hope you consider to be my partner on day
          </p>
          <a className="btn btn-accent dark:text-white" href='#about'>Get Started</a>
        </div>
        <motion.div
          whileHover={{scale:1.05}}
        >
          <div style={{ backgroundImage: `url(${Programmer})` }} className="w-[26rem] h-[28rem] bg-cover rounded-xl max-lg:w-[35rem] max-sm:w-[26rem] animate-rightIn ease-linear"></div>
        </motion.div>
      </div>
    </div>
  )
}