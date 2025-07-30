'use client';

import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import CallToAction from '../components/common/CallToAction';
import { policies } from './policiesData';
import { motion, AnimatePresence } from 'framer-motion';


const POLICIES_HEADING = "Our Core Policies";
const POLICIES_BODY =
  "We are committed to creating a respectful, supportive, and empowering environment for every resident. Our policies ensure everyone feels safe, heard, and encouraged to grow.";

export default function PoliciesPage() {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section className="pt-30 px-4 max-w-4xl mx-auto">
        
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-center text-[var(--color-heading)] mb-10">
          {POLICIES_HEADING}
        </h1>
        <p className="text-lg text-[var(--color-body)]">
          {POLICIES_BODY}
        </p>
      </div>

      <div className="space-y-4 pb-10">
      {policies.map((policy, index) => (
        <div
          key={index}
          className={`rounded-lg shadow transition-all ${
            openIndices.includes(index)
              ? 'bg-[var(--foreground-hover)]'
              : 'bg-[var(--foreground)] hover:bg-[var(--foreground-hover)]'
          }`}
        >
          <button
            onClick={() => toggleIndex(index)}
            className="w-full text-left px-6 py-4 flex justify-between items-center text-[var(--color-heading)] font-semibold text-lg"
          >
            <div className="flex items-center gap-4">
              <Icon icon={policy.icon} className="h-6 w-6 flex-shrink-0" />
              {policy.title}
            </div>
            <Icon
              icon={openIndices.includes(index) ? 'mdi:chevron-up' : 'mdi:chevron-down'}
              className={`h-6 w-6 transition-transform duration-300 ${
                openIndices.includes(index) ? 'rotate-180' : ''
              }`}
            />
          </button>
          <AnimatePresence initial={false}>
            {openIndices.includes(index) && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="overflow-hidden px-6 pb-6 text-[var(--color-body)] text-base leading-relaxed"
              >
                <div>{policy.description}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
      </div>

      <CallToAction></CallToAction>
    </section>
  );
}
