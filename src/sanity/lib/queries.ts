import {defineQuery} from 'next-sanity'

export const PRODUCTS_QUERY = defineQuery(`*[_type == "producto"]{
      _id,
      nombre,
      "slug": slug.current,
      "imagenPrincipal": imagenPrincipal.asset->url,
      destacado,
      descripcion,
      "imagenes": imagenes[].asset->url,
      categoria->{
        nombre,
        "slug": slug.current,
      }
    }`);

export const CATEGORIES_QUERY = defineQuery(`*[_type == "categoria"]{
      _id,
      nombre,
      "slug": slug.current,
      "imagen": imagen.asset->url
    }`);

export const CARRUSEL_QUERY = defineQuery(`*[_type == "carruselPrincipal"]{
    _id,
    slideDescription,
    "imagen": imagen.asset->url
  }`);

export const PUBLICACIONES_QUERY = defineQuery(`*[_type == "publicacion"] | order(fecha desc){
    _id,
    titulo,
    "imagen": imagen.asset->url,
    descripcion,
    fecha
  }`);
