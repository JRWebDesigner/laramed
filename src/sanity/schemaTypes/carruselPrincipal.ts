import {defineType, defineField} from 'sanity'

export const carruselPrincipal = defineType({
  name: 'carruselPrincipal',
  title: 'Carrusel Principal',
  type: 'document',
  fields: [
    defineField({
      name: 'slideDescription',
      title: 'Descripción del Slide',
      type: 'string'
    }),
    defineField({
      name: 'imagen',
      title: 'Imagen',
      type: 'image'
    })
  ],
  preview: {
    select: {
      title: 'slideDescription',
      media: 'imagen'
    },
    prepare({ title, media }) {
      return {
        title: title || 'Slide sin descripción',
        subtitle: 'Carrusel principal',
        media
      }
    }
  }
})
