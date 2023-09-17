'use client';
import { Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const handleScroll = (id: string) => {
    // first prevent the default behavior
    // get the href and remove everything before the hash (#)

    // get the element by id and use scrollIntoView
    const elem = document.getElementById(id);
    elem?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <footer className="container bottom-0 mx-auto gap-x-5 lg:px-24">
        <div className="flex flex-col items-center justify-between gap-y-5 bg-black p-5 md:flex-row lg:gap-y-0">
          <figure
            onClick={() => {
              handleScroll('home');
            }}
            className="h-20 cursor-pointer"
          >
            <Image height={512} width={512} src="/logo_stylink.jpg" className="h-full w-full" alt="" />
          </figure>
          <span className="text-center text-xl lg:text-left">Stylink todos los Derechos Reservados &copy;{new Date().getFullYear()}</span>
          <div className="flex gap-x-5">
            <a href="https://www.facebook.com/stylinkhn/" target="_blank">
              <Facebook className="h-8 w-8" />
            </a>
            <a href="https://www.instagram.com/stylinkhn/" target="blank">
              <Instagram className="h-8 w-8" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
