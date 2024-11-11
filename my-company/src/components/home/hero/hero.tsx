'use client'

import { dataHero } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/swiper-bundle.css'
import Image from "next/image";

export default function Hero() {
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
      className="h-[90vh] aspect-auto"
    >
      {dataHero.map((img, idx) => {
        return (
          <SwiperSlide key={idx}>
            <div className="relative w-[100%] h-[100%]">
              <Image src={img.src} alt={img.alt} fill />
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
