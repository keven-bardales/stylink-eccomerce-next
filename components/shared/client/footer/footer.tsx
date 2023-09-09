import { Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <footer className="container bottom-0 mx-auto gap-x-5 lg:px-24">
        <div className="flex flex-col items-center justify-between gap-y-7 bg-black p-5 md:flex-row lg:gap-y-0">
          <figure className="h-20">
            <Image height={512} width={512} src="/logo_stylink.jpg" className="h-full w-full" alt="" />
          </figure>
          <span className="text-xl">Stylink todos los Derechos Reservados &copy;{new Date().getFullYear()}</span>
          <div className="flex">
            <Facebook className="h-8 w-8" />
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
