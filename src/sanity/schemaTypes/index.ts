import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {producto} from './producto'
import {categoria} from './categoria'
import {carruselPrincipal} from './carruselPrincipal'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [producto, categoria, carruselPrincipal, blockContentType]],
}
