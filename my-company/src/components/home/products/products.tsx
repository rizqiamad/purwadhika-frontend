// 'use client'

import Link from "next/link";
import CarouselProducts from "./carousel";
// import { useMediaQuery } from "react-responsive";
// import { useEffect, useState } from "react";

export default function Products() {
  // const [isTabletMatch, setIsTabletMatch] = useState<boolean>(false);
  // const [isMidMatch, setIsMidMatch] = useState<boolean>(false);
  // const [isSmallMatch, setIsSmallMatch] = useState<boolean>(false);
  // const [isSmallestMatch, setIsSmallestMatch] = useState<boolean>(false);

  // const isTablet = useMediaQuery({ query: '(min-width: 960px)' });
  // const isMid = useMediaQuery({ query: '(min-width: 768px)' });
  // const isSmall = useMediaQuery({ query: '(min-width: 640px)' });
  // const isSmallest = useMediaQuery({ query: '(min-width: 420px)' });

  // useEffect(() => {
  //   setIsTabletMatch(isTablet);
  // }, [isTablet]);

  // useEffect(() => {
  //   setIsMidMatch(isMid);
  // }, [isMid]);

  // useEffect(() => {
  //   setIsSmallMatch(isSmall);
  // }, [isSmall]);

  // useEffect(() => {
  //   setIsSmallestMatch(isSmallest);
  // }, [isSmallest]);

  return (
    <div className="py-16">
      <h1 className="font-semibold text-4xl tablet:text-6xl text-center mb-20">JELAJAHI PRODUK KAMI</h1>
      {/* {isTabletMatch ? (<CarouselProducts views={5} />) : isMidMatch ? (<CarouselProducts views={4} />) : isSmallMatch ? (<CarouselProducts views={3} />) : isSmallestMatch ? (<CarouselProducts views={2} />) : (<CarouselProducts views={1} />)} */}
      <CarouselProducts />
      <div className="flex justify-center mt-12">
        <Link href={'/products'} className="transition ease-linear duration-200 py-3 px-6 bg-black text-white font-semibold hover:text-red-500 rounded-md">Go to Products for more</Link>
      </div>
    </div>
  )
}