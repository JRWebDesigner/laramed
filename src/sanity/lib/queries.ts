import {defineQuery} from 'next-sanity'

export const PRODUCTS_QUERY = defineQuery(`*[_type == "producto"]{
      _id,
      nombre,
      "slug": slug.current,
      "imagenPrincipal": imagenPrincipal.asset->url,
      featured,
      descripcion,
      "imagenes": images[].asset->url,
      categoria->{
        _id,
        nombre,
        "slug": slug.current,
        "imagenPrincipal": imagenPrincipal.asset->url
      }
    }`);

export const CATEGORIES_QUERY = defineQuery(`*[_type == "categoria"]{
      _id,
      nombre,
      "slug": slug.current,
      "imagenPrincipal": imagenPrincipal.asset->url
    }`);

export const CARRUSEL_QUERY = defineQuery(`*[_type == "banner"]{
    _id,
    slideDescription,
    "imagen": image.asset->url
  }`);

export const PUBLICACIONES_QUERY = defineQuery(`*[_type == "publicacion"] | order(fecha desc){
    _id,
    titulo,
    "imagen": imagen.asset->url,
    descripcion,
    fecha
  }`);
