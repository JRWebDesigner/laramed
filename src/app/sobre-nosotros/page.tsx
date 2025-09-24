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
        <h1 className="z-20 font-bold text-center md:text-left text-4xl md:text-6xl container mx-auto text-shadow-lg">Laramed: Importadora y Distribuidora de Equipos Médicos en Bolivia</h1>
      </section>  
      <section className="container mx-auto my-22 px-5">
        <h2 className='text-4xl font-bold'>Nuestra Historia</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit tempus, nec integer dis sem vulputate maecenas faucibus nascetur dignissim, mus eros primis blandit in aliquam vestibulum. Erat commodo fusce ut cum facilisi suscipit dui elementum, pretium urna blandit class ad porta placerat, nostra primis eget imperdiet vivamus convallis donec. Ac nunc curabitur massa mollis justo cum per erat hac, porta etiam varius accumsan natoque non hendrerit blandit, nisl parturient neque aliquet leo primis eu maecenas.</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit tempus, nec integer dis sem vulputate maecenas faucibus nascetur dignissim, mus eros primis blandit in aliquam vestibulum. Erat commodo fusce ut cum facilisi suscipit dui elementum, pretium urna blandit class ad porta placerat, nostra primis eget imperdiet vivamus convallis donec. Ac nunc curabitur massa mollis justo cum per erat hac, porta etiam varius accumsan natoque non hendrerit blandit, nisl parturient neque aliquet leo primis eu maecenas.</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit tempus, nec integer dis sem vulputate maecenas faucibus nascetur dignissim, mus eros primis blandit in aliquam vestibulum. Erat commodo fusce ut cum facilisi suscipit dui elementum, pretium urna blandit class ad porta placerat, nostra primis eget imperdiet vivamus convallis donec. Ac nunc curabitur massa mollis justo cum per erat hac, porta etiam varius accumsan natoque non hendrerit blandit, nisl parturient neque aliquet leo primis eu maecenas.</p>
      </section>
      <section className='container mx-auto grid md:grid-cols-2 place-items-center gap-10 my-22 px-5'>
        <div>
          <h3 className="text-3xl font-semibold">Mision</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit tempus, nec integer dis sem vulputate maecenas faucibus nascetur dignissim, mus eros primis blandit in aliquam vestibulum. Erat commodo fusce ut cum facilisi suscipit dui elementum, pretium urna blandit class ad porta placerat, nostra primis eget imperdiet vivamus convallis donec. Ac nunc curabitur massa mollis justo cum per erat hac, porta etiam varius accumsan natoque non hendrerit blandit, nisl parturient neque aliquet leo primis eu maecenas.</p>
        </div>
        <div>
          <h3 className="text-3xl font-semibold">Vision</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit tempus, nec integer dis sem vulputate maecenas faucibus nascetur dignissim, mus eros primis blandit in aliquam vestibulum. Erat commodo fusce ut cum facilisi suscipit dui elementum, pretium urna blandit class ad porta placerat, nostra primis eget imperdiet vivamus convallis donec. Ac nunc curabitur massa mollis justo cum per erat hac, porta etiam varius accumsan natoque non hendrerit blandit, nisl parturient neque aliquet leo primis eu maecenas.</p>
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
