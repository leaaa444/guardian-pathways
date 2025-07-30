'use client';

import React from 'react';
import { motion } from 'framer-motion';

import CallToAction from '../components/common/CallToAction';
import { containerVariants } from '@/lib/animationVariants';
import GenericHeroSection from '../components/common/GenericHeroSection';
import OurStory from '../components/about/OurStorySection';
import CoreValues from '../components/about/CoreValuesSection';
import EthosSection from '../components/about/EthosSection';

const HEADING = "Creating Safe Homes and Brighter Futures";
const BODY = "Located in Harrow, Guardian Pathway Care provides a safe and empowering home for young women aged 18 and over with learning disabilities. Our focus is on life skills, personal growth, and building independence in a nurturing, low-risk environment.";
const backgroundImage= 'images/about-hero.webp';
    
// --- The Main Page Component ---
export default function AboutUsPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--color-body)]">

      <motion.div initial="hidden" animate="visible" variants={containerVariants}>
        
        {/* 1. Hero Section */}
        <GenericHeroSection
          title={HEADING}
          subtitle={BODY}
          backgroundImage= {backgroundImage}
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-screen-xl mx-auto px-4"
        >
          {/* 2. Our Story Section */}
          <OurStory></OurStory>

        
        </motion.div>

        {/* Our Core Values Section */}
        <CoreValues></CoreValues>

        <EthosSection></EthosSection>

        {/* Call To Action Section */}
        <CallToAction></CallToAction>
        
      </motion.div>
    </div>
  );
}
