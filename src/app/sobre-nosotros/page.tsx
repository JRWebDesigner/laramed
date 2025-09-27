"use client"
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, Navigation  } from 'swiper/modules';

export default function sobreNosotros(){
  return(
    <>
      <section className="relative bg-[url('/banner.jpg')] h-[70dvh] md:h-[80dvh] max-h-[900px] bg-cover bg-fixed flex justify-center items-center text-white px-5">
        <div className="absolute bg-black h-full w-full opacity-40 z-0"/>
        <h1 className="z-20 font-bold text-center text-4xl md:text-6xl container mx-auto text-shadow-lg">Laramed S.R.L: Importadora y Distribuidora de Equipos Médicos en Bolivia</h1>
      </section>  
      <section className="container mx-auto my-22 px-5">
        <h2 className='text-4xl font-bold mb-4'>¿Quiénes Somos?</h2>
        <p className="text-lg">Laramed S.R.L es una empresa importadora y distribuidora de equipo e insumo medico, nos enfocamos en las areas de: EMERGENCIAS, QUIROFANO, TERAPIA INTENSIVA y HERMODIALISIS.</p>
      </section>
      <section className='relative container mx-auto grid md:grid-cols-3 place-items-center my-22 px-5 text-white'>
        <div className="rounded-t-2xl md:rounded-t-none md:rounded-l-2xl w-full h-full relative bg-[url('/mision.jpg')] bg-norepeat bg-cover">
          <div className="rounded-t-2xl md:rounded-t-none md:rounded-l-2xl absolute bg-[#000] h-full w-full opacity-60 z-0"/>
          <h3 className="relative z-10 text-3xl font-semibold p-6">Misión</h3>
          <p className="relative z-10 p-6 text-justify text-lg">Ser un referente nacional, en suministro de equipo e insumo medico de alta tecnología, garantizando la calidad y soporte técnico oportuno, trabajando siempre el cuidado de la salud de los pacientes de nuestros clientes.</p>
        </div>
        <div className="relative w-full h-full bg-[url('/mision.jpg')] bg-norepeat bg-cover bg-[url('/vision.jpg')]">
          <div className="absolute bg-[#000] h-full w-full opacity-40 z-0"/>
          <h3 className="relative z-10 text-3xl font-semibold p-6">Visión</h3>
          <p className="relative z-10 p-6 text-justify text-lg">Promover y actualizar a nuestra población al uso de nuevas tecnologías medicas en todo el territorio Boliviano</p>
        </div>
        <div className="rounded-b-2xl md:rounded-b-none md:rounded-r-2xl w-full h-full relative bg-[url('/mision.jpg')] bg-norepeat bg-cover bg-[url('/mision.jpg')]">
          <div className="rounded-b-2xl md:rounded-b-none md:rounded-r-2xl absolute bg-[#000] h-full w-full opacity-40 z-0"/>
          <h3 className="relative z-10 text-3xl font-semibold p-6">Valores</h3>
          <p className="relative z-10 p-6 text-justify text-lg">Honestidad, Pasión, Puntualidad, Responsabilidad y Calidad</p>
        </div>
      </section>
      <section className="container mx-auto flex items-center flex-col my-22 px-5">
        <h2 className="text-4xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 text-center">Productos Destacados</h2>
        <Swiper
            slidesPerView={'auto'}
            centeredSlides={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={60}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className="container mx-auto text-xl font-semibold text-center !p-18 !my-10"
        >
            <SwiperSlide className="!w-[280px] md:!w-[400px] lg:!w-[600px]">
                <img  src="/logo.png" alt="producto" className="w-full h-auto" />
                <h2 className="mt-4">Nombre producto</h2>
            </SwiperSlide>
            <SwiperSlide className="!w-[280px] md:!w-[400px] lg:!w-[600px]">
                <img  src="/logo.png" alt="producto" className="w-full h-auto" />
                <h2 className="mt-4">Nombre producto</h2>
            </SwiperSlide>
            <SwiperSlide className="!w-[280px] md:!w-[400px] lg:!w-[600px]">
                <img  src="/logo.png" alt="producto" className="w-full h-auto" />
                <h2 className="mt-4">Nombre producto</h2>
            </SwiperSlide> 
        </Swiper>
        <Link href="/productos" className="p-3 mx-auto bg-blue-950 rounded-2xl text-white cursor-pointer font-semibold hover:scale-110 hover:bg-blue-500 duration-100">Ver Catalogo Completo</Link>
      </section>
      {/*PONER PRODUCTOS DESTACADOS Y BOTON DE IR A PRODUCTOS IMPORTANTE*/}
      
    </>
  )
}
