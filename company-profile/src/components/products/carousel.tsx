'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from 'swiper/modules';
import { dataProducts } from "./data";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from "next/link";

export default function CarouselProducts() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      breakpoints={{
        769: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
      }}
    >
      {dataProducts.map((product, idx) => {
        return (
          <SwiperSlide key={idx}>
            <Link href={product.href} className="group flex flex-col items-center" target="_blank">
              <div className="relative h-36 w-48">
                <Image src={product.image} alt={product.alt} fill />
              </div>
              <span className="text-xl text-center group-hover:border-b-2 border-red-500 group-hover:text-red-500 transition ease-linear">{product.title}</span>
            </Link>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}