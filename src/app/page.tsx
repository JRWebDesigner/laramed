"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, Navigation  } from 'swiper/modules';
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
  
const noticias=[
    {
        title:"titulo noticia 1",
        description:"descripcion noticia 1"
    },{
        title:"titulo noticia 2",
        description:"descripcion noticia 2"
    },{
        title:"titulo noticia 3",
        description:"descripcion noticia 3"
    },{
        title:"titulo noticia 4",
        description:"descripcion noticia 4"
    },{
        title:"titulo noticia 5",
        description:"descripcion noticia 5"
    },{
        title:"titulo noticia 6",
        description:"descripcion noticia 6"
    },{
        title:"titulo noticia 7",
        description:"descripcion noticia 2"
    },{
        title:"titulo noticia 8",
        description:"descripcion noticia 3"
    },{
        title:"titulo noticia 9",
        description:"descripcion noticia 4"
    },{
        title:"titulo noticia 10",
        description:"descripcion noticia 5"
    },
]
export default function Home() {
  return (
    <>
      <section className="relative h-[100dvh] bg-[url('/banner.jpg')] max-h-[900px] bg-cover bg-fixed">
          <div className="absolute bg-black h-full w-full opacity-40 z-0"/>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="relative h-[100dvh] w-full !px-7"
          >
            <SwiperSlide className="!flex flex-col-reverse md:flex-row justify-center md:!justify-around !items-center gap-10">
                <span className='text-5xl text-white font-bold text-center md:text-left'>
                  Prueba de slider productos
                </span>
                <img src='/logo.png' alt='imagen prueba' className="w-[400px] max-w-full"/>
            </SwiperSlide>
            <SwiperSlide className="!flex flex-col-reverse md:flex-row justify-center md:!justify-around !items-center gap-10">
                <span className='text-5xl text-white font-bold text-center md:text-left'>
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
      <section className="bg-gray-50 my-22 px-5">
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
      <section className="my-22 px-5">
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
      </section>
      <section className="relative max-w-5xl mx-auto my-22 px-5">
            <h2 className="text-4xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 text-right">
                Novedades
            </h2>
            <div className="grid grid-cols-2 bg-gray-50 max-h-[390px] rounded-bl-3xl rounded-br-3xl"> 
                <img src="/novedades.jpg" alt="novedades" className="h-[390px] w-auto rounded-bl-3xl object-cover" />
                <div className="p-7 overflow-y-auto max-h-[390px]">
                    {
                        noticias.map((noticia,index)=>(
                            <div key={index} className="border-b-2 border-blue-200 py-5 rounded-br-3xl">
                                <h2 className="font-bold text-lg text-blue-950 underline">{noticia.title} </h2>
                                <p>{noticia.description}</p>  
                            </div>
                        ))
                    }
                    
                </div>
            </div>
      </section>
    </>
  );
}
