'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from 'swiper/modules';
import { dataProducts } from "./data";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function CarouselProducts() {
  const [views, setViews] = useState(5);

  const isTablet = useMediaQuery({ query: '(min-width: 960px)' });
  const isMid = useMediaQuery({ query: '(min-width: 768px)' });
  const isSmall = useMediaQuery({ query: '(min-width: 640px)' });
  const isSmallest = useMediaQuery({ query: '(min-width: 420px)' });

  useEffect(() => {
    if (isTablet) {
      setViews(5);
    } else if (isMid) {
      setViews(4);
    } else if (isSmall) {
      setViews(3);
    } else if (isSmallest) {
      setViews(2);
    } else {
      setViews(1); // Jika di bawah ukuran isSmallest
    }
  }, [isTablet, isMid, isSmall, isSmallest]);
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={views}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          960: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          640: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          420: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
      >
        {dataProducts.map((product, idx) => {
          return (
            <SwiperSlide key={idx} className="product text-center">
              <div className="inline-block">
                <Link href={product.href} className="group flex flex-col items-center gap-4" target="_blank">
                  <div className="relative h-28 w-36 tablet:h-36 tablet:w-48">
                    <Image src={product.image} alt={product.alt} fill priority/>
                  </div>
                  <span className="text-xl text-center group-hover:border-b-2 border-red-500 group-hover:text-red-500 transition ease-linear">{product.title}</span>
                </Link>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}