import { motion } from "framer-motion";

function Contact() {
  return (
    <main className="flex justify-evenly min-h-[100vh] items-center max-md:flex-col py-16 dark:bg-donker overflow-hidden" id='contact'>
      <motion.div className="w-[40%] max-md:w-[80%] max-md:mb-10"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          ease: 'linear',
          duration: 1
        }}
      >
        <h1 className="text-7xl mb-16 dark:text-white max-md:text-center max-lg:text-6xl max-md:text-7xl max-sm:text-6xl font-semibold">Contact Me</h1>
        <p className="text-[18px] line-[28px] dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas culpa, possimus, optio maxime vero unde quis quam quidem assumenda mollitia doloremque exercitationem at consectetur voluptatum, vitae totam est amet? Molestias aspernatur odit ex similique expedita, saepe vitae? Perferendis modi obcaecati iste, voluptatum distinctio molestiae vero atque porro quo tenetur nam!</p>
        <p className="text-[18px] line-[28px] mt-[25px] dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, velit! A vitae magnam, officia sint tenetur incidunt harum in ipsa.</p>
      </motion.div>
      <motion.div className="contact max-md:w-[80%] w-[40%]"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          ease: 'linear',
          duration: 1
        }}
      >
        <form action="POST" className="flex flex-col">
          <input type="text" placeholder="Enter your Name" className="w-[100%] h-[50px] px-5 mb-5 text-xl border-solid border-2 border-black dark:border-none dark:text-white" />
          <input type="text" placeholder="Enter a valid email address" className="w-[100%] h-[50px] px-5 mb-5 text-xl border-solid border-2 border-black dark:border-none dark:text-white" />
          <textarea name="message" id="message" placeholder="Enter your message" className="w-[100%] h-[150px] p-5 mb-5 text-xl border-solid border-2 border-black dark:border-none dark:text-white"></textarea>
          <button className="h-[50px] bg-transparent border-solid border-2 border-black cursor-pointer hover:bg-black hover:text-white transition ease-linear dark:border-white dark:hover:bg-white dark:hover:text-black dark:text-white font-bold">SUBMIT</button>
        </form>
      </motion.div>
    </main>
  )
}

export default Contact