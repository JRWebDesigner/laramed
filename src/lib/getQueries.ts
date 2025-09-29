import {client} from '@/sanity/lib/client'
import { type SanityDocument } from "next-sanity";

import {PRODUCTS_QUERY} from '@/sanity/lib/queries'
import {CATEGORIES_QUERY} from '@/sanity/lib/queries'
import {CARRUSEL_QUERY} from '@/sanity/lib/queries'
import {PUBLICACIONES_QUERY} from '@/sanity/lib/queries'

export async function getProducts() {
  const products = await client.fetch<SanityDocument[]>(PRODUCTS_QUERY)
  return {products}
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
