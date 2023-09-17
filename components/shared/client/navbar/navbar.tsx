'use client';
import { navVariants } from '@/lib/utils/constants/framer/framer-variants';
import { motion } from 'framer-motion';
import { Menu, XCircle } from 'lucide-react';
import Image from 'next/image';
import logo_stylink from 'public/logo_stylink.png';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const pagesLinks = [
  {
    name: 'Inicio',
    path: 'home',
  },
  {
    name: 'Personalizar',
    path: 'customize',
  },
  {
    name: 'Productos',
    path: 'products',
  },

  {
    name: 'Contacto',
    path: 'contact',
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isnavOpen, setisnavOpen] = useState(false);

  const toggleNav = () => {
    setisnavOpen(!isnavOpen);
  };

  const handleScroll = (id: string) => {
    // first prevent the default behavior
    // get the href and remove everything before the hash (#)

    // get the element by id and use scrollIntoView
    const elem = document.getElementById(id);
    elem?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    }; // 100ms

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={twMerge(
        'fixed top-0 z-50 w-full border-b border-b-transparent py-4 transition duration-300 ease-linear',
        scrolled && 'border-b-skin-secondary bg-skin-secondary py-0',
        isnavOpen && 'bg-skin-secondary lg:bg-transparent'
      )}
    >
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView={'show'}
        className={twMerge(
          `container mx-auto flex w-full items-center justify-between gap-x-5 border border-transparent bg-transparent px-7 lg:gap-x-28 lg:px-24`,
          isnavOpen && 'flex-wrap !text-black lg:px-24'
        )}
      >
        <figure
          onClick={() => {
            handleScroll('home');
          }}
          className="w-20 cursor-pointer"
        >
          {scrolled || isnavOpen ? (
            <Image height={512} width={512} src={logo_stylink} className="h-auto w-full rounded-xl" alt="" />
          ) : (
            <Image height={512} width={512} src="/no_bg_white_letters.png" alt="" />
          )}
        </figure>
        <div
          className={twMerge(
            'hidden grow flex-col justify-between transition duration-300 sm:flex-row lg:flex',
            isnavOpen && 'order-last flex w-full gap-y-5 rounded-xl text-black lg:order-none lg:flex'
          )}
        >
          {pagesLinks.map((page) => {
            return (
              <button
                key={page.path}
                className={twMerge(
                  'text-xl font-bold text-skin-primary transition duration-300 hover:scale-110 hover:text-skin-primary hover:underline',
                  scrolled && 'text-black hover:text-skin-secondary',
                  isnavOpen && 'text-black hover:text-skin-secondary lg:text-skin-primary lg:hover:text-skin-primary'
                )}
                onClick={() => {
                  handleScroll(page.path);
                }}
              >
                {page.name}
              </button>
            );
          })}
        </div>
        <button
          className="lg:hidden"
          onClick={() => {
            toggleNav();
          }}
        >
          {isnavOpen ? (
            <XCircle
              className={twMerge('text-skin-main h-8 w-8 cursor-pointer transition duration-300 lg:hidden', isnavOpen && 'text-skin-secondary')}
            />
          ) : (
            <Menu
              className={twMerge(
                'text-skin-main h-8 w-8 cursor-pointer transition duration-300 lg:hidden',
                scrolled && 'text-skin-secondary',

                isnavOpen && 'text-skin-secondary'
              )}
            />
          )}
        </button>
      </motion.nav>
    </header>
  );
};

export default Navbar;
