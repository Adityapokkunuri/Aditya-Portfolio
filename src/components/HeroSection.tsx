import React from 'react';
import { ArrowDown, ArrowUpRight, Award, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onScrollNext: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollNext }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto z-10 pt-28 sm:pt-36 lg:pt-32 pb-16 sm:pb-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
        {/* Left Column: Authoritative Editorial Serif Title & Narrative */}
        <div className="lg:col-span-7 z-20 space-y-6 sm:space-y-8">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#B5502F] font-semibold">
              Aditya Pokkunuri / Sept 2025 – Present
            </span>
            <div className="w-6 sm:w-8 h-[1px] bg-[#1C1A17]/20 hidden sm:block" />
            <a
              href="https://www.credly.com/badges/404f4376-8981-4eb3-bdab-a7ba941db24e/public_url"
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic="true"
              className="inline-flex items-center space-x-1.5 px-3 py-1 min-h-[32px] rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#FAF7F2] text-[#B5502F] border border-[#B5502F]/30 hover:border-[#B5502F] transition-all group"
            >
              <ShieldCheck className="w-3 h-3 text-[#B5502F]" />
              <span>Claude Certified Architect</span>
              <ArrowUpRight className="w-2.5 h-2.5 opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://www.credly.com/badges/e8f72cdc-5c58-435a-9dfd-4a470e52c1e4/public_url"
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic="true"
              className="inline-flex items-center space-x-1.5 px-3 py-1 min-h-[32px] rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#FAF7F2] text-[#B5502F] border border-[#B5502F]/30 hover:border-[#B5502F] transition-all group"
            >
              <Award className="w-3 h-3 text-[#B5502F]" />
              <span>Claude Code Partner</span>
              <ArrowUpRight className="w-2.5 h-2.5 opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[112px] leading-[0.92] sm:leading-[0.88] font-serif italic tracking-tighter text-[#1C1A17] select-none break-normal">
            Agentic <br />
            <span className="pl-3 sm:pl-8 lg:pl-14 text-[#1C1A17] inline-block">Architect.</span>
          </h1>

          <div className="pl-0 sm:pl-8 lg:pl-14 space-y-3 sm:space-y-4 max-w-xl">
            <p className="text-base sm:text-xl leading-relaxed text-[#1C1A17] font-normal">
              I don&apos;t just prompt LLMs; I build systems that <span className="italic font-serif text-[#B5502F]">decide how to think</span>.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#5C564E] font-light">
              Lead AI Systems Architect designing production-grade cognitive infrastructure, multi-agent orchestration graphs, and deterministic evaluation boundaries for autonomous systems.
            </p>
          </div>

          {/* Editorial Scroll Action with Animated Rule */}
          <div
            onClick={onScrollNext}
            data-magnetic="true"
            className="pt-2 sm:pt-4 pl-0 sm:pl-8 lg:pl-14 flex items-center gap-3 sm:gap-4 group cursor-pointer w-fit select-none min-h-[44px]"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onScrollNext()}
            aria-label="Scroll to explore portfolio"
          >
            <div className="w-8 sm:w-12 h-[1px] bg-[#1C1A17] group-hover:bg-[#B5502F] group-hover:w-16 transition-all duration-500" />
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.18em] text-[#1C1A17] group-hover:text-[#B5502F] transition-colors">
              Explore Selected Work
            </span>
            <ArrowDown className="w-3.5 h-3.5 text-[#1C1A17] group-hover:text-[#B5502F] transition-transform duration-300 group-hover:translate-y-0.5" />
          </div>
        </div>

        {/* Right Column: Quiet, Confident Typographic Ledger & Chapter Marker */}
        <div className="lg:col-span-5 relative flex flex-col justify-between h-full space-y-6 sm:space-y-8 lg:pl-6 pt-8 lg:pt-0 border-t lg:border-t-0 border-[#1C1A17]/10">
          {/* Large Editorial Watermark Numeral */}
          <div className="flex justify-between items-start border-b border-[#1C1A17]/15 pb-4 sm:pb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B5502F] font-medium block mb-1">
                Index / 01
              </span>
              <span className="font-serif italic text-xl sm:text-2xl text-[#1C1A17]">
                Autonomous Systems
              </span>
            </div>
            <span className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light text-[#1C1A17]/15 select-none leading-none -mt-2 sm:-mt-3">
              01
            </span>
          </div>

          {/* Structured Architectural Ledger */}
          <div className="space-y-3 sm:space-y-4 py-1 sm:py-2">
            <div className="flex justify-between items-baseline py-2 border-b border-[#1C1A17]/10 gap-3">
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#7A7266] shrink-0">
                Current Role
              </span>
              <span className="text-xs font-medium text-[#1C1A17] text-right">
                OTTOBON (Sept 2025 – Present)
              </span>
            </div>

            <div className="flex justify-between items-baseline py-2 border-b border-[#1C1A17]/10 gap-3">
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#7A7266] shrink-0">
                Core Practice
              </span>
              <span className="text-xs font-medium text-[#1C1A17] text-right">
                Multi-Agent Systems & State Graphs
              </span>
            </div>

            <div className="flex justify-between items-baseline py-2 border-b border-[#1C1A17]/10 gap-3">
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#7A7266] shrink-0">
                Primitives
              </span>
              <span className="text-xs font-medium text-[#1C1A17] text-right">
                Deterministic Gates • Hybrid RAG
              </span>
            </div>

            <div className="flex justify-between items-baseline py-2 border-b border-[#1C1A17]/10 gap-3">
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#7A7266] shrink-0">
                Stack Backbone
              </span>
              <span className="text-xs font-medium text-[#1C1A17] text-right">
                LangGraph • Claude 3.5 • Qdrant
              </span>
            </div>

            <div className="flex justify-between items-baseline py-2 border-b border-[#1C1A17]/10 gap-3">
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#7A7266] shrink-0">
                Availability
              </span>
              <span className="text-xs font-medium text-[#B5502F] flex items-center gap-1.5 text-right">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6B7A4F] animate-pulse" />
                Advisory & Production Builds
              </span>
            </div>
          </div>

          {/* Editorial Footnote Note */}
          <div className="pt-2">
            <p className="text-xs leading-relaxed text-[#7A7266] font-light italic">
              “Engineering reliable, auditable intelligence through strictly defined state boundaries and asynchronous evaluation loops.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

