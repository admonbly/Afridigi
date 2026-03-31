'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white border-b border-neutral-200'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/syllabix-logo-with-name.png"
            alt="Syllabix Logo"
            className="h-20 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link
            href="/certification"
            className="text-neutral-700 hover:text-accent transition-colors font-medium"
          >
            Certification
          </Link>
          <Link
            href="/#actualites"
            className="text-neutral-700 hover:text-accent transition-colors font-medium"
          >
            Actualités
          </Link>
          <Link
            href="/partenariats"
            className="text-neutral-700 hover:text-accent transition-colors font-medium"
          >
            Partenariats
          </Link>
          <Link
            href="/contact"
            className="text-neutral-700 hover:text-accent transition-colors font-medium"
          >
            Contact
          </Link>
        </div>

        {/* CTA + Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link
            href="/auth/login"
            className="hidden sm:block px-6 py-2 bg-gradient-to-r from-accent to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
          >
            Connexion
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200">
          <div className="px-4 py-4 flex flex-col gap-4">
            <Link
              href="/certification"
              className="text-neutral-700 hover:text-accent transition-colors font-medium"
            >
              Certification
            </Link>
            <Link
              href="/#actualites"
              className="text-neutral-700 hover:text-accent transition-colors font-medium"
            >
              Actualités
            </Link>
            <Link
              href="/partenariats"
              className="text-neutral-700 hover:text-accent transition-colors font-medium"
            >
              Partenariats
            </Link>
            <Link
              href="/contact"
              className="text-neutral-700 hover:text-accent transition-colors font-medium"
            >
              Contact
            </Link>
            <Link
              href="/auth/login"
              className="block px-6 py-2 bg-gradient-to-r from-accent to-orange-500 text-white rounded-lg font-semibold text-center hover:shadow-lg transition-shadow"
            >
              Connexion
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
