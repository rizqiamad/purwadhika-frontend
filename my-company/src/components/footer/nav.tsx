import Link from "next/link";
import Facebook from "../../../public/footer/facebook.svg";
import X from "../../../public/footer/x.svg";
import Discord from "../../../public/footer/discord.svg";
import Youtube from "../../../public/footer/youtube.svg";
import Twitch from "../../../public/footer/twitch.svg";
import Instagram from "../../../public/footer/instagram.svg";
import Tiktok from "../../../public/footer/tiktok.svg";
import Thread from "../../../public/footer/thread.svg";
import Image from "next/image";

export default function NavFooter() {
  const icons = [Facebook, X, Discord, Youtube, Twitch, Instagram, Tiktok, Thread]
  return (
    <nav className="flex flex-col tablet:flex-row tablet:justify-between gap-5">
      <div className="flex flex-col tablet:flex-row tablet:gap-6 gap-4">
        <Link href={'/about-us'} className="hover:text-red-500 tablet:border-transparent border-slate-500 tablet:hover:border-b-2 border-b hover:border-red-500 transition ease-linear">ABOUT ROG</Link>
        <Link href={'/'} className="hover:text-red-500 tablet:border-transparent border-slate-500 tablet:hover:border-b-2 border-b hover:border-red-500 transition ease-linear">HOME</Link>
        <Link href={'https://www.asus.com/news/'} className="hover:text-red-500 tablet:border-transparent border-slate-500 tablet:hover:border-b-2 border-b hover:border-red-500 transition ease-linear">NEWSROOM</Link>
        <Link href={'https://www.asus.com/content/accessibility-policy/'} className="hover:text-red-500 tablet:border-transparent border-slate-500 tablet:hover:border-b-2 border-b hover:border-red-500 transition ease-linear">ACCESSIBILITY HELP</Link>
      </div>
      <div className="flex gap-6 self-center">
        {icons.map((icon, idx) => {
          return (
            <Link href={'/'} key={idx}>
              <Image key={idx} src={icon} alt={`${icon}`} width={25} height={25}/>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}