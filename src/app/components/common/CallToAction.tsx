'use client'; // Required for Framer Motion animations

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Icon } from '@iconify/react';
import AnimatedButton from '../button';

// Animation variants for staggering the reveal of elements
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Explicitly type this one as well
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut', // This will now be correctly typed
    },
  },
};

const HEADING = "Join Us on the Pathway";
const BODY = "Whether you are seeking support for yourself or someone you know, or you’re interested in partnering with our mission, we’d love to connect.";
const BUTTON_TEXT = "Get in Touch";


export default function CallToAction() {
  return (
    <section className="relative overflow-hidden max-w-5xl mx-auto ">     
  
      <div className="relative ">

        <motion.div
          className="relative max-w-4xl mx-auto px-4 py-15 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} 
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-[var(--color-heading)] mb-4"
          >
            {HEADING}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-[var(--color-body)] mb-10 max-w-2xl mx-auto"
          >
            {BODY}
          </motion.p>
          
          <AnimatedButton
            href="/contact"
            icon={<Icon icon="mdi:arrow-right" className="h-6 w-6" />}
          >
            {BUTTON_TEXT}
          </AnimatedButton>

        </motion.div>
      </div>
    </section>
  );
}