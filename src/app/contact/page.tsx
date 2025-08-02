'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Icon } from '@iconify/react';
import AnimatedButton from '../components/button';

// ====== ANIMATION VARIANTS ======
const CONTAINER_VARS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const ITEM_VARS: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const FORM_CONTAINER_VARS: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const FORM_ITEM_VARS: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// New variants for the pop-up modal
const POPUP_BACKDROP_VARS: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const POPUP_MODAL_VARS: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 25 } },
};

// ====== TEXT & DATA CONSTANTS ======
const PAGE_TITLE = 'Get in Touch';
const PAGE_SUBTITLE =
  "We're here to help and answer any question you might have. We look forward to hearing from you.";

const CONTACT_INTRO_TITLE = 'Contact Information';
const CONTACT_INTRO_TEXT =
  'Feel free to reach out to us through any of the following methods. We will get back to you as soon as possible.';

const CONTACT_METHODS = [
  {
    type: 'Email',
    icon: 'mdi:email-outline',
    details: [
      { label: 'info@guardianpathways.co.uk', href: 'mailto:info@guardianpathways.co.uk' },
    ],
  },
  {
    type: 'Phone',
    icon: 'mdi:phone-outline',
    details: [
      { label: '07361 813357', href: 'tel:07361813357' },
      { label: '07934 150017', href: 'tel:07934150017' },
    ],
  },
];

const FORM_HEADING = 'Send Us a Message';

const FORM_FIELDS = [
  {
    id: 'name',
    name: 'name',
    type: 'text',
    label: 'Full Name',
    placeholder: 'John Doe',
  },
  {
    id: 'email',
    name: 'email',
    type: 'email',
    label: 'Email Address',
    placeholder: 'you@example.com',
  },
  {
    id: 'subject',
    name: 'subject',
    type: 'text',
    label: 'Subject',
    placeholder: 'Question about your services',
  },
  {
    id: 'message',
    name: 'message',
    type: 'textarea',
    label: 'Message',
    placeholder: 'Your message here...',
    rows: 5,
  },
];

const BUTTON_TEXT = 'Send Message';
const BUTTON_ICON = <Icon icon="mdi:send-outline" className="h-5 w-5" />;

// ====== COMPONENT ======
export default function ContactPage() {
  const [status, setStatus] = useState({ submitting: false, success: false, error: false, message: '' });
  const formRef = useRef(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false, message: '' });

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong.');
      }
      
      setStatus({ submitting: false, success: true, error: false, message: 'Thank you! Your message has been sent.' });
      if(formRef.current) {
        (formRef.current as HTMLFormElement).reset(); // Clear the form
      }

    } catch (error) {
      setStatus({ submitting: false, success: false, error: true, message: `Failed to send message. Please try again.` });
    }
  };

  // Function to close the pop-up
  const closePopup = () => {
    setStatus({ submitting: false, success: false, error: false, message: '' });
  }

  return (
    // We use a React Fragment to wrap the page and the pop-up
    <>
      {/* Pop-up Notification Modal */}
      <AnimatePresence>
        {(status.success || status.error) && (
          <motion.div
            variants={POPUP_BACKDROP_VARS}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closePopup}
          >
            <motion.div
              variants={POPUP_MODAL_VARS}
              className={`relative w-full max-w-sm p-6 rounded-2xl shadow-2xl bg-[var(--foreground)]`}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
              <div className="text-center">
                <div className={`mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-[var(--button-bg)]/20 mb-4`}>
                  {status.success ? (
                     <Icon icon="mdi:check-bold" className="h-6 w-6 text-[var(--button-bg)]" />
                  ) : (
                     <Icon icon="mdi:alert-outline" className="h-6 w-6 text-[var(--button-bg)]" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-heading)]">
                  {status.success ? 'Message Sent!' : 'An Error Occurred'}
                </h3>
                <p className="text-[var(--color-body)] mt-2 text-sm">{status.message}</p>
                <div className="mt-6 flex justify-center">
                    <AnimatedButton onClick={closePopup}>
                        Close
                    </AnimatedButton>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Your Original Page Content (Unchanged) */}
      <div className="bg-[var(--background)]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={CONTAINER_VARS}
          className="max-w-screen-xl mx-auto px-4 py-30"
        >
          <motion.header variants={ITEM_VARS} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-heading)] mb-4">
              {PAGE_TITLE}
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-body)] max-w-3xl mx-auto">
              {PAGE_SUBTITLE}
            </p>
          </motion.header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div variants={ITEM_VARS}>
              <h2 className="text-3xl font-bold text-[var(--color-heading)] my-8">
                {CONTACT_INTRO_TITLE}
              </h2>
              <p className="text-lg text-[var(--color-body)] mb-8">
                {CONTACT_INTRO_TEXT}
              </p>
              <div className="space-y-8">
                {CONTACT_METHODS.map((method) => (
                  <div key={method.type} className="flex items-start">
                    <div className="flex-shrink-0 mr-5 mt-1">
                      <div className="bg-[var(--color-heading)]/10 p-3 rounded-full">
                        <Icon icon={method.icon} className="h-6 w-6 text-[var(--color-heading)]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--color-heading)]">
                        {method.type}
                      </h3>
                      <div className="mt-1 space-y-1">
                        {method.details.map((d) => (
                          <a
                            key={d.href}
                            href={d.href}
                            className="block text-lg text-[var(--color-body)] hover:text-cyan-400 transition-colors duration-300"
                          >
                            {d.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={ITEM_VARS}
              className="bg-[var(--foreground)] p-8 rounded-xl shadow-lg border border-white/10"
            >
              <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-6">
                {FORM_HEADING}
              </h2>
              <motion.form
                ref={formRef}
                onSubmit={handleSubmit}
                variants={FORM_CONTAINER_VARS}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                {FORM_FIELDS.map((field) =>
                  field.type === 'textarea' ? (
                    <motion.div key={field.id} variants={FORM_ITEM_VARS}>
                      <label htmlFor={field.id} className="block text-sm font-medium text-[var(--color-body)] mb-2">
                        {field.label}
                      </label>
                      <textarea
                        id={field.id}
                        name={field.name}
                        required
                        rows={field.rows}
                        placeholder={field.placeholder}
                        className="w-full bg-white border border-white/20 rounded-md py-3 px-4 text-[var(--color-body)] focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
                      />
                    </motion.div>
                  ) : (
                    <motion.div key={field.id} variants={FORM_ITEM_VARS}>
                      <label htmlFor={field.id} className="block text-sm font-medium text-[var(--color-body)] mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        name={field.name}
                        required
                        placeholder={field.placeholder}
                        className="w-full bg-white border border-white/20 rounded-md py-3 px-4 text-[var(--color-body)] focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
                      />
                    </motion.div>
                  )
                )}
                <motion.div variants={FORM_ITEM_VARS}>
                  <AnimatedButton type="submit" icon={BUTTON_ICON} className="rounded-md" disabled={status.submitting}>
                     {status.submitting ? 'Sending...' : BUTTON_TEXT}
                  </AnimatedButton>
                </motion.div>
              </motion.form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
