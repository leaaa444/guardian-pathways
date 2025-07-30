'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';
import { Icon } from '@iconify/react';

const ETHOS_HEADING = 'Our Ethos & Support Philosophy';
const ETHOS_BODY = 'The beliefs that shape how we support each resident through personal growth and positive change.';

const ethosPoints = [
  { title: 'Trauma-Informed Approach', text: 'We recognise that resistance to change can come from trauma, fear, or shame. Our support is built on empathy and safety.' },
  { title: 'Capacity for Change', text: 'Each young woman is assessed with compassion, focusing on her ability and motivation to grow with the right guidance.' },
  { title: 'Good Enough Support', text: 'Our team is emotionally and physically available, offering consistent, practical care tailored to real-life needs.' },
  { title: 'Environment Matters', text: 'Personal development doesn’t happen in isolation. We consider external barriers like economic hardship and housing insecurity.' },
  { title: 'Empowerment over Rescue', text: 'We help residents take ownership of their journey while reminding them they’re never alone in it.' },
];

const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariant: Variants = {
  hidden: { y: -100, opacity: 0, rotate: -3 },
  visible: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

const shineVariant: Variants = {
  hidden: { x: '-150%' },
  visible: {
    x: '150%',
    transition: {
      duration: 0.8,
      ease: 'linear',
      delay: 0.8, 
    },
  },
};

export default function EthosSection() {
  const ref = useRef(null);
  const controls = useAnimation();
 
  const isInView = useInView(ref, { amount: 0.2 });

  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
     
      controls.start('hidden');
    }
  }, [isInView, controls]);

  return (
    <motion.section ref={ref} className="py-20 md:py-24">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)] mb-4">
          {ETHOS_HEADING}
        </h2>
        <p className="text-lg text-[var(--color-body)] mb-16 max-w-3xl mx-auto">
          {ETHOS_BODY}
        </p>

        <motion.div
          className="flex flex-wrap justify-center gap-8 text-left"
          variants={containerVariant}
          initial="hidden"
          animate={controls}
        >
          {ethosPoints.map((point) => (
            <motion.div
              key={point.title}
              className="relative bg-[var(--foreground)] p-8 rounded-xl shadow-lg border border-white/10 w-full md:max-w-sm flex flex-col overflow-hidden"
              variants={cardVariant}
            >
              <div className="flex items-center gap-4 mb-4">
                <Icon 
                  icon="mdi:shield-check-outline" 
                  className="h-7 w-7 flex-shrink-0 text-[var(--button-bg)]" 
                />
                <h3 className="text-xl font-bold text-[var(--color-heading)]">
                  {point.title}
                </h3>
              </div>
              
              <p className="text-base leading-relaxed text-[var(--color-body)]">
                {point.text}
              </p>

              <motion.div
                className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 skew-x-[-25deg]"
                variants={shineVariant}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}