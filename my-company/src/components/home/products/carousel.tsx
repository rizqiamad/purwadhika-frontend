'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from 'swiper/modules';
import { dataProducts } from "./data";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from "next/link";

export default function CarouselProducts({ views }: { views: number }) {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={views}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          250: {
            slidesPerView: views,
            slidesPerGroup: views,
          },
        }}
      >
        {dataProducts.map((product, idx) => {
          return (
            <SwiperSlide key={idx} className="product text-center">
              <div className="inline-block">
                <Link href={product.href} className="group flex flex-col items-center gap-4" target="_blank">
                  <div className="relative h-28 w-36 tablet:h-36 tablet:w-48">
                    <Image src={product.image} alt={product.alt} fill />
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