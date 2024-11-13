import Link from "next/link";

export default function Terms() {
  return (
    <div className="flex flex-col gap-4 tablet:flex-row items-start tablet:justify-between">
      <div className="flex gap-3 relative group cursor-pointer items-center hover:border-b hover:border-red-500 transition ease-linear">
        <svg className="w-6" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" className="fill-[#B3B3B3] group-hover:fill-red-500"/></g><defs><clipPath id="a"><path className="fill-[#B3B3B3] group-hover:fill-red-500" d="M0 0h16v16H0z"/></clipPath></defs></svg>
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