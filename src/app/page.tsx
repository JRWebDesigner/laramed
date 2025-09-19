
export default function Home() {
  return (
    <>
      <section className="max-h-[800px] h-[100dvh] bg-blue-950">
        <div className="container mx-auto flex justify-around items-center h-full">
          <span className='text-5xl text-white font-white font-bold text-shadow-lg/30'>
            Prueba de slider productos
          </span>
          <img src='/logo.png' alt='imagen prueba' className="w-[400px]"/>
        </div>
      </section>
      <section className="bg-white shadow-lg w-[80%] max-w-[1000px] mx-auto -my-16 p-5 rounded-3xl">
        <div className="grid md:grid-cols-2 place-items-center items-center justify-center gap-6">
          <div>
            <h1 className="font-semibold text-3xl">
              LaraMed: Líder en Importación de Equipos Médicos en Bolivia
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="text-blue-900 font-bold text-2xl mt-8">
                Leer mas
            </button>
          </div>
          <img src="/foto1.png" className="" />
        </div>
      </section>
      <section className="bg-gray-50 mt-22">
          <div className="container mx-auto py-5">
            <h2 className="text-4xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2">Productos y Soluciones</h2>
            <section className="grid md:grid-cols-3 mt-4">
              <div className="bg-blue-950 h-[300px]">
                
              </div>
              <div className="bg-blue-400 h-[300px]">
                
              </div>
              <div className="bg-blue-950 h-[300px]">
                
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
