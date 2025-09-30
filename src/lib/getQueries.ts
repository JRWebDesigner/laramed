import {client} from '@/sanity/lib/client'
import { type SanityDocument } from "next-sanity";

import {PRODUCTS_QUERY,CATEGORIES_QUERY,CARRUSEL_QUERY,PUBLICACIONES_QUERY,PRODUCTS_BY_CATEGORY_QUERY, PRODUCT_QUERY} from '@/sanity/lib/queries'

export async function getProducts() {
  const products = await client.fetch<SanityDocument[]>(PRODUCTS_QUERY)
  return {products}
}
export async function getProduct(slug) {
  try {
    const product = await client.fetch<SanityDocument[]>(PRODUCT_QUERY, { slug });
    return product;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}
export async function getCategories() {
  const categories = await client.fetch<SanityDocument[]>(CATEGORIES_QUERY)
  return {categories}
}

export async function getCarrusel() {
  const carrusel = await client.fetch<SanityDocument[]>(CARRUSEL_QUERY)
  return {carrusel}
}

export async function getPublicaciones() {
  const publicaciones = await client.fetch<SanityDocument[]>(PUBLICACIONES_QUERY)
  return {publicaciones}
}
export async function getProductsByCategory(categorySlug) {
  const products = await client.fetch<SanityDocument[]>(PRODUCTS_BY_CATEGORY_QUERY, { categorySlug });
  return products;
}
