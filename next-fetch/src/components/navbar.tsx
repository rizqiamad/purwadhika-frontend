import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center h-16 gap-6 bg-teal-500">
      <Link href={'/'}>Home</Link>
      <Link href={'/user'}>Users</Link>
      <Link href={'/user/register'}>Register</Link>
    </nav>
  )
}