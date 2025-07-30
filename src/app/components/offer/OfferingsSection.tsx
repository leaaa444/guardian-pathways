'use client';
import React from 'react';
import { Icon } from '@iconify/react';
import { offeringsData } from './offeringsData';
import Image from 'next/image';

export default function OfferingsSection() {
  return (
    <>
      {offeringsData.map((offering, index) => (
        <section key={offering.title} className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Column */}
            <div className={`transition-transform duration-500 transform ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
              <Image
                src={offering.image}
                alt={offering.imageAlt}
            width={640}           
            height={426}  
                className="rounded-xl shadow-2xl object-cover w-full h-full aspect-square lg:aspect-[4/3]"
              />
            </div>

            {/* Text Column */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-4">
                {offering.title}
              </h2>

              {offering.description.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-lg leading-relaxed mb-4 text-[var(--color-body)]">
                  {paragraph}
                </p>
              ))}

              {offering.bullets.length > 0 && (
                <ul className="space-y-3 my-4">
                  {offering.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start text-[var(--color-body)]">
                      <Icon
                        icon="mdi:check-circle-outline"
                        className="mr-3 h-6 w-6 flex-shrink-0 text-[var(--color-heading)]"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {offering.finalParagraph && (
                <p className="text-lg leading-relaxed mt-4 text-[var(--color-body)]">
                  {offering.finalParagraph}
                </p>
              )}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
