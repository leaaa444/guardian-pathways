'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import { policies } from '@/app/policies/policiesData'; // adjust the path as needed
import AnimatedButton from '../button'; // Using your reusable button

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';

const HEADING = "Core Policies at a Glance";
const BUTTON_TEXT = "Learn More About Our Policies";

export default function PoliciesCarousel() {
  return (
    <section className="py-20 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading)] mb-12">
          {HEADING}
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 z-10 w-16 md:w-24 bg-gradient-to-r from-[var(--background)] to-transparent pointer-events-none" />
        
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          freeMode={true}
          speed={6000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 7,
            },
          }}
          className="!px-4 !py-8"
        >
          {policies.map((policy, index) => (
            <SwiperSlide key={index} >
              <div
                className="
                  flex flex-col items-center justify-center text-center
                  w-44 h-44 p-4
                  bg-white/5 backdrop-blur-md
                  rounded-3xl shadow-lg
                  border border-white/10
                  transition-all duration-300
                  hover:border-[var(--color-heading)]/50 hover:-translate-y-2
                "
              >                
                <div className="mb-3 rounded-full p-3 bg-gradient-radial from-[var(--color-heading)]/20 to-transparent">
                  <Icon icon={policy.icon} className="text-[var(--color-heading)] w-8 h-8" />
                </div>
                <h3 className="text-md font-bold text-[var(--color-heading)] text-center">{policy.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute right-0 top-0 bottom-0 z-10 w-16 md:w-24 bg-gradient-to-l from-[var(--background)] to-transparent pointer-events-none" />
      </div>

      <div className="mt-8">
        <AnimatedButton href="/policies">
          {BUTTON_TEXT}
        </AnimatedButton>
      </div>
    </section>
  );
}
