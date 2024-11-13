import Link from "next/link";
import { ReactNode } from "react";

export default function Container({ children, link }: { children: ReactNode, link: string }) {
  return (
    <Link href={link} className="group cursor-pointer">
      {children}
    </Link>
  )
}