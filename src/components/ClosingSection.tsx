import React from 'react';
import { CONTACT_INFO } from '../data/portfolioData.ts';
import { ArrowUpRight, Mail, Github, Linkedin, Award, ArrowUp } from 'lucide-react';

interface ClosingSectionProps {
  onScrollToTop: () => void;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({ onScrollToTop }) => {
  return (
    <footer
      id="contact"
      className="relative min-h-screen w-full flex flex-col justify-between py-20 sm:py-28 lg:py-32 px-4 sm:px-8 lg:px-16 bg-[#141311] text-[#FAF7F2] z-10 transition-colors duration-700"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-between h-full space-y-16 sm:space-y-20">
        {/* Top: Chapter Marker */}
        <div className="flex items-center justify-between border-b border-[#2C2824] pb-4 sm:pb-6">
          <div className="flex items-center space-x-3">
            <span className="font-mono-tag text-xs uppercase tracking-[0.2em] text-[#D67A5A]">
              06 / Contact & Advisory Engagements
            </span>
          </div>

          <button
            onClick={onScrollToTop}
            data-magnetic="true"
            className="group flex items-center space-x-2 text-xs font-mono-tag text-[#A8A093] hover:text-[#FAF7F2] min-h-[44px] transition-colors duration-300 focus:outline-none"
            aria-label="Return to top of portfolio"
          >
            <span className="uppercase tracking-wider">Back to Top</span>
            <div className="w-7 h-7 rounded-full border border-[#3A352F] flex items-center justify-center group-hover:border-[#D67A5A] transition-colors">
              <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>

        {/* Center: Large Confident Editorial Statement */}
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] text-balance">
            Let’s build systems that <span className="font-display italic text-[#D67A5A]">think with precision</span>.
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-[#A8A093] font-light leading-relaxed max-w-2xl">
            Available for select advisory consultations, executive architecture reviews, and high-impact enterprise agentic implementations.
          </p>

          {/* Primary Email CTA */}
          <div className="pt-2 sm:pt-4">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              data-magnetic="true"
              className="inline-flex items-center space-x-2.5 sm:space-x-3 text-base sm:text-xl md:text-2xl font-editorial font-normal text-[#FAF7F2] hover:text-[#D67A5A] min-h-[44px] transition-colors duration-300 group focus:outline-none break-all sm:break-normal"
            >
              <span className="hover-editorial-line">{CONTACT_INFO.email}</span>
              <ArrowUpRight className="w-4 sm:w-5 h-4 sm:h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#D67A5A]" />
            </a>
          </div>
        </div>

        {/* Bottom Editorial Grid: Direct Links & Colophon */}
        <div className="border-t border-[#2C2824] pt-8 sm:pt-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-end">
          {/* Left Column: Direct Profile Links */}
          <div className="md:col-span-8 flex flex-wrap gap-4 sm:gap-8 font-mono-tag text-xs uppercase tracking-wider text-[#A8A093]">
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic="true"
              className="hover:text-[#FAF7F2] transition-colors flex items-center space-x-1.5 py-1 min-h-[40px] group"
            >
              <span className="hover-editorial-line">LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100" />
            </a>
            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic="true"
              className="hover:text-[#FAF7F2] transition-colors flex items-center space-x-1.5 py-1 min-h-[40px] group"
            >
              <span className="hover-editorial-line">GitHub</span>
              <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100" />
            </a>
            <a
              href={CONTACT_INFO.credlyArchitect}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic="true"
              className="hover:text-[#FAF7F2] transition-colors flex items-center space-x-1.5 py-1 min-h-[40px] group"
            >
              <span className="hover-editorial-line">Credly (Claude Architect)</span>
              <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100" />
            </a>
            <a
              href={CONTACT_INFO.credlyCodePartner}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic="true"
              className="hover:text-[#FAF7F2] transition-colors flex items-center space-x-1.5 py-1 min-h-[40px] group"
            >
              <span className="hover-editorial-line">Credly (Code Partner)</span>
              <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100" />
            </a>
          </div>

          {/* Right Column: Quiet Colophon */}
          <div className="md:col-span-4 md:text-right font-mono-tag text-[10px] sm:text-[11px] text-[#7A7266] space-y-1">
            <div>Aditya Pokkunuri © {new Date().getFullYear()}</div>
            <div>Editorial Systems Architecture Portfolio</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
