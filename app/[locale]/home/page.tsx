/* eslint-disable prettier/prettier */
'use client';

import ContactForm from '@/components/pages/home/ccontact/contact-form';
import { FadeIn, FadeInStagger, FadeInStaggredChildren } from '@/components/shared/client/framer/FadeIn';
import Framer from '@/components/shared/client/framer/framer-motion';
import PageAnimationWrapper from '@/components/shared/client/framer/page-wrapper';
import { categorias } from '@/lib/utils/constants/categorias';
import { productos } from '@/lib/utils/constants/products';
import { MessageSquare, Pencil, Quote, Truck } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

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

export default function HomePage() {
  const [filtroCatId, setFiltroCatId] = useState(0);
  const [productosFiltrados, setProductosFiltrados] = useState<any[]>([]);

  return (
    <PageAnimationWrapper key="home-wrapper" className="theme-dark">
      <section className="animate-fade-in-slow relative flex min-h-screen items-center justify-center bg-black">
        <figure
          className="absolute z-10 h-full w-full bg-cover bg-no-repeat object-cover opacity-10"
          style={{ backgroundImage: 'url("/chico_estadio.jpg")' }}
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
              <button className="w-full grow rounded-full border-2 border-skin-main bg-transparent p-3 text-skin-primary transition duration-300 hover:bg-skin-secondary hover:text-skin-secondary sm:w-3/4 lg:w-56 lg:grow-0 lg:p-5 lg:text-xl">
                Comienza a Crear
              </button>
              <button className="w-full grow rounded-full border-4 bg-skin-secondary p-3 text-skin-secondary sm:w-3/4 lg:w-56 lg:grow-0 lg:p-5 lg:text-xl">
                Contactanos
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-skin-secondary">
        <article className="container mx-auto flex flex-col flex-wrap gap-y-10 py-16 lg:flex-row">
          <FadeIn as="h2" className="w-full text-center text-2xl font-bold text-skin-secondary md:text-4xl ">
            Estamos para personalizar tu vida
          </FadeIn>
          <FadeInStagger as="ul" className="container mx-auto flex w-full flex-col justify-between gap-x-5 lg:flex-row lg:px-24">
            {beneficios.map((beneficio) => (
              <FadeInStaggredChildren
                as="li"
                className="flex grow flex-col items-center gap-y-5 bg-skin-secondary p-5 text-center text-skin-secondary"
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
            <button className="w-full rounded-full border-2 border-skin-main bg-transparent p-3 text-xl font-bold text-skin-primary transition duration-300 hover:bg-skin-secondary hover:text-skin-secondary sm:w-3/4 lg:w-56 lg:p-5">
              Personaliza Ya!
            </button>
          </FadeIn>
        </div>
        <FadeIn
          as="figure"
          className="absolute z-10 h-full w-full grow bg-opacity-80 bg-cover !opacity-10 lg:right-0 lg:z-20 lg:w-2/5 lg:!opacity-80"
          style={{ backgroundImage: 'url("/tote_bags_bad_bunny.jpg")' }}
        ></FadeIn>
      </section>

      <section className="h-auto bg-skin-secondary py-16">
        <article className="flex flex-col items-center gap-y-10">
          <section className="flex w-full flex-col items-center gap-y-10">
            <FadeIn as="h2" className="w-full text-center text-2xl font-bold text-skin-secondary md:text-4xl ">
              Ultimos Productos
            </FadeIn>

            <div className='flex flex-wrap gap-3'>
              {categorias.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setFiltroCatId(cat.id);
                    const prods = productos.filter(prod => prod.categoriaId == cat.id);
                    if(cat.id !== 0) {
                      setProductosFiltrados(prods);
                    }
                  }}
                  className={`border border-black rounded-lg  px-5 py-2 hover:text-white hover:bg-black transition-all hover:scale-105 ${filtroCatId == cat.id ? 'text-white bg-black scale-110' : 'text-gray-800'}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {filtroCatId ? (
              <FadeInStagger
                as="ul"
                className="container mx-auto flex w-full flex-col flex-wrap justify-between gap-x-5 gap-y-5 px-5 sm:flex-row lg:gap-y-7 lg:px-24"
              >
                {productosFiltrados.map((producto, index) => (
                  <FadeInStaggredChildren
                    as="li"
                    key={`producto ${index}`}
                    className="flex w-full grow justify-center shadow-2xl sm:w-[40%] sm:max-w-[60%] xl:w-[30%] xl:max-w-none"
                  >
                    <Image
                      width={512}
                      height={512}
                      className="h-auto w-full rounded-md bg-center object-fill sm:h-72 lg:h-96"
                      src={producto.imagen}
                      alt={`producto ${index}`}
                    />
                </FadeInStaggredChildren>
              ))}
            </FadeInStagger>
            ): (
              <FadeInStagger
                  as="ul"
                  className="container mx-auto flex w-full flex-col flex-wrap justify-between gap-x-5 gap-y-5 px-5 sm:flex-row lg:gap-y-7 lg:px-24"
                >
                  {productos.map((producto, index) => (
                    <FadeInStaggredChildren
                      as="li"
                      key={`producto ${index}`}
                      className="flex w-full grow justify-center shadow-2xl sm:w-[40%] sm:max-w-[60%] xl:w-[30%] xl:max-w-none"
                    >
                      <Image
                        width={512}
                        height={512}
                        className="h-auto w-full rounded-md bg-cefnter object-fill sm:h-72 lg:h-96"
                        src={producto.imagen}
                        alt={`producto ${index}`}
                      />
                    </FadeInStaggredChildren>
                  ))}
                </FadeInStagger>
            )}

            {filtroCatId ? (
              <button onClick={() => setFiltroCatId(0)} className="w-full rounded-full border-2 border-skin-main bg-skin-main p-3 text-xl font-bold text-skin-primary transition duration-300 sm:w-3/4 lg:w-64 lg:p-5">
                Ver mas
              </button>
            ) : null}
          </section>

          <section className="flex w-full flex-col items-center gap-y-10">
            <FadeIn as="h2" className="w-full text-center text-2xl font-bold text-skin-secondary md:text-4xl lg:text-5xl">
              Testimonios de nuestros clientes
            </FadeIn>
            <FadeInStagger as="ul" className="container mx-auto flex flex-col justify-between gap-x-5 gap-y-5 px-5 lg:flex-row lg:px-24">
              {productos.slice(0, 3).map((producto, index) => (
                <FadeInStaggredChildren
                  as="li"
                  key={index}
                  className="relative flex w-full grow items-center justify-center overflow-hidden rounded-md border border-skin-secondary px-10 py-12 text-center text-skin-secondary"
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
        </article>
      </section>

      <section className="relative flex h-auto min-h-[800px] flex-col items-stretch justify-center bg-skin-main lg:flex-row">
        <FadeIn
          as="figure"
          className="absolute z-10 h-full w-full grow bg-cover !opacity-20 lg:left-0 lg:z-20 lg:w-[45%] lg:!opacity-70"
          style={{ backgroundImage: 'url("/reggalo_platya.jpg")' }}
        ></FadeIn>

        <div className="container z-20 mx-auto flex h-full w-full flex-col flex-wrap items-center justify-end gap-y-5 px-5 py-5 lg:absolute lg:flex-row lg:px-24">
          <ContactForm></ContactForm>
        </div>
      </section>
    </PageAnimationWrapper>
  );
}
