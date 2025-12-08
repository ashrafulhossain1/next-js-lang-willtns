'use client';

import type React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Menu, X } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
  hasArrow?: boolean;
}

const navLinks: NavLink[] = [
  { label: 'Accueil', href: '/en/about' },
  { label: 'Solutions', href: '/', hasArrow: true },
  { label: 'Omnichannel', href: '/solutions' },
  { label: 'telephony', href: '/en/telephony' },
  { label: 'Tarification', href: '/pricing' },
  { label: 'À propos', href: '/' },
  { label: 'Sécurité', href: '/security' },
  { label: 'Investisseurs', href: '/invest' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 sm:h-20 bg-gradient-to-r from-[#30204D] to-[#533589] px-3 sm:px-4 md:px-6 lg:px-12">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Image
            src="/images/mainLogo.svg"
            alt="Left Logo"
            width={130}
            height={60}
            priority
            className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-white hover:text-orange-300 font-medium px-3 py-2 text-sm transition-all duration-200 flex items-center gap-2 relative group"
            >
              {link.label}

              {link.hasArrow && (
                <Image
                  src="/images/arrow.svg"
                  alt="Arrow"
                  height={10}
                  width={20}
                  className="w-2 h-auto transition-transform duration-200 group-hover:translate-x-[2px]"
                />
              )}

              <span className="absolute bottom-1 left-0 h-0.5 bg-orange-400 w-0 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Right Side (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language */}
          <div className="flex items-center cursor-pointer hover:text-orange-300 transition-colors text-white">
            <Image
              src="/images/Vector.svg"
              alt="Language"
              width={24}
              height={16}
              priority
            />
            <span className="text-sm font-medium px-2">EN</span>
            <Image
              src="/images/arrow.svg"
              alt="Arrow"
              className="w-2 transition-transform duration-200 hover:rotate-180"
              width={20}
              height={10}
            />
          </div>

          {/* CTA */}
          <button className="bg-orange-500 hover:bg-orange-600 rounded-full py-2.5 px-5 flex items-center gap-2.5 transition-all duration-300 hover:scale-105 active:scale-95">
            <span className="font-bold text-white text-sm">Essai gratuit</span>
            <div className="bg-white rounded-full flex items-center justify-center p-1">
              <ArrowRight size={16} className="text-orange-500" />
            </div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all flex-shrink-0"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed left-0 right-0 z-40 lg:hidden bg-gradient-to-b from-[#30204D] to-[#3d2663] shadow-lg overflow-hidden transition-all duration-300 ${
          isOpen
            ? 'top-16 sm:top-20 max-h-[600px] opacity-100'
            : 'top-16 sm:top-20 max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-orange-300 font-medium px-3 py-2.5 text-base transition-all duration-200 rounded-lg hover:bg-white/10"
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile CTA */}
          <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 rounded-full py-3 px-5 flex items-center justify-center gap-2.5 font-bold text-white transition-colors">
            <span>Essai gratuit</span>
            <div className="bg-white rounded-full flex items-center justify-center p-1">
              <ArrowRight size={16} className="text-orange-500" />
            </div>
          </button>

          {/* Mobile Language */}
          <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-white/10 cursor-pointer hover:text-orange-300 transition-colors text-white">
            <Image
              src="/images/Vector.svg"
              alt="Language"
              width={20}
              height={13}
              priority
            />
            <span className="text-sm font-medium">EN</span>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16 sm:h-20" />
    </>
  );
};

export default Navbar;
