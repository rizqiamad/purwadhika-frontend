import Image from "next/image";

export default function LeadersImg({ src, name, position }: { src: string, name: string, position: string }) {
  return (
    <div className="flex bg-slate-500 h-[15rem] w-[100%] sm:h-[20rem]">
      <div className="relative w-[50%] overflow-hidden">
        <Image src={src} alt={name} fill className="hover:scale-[1.1] transition ease-linear duration-700" />
      </div>
      <div className="w-[50%] flex flex-col justify-center items-center text-white gap-2">
        <h1 className="text-2xl sm:text-4xl">{name}</h1>
        <p className="text-xl sm:text-2xl">{position}</p>
      </div>
    </div>
  )
}