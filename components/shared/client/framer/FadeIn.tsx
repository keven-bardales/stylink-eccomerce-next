'use client';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ComponentProps, createContext, useContext } from 'react';
const FadeInStaggerContext = createContext(false);

const viewport = { once: false, margin: '0px 0px -200px' };

interface FadeInStaggerProps extends Omit<MotionDivProps, 'as'> {
  speed?: number;
  as: keyof typeof motion;
}

export const FadeInStagger = ({ speed = 0.12, as, ...props }: FadeInStaggerProps) => {
  const AsComponent = motion[as] as React.FC<Omit<FadeInProps, 'as'>>;

  return (
    <FadeInStaggerContext.Provider value={true}>
      <AnimatePresence key={props.key}>
        <AsComponent initial="hidden" whileInView="visible" viewport={{ once: false }} transition={{ staggerChildren: speed }} {...props} />
      </AnimatePresence>
    </FadeInStaggerContext.Provider>
  );
};

type MotionDivProps = ComponentProps<typeof motion.div>;

export interface FadeInProps extends Omit<MotionDivProps, 'as'> {
  as: keyof typeof motion;
  duration?: number;
  delay?: number;
  href?: string;
  target?: string;
}

export const FadeInStaggredChildren: React.FC<FadeInProps> = ({ as, children, ...props }: FadeInProps) => {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  const { key, ...motionProps } = props;
  // Extraer las propiedades que no queremos pasar a AsComponent

  const AsComponent = motion[as] as React.FC<Omit<FadeInProps, 'as'>>; // Omitimos 'as' aquí también

  return (
    <AnimatePresence key={key}>
      <AsComponent
        variants={{
          hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
        {...(isInStaggerGroup
          ? {}
          : {
              initial: 'hidden',
              whileInView: 'visible',
              viewport: viewport,
            })}
        {...motionProps} // Pasamos las props omitiendo 'as'
      >
        {children}
      </AsComponent>
    </AnimatePresence>
  );
};

export const FadeIn: React.FC<FadeInProps> = ({ children, className, as, duration = 0.3, delay = 0, ...props }) => {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  const AsComponent = motion[as] as React.FC<Omit<FadeInProps, 'as'>>;

  return (
    <AsComponent
      className={className}
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: duration, delay: delay }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: 'hidden',
            whileInView: 'visible',
            viewport,
          })}
      {...props}
    >
      {children}
    </AsComponent>
  );
};
