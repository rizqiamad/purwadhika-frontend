'use client'

import { dataHero } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/swiper-bundle.css'
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

export default function Hero() {
  const [queryMatch, setQueryMatch] = useState<boolean>(false);
  const xs = useMediaQuery({ query: '(min-width:540px)' })

  useEffect(() => {
    setQueryMatch(xs)
  }, [xs])
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      loop={true}
    >
      {dataHero.map((img, idx) => {
        return (
          <SwiperSlide key={idx}>
            <div>
              {queryMatch ?
                (<Image
                  src={img.src}
                  alt={img.alt}
                  height={500}
                  width={2000}
                  priority
                />
                ) : (
                  <Image
                    src={img.responsiveSrc}
                    alt={img.alt}
                    height={500}
                    width={540}
                    priority
                  />
                )
              }
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
