"use client";
import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export default function GenericHeroSection({
  title,
  subtitle,
  backgroundImage,
}: HeroProps) {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center text-center overflow-hidden">
      {/* Blurred Background Image */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center filter blur-sm scale-105"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        {/* Optional gradient overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--background)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4">
        <div className="mx-auto max-w-5xl">
          <motion.h1
            style={{
    fontWeight: 800,
    textShadow: "0px 5px 5px rgba(0, 0, 0, 0.2)", // Custom shadow
  }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl text-[var(--color-hero-heading)] drop-shadow-lg"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 text-lg text-[var(--color-body)] drop-shadow-lg"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
