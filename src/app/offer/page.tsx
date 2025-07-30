'use client';
import React from 'react';
import CallToAction from '../components/common/CallToAction';
import OfferingsSection from '../components/offer/OfferingsSection';
import LocationSection from '../components/offer/LocationSection';

const HEADING = "Our Holistic Support System";
const BODY =
  "At Guardian Pathways, we offer a comprehensive suite of services designed to build confidence, foster independence, and empower young women to create a stable and successful future. Explore how we support every step of the journey.";


export default function WhatWeOfferPage() {
  return (
    <div className=" text-[var(--color-body)]">

        <header className="py-30 text-center">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-heading)] mb-4">
                    {HEADING}
                </h1>
                <p className="text-lg md:text-xl text-[var(--color-body)] leading-relaxed">
                    {BODY}
                </p>
            </div>
        </header>

        {/* 2. Alternating Feature Sections */}
        <main className="space-y-24 md:space-y-32 mb-24 md:mb-32">
            <OfferingsSection></OfferingsSection>
            <LocationSection></LocationSection>
            <CallToAction></CallToAction>
        </main>

        

    </div>
  );
}

