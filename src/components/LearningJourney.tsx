import React from 'react';
import { Target, ArrowUpRight, BookOpen, Sparkles, Code2, Globe, Cpu, CheckCircle2 } from 'lucide-react';
import { learningGoalsData, LearningGoal } from '../data/portfolioData';

export const LearningJourney: React.FC = () => {
  const getGoalIcon = (id: string) => {
    switch (id) {
      case 'python-cpp':
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'html-css-js':
        return <Globe className="w-5 h-5 text-purple-400" />;
      case 'practical-web':
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'ai-ml':
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
      case 'problem-solving':
        return <Target className="w-5 h-5 text-amber-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="learning" className="py-20 border-t border-slate-800/80 bg-[#07090e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-2">
            <span>Current Milestones</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">What I&apos;m Learning</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
            Active Learning Goals &amp; Growth Objectives
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            These are my current learning priorities as I progress through my computer science degree. Framed as active developmental targets rather than finished claims.
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningGoalsData.map((goal, index) => (
            <div
              key={goal.id}
              className="bg-[#0b101b] border border-slate-800/80 hover:border-slate-700 p-6 rounded-2xl flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5"
            >
              <div>
                {/* Unboxed Metadata Header */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4">
                  <span className="text-blue-400 font-semibold">Goal 0{index + 1}</span>
                  <span className="text-indigo-400">{goal.status}</span>
                </div>

                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-[#070b14] border border-slate-800/80 shrink-0">
                    {getGoalIcon(goal.id)}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block">
                      {goal.focusArea}
                    </span>
                    <h3 className="text-base font-bold text-white leading-snug">
                      {goal.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 space-y-2">
                  <span className="text-xs font-mono text-slate-400 block mb-1">Target Competencies:</span>
                  {goal.keyTopics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-blue-400 font-mono text-xs mt-0.5">›</span>
                      <span className="leading-normal">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/40 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>In Progress</span>
                <span>Semester Focus</span>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Banner */}
        <div className="mt-12 bg-[#090e1a] border border-slate-800/80 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white">Continuous Growth &amp; Open to Guidance</h4>
            <p className="text-xs sm:text-sm text-slate-400">
              I actively seek feedback, code reviews, and mentorship to refine my coding discipline and problem-solving habits.
            </p>
          </div>

          <a
            href="#contact"
            className="px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors whitespace-nowrap shrink-0"
          >
            Connect With Me
          </a>
        </div>
      </div>
    </section>
  );
};
