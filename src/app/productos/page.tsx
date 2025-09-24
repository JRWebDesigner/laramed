import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Link from 'next/link'

const categorias=[
  {
    name:'categoria1',
    slug:'/',
  },
  {
    name:'categoria2',
    slug:'/',
  },
  {
    name:'categoria3',
    slug:'/',
  },
  {
    name:'categoria4',
    slug:'/',
  },
]

export default function Productos(){
  return(
    <>
      <section className="relative bg-[url('/banner.jpg')] h-[70dvh] md:h-[80dvh] max-h-[900px] bg-cover bg-fixed flex justify-center items-center text-white">
        <div className="absolute bg-black h-full w-full opacity-40 z-0"/>
        <h1 className="z-20 font-bold text-center md:text-left text-4xl md:text-6xl container mx-auto text-shadow-lg">Laramed: Productos y Equipos Médicos para Profesionales de la Salud</h1>
      </section>  
      <section className='container mx-auto px-5 mb-6'>
        <div className='grid md:grid-cols-[3fr_1fr] mt-18'>
          <h2 className="text-center md:text-left text-3xl font-bold text-blue-950">Todos Nuestros Productos</h2>
          <Accordion>
            <AccordionSummary
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h3 className="text-blue-900 text-xl md:text-2xl">Ver Nuestras Categorias</h3>
            </AccordionSummary>
            <AccordionDetails>
              <nav>
                <ul className="flex flex-col gap-5 text-xl">
                  {categorias.map((categoria,index)=>(
                    <li key={index}>
                      <Link href={categoria.slug}>
                        {categoria.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </AccordionDetails>
          </Accordion>
        </div>
      </section>
      <section className="container mx-auto grid grid-cols-2 md:grid-cols-3 gap-10 my-10 px-5">
        {[1,2,3,4,5].map(index=>(
          <Link key={index} href="/productos/producto" className='flex flex-col items-center gap-3 shadow-lg hover:scale-105 duration-100 rounded-lg bg-gray-50'>
            <img src="/logo.png" alt="producto" className="w-full h-auto" />
            <h2 className="text-lg md:text-2xl">Nombre producto</h2>
          </Link>
        ))
        }
      </section>
    </>
    
  )
}
