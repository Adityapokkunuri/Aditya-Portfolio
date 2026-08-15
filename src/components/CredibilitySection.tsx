import React from 'react';
import { CREDENTIALS_DATA } from '../data/portfolioData.ts';
import { ArrowUpRight, Award, CheckCircle2, ShieldCheck, Sparkles, Terminal } from 'lucide-react';

export const CredibilitySection: React.FC = () => {
  const architectCred = CREDENTIALS_DATA[0];
  const partnerCred = CREDENTIALS_DATA[1];
  const secondaryCreds = CREDENTIALS_DATA.slice(2);

  return (
    <section
      id="credibility"
      className="relative min-h-screen w-full flex flex-col justify-center py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto z-10"
    >
      {/* Chapter Marker */}
      <div className="flex items-center space-x-3 mb-8 sm:mb-12">
        <span className="font-mono-tag text-xs uppercase tracking-[0.2em] text-[#B5502F]">
          05 / Verified Credentials & Distinctions
        </span>
        <div className="h-px w-12 bg-[#D5CCC0]" />
      </div>

      <div className="max-w-3xl mb-8 sm:mb-12">
        <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#1C1A17] mb-3 sm:mb-4">
          Professional Recognition & Verified Distinctions
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-[#554E45] font-light leading-relaxed">
          Frontier Anthropic credentials and research foundations validating production mastery in autonomous agentic systems and developer tooling.
        </p>
      </div>

      {/* Featured Primary Peer Credentials: Dual Anthropic Distinctions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
        {/* Primary 1: Claude Certified Architect (Professional) */}
        <div className="relative p-6 sm:p-8 lg:p-10 rounded-2xl border-2 border-[#B5502F]/40 bg-[#FAF7F2] shadow-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#B5502F]/70">
          {/* Subtle decorative watermark */}
          <div className="absolute right-4 -bottom-6 font-serif text-8xl text-[#B5502F]/5 select-none pointer-events-none font-light">
            CCA
          </div>

          <div className="relative z-10 space-y-5">
            {/* Badge Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] font-mono-tag uppercase tracking-wider bg-[#B5502F] text-[#FAF7F2] font-medium shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Premier Credential</span>
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono-tag uppercase tracking-wider bg-[#FAF7F2] text-[#8E867A] border border-[#E0D8CC]">
                Anthropic Verified
              </span>
            </div>

            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-[#1C1A17] tracking-tight mb-1">
                {architectCred.title}
              </h3>
              <p className="font-serif italic text-base text-[#B5502F]">
                {architectCred.issuer}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#4A433A] leading-relaxed font-light">
              {architectCred.description}
            </p>

            {/* Core Competencies Validated */}
            <div className="pt-1">
              <span className="text-[10px] sm:text-[11px] font-mono-tag uppercase tracking-widest text-[#7A7266] block mb-2 font-medium">
                Validated Competencies:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Claude 3.5 Model Architecture',
                  'Context Caching & Low-Latency RAG',
                  'Deterministic Tool Schemas',
                  'Multi-Agent State Graphs',
                  'Trace Evaluation & Guardrails'
                ].map((competency) => (
                  <span
                    key={competency}
                    className="px-2.5 py-1 text-[11px] font-mono-tag bg-[#EFE8DC]/80 text-[#3D372E] rounded-md border border-[#DFD7C9]"
                  >
                    {competency}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Verification Footer */}
          <div className="relative z-10 pt-6 mt-6 border-t border-[#E8E0D4] flex flex-wrap items-center justify-between gap-3">
            <span className="text-[10px] font-mono-tag text-[#8A8174]">
              Badge ID: 404f4376-8981...
            </span>

            {architectCred.link && (
              <a
                href={architectCred.link}
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic="true"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-[#1C1A17] text-[#FAF7F2] hover:bg-[#B5502F] text-[11px] font-mono-tag uppercase tracking-widest transition-all duration-300 shadow-sm group focus:outline-none min-h-[40px]"
              >
                <Award className="w-3.5 h-3.5 text-[#FAF7F2]" />
                <span>Verify on Credly</span>
                <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </div>
        </div>

        {/* Primary 2: Claude Code Partner */}
        <div className="relative p-6 sm:p-8 lg:p-10 rounded-2xl border-2 border-[#B5502F]/40 bg-[#FAF7F2] shadow-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#B5502F]/70">
          {/* Subtle decorative watermark */}
          <div className="absolute right-4 -bottom-6 font-serif text-8xl text-[#B5502F]/5 select-none pointer-events-none font-light">
            CCP
          </div>

          <div className="relative z-10 space-y-5">
            {/* Badge Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] font-mono-tag uppercase tracking-wider bg-[#B5502F] text-[#FAF7F2] font-medium shadow-xs">
                <Terminal className="w-3.5 h-3.5" />
                <span>Partner Distinction</span>
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono-tag uppercase tracking-wider bg-[#FAF7F2] text-[#8E867A] border border-[#E0D8CC]">
                Anthropic Verified
              </span>
            </div>

            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-[#1C1A17] tracking-tight mb-1">
                {partnerCred.title}
              </h3>
              <p className="font-serif italic text-base text-[#B5502F]">
                {partnerCred.issuer}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#4A433A] leading-relaxed font-light">
              {partnerCred.description}
            </p>

            {/* Core Competencies Validated */}
            <div className="pt-1">
              <span className="text-[10px] sm:text-[11px] font-mono-tag uppercase tracking-widest text-[#7A7266] block mb-2 font-medium">
                Validated Competencies:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Claude Code CLI & Tooling',
                  'Autonomous Code Synthesis',
                  'Repository Context Ingestion',
                  'Terminal Agent Orchestration',
                  'Developer Tool Protocols'
                ].map((competency) => (
                  <span
                    key={competency}
                    className="px-2.5 py-1 text-[11px] font-mono-tag bg-[#EFE8DC]/80 text-[#3D372E] rounded-md border border-[#DFD7C9]"
                  >
                    {competency}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Verification Footer */}
          <div className="relative z-10 pt-6 mt-6 border-t border-[#E8E0D4] flex flex-wrap items-center justify-between gap-3">
            <span className="text-[10px] font-mono-tag text-[#8A8174]">
              Badge ID: e8f72cdc-5c58...
            </span>

            {partnerCred.link && (
              <a
                href={partnerCred.link}
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic="true"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-[#1C1A17] text-[#FAF7F2] hover:bg-[#B5502F] text-[11px] font-mono-tag uppercase tracking-widest transition-all duration-300 shadow-sm group focus:outline-none min-h-[40px]"
              >
                <Award className="w-3.5 h-3.5 text-[#FAF7F2]" />
                <span>Verify on Credly</span>
                <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Secondary Distinctions Grid: Duke ML & Hackathon Winner */}
      <div className="border-t border-[#E0D8CC] pt-8">
        <span className="text-xs font-mono-tag uppercase tracking-[0.2em] text-[#7A7266] block mb-6 font-medium">
          Academic Foundations & Innovation Honors
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {secondaryCreds.map((cred) => (
            <div
              key={cred.number}
              className="flex flex-col justify-between p-6 sm:p-8 rounded-xl border border-[#E0D8CC] bg-[#FAF7F2]/70 hover:bg-[#FAF7F2] hover:border-[#B5502F]/30 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#E8E0D4] mb-3 sm:mb-4">
                  <span className="font-mono-tag text-xs text-[#B5502F] tracking-widest font-medium">
                    {cred.number}
                  </span>
                  <span className="font-mono-tag text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8A8174]">
                    {cred.date}
                  </span>
                </div>

                <h3 className="font-editorial text-xl sm:text-2xl font-medium text-[#1C1A17] mb-1">
                  {cred.title}
                </h3>
                <p className="font-serif italic text-xs sm:text-sm text-[#7A7266] mb-3 sm:mb-4">
                  {cred.issuer}
                </p>
                <p className="text-xs sm:text-sm text-[#635C52] leading-relaxed mb-5 sm:mb-6 font-light">
                  {cred.description}
                </p>
              </div>

              {cred.link ? (
                <div className="pt-2 border-t border-[#E8E0D4]">
                  <a
                    href={cred.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-magnetic="true"
                    className="inline-flex items-center space-x-2 text-xs font-mono-tag uppercase tracking-wider text-[#1C1A17] group-hover:text-[#B5502F] min-h-[44px] transition-colors duration-300 focus:outline-none"
                  >
                    <span className="hover-editorial-line">{cred.linkLabel || 'View Details'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              ) : (
                <div className="pt-4 border-t border-[#E8E0D4]/60 flex items-center justify-between">
                  <span className="font-mono-tag text-[10px] uppercase tracking-wider text-[#8A8174]">
                    Competitive Distinction
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


