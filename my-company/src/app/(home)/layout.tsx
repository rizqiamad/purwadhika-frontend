import Footer from "@/components/footer/footer"; 
import Navbar from "@/components/navbar";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "Gaming %s | ROG - Republic of Gamers | Global",
    default: "ROG - Republic of Gamers | Global | For Those Who Dare"
  },
  description: "ROG makes the best hardware for PC gaming, eSports, and overclocking. Our innovations deliver top performance and premium experiences for everyone.",
  icons: {
    icon: '/favicon.svg'
  }
}

export default function LayoutHome({ children } : { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      { children }
      <Footer />
    </div>
  )
}