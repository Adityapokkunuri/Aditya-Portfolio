import React, { useState } from 'react';
import { STACK_CATEGORIES } from '../data/portfolioData.ts';
import { Layers, ArrowRight } from 'lucide-react';

export const StackSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const activeCategoryData = STACK_CATEGORIES[selectedCategory];

  return (
    <section
      id="stack"
      className="relative min-h-screen w-full flex flex-col justify-center py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto z-10"
    >
      {/* Chapter Marker */}
      <div className="flex items-center space-x-3 mb-8 sm:mb-12">
        <span className="font-mono-tag text-xs uppercase tracking-[0.2em] text-[#B5502F]">
          04 / Cognitive Foundations & Architecture
        </span>
        <div className="h-px w-12 bg-[#D5CCC0]" />
      </div>

      {/* Section Header */}
      <div className="max-w-3xl mb-10 sm:mb-16">
        <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#1C1A17] mb-4 sm:mb-6">
          Architectural Topology & Technical Stack
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-[#554E45] font-light leading-relaxed">
          A disciplined composition of orchestration graphs, state-isolation protocols, hybrid vector topologies, and deterministic evaluation gates.
        </p>
      </div>

      {/* Editorial Category Tabs */}
      <div className="flex flex-wrap gap-2 sm:gap-3 pb-6 sm:pb-8 border-b border-[#DED7CB] mb-8 sm:mb-12">
        {STACK_CATEGORIES.map((cat, idx) => {
          const isSelected = selectedCategory === idx;
          return (
            <button
              key={cat.number}
              onClick={() => setSelectedCategory(idx)}
              data-magnetic="true"
              className={`flex items-center space-x-2 sm:space-x-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-mono-tag uppercase tracking-wider min-h-[40px] sm:min-h-[44px] transition-all duration-300 focus:outline-none ${
                isSelected
                  ? 'bg-[#1C1A17] text-[#FAF7F2]'
                  : 'bg-[#FAF7F2] text-[#696154] hover:text-[#1C1A17] hover:bg-[#EAE3D5] border border-[#E0D8CC]'
              }`}
            >
              <span className={isSelected ? 'text-[#B5502F]' : 'text-[#8E867A]'}>
                {cat.number}
              </span>
              <span>{cat.category}</span>
            </button>
          );
        })}
      </div>

      {/* Category Content: Refined Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
        {/* Left Overview */}
        <div className="lg:col-span-4 space-y-3 sm:space-y-4">
          <div className="font-mono-tag text-xs text-[#B5502F] tracking-widest uppercase">
            Pillar {activeCategoryData.number}
          </div>
          <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#1C1A17]">
            {activeCategoryData.category}
          </h3>
          <p className="text-sm text-[#665F54] leading-relaxed">
            {activeCategoryData.description}
          </p>
        </div>

        {/* Right Skills Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {activeCategoryData.skills.map((skill) => {
            const isHovered = hoveredSkill === skill.name;
            return (
              <div
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`p-5 sm:p-6 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? 'border-[#B5502F]/60 bg-[#FAF7F2] shadow-sm sm:-translate-y-0.5'
                    : 'border-[#E0D8CC] bg-[#FAF7F2]/60 hover:border-[#D0C7B9]'
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-editorial text-lg sm:text-xl font-medium text-[#1C1A17]">
                      {skill.name}
                    </span>
                    <span className="font-mono-tag text-[10px] uppercase tracking-wider text-[#B5502F] px-2 py-0.5 rounded bg-[#B5502F]/10">
                      {skill.role}
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6357] leading-relaxed mt-2">
                    {skill.context}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
