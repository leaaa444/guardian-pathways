'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import AnimatedButton from '../button';
import Image from 'next/image';

// ====== CONSTANTS ======
const IMAGE_URL = '/images/home-about.webp';

const SECTION_TITLE = 'Creating Safe Homes & Brighter Futures';
const SECTION_BODY = 'Guardian Pathway Care provides a safe and empowering home for young women with learning disabilities. Our focus is on fostering personal growth and building confidence in a nurturing, trauma-informed environment.';

const VALUES = [
  {
    name: 'Empowerment',
    description: 'Equipping residents with tools for independence.',
    icon: 'mdi:lightning-bolt-outline',
  },
  {
    name: 'Compassion',
    description: 'Responding with empathy, care, and understanding.',
    icon: 'mdi:hand-heart-outline',
  },
  {
    name: 'Respect',
    description: 'Valuing every background, identity, and voice.',
    icon: 'mdi:account-group-outline',
  },
  {
    name: 'Growth',
    description: 'Fostering continuous personal & emotional development.',
    icon: 'mdi:trending-up',
  },
];

const BUTTON_TEXT = 'Our Story & Values';
const BUTTON_HREF = '/about';

// ====== COMPONENT ======
export const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* IMAGE */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Image 
            src={IMAGE_URL}
            width={640}           
            height={426}  
            alt="Two hands reaching for each other" 
            className="rounded-lg shadow-xl object-cover w-full h-full aspect-[4/3]"
          />
        </motion.div>

        {/* TEXT & VALUES */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)] mb-4">
            {SECTION_TITLE}
          </h2>
          <p className="text-[var(--color-body)] mb-8 text-lg">
            {SECTION_BODY}
          </p>

          <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-8">
            {VALUES.map((value) => (
              <div key={value.name} className="flex items-start">
                <div className="flex-shrink-0 bg-[var(--button-bg)]/10 p-3 rounded-full mr-4">
                  <Icon icon={value.icon} className="h-6 w-6 text-[var(--button-bg)]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-heading)]">
                    {value.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <AnimatedButton href={BUTTON_HREF}>
              {BUTTON_TEXT}
            </AnimatedButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
