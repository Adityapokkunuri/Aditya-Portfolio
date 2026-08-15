import React, { useState, useEffect } from 'react';
import { NAVIGATION_TARGETS, CREDENTIALS_DATA } from '../data/portfolioData.ts';
import { ArrowUpRight, Menu, X, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  isDarkSection: boolean;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, isDarkSection, onNavigate }) => {
  const [timeString, setTimeString] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setTimeString(`${formatter.format(now)} PST`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleMobileNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? isDarkSection
              ? 'bg-[#141311]/95 backdrop-blur-md border-b border-[#2C2824] shadow-sm py-4 sm:py-5'
              : 'bg-[#F2EDE4]/95 backdrop-blur-md border-b border-[#1C1A17]/10 shadow-sm py-4 sm:py-5'
            : 'bg-transparent py-5 sm:py-7 lg:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex justify-between items-center">
          {/* Left: Identity */}
          <button
            onClick={() => onNavigate('hero')}
            className="group flex flex-col text-left focus:outline-none min-h-[44px] justify-center"
            data-magnetic="true"
            aria-label="Aditya Pokkunuri Portfolio Home"
          >
            <span
              className={`text-[9px] sm:text-[10px] font-mono tracking-widest uppercase transition-colors duration-500 ${
                isDarkSection ? 'text-[#8E867A]' : 'opacity-50 text-[#1C1A17]'
              }`}
            >
              Portfolio / Sept 2025 – Present
            </span>
            <span
              className={`font-serif italic text-base sm:text-xl font-normal tracking-tight transition-colors duration-500 ${
                isDarkSection ? 'text-[#FAF7F2]' : 'text-[#1C1A17]'
              }`}
            >
              Aditya Pokkunuri
            </span>
          </button>

          {/* Center: Quiet Editorial Section Links (Desktop >= 1024px) */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-[11px] font-medium tracking-widest uppercase font-mono-tag" aria-label="Main Navigation">
            {NAVIGATION_TARGETS.map((target) => {
              const isActive = activeSection === target.id;
              return (
                <button
                  key={target.id}
                  onClick={() => onNavigate(target.id)}
                  data-magnetic="true"
                  className={`transition-colors duration-300 focus:outline-none min-h-[44px] flex items-center ${
                    isActive
                      ? 'text-[#B5502F] font-semibold'
                      : isDarkSection
                      ? 'text-[#8E867A] hover:text-[#FAF7F2]'
                      : 'text-[#1C1A17]/70 hover:text-[#B5502F]'
                  }`}
                >
                  <span className="hover-editorial-line">{target.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right: Local Time, Connect CTA & Hamburger Toggle */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            <div
              className={`hidden xl:flex items-center space-x-2 font-mono text-[10px] uppercase tracking-widest transition-colors duration-500 ${
                isDarkSection ? 'text-[#8E867A]' : 'opacity-50 text-[#1C1A17]'
              }`}
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#6B7A4F] animate-pulse" />
              <span>SF {timeString}</span>
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact');
              }}
              data-magnetic="true"
              className={`inline-flex items-center space-x-1.5 px-3.5 sm:px-4 py-2 min-h-[40px] sm:min-h-[44px] text-[10px] sm:text-[11px] font-mono uppercase tracking-widest rounded-full transition-all duration-300 ${
                isDarkSection
                  ? 'bg-[#FAF7F2] text-[#141311] hover:bg-[#FAF7F2]/90 hover:scale-[1.02]'
                  : 'bg-[#1C1A17] text-[#FAF7F2] hover:bg-[#B5502F] hover:scale-[1.02]'
              }`}
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            {/* Mobile/Tablet Menu Trigger (< 1024px) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden w-10 h-10 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center transition-colors duration-300 focus:outline-none ${
                isDarkSection
                  ? 'border-[#332F2A] bg-[#1E1B18] text-[#FAF7F2] hover:border-[#B5502F]'
                  : 'border-[#E0D8CC] bg-[#FAF7F2] text-[#1C1A17] hover:border-[#B5502F]'
              }`}
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Full-Screen Editorial Menu Overlay */}
      <div
        id="mobile-navigation-menu"
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 flex flex-col justify-between p-6 sm:p-10 pt-28 sm:pt-32 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        } ${
          isDarkSection
            ? 'bg-[#141311] text-[#FAF7F2]'
            : 'bg-[#F2EDE4] text-[#1C1A17]'
        }`}
      >
        {/* Navigation Item List */}
        <div className="space-y-4 sm:space-y-6 max-w-lg">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#B5502F] font-semibold block">
            Navigation Index
          </span>
          <nav className="flex flex-col space-y-2 sm:space-y-3" aria-label="Mobile Navigation">
            {NAVIGATION_TARGETS.map((target, i) => {
              const isActive = activeSection === target.id;
              const idxNum = (i + 1).toString().padStart(2, '0');
              return (
                <button
                  key={target.id}
                  onClick={() => handleMobileNavClick(target.id)}
                  className={`flex items-baseline space-x-4 py-2 sm:py-2.5 text-left border-b border-current/10 transition-colors duration-300 min-h-[48px] ${
                    isActive ? 'text-[#B5502F]' : 'hover:text-[#B5502F]'
                  }`}
                >
                  <span className="font-mono text-xs opacity-40">{idxNum}</span>
                  <span className="font-editorial text-2xl sm:text-3xl font-light tracking-tight">
                    {target.label}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Credential & Colophon info in Drawer */}
        <div className="pt-6 border-t border-current/10 space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="https://www.credly.com/badges/404f4376-8981-4eb3-bdab-a7ba941db24e/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-[#FAF7F2] text-[#B5502F] border border-[#B5502F]/30"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Claude Architect</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="https://www.credly.com/badges/e8f72cdc-5c58-435a-9dfd-4a470e52c1e4/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-[#FAF7F2] text-[#B5502F] border border-[#B5502F]/30"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Claude Code Partner</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono opacity-60 pt-2">
            <span>San Francisco, CA</span>
            <span>{timeString}</span>
          </div>
        </div>
      </div>
    </>
  );
};

