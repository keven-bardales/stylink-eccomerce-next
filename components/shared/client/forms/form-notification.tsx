'use client';
import { AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import Framer from '../framer/framer-motion';

interface NotificationProps {
  isOpen: boolean;
}

export default function FormNotificacion({ isOpen, ...props }: NotificationProps) {
  const [state, setstate] = useState({
    isOpen: isOpen,
  });

  useEffect(() => {
    setstate({ isOpen: isOpen });
  }, [isOpen]);

  return (
    <AnimatePresence>
      {state.isOpen && (
        <Framer
          as="div"
          variants={{ hidden: { x: 200 }, show: { x: 0 } }}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.3 }}
          exit={{ x: '100%' }}
          className="fixed right-0 top-28 z-[60] mr-5 flex flex-col items-center justify-center gap-y-5 rounded-md bg-black px-2 py-2 text-sm font-bold text-white shadow-inner lg:px-12 lg:py-6 lg:text-lg"
        >
          <div className="flex w-full items-center gap-x-2 text-center">
            <span>Formulario Enviado con exito!</span>
            <span>
              <Check className="text-green-300" />
            </span>
          </div>
        </Framer>
      )}
    </AnimatePresence>
  );
}
