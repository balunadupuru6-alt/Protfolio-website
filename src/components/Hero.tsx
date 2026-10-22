import React from 'react';
import { ArrowRight, Code, Sparkles, Mail, Terminal, MapPin, GraduationCap } from 'lucide-react';
import { HeroCodeWidget } from './HeroCodeWidget';

interface HeroProps {
  onExploreProjects: () => void;
  onViewSkills: () => void;
  onContactMe: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProjects,
  onViewSkills,
  onContactMe
}) => {
  return (
    <section id="home" className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typographic Presentation */}
          <div className="lg:col-span-6 space-y-6">
            {/* Clean unboxed status kicker (no pills) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
              <span className="text-blue-400 font-semibold">Joy University</span>
              <span aria-hidden="true">·</span>
              <span>CSE (Artificial Intelligence)</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-300">Completed First Year</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              Hi, I&apos;m Balu —{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Aspiring Software Developer.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              I&apos;m a Computer Science and Engineering (AI) student at Joy University, passionate about programming, web development, and exploring artificial intelligence. I enjoy building projects, learning new technologies, and turning ideas into working solutions.
            </p>

            {/* The 3 Required Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onExploreProjects}
                className="px-5 py-3 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/25 flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onViewSkills}
                className="px-5 py-3 rounded-lg text-sm font-semibold text-slate-200 bg-[#0c1220] hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
              >
                <Code className="w-4 h-4 text-blue-400" />
                <span>View My Skills</span>
              </button>

              <button
                type="button"
                onClick={onContactMe}
                className="px-5 py-3 rounded-lg text-sm font-semibold text-slate-300 hover:text-white bg-transparent hover:bg-slate-800/60 border border-slate-800 transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Micro Quick Bio Details */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-blue-400" />
                Joy University Student
              </span>
              <span className="flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-purple-400" />
                Python, C++, HTML/CSS/JS
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                AI &amp; Software Enthusiast
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Code Sandbox Widget */}
          <div className="lg:col-span-6 space-y-4">
            <HeroCodeWidget />
          </div>
        </div>

        {/* Status Strip below the Hero Split */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="bg-[#0b101b]/70 border border-slate-800/70 p-4 rounded-xl">
            <span className="text-xs font-mono text-slate-400 block mb-1">Academic Status</span>
            <span className="text-sm font-semibold text-white">Completed 1st Year</span>
            <span className="text-xs text-slate-500 block mt-0.5">Joy University</span>
          </div>

          <div className="bg-[#0b101b]/70 border border-slate-800/70 p-4 rounded-xl">
            <span className="text-xs font-mono text-slate-400 block mb-1">Degree Discipline</span>
            <span className="text-sm font-semibold text-white">CSE (Artificial Intelligence)</span>
            <span className="text-xs text-slate-500 block mt-0.5">Core Computing &amp; AI</span>
          </div>

          <div className="bg-[#0b101b]/70 border border-slate-800/70 p-4 rounded-xl">
            <span className="text-xs font-mono text-slate-400 block mb-1">Programming Focus</span>
            <span className="text-sm font-semibold text-white">Python &amp; C++</span>
            <span className="text-xs text-slate-500 block mt-0.5">Logic &amp; Problem Solving</span>
          </div>

          <div className="bg-[#0b101b]/70 border border-slate-800/70 p-4 rounded-xl">
            <span className="text-xs font-mono text-slate-400 block mb-1">Web Development</span>
            <span className="text-sm font-semibold text-white">HTML, CSS &amp; JavaScript</span>
            <span className="text-xs text-slate-500 block mt-0.5">Responsive Front-End</span>
          </div>
        </div>
      </div>
    </section>
  );
};
