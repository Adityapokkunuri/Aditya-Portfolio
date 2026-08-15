import React, { useState, useEffect, useCallback } from 'react';
import { CustomCursor } from './components/CustomCursor.tsx';
import { Header } from './components/Header.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { StatementSection } from './components/StatementSection.tsx';
import { CaseStudyItem } from './components/CaseStudyItem.tsx';
import { StackSection } from './components/StackSection.tsx';
import { CredibilitySection } from './components/CredibilitySection.tsx';
import { ClosingSection } from './components/ClosingSection.tsx';
import { PROJECTS } from './data/portfolioData.ts';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [isDarkSection, setIsDarkSection] = useState(false);

  // Calculate scroll progress & active section
  const handleScroll = useCallback(() => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const currentProgress = totalHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / totalHeight)) : 0;
    setScrollProgress(currentProgress);

    // Section triggers
    const sections = [
      { id: 'hero', index: 0, dark: false },
      { id: 'statement', index: 1, dark: false },
      { id: 'project-sakhi', navId: 'projects', index: 2, dark: false },
      { id: 'project-talent-ops', navId: 'projects', index: 3, dark: true },
      { id: 'project-ottobon-jobs', navId: 'projects', index: 4, dark: false },
      { id: 'stack', index: 5, dark: false },
      { id: 'credibility', index: 5, dark: false },
      { id: 'contact', index: 6, dark: true },
    ];

    const scrollY = window.scrollY + window.innerHeight * 0.35;

    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i].id);
      if (el && el.offsetTop <= scrollY) {
        setActiveSection(sections[i].navId || sections[i].id);
        setActiveSectionIndex(sections[i].index);
        setIsDarkSection(sections[i].dark);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = (sectionId: string) => {
    let targetId = sectionId;
    if (sectionId === 'projects') {
      targetId = 'project-sakhi';
    }
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Determine current chapter info for the bottom dock
  const getCurrentChapterInfo = () => {
    if (activeSectionIndex === 0) {
      return { tag: '01 / 06', name: 'Overview', desc: 'Autonomous Reasoning & Cognitive Systems' };
    }
    if (activeSectionIndex === 1) {
      return { tag: '02 / 06', name: 'Philosophy', desc: 'Deterministic state boundaries & cognitive loops' };
    }
    if (activeSectionIndex === 2) {
      return { tag: '03 / 06', name: 'Sakhi', desc: 'Maternal health & clinical guidance RAG engine' };
    }
    if (activeSectionIndex === 3) {
      return { tag: '04 / 06', name: 'Talent Ops', desc: 'Gatekeeper vision QC & multimodal screening' };
    }
    if (activeSectionIndex === 4) {
      return { tag: '05 / 06', name: 'Ottobon Jobs', desc: 'Hexagonal architecture with 20+ scraper adapters' };
    }
    if (activeSectionIndex === 5) {
      return { tag: '06 / 06', name: 'Foundations', desc: 'Vector topologies, langgraph & trace observability' };
    }
    return { tag: '06 / 06', name: 'Connect', desc: 'Advisory & production architecture' };
  };

  const chapterInfo = getCurrentChapterInfo();

  return (
    <div className="relative w-full min-h-screen bg-[#F2EDE4] text-[#1C1A17]">
      {/* Subtle paper/film noise grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Minimal custom magnetic cursor */}
      <CustomCursor />

      {/* Quiet Top Header */}
      <Header
        activeSection={activeSection}
        isDarkSection={isDarkSection}
        onNavigate={scrollToSection}
      />

      {/* Vertical Structural Side Rail (Desktop Editorial Signature >= 1280px) */}
      <aside
        aria-hidden="true"
        className={`fixed right-0 top-0 h-full w-14 xl:w-16 border-l transition-colors duration-700 hidden xl:flex flex-col justify-between items-center py-12 pointer-events-none z-30 select-none ${
          isDarkSection ? 'border-[#FAF7F2]/10 text-[#FAF7F2]' : 'border-[#1C1A17]/8 text-[#1C1A17]'
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] writing-vertical text-[#B5502F] font-medium">
            Systems Architecture
          </span>
          <div className={`w-[1px] h-10 transition-colors duration-700 ${isDarkSection ? 'bg-[#FAF7F2]/15' : 'bg-[#1C1A17]/15'}`} />
        </div>

        <div className="flex flex-col items-center my-auto py-6">
          <span className={`font-mono text-[9px] uppercase tracking-[0.22em] writing-vertical transition-colors duration-700 ${
            isDarkSection ? 'text-[#A8A093]' : 'text-[#7A7266]'
          }`}>
            Multi-Agent Systems • Dual-LLM Orchestration • Production RAG
          </span>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className={`w-[1px] h-10 transition-colors duration-700 ${isDarkSection ? 'bg-[#FAF7F2]/15' : 'bg-[#1C1A17]/15'}`} />
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] writing-vertical opacity-40">
            SF 37°N 122°W
          </span>
        </div>
      </aside>

      {/* Bottom Floating Chapter Indicator Strip (Tablet & Desktop >= 768px) */}
      <div
        className={`fixed bottom-6 left-6 sm:left-10 z-30 transition-all duration-500 pointer-events-none hidden md:flex items-center space-x-4 px-4 py-2.5 rounded-full border backdrop-blur-md max-w-[calc(100vw-3rem)] ${
          isDarkSection
            ? 'bg-[#1C1A17]/85 border-[#2D2924] text-[#FAF7F2]'
            : 'bg-[#F2EDE4]/85 border-[#1C1A17]/10 text-[#1C1A17]'
        }`}
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#B5502F] font-medium shrink-0">
          {chapterInfo.tag}
        </span>
        <div className={`w-[1px] h-3 shrink-0 ${isDarkSection ? 'bg-white/20' : 'bg-black/20'}`} />
        <span className="font-serif italic text-sm shrink-0">{chapterInfo.name}</span>
        <span className={`text-[11px] font-light truncate hidden lg:inline max-w-[200px] xl:max-w-[280px] ${isDarkSection ? 'text-[#8E867A]' : 'text-[#6E675D]'}`}>
          {chapterInfo.desc}
        </span>
      </div>

      {/* Main Content Flow */}
      <main className="relative z-10 w-full overflow-hidden">
        {/* Chapter 01: Hero */}
        <HeroSection onScrollNext={() => scrollToSection('statement')} />

        {/* Chapter 02: Architectural Thesis */}
        <StatementSection />

        {/* Chapter 03: Selected Work Case Studies */}
        <div id="projects" className="w-full">
          {PROJECTS.map((project, index) => (
            <CaseStudyItem
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Chapter 04: Technical Stack & Foundations */}
        <StackSection />

        {/* Chapter 05: Verified Credentials */}
        <CredibilitySection />

        {/* Chapter 06: Contact & Advisory */}
        <ClosingSection onScrollToTop={() => scrollToSection('hero')} />
      </main>
    </div>
  );
}
