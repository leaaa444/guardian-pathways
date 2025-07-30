// src/components/Footer.tsx
import Link from 'next/link';
import { links } from './links';

// ====== CONSTANTS ======
const BRAND_NAME = 'Guardian Pathways';
const TAGLINE = 'Empowering your future through expert legal & psychological guidance.';

const NAV_SECTION_TITLE = 'Navigate';

const EMAIL_SECTION_TITLE = 'Email';
const EMAIL_ADDRESSES = [
  { label: 'info@guardianpathways.com', href: 'mailto:info@guardianpathways.com' },
  { label: 'admin@guardianpathways.com', href: 'mailto:admin@guardianpathways.com' },
];

const PHONE_SECTION_TITLE = 'Phone';
const PHONE_NUMBERS = [
  { label: '07361 813357', href: 'tel:07361813357' },
  { label: '07934 150017', href: 'tel:07934150017' },
];

const COPYRIGHT_TEXT = `© ${new Date().getFullYear()} ${BRAND_NAME}. All rights reserved.`;

// ====== COMPONENT ======
export default function Footer() {
  return (
    <footer className="bg-[var(--footer-bg)] text-[var(--footer-text)] py-10 px-4 mt-16">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Section: Logo or Brand Name */}
        <div>
          <h3 className="text-xl font-bold font-[var(--font-heading)]">
            {BRAND_NAME}
          </h3>
          <p className="mt-2 text-sm font-sans">
            {TAGLINE}
          </p>
        </div>

        {/* Middle Section: Navigation Links */}
        <div className="flex flex-col space-y-2 font-sans">
          <span className="font-semibold mb-2">{NAV_SECTION_TITLE}</span>
          {links.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[var(--footer-hover-text)] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Section: Contact Info */}
        <div className="font-sans text-sm">
          
          {/* Email Section */}
          <div className="mb-4">
            <p className="font-semibold">{EMAIL_SECTION_TITLE}</p>
            {EMAIL_ADDRESSES.map(email => (
              <a
                key={email.href}
                href={email.href}
                className="block mt-1 hover:text-[var(--button-bg)] transition-colors"
              >
                {email.label}
              </a>
            ))}
          </div>

          {/* Phone Section */}
          <div>
            <p className="font-semibold">{PHONE_SECTION_TITLE}</p>
            {PHONE_NUMBERS.map(phone => (
              <a
                key={phone.href}
                href={phone.href}
                className="block mt-1 hover:text-[var(--button-bg)] transition-colors"
              >
                {phone.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-white font-sans">
        {COPYRIGHT_TEXT}
      </div>
    </footer>
  );
}
