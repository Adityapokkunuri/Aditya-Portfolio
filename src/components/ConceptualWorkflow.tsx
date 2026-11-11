import React from 'react';
import { ArrowRight, ArrowDown, Shield, GitBranch, Cpu, Database, CheckCircle, UserCheck, MapPin } from 'lucide-react';

interface Props {
  type: 'talent-ops' | 'ottobon-jobs' | 'sakhi' | 'fsm';
}

export const ConceptualWorkflow: React.FC<Props> = ({ type }) => {
  return (
    <div className="my-8 p-5 sm:p-7 rounded-xl bg-[#F6F7F5] border border-[#DADFD9] text-[#172630]">
      {/* Header and Label */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-[#E1E5DF] gap-2">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#14685D] font-bold">
            Conceptual workflow
          </span>
          <p className="text-[12px] text-[#697882] mt-0.5">
            Illustrative architectural flow diagram. Does not establish implementation evidence.
          </p>
        </div>
        <span className="text-[11px] text-[#788891] bg-white px-2.5 py-1 rounded border border-[#DFE3DE] self-start sm:self-auto font-medium">
          System abstraction
        </span>
      </div>

      {type === 'talent-ops' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center text-[12px]">
            {/* Step 1 */}
            <div className="bg-white p-3.5 rounded-lg border border-[#D5DCD6] shadow-xs">
              <div className="flex items-center gap-1.5 font-semibold text-[#162E36] mb-1">
                <span className="w-2 h-2 rounded-full bg-[#14685D]" />
                <span>1. User Query</span>
              </div>
              <p className="text-[#556771] text-[11px] leading-relaxed">
                Internal employee task, attendance, or payroll inquiry.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-3.5 rounded-lg border border-[#D5DCD6] shadow-xs">
              <div className="flex items-center gap-1.5 font-semibold text-[#162E36] mb-1">
                <Shield className="w-3.5 h-3.5 text-[#14685D]" />
                <span>2. Gateway Guardrails</span>
              </div>
              <p className="text-[#556771] text-[11px] leading-relaxed">
                Retrieval evaluation over organizational knowledge.
              </p>
            </div>

            {/* Step 3 (Branching) */}
            <div className="md:col-span-2 bg-[#EEF4EF] p-3.5 rounded-lg border border-[#CAD8CC] shadow-xs space-y-2">
              <div className="flex items-center gap-1.5 font-semibold text-[#14685D] mb-1">
                <GitBranch className="w-3.5 h-3.5" />
                <span>3. Dual-Model Routing Logic</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                <div className="bg-white p-2 rounded border border-[#BDD2C0]">
                  <div className="font-semibold text-[#14685D]">Local Llama Model (~65–70%)</div>
                  <p className="text-[#5B7163] text-[10px] mt-0.5">
                    Primary route for recurring internal operational queries.
                  </p>
                </div>
                <div className="bg-white p-2 rounded border border-[#CCD7CE]">
                  <div className="font-semibold text-[#445661]">External Fallback (OpenAI)</div>
                  <p className="text-[#647783] text-[10px] mt-0.5">
                    Fallback path for unhandled complex ambiguity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/70 p-3 rounded border border-[#DFE4E0] text-[11px] text-[#52616B] flex items-center justify-between flex-wrap gap-2">
            <span>Periodic 2–3 week benchmark review ensures relevance & guardrail adherence.</span>
            <span className="font-mono text-[10px] text-[#718578]">Evaluation loop</span>
          </div>
        </div>
      )}

      {type === 'ottobon-jobs' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-[12px]">
            {/* Step 1 */}
            <div className="bg-white p-3.5 rounded-lg border border-[#D5DCD6] shadow-xs">
              <div className="flex items-center gap-1.5 font-semibold text-[#18364B] mb-1">
                <Database className="w-3.5 h-3.5 text-[#1B6899]" />
                <span>1. Ingestion Layer</span>
              </div>
              <p className="text-[#556771] text-[11px] leading-relaxed">
                20+ source adapters collecting job listings from diverse external structures.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-3.5 rounded-lg border border-[#D5DCD6] shadow-xs">
              <div className="flex items-center gap-1.5 font-semibold text-[#18364B] mb-1">
                <Shield className="w-3.5 h-3.5 text-[#1B6899]" />
                <span>2. Lock & Deduplication</span>
              </div>
              <p className="text-[#556771] text-[11px] leading-relaxed">
                Distributed locking coordinates concurrency; SHA-256 hash deduplicates postings.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-3.5 rounded-lg border border-[#D5DCD6] shadow-xs">
              <div className="flex items-center gap-1.5 font-semibold text-[#18364B] mb-1">
                <Cpu className="w-3.5 h-3.5 text-[#1B6899]" />
                <span>3. Enrichment</span>
              </div>
              <p className="text-[#556771] text-[11px] leading-relaxed">
                Parsing unstructured requirements into standardized role and skill schemas.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-[#EBF3F8] p-3.5 rounded-lg border border-[#C5DCED] shadow-xs">
              <div className="flex items-center gap-1.5 font-semibold text-[#1B6899] mb-1">
                <CheckCircle className="w-3.5 h-3.5 text-[#1B6899]" />
                <span>4. Hybrid Matching</span>
              </div>
              <p className="text-[#3A5D75] text-[11px] leading-relaxed">
                Combines embedding similarity, skill overlap, and AI experience assessment.
              </p>
            </div>
          </div>
        </div>
      )}

      {type === 'sakhi' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-[12px]">
            {/* Step 1 */}
            <div className="bg-white p-3.5 rounded-lg border border-[#E0D5E8] shadow-xs">
              <div className="flex items-center gap-1.5 font-semibold text-[#3D2554] mb-1">
                <span className="w-2 h-2 rounded-full bg-[#7A5299]" />
                <span>1. Patient Query</span>
              </div>
              <p className="text-[#5B496C] text-[11px] leading-relaxed">
                Incoming inquiry within active patient messaging session.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-3.5 rounded-lg border border-[#E0D5E8] shadow-xs">
              <div className="flex items-center gap-1.5 font-semibold text-[#3D2554] mb-1">
                <Database className="w-3.5 h-3.5 text-[#7A5299]" />
                <span>2. Relational RAG</span>
              </div>
              <p className="text-[#5B496C] text-[11px] leading-relaxed">
                Retrieval against managed PostgreSQL database layer.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#F7F2FA] p-3.5 rounded-lg border border-[#DAC8E6] shadow-xs">
              <div className="flex items-center gap-1.5 font-semibold text-[#663D85] mb-1">
                <GitBranch className="w-3.5 h-3.5" />
                <span>3. Confidence Check</span>
              </div>
              <p className="text-[#5E4078] text-[11px] leading-relaxed">
                Relevance-based scoring evaluates response confidence against threshold.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-[#EFE5F7] p-3.5 rounded-lg border border-[#CDAFE5] shadow-xs">
              <div className="flex items-center gap-1.5 font-semibold text-[#502473] mb-1">
                <UserCheck className="w-3.5 h-3.5 text-[#7A5299]" />
                <span>4. Doctor Handoff</span>
              </div>
              <p className="text-[#4E276E] text-[11px] leading-relaxed">
                Low confidence initiates clinical escalation while preserving patient session context.
              </p>
            </div>
          </div>
        </div>
      )}

      {type === 'fsm' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-[12px]">
            {/* Step 1 */}
            <div className="bg-white p-3.5 rounded-lg border border-[#D9D1C5] shadow-xs">
              <div className="flex items-center gap-1.5 font-semibold text-[#363228] mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#14685D]" />
                <span>1. Field Visit Planning</span>
              </div>
              <p className="text-[#5C5548] text-[11px] leading-relaxed">
                Weekly itineraries and manager-assigned targets tied to CRM roles.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-3.5 rounded-lg border border-[#D9D1C5] shadow-xs">
              <div className="flex items-center gap-1.5 font-semibold text-[#363228] mb-1">
                <Shield className="w-3.5 h-3.5 text-[#14685D]" />
                <span>2. Geofence & Verification</span>
              </div>
              <p className="text-[#5C5548] text-[11px] leading-relaxed">
                GPS coordinate validation, selfie check, and location-verified report submission.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#F6F1EA] p-3.5 rounded-lg border border-[#DDD3C4] shadow-xs">
              <div className="flex items-center gap-1.5 font-semibold text-[#4F422E] mb-1">
                <GitBranch className="w-3.5 h-3.5 text-[#8C673B]" />
                <span>3. A* Route Refinement</span>
              </div>
              <p className="text-[#5A4D3B] text-[11px] leading-relaxed">
                Investigated initial pathing defects and introduced A* algorithm to improve journey routes.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-3.5 rounded-lg border border-[#D9D1C5] shadow-xs">
              <div className="flex items-center gap-1.5 font-semibold text-[#363228] mb-1">
                <CheckCircle className="w-3.5 h-3.5 text-[#14685D]" />
                <span>4. Manager Review & RLS</span>
              </div>
              <p className="text-[#5C5548] text-[11px] leading-relaxed">
                Database Row-Level Security enforces organizational boundaries and approval lines.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
