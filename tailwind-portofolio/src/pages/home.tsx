import Hero from "../components/hero";
import Hanif from "../assets/hanifahmad.png";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <div className="flex w-full h-[100vh] flex-col items-center gap-7 mt-20" id='about'>
        <p className="text-[21px]">A bit about me</p>
        <h1 className="text-5xl font-bold text-yellow-400">Who am I ?</h1>
        <div className="w-[250px] h-[250px] bg-base-300 rounded-[50%] overflow-hidden border-4 border-yellow-400">
          <img src={Hanif} alt="Hanif"/>
        </div>
        <p className="text-center inline-block w-[400px]">My name is Hanif Ahmad Rizqullah, and i'm learning at purwadhika by now. i intend to scale up my coding skill till i can become web developer. I have interest in artificial intelligence.</p>
      </div>
    </main>
  )
}