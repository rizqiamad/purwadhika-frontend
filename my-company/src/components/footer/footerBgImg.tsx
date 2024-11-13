'use client'
import { ReactNode, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function FooterBgImg({ children }: { children: ReactNode }) {
  const [isTablet, setIsTablet] = useState<boolean>();
  const mediaQueryMatch = useMediaQuery({ query: '(min-width: 960px)' })

  useEffect(() => {
    setIsTablet(mediaQueryMatch)
  },[mediaQueryMatch])

  if (isTablet) {
    return (
      <footer
        className="bg-black text-white py-16 min-h-[80vh]"
        style={{
          backgroundImage: 'url(https://dlcdnwebimgs.asus.com/gain/07B097A3-E9C2-4AFF-9196-3ADE8F5BCEA1)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {children}
      </footer>
    )
  } else {
    return (
      <footer
        className="bg-black text-white py-16"
      >
        {children}
      </footer>
    )
  }

}