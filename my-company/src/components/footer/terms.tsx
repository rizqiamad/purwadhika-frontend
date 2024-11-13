import Image from "next/image";
import Link from "next/link";

export default function Terms() {
  return (
    <div className="flex flex-col gap-4 tablet:flex-row items-start tablet:justify-between">
      <div className="flex gap-3 relative group cursor-pointer items-center hover:border-b hover:border-red-500 transition ease-linear">
        <Image src={'/footer/language.svg'} alt="Language" width={20} height={20}/>
        <span className="text-xs group-hover:text-red-500">Global / English</span>
      </div>
      <div className="flex flex-col tablet:flex-row tablet:gap-12 gap-4 items-start tablet:items-center">
        <Link href={'https://rog.asus.com/terms-of-notice/privacy_policy/'} className="text-xs hover:text-red-500 hover:border-b hover:border-red-500 transition ease-linear">PRIVACY POLICY</Link>
        <Link href={'https://rog.asus.com/terms-of-notice/official-site/'} className="text-xs hover:text-red-500 hover:border-b hover:border-red-500 transition ease-linear">TERMS OF USE NOTICE</Link>
        <span className="text-xs">&copy;ASUSTEK COMPUTER INC. ALL RIGHT RESERVED</span>
      </div>
    </div>
  )
}