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
    <nav className="flex justify-between">
      <div className="flex gap-6">
        <Link href={''} className="hover:text-red-500 hover:border-b-2 border-red-500 transition ease-linear">ABOUT ROG</Link>
        <Link href={''} className="hover:text-red-500 hover:border-b-2 border-red-500 transition ease-linear">HOME</Link>
        <Link href={''} className="hover:text-red-500 hover:border-b-2 border-red-500 transition ease-linear">NEWSROOM</Link>
        <Link href={''} className="hover:text-red-500 hover:border-b-2 border-red-500 transition ease-linear">ACCESSIBILITY HELP</Link>
      </div>
      <div className="flex gap-6">
        {icons.map((icon, idx) => {
          return (
            <Link href={'/'}>
              <Image key={idx} src={icon} alt={`${icon}`} width={25} height={25}/>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}