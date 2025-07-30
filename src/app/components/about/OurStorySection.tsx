'use client';

import { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { itemVariants } from '@/lib/animationVariants';

const HEADING_MISSION = "Our Mission";
const BODY_MISSION = "To empower young women aged 18–24 by providing safe, supportive housing, personalized life-skills training, and unwavering emotional support.";
const HEADING_VISION = "Our Vision";
const BODY_VISION = "A community where every young woman, regardless of her starting point, has the opportunity to build a stable, successful, and positive future.";

const WELCOME_HEADING = "Welcome to Guardian Pathway Care";
const WELCOME_BODY_1 = `We specialise in providing a safe, nurturing residential environment for young women aged 18 and over with learning disabilities, particularly those assessed as low to medium risk. Located at 68 Northumberland Road, Harrow, our home features two comfortable double rooms where residents can thrive while developing essential life skills and working toward personal independence.`;
const WELCOME_BODY_2 = `Our supported living services create an environment free from stress and prejudice, promoting peer support and skill-building. Through personalised support, we help each young woman gain confidence and prepare for independent living. Our assessments are thorough, person-centred, and evidence-based—reflecting each individual’s unique journey. Final reports ensure timely recommendations and continuous alignment with quality standards.`;
const QA_NOTE = `An Independent Visitor (Reg 25) conducts monthly quality assurance checks to help us improve and uphold our commitment to excellence.`;


export default function OurStorySection() {
  const ref = useRef(null);
  

  const isInView = useInView(ref, { amount: 0.4 });

  return (
    <motion.section variants={itemVariants} className="py-20 md:py-24">
      <div className="max-w-screen-xl mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: The Story */}
          <div className="space-y-6 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)]">{WELCOME_HEADING}</h2>
            <p className="text-lg leading-relaxed">{WELCOME_BODY_1}</p>
            <p className="text-lg leading-relaxed">{WELCOME_BODY_2}</p>
            <p className="text-sm text-[var(--color-muted)] italic pt-2">{QA_NOTE}</p>
          </div>

          <div ref={ref} style={{ perspective: '1200px' }}>
            <div 
              className="rounded-2xl shadow-xl "
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Mission Section (The "Cover") */}
              <motion.div 
                className="relative z-10 bg-[var(--foreground)] rounded-t-2xl p-8 md:p-10"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <div className="flex items-center gap-4">
                  <Icon icon="mdi:target-arrow" className="h-8 w-8 text-[var(--button-bg)]" />
                  <h3 className="text-2xl font-bold text-[var(--color-heading)]">{HEADING_MISSION}</h3>
                </div>
                <p className="text-lg leading-relaxed mt-4">{BODY_MISSION}</p>
              </motion.div>

              {/* Unfolding Vision Section */}
              <AnimatePresence>
                {isInView && (
                  <motion.div
                    style={{ transformOrigin: 'top' }}
                    className="bg-[var(--foreground)] rounded-b-2xl"
                    initial={{ rotateX: -90, opacity: 0 }}
                    animate={{ rotateX: 0, opacity: 1 }}
                    exit={{ rotateX: -90, opacity: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
                  >
                    <hr className="border-white/10 mx-8" />
                    <div className="p-8 md:p-10">
                      <div className="flex items-center gap-4 mb-4">
                        <Icon icon="mdi:eye-outline" className="h-8 w-8 text-[var(--button-bg)]" />
                        <h3 className="text-2xl font-bold text-[var(--color-heading)]">{HEADING_VISION}</h3>
                      </div>
                      <p className="text-lg leading-relaxed">{BODY_VISION}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}