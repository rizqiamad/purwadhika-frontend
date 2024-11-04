'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from 'swiper/modules';
import { dataProducts } from "./data";
import Image from "next/image";
import 'swiper/css';
import 'swiper/swiper-bundle.css'
import Link from "next/link";

export default function CarouselProducts() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      loop={true}
    >
      {dataProducts.map((product, idx) => {
        return (
          <SwiperSlide key={idx}>
            <Link href={product.href} className="group flex flex-col items-center" target="_blank">
              <Image src={product.image} alt={product.alt} width={150} height={150} />
              <span className="text-xl text-center group-hover:border-b-2 border-red-500 group-hover:text-red-500 transition ease-linear">{product.title}</span>
            </Link>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}