import React, { useState } from 'react';
import {
  Code2,
  Cpu,
  FileCode,
  Palette,
  Braces,
  Layout,
  Terminal,
  CheckCircle2,
  Bug,
  Sparkles
} from 'lucide-react';
import { skillsData, SkillItem } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'languages' | 'web' | 'practical'>('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  const renderIcon = (name: string) => {
    const props = { className: "w-5 h-5 text-blue-400" };
    switch (name) {
      case 'Code2': return <Code2 {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'FileCode': return <FileCode {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'Braces': return <Braces {...props} />;
      case 'Layout': return <Layout {...props} />;
      case 'Terminal': return <Terminal {...props} />;
      case 'CheckCircle2': return <CheckCircle2 {...props} />;
      case 'Bug': return <Bug {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  const getStatusColor = (status: SkillItem['status']) => {
    switch (status) {
      case 'Practicing':
        return 'text-blue-400';
      case 'Learning':
        return 'text-indigo-400';
      case 'Familiar With':
        return 'text-emerald-400';
      default:
        return 'text-slate-400';
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-slate-800/80 bg-[#07090e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-2">
              <span>Technical Skills</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">Current Competencies</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
              Programming Languages, Web &amp; Fundamentals
            </h2>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              Honest proficiency indicators reflecting my first-year coursework and practical self-directed coding practice. No fabricated seniority or arbitrary percentage bars.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#0b101b] border border-slate-800 rounded-xl overflow-x-auto shrink-0">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Skills ({skillsData.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('languages')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === 'languages'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Languages (2)
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('web')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === 'web'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Web Dev (3)
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('practical')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === 'practical'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Tools &amp; Practical (4)
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="bg-[#0b101b] border border-slate-800/80 hover:border-slate-700 p-5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between"
            >
              <div>
                {/* Card Header with Unboxed Metadata */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-[#070b14] border border-slate-800/80">
                    {renderIcon(skill.iconName)}
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block">
                      {skill.category === 'languages'
                        ? 'Language'
                        : skill.category === 'web'
                        ? 'Web Tech'
                        : 'Fundamentals'}
                    </span>
                    <span className={`text-xs font-medium ${getStatusColor(skill.status)}`}>
                      {skill.status}
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-semibold text-white mb-2">
                  {skill.name}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Practical Application context */}
              <div className="pt-3 border-t border-slate-800/60 text-[11px] text-slate-400 flex items-start gap-1.5">
                <span className="text-blue-400 font-semibold shrink-0">Applied:</span>
                <span>{skill.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Status Legend */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-6">
            <span className="text-slate-500 font-medium">Proficiency Scale:</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <strong className="text-slate-300">Practicing:</strong> Writing code frequently &amp; applying to small projects
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              <strong className="text-slate-300">Learning:</strong> Actively studying syntax, mechanics &amp; patterns
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <strong className="text-slate-300">Familiar With:</strong> Core principles understood &amp; used in coursework
            </span>
          </div>

          <span className="text-slate-500 italic">
            Joy University CSE (AI) · First Year Curriculum
          </span>
        </div>
      </div>
    </section>
  );
};
