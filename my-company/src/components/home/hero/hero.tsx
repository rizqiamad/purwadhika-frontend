'use client'

import { dataHero } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/swiper-bundle.css'
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export default function Hero() {
  const xs = useMediaQuery({ query: 'min-width(540px)' })
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      loop={true}
    >
      {dataHero.map((img, idx) => {
        return (
          <SwiperSlide key={idx}>
            <div>
              {xs ? (<Image src={img.src} alt={img.alt} height={500} width={2000} />) : (<Image src={img.responsiveSrc} alt={img.alt} height={1500} width={500} />)}
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
