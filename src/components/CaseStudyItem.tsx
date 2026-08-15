import React from 'react';
import { ProjectCaseStudy } from '../types.ts';
import { ArrowUpRight, Layers, CheckCircle2 } from 'lucide-react';

interface CaseStudyItemProps {
  project: ProjectCaseStudy;
  index: number;
}

export const CaseStudyItem: React.FC<CaseStudyItemProps> = ({ project, index }) => {
  const isDark = project.darkSection;

  return (
    <article
      id={`project-${project.id}`}
      data-dark={isDark ? 'true' : 'false'}
      className={`relative min-h-screen w-full flex flex-col justify-center py-20 sm:py-28 lg:py-36 transition-colors duration-700 ${
        isDark
          ? 'bg-[#141311] text-[#FAF7F2]'
          : 'bg-transparent text-[#1C1A17]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 w-full z-10">
        {/* Top Header: Meta & Number */}
        <div className={`flex flex-wrap items-center justify-between gap-3 sm:gap-4 border-b pb-4 sm:pb-6 mb-8 sm:mb-14 ${
          isDark ? 'border-[#FAF7F2]/15' : 'border-[#1C1A17]/15'
        }`}>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono-tag">
            <span className="uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-[#B5502F]">
              Case Study {project.number} / 03
            </span>
            <span className="opacity-30">•</span>
            <span
              className={`tracking-wider uppercase ${
                isDark ? 'text-[#A8A093]' : 'text-[#7A7266]'
              }`}
            >
              {project.clientOrOrg}
            </span>
            <span className="opacity-30 hidden sm:inline">•</span>
            <span
              className={`tracking-wider uppercase hidden sm:inline ${
                isDark ? 'text-[#A8A093]' : 'text-[#7A7266]'
              }`}
            >
              {project.year}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="font-mono-tag text-[10px] uppercase tracking-[0.2em] font-semibold text-[#B5502F]">
              ROLE
            </span>
            <span className="opacity-30 font-mono-tag text-xs">—</span>
            <span
              className={`font-mono-tag text-[11px] sm:text-xs tracking-wider uppercase font-medium ${
                isDark ? 'text-[#FAF7F2]' : 'text-[#1C1A17]'
              }`}
            >
              {project.role}
            </span>
          </div>
        </div>

        {/* Main Content Grid: Editorial Magazine Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: Title, Prose, & Architectural Deep Dive */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div>
              <div className="flex items-center space-x-2.5 mb-2.5 sm:mb-3.5">
                <span className="text-[10px] sm:text-[11px] font-mono-tag uppercase tracking-[0.2em] text-[#B5502F] font-semibold">
                  ROLE — {project.role}
                </span>
                <span className="w-6 h-[1px] bg-[#B5502F]/40" />
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] mb-3 sm:mb-4">
                {project.title}
              </h2>
              <p
                className={`font-display text-xl sm:text-2xl md:text-3xl italic tracking-wide ${
                  isDark ? 'text-[#D67A5A]' : 'text-[#B5502F]'
                }`}
              >
                {project.subtitle}
              </p>
            </div>

            <div className="space-y-5 sm:space-y-6 text-sm sm:text-base lg:text-lg leading-relaxed font-light">
              <p className={isDark ? 'text-[#D9D3C7]' : 'text-[#3E3932]'}>
                {project.summary}
              </p>
              <div className={`p-4 sm:p-6 rounded-xl border text-xs sm:text-sm lg:text-base leading-relaxed ${
                isDark
                  ? 'bg-[#1C1A17]/60 border-[#2D2924] text-[#B8B1A5]'
                  : 'bg-[#FAF7F2]/80 border-[#E5DDD0] text-[#5C564E]'
              }`}>
                <span className="text-[10px] sm:text-[11px] font-mono-tag uppercase tracking-widest text-[#B5502F] block mb-2 font-medium">
                  Architectural Implementation
                </span>
                {project.architectureDetails}
              </div>
            </div>

            {/* Tag Pills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 text-[11px] sm:text-xs font-mono-tag tracking-wider rounded-full border ${
                    isDark
                      ? 'border-[#332F2A] bg-[#1E1B18] text-[#C9C2B5]'
                      : 'border-[#E0D8CC] bg-[#FAF7F2] text-[#595247]'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Live Case Study Understated Arrow Link */}
            {project.liveUrl && (
              <div className="pt-2 sm:pt-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-magnetic="true"
                  className={`inline-flex items-center space-x-3 text-xs font-mono-tag uppercase tracking-wider py-2 min-h-[44px] transition-colors duration-300 group focus:outline-none ${
                    isDark
                      ? 'text-[#FAF7F2] hover:text-[#D67A5A]'
                      : 'text-[#1C1A17] hover:text-[#B5502F]'
                  }`}
                >
                  <span className="hover-editorial-line">
                    Visit {project.liveUrlLabel || project.title}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full border flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                      isDark
                        ? 'border-[#443E38] group-hover:border-[#D67A5A]'
                        : 'border-[#D0C7B9] group-hover:border-[#B5502F]'
                    }`}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </a>
              </div>
            )}
          </div>

          {/* Right Column: Architectural Specifications & Metrics */}
          <div className="lg:col-span-5 flex flex-col space-y-6 w-full pt-4 lg:pt-0">
            <div
              className={`p-6 sm:p-8 lg:p-10 rounded-xl border backdrop-blur-sm relative overflow-hidden ${
                isDark
                  ? 'bg-[#1C1A17]/90 border-[#2D2924]'
                  : 'bg-[#FAF7F2]/90 border-[#E5DDD0]'
              }`}
            >
              {/* Subtle background numeral */}
              <span className={`absolute right-4 bottom-2 font-serif text-7xl sm:text-8xl font-light select-none pointer-events-none ${
                isDark ? 'text-[#FAF7F2]/5' : 'text-[#1C1A17]/5'
              }`}>
                {project.number}
              </span>

              <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-current/10 mb-6 sm:mb-8 relative z-10">
                <div className="flex items-center space-x-2.5">
                  <Layers className="w-4 h-4 text-[#B5502F]" />
                  <span className="font-mono-tag text-[11px] sm:text-xs uppercase tracking-widest font-medium opacity-80">
                    Architectural Specifications
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B5502F]">
                  Validated
                </span>
              </div>

              <div className="space-y-6 sm:space-y-7 relative z-10">
                {project.keySpecs.map((spec, i) => (
                  <div key={i} className="flex flex-col space-y-1 sm:space-y-1.5 pb-5 sm:pb-6 border-b border-current/10 last:border-0 last:pb-0">
                    <span
                      className={`text-[10px] font-mono-tag uppercase tracking-widest ${
                        isDark ? 'text-[#8E867A]' : 'text-[#857D71]'
                      }`}
                    >
                      {spec.label}
                    </span>
                    <span
                      className={`font-editorial text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight ${
                        isDark ? 'text-[#FAF7F2]' : 'text-[#1C1A17]'
                      }`}
                    >
                      {spec.value}
                    </span>
                    <span
                      className={`text-xs leading-relaxed ${
                        isDark ? 'text-[#A8A093]' : 'text-[#696154]'
                      }`}
                    >
                      {spec.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
