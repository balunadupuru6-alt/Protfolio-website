import React from 'react';
import { BookOpen, Code, Compass, Lightbulb, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-slate-800/80 bg-[#07090e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-2">
            <span>About Me</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">Student Profile &amp; Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
            Building Strong Foundations in Computer Science &amp; AI
          </h2>
        </div>

        {/* Two-Column Grid: Narrative & Highlights + Workspace Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Authentic Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
            <p className="text-lg text-slate-200 font-normal leading-relaxed">
              I have completed my first year of <span className="text-white font-medium">Computer Science and Engineering (Artificial Intelligence)</span> at <span className="text-white font-medium">Joy University</span>. My academic journey is centered around developing solid programming fundamentals, exploring computational problem-solving, and understanding how modern software and intelligent systems are built.
            </p>

            <p>
              Right now, I am actively honing my programming skills in <span className="text-blue-400 font-mono">Python</span> and <span className="text-blue-400 font-mono">C++</span>, while learning front-end web development through <span className="text-purple-400 font-mono">HTML</span>, <span className="text-purple-400 font-mono">CSS</span>, and <span className="text-purple-400 font-mono">JavaScript</span>. I believe the most effective way to internalize concepts is by writing code and building small, purposeful projects — from command-line arithmetic utilities to responsive web pages.
            </p>

            <p>
              I bring genuine curiosity, a persistent willingness to learn, and a problem-solving mindset to everything I build. As a motivated first-year student, I am eager to collaborate with fellow developers, contribute to real-world software projects, and prepare for future internship opportunities where I can apply my growing knowledge and continue learning every day.
            </p>

            {/* Core Values / Strengths Grid */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#0b101b] border border-slate-800/80 p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <Lightbulb className="w-4 h-4 text-amber-400" />
                  Curiosity &amp; Fast Learner
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Constantly exploring new programming concepts, debugging logic, and turning lessons into working code.
                </p>
              </div>

              <div className="bg-[#0b101b] border border-slate-800/80 p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <Code className="w-4 h-4 text-blue-400" />
                  Practical Project Focus
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Reinforcing theoretical concepts by building practical tools like calculators and responsive web interfaces.
                </p>
              </div>

              <div className="bg-[#0b101b] border border-slate-800/80 p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <Compass className="w-4 h-4 text-emerald-400" />
                  Problem-Solving Mindset
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Approaching errors and logic puzzles methodically through step-by-step code tracing and structured thinking.
                </p>
              </div>

              <div className="bg-[#0b101b] border border-slate-800/80 p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <BookOpen className="w-4 h-4 text-purple-400" />
                  AI &amp; Software Dev Passion
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Passionate about the convergence of software engineering and emerging artificial intelligence paradigms.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Frame of Balu's Study & Workspace Setup */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#0a0f1d] group">
              <img
                src="/assets/images/balu_developer_workspace_1792649971347.jpg"
                alt="Developer workspace with code editors and monitors"
                referrerPolicy="no-referrer"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/40 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#090e1a]/85 backdrop-blur-md border border-slate-800/80 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-blue-400 font-semibold">Joy University</span>
                  <span>1st Year Completed</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  Balu · CSE (Artificial Intelligence)
                </div>
                <div className="text-xs text-slate-400">
                  Programming · Web Development · Machine Learning Aspirations
                </div>
              </div>
            </div>

            {/* Quick Check Highlights */}
            <div className="mt-4 bg-[#0b101b] border border-slate-800/80 p-4 rounded-xl space-y-2 text-xs text-slate-300">
              <div className="font-semibold text-white text-xs mb-1">Authentic Academic Status</div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Currently enrolled CSE (AI) student at Joy University</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Completed first year coursework in core programming &amp; mathematics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Actively seeking mentorship, developer connections &amp; internship roles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
