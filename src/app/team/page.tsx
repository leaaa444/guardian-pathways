'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';
import { itemVariants } from '@/lib/animationVariants'; // Adjust the path if needed
import Image from 'next/image';

const TEAM_HEADING = 'Meet Our Team';
const TEAM_BODY = `Led by Registered Provider Genevieve Davies and Registered Manager Diana Ruddock, our team brings together decades of expertise in nursing, social care, and youth support.`;
const TEAM_BODY_2 = `We are proud to have a committed group of qualified support workers, social work graduates, and trainee professionals—all trained to at least Level 3 in Health and Social Care. Every member of our staff is dedicated to promoting independence, well-being, and resilience for the young women in our care.`;

const SAFEGUARDING_HEADING = 'Our Safeguarding Commitment';
const SAFEGUARDING_BODY = `At Guardian Pathway Care, the safety and well-being of our residents is paramount. Every member of our team undergoes enhanced police checks via the Disclosure and Barring Service (DBS), with full reference verification and employment history reviews. We ensure continuous professional supervision, safeguarding training, and clear accountability at all levels.`;

const STRUCTURE_HEADING = 'Staffing Structure & Support';
const STRUCTURE_BODY = `Our centre is led by the Registered Manager, supported by a team of Residential Family Support Workers who provide round-the-clock care. A minimum of three staff members are present during daytime hours, with flexible adjustments based on risk assessments and resident needs. We maintain clear lines of supervision and ensure staff presence during all outings, appointments, and community engagements.`;

const TRAINING_HEADING = 'Training & Development';
const TRAINING_BODY = `We prioritise continuous training for all staff. Every team member is trained to at least Level 3 in Health and Social Care and encouraged to pursue further qualifications. Our team participates in regular workshops focused on trauma-informed care, safeguarding, disability support, and communication, ensuring that every resident receives informed, compassionate support.`;

const teamMembers = [
  {
    name: 'Genevieve Davies',
    title: 'Registered Provider',
    quote:
      'With over two decades of experience in public health nursing and community care, I’m passionate about creating environments where young women can thrive.',
    image:
'/images/genevieve-davies.webp',
  },
  {
    name: 'Diana Ruddock',
    title: 'Registered Manager',
    quote:
      'My mission is to empower young women by combining professional support with heartfelt understanding and encouragement.',
    image:
'/images/diana-ruddock.webp',
  },
  {
    name: 'Our Staff Team',
    title: 'Support Workers & Trainees',
    quote:
      'We are a diverse and dedicated team of professionals, passionate about guiding young women through every step of their supported living journey.',
    image:
'/images/staff-team.webp',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  // --- CHANGE: All cards now slide up from the bottom ---
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function MeetTheTeam() {
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
    <motion.section variants={itemVariants} className="pt-30 text-center">
      <div className="max-w-5xl mx-auto mb-10 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-heading)] mb-4">
          {TEAM_HEADING}
        </h2>
        <p className="text-lg text-[var(--color-body)] mb-6">{TEAM_BODY}</p>
        <p className="text-lg text-[var(--color-body)]">{TEAM_BODY_2}</p>
      </div>

      <motion.div
        ref={ref}
        className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {teamMembers.map((member) => (
          <motion.div
            key={member.name}
            className="w-96"
            variants={cardVariants}
          >
            <div
              className="group relative rounded-2xl overflow-hidden shadow-lg h-full"
            >
              <Image 
                src={member.image}
                alt={member.name}
            width={640}           
            height={426}  
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                <p className="text-[var(--button-bg)] font-semibold mb-2">{member.title}</p>
                <p className="text-white/80 text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {member.quote}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-20 max-w-5xl mx-auto px-4 text-left space-y-12">
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-2 py-8 border-b border-white/10">
          <h3 className="text-2xl font-bold text-[var(--color-heading)] md:text-right">
            {SAFEGUARDING_HEADING}
          </h3>
          <p className="text-lg text-[var(--color-body)] md:col-span-2">
            {SAFEGUARDING_BODY}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-x-8 gap-y-2 py-8 border-b border-white/10">
          <h3 className="text-2xl font-bold text-[var(--color-heading)] md:text-right">
            {STRUCTURE_HEADING}
          </h3>
          <p className="text-lg text-[var(--color-body)] md:col-span-2">
            {STRUCTURE_BODY}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-x-8 gap-y-2 py-8">
          <h3 className="text-2xl font-bold text-[var(--color-heading)] md:text-right">
            {TRAINING_HEADING}
          </h3>
          <p className="text-lg text-[var(--color-body)] md:col-span-2">
            {TRAINING_BODY}
          </p>
        </div>
      </div>
    </motion.section>
  );
}