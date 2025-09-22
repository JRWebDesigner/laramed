"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination, Navigation  } from 'swiper/modules';
import {Award, Users, Clock, CheckCircle} from 'lucide-react'

function saludo(){
    console.log('hola')
}
const features = [
    {
      title: "Calidad Garantizada",
      description: "Productos certificados con estándares internacionales de calidad",
      icon: Award
    },
    {
      title: "Soporte Técnico",
      description: "Equipo especializado para instalación y mantenimiento",
      icon: Users
    },
    {
      title: "Entrega Rápida",
      description: "Tiempos de entrega optimizados para tu laboratorio",
      icon: Clock
    }
  ];
  
export default function Home() {
  return (
    <>
      <section className="">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="bg-blue-950 h-[100dvh] w-full"
          >
            <SwiperSlide className="h-full flex justify-center items-center gap-8">
                <span className='text-5xl text-white font-bold'>
                  Prueba de slider productos
                </span>
                <img src='/logo.png' alt='imagen prueba' className="w-[400px] max-w-full"/>
            </SwiperSlide>
            <SwiperSlide className="h-full flex justify-center items-center gap-8">
                <span className='text-5xl text-white font-bold'>
                  Prueba de slider productos 2
                </span> 
                <img src='/logo.png' alt='imagen prueba' className="w-[400px] max-w-full"/>
            </SwiperSlide>
          </Swiper>
      </section>
      <section className="bg-white w-[80%] max-w-[1000px] mx-auto p-5 my-22">
        <div className="grid place-items-center items-center justify-center gap-6 text-center">
          <div>
            <h1 className="font-bold text-4xl text-blue-900">
              Laramed: Líder en Importación de Equipos Médicos en Bolivia
            </h1>
            <h2 className="text-2xl my-3">
              ¿Por qué elegir Laramed?
            </h2>
                          
              <div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div 
                      key={index} 
                      className="text-center group hover:transform hover:scale-105 transition-transform duration-300"
                    >
                      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                        <IconComponent className="w-10 h-10 text-blue-950" />
                       </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 my-22">
          <div className="container mx-auto py-5">
            <h2 className="text-4xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2">Productos y Soluciones</h2>
            <section className="grid md:grid-cols-3 mt-4  text-shadow-lg">
              <div className="cat bg-blue-950 h-[300px] flex flex-col justify-center items-center text-white font-semibol text-3xl">
                 <img src="/logo2.jpg" className="h-[200px]" />
                 <h3>Categoria 1</h3>
              </div>
              <div className="cat bg-blue-400 h-[300px] flex flex-col justify-center items-center text-white font-semibol text-3xl">
                 <img src="/logo2.jpg" className="h-[200px]" />
                 <h3>Categoria 1</h3>
              </div>
              <div className="cat bg-blue-950 h-[300px] flex flex-col justify-center items-center text-white font-semibol text-3xl">
                 <img src="/logo2.jpg" className="h-[200px]" />
                 <h3>Categoria 1</h3>
              </div>
            </section>
          </div>
      </section>
      <section className="my-22">
        <h2 className="text-4xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 text-center">Productos Destacados</h2>
        <Swiper
            slidesPerView={'auto'}
            centeredSlides={true}
            spaceBetween={60}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="container mx-auto text-xl font-semibold text-center p-18 my-10"
        >
            <SwiperSlide className="!w-[280px] md:!w-[400px] lg:!w-[600px]">
                <img onClick={saludo} src="/logo.png" alt="producto" className="w-full h-auto" />
                <h2 className="mt-4">Nombre producto</h2>
            </SwiperSlide>
            <SwiperSlide className="!w-[280px] md:!w-[400px] lg:!w-[600px]">
                <img onClick={saludo} src="/logo.png" alt="producto" className="w-full h-auto" />
                <h2 className="mt-4">Nombre producto</h2>
            </SwiperSlide>
            <SwiperSlide className="!w-[280px] md:!w-[400px] lg:!w-[600px]">
                <img onClick={saludo} src="/logo.png" alt="producto" className="w-full h-auto" />
                <h2 className="mt-4">Nombre producto</h2>
            </SwiperSlide> 
        </Swiper>
      </section>
      <section className="max-w-5xl mx-auto my-22">
            <h2 className="text-4xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 text-right">
                Novedades
            </h2>
            <div className="flex justify-beteween items-center "> 
                <img src="/novedades.jpg" alt="novedades" className="h-[400px] w-auto" />
                <div className="bg-gray-100 flex flex-col items-cetner justify-center h-full">
                    <div className="border-b-2 border-blue-200">
                        <h2>TITULO NOTICIA</h2>
                        <p>Descripcion corta</p>  
                    </div>  
                </div>
            </div>
      </section>
    </>
  );
}
