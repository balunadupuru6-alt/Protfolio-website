import React, { useState } from 'react';
import {
  Mail,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Info
} from 'lucide-react';
import { initialPortfolioConfig } from '../data/portfolioData';

interface ContactProps {
  config: typeof initialPortfolioConfig;
  onOpenSettings: () => void;
}

export const Contact: React.FC<ContactProps> = ({ config, onOpenSettings }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'prepared' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(config.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Input Validation
    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name.");
      setFormStatus('error');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage("Please provide a valid email address.");
      setFormStatus('error');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      setErrorMessage("Please enter a message with at least 5 characters.");
      setFormStatus('error');
      return;
    }

    setErrorMessage('');
    setFormStatus('prepared');

    // Trigger direct mailto with populated subject and body
    const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Hello Balu,\n\n${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );

    // Open email client directly
    window.location.href = `mailto:${config.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  const handleCopyFormattedMessage = async () => {
    const fullText = `To: ${config.email}\nSubject: ${formData.subject || 'Portfolio Inquiry'}\nFrom: ${formData.name} (${formData.email})\n\n${formData.message}`;
    await navigator.clipboard.writeText(fullText);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2000);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-800/80 bg-[#07090e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-2">
            <span>Get in Touch</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">Networking &amp; Opportunities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
            Let&apos;s Connect and Build Something Great.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            I am always eager to connect with other developers, learn about internships, collaborate on open-source projects, and discuss software development and artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0b101b] border border-slate-800/80 p-6 rounded-2xl space-y-5">
              <h3 className="text-base font-bold text-white">Direct Contact Channels</h3>

              {/* Email Card with 1-click Copy */}
              <div className="bg-[#070b13] border border-slate-800 p-4 rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span>Email Address</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 text-[11px] font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

                <a
                  href={`mailto:${config.email}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-blue-400 transition-colors block break-all"
                >
                  {config.email}
                </a>

                <p className="text-[11px] text-slate-500">
                  Click to open your default mail client or copy the address.
                </p>
              </div>

              {/* GitHub Link */}
              <a
                href={config.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-[#070b13] border border-slate-800 hover:border-slate-700 rounded-xl transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-900 rounded-lg group-hover:bg-slate-800 transition-colors">
                    <Github className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">GitHub Profile</span>
                    <span className="text-xs font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                      {config.github.replace('https://', '')}
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </a>

              {/* LinkedIn Link */}
              <a
                href={config.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-[#070b13] border border-slate-800 hover:border-slate-700 rounded-xl transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-950/40 rounded-lg group-hover:bg-blue-900/40 transition-colors">
                    <Linkedin className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">LinkedIn Profile</span>
                    <span className="text-xs font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                      {config.linkedin.replace('https://', '')}
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </a>

              {/* University Location Info */}
              <div className="pt-2 border-t border-slate-800/80 text-xs text-slate-400 space-y-1">
                <div className="text-slate-300 font-medium">Balu · Joy University</div>
                <div>Computer Science and Engineering (AI)</div>
                <div className="text-slate-500">Open for developer networking &amp; student internships</div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0b101b] border border-slate-800/80 p-6 sm:p-8 rounded-2xl shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div>
                  <h3 className="text-base font-bold text-white">Send a Direct Message</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Compose a note to Balu. Validates inputs and prepares direct mail dispatch.
                  </p>
                </div>
                <MessageSquare className="w-5 h-5 text-blue-400" />
              </div>

              {/* Real Backend Disclosure Notice */}
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-blue-950/20 border border-blue-900/40 text-xs text-blue-300">
                <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Transparent delivery:</strong> Submitting this form opens your email app pre-filled with your message to <strong>{config.email}</strong>, or allows you to copy the formatted text in one click.
                </span>
              </div>

              {formStatus === 'error' && (
                <div className="p-3 rounded-lg bg-rose-950/30 border border-rose-900/50 text-xs text-rose-300">
                  {errorMessage}
                </div>
              )}

              {formStatus === 'prepared' && (
                <div className="p-4 rounded-lg bg-emerald-950/30 border border-emerald-900/50 text-xs text-emerald-300 space-y-2">
                  <div className="flex items-center gap-2 font-semibold">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Message prepared successfully!</span>
                  </div>
                  <p className="text-emerald-400/90 leading-relaxed">
                    Your email client should launch with the draft. If it didn&apos;t pop up, use the button below to copy the full message and send it directly:
                  </p>
                  <button
                    type="button"
                    onClick={handleCopyFormattedMessage}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-900/50 hover:bg-emerald-800/60 text-white font-medium text-xs transition-colors"
                  >
                    {copiedMessage ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Formatted Message</span>
                      </>
                    )}
                  </button>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className="w-full bg-[#070b13] border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className="w-full bg-[#070b13] border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Internship Inquiry / Software Collaboration"
                    className="w-full bg-[#070b13] border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Balu, I saw your Python calculator and portfolio projects..."
                    className="w-full bg-[#070b13] border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors leading-relaxed"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-slate-500 font-mono">
                    Direct delivery to {config.email}
                  </span>

                  <button
                    type="submit"
                    className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors shadow-lg shadow-blue-600/20 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
