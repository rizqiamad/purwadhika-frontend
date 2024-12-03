import Navbar from "@/components/navbar/navbar";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "Blogger | %s",
    default: "Blogger"
  },
  description: "Berbagi informasi, insight, berita, hingga tips terbaru seputar dunia teknologi",
  icons: {
    icon: 'https://www.blogger.com/img/logo_blogger_40px_2x.png'
  }
}

export default function HomeLayout ({ children } : { children: ReactNode }) {
  return (
    <main>
      <Navbar />
      { children }
    </main>
  )
}