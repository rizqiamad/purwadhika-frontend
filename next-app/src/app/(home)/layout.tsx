import Navbar from "@/components/navbar";
import { ReactNode } from "react";

export default function LayoutHome({ children }: { children: ReactNode }) {
  return (
    <main>
      <Navbar />
      { children }
    </main>
  )
}