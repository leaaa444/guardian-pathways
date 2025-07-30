'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

// The animation is now part of the component itself
const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// The props are now more flexible to handle both links and buttons
interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string; // href is now optional
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export default function AnimatedButton({
  href,
  children,
  icon,
  className = '',
  ...props // Pass down other props like type="submit"
}: AnimatedButtonProps) {
  const buttonClasses = `
    inline-flex items-center justify-center gap-x-3 
    bg-[var(--button-bg)] text-[var(--button-text)] 
    font-bold py-3 px-8 rounded-full text-lg 
    shadow-lg shadow-black/10
    transition-all duration-300 
    hover:bg-[var(--button-hover)] 
    hover:shadow-xl hover:shadow-black/20 
    hover:-translate-y-1
    ${className} 
  `;

  const content = (
    <>
      <span>{children}</span>
      {icon}
    </>
  );

  return (
    <motion.div
      variants={buttonVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      className="w-full"
    >
      {href ? (
        // If href exists, render a Link
        <Link href={href} className={buttonClasses}>
          {content}
        </Link>
      ) : (
        // Otherwise, render a button
        <button className={buttonClasses} {...props}>
          {content}
        </button>
      )}
    </motion.div>
  );
}
