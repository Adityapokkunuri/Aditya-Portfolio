import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="border-t border-[#DADFD9] bg-[#FAFAF7] pt-14 pb-12 sm:pt-20 sm:pb-16 text-[#172630]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Contact Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-[#E1E5DF]">
          {/* Left: Text */}
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#172630] leading-tight text-balance">
              What does your product need next?
            </h2>
            <p className="mt-2.5 text-base sm:text-lg text-[#52616B] leading-relaxed">
              Let’s discuss the problem, constraints, and next step.
            </p>
          </div>

          {/* Right: Actions */}
          <div className="flex flex-col sm:items-start md:items-end gap-3.5 shrink-0">
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#14685D] hover:bg-[#0F534A] text-white text-[14px] font-semibold rounded-lg transition-colors shadow-sm"
            >
              <span>Start a conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Secondary links */}
            <div className="flex items-center gap-5 text-[13px] font-medium text-[#52616B]">
              <a
                href={PROFILE.linkedInUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#172630] transition-colors flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#72828C]" />
              </a>
              <span className="text-[#C4CCC3]">·</span>
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#172630] transition-colors flex items-center gap-1"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#72828C]" />
              </a>
              <span className="text-[#C4CCC3]">·</span>
              <a
                href={PROFILE.resumePath}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#172630] transition-colors flex items-center gap-1"
              >
                <span>Download résumé</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#72828C]" />
              </a>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#7A8892]">
          <div>
            © {new Date().getFullYear()} {PROFILE.name}. Technical Product Owner | AI Systems & Enterprise Solutions.
          </div>
          <div className="flex items-center gap-3">
            <span>Visakhapatnam, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
