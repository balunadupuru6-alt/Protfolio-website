import React from 'react';
import { GraduationCap, BookOpen, Calendar, CheckCircle2, Award } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-t border-slate-800/80 bg-[#07090e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-2">
            <span>Academic Background</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">Formal Education</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
            Education &amp; University Foundation
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            A structured look into my computer science curriculum and foundational coursework at Joy University.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-4xl bg-[#090e1a] border border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-800/80 pb-6 mb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
                <GraduationCap className="w-4 h-4" />
                <span>Undergraduate Program</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Joy University
              </h3>
              <p className="text-sm font-medium text-slate-300">
                B.Tech in Computer Science and Engineering (Artificial Intelligence)
              </p>
            </div>

            <div className="text-left md:text-right">
              <div className="text-xs font-mono text-slate-400">Academic Status</div>
              <div className="text-sm font-semibold text-emerald-400">
                Completed First Year
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                Active Student
              </div>
            </div>
          </div>

          {/* Core First-Year Narrative */}
          <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
            <p>
              During my first year in Computer Science and Engineering (Artificial Intelligence) at Joy University, I focused on building rock-solid mathematical and algorithmic fundamentals. The curriculum provided comprehensive exposure to structured programming, computational thinking, and software design principles.
            </p>

            <p>
              Alongside formal university coursework, I dedicated personal study to translating theory into real-world practice by mastering Python scripting, understanding memory and pointer concepts in C++, and exploring the foundations of front-end web development with HTML, CSS, and modern JavaScript.
            </p>
          </div>

          {/* First Year Subject & Topic Pillars */}
          <div className="mt-8 pt-6 border-t border-slate-800/80">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-4">
              First Year Core Subject Areas &amp; Fundamentals
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#0b101b] border border-slate-800/80 p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-xs">
                  <BookOpen className="w-4 h-4 text-blue-400" />
                  Programming Fundamentals
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Structured programming syntax, functions, loops, control structures, and basic data manipulation in Python and C++.
                </p>
              </div>

              <div className="bg-[#0b101b] border border-slate-800/80 p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-xs">
                  <BookOpen className="w-4 h-4 text-purple-400" />
                  Mathematics &amp; Logic
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Foundational discrete mathematics, calculus, linear algebra, and logical reasoning essential for future AI studies.
                </p>
              </div>

              <div className="bg-[#0b101b] border border-slate-800/80 p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-xs">
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                  Computing Concepts
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Computer systems architecture, digital logic gates, file systems, and problem-solving methodologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
