import Hanif from "../assets/hanifahmad.png";

export default function About() {
  return (
    <main>
      <div className="flex w-full h-[100vh] flex-col items-center gap-7 pt-20 box-content" id='about'>
        <p className="text-[21px] dark:text-white">A bit about me</p>
        <h1 className="text-5xl font-bold text-[#e7fb04]">Who am I ?</h1>
        <div className="w-[250px] h-[250px] bg-base-300 rounded-[50%] overflow-hidden border-4 border-[#e7fb04]">
          <img src={Hanif} alt="Hanif"/>
        </div>
        <p className="text-center inline-block w-[400px] dark:text-white">My name is Hanif Ahmad Rizqullah, and i'm learning at purwadhika by now. i intend to scale up my coding skill till i can become web developer. I have interest in artificial intelligence.</p>
      </div>
    </main>
  )
}