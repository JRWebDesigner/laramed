
import Link from 'next/link'
import { getCategories } from '@/lib/getQueries';
import AccordionCategorias from '@/components/Productos/AccordionCategorias'
import ProductsCat from '@/components/Productos/ProductsCat'

export async function generateStaticParams() {
  const categoriesData = await getCategories();
  const categorias = categoriesData.categories || [];
  
  return categorias.map((categoria) => ({
    slug: categoria.slug,
  }));
}

export function generateMetadata() {

  return {
    title: `Descubre todas nuestras categorias- Laramed`,
    description: `Productos de calidad en Laramed`,
  };
}

export default async function CategoriaPage({ params }) {
  const { slug } = await params;
  
  const categoriesData = await getCategories();
  const categorias = categoriesData.categories || [];
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
            
            <ProductsCat slug={slug} categoria={categoriaActual?.nombre} />
          </div>
          <AccordionCategorias slug={slug} />
        </div>
      </section>
    </>
  )
}
