'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { itemVariants } from '@/lib/animationVariants';

const CORE_VALUES_HEADING = 'Our Core Values';
const CORE_VALUES_BODY = 'The principles that guide every decision we make and every action we take.';

const coreValues = [
  { title: 'Empowerment', text: 'We equip residents with the tools and confidence needed for independence.', icon: 'mdi:lightning-bolt-outline' },
  { title: 'Compassion', text: 'We respond to every situation with empathy, care, and understanding.', icon: 'mdi:hand-heart-outline' },
  { title: 'Respect', text: 'We value everyone’s background, identity, and voice within our community.', icon: 'mdi:account-group-outline' },
  { title: 'Growth', text: 'We foster continuous personal, emotional, and practical development.', icon: 'mdi:trending-up' },
];

export default function CoreValuesSection() {
  return (
    <motion.section variants={itemVariants} className="py-20 md:py-24">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)] mb-4">
          {CORE_VALUES_HEADING}
        </h2>
        <p className="text-lg text-[var(--color-body)] mb-16 max-w-2xl mx-auto">
          {CORE_VALUES_BODY}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value) => (
            <div 
              key={value.title} 
              className="bg-[var(--background)] p-8 rounded-2xl text-center shadow-lg border border-white/5 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="inline-block bg-[var(--button-bg)]/10 p-4 rounded-full mb-5">
                <Icon icon={value.icon} className="h-10 w-10 text-[var(--button-bg)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-heading)] mb-3">
                {value.title}
              </h3>
              <p className="text-base leading-relaxed text-[var(--color-body)]">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}