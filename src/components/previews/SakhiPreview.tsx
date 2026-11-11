import React from 'react';
import {
  Heart,
  MessageSquare,
  AlertCircle,
  Settings,
  UserCheck,
  ChevronRight
} from 'lucide-react';

interface Props {
  className?: string;
  isInteractive?: boolean;
}

export const SakhiPreview: React.FC<Props> = ({ className = '', isInteractive = false }) => {
  return (
    <div
      className={`relative w-full rounded-xl bg-[#F0EBF5] p-4 sm:p-6 overflow-hidden border border-[#E0D5E8] select-none ${className}`}
      aria-hidden={!isInteractive}
    >
      {/* Concept Badge */}
      <div className="absolute top-3 right-4 sm:top-4 sm:right-6 text-[11px] font-medium text-[#7D668E] italic">
        Interface concept
      </div>

      {/* Mock Window Container */}
      <div className="w-full bg-white rounded-lg shadow-sm border border-[#E0D5E8] overflow-hidden flex flex-col sm:flex-row text-[12px]">
        {/* Mini Sidebar */}
        <div className="w-full sm:w-36 bg-[#322340] text-white p-3 shrink-0 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 pb-3 border-b border-[#47345B] mb-3">
              <Heart className="w-3.5 h-3.5 text-[#D19DF0] fill-current" />
              <span className="font-semibold text-[13px] tracking-tight">Sakhi</span>
            </div>
            <div className="space-y-1 text-[#BAA3CC] text-[11px]">
              <div className="flex items-center gap-2 px-2 py-1.5 rounded bg-[#443157] text-white font-medium">
                <MessageSquare className="w-3.5 h-3.5 text-[#DDA9FC]" />
                <span>Conversation</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-[#443157] text-[#D8C7E6]">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Escalations</span>
              </div>
            </div>
          </div>
          <div className="pt-2 text-[#9A81AF] text-[11px] flex items-center gap-2">
            <Settings className="w-3.5 h-3.5" />
            <span>Settings</span>
          </div>
        </div>

        {/* Main Chat & Escalation Area */}
        <div className="flex-1 p-3.5 sm:p-4 bg-[#FDFBFE] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#EFE8F5]">
              <h4 className="font-semibold text-[#172630] text-[13px]">Patient communication</h4>
              <span className="text-[10px] text-[#7A5793] bg-[#F4EDFA] px-2 py-0.5 rounded font-mono">Session active</span>
            </div>

            {/* Conversation Bubbles */}
            <div className="space-y-2.5 mb-4">
              {/* Bot greeting */}
              <div className="flex items-start">
                <div className="bg-[#F2EDF7] border border-[#E3D9EC] text-[#2F213A] py-2 px-3 rounded-2xl rounded-tl-sm max-w-[85%] text-[11px] leading-relaxed">
                  I&apos;m here to help you with your concern.
                </div>
              </div>

              {/* User question */}
              <div className="flex items-end justify-end">
                <div className="bg-[#EBE2F5] border border-[#D8C9E7] text-[#2F213A] py-2 px-3 rounded-2xl rounded-tr-sm max-w-[85%] text-[11px] leading-relaxed">
                  Can you connect me to a doctor?
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Handoff Trigger Card */}
          <div className="bg-[#F7F2FA] p-3 rounded-lg border border-[#E3D8EB]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#4A2D63]">
                <UserCheck className="w-4 h-4 text-[#7A5299]" />
                <span className="font-semibold text-[12px]">Doctor handoff</span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#8A67A6]" />
            </div>
            <p className="text-[10px] text-[#7E6593] mt-1">
              Escalation based on conversation confidence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
