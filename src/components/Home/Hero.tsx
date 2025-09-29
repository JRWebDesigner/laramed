"use client"
import {useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {getCarrusel} from '@/lib/getQueries'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, Navigation  } from 'swiper/modules';

const sliders= getCarrusel()

export default function Hero(){
  console.log(sliders)
  return(
    <section className="relative h-[100dvh] bg-[url('/banner.jpg')] max-h-[900px] bg-cover bg-fixed">
      <div className="absolute bg-black h-full w-full opacity-40 z-0"/>
        {sliders && sliders.length > 0 ? (
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="relative h-[100dvh] w-full !px-7"
            >
              {sliders.map((slider, index) => (
                <SwiperSlide
                  key={index}
                  className="!flex flex-col-reverse md:flex-row justify-center md:!justify-around !items-center gap-10"
                >
                  <span className="text-5xl text-white font-bold text-center md:text-left">
                    {slider.title}
                  </span>
                  <img
                      src={slider.image}
                      alt="imagen prueba"
                      className="w-[400px] max-w-full"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
          ) : (
              <div className="flex justify-center items-center h-[100dvh] w-full">
                <h1 className="text-5xl font-bold text-white text-center text-shadow-lg">
                  No hay sliders disponibles
                </h1>
              </div>
          )}
      </section>
  )
}
