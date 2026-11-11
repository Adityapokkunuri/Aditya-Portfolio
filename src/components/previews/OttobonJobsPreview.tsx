import React from 'react';
import {
  Briefcase,
  Layers,
  Search,
  ChevronRight,
  Database,
  Settings
} from 'lucide-react';

interface Props {
  className?: string;
  isInteractive?: boolean;
}

export const OttobonJobsPreview: React.FC<Props> = ({ className = '', isInteractive = false }) => {
  return (
    <div
      className={`relative w-full rounded-xl bg-[#E5EFF5] p-4 sm:p-6 overflow-hidden border border-[#D0DFEB] select-none ${className}`}
      aria-hidden={!isInteractive}
    >
      {/* Concept Badge */}
      <div className="absolute top-3 right-4 sm:top-4 sm:right-6 text-[11px] font-medium text-[#5B798F] italic">
        Interface concept
      </div>

      {/* Mock Window Container */}
      <div className="w-full bg-white rounded-lg shadow-sm border border-[#D2E0EC] overflow-hidden flex flex-col sm:flex-row text-[12px]">
        {/* Mini Sidebar */}
        <div className="w-full sm:w-36 bg-[#203444] text-white p-3 shrink-0 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 pb-3 border-b border-[#314A5E] mb-3">
              <div className="w-2.5 h-2.5 rounded bg-[#1B6899]" />
              <span className="font-semibold text-[13px] tracking-tight">Ottobon Jobs</span>
            </div>
            <div className="space-y-1 text-[#9BB3C4] text-[11px]">
              <div className="flex items-center gap-2 px-2 py-1.5 rounded bg-[#2D475C] text-white font-medium">
                <Briefcase className="w-3.5 h-3.5 text-[#6BB6E8]" />
                <span>Jobs</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-[#2D475C] text-[#C6D8E5]">
                <Layers className="w-3.5 h-3.5" />
                <span>Matches</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-[#2D475C] text-[#C6D8E5]">
                <Database className="w-3.5 h-3.5" />
                <span>Sources</span>
              </div>
            </div>
          </div>
          <div className="pt-2 text-[#7F9BAF] text-[11px] flex items-center gap-2">
            <Settings className="w-3.5 h-3.5" />
            <span>Settings</span>
          </div>
        </div>

        {/* Main Matches Area */}
        <div className="flex-1 p-3.5 sm:p-4 bg-[#FCFDFE]">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#E8EFF5]">
            <h4 className="font-semibold text-[#172630] text-[13px]">Job matches</h4>
            <span className="text-[10px] text-[#4F738E] bg-[#EBF3F8] px-2 py-0.5 rounded font-mono">20+ sources</span>
          </div>

          {/* Search box */}
          <div className="relative mb-3">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#7C97AA]" />
            <div className="w-full pl-8 pr-3 py-1.5 bg-[#F4F8FA] border border-[#D7E4ED] rounded text-[11px] text-[#637C8E]">
              Search candidates or jobs
            </div>
          </div>

          {/* Matches List */}
          <div className="space-y-2">
            <div className="p-2.5 bg-white rounded border border-[#DCE7F0] shadow-[0_1px_2px_rgba(0,0,0,0.03)] flex items-center justify-between hover:border-[#B7D2E5] transition-colors">
              <div>
                <p className="font-semibold text-[#1B3242] text-[12px] leading-tight">Operations Associate</p>
                <p className="text-[10px] text-[#55778E] mt-0.5">5 relevant matches · 94% skill fit</p>
              </div>
              <ChevronRight className="w-4 h-4 text-[#8AA2B3]" />
            </div>

            <div className="p-2.5 bg-white rounded border border-[#DCE7F0] shadow-[0_1px_2px_rgba(0,0,0,0.03)] flex items-center justify-between hover:border-[#B7D2E5] transition-colors">
              <div>
                <p className="font-semibold text-[#1B3242] text-[12px] leading-tight">Process Executive</p>
                <p className="text-[10px] text-[#55778E] mt-0.5">5 relevant matches · Ingestion parsed</p>
              </div>
              <ChevronRight className="w-4 h-4 text-[#8AA2B3]" />
            </div>

            <div className="p-2.5 bg-white rounded border border-[#DCE7F0] shadow-[0_1px_2px_rgba(0,0,0,0.03)] flex items-center justify-between hover:border-[#B7D2E5] transition-colors">
              <div>
                <p className="font-semibold text-[#1B3242] text-[12px] leading-tight">Talent Coordinator</p>
                <p className="text-[10px] text-[#55778E] mt-0.5">4 relevant matches · SHA-256 verified</p>
              </div>
              <ChevronRight className="w-4 h-4 text-[#8AA2B3]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
