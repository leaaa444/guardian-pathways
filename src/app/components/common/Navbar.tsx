'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { links as importedLinks } from './links';

// ====== CONSTANTS ======
const BRAND_NAME = 'Guardian Pathways';

const LOGO = {
  src: '/images/logo.png',
  alt: `${BRAND_NAME} Logo`,
  width: 40,
  height: 40,
};

const NAV_LINKS = importedLinks;

const ICON_MENU = (
  <svg className="h-6 w-6" fill="none" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const ICON_CLOSE = (
  <svg className="h-6 w-6" fill="none" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

// ====== COMPONENT ======
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full px-4 z-100">
      {/* Outer “floating pill” */}
      <div className="max-w-screen-xl mx-auto my-6 px-6 py-3 rounded-full shadow-lg bg-[var(--navbar-bg)] text-[var(--navbar-text)]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={LOGO.src}
              alt={LOGO.alt}
              width={LOGO.width}
              height={LOGO.height}
              priority
            />
            <span className="ml-3 font-[var(--font-heading)] text-xl">
              {BRAND_NAME}
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {NAV_LINKS.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className="font-sans text-base hover:text-[var(--navbar-hover-text)]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden hover:text-[var(--navbar-hover-text)] focus:outline-none"
            onClick={() => setOpen(o => !o)}
          >
            {open ? ICON_CLOSE : ICON_MENU}
          </button>
        </div>
      </div>

      {/* Mobile Menu (only when open) */}
      {open && (
        <div className="md:hidden mx-auto mt-[-1rem] mb-4 w-11/12 max-w-screen-md bg-[var(--navbar-bg)] rounded-xl shadow-md px-6 py-3 z-40">
          {NAV_LINKS.map(link => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block font-sans ml-2 text-[var(--navbar-text)] hover:text-[var(--navbar-hover-text)] py-2"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
