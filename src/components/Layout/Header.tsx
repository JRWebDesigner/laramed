import Link from 'next/link'
const links=[
  {
    name:'Inicio',
    href:'/'
  },
  {
    name:'Sobre Nosotros',
    href:'/sobre-nosotros'
  },
  {
    name:'Productos',
    href:'/productos'
  },
  {
    name:'Noticias',
    href:'/noticias'
  },
  {
    name:'Contactos',
    href:'/contactos'
  },
]

export default function Header(){
  return(
    <header className="fixed p-2 w-full bg-white">
      <div className="container mx-auto flex justify-around items-center">
        <img src='/logo.png' className='h-12'/>
        <nav>
          <ul className="flex justify-around items-center gap-15">
            {links.map((link,index) => (
              <li key={index} className="hover:text-blue-700 duration-100">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))} 
          </ul>
        </nav>
      </div>
    </header>
  );
}
