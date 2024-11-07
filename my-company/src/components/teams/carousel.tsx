'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/swiper-bundle.css'
import Image from "next/image";
import { IRandomUser } from '@/types/types';
import { Autoplay, Grid } from 'swiper/modules';

export default function TeamsCarousel({ dataRandomUser }: { dataRandomUser: IRandomUser[] | undefined }) {
  return (
    <Swiper
      modules={[Autoplay, Grid]}
      spaceBetween={30}
      slidesPerView={3}
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
    // grid={{
    //   rows: 2,
    // }}
    >
      {dataRandomUser?.map((user, idx) => {
        return (
          <SwiperSlide key={idx} className='bg-slate-300 rounded-md relative'>
            <div className="relative h-40 rounded-md overflow-hidden">
              <Image src={user.picture.large} alt="" fill className='hover:scale-[1.1] transition ease-linear duration-200'/>
            </div>
            <div className={`text-center content-center h-10 w-10 rounded-full absolute top-0 right-0 ${user.gender === 'female' ? 'bg-pink-500' : 'bg-sky-500'}`}>
              <strong>{ user.name.first[0] }</strong>
            </div>
            <div className='py-2 px-4'>
              <p className='font-semibold truncate'>{user.name.title} {user.name.first} {user.name.last}</p>
              <p className='truncate'>{user.email}</p>
              <p className='truncate'>{user.phone}</p>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}