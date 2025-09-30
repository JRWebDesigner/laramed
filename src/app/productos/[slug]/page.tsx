// app/productos/producto/[slug]/page.tsx
import { PortableText } from 'next-sanity';
import { getProduct, getProducts } from '@/lib/getQueries';
import Destacados from '@/components/Destacados';
import ProductoCarousel from '@/components/Productos/ProductoCarousel';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const productsData = await getProducts();
  const productos = productsData.products || [];
  
  return productos.map((producto) => ({
    slug: producto.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProduct(slug);
  
  if (!product) {
    return {
      title: 'Producto No Encontrado - Laramed',
    };
  }
  
  return {
    title: `${product.nombre} - Laramed`,
    description: product.descripcion ? 
      (typeof product.descripcion === 'string' ? 
        product.descripcion.substring(0, 160) : 
        'Producto médico de calidad') : 
      'Producto médico de calidad',
  };
}

function WhatsAppButton({ nombre }: { nombre: string }) {
  const generarEnlaceWhatsApp = () => {
    const numero = '59169722332';
    const mensaje = `Hola, estoy interesado en el producto: ${nombre}. ¿Podrían darme más información?`;
    return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  };

  return (
    <a 
      href={generarEnlaceWhatsApp()}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-600 p-4 rounded-2xl text-white text-2xl hover:scale-105 duration-100 font-semibold cursor-pointer text-center transition-transform block"
    >
      Comprar Ahora
    </a>
  );
}

export default async function ProductoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProduct(slug);
  
  if (!product) {
    notFound();
  }

  const todasLasImagenes = [
    product.imagenPrincipal,
    ...(product.imagenes || [])
  ].filter(Boolean);

  return (
    <>
      <section className="container mx-auto grid md:grid-cols-2 place-items-center min-h-screen gap-10 pt-22 md:pt-0 px-5">
        
        <ProductoCarousel 
          imagenes={todasLasImagenes} 
          nombre={product.nombre} 
        />

        <div className="flex flex-col gap-6 w-full">
          <h1 className="text-blue-950 font-bold text-4xl md:text-5xl">
            {product.nombre}
          </h1>
          
          {product.categoria && (
            <Link 
              href={`/categorias/${product.categoria.slug}`}
              className="text-blue-600 hover:text-blue-800 font-medium text-lg"
            >
              Categoría: {product.categoria.nombre}
            </Link>
          )}

          <div className="text-gray-700 leading-relaxed prose prose-xl">
            {product.descripcion ? (
              typeof product.descripcion === 'string' ? (
                <p>{product.descripcion}</p>
              ) : (
                <PortableText 
                  value={product.descripcion}
                  components={{
                    block: {
                      normal: ({ children }) => <p className="mb-4">{children}</p>,
                    },
                    marks: {
                      strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                      em: ({ children }) => <em className="italic">{children}</em>,
                    },
                  }}
                />
              )
            ) : (
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit tempus, nec integer dis sem vulputate 
                maecenas faucibus nascetur dignissim, mus eros primis blandit in aliquam vestibulum. Erat 
                commodo fusce ut cum facilisi suscipit dui elementum, pretium urna blandit class ad porta 
                placerat, nostra primis eget imperdiet vivamus convallis donec.
              </p>
            )}
          </div>

          <WhatsAppButton nombre={product.nombre} />

          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">¿Necesitas asesoría técnica?</h3>
            <p className="text-blue-800 text-sm">
              Nuestros especialistas están disponibles para resolver tus dudas sobre este producto.
            </p>
          </div>
        </div>
      </section>
      <Destacados />
    </>  
  );
}
