import React from 'react';
import {
  Briefcase,
  CheckSquare,
  Users,
  Cpu,
  Settings,
  GitBranch,
  ArrowRight,
  Check
} from 'lucide-react';

interface Props {
  className?: string;
  isInteractive?: boolean;
}

export const TalentOpsPreview: React.FC<Props> = ({ className = '', isInteractive = false }) => {
  return (
    <div
      className={`relative w-full rounded-xl bg-[#E8EFE9] p-4 sm:p-6 overflow-hidden border border-[#D5E1D7] select-none ${className}`}
      aria-hidden={!isInteractive}
    >
      {/* Concept Badge */}
      <div className="absolute top-3 right-4 sm:top-4 sm:right-6 text-[11px] font-medium text-[#65796A] italic">
        Interface concept
      </div>

      {/* Mock Window Container */}
      <div className="w-full bg-white rounded-lg shadow-sm border border-[#D5DDD6] overflow-hidden flex flex-col sm:flex-row text-[12px]">
        {/* Mini Sidebar */}
        <div className="w-full sm:w-36 bg-[#162E36] text-white p-3 shrink-0 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 pb-3 border-b border-[#2A444D] mb-3">
              <div className="w-2.5 h-2.5 rounded bg-[#14685D]" />
              <span className="font-semibold text-[13px] tracking-tight">Talent Ops</span>
            </div>
            <div className="space-y-1 text-[#9DB2BA] text-[11px]">
              <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-[#203D47] text-[#CCD9DF]">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Work</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded bg-[#203D47] text-white font-medium">
                <CheckSquare className="w-3.5 h-3.5 text-[#5ED0C1]" />
                <span>Tasks</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-[#203D47] text-[#CCD9DF]">
                <Users className="w-3.5 h-3.5" />
                <span>Candidates</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-[#203D47] text-[#CCD9DF]">
                <Cpu className="w-3.5 h-3.5" />
                <span>AI Gateway</span>
              </div>
            </div>
          </div>
          <div className="pt-2 text-[#7E96A0] text-[11px] flex items-center gap-2">
            <Settings className="w-3.5 h-3.5" />
            <span>Settings</span>
          </div>
        </div>

        {/* Main Board Area */}
        <div className="flex-1 p-3.5 sm:p-4 bg-[#FCFCFA] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#EAEEEA]">
              <h4 className="font-semibold text-[#172630] text-[13px]">Task board</h4>
              <span className="text-[10px] text-[#718476] bg-[#EDF3EE] px-2 py-0.5 rounded">Active sprint</span>
            </div>

            {/* Task Columns */}
            <div className="grid grid-cols-3 gap-2 sm:gap-2.5 mb-3">
              {/* To do */}
              <div className="bg-[#F4F6F4] p-2 rounded border border-[#E3E8E3]">
                <div className="text-[10px] font-semibold text-[#5A6D5F] uppercase tracking-wider mb-1.5">
                  To do
                </div>
                <div className="space-y-1.5">
                  <div className="bg-white p-2 rounded shadow-[0_1px_2px_rgba(0,0,0,0.04)] border border-[#E1E6E1]">
                    <p className="text-[11px] font-medium text-[#1A2E2A] leading-tight">Prepare intake</p>
                    <span className="text-[9px] text-[#758A7A]">Ops queue</span>
                  </div>
                  <div className="bg-white p-2 rounded shadow-[0_1px_2px_rgba(0,0,0,0.04)] border border-[#E1E6E1]">
                    <p className="text-[11px] font-medium text-[#1A2E2A] leading-tight">Map to workflow</p>
                    <span className="text-[9px] text-[#758A7A]">Config</span>
                  </div>
                </div>
              </div>

              {/* In progress */}
              <div className="bg-[#F4F6F4] p-2 rounded border border-[#E3E8E3]">
                <div className="text-[10px] font-semibold text-[#5A6D5F] uppercase tracking-wider mb-1.5">
                  In progress
                </div>
                <div className="space-y-1.5">
                  <div className="bg-white p-2 rounded shadow-[0_1px_2px_rgba(0,0,0,0.04)] border border-[#E1E6E1]">
                    <p className="text-[11px] font-medium text-[#1A2E2A] leading-tight">Run screening</p>
                    <span className="text-[9px] text-[#758A7A]">Cohort 24</span>
                  </div>
                  <div className="bg-white p-2 rounded shadow-[0_1px_2px_rgba(0,0,0,0.04)] border border-[#E1E6E1]">
                    <p className="text-[11px] font-medium text-[#1A2E2A] leading-tight">AI review</p>
                    <span className="text-[9px] text-[#14685D] font-medium">Model query</span>
                  </div>
                </div>
              </div>

              {/* Done */}
              <div className="bg-[#F4F6F4] p-2 rounded border border-[#E3E8E3]">
                <div className="text-[10px] font-semibold text-[#5A6D5F] uppercase tracking-wider mb-1.5">
                  Done
                </div>
                <div className="space-y-1.5">
                  <div className="bg-white p-2 rounded shadow-[0_1px_2px_rgba(0,0,0,0.04)] border border-[#E1E6E1]">
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] font-medium text-[#465A4B] leading-tight line-through">Close request</p>
                      <Check className="w-3 h-3 text-[#14685D]" />
                    </div>
                    <span className="text-[9px] text-[#86998A]">Payroll synced</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

            {/* Model Gateway Routing Widget */}
            <div className="bg-[#EDF3EE] p-2.5 rounded-md border border-[#D9E3DA]">
              <div className="flex items-center gap-1.5 text-[10px] font-semibold text-[#254238] mb-1.5">
                <GitBranch className="w-3 h-3 text-[#14685D]" />
                <span>Model routing (local with fallback)</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px]">
                <div className="bg-white px-2 py-1 rounded border border-[#C5D6C8] font-medium text-[#14685D] flex items-center gap-1 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14685D]" />
                  <span>Local model (default)</span>
                </div>
                <ArrowRight className="w-3 h-3 text-[#799080] shrink-0" />
                <div className="bg-[#F6F8F6] px-2 py-1 rounded border border-[#DCE4DD] text-[#55695C]">
                  <span>Fallback (external)</span>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};
