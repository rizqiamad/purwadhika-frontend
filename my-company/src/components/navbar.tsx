import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar px-[2rem] bg-black text-white">
      <div className="navbar-start tablet:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm bg-black text-white dropdown-content rounded-box z-[9] mt-3 w-52 p-2 shadow">
            <li><Link href={'/'} className="hover:text-red-500 font-semibold focus:text-blue-500">Home</Link></li>
            <li><Link href={'/about-us'} className="hover:text-red-500 font-semibold focus:text-blue-500">About Us</Link></li>
            <li><Link href={'/products'} className="hover:text-red-500 font-semibold focus:text-blue-500">Products</Link></li>
            <li><Link href={'/teams'} className="hover:text-red-500 font-semibold focus:text-blue-500">Teams</Link></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center tablet:navbar-start tablet:w-[35%]">
        <Link href={'/'}>
          <Image
            src={'/navbar/rog-logo.svg'}
            alt="Republic of gamers"
            width={160}
            height={160}
          />
        </Link>
      </div>
      <div className="tablet:flex gap-10 hidden tablet:navbar-center">
        <Link href={'/'} className="hover:text-red-500 font-semibold">Home</Link>
        <Link href={'/about-us'} className="hover:text-red-500 font-semibold">About Us</Link>
        <Link href={'/products'} className="hover:text-red-500 font-semibold">Products</Link>
        <Link href={'/teams'} className="hover:text-red-500 font-semibold">Teams</Link>
      </div>
      <div className="navbar-end">
        <div className="tablet:pr-6 tablet:mr-4 tablet:border-e border-l-[rgba(255,255,255,0.5)]">
          <Link href={'https://www.asus.com/'}>
            <Image src={'/navbar/asus.svg'} alt="Asus" width={75} height={75} />
          </Link>
        </div>
        <div className="tablet:flex gap-4 hidden">
          <Image src={'/navbar/search.svg'} alt="Search" width={25} height={25} />
          <Image src={'/navbar/profile.svg'} alt="Profile" width={25} height={25} />
          <Image src={'/navbar/cart.svg'} alt="Cart" width={25} height={25} />
        </div>
      </div>
    </nav>
  )
}