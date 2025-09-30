// app/categorias/[slug]/page.js
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Link from 'next/link';
import { getCategories, getProductsByCategory } from '@/lib/getQueries';

// Generar páginas estáticas para cada categoría
export async function generateStaticParams() {
  const categoriesData = await getCategories();
  const categorias = categoriesData.categories || [];
  
  return categorias.map((categoria) => ({
    slug: categoria.slug,
  }));
}

// Metadata dinámica para SEO
export async function generateMetadata({ params }) {
  const categoriesData = await getCategories();
  const categoria = categoriesData.categories.find(
    cat => cat.slug === params.slug
  );
  
  return {
    title: `${categoria?.nombre || 'Categoría'} - Laramed`,
    description: `Productos de ${categoria?.nombre || 'esta categoría'} en Laramed`,
  };
}

export default async function CategoriaPage({ params }) {
  const { slug } = params;
  
  // Obtener categorías para el menú lateral
  const categoriesData = await getCategories();
  const categorias = categoriesData.categories || [];
  
  // Obtener productos de esta categoría específica
  const productosCategoria = await getProductsByCategory(slug);
  
  // Encontrar la categoría actual para mostrar su nombre
  const categoriaActual = categorias.find(cat => cat.slug === slug);

  return(
    <>
      <section className="relative bg-[url('/banner.jpg')] h-[50dvh] md:h-[60dvh] max-h-[600px] bg-cover bg-fixed flex justify-center items-center text-white">
        <div className="absolute bg-black h-full w-full opacity-40 z-0"/>
        <div className="z-20 text-center container mx-auto px-5">
          <h1 className="font-bold text-4xl md:text-6xl text-shadow-lg mb-4">
            {categoriaActual?.nombre || 'Categoría'}
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Productos y equipos médicos especializados
          </p>
        </div>
      </section>  
      
      <section className='container mx-auto px-5 mb-6 mt-8'>
        <div className='grid md:grid-cols-[3fr_1fr] gap-8'>
          <div>
            {/* Breadcrumb */}
            <nav className="flex mb-6 text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Inicio</Link>
              <span className="mx-2">/</span>
              <Link href="/productos" className="hover:text-blue-600">Productos</Link>
              <span className="mx-2">/</span>
              <span className="text-blue-600 font-medium">{categoriaActual?.nombre}</span>
            </nav>
            
            <h2 className="text-2xl font-bold text-blue-950 mb-6">
              Productos de {categoriaActual?.nombre}
              <span className="text-gray-500 text-lg ml-2">
                ({productosCategoria.length} productos)
              </span>
            </h2>
            
            {/* Grid de productos de la categoría */}
            {productosCategoria.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productosCategoria.map((producto) => (
                  <Link 
                    key={producto._id} 
                    href={`/productos/${producto.slug}`} 
                    className='flex flex-col items-center gap-3 shadow-lg hover:scale-105 duration-100 rounded-lg bg-gray-50 overflow-hidden'
                  >
                    <img 
                      src={producto.imagenPrincipal || '/logo.png'} 
                      alt={producto.nombre} 
                      className="w-full h-48 object-contain" 
                    />
                    <div className="p-4 text-center w-full">
                      <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                        {producto.nombre}
                      </h2>
                    </div>
                    {producto.modelo && (
                        <span>{producto.modelo}</span>
                    )}
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-2xl text-gray-500 mb-4">
                  No hay productos en esta categoría
                </h3>
                <Link 
                  href="/productos" 
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Ver todos los productos
                </Link>
              </div>
            )}
          </div>
          
          {/* Acordeón de categorías */}
          <div className="md:sticky md:top-24 md:h-fit">
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<span className="text-blue-900 text-2xl">+</span>}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h3 className="text-blue-900 text-xl md:text-2xl font-semibold">
                  Todas las Categorías
                </h3>
              </AccordionSummary>
              <AccordionDetails>
                <nav>
                  <ul className="flex flex-col gap-4 text-lg">
                    <li>
                      <Link href="/productos" className="text-blue-600 hover:text-blue-800 font-medium">
                        Todos los Productos
                      </Link>
                    </li>
                    {categorias.map((categoria) => (
                      <li key={categoria._id}>
                        <Link 
                          href={`/categorias/${categoria.slug}`}
                          className={`block py-1 transition-colors duration-200 ${
                            categoria.slug === slug 
                              ? 'text-blue-600 font-semibold' 
                              : 'text-gray-700 hover:text-blue-600'
                          }`}
                        >
                          {categoria.nombre}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  )
}
