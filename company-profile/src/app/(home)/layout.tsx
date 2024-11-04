import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar";
import { ReactNode } from "react";

export default function LayoutHome({ children } : { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      { children }
      <Footer />
    </div>
  )
}