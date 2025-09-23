"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';

const links = [
  {
    name: 'Inicio',
    href: '/'
  },
  {
    name: 'Sobre Nosotros',
    href: '/sobre-nosotros'
  },
  {
    name: 'Productos',
    href: '/productos',
    submenu: [
      {
        name: 'categoria 1',
        href: '/',
        image: '/logo2.jpg'
      },
      {
        name: 'categoria 2',
        href: '/',
        image: '/logo2.jpg'
      },
      {
        name: 'categoria 3',
        href: '/',
        image: '/logo2.jpg'
      },
      {
        name: 'categoria 4',
        href: '/',
        image: '/logo2.jpg'
      },
      {
        name: 'categoria 5',
        href: '/',
        image: '/logo2.jpg'
      }
    ]
  },
  {
    name: 'Noticias',
    href: '/noticias'
  },
  {
    name: 'Contactos',
    href: '/contactos'
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProductsHover = (open) => {
    if (!isMobile) {
      setIsProductsOpen(open);
    }
  };

  const handleProductsClick = () => {
    if (isMobile) {
      setIsProductsOpen(!isProductsOpen);
    }
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50 h-[67px]">
      <div className="container mx-auto flex justify-between items-center">
        <img src='/logo.png' className='relative z-50 h-12' alt="Logo" />
        
        <button 
          className="md:hidden p-2 text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <nav className="hidden md:block relative h-full">
          <ul className="flex justify-around items-center gap-8 h-full">
            {links.map((link, index) => (
              <li 
                key={index} 
                className="relative group h-[67px] hover:text-blue-700 duration-100 flex items-center justify-center"
                onMouseEnter={() => link.submenu && handleProductsHover(true)}
                onMouseLeave={() => link.submenu && handleProductsHover(false)}
              >
                {link.submenu ? (
                  <>
                    <Link href='/productos'
                      className="flex items-center focus:outline-none h-full"
                      onClick={handleProductsClick}
                    >
                      {link.name}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    
                    {isProductsOpen && (
                      <div className="fixed left-0 top-[60px] w-screen bg-white shadow-xl py-6 z-40 mt-2 border-t border-gray-200">
                        <div className="container mx-auto">
                          <div className="grid grid-cols-5 gap-6">
                            {link.submenu.map((item, idx) => (
                              <Link key={idx} href={item.href}>
                                <div className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 border border-transparent hover:border-gray-200">
                                  <div className="w-20 h-20 bg-gray-100 rounded-full mb-3 overflow-hidden flex items-center justify-center">
                                    {item.image ? (
                                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    ) : (
                                      <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-800 text-xs">
                                        <span>Imagen</span>
                                      </div>
                                    )}
                                  </div>
                                  <span className="text-sm font-medium text-center text-gray-700">{item.name}</span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={link.href} className="hover:text-blue-700 duration-100 flex items-center">
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-2">
          <ul className="py-4">
            {links.map((link, index) => (
              <li key={index} className="border-b border-gray-200 last:border-b-0">
                {link.submenu ? (
                  <>
                    <button 
                      className="w-full px-4 py-3 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50"
                      onClick={handleProductsClick}
                    >
                      <span className="font-medium">{link.name}</span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {isProductsOpen && (
                      <div className="bg-gray-50 px-4 py-3">
                        <div className="grid grid-cols-2 gap-3">
                          {link.submenu.map((item, idx) => (
                            <Link key={idx} href={item.href} onClick={() => setIsMenuOpen(false)}>
                              <div className="flex flex-col items-center p-2 rounded hover:bg-gray-200 transition-colors duration-200">
                                <div className="w-12 h-12 bg-gray-200 rounded-full mb-1 overflow-hidden flex items-center justify-center">
                                  {item.image ? (
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                  ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-800 text-xs">
                                      <span>Img</span>
                                    </div>
                                  )}
                                </div>
                                <span className="text-xs font-medium text-center text-gray-700">{item.name}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link 
                    href={link.href} 
                    className="block px-4 py-3 hover:bg-gray-100 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
