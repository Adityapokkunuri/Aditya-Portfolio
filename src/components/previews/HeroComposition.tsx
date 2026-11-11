import React from 'react';
import {
  CheckCircle2,
  ChevronRight,
  Briefcase,
  Search,
  UserCheck,
  Check
} from 'lucide-react';

export const HeroComposition: React.FC = () => {
  return (
    <div className="relative w-full max-w-[620px] mx-auto select-none" aria-hidden="true">
      {/* Top note */}
      <div className="text-right text-[13px] text-[#52616B] italic font-serif mb-2 pr-4">
        A selection of the systems I’ve worked on
      </div>

      {/* Layered container with responsive height */}
      <div className="relative h-[380px] sm:h-[430px] md:h-[460px] w-full rounded-2xl bg-gradient-to-br from-[#F5F7F5] to-[#E9EEEA] p-3 sm:p-5 border border-[#D8DFD9] overflow-hidden shadow-[0_4px_24px_rgba(20,104,93,0.06)]">
        
        {/* Layer 1 (Back): Talent Ops Task Board Window */}
        <div className="absolute top-4 left-4 right-12 sm:right-16 bg-white rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-[#DCE4DD] overflow-hidden opacity-95">
          <div className="flex text-[11px]">
            {/* Dark Sidebar */}
            <div className="w-24 sm:w-28 bg-[#162E36] text-white p-2.5 shrink-0 hidden xs:block">
              <div className="flex items-center gap-1.5 pb-2 border-b border-[#2A444D] mb-2 font-semibold text-[11px]">
                <div className="w-2 h-2 rounded bg-[#14685D]" />
                <span>Talent Ops</span>
              </div>
              <div className="space-y-1 text-[#9BB1B9] text-[10px]">
                <div className="px-1.5 py-0.5 rounded text-[#C2D3DB]">Work</div>
                <div className="px-1.5 py-0.5 rounded bg-[#203D47] text-white font-medium">Tasks</div>
                <div className="px-1.5 py-0.5 rounded text-[#C2D3DB]">Candidates</div>
                <div className="px-1.5 py-0.5 rounded text-[#C2D3DB]">Workflows</div>
              </div>
            </div>

            {/* Task Board Columns */}
            <div className="flex-1 p-2.5 sm:p-3 bg-[#FCFDFB]">
              <div className="text-[12px] font-semibold text-[#172630] mb-2">Task board</div>
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                <div className="bg-[#F3F6F4] p-1.5 rounded border border-[#E1E8E2]">
                  <div className="text-[9px] font-semibold text-[#667A6B] uppercase mb-1">To do</div>
                  <div className="bg-white p-1.5 rounded border border-[#E1E8E2] text-[10px] text-[#1E3025] shadow-2xs">
                    Process requisition
                  </div>
                </div>
                <div className="bg-[#F3F6F4] p-1.5 rounded border border-[#E1E8E2]">
                  <div className="text-[9px] font-semibold text-[#667A6B] uppercase mb-1">In progress</div>
                  <div className="bg-white p-1.5 rounded border border-[#E1E8E2] text-[10px] text-[#1E3025] shadow-2xs">
                    Run screening
                  </div>
                </div>
                <div className="bg-[#F3F6F4] p-1.5 rounded border border-[#E1E8E2]">
                  <div className="text-[9px] font-semibold text-[#667A6B] uppercase mb-1">Review</div>
                  <div className="bg-white p-1.5 rounded border border-[#E1E8E2] text-[10px] text-[#1E3025] shadow-2xs flex items-center justify-between">
                    <span>Update workflow</span>
                    <Check className="w-2.5 h-2.5 text-[#14685D]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 2 (Bottom-Left): Sakhi Chat Card */}
        <div className="absolute bottom-6 left-3 sm:left-5 w-[210px] sm:w-[250px] bg-[#F7F2FA] rounded-xl shadow-[0_12px_28px_rgba(74,45,99,0.12)] border border-[#DFD1EB] p-3 z-10">
          <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-[#E7DCF2] text-[11px] font-semibold text-[#422259]">
            <span className="w-2 h-2 rounded-full bg-[#8E44AD]" />
            <span>Sakhi</span>
          </div>
          <div className="space-y-1.5 mb-2.5 text-[10px]">
            <div className="bg-white p-2 rounded-lg rounded-tl-xs border border-[#E2D5EC] text-[#2C183B] leading-tight">
              I’m here to help you with your concern.
            </div>
            <div className="bg-[#EAE0F5] p-2 rounded-lg rounded-tr-xs text-[#2C183B] text-right ml-auto max-w-[88%] leading-tight">
              Can you connect me to a doctor?
            </div>
          </div>
          <div className="bg-white p-2 rounded-md border border-[#DDCDE8] flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-1.5 text-[10px] text-[#422259] font-medium">
              <UserCheck className="w-3 h-3 text-[#7A5299]" />
              <span>Doctor handoff</span>
            </div>
            <ChevronRight className="w-3 h-3 text-[#7A5299]" />
          </div>
        </div>

        {/* Layer 3 (Center Foreground): FSM Field Visit Card */}
        <div className="absolute bottom-4 left-[36%] sm:left-[38%] w-[190px] sm:w-[215px] bg-white rounded-xl shadow-[0_16px_36px_rgba(20,104,93,0.14)] border border-[#CAD8CC] p-3 z-20">
          <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#EBF0EC] text-[11px] font-semibold text-[#1B3024]">
            <div className="flex items-center gap-1">
              <span className="text-[#14685D] text-xs">≡</span>
              <span>FSM</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#14685D]" />
          </div>

          {/* Mini Route Map */}
          <div className="h-20 bg-[#F4F6F2] rounded-lg border border-[#DEE5DC] relative overflow-hidden mb-2 p-1">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#CBD4C8_1px,transparent_1px)] [background-size:8px_8px]" />
            <svg className="w-full h-full relative z-10" viewBox="0 0 120 70" fill="none">
              <path
                d="M 15 50 L 45 50 L 70 25 L 105 18"
                stroke="#14685D"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="15" cy="50" r="3.5" fill="#14685D" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="70" cy="25" r="2.5" fill="#14685D" />
              <circle cx="105" cy="18" r="4" fill="#D9534F" stroke="#FFFFFF" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Checklist */}
          <div className="space-y-1 text-[10px]">
            <div className="font-semibold text-[#223629] text-[10px]">Visit review</div>
            <div className="flex items-center gap-1.5 text-[#14685D]">
              <CheckCircle2 className="w-3 h-3 fill-[#14685D] text-white shrink-0" />
              <span>Location verified</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#6B7C70]">
              <div className="w-2.5 h-2.5 rounded-xs border border-[#9EB1A4] bg-white shrink-0" />
              <span>Visit completed</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#6B7C70]">
              <div className="w-2.5 h-2.5 rounded-xs border border-[#9EB1A4] bg-white shrink-0" />
              <span>Notes added</span>
            </div>
          </div>
        </div>

        {/* Layer 4 (Right Foreground): Ottobon Jobs Floating Card */}
        <div className="absolute top-14 sm:top-16 right-2 sm:right-4 w-[190px] sm:w-[220px] bg-white rounded-xl shadow-[0_12px_32px_rgba(27,104,153,0.12)] border border-[#CDE0ED] p-3 z-15">
          <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-[#EAF1F7] text-[11px] font-semibold text-[#18364B]">
            <Briefcase className="w-3.5 h-3.5 text-[#1B6899]" />
            <span>Ottobon Jobs</span>
          </div>

          {/* Search bar */}
          <div className="flex items-center gap-1 px-2 py-1 bg-[#F4F8FA] border border-[#DBE7EE] rounded text-[9px] text-[#637C8E] mb-2">
            <Search className="w-2.5 h-2.5 text-[#88A2B3]" />
            <span>Search jobs</span>
          </div>

          {/* Job listings */}
          <div className="space-y-1.5 text-[10px]">
            <div className="p-1.5 bg-[#FAFBFD] rounded border border-[#E4EEF5] flex items-center justify-between">
              <div>
                <p className="font-medium text-[#18364B] leading-tight">Operations Associate</p>
                <p className="text-[8px] text-[#7892A4]">Full-time · Hyderabad</p>
              </div>
              <ChevronRight className="w-3 h-3 text-[#96B0C2]" />
            </div>
            <div className="p-1.5 bg-[#FAFBFD] rounded border border-[#E4EEF5] flex items-center justify-between">
              <div>
                <p className="font-medium text-[#18364B] leading-tight">Process Executive</p>
                <p className="text-[8px] text-[#7892A4]">Full-time · Remote</p>
              </div>
              <ChevronRight className="w-3 h-3 text-[#96B0C2]" />
            </div>
            <div className="p-1.5 bg-[#FAFBFD] rounded border border-[#E4EEF5] flex items-center justify-between hidden xs:flex">
              <div>
                <p className="font-medium text-[#18364B] leading-tight">Talent Coordinator</p>
                <p className="text-[8px] text-[#7892A4]">Full-time · Bengaluru</p>
              </div>
              <ChevronRight className="w-3 h-3 text-[#96B0C2]" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom right caption */}
      <div className="text-right text-[11px] text-[#75848C] font-mono mt-2 pr-2">
        Illustrative interface previews
      </div>
    </div>
  );
};
