import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const getAnchorHref = (anchor: string) => {
    return isHome ? `#${anchor}` : `/#${anchor}`;
  };

  const navLinks = [
    { label: 'Selected work', href: getAnchorHref('selected-work'), external: false },
    { label: 'Approach', href: getAnchorHref('approach'), external: false },
    { label: 'About', href: getAnchorHref('about'), external: false },
    { label: 'Résumé', href: PROFILE.resumePath, external: true }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF7]/95 backdrop-blur-md border-b border-[#DADFD9] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single element, whitespace-nowrap) */}
        <Link
          to="/"
          onClick={handleLinkClick}
          className="group flex items-center gap-1.5 text-[15px] font-bold tracking-tight text-[#172630] whitespace-nowrap shrink-0 hover:text-[#14685D] transition-colors"
        >
          <span className="text-[#14685D] font-extrabold text-[17px]">AP.</span>
          <span className="text-[#A2ADA4] font-normal mx-0.5">|</span>
          <span className="font-semibold text-[#172630] group-hover:text-[#14685D] transition-colors">
            Aditya Pokkunuri
          </span>
        </Link>

        {/* Zone 2: Navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-[13.5px] font-medium text-[#52616B]">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#172630] transition-colors flex items-center gap-0.5 whitespace-nowrap shrink-0"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#72828C]" />
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#172630] transition-colors whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Zone 3: Primary Action & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`mailto:${PROFILE.email}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#14685D] hover:bg-[#0F534A] rounded-md transition-colors shadow-2xs whitespace-nowrap shrink-0"
          >
            <span>Let’s talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-[#52616B] hover:text-[#172630] hover:bg-[#EFEFEA] transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAFAF7] border-b border-[#DADFD9] px-4 pt-3 pb-5 space-y-3">
          <nav className="flex flex-col space-y-2 text-[14px] font-medium text-[#52616B]">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={handleLinkClick}
                  className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-[#EFEFEA] hover:text-[#172630]"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#72828C]" />
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block py-2 px-3 rounded-md hover:bg-[#EFEFEA] hover:text-[#172630]"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
          <div className="pt-2 border-t border-[#E5E9E4]">
            <a
              href={`mailto:${PROFILE.email}`}
              onClick={handleLinkClick}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#14685D] hover:bg-[#0F534A] rounded-md transition-colors"
            >
              <span>Let’s talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
