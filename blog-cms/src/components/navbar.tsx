import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
  return (
    <nav className="flex justify-between px-6 items-center h-16 bg-slate-300">
      <div className="flex items-center gap-4 font-bold">
        <Image src={'https://www.blogger.com/img/logo_blogger_40px_2x.png'} alt="Bloggers" height={40} width={40}/>
        <p>BLOGGER</p>
      </div>
      <div className="flex gap-4 font-semibold">
      <Link href={'/'} className="hover:text-white">Home</Link>
      <Link href={'/blog'} className="hover:text-white">Blog</Link>
      <Link href={'/about'} className="hover:text-white">About</Link>
      </div>
    </nav>
  )
}