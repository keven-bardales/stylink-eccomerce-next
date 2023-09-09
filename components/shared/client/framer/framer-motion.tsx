'use client';
import { motion } from 'framer-motion';
import React, { ComponentProps } from 'react';
type MotionDivProps = ComponentProps<typeof motion.div>;
type MotionAnchorProps = ComponentProps<typeof motion.a>;
type MotionIframeProps = ComponentProps<typeof motion.iframe>;

interface FramerProps extends MotionDivProps {
  as: keyof typeof motion;
  loading?: string;
  allowFullScreen?: boolean;
  referrerPolicy?: string;
}

const Framer: React.FC<FramerProps> = ({ as, children, ...props }) => {
  const MotionComponent = motion[as] as React.FC<MotionDivProps>;
  return <MotionComponent {...props}>{children}</MotionComponent>;
};

export default Framer;
