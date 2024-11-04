import Image from "next/image";
import NavFooter from "./nav";
import Terms from "./terms";

export default function Footer() {
  return (
    <div className="bg-[#151515] text-white py-2">
      <div className="w-[90%] mx-auto">
        <NavFooter />
        <hr className="my-5" />
        <Terms />
        <div className="relative h-60">
          <Image src={'https://dlcdnwebimgs.asus.com/gain/07B097A3-E9C2-4AFF-9196-3ADE8F5BCEA1'} alt="Logo" fill />
        </div>
      </div>
    </div>
  )
}