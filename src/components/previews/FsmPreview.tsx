import React from 'react';
import {
  MapPin,
  Calendar,
  Compass,
  Shield,
  Settings,
  CheckCircle2
} from 'lucide-react';

interface Props {
  className?: string;
  isInteractive?: boolean;
}

export const FsmPreview: React.FC<Props> = ({ className = '', isInteractive = false }) => {
  return (
    <div
      className={`relative w-full rounded-xl bg-[#F5EFE6] p-4 sm:p-6 overflow-hidden border border-[#E4DACD] select-none ${className}`}
      aria-hidden={!isInteractive}
    >
      {/* Concept Badge */}
      <div className="absolute top-3 right-4 sm:top-4 sm:right-6 text-[11px] font-medium text-[#7D705E] italic">
        Interface concept
      </div>

      {/* Mock Window Container */}
      <div className="w-full bg-white rounded-lg shadow-sm border border-[#E2D8CA] overflow-hidden flex flex-col sm:flex-row text-[12px]">
        {/* Mini Sidebar */}
        <div className="w-full sm:w-36 bg-[#2B3028] text-white p-3 shrink-0 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 pb-3 border-b border-[#3D4439] mb-3">
              <MapPin className="w-3.5 h-3.5 text-[#A5C992]" />
              <span className="font-semibold text-[13px] tracking-tight">FSM</span>
            </div>
            <div className="space-y-1 text-[#ACB4A7] text-[11px]">
              <div className="flex items-center gap-2 px-2 py-1.5 rounded bg-[#3B4237] text-white font-medium">
                <Calendar className="w-3.5 h-3.5 text-[#B8E2A2]" />
                <span>Visits</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-[#3B4237] text-[#CCD4C7]">
                <Compass className="w-3.5 h-3.5" />
                <span>Map</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-[#3B4237] text-[#CCD4C7]">
                <Shield className="w-3.5 h-3.5" />
                <span>Access</span>
              </div>
            </div>
          </div>
          <div className="pt-2 text-[#919A8B] text-[11px] flex items-center gap-2">
            <Settings className="w-3.5 h-3.5" />
            <span>Settings</span>
          </div>
        </div>

        {/* Main Map & Visit Review Area */}
        <div className="flex-1 p-3.5 sm:p-4 bg-[#FCFBF9] flex flex-col sm:flex-row gap-3">
          {/* Map Display */}
          <div className="flex-1 bg-[#F4F1EC] rounded-lg border border-[#E3DBD0] relative overflow-hidden h-40 sm:h-auto flex items-center justify-center p-2">
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#D1C7BA_1px,transparent_1px)] [background-size:12px_12px]" />

            {/* Simulated A* GPS Route Line via SVG */}
            <svg className="w-full h-full relative z-10" viewBox="0 0 160 120" fill="none">
              <path
                d="M 20 85 L 50 85 L 80 50 L 115 50 L 140 25"
                stroke="#14685D"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Start node */}
              <circle cx="20" cy="85" r="5" fill="#14685D" stroke="#FFFFFF" strokeWidth="2" />
              {/* Intermediate waypoint */}
              <circle cx="80" cy="50" r="3.5" fill="#14685D" />
              {/* Destination pin */}
              <circle cx="140" cy="25" r="5.5" fill="#D9534F" stroke="#FFFFFF" strokeWidth="2" />
            </svg>

            <span className="absolute bottom-2 left-2 text-[9px] bg-white/90 backdrop-blur-xs px-1.5 py-0.5 rounded text-[#6E6454] font-mono border border-[#DDD5C9]">
              A* Route
            </span>
          </div>

          {/* Visit Review Checklist */}
          <div className="w-full sm:w-44 bg-white p-3 rounded-lg border border-[#E4DBD0] flex flex-col justify-between">
            <div>
              <h5 className="font-semibold text-[#242A22] text-[12px] pb-2 border-b border-[#F0EBE3]">Visit review</h5>
              <div className="space-y-2 mt-2 text-[11px]">
                <div className="flex items-center gap-1.5 text-[#14685D]">
                  <CheckCircle2 className="w-3.5 h-3.5 fill-[#14685D] text-white shrink-0" />
                  <span className="font-medium">Location verified</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#555E52]">
                  <div className="w-3.5 h-3.5 rounded border border-[#B3BCB0] bg-white shrink-0" />
                  <span>Visit completed</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#555E52]">
                  <div className="w-3.5 h-3.5 rounded border border-[#B3BCB0] bg-white shrink-0" />
                  <span>Notes added</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="mt-3 w-full py-1.5 px-2 bg-[#14685D] text-white rounded text-[11px] font-medium text-center shadow-xs"
            >
              Save review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
