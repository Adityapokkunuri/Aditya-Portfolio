import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { getProjectBySlug } from '../data/projects';
import { TalentOpsPreview } from '../components/previews/TalentOpsPreview';
import { OttobonJobsPreview } from '../components/previews/OttobonJobsPreview';
import { SakhiPreview } from '../components/previews/SakhiPreview';
import { FsmPreview } from '../components/previews/FsmPreview';
import { ConceptualWorkflow } from '../components/ConceptualWorkflow';
import { PROFILE } from '../data/profile';

export const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const project = getProjectBySlug(slug || '');

  // Handle anchor scrolling on mount or hash change
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-[#172630]">Case study not found</h1>
        <p className="mt-2 text-[#52616B]">The requested project does not exist.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-[#14685D] text-white rounded-md text-sm font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to selected work</span>
        </Link>
      </div>
    );
  }

  // Render the appropriate interactive preview
  const renderPreview = () => {
    switch (project.diagramType) {
      case 'talent-ops':
        return <TalentOpsPreview className="max-w-3xl mx-auto" isInteractive={true} />;
      case 'ottobon-jobs':
        return <OttobonJobsPreview className="max-w-3xl mx-auto" isInteractive={true} />;
      case 'sakhi':
        return <SakhiPreview className="max-w-3xl mx-auto" isInteractive={true} />;
      case 'fsm':
        return <FsmPreview className="max-w-3xl mx-auto" isInteractive={true} />;
      default:
        return null;
    }
  };

  const navItems = [
    { id: 'context', label: 'Context' },
    { id: 'responsibility', label: 'My responsibility' },
    { id: 'decisions', label: 'Decisions' },
    { id: 'validation', label: 'Validation' },
    { id: 'takeaway', label: 'Takeaway' }
  ];

  return (
    <article className="bg-[#FAFAF7] text-[#172630] pb-20">
      {/* Top Back Navigation Bar */}
      <div className="border-b border-[#DADFD9] bg-[#FAFAF7]/80 sticky top-16 z-40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
          <Link
            to="/#selected-work"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#52616B] hover:text-[#172630] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#14685D]" />
            <span>Back to selected work</span>
          </Link>

          <span className="text-xs font-mono text-[#768691]">
            {project.number} / {project.name}
          </span>
        </div>
      </div>

      {/* Case Study Header Hero */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-8 sm:pb-12">
        <div className="text-xs sm:text-sm font-mono font-bold tracking-wider uppercase text-[#14685D] mb-3">
          {project.number} / {project.name}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#172630] leading-[1.15] text-balance">
          {project.title}
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-[#52616B] leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Responsibility Pill Strip */}
        <div className="mt-6 pt-5 border-t border-[#DADFD9] flex flex-wrap items-center gap-3 text-xs sm:text-sm">
          <span className="px-2.5 py-1 rounded bg-[#E8EFE9] text-[#14685D] font-bold text-[11px] tracking-wide uppercase border border-[#CFDFD1]">
            ROLE
          </span>
          <span className="font-semibold text-[#172630]">{project.role}</span>
        </div>
      </header>

      {/* Hero Visual Preview Component */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        {renderPreview()}
      </div>

      {/* Main Content Layout with Sticky Sidebar Index */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Desktop Sticky Index */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32 space-y-3 p-4 bg-[#F5F6F4] rounded-xl border border-[#DADFD9] text-xs">
              <div className="font-mono uppercase font-bold text-[#14685D] text-[10px] tracking-widest pb-1 border-b border-[#E1E5DF]">
                Contents
              </div>
              <nav className="flex flex-col space-y-1.5 font-medium text-[#52616B]">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="hover:text-[#14685D] py-1 transition-colors block text-[13px]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="pt-3 border-t border-[#E1E5DF]">
                <a
                  href={`mailto:${PROFILE.email}?subject=Regarding ${project.name}`}
                  className="text-[12px] font-semibold text-[#14685D] hover:underline flex items-center gap-1"
                >
                  <span>Discuss this work</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </aside>

          {/* Narrative Content: 65–75 characters per line for maximum editorial comfort */}
          <main className="lg:col-span-9 max-w-[70ch] space-y-12 text-[#172630]">
            {/* 1. Context */}
            <section id="context" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#172630] border-b border-[#E5EAE4] pb-2">
                Context
              </h2>
              {project.context.map((para, idx) => (
                <p key={idx} className="text-base sm:text-lg text-[#3C4A54] leading-[1.75]">
                  {para}
                </p>
              ))}
            </section>

            {/* 2. My responsibility */}
            <section id="responsibility" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#172630] border-b border-[#E5EAE4] pb-2">
                My responsibility
              </h2>
              {project.responsibility.map((para, idx) => (
                <p key={idx} className="text-base sm:text-lg text-[#3C4A54] leading-[1.75]">
                  {para}
                </p>
              ))}
            </section>

            {/* Conceptual Workflow Diagram */}
            <ConceptualWorkflow type={project.diagramType} />

            {/* 3. Decisions / Technical Details */}
            <section
              id="decisions"
              className="scroll-mt-32 space-y-4"
            >
              {/* Also anchor for #model-gateway on Talent Ops */}
              <div id="model-gateway" className="scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#172630] border-b border-[#E5EAE4] pb-2">
                  {project.decisions.title}
                </h2>
              </div>
              {project.decisions.paragraphs.map((para, idx) => (
                <p key={idx} className="text-base sm:text-lg text-[#3C4A54] leading-[1.75]">
                  {para}
                </p>
              ))}
            </section>

            {/* 4. Validation and iteration */}
            <section id="validation" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#172630] border-b border-[#E5EAE4] pb-2">
                Validation and iteration
              </h2>
              {project.validation.map((para, idx) => (
                <p key={idx} className="text-base sm:text-lg text-[#3C4A54] leading-[1.75]">
                  {para}
                </p>
              ))}
            </section>

            {/* 5. Takeaway */}
            <section id="takeaway" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#172630] border-b border-[#E5EAE4] pb-2">
                Takeaway
              </h2>
              {project.takeaway.map((para, idx) => (
                <p key={idx} className="text-base sm:text-lg text-[#3C4A54] leading-[1.75]">
                  {para}
                </p>
              ))}
            </section>

            {/* Technical Qualification Note */}
            {project.cautionNote && (
              <div className="p-4 rounded-lg bg-[#F2F4F2] border border-[#DADFD9] text-xs text-[#52616B] flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-[#14685D] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{project.cautionNote}</span>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Previous / Next Case Study Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-10 border-t border-[#DADFD9]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to={`/work/${project.prevSlug}`}
            className="flex items-center gap-2 text-sm font-semibold text-[#52616B] hover:text-[#172630] transition-colors p-2 rounded hover:bg-[#EFEFEA]"
          >
            <ArrowLeft className="w-4 h-4 text-[#14685D]" />
            <span>Previous: {project.prevName}</span>
          </Link>

          <Link
            to={`/work/${project.nextSlug}`}
            className="flex items-center gap-2 text-sm font-semibold text-[#52616B] hover:text-[#172630] transition-colors p-2 rounded hover:bg-[#EFEFEA]"
          >
            <span>Next: {project.nextName}</span>
            <ArrowRight className="w-4 h-4 text-[#14685D]" />
          </Link>
        </div>
      </div>
    </article>
  );
};
