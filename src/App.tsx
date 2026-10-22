/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { LearningJourney } from './components/LearningJourney';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ConfigModal } from './components/ConfigModal';
import { initialPortfolioConfig } from './data/portfolioData';

export default function App() {
  const [config, setConfig] = useState<typeof initialPortfolioConfig>(() => {
    try {
      const saved = localStorage.getItem('balu_portfolio_config');
      if (saved) {
        return { ...initialPortfolioConfig, ...JSON.parse(saved) };
      }
    } catch {
      // Fallback to default
    }
    return initialPortfolioConfig;
  });

  const [isConfigOpen, setIsConfigOpen] = useState(false);

  const handleSaveConfig = (newConfig: typeof initialPortfolioConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem('balu_portfolio_config', JSON.stringify(newConfig));
    } catch {
      // Ignore
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Bar Navigation adhering to 3-Zone contract */}
      <Navbar onOpenSettings={() => setIsConfigOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with 3 Action Buttons and Code Sandbox */}
        <Hero
          onExploreProjects={() => scrollTo('projects')}
          onViewSkills={() => scrollTo('skills')}
          onContactMe={() => scrollTo('contact')}
        />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Technical Skills Section */}
        <Skills />

        {/* 4. Projects Showcase (Python Calculator, Web Practice & Future Roadmap) */}
        <Projects
          customGithubUrls={{
            pythonCalc: config.pythonCalcRepo,
            webPractice: config.webPracticeRepo
          }}
          onEditRepo={() => setIsConfigOpen(true)}
        />

        {/* 5. Education Section (Joy University Foundation) */}
        <Education />

        {/* 6. What I'm Learning Section (Active Learning Goals) */}
        <LearningJourney />

        {/* 7. Contact Section */}
        <Contact
          config={config}
          onOpenSettings={() => setIsConfigOpen(true)}
        />
      </main>

      {/* 8. Footer */}
      <Footer
        config={config}
        onOpenSettings={() => setIsConfigOpen(true)}
      />

      {/* Link & Profile Customization Modal */}
      <ConfigModal
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        config={config}
        onSave={handleSaveConfig}
      />
    </div>
  );
}
