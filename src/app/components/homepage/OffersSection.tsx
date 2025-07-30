'use client';
import React, { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';
import AnimatedButton from '../button';

const offers = [
  {
    title: 'Starter Kit on Arrival',
    icon: 'mdi:package-variant-closed',
    bgImage: 'images/home-starter-kit.webp',
    bullets: [
      'Personal Development Folder or Journal',
      'Goal-setting Worksheets',
      'Weekly Planner & Progress Tracker',
      '“My Dreams & Goals” Reflection Page',
    ],
  },
  {
    title: 'Move-On Plans',
    icon: 'mdi:map-outline',
    bgImage: 'images/home-move-on-plans.webp',
    bullets: [
      'Personalised, outcome-focused framework',
      'Regular progress reviews & updates',
      'Goals in life skills, wellbeing & independence',
      'Adaptive strategies as needs evolve',
    ],
  },
  {
    title: 'EET Support',
    icon: 'mdi:school-outline',
    bgImage: 'images/home-eet-support.webp',
    bullets: [
      'College & apprenticeship applications',
      'CV development & interview coaching',
      'Vocational training guidance',
      'Partnerships for employment support',
    ],
  },
  {
    title: 'Community & Social Inclusion',
    icon: 'mdi:account-group-outline',
    bgImage: 'images/home-community.webp',
    bullets: [
      'Group activities, workshops & events',
      'Peer-to-peer support networks',
      'Local volunteering initiatives',
      'Building positive social connections',
    ],
  },
  {
    title: 'Emotional & Behavioural Support',
    icon: 'mdi:heart-pulse',
    bgImage: 'images/home-emotional-support.webp',
    bullets: [
      'One-to-one emotional guidance',
      'Constructive behavioural interventions',
      'Confidential substance-misuse support',
      'Suicide-prevention resources & training',
    ],
  },
];

const HEADING = "What We Offer";
const BODY = "We provide a holistic support system designed to equip young women with the tools they need for a successful, independent future.";
const BUTTON_TEXT = "Learn More About Our Support";

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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function OfferSection() {
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
    <section ref={ref} className="py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-[var(--color-heading)]">
          {HEADING}
        </h2>
        <p className="text-lg text-[var(--color-body)] text-center mb-16 max-w-2xl mx-auto">
          {BODY}
        </p>

        <motion.div
          className="flex flex-wrap justify-center gap-8"
          variants={containerVariant}
          initial="hidden"
          animate={controls}
        >
          {offers.map((offer) => (
            <motion.div
              key={offer.title}
              className="sm:w-[300px] md:w-[300px]"
              variants={cardVariant}
            >
              <Card offer={offer} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 w-full flex justify-center">
          <div className="inline-block">
            <AnimatedButton href="/offer">{BUTTON_TEXT}</AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ offer }: { offer: (typeof offers)[number] }) {
  return (
    <div
      className="relative rounded-xl shadow-lg overflow-hidden h-full"
      style={{
        backgroundImage: `url(${offer.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-[var(--foreground)]/80 transition-all duration-300 z-0" />

      <div className="relative z-10 p-8 flex flex-col h-full">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="mb-4 rounded-full bg-[var(--color-heading)]/20 p-4">
            <Icon
              icon={offer.icon}
              className="text-[var(--color-heading)] h-8 w-8"
            />
          </div>
          <h3 className="font-bold text-xl text-[var(--color-heading)]">
            {offer.title}
          </h3>
        </div>

        <ul className="space-y-3 text-left text-base flex-grow">
          {offer.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start">
              <Icon
                icon="mdi:check-circle-outline"
                className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-[var(--color-heading)]"
              />
              <span className="text-[var(--color-body)]">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}