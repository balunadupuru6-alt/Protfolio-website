import React, { useState } from 'react';
import {
  Code,
  Github,
  ExternalLink,
  Plus,
  Play,
  CheckCircle2,
  Sparkles,
  Terminal,
  FolderGit2
} from 'lucide-react';
import { projectsData, upcomingProjectsData, ProjectItem } from '../data/portfolioData';
import { PythonCalculatorSimulator } from './PythonCalculatorSimulator';
import { WebPracticeShowcase } from './WebPracticeShowcase';

interface ProjectsProps {
  customGithubUrls?: {
    pythonCalc?: string;
    webPractice?: string;
  };
  onEditRepo?: (projectId: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  customGithubUrls,
  onEditRepo
}) => {
  const [activeInteractive, setActiveInteractive] = useState<'calc' | 'web' | null>('calc');
  const [upcomingList, setUpcomingList] = useState<ProjectItem[]>(upcomingProjectsData);
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    tagline: '',
    technologies: '',
    features: ''
  });

  const handleAddCustomProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title.trim()) return;

    const created: ProjectItem = {
      id: `custom-${Date.now()}`,
      title: newProject.title.trim(),
      tagline: newProject.tagline.trim() || 'Upcoming learning exploration in CSE & AI',
      description: `Self-directed project planned for development: ${newProject.title}`,
      technologies: newProject.technologies.split(',').map(t => t.trim()).filter(Boolean),
      features: newProject.features.split('\n').map(f => f.trim()).filter(Boolean),
      image: '',
      githubUrl: 'https://github.com/balunadupuru',
      isUpcoming: true
    };

    setUpcomingList(prev => [created, ...prev]);
    setNewProject({ title: '', tagline: '', technologies: '', features: '' });
    setShowAddProjectModal(false);
  };

  return (
    <section id="projects" className="py-20 border-t border-slate-800/80 bg-[#07090e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-2">
            <span>Portfolio Showcase</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">Featured &amp; Practice Projects</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
            Real Work, Practice Repositories &amp; Roadmaps
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            Hands-on projects developed during my first year of computer science study. Each project is focused on building practical programming fluency, code cleanliness, and problem-solving skills.
          </p>
        </div>

        {/* Featured Project 1: Python Calculator */}
        <div className="bg-[#090e1a] border border-slate-800/90 rounded-2xl p-6 sm:p-8 mb-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Details & Information */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1.5">
                  <span className="text-blue-400 font-semibold">Project 01</span>
                  <span aria-hidden="true">·</span>
                  <span>Python Arithmetic Tool</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-400">Functional &amp; Tested</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Python Calculator
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  Modular arithmetic computational tool with input validation
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                A calculator project developed using <strong className="text-white">Python</strong> to perform basic arithmetic operations. Built with a clean command-line interface, modular math function design, and comprehensive exception handling against illegal operations like division and modulo by zero.
              </p>

              {/* Technologies unboxed list */}
              <div>
                <span className="text-xs font-mono text-slate-500 block mb-2 uppercase tracking-wider">
                  Technologies &amp; Architecture
                </span>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-300">
                  <span className="text-blue-400 font-mono">Python 3.11</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>CLI Input Parsing</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>Modular Functions</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>Zero-Division Error Handling</span>
                </div>
              </div>

              {/* Features List */}
              <div>
                <span className="text-xs font-mono text-slate-500 block mb-2 uppercase tracking-wider">
                  Key Implemented Features
                </span>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>Performs core arithmetic: addition (+), subtraction (-), multiplication (*), division (/), and modulo (%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>Robust error handling: catches division by zero with descriptive user feedback</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>Reusable function mapping dictionary that makes adding new math operations trivial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>Clean formatting with automated rounding to 4 decimal places for floating-point calculations</span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={customGithubUrls?.pythonCalc || projectsData[0].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg text-xs font-semibold text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Source Code</span>
                </a>

                <button
                  type="button"
                  onClick={() => setActiveInteractive('calc')}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                    activeInteractive === 'calc'
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'bg-[#0f172a] text-slate-300 hover:text-white border border-slate-800'
                  }`}
                >
                  <Terminal className="w-4 h-4" />
                  <span>Interactive Simulator</span>
                </button>
              </div>

              {onEditRepo && (
                <div className="text-[11px] text-slate-500">
                  Configurable GitHub URL:{' '}
                  <span className="font-mono text-slate-400">{customGithubUrls?.pythonCalc || projectsData[0].githubUrl}</span>
                </div>
              )}
            </div>

            {/* Right Column: Live Simulator + Project Screenshot */}
            <div className="lg:col-span-7 space-y-4">
              <PythonCalculatorSimulator />
            </div>
          </div>
        </div>

        {/* Featured Project 2: Web Development Practice */}
        <div className="bg-[#090e1a] border border-slate-800/90 rounded-2xl p-6 sm:p-8 mb-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Details & Information */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1.5">
                  <span className="text-purple-400 font-semibold">Project 02</span>
                  <span aria-hidden="true">·</span>
                  <span>Front-End Practice Repository</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-blue-400">Active Practice</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Web Development Practice
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  Collection of practice exercises using HTML, CSS, and JavaScript
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                A hands-on collection of practice exercises and web development work using <strong className="text-white">HTML, CSS, and JavaScript</strong>. Exercises focus on mastering structural HTML semantics, modern CSS Flexbox and responsive layouts, and writing clean JavaScript event handlers for interactive user interactions.
              </p>

              {/* Technologies unboxed list */}
              <div>
                <span className="text-xs font-mono text-slate-500 block mb-2 uppercase tracking-wider">
                  Technologies
                </span>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-300">
                  <span className="text-purple-400 font-mono">HTML5 Semantic Elements</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="text-purple-400 font-mono">CSS3 Flexbox &amp; Grid</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="text-purple-400 font-mono">JavaScript DOM APIs</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>Responsive Media Queries</span>
                </div>
              </div>

              {/* Features List */}
              <div>
                <span className="text-xs font-mono text-slate-500 block mb-2 uppercase tracking-wider">
                  Practice Focus Areas
                </span>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>Constructing semantic page outlines with proper headings, sections, and nav elements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>Implementing responsive layouts with CSS Flexbox alignment and mobile breakpoints</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>Attaching interactive DOM event listeners for buttons, dynamic counters, and form inputs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>Testing browser compatibility and layout adaptability across desktop and mobile views</span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={customGithubUrls?.webPractice || projectsData[1].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg text-xs font-semibold text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              </div>

              {onEditRepo && (
                <div className="text-[11px] text-slate-500">
                  Configurable Repository URL:{' '}
                  <span className="font-mono text-slate-400">{customGithubUrls?.webPractice || projectsData[1].githubUrl}</span>
                </div>
              )}
            </div>

            {/* Right Column: Web Practice Interactive Sandbox */}
            <div className="lg:col-span-7 space-y-4">
              <WebPracticeShowcase />
            </div>
          </div>
        </div>

        {/* Project 3: Future Projects & Roadmap */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 border-t border-slate-800/80 pt-12">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-1">
                <span>Learning Horizon</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400">Future Projects</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Upcoming Projects in Programming &amp; Artificial Intelligence
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                As I continue my computer science studies and explore machine learning, these are the projects currently on my learning roadmap.
              </p>
            </div>

            {/* Add Custom Project Button */}
            <button
              type="button"
              onClick={() => setShowAddProjectModal(true)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0c1220] hover:bg-slate-800 border border-slate-700 text-xs font-medium text-slate-200 transition-colors shrink-0"
            >
              <Plus className="w-3.5 h-3.5 text-blue-400" />
              <span>Draft New Roadmap Project</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingList.map((item) => (
              <div
                key={item.id}
                className="bg-[#0b101b] border border-slate-800/80 hover:border-slate-700 p-6 rounded-xl flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                    <span className="text-indigo-400">Planned Development</span>
                    <span>Roadmap</span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 mb-4">
                    {item.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-slate-300">
                        <span className="text-slate-500 font-mono text-[11px]">•</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs">
                  <div className="flex flex-wrap gap-1 text-slate-400 font-mono text-[11px]">
                    {item.technologies.map((tech, idx) => (
                      <span key={idx}>
                        {tech}{idx < item.technologies.length - 1 ? ' ·' : ''}
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-500 italic">Coming Next</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for drafting a future project */}
        {showAddProjectModal && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#0b101b] border border-slate-700 rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h4 className="text-base font-bold text-white">Add Roadmap Project</h4>
                <button
                  type="button"
                  onClick={() => setShowAddProjectModal(false)}
                  className="text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleAddCustomProject} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Project Title</label>
                  <input
                    type="text"
                    required
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                    placeholder="e.g. Basic Neural Network from Scratch"
                    className="w-full bg-[#070b13] border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Brief Tagline</label>
                  <input
                    type="text"
                    value={newProject.tagline}
                    onChange={(e) => setNewProject({ ...newProject, tagline: e.target.value })}
                    placeholder="e.g. Understanding matrix math and forward propagation"
                    className="w-full bg-[#070b13] border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Technologies (comma separated)</label>
                  <input
                    type="text"
                    value={newProject.technologies}
                    onChange={(e) => setNewProject({ ...newProject, technologies: e.target.value })}
                    placeholder="e.g. Python, NumPy, Linear Algebra"
                    className="w-full bg-[#070b13] border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Key Focus Areas (one per line)</label>
                  <textarea
                    rows={3}
                    value={newProject.features}
                    onChange={(e) => setNewProject({ ...newProject, features: e.target.value })}
                    placeholder="Exploring matrix operations&#10;Coding activation functions&#10;Evaluating loss function behavior"
                    className="w-full bg-[#070b13] border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddProjectModal(false)}
                    className="px-3 py-2 text-xs text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors"
                  >
                    Add to Roadmap
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
