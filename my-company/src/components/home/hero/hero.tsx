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
            <div style={{ position: 'relative', width: '100%', height: 'auto', overflow: 'hidden'}}>
              {queryMatch ?
                (<Image
                  src={img.src}
                  alt={img.alt}
                  layout="responsive" // Switch to responsive layout
                  width={2000} // Maintain proportional width
                  height={500} // Maintain proportional height
                  objectFit="cover" // Prevents image distortion and maintains aspect ratio
                  priority
                />
                ) : (
                  <Image
                    src={img.responsiveSrc}
                    alt={img.alt}
                    layout="responsive" // Switch to responsive layout
                    width={540} // Adjust width for smaller screens
                    height={500} // Maintain proportional height
                    objectFit="cover" // Prevents image distortion and maintains aspect ratio
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
