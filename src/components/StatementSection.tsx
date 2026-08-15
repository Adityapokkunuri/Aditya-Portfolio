import React from 'react';
import { THESIS_DATA } from '../data/portfolioData.ts';

export const StatementSection: React.FC = () => {
  return (
    <section
      id="statement"
      className="relative min-h-screen w-full flex flex-col justify-center py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto z-10"
    >
      {/* Chapter Marker */}
      <div className="flex items-center space-x-3 mb-8 sm:mb-12">
        <span className="font-mono-tag text-xs uppercase tracking-[0.2em] text-[#B5502F]">
          02 / Architectural Philosophy
        </span>
        <div className="h-px w-12 bg-[#D5CCC0]" />
      </div>

      {/* Main Editorial Pull Quote */}
      <div className="max-w-4xl mb-12 sm:mb-16 lg:mb-20">
        <blockquote className="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.12] tracking-tight text-[#1C1A17] text-balance">
          “I don’t just prompt LLMs; I build systems that <span className="font-display italic text-[#B5502F]">decide how to think</span>.”
        </blockquote>
      </div>

      {/* Editorial Content Breakdown: 2-column spread */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 border-t border-[#DED7CB] pt-8 sm:pt-12">
        {/* Left Column: Thesis Statement */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-6">
          <p className="text-base sm:text-lg text-[#3E3932] leading-relaxed font-normal">
            {THESIS_DATA.paragraphs[0]}
          </p>
          <p className="text-sm sm:text-base text-[#6B6357] leading-relaxed">
            {THESIS_DATA.paragraphs[1]}
          </p>
        </div>

        {/* Right Column: 3 Foundational Pillars */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-4 sm:pt-0">
          {THESIS_DATA.principles.map((principle) => (
            <div key={principle.num} className="flex flex-col space-y-2 sm:space-y-3 p-4 sm:p-0 rounded-xl sm:rounded-none bg-[#FAF7F2]/60 sm:bg-transparent border sm:border-0 border-[#E5DDD0]">
              <span className="font-mono-tag text-[11px] sm:text-xs text-[#B5502F] tracking-widest font-medium">
                Pillar {principle.num}
              </span>
              <h3 className="font-editorial text-lg sm:text-xl text-[#1C1A17] font-medium leading-snug">
                {principle.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#665F54] leading-relaxed">
                {principle.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
