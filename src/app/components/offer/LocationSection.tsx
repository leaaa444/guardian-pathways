'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Icon } from '@iconify/react';
import Image from 'next/image';

// Animation variants for a consistent feel
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const TITLE = 'Our Property – A Place to Call Home';
const DESCRIPTION = `
Guardian Pathway Care is located at 68 Northumberland Road, Harrow, HA2 7RE. Our centre features six en‑suite bedrooms, shared lounges, a communal kitchen for independent living, staff offices, and a spacious garden. We're within walking distance of local amenities and committed to creating a warm, inclusive, and development‑focused environment for young women with learning disabilities.
`.trim();

// List of features for the bullet points
const features = [
  { text: 'Six En-Suite Bedrooms', icon: 'mdi:bed-double-outline' },
  { text: 'Shared Lounges & Kitchen', icon: 'mdi:silverware-fork-knife' },
  { text: 'Office & Meeting Spaces', icon: 'mdi:account-tie-outline' },
  { text: 'Spacious Back Garden', icon: 'mdi:flower-outline' },
  { text: 'Onsite Staff Parking', icon: 'mdi:car-outline' },
  { text: 'Walking Distance to Shops', icon: 'mdi:store-outline' }
];

// Placeholder images for the carousel
const propertyImages = [
  "/images/property1.webp",
  "/images/property2.webp",
  "/images/property3.webp",
  "/images/property4.webp",
];

export default function LocationSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === propertyImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? propertyImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.section
      className=""
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Heading */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)]">
             {TITLE}
          </h2>
        </motion.div>

        {/* Text Content and Features (Horizontal) */}
        <div className=" gap-12 lg:gap-16 items-start lg:items-center mb-16 px-18 text-center">
          {/* Text Content */}
          <motion.div variants={itemVariants} className="flex-1">
            <p className="text-lg leading-relaxed">
              {DESCRIPTION}
            </p>
          </motion.div>

          {/* Features List */}
          <motion.div variants={itemVariants} className="flex-1 w-full pt-5 px-4 sm:px-40">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-x-8 gap-y-4">
              {features.map((feature) => (
                <div key={feature.text} className="flex items-center gap-3">
                  <Icon
                    icon={feature.icon}
                    className="h-6 w-6 text-[var(--button-bg)] flex-shrink-0"
                  />
                  <span className="text-base font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Carousel of Images */}
        <motion.div variants={itemVariants} className="relative w-full overflow-hidden rounded-xl shadow-2xl">
          <Image
            src={propertyImages[currentImageIndex]}
            width={640}           
            height={426}  
            alt={`Property view ${currentImageIndex + 1}`}
            className="w-full h-[400px] md:h-[500px] object-cover rounded-xl"
          />
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
                onClick={prevImage}
                className="text-white/60 hover:text-white transition-transform hover:scale-125 p-2"
                aria-label="Previous image"
            >
                <Icon icon="mdi:chevron-left" className="h-16 w-16" />
            </button>

            <button
                onClick={nextImage}
                className="text-white/60 hover:text-white transition-transform hover:scale-125 p-2"
                aria-label="Next image"
            >
                <Icon icon="mdi:chevron-right" className="h-16 w-16" />
            </button>
          </div>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {propertyImages.map((_, index) => (
                <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors
                    ${
                    index === currentImageIndex
                        ? 'bg-white'
                        : 'bg-white/40 hover:bg-white'
                    }`}
                aria-label={`Go to image ${index + 1}`}
                ></button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}