export default function noticias(){
  return(
    <div className="bg-gray-50">
      <section className="relative bg-[url('/banner.jpg')] h-[70dvh] md:h-[80dvh] max-h-[900px] bg-cover bg-fixed flex justify-center items-center text-white">
        <div className="absolute bg-black h-full w-full opacity-40 z-0"/>
        <h1 className="z-20 font-bold text-center md:text-left text-4xl md:text-6xl container mx-auto text-shadow-lg">Noticias y Casos de Éxito de Laramed en el Área Médica</h1>
      </section>  
      <section className="grid md:grid-cols-2 gap-14 px-5 container mx-auto my-22">
        {[1,2,3,4,5,6].map(index=>(
          <div key={index} className="shadow-2xl p-5">
            <img src="/logo.png" alt="imagen"/>
            <h2 className="text-blue-800 text-3xl font-bold underline">Titulo de la noticia {index}</h2>
          </div>
        ))
        }
      </section>
    </div>
  )
}
