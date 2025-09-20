"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {Award, Users, Clock, CheckCircle} from 'lucide-react'

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
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="bg-blue-950 h-[100dvh]"
          >
            <SwiperSlide className="flex justify-center items-center">
                <span className='text-5xl text-white font-white font-bold text-shadow-lg/30'>
                Prueba de slider productos
              </span>
              <img src='/logo.png' alt='imagen prueba' className="w-[400px]"/>
            </SwiperSlide>
            <SwiperSlide className="flex justify-around items-center">
                <span className='text-5xl text-white font-white font-bold text-shadow-lg/30'>
                Prueba de slider productos 2
              </span> 
              <img src='/logo.png' alt='imagen prueba' className="w-[400px]"/>
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
            <section className="grid md:grid-cols-3 mt-4">
              <div className="cat bg-blue-950 h-[300px] flex flex-col justify-center items-center text-white font-semibol text-3xl">
                 <img src="/logo2.jpg" className="h-[200px]" />
                 <h3>Categoria 1</h3>
              </div>
              <div className="bg-blue-400 h-[300px] flex flex-col justify-center items-center text-white font-semibol text-3xl">
                 <img src="/logo2.jpg" className="h-[200px]" />
                 <h3>Categoria 1</h3>
              </div>
              <div className="bg-blue-950 h-[300px] flex flex-col justify-center items-center text-white font-semibol text-3xl">
                 <img src="/logo2.jpg" className="h-[200px]" />
                 <h3>Categoria 1</h3>
              </div>
            </section>
          </div>
      </section>
      
      <section>
        <h2>Novedades</h2>
      </section>
      
    </>
    
    
  );
}
