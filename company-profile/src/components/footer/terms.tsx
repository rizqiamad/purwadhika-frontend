import Image from "next/image";
import Link from "next/link";

export default function Terms() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-3 relative group cursor-pointer items-center hover:border-b hover:border-red-500 transition ease-linear">
        <Image src={'/language.svg'} alt="Language" width={20} height={20}/>
        <span className="text-xs group-hover:text-red-500">Global / English</span>
      </div>
      <div className="flex gap-12">
        <Link href={''} className="text-xs hover:text-red-500 hover:border-b hover:border-red-500 transition ease-linear">PRIVACY POLICY</Link>
        <Link href={''} className="text-xs hover:text-red-500 hover:border-b hover:border-red-500 transition ease-linear">TERMS OF USE NOTICE</Link>
        <span className="text-xs">&copy;ASUSTEK COMPUTER INC. ALL RIGHT RESERVED</span>
      </div>
    </div>
  )
}