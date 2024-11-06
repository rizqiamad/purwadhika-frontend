import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-12 flex justify-between items-center px-[2rem] bg-black text-white">
      <div>
        <Link href={'/'}>
          <Image
            src={'/navbar/icon-header.svg'}
            alt="Republic of gamers"
            width={160}
            height={160}
          />
        </Link>
      </div>
      <div className="flex gap-10">
        <Link href={'/'} className="hover:text-red-500">Home</Link>
        <Link href={'/about-us'} className="hover:text-red-500">About Us</Link>
        <Link href={'/services'} className="hover:text-red-500">Services</Link>
        <Link href={'/teams'} className="hover:text-red-500">Teams</Link>
      </div>
      <div className="flex items-center">
        <div className="pr-6 mr-4 border-e border-l-[rgba(255,255,255,0.5)]">
          <Link href={'https://www.asus.com/'}>
            <Image src={'/navbar/asus.svg'} alt="Asus" width={75} height={75} />
          </Link>
        </div>
        <div className="flex gap-4">
          <Image src={'/navbar/search.svg'} alt="Search" width={25} height={25} />
          <Image src={'/navbar/profile.svg'} alt="Profile" width={25} height={25} />
          <Image src={'/navbar/cart.svg'} alt="Cart" width={25} height={25} />
        </div>
      </div>
    </nav>
  )
}