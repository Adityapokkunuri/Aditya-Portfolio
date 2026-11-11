import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowUpRight,
  Briefcase,
  Award,
  Download,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  GraduationCap
} from 'lucide-react';
import { HeroComposition } from '../components/previews/HeroComposition';
import { TalentOpsPreview } from '../components/previews/TalentOpsPreview';
import { OttobonJobsPreview } from '../components/previews/OttobonJobsPreview';
import { SakhiPreview } from '../components/previews/SakhiPreview';
import { FsmPreview } from '../components/previews/FsmPreview';
import { PROJECTS } from '../data/projects';
import { PROFILE } from '../data/profile';

export const HomePage: React.FC = () => {
  const [experienceExpanded, setExperienceExpanded] = useState(false);
  const [credentialsExpanded, setCredentialsExpanded] = useState(false);

  return (
    <div className="bg-[#FAFAF7] text-[#172630]">
      {/* ===================== HERO SECTION ===================== */}
      <section className="pt-10 sm:pt-16 pb-12 sm:pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow */}
            <div className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#14685D] uppercase">
              TECHNICAL PRODUCT OWNER · AI SYSTEMS
            </div>

            {/* Headline with Teal Accent */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#172630] leading-[1.12] text-balance">
              Turning complex workflows into{' '}
              <span className="text-[#14685D]">dependable systems.</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#52616B] leading-relaxed max-w-xl">
              I’m Aditya, a Technical Product Owner working with engineering teams from
              architecture and development through deployment and production support.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#selected-work"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-[#14685D] hover:bg-[#0F534A] rounded-md transition-colors shadow-xs"
              >
                <span>Explore selected work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href={PROFILE.resumePath}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-medium text-[#172630] bg-white hover:bg-[#F3F5F3] border border-[#DADFD9] rounded-md transition-colors shadow-2xs"
              >
                <span>Download résumé</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#52616B]" />
              </a>
            </div>

            {/* Domain Line */}
            <div className="pt-4 text-xs sm:text-sm text-[#52616B] border-t border-[#E5E9E4] font-medium">
              Operations / Recruitment / Healthcare / Field mobility
            </div>
          </div>

          {/* Right Column: Layered Previews Composition */}
          <div className="lg:col-span-6 w-full">
            <HeroComposition />
          </div>
        </div>
      </section>

      {/* ===================== RESPONSIBILITY STRIP ===================== */}
      <section className="border-y border-[#DADFD9] bg-[#F2F5F2] py-4 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#233530] flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <span>Architecture</span>
            <span className="text-[#A7B8AC]">/</span>
            <span>Team delivery</span>
            <span className="text-[#A7B8AC]">/</span>
            <span>Deployment</span>
            <span className="text-[#A7B8AC]">/</span>
            <span>Production support</span>
          </p>
        </div>
      </section>

      {/* ===================== SELECTED WORK ===================== */}
      <section id="selected-work" className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-[12px] font-bold tracking-wider text-[#14685D] uppercase mb-2">
            SELECTED WORK
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#172630] leading-tight">
            Four products. A broader scope of ownership.
          </h2>
          <p className="mt-2 text-base text-[#52616B]">
            Built from scratch, extended in place, and supported in production.
          </p>
        </div>

        {/* 2x2 Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* 01 / TALENT OPS */}
          <div className="flex flex-col justify-between group">
            <div>
              <TalentOpsPreview className="transition-transform group-hover:scale-[1.008] duration-200" />
              <div className="mt-5 space-y-2">
                <div className="text-xs font-mono font-bold text-[#14685D] tracking-wider uppercase">
                  01 / TALENT OPS
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#172630] leading-snug">
                  Connecting workflows. Governing AI.
                </h3>
                <p className="text-sm text-[#52616B] leading-relaxed">
                  Operational workflows and a local-model gateway.
                </p>
                <div className="pt-1 flex items-center gap-2 text-xs">
                  <span className="px-2 py-0.5 rounded bg-[#E4EAE5] text-[#1E332E] font-semibold text-[10px] tracking-wide uppercase border border-[#D1DCD2]">
                    ROLE
                  </span>
                  <span className="text-[#41535E] font-medium">Technical direction + team delivery</span>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Link
                to="/work/talent-ops"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#14685D] hover:text-[#0F534A] transition-colors"
              >
                <span>Explore case study</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 02 / OTTOBON JOBS */}
          <div className="flex flex-col justify-between group">
            <div>
              <OttobonJobsPreview className="transition-transform group-hover:scale-[1.008] duration-200" />
              <div className="mt-5 space-y-2">
                <div className="text-xs font-mono font-bold text-[#1B6899] tracking-wider uppercase">
                  02 / OTTOBON JOBS
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#172630] leading-snug">
                  Reliable ingestion. Relevant matches.
                </h3>
                <p className="text-sm text-[#52616B] leading-relaxed">
                  Source adapters, deduplication, candidate matching.
                </p>
                <div className="pt-1 flex items-center gap-2 text-xs">
                  <span className="px-2 py-0.5 rounded bg-[#E0EBF2] text-[#1E3444] font-semibold text-[10px] tracking-wide uppercase border border-[#CCDCE6]">
                    ROLE
                  </span>
                  <span className="text-[#41535E] font-medium">Technical direction + team delivery</span>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Link
                to="/work/ottobon-jobs"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#1B6899] hover:text-[#124C71] transition-colors"
              >
                <span>Explore case study</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 03 / SAKHI */}
          <div className="flex flex-col justify-between group">
            <div>
              <SakhiPreview className="transition-transform group-hover:scale-[1.008] duration-200" />
              <div className="mt-5 space-y-2">
                <div className="text-xs font-mono font-bold text-[#7A5299] tracking-wider uppercase">
                  03 / SAKHI
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#172630] leading-snug">
                  Extending an existing application.
                </h3>
                <p className="text-sm text-[#52616B] leading-relaxed">
                  Confidence-based escalation within a patient workflow.
                </p>
                <div className="pt-1 flex items-center gap-2 text-xs">
                  <span className="px-2 py-0.5 rounded bg-[#EDE5F4] text-[#341F47] font-semibold text-[10px] tracking-wide uppercase border border-[#DDCEEA]">
                    ROLE
                  </span>
                  <span className="text-[#41535E] font-medium">Inherited system extension</span>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Link
                to="/work/sakhi"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#7A5299] hover:text-[#56366E] transition-colors"
              >
                <span>Explore case study</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 04 / FSM */}
          <div className="flex flex-col justify-between group">
            <div>
              <FsmPreview className="transition-transform group-hover:scale-[1.008] duration-200" />
              <div className="mt-5 space-y-2">
                <div className="text-xs font-mono font-bold text-[#8C673B] tracking-wider uppercase">
                  04 / FSM
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#172630] leading-snug">
                  Ownership beyond launch.
                </h3>
                <p className="text-sm text-[#52616B] leading-relaxed">
                  Field operations, access controls, route improvements.
                </p>
                <div className="pt-1 flex items-center gap-2 text-xs">
                  <span className="px-2 py-0.5 rounded bg-[#EDE5D8] text-[#3D3326] font-semibold text-[10px] tracking-wide uppercase border border-[#DDD3C2]">
                    ROLE
                  </span>
                  <span className="text-[#41535E] font-medium">Architecture + production support</span>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Link
                to="/work/fsm"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#8C673B] hover:text-[#674A27] transition-colors"
              >
                <span>Explore case study</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FEATURED PRODUCT DECISION (DARK SECTION) ===================== */}
      <section className="bg-[#132E37] text-white py-16 sm:py-20 border-y border-[#20404C]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Headline & Meta */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-[11px] font-mono font-bold tracking-widest text-[#5ED0C1] uppercase">
                INSIDE A PRODUCT DECISION
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-balance">
                When should the local model take over?
              </h2>
              <p className="text-sm sm:text-base text-[#9DB8C2]">
                Talent Ops / Model gateway
              </p>
              <div className="pt-2">
                <Link
                  to="/work/talent-ops#model-gateway"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5ED0C1] hover:text-[#9CF5EA] transition-colors"
                >
                  <span>Read implementation details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Table / Key-Value Grid */}
            <div className="lg:col-span-7 bg-[#1A3A45] rounded-xl border border-[#2D5361] p-5 sm:p-7 space-y-4">
              <div className="divide-y divide-[#284E5D] text-xs sm:text-sm">
                <div className="py-3 flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-4">
                  <span className="text-[#8FB3BF] font-semibold sm:w-28 shrink-0">Context</span>
                  <span className="text-[#E7EFF3] font-medium flex-1">Recurring internal queries</span>
                </div>
                <div className="py-3 flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-4">
                  <span className="text-[#8FB3BF] font-semibold sm:w-28 shrink-0">Decision</span>
                  <span className="text-[#E7EFF3] font-medium flex-1">
                    Expand local routing gradually; retain fallback
                  </span>
                </div>
                <div className="py-3 flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-4">
                  <span className="text-[#8FB3BF] font-semibold sm:w-28 shrink-0">Validation</span>
                  <span className="text-[#E7EFF3] font-medium flex-1">
                    Benchmark checks and performance reviews
                  </span>
                </div>
                <div className="py-3 flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-4">
                  <span className="text-[#8FB3BF] font-semibold sm:w-28 shrink-0">Outcome</span>
                  <span className="text-[#5ED0C1] font-semibold flex-1">
                    Approximately 65–70% of queries handled locally
                  </span>
                </div>
              </div>

              {/* Qualification footnote */}
              <div className="pt-2 border-t border-[#284E5D] text-[11px] text-[#87A0AC] italic leading-relaxed">
                User-reported operational figure. Traffic share does not establish equivalent cost savings.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== APPROACH ===================== */}
      <section id="approach" className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-[12px] font-bold tracking-wider text-[#14685D] uppercase mb-2">
            APPROACH
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#172630] leading-tight">
            Ownership is in the follow-through.
          </h2>
        </div>

        {/* 4 Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-[#F6F7F5] rounded-xl border border-[#DADFD9] space-y-2">
            <div className="text-xs font-mono font-bold text-[#14685D]">01</div>
            <h3 className="text-lg font-bold text-[#172630]">Understand</h3>
            <p className="text-sm text-[#52616B] leading-relaxed">
              Workflows and dependencies
            </p>
          </div>

          <div className="p-6 bg-[#F6F7F5] rounded-xl border border-[#DADFD9] space-y-2">
            <div className="text-xs font-mono font-bold text-[#14685D]">02</div>
            <h3 className="text-lg font-bold text-[#172630]">Decide</h3>
            <p className="text-sm text-[#52616B] leading-relaxed">
              Priorities and trade-offs
            </p>
          </div>

          <div className="p-6 bg-[#F6F7F5] rounded-xl border border-[#DADFD9] space-y-2">
            <div className="text-xs font-mono font-bold text-[#14685D]">03</div>
            <h3 className="text-lg font-bold text-[#172630]">Deliver</h3>
            <p className="text-sm text-[#52616B] leading-relaxed">
              Build and validate with the team
            </p>
          </div>

          <div className="p-6 bg-[#F6F7F5] rounded-xl border border-[#DADFD9] space-y-2">
            <div className="text-xs font-mono font-bold text-[#14685D]">04</div>
            <h3 className="text-lg font-bold text-[#172630]">Support</h3>
            <p className="text-sm text-[#52616B] leading-relaxed">
              Deploy, monitor, improve
            </p>
          </div>
        </div>
      </section>

      {/* ===================== ABOUT ===================== */}
      <section id="about" className="py-16 sm:py-20 border-t border-[#DADFD9] bg-[#F7F8F6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Bio */}
            <div className="lg:col-span-6 space-y-4">
              <div className="text-[12px] font-bold tracking-wider text-[#14685D] uppercase">
                ABOUT
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#172630] leading-tight">
                Technical depth. Product responsibility.
              </h2>
              <p className="text-base sm:text-lg text-[#52616B] leading-relaxed pt-1">
                {PROFILE.aboutCopy}
              </p>
            </div>

            {/* Right Column: Expandable Sections & Resume */}
            <div className="lg:col-span-6 space-y-3.5">
              {/* Expandable Experience */}
              <div className="bg-white rounded-xl border border-[#DADFD9] overflow-hidden transition-all shadow-xs">
                <button
                  type="button"
                  onClick={() => setExperienceExpanded(!experienceExpanded)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-[#F9FAF8] transition-colors"
                  aria-expanded={experienceExpanded}
                >
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-[#14685D]" />
                    <span className="font-bold text-base text-[#172630]">Experience</span>
                  </div>
                  {experienceExpanded ? (
                    <ChevronUp className="w-4 h-4 text-[#72828C]" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-[#72828C]" />
                  )}
                </button>

                {experienceExpanded && (
                  <div className="px-5 pb-5 pt-1 border-t border-[#EAEFEA] space-y-4 text-xs sm:text-sm text-[#52616B]">
                    {PROFILE.experience.map((exp, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                          <span className="font-bold text-[#172630] text-sm sm:text-base">
                            {exp.company}
                          </span>
                          <span className="text-xs text-[#70808C] font-mono">
                            {exp.period} · {exp.location}
                          </span>
                        </div>
                        <div className="text-[#14685D] font-semibold text-xs uppercase tracking-wide">
                          {exp.role}
                        </div>
                        <p className="text-[#41535E] leading-relaxed">
                          {exp.description}
                        </p>
                        <ul className="space-y-1.5 pt-1 text-xs">
                          {exp.achievements.map((ach, aIdx) => (
                            <li key={aIdx} className="flex items-start gap-2">
                              <span className="text-[#14685D] mt-0.5">•</span>
                              <span className="text-[#4D5E69] leading-relaxed">{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Expandable Credentials */}
              <div className="bg-white rounded-xl border border-[#DADFD9] overflow-hidden transition-all shadow-xs">
                <button
                  type="button"
                  onClick={() => setCredentialsExpanded(!credentialsExpanded)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-[#F9FAF8] transition-colors"
                  aria-expanded={credentialsExpanded}
                >
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-[#14685D]" />
                    <span className="font-bold text-base text-[#172630]">Credentials</span>
                  </div>
                  {credentialsExpanded ? (
                    <ChevronUp className="w-4 h-4 text-[#72828C]" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-[#72828C]" />
                  )}
                </button>

                {credentialsExpanded && (
                  <div className="px-5 pb-5 pt-1 border-t border-[#EAEFEA] space-y-3.5 text-xs sm:text-sm text-[#52616B]">
                    {PROFILE.credentials.map((cred, cIdx) => (
                      <div key={cIdx} className="border-b border-[#F0F4F0] pb-2.5 last:border-0 last:pb-0">
                        <div className="font-bold text-[#172630]">{cred.title}</div>
                        <div className="text-[11px] text-[#14685D] font-semibold">{cred.issuer}</div>
                        <p className="text-xs text-[#52616B] mt-0.5 leading-relaxed">{cred.description}</p>
                      </div>
                    ))}

                    <div className="pt-2 border-t border-[#EAEFEA]">
                      <div className="flex items-center gap-2 font-bold text-[#172630]">
                        <GraduationCap className="w-4 h-4 text-[#14685D]" />
                        <span>Education</span>
                      </div>
                      <div className="text-xs text-[#41535E] mt-1">
                        GITAM University — Bachelor of Technology in Computer Science (Oct 2021 – Apr 2025)
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Download Résumé Direct Card */}
              <a
                href={PROFILE.resumePath}
                target="_blank"
                rel="noreferrer"
                className="w-full p-4 sm:p-5 bg-white rounded-xl border border-[#DADFD9] flex items-center justify-between text-left hover:bg-[#F9FAF8] transition-colors shadow-xs group"
              >
                <div className="flex items-center gap-3">
                  <Download className="w-5 h-5 text-[#14685D]" />
                  <span className="font-bold text-base text-[#172630]">Download résumé</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#72828C] group-hover:text-[#172630] transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
