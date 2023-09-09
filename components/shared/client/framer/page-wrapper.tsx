'use client';
import { AnimatePresence, motion, usePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

interface PageAnimationWrapperProps {
  children: React.ReactNode;
  key: string;
  className?: string;
}

export default function PageAnimationWrapper({ children, key, className }: PageAnimationWrapperProps) {
  const pathname = usePathname();

  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 1000);
  }, [isPresent, pathname, safeToRemove]);

  return (
    <>
      <AnimatePresence>
        {isPresent && (
          <motion.main
            key={key}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15, x: 500 }}
            transition={{ duration: 0.3 }}
            className={className}
          >
            {children}
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
