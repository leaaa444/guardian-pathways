import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from 'next/font/google';
import "./globals.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-heading',
});

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Guardian Pathways',
  description: 'Supportive housing for young adults',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body 
        className={`${nunito.variable} ${nunitoSans.variable} font-sans antialiased`}
      >
        <Navbar></Navbar>
          {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
