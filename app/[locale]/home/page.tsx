/* eslint-disable prettier/prettier */

import ContactForm from '@/components/pages/home/ccontact/contact-form';
import FilterProductsSection from '@/components/pages/home/ccontact/filter-products-section';
import { FadeIn, FadeInStagger, FadeInStaggredChildren } from '@/components/shared/client/framer/FadeIn';
import Framer from '@/components/shared/client/framer/framer-motion';
import PageAnimationWrapper from '@/components/shared/client/framer/page-wrapper';
import { productos } from '@/lib/utils/constants/products';
import { Clock, Facebook, Instagram, MessageSquare, Pencil, Phone, Quote, Truck } from 'lucide-react';
import chico_estadio from 'public/chico_estadio.jpg';
import tote_bags_bad_bunny from 'public/tote_bags_bad_bunny.jpg';
import universal_soderman_shirt from 'public/universal_soderman_shirt.jpg';
import { BsWhatsapp } from 'react-icons/bs';
import CustomizeNowButton from './components/customize-hero';
import CustomizeButton from './components/customize-now-section-button';

const beneficios = [
  {
    name: 'Respuesta Rapida',
    description: 'Utilizamos los mejores materiales y técnicas de estampado para asegurar la calidad y durabilidad de nuestros productos.',
    icon: <MessageSquare className="h-[3rem] w-[3rem] md:h-[3rem] md:w-[4rem]" />,
  },
  {
    name: 'Personalización Única',
    description: 'Ofrecemos una amplia gama de opciones de personalización para hacer que tus prendas y objetos sean verdaderamente únicos. ',
    icon: <Pencil className="h-[3rem] w-[3rem] md:h-[3rem] md:w-[4rem]" />,
  },
  {
    name: 'Envío Rápido y Seguro',
    description:
      'Nos comprometemos a entregar tu pedido de manera rápida y segura. Nos Aseguramos que tus productos lleguen en perfectas condiciones y en el tiempo prometido.',
    icon: <Truck className="h-[3rem] w-[3rem] md:h-[3rem] md:w-[4rem]" />,
  },
];

export default async function HomePage() {
  return (
    <PageAnimationWrapper key="home-wrapper" className="theme-dark">
      <section id="home" className="animate-fade-in-slow relative flex min-h-screen items-center justify-center bg-black">
        <figure
          className="absolute z-10 h-full w-full bg-cover bg-center bg-no-repeat object-cover opacity-20 lg:bg-top"
          style={{ backgroundImage: `url("${chico_estadio.src}")` }}
        ></figure>
        <div className="container absolute z-20 mx-auto flex flex-col items-start gap-y-10 px-5 font-bold text-skin-primary lg:px-24">
          <div className="flex flex-col gap-y-5">
            <Framer
              initial={{ opacity: 0, x: -250 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              viewport={{ once: false }}
              as="h2"
              className="w-full text-center text-5xl md:text-6xl 2xl:text-8xl"
            >
              Be
            </Framer>
            <Framer
              initial={{ opacity: 0, x: -250 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              viewport={{ once: false }}
              as="h2"
              className="w-full text-center text-5xl md:text-6xl 2xl:text-8xl"
            >
              The Creator
            </Framer>
            <Framer
              initial={{ opacity: 0, x: -250 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.3 }}
              viewport={{ once: false }}
              as="h2"
              className="w-full text-center text-5xl md:text-6xl 2xl:text-8xl"
            >
              Of What You Wear
            </Framer>
            <h3 className="mb-4 text-center text-xl lg:text-2xl">Personalizamos tus camisas, hoodies, totebags, tazas y más.</h3>

            <div className="flex w-full flex-col items-center justify-center gap-x-5 gap-y-5 lg:flex-row lg:gap-y-0">
              <CustomizeNowButton />
              <button className="w-full grow rounded-full border-4 bg-skin-secondary p-3 text-skin-secondary sm:w-3/4 lg:w-56 lg:grow-0 lg:p-5 lg:text-xl">
                Contactanos
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-skin-secondary">
        <article className="container mx-auto flex flex-col flex-wrap gap-y-10 py-16 lg:flex-row">
          <FadeIn as="h2" className="w-full text-center text-2xl font-bold text-skin-secondary md:text-4xl lg:text-5xl">
            Estamos para personalizar tu vida
          </FadeIn>
          <FadeInStagger as="ul" className="container mx-auto flex w-full flex-col justify-between gap-x-5 lg:flex-row lg:px-24">
            {beneficios.map((beneficio) => (
              <FadeInStaggredChildren
                as="li"
                className="flex grow basis-full flex-col items-center gap-y-5 bg-skin-secondary p-5 text-center text-skin-secondary md:basis-[40%] lg:basis-[30%]"
                key={beneficio.name}
              >
                {beneficio.icon}
                <span className="text-xl font-bold text-skin-secondary xl:text-3xl">{beneficio.name}</span>
                <p className="text-skin-secondary lg:text-xl">{beneficio.description}</p>
              </FadeInStaggredChildren>
            ))}
          </FadeInStagger>
        </article>
      </section>

      <section className="relative flex h-[80vh] flex-col justify-center overflow-hidden bg-black lg:flex-row">
        <div className="container absolute z-20 mx-auto grid h-full grow bg-transparent px-5 text-skin-primary lg:z-10 lg:bg-skin-main lg:px-24">
          <FadeIn as="div" className="flex h-full w-full flex-col items-center justify-center gap-y-5 lg:w-1/2 lg:items-start">
            <h2 className="w-full text-center text-4xl font-bold lg:text-left lg:text-6xl">Personalizaciones hechas a tu medida</h2>
            <p className="text-center text-lg lg:text-left">
              Personalizamos todos tus articulos preferidos tu solo debes imaginarlo o inspirarte en diseño existente y lo hacemos realidad
            </p>
            <CustomizeButton />
          </FadeIn>
        </div>
        <FadeIn
          as="figure"
          className="absolute z-10 h-full w-full grow bg-opacity-80 bg-cover !opacity-20 lg:right-0 lg:z-20 lg:w-2/5 lg:!opacity-80"
          style={{ backgroundImage: `url("${tote_bags_bad_bunny.src}")` }}
        ></FadeIn>
      </section>

      <section className="flex h-auto flex-col gap-y-20 bg-skin-secondary py-16">
        <FilterProductsSection />

        <section id="testimony" className="container mx-auto flex w-full flex-col items-center gap-y-10">
          <FadeIn as="h2" className="w-full text-center text-2xl font-bold text-skin-secondary md:text-4xl lg:text-5xl">
            Testimonios de nuestros clientes
          </FadeIn>
          <FadeInStagger as="ul" className="container mx-auto flex flex-col flex-wrap justify-between gap-x-5 gap-y-5 px-5 md:flex-row lg:px-24">
            {productos.slice(0, 3).map((producto, index) => (
              <FadeInStaggredChildren
                as="li"
                key={index}
                className="relative flex w-full grow items-center justify-center overflow-hidden rounded-md border border-skin-secondary px-10 py-12 text-center text-skin-secondary md:w-[40%] lg:w-[30%]"
              >
                <div className="absolute left-0 top-0 z-20 mb-5 px-5 py-2 text-skin-secondary">
                  <Quote />
                </div>
                <span className="w-full text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iure molestiae minima commodi sequi explicabo consequatur suscipit
                  inventore laudantium sint iste sit distinctio tenetur, saepe facere laboriosam voluptatibus officiis velit.
                </span>
              </FadeInStaggredChildren>
            ))}
          </FadeInStagger>
        </section>
      </section>

      <section id="customize" className="relative flex h-auto min-h-[800px] flex-col items-stretch justify-center bg-skin-main lg:flex-row">
        <FadeIn
          as="figure"
          className="absolute z-10 h-full w-full grow bg-cover !opacity-20 lg:left-0 lg:z-20 lg:w-[45%] lg:!opacity-70"
          style={{ backgroundImage: `url("${universal_soderman_shirt.src}")` }}
        ></FadeIn>

        <div className="container z-20 mx-auto flex h-full w-full flex-col flex-wrap items-center justify-end gap-y-5 px-5 py-5 lg:absolute lg:flex-row lg:px-24">
          <ContactForm></ContactForm>
        </div>
      </section>

      <section id="contact" className="flex w-full flex-col items-stretch justify-center gap-y-2 bg-gray-200 bg-skin-main py-10 lg:gap-y-10">
        <header className="container mx-auto">
          <FadeIn as="h2" className="w-full text-center text-xl font-bold text-skin-primary md:text-4xl lg:text-2xl xl:text-5xl">
            Contáctanos y conoce como encontrarnos
          </FadeIn>
        </header>
        <div className="container mx-auto flex w-full flex-col justify-between gap-x-10 gap-y-5 px-5 lg:gap-y-0 lg:px-24 xl:flex-row">
          <FadeIn
            as="div"
            className="flex w-full grow flex-col items-center gap-y-5 py-5 !text-center md:text-left lg:gap-y-5 xl:w-[40%] xl:items-start"
          >
            <div className="flex items-center justify-center gap-x-2 lg:justify-start">
              <a
                target="_blank"
                href="tel:+504 9999-9999"
                className="flex items-center justify-center gap-x-2 text-center text-lg font-bold text-skin-primary transition-all duration-300 hover:text-skin-muted lg:text-2xl"
              >
                <Phone className="h-8 w-8" />
                +504 9999-9999
              </a>
            </div>
            <div className="flex items-center justify-center gap-x-2 lg:justify-start">
              <a
                target="_blank"
                href="https://www.instagram.com/stylinkhn"
                className="flex items-center justify-center gap-x-2 text-center text-lg font-bold text-skin-primary transition-all duration-300 hover:text-skin-muted lg:text-2xl"
              >
                <Instagram className="h-6 w-6" />
                @stylinkhn
              </a>
            </div>
            <div className="flex items-center justify-center gap-x-2 lg:justify-start">
              <a
                target="_blank"
                href="https://www.instagram.com/stylinkhn"
                className="flex items-center justify-center gap-x-2 text-center text-lg font-bold text-skin-primary transition-all duration-300 hover:text-skin-muted lg:text-2xl"
              >
                <Facebook className="h-6 w-6" />
                stylinkhn
              </a>
            </div>
            <div className="flex items-center justify-center gap-x-2 lg:justify-start">
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=50499999999&text=Hola%20les%20contacto%20a%20través%20de%20su%20sitio%20web,%20necesito%20más%20información%20acerca%20de%20ustedes."
                className="flex items-center justify-center gap-x-2 text-center text-lg font-bold text-skin-primary transition-all duration-300 hover:text-skin-muted lg:text-2xl"
              >
                <BsWhatsapp className="h-6 w-6" />
                Chatea con nosotros
              </a>
            </div>
            <div className="w-[80%] gap-x-2 lg:flex lg:w-auto">
              <Clock className="inline h-8 w-8" />
              <span className="inline text-center font-bold lg:text-xl xl:text-left"> Lunes a Viernes: 9AM - 5PM, Sábados: 9AM - 12PM</span>
            </div>
          </FadeIn>
          <FadeIn as="div" className="h-64 w-full grow py-5 md:h-96 xl:h-auto xl:w-[40%]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3843.9968425988045!2d-88.03467492487518!3d15.53829998506691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDMyJzE3LjkiTiA4OMKwMDEnNTUuNiJX!5e0!3m2!1ses!2shn!4v1694916116976!5m2!1ses!2shn"
              className="h-full w-full"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </FadeIn>
        </div>
      </section>
    </PageAnimationWrapper>
  );
}
