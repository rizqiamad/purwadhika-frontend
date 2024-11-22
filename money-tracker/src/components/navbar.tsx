import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-16 flex justify-center items-center bg-slate-400">
      <div className="flex gap-4 font-semibold">
        <Link href={'/'}>Home</Link>
        <Link href={'/table'}>Table</Link>
      </div>
    </nav>
  )
}