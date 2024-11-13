import Link from "next/link";
import SocialMedia from "./social";

export default function NavFooter() {
  return (
    <nav className="flex flex-col tablet:flex-row tablet:justify-between gap-5">
      <div className="flex flex-col tablet:flex-row tablet:gap-6 gap-4">
        <Link href={'/about-us'} className="hover:text-red-500 tablet:border-transparent border-slate-500 tablet:hover:border-b-2 border-b hover:border-red-500 transition ease-linear">ABOUT ROG</Link>
        <Link href={'/'} className="hover:text-red-500 tablet:border-transparent border-slate-500 tablet:hover:border-b-2 border-b hover:border-red-500 transition ease-linear">HOME</Link>
        <Link href={'https://www.asus.com/news/'} className="hover:text-red-500 tablet:border-transparent border-slate-500 tablet:hover:border-b-2 border-b hover:border-red-500 transition ease-linear">NEWSROOM</Link>
        <Link href={'https://www.asus.com/content/accessibility-policy/'} className="hover:text-red-500 tablet:border-transparent border-slate-500 tablet:hover:border-b-2 border-b hover:border-red-500 transition ease-linear">ACCESSIBILITY HELP</Link>
      </div>
      <div className="flex gap-6 self-center">
        <SocialMedia />
      </div>
    </nav>
  )
}