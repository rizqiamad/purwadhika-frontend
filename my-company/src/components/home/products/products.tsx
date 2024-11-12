'use client'

import Link from "next/link";
import CarouselProducts from "./carousel";
import { useMediaQuery } from "react-responsive";

export default function Products() {
  const isTablet = useMediaQuery({ query: '(min-width: 960px)' });
  const isMid = useMediaQuery({ query: '(min-width: 768px)' })
  const isSmall = useMediaQuery({ query: '(min-width: 640px)' })
  const isSmallest = useMediaQuery({ query: '(min-width: 420px)' })
  return (
    <div className="py-16">
      <h1 className="font-semibold text-4xl tablet:text-6xl text-center mb-20">JELAJAHI PRODUK KAMI</h1>
      {isTablet ? (<CarouselProducts views={5} />) : isMid ? (<CarouselProducts views={4} />) : isSmall ? (<CarouselProducts views={3} />) : isSmallest ? (<CarouselProducts views={2} />) : (<CarouselProducts views={1} />)}
      <div className="flex justify-center mt-12">
        <Link href={'/products'} className="transition ease-linear duration-200 py-3 px-6 bg-black text-white font-semibold hover:text-red-500 rounded-md">Go to Products for more</Link>
      </div>
    </div>
  )
}