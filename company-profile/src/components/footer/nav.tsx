import Link from "next/link";
import Facebook from "../../../public/facebook.svg";
import X from "../../../public/x.svg";
import Discord from "../../../public/discord.svg";
import Youtube from "../../../public/youtube.svg";
import Twitch from "../../../public/twitch.svg";
import Instagram from "../../../public/instagram.svg";
import Tiktok from "../../../public/tiktok.svg";
import Thread from "../../../public/thread.svg";
import Image from "next/image";

export default function NavFooter() {
  const icons = [Facebook, X, Discord, Youtube, Twitch, Instagram, Tiktok, Thread]
  return (
    <nav className="flex justify-between">
      <div className="flex gap-6">
        <Link href={''}>ABOUT ROG</Link>
        <Link href={''}>HOME</Link>
        <Link href={''}>NEWSROOM</Link>
        <Link href={''}>ACCESSIBILITY HELP</Link>
      </div>
      <div className="flex gap-6">
        {icons.map((icon, idx) => {
          return (
            <Image key={idx} src={icon} alt={`${icon}`} width={25} height={25} className="hover:text-red-500 cursor-pointer"/>
          )
        })}
      </div>
    </nav>
  )
}