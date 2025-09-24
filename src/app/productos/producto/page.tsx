'use client'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, Navigation  } from 'swiper/modules';

const product={
  name:'Producto prueba 1',
  image:'/logo.png',
  modelo:'XYZ-1234',
  descripcion:'Lorem ipsum dolor sit amet consectetur adipiscing elit tempus, nec integer dis sem vulputate maecenas faucibus nascetur dignissim, mus eros primis blandit in aliquam vestibulum. Erat commodo fusce ut cum facilisi suscipit dui elementum, pretium urna blandit class ad porta placerat, nostra primis eget imperdiet vivamus convallis donec. Ac nunc curabitur massa mollis justo cum per erat hac, porta etiam varius accumsan natoque non hendrerit blandit, nisl parturient neque aliquet leo primis eu maecenas'
}
export default function Producto(){
  return(
    <>
      <section className="container mx-auto grid md:grid-cols-2 place-items-center min-h-screen gap-10 pt-22 md:pt-0 px-5">
        <img src={product.image} alt={product.name}/>
        <div className="flex flex-col gap-6">
          <h1 className="text-blue-950 font-bold text-5xl">{product.name}</h1>
          <span className="text-blue-600">{product.modelo}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit tempus, nec integer dis sem vulputate maecenas faucibus nascetur dignissim, mus eros primis blandit in aliquam vestibulum. Erat commodo fusce ut cum facilisi suscipit dui elementum, pretium urna blandit class ad porta placerat, nostra primis eget imperdiet vivamus convallis donec. Ac nunc curabitur massa mollis justo cum per erat hac, porta etiam varius accumsan natoque non hendrerit blandit, nisl parturient neque aliquet leo primis eu maecenas.
          </p>
          <a className="bg-green-600 p-2 rounded-2xl text-white text-2xl hover:scale-110 duration-100 font-semibold cursor-pointer">
          <button className="w-full text-center">
            Comprar Ahora
          </button>
        </a>
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
    </>  
  )
}
