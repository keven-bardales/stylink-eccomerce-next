'use client';

import { FadeIn, FadeInStagger, FadeInStaggredChildren } from '@/components/shared/client/framer/FadeIn';
import { categorias } from '@/lib/utils/constants/categorias';
import { productos } from '@/lib/utils/constants/products';
import Image from 'next/image';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function FilterProductsSection() {
  //   const [filtroCatId, setFiltroCatId] = useState(0);
  //   const [productosFiltrados, setProductosFiltrados] = useState<any[]>([]);

  const [state, setstate] = useState({
    filteredProducts: productos,
    categories: categorias,
    selectedCategory: 0,
    productsMaxSlice: 3,
  });

  return (
    <section id="products" className="container mx-auto flex w-full flex-col items-center gap-y-10 px-5 lg:px-24">
      <FadeIn as="h2" className="w-full text-center text-2xl font-bold text-skin-secondary md:text-4xl lg:text-5xl">
        Ultimos Productos
      </FadeIn>

      <FadeIn
        as="ul"
        className="inline-flex w-full gap-x-3 overflow-x-auto overflow-y-clip lg:justify-around xl:overflow-x-visible xl:overflow-y-visible"
      >
        {categorias.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setstate((previous) => {
                if (cat.id !== 0) {
                  return { ...previous, filteredProducts: productos.filter((producto) => producto.categoriaId == cat.id), selectedCategory: cat.id };
                }
                return { ...previous, filteredProducts: productos, selectedCategory: cat.id };
              });
            }}
            className={twMerge(
              'min-w-fit grow rounded-lg border border-black px-5  py-2 text-skin-secondary  transition-all duration-300 hover:scale-y-105 hover:bg-black hover:text-white',
              state.selectedCategory === cat.id && 'scale-x-100 scale-y-110 bg-black text-white hover:scale-x-105 hover:scale-y-125',
              state.selectedCategory !== cat.id && 'scale-y-90 hover:scale-x-100 hover:scale-y-100'
            )}
          >
            {cat.name}
          </button>
        ))}
      </FadeIn>

      {state.filteredProducts.length == 0 && (
        <section>
          <h3 className="text-center text-2xl font-bold text-skin-secondary">No hay productos</h3>
        </section>
      )}

      <FadeInStagger
        key={state.selectedCategory + state.productsMaxSlice}
        as="ul"
        className="flex w-full flex-col flex-wrap justify-between gap-x-5 gap-y-5 sm:flex-row lg:gap-y-7"
      >
        {state.filteredProducts.slice(0, state.productsMaxSlice).map((producto, index) => (
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

      {state.selectedCategory == 0 && (
        <button
          onClick={() => {
            if (state.productsMaxSlice == productos.length) {
              // Reduzco la cantidad de productos a mostrar a 3
              setstate((previous) => {
                return { ...previous, productsMaxSlice: 3 };
              });

              // Scrool to la sección de productos
              const elem = document.getElementById('products');
              if (elem) {
                console.log('Scrolling into view'); // Depuración
                setTimeout(() => {
                  const elem = document.getElementById('products');
                  elem?.scrollIntoView({ block: 'start', behavior: 'smooth' });
                }, 10);
              } else {
                console.log("Element with id 'products' not found"); // Depuración
              }

              /*
            // Este fragmento podría estar interfiriendo, intenta comentarlo
            document.body.scrollTo({
              behavior: 'smooth',
            });
            */

              return;
            } else {
              // Muestro todos los productos
              setstate((previous) => {
                return { ...previous, productsMaxSlice: productos.length };
              });
            }
          }}
          className="w-full rounded-full border-2 border-skin-main bg-skin-main p-3 text-xl font-bold text-skin-primary transition duration-300 sm:w-3/4 lg:w-64 lg:p-5"
        >
          {state.productsMaxSlice == productos.length ? 'Ver menos' : 'Ver todos'}
        </button>
      )}
    </section>
  );
}
