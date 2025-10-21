import type { Metadata } from "next";
import { getCategories } from '@/lib/getQueries';
import CategoriaClient from './CategoriaClient';

export async function generateStaticParams() {
  const categoriesData = await getCategories();
  const categorias = categoriesData.categories || [];
  
  return categorias.map((categoria) => ({
    slug: categoria.slug,
  }));
}

export const metadata: Metadata = {
  title: `Categorias - Laramed S.R.L: Líder en Importación de Equipos Médicos en Bolivia`,
  description: "Nuestra mision es ser un referente nacional, en suministro de equipo e insumo medico de alta tecnología, garantizando la calidad y soporte técnico oportuno, trabajando siempre el cuidado de la salud de los pacientes de nuestros clientes.",
};

export default async function CategoriaPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const categoriesData = await getCategories();
  const categorias = categoriesData.categories || [];
  const categoriaActual = categorias.find(cat => cat.slug === slug) || null;

  // Render a server component that simply hands off to a client component.
  return <CategoriaClient slug={slug} categoriaInitial={categoriaActual} />;
}
