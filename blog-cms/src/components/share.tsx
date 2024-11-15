import Link from "next/link";
import { IconType } from "react-icons";
import { FaFacebook, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CopyButton from "./copy";

interface IShare {
  Icon: IconType
  link: string
  style: string
}

const share: IShare[] = [
  {
    Icon: FaFacebook,
    link: 'https://www.facebook.com/sharer/sharer.php?u=',
    style: 'text-blue-500 hover:opacity-[0.8]'
  },
  { 
    Icon: FaWhatsapp, 
    link: 'https://wa.me/?text=', 
    style: 'text-green-500 hover:opacity-[0.8]' 
  },
  { 
    Icon: FaLinkedin, 
    link: 'https://www.linkedin.com/sharing/share-offsite/?url=', 
    style: 'text-blue-600 hover:opacity-[0.8]' 
  },
  { 
    Icon: FaXTwitter, 
    link: 'https://www.twitter.com/intent/tweet?url=', 
    style: 'text-black hover:opacity-[0.8]' 
  }
]

export default function Share({ slug }: { slug: string }) {
  const domain = 'https://purwadhika-frontend-blog.vercel.app/'
  return (
    <div>
      <p className="font-semibold mb-4">BAGIKAN</p>
      <div className="flex gap-3">
        {share.map((item, idx) => {
          return (
            <Link key={idx} href={`${item.link}${domain}${slug}`} className={item.style}>
              <item.Icon className="text-2xl" />
            </Link>
          )
        })}
        <CopyButton link={`${domain}${slug}`}/>
      </div>
    </div>
  )
}