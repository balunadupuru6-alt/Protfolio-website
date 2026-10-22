import React, { useState } from 'react';
import { Play, Terminal, Check } from 'lucide-react';

export const HeroCodeWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'python' | 'cpp' | 'js'>('python');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [hasRun, setHasRun] = useState<boolean>(false);

  const snippets = {
    python: {
      fileName: "calculator.py",
      language: "Python 3",
      code: `def calculate(a: float, op: str, b: float):
    ops = {'+': a + b, '-': a - b, '*': a * b}
    if op == '/':
        return a / b if b != 0 else "Error: ZeroDivision"
    return ops.get(op, "Invalid Op")

# Test calculator logic
res = calculate(16, '*', 4)
print(f"Calculator output: {res}")
print("Status: Verified & ready!")`,
      output: [
        "python3 calculator.py",
        "[Running] Python 3.11 runtime...",
        ">> calculate(16, '*', 4) executed",
        ">> Calculator output: 64",
        ">> Status: Verified & ready!"
      ]
    },
    cpp: {
      fileName: "student_profile.cpp",
      language: "C++ 20",
      code: `#include <iostream>
#include <string>

struct Student {
    std::string name = "Balu";
    std::string major = "CSE (AI)";
    std::string university = "Joy University";
    std::string status = "Completed First Year";
};

int main() {
    Student s;
    std::cout << "Student: " << s.name << std::endl;
    std::cout << "Focus: " << s.major << std::endl;
    return 0;
}`,
      output: [
        "g++ -std=c++20 student_profile.cpp -o profile && ./profile",
        "[Compiled] Compilation finished with 0 errors.",
        ">> Student: Balu",
        ">> Focus: CSE (AI) @ Joy University",
        ">> Academic Status: Completed First Year"
      ]
    },
    js: {
      fileName: "portfolio.js",
      language: "JavaScript",
      code: `const developer = {
  name: "Balu",
  role: "Aspiring Software Developer",
  university: "Joy University",
  currentGoal: "Building projects & mastering AI fundamentals",
  openForOpportunities: true
};

console.log(\`Ready to collaborate: \${developer.openForOpportunities}\`);`,
      output: [
        "node portfolio.js",
        ">> [Object] Developer profile initialized",
        ">> Ready to collaborate: true",
        ">> Connecting to developer community..."
      ]
    }
  };

  const handleRun = () => {
    setIsRunning(true);
    setTerminalOutput(["Initializing compiler / interpreter environment..."]);
    setTimeout(() => {
      setTerminalOutput(snippets[activeTab].output);
      setIsRunning(false);
      setHasRun(true);
    }, 400);
  };

  const currentSnippet = snippets[activeTab];

  return (
    <div className="w-full bg-[#0a0f1d] border border-slate-800/90 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
      {/* Top Window Bar */}
      <div className="px-4 py-3 bg-[#070b14] border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
            joy_university_workspace/
          </span>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800">
          {(['python', 'cpp', 'js'] as const).map(tab => (
            <button
              key={tab}
              type="button"
              onClick={() => {
                setActiveTab(tab);
                setTerminalOutput([]);
                setHasRun(false);
              }}
              className={`px-2.5 py-1 text-xs font-mono rounded transition-colors whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-blue-600 text-white font-medium shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {snippets[tab].fileName}
            </button>
          ))}
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 sm:p-5 relative font-mono text-xs sm:text-[13px] leading-relaxed">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/60 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-blue-400">{currentSnippet.language}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-500">UTF-8</span>
          </div>

          <button
            type="button"
            onClick={handleRun}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-medium rounded-md transition-colors shadow-md shadow-blue-600/20 whitespace-nowrap cursor-pointer"
          >
            {isRunning ? (
              <span>Running...</span>
            ) : hasRun ? (
              <>
                <Check className="w-3.5 h-3.5 text-white" />
                <span>Re-run Code</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Run Code</span>
              </>
            )}
          </button>
        </div>

        <pre className="text-slate-200 overflow-x-auto selection:bg-blue-500/30">
          <code>{currentSnippet.code}</code>
        </pre>
      </div>

      {/* Terminal Output Area */}
      <div className="border-t border-slate-800/80 bg-[#060a12] p-4">
        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-2">
          <Terminal className="w-3.5 h-3.5 text-blue-400" />
          <span>Output Console</span>
          <span className="text-slate-500 ml-auto text-[11px]">
            {terminalOutput.length > 0 ? 'Exit code: 0' : 'Click "Run Code" above to execute'}
          </span>
        </div>

        <div className="font-mono text-xs space-y-1 min-h-[50px] text-slate-300">
          {terminalOutput.length > 0 ? (
            terminalOutput.map((line, i) => (
              <div
                key={i}
                className={
                  line.startsWith('>>')
                    ? 'text-emerald-400 font-medium'
                    : line.startsWith('[')
                    ? 'text-blue-400'
                    : 'text-slate-400'
                }
              >
                {line}
              </div>
            ))
          ) : (
            <div className="text-slate-500 italic">
              $ Ready to run {currentSnippet.fileName}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
