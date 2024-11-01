import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center bg-sky-500 h-16 gap-6">
      <Link href={'/'}>Home</Link>
      <Link href={'/about'}>About</Link>
      <Link href={'/user'}>User</Link>
    </nav>
  )
}