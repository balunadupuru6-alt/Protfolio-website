import React, { useState } from 'react';
import { Play, Copy, Check, Terminal, RotateCcw } from 'lucide-react';
import { pythonCalculatorCode } from '../data/portfolioData';

export const PythonCalculatorSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'interactive' | 'code'>('interactive');
  const [num1, setNum1] = useState<string>('24');
  const [op, setOp] = useState<string>('+');
  const [num2, setNum2] = useState<string>('8');
  const [result, setResult] = useState<string>('32');
  const [logs, setLogs] = useState<Array<{ command: string; output: string; status: 'ok' | 'error' }>>([
    { command: "calculate(24, '+', 8)", output: "32.0", status: "ok" }
  ]);
  const [copied, setCopied] = useState(false);

  const handleCompute = (n1Str = num1, opStr = op, n2Str = num2) => {
    const val1 = parseFloat(n1Str);
    const val2 = parseFloat(n2Str);

    if (isNaN(val1) || isNaN(val2)) {
      const err = "Error: Invalid numeric input";
      setResult(err);
      setLogs(prev => [...prev.slice(-4), { command: `calculate("${n1Str}", '${opStr}', "${n2Str}")`, output: err, status: 'error' }]);
      return;
    }

    let res: number | null = null;
    let errorMsg: string | null = null;

    switch (opStr) {
      case '+':
        res = val1 + val2;
        break;
      case '-':
        res = val1 - val2;
        break;
      case '*':
        res = val1 * val2;
        break;
      case '/':
        if (val2 === 0) {
          errorMsg = "ValueError: Cannot divide by zero.";
        } else {
          res = val1 / val2;
        }
        break;
      case '%':
        if (val2 === 0) {
          errorMsg = "ValueError: Cannot perform modulo by zero.";
        } else {
          res = val1 % val2;
        }
        break;
      default:
        errorMsg = `ValueError: Unknown operator '${opStr}'`;
    }

    const commandStr = `calculate(${val1}, '${opStr}', ${val2})`;
    if (errorMsg) {
      setResult(errorMsg);
      setLogs(prev => [...prev.slice(-4), { command: commandStr, output: errorMsg, status: 'error' }]);
    } else if (res !== null) {
      const formatted = Number.isInteger(res) ? res.toString() : res.toFixed(4).replace(/\.?0+$/, '');
      setResult(formatted);
      setLogs(prev => [...prev.slice(-4), { command: commandStr, output: `${formatted} (float: ${res.toFixed(4)})`, status: 'ok' }]);
    }
  };

  const setPreset = (a: string, o: string, b: string) => {
    setNum1(a);
    setOp(o);
    setNum2(b);
    handleCompute(a, o, b);
  };

  const handleCopyCode = async () => {
    await navigator.clipboard.writeText(pythonCalculatorCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#0b101b] border border-slate-800/80 rounded-xl overflow-hidden shadow-2xl">
      {/* Window Titlebar */}
      <div className="px-4 py-3 bg-[#080d16] border-b border-slate-800/70 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-xs font-mono text-slate-400 ml-2">python_calculator.py — Balu</span>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800">
          <button
            type="button"
            onClick={() => setActiveTab('interactive')}
            className={`px-3 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap ${
              activeTab === 'interactive'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Live Simulator
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('code')}
            className={`px-3 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap ${
              activeTab === 'code'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Source Code
          </button>
        </div>
      </div>

      {activeTab === 'interactive' ? (
        <div className="p-4 sm:p-6 space-y-5">
          {/* Preset Buttons for Quick Testing */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <span className="text-slate-500 font-medium">Quick Test:</span>
            <button
              type="button"
              onClick={() => setPreset('50', '*', '12')}
              className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:border-blue-500/50 hover:text-white transition-colors"
            >
              50 × 12
            </button>
            <button
              type="button"
              onClick={() => setPreset('144', '/', '12')}
              className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:border-blue-500/50 hover:text-white transition-colors"
            >
              144 ÷ 12
            </button>
            <button
              type="button"
              onClick={() => setPreset('37', '%', '5')}
              className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:border-blue-500/50 hover:text-white transition-colors"
            >
              37 % 5
            </button>
            <button
              type="button"
              onClick={() => setPreset('42', '/', '0')}
              className="px-2.5 py-1 rounded bg-slate-900 border border-rose-900/50 text-rose-300 hover:bg-rose-950/30 transition-colors"
              title="Test division by zero error handling"
            >
              Test 42 ÷ 0 (Error handling)
            </button>
          </div>

          {/* Interactive Calculator Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-end">
            <div className="sm:col-span-4">
              <label className="block text-xs font-mono text-slate-400 mb-1">Operand 1 (x)</label>
              <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                className="w-full bg-[#070b13] border border-slate-800 rounded-lg px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="First number"
              />
            </div>

            <div className="sm:col-span-3">
              <label className="block text-xs font-mono text-slate-400 mb-1">Operator</label>
              <div className="grid grid-cols-5 gap-1">
                {['+', '-', '*', '/', '%'].map((operator) => (
                  <button
                    key={operator}
                    type="button"
                    onClick={() => setOp(operator)}
                    className={`h-9 rounded font-mono text-sm font-semibold transition-colors ${
                      op === operator
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {operator === '*' ? '×' : operator === '/' ? '÷' : operator}
                  </button>
                ))}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label className="block text-xs font-mono text-slate-400 mb-1">Operand 2 (y)</label>
              <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                className="w-full bg-[#070b13] border border-slate-800 rounded-lg px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Second number"
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="button"
                onClick={() => handleCompute()}
                className="w-full h-9 flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs rounded-lg transition-colors shadow-lg shadow-blue-600/20"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                Run
              </button>
            </div>
          </div>

          {/* Current Calculation Output */}
          <div className="bg-[#070b13] border border-slate-800/90 rounded-lg p-3.5">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
              <span>Python Evaluation</span>
              <span className="text-slate-500">Output</span>
            </div>
            <div className="flex items-center justify-between font-mono">
              <span className="text-sm text-slate-300">
                {num1} {op} {num2} =
              </span>
              <span className={`text-base font-bold ${result.includes('Error') || result.includes('ValueError') ? 'text-rose-400 text-sm' : 'text-emerald-400'}`}>
                {result}
              </span>
            </div>
          </div>

          {/* Simulated Terminal Log Stream */}
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                Interactive Python CLI Stream
              </span>
              <button
                type="button"
                onClick={() => setLogs([])}
                className="flex items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                Clear
              </button>
            </div>

            <div className="bg-[#05080f] rounded-lg p-3 border border-slate-900 font-mono text-xs space-y-1.5 max-h-36 overflow-y-auto">
              <div className="text-slate-500">Python 3.11.4 (Joy-University/Balu-Env)</div>
              <div className="text-slate-500">Type &apos;calculate(x, op, y)&apos; to evaluate arithmetic expressions.</div>
              {logs.map((log, index) => (
                <div key={index} className="pt-1">
                  <div className="text-blue-400">&gt;&gt;&gt; {log.command}</div>
                  <div className={log.status === 'error' ? 'text-rose-400' : 'text-slate-200'}>
                    {log.output}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 sm:p-6 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">Pure Python Arithmetic Functions</span>
            <button
              type="button"
              onClick={handleCopyCode}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded text-xs font-medium text-slate-200 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Python Code</span>
                </>
              )}
            </button>
          </div>

          <pre className="bg-[#05080f] p-4 rounded-lg border border-slate-900 text-slate-300 font-mono text-xs leading-relaxed overflow-x-auto max-h-[380px]">
            <code>{pythonCalculatorCode}</code>
          </pre>
        </div>
      )}
    </div>
  );
};
