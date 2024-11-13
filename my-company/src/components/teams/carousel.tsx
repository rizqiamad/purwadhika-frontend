'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/swiper-bundle.css'
import Image from "next/image";
import { IRandomUser } from '@/types/types';
import { Autoplay, Grid } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function TeamsCarousel({ dataRandomUser }: { dataRandomUser: IRandomUser[] | undefined }) {
  const [views, setViews] = useState(5)

  const isTablet = useMediaQuery({ query: '(min-width: 960px)' });
  const isMid = useMediaQuery({ query: '(min-width: 768px)' });
  const isSmall = useMediaQuery({ query: '(min-width: 640px)' });
  const isSmallest = useMediaQuery({ query: '(min-width: 420px)' });

  console.log(views)

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
    <Swiper
      modules={[Autoplay, Grid]}
      spaceBetween={30}
      slidesPerView={views}
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
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
      {dataRandomUser?.map((user, idx) => {
        return (
          <SwiperSlide key={idx} className='bg-slate-300 rounded-md'>
            <div className="rounded-md overflow-hidden">
              <Image src={user.picture.large} alt={user.name.first} width={150} height={300} className='w-full hover:scale-[1.1] transition ease-linear duration-200' />
            </div>
            <div className={`text-center content-center h-10 w-10 rounded-full absolute top-0 right-0 ${user.gender === 'female' ? 'bg-pink-500' : 'bg-sky-500'}`}>
              <strong>{user.name.first[0]}</strong>
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