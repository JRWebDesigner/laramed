import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

export default function Productos(){
  return(
    <>
      <section className="relative bg-[url('/banner.jpg')] h-[80dvh] max-h-[900px] bg-cover bg-fixed flex justify-center items-center text-white">
        <div className="absolute bg-black h-full w-full opacity-40 z-0"/>
        <h1 className="z-20 font-bold text-6xl container mx-auto text-shadow-lg">Laramed: Productos y Equipos Médicos para Profesionales de la Salud</h1>
      </section>  
      <section className='container mx-auto'>
        <div className='grid md:grid-cols-2'>
          <h2>Todos Nuestros Productos</h2>
          <Accordion>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h3>Accordion 1</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
        </div>
      </section>
    </>
    
  )
}
