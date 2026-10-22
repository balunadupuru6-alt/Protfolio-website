import React, { useState } from 'react';
import { Layers, MousePointerClick, Smartphone, Monitor } from 'lucide-react';

export const WebPracticeShowcase: React.FC = () => {
  const [activePractice, setActivePractice] = useState<'dom' | 'flexbox' | 'responsive'>('dom');

  // DOM Practice state
  const [count, setCount] = useState<number>(0);
  const [themeMode, setThemeMode] = useState<'slate' | 'indigo' | 'emerald'>('indigo');
  const [todoInput, setTodoInput] = useState<string>('');
  const [todos, setTodos] = useState<string[]>([
    "Practice CSS Flexbox alignment",
    "Review JavaScript event listeners",
    "Build accessible HTML form"
  ]);

  // Flexbox visualizer state
  const [justifyContent, setJustifyContent] = useState<string>('space-between');
  const [alignItems, setAlignItems] = useState<string>('center');

  // Responsive device view simulation
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!todoInput.trim()) return;
    setTodos(prev => [...prev, todoInput.trim()]);
    setTodoInput('');
  };

  const handleRemoveTodo = (index: number) => {
    setTodos(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-[#0b101b] border border-slate-800/80 rounded-xl overflow-hidden shadow-2xl">
      {/* Titlebar */}
      <div className="px-4 py-3 bg-[#080d16] border-b border-slate-800/70 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-xs font-mono text-slate-400 ml-2">web_practice_lab.html — HTML/CSS/JS</span>
        </div>

        <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800">
          <button
            type="button"
            onClick={() => setActivePractice('dom')}
            className={`px-3 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap ${
              activePractice === 'dom'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            JS DOM Interaction
          </button>
          <button
            type="button"
            onClick={() => setActivePractice('flexbox')}
            className={`px-3 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap ${
              activePractice === 'flexbox'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            CSS Flexbox Lab
          </button>
          <button
            type="button"
            onClick={() => setActivePractice('responsive')}
            className={`px-3 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap ${
              activePractice === 'responsive'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Responsive Viewport
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        {/* Practice 1: DOM Manipulation & State */}
        {activePractice === 'dom' && (
          <div className="space-y-5">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <MousePointerClick className="w-3.5 h-3.5 text-blue-400" />
                Exercise: Event Listeners, State &amp; Dynamic List Rendering
              </span>
              <span className="font-mono text-slate-500">vanilla_js_practice</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Mini Counter & Theme Switcher */}
              <div className="bg-[#070b13] border border-slate-800/80 rounded-lg p-4 space-y-4">
                <div>
                  <h4 className="text-xs font-medium text-slate-300 mb-1">State Counter &amp; Styling</h4>
                  <p className="text-xs text-slate-500">Testing increment/decrement click handlers and dynamic classes.</p>
                </div>

                <div className="flex items-center justify-between bg-[#0b101b] p-3 rounded-lg border border-slate-800">
                  <span className="text-xs font-mono text-slate-400">Current Count:</span>
                  <span className="text-xl font-bold font-mono text-blue-400">{count}</span>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setCount(c => c - 1)}
                      className="w-7 h-7 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm transition-colors"
                    >
                      -
                    </button>
                    <button
                      type="button"
                      onClick={() => setCount(0)}
                      className="px-2 h-7 rounded bg-slate-900 border border-slate-800 text-xs text-slate-400 hover:text-slate-200 transition-colors"
                    >
                      Reset
                    </button>
                    <button
                      type="button"
                      onClick={() => setCount(c => c + 1)}
                      className="w-7 h-7 rounded bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">Accent Theme Selector</label>
                  <div className="flex items-center gap-2">
                    {(['indigo', 'emerald', 'slate'] as const).map(mode => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setThemeMode(mode)}
                        className={`text-xs capitalize px-2.5 py-1 rounded border transition-colors ${
                          themeMode === mode
                            ? 'border-blue-500 bg-blue-500/20 text-blue-300'
                            : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mini Dynamic List */}
              <div className="bg-[#070b13] border border-slate-800/80 rounded-lg p-4 space-y-3">
                <div>
                  <h4 className="text-xs font-medium text-slate-300 mb-1">Dynamic Task Tracker</h4>
                  <p className="text-xs text-slate-500">Practicing array mutation, form submission, and DOM cleanup.</p>
                </div>

                <form onSubmit={handleAddTodo} className="flex gap-2">
                  <input
                    type="text"
                    value={todoInput}
                    onChange={(e) => setTodoInput(e.target.value)}
                    placeholder="Add practice task..."
                    className="flex-1 bg-[#0b101b] border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium rounded transition-colors whitespace-nowrap"
                  >
                    Add
                  </button>
                </form>

                <div className="space-y-1.5 max-h-36 overflow-y-auto">
                  {todos.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs bg-[#0b101b] px-2.5 py-1.5 rounded border border-slate-800/60">
                      <span className="text-slate-300 truncate">{item}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveTodo(idx)}
                        className="text-slate-500 hover:text-rose-400 ml-2 transition-colors"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                  {todos.length === 0 && (
                    <div className="text-xs text-slate-500 text-center py-2">No tasks added yet</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Practice 2: CSS Flexbox Lab */}
        {activePractice === 'flexbox' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-blue-400" />
                Exercise: Flexbox Alignment &amp; Spacing Properties
              </span>
              <span className="font-mono text-slate-500">css_layout_lab</span>
            </div>

            {/* Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#070b13] p-3 rounded-lg border border-slate-800">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">justify-content</label>
                <div className="flex flex-wrap gap-1">
                  {['flex-start', 'center', 'flex-end', 'space-between', 'space-around'].map(val => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setJustifyContent(val)}
                      className={`text-xs px-2 py-1 rounded transition-colors ${
                        justifyContent === val
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
                      }`}
                    >
                      {val}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">align-items</label>
                <div className="flex flex-wrap gap-1">
                  {['flex-start', 'center', 'flex-end', 'stretch'].map(val => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setAlignItems(val)}
                      className={`text-xs px-2 py-1 rounded transition-colors ${
                        alignItems === val
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
                      }`}
                    >
                      {val}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Preview Box */}
            <div
              className="bg-[#05080f] border border-dashed border-slate-800 rounded-lg p-4 h-44 flex gap-3 transition-all"
              style={{
                justifyContent: justifyContent,
                alignItems: alignItems
              }}
            >
              <div className="w-16 h-14 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center font-mono text-xs font-bold text-white shadow-lg">
                Item 1
              </div>
              <div className="w-16 h-20 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-lg flex items-center justify-center font-mono text-xs font-bold text-white shadow-lg">
                Item 2
              </div>
              <div className="w-16 h-12 bg-gradient-to-br from-purple-600 to-pink-700 rounded-lg flex items-center justify-center font-mono text-xs font-bold text-white shadow-lg">
                Item 3
              </div>
            </div>

            <div className="text-xs font-mono text-slate-500">
              Generated CSS: <span className="text-blue-400">display: flex; justify-content: {justifyContent}; align-items: {alignItems};</span>
            </div>
          </div>
        )}

        {/* Practice 3: Responsive Viewport Simulation */}
        {activePractice === 'responsive' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Monitor className="w-3.5 h-3.5 text-blue-400" />
                Exercise: Breakpoint Adaptation &amp; Fluid Typography
              </span>
              <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded border border-slate-800">
                <button
                  type="button"
                  onClick={() => setDeviceView('desktop')}
                  className={`flex items-center gap-1 px-2 py-0.5 rounded text-xs transition-colors ${
                    deviceView === 'desktop' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Monitor className="w-3 h-3" />
                  Desktop View
                </button>
                <button
                  type="button"
                  onClick={() => setDeviceView('mobile')}
                  className={`flex items-center gap-1 px-2 py-0.5 rounded text-xs transition-colors ${
                    deviceView === 'mobile' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3 h-3" />
                  Mobile View
                </button>
              </div>
            </div>

            {/* Container that toggles between full width and mobile width */}
            <div className="flex justify-center bg-[#05080f] p-4 rounded-lg border border-slate-900 min-h-[220px]">
              <div
                className={`transition-all duration-300 bg-[#0c121e] border border-slate-800 rounded-lg p-3.5 space-y-3 ${
                  deviceView === 'mobile' ? 'w-[280px]' : 'w-full max-w-xl'
                }`}
              >
                <div className="flex items-center justify-between border-b border-slate-800/70 pb-2">
                  <span className="text-xs font-semibold text-slate-200">Sample Web Card</span>
                  <span className="text-[10px] font-mono text-blue-400">
                    {deviceView === 'mobile' ? '375px @mobile' : '1024px @desktop'}
                  </span>
                </div>

                <div className={`grid gap-2 ${deviceView === 'mobile' ? 'grid-cols-1' : 'grid-cols-3'}`}>
                  <div className="bg-[#070b13] p-2.5 rounded border border-slate-800/80">
                    <span className="text-[11px] font-medium text-slate-300 block mb-1">Header Box</span>
                    <span className="text-[10px] text-slate-500">Semantic &lt;header&gt; hierarchy</span>
                  </div>
                  <div className="bg-[#070b13] p-2.5 rounded border border-slate-800/80">
                    <span className="text-[11px] font-medium text-slate-300 block mb-1">Main Content</span>
                    <span className="text-[10px] text-slate-500">Adaptive fluid column flow</span>
                  </div>
                  <div className="bg-[#070b13] p-2.5 rounded border border-slate-800/80">
                    <span className="text-[11px] font-medium text-slate-300 block mb-1">Sidebar Panel</span>
                    <span className="text-[10px] text-slate-500">Collapses under on mobile</span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 leading-normal">
                  Testing fluid responsiveness using CSS Media Queries and modern CSS Grid auto-fit strategies.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
