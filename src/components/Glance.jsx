import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SettingsIcon from '@mui/icons-material/Settings';
import BarChartIcon from '@mui/icons-material/BarChart';

const GLANCE_TABS = [
  {
    id: 'forecasting',
    title: 'Precision Forecasting',
    icon: <TrendingUpIcon className="w-5 h-5" />,
    description: 'Ensemble machine learning models analyze historical patterns and test best-in-class algorithms to generate high-accuracy demand baselines.',
    features: ['Automated Model Selection', 'External Signal Layering', 'Outlier Data Hygiene'],
    imgUrl: 'https://catalogartifact.azureedge.net/publicartifacts/intellimark.intelliplan-f1e4d283-f45b-4f83-b364-2e34ae310026/image2_final0.png',
  },
  {
    id: 'optimization',
    title: 'Strategic Optimization',
    icon: <SettingsIcon className="w-5 h-5" />,
    description: 'A constraint-based mathematical solver that designs optimal inventory levels, route planning, and staffing constraints to meet demand.',
    features: ['Resource & Labor Planning', 'Inventory Carrying Cost Reduction', 'What-If Risk Scenarios'],
    imgUrl: 'https://catalogartifact.azureedge.net/publicartifacts/intellimark.intelliplan-f1e4d283-f45b-4f83-b364-2e34ae310026/image6_final1.png',
  },
  {
    id: 'analytics',
    title: 'Executive Dashboards',
    icon: <BarChartIcon className="w-5 h-5" />,
    description: 'Direct exporting to Microsoft Power BI dashboards provides C-suite leadership with complete visibility into resource capacities.',
    features: ['Real-Time Synapse Analytics', 'Azure SQL Direct Connections', 'Power BI Dashboard Exports'],
    imgUrl: 'https://catalogartifact.azureedge.net/publicartifacts/intellimark.intelliplan-f1e4d283-f45b-4f83-b364-2e34ae310026/image1_final3.png',
  }
];

export default function Glance() {
  const [activeTab, setActiveTab] = useState(GLANCE_TABS[0]);

  return (
    <section id="glance" className="w-full py-24 bg-[#0A1628] border-t border-white/5 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute right-[-10%] top-[20%] w-[35%] h-[35%] rounded-full opacity-10 blur-[120px] bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] pointer-events-none" />
      <div className="absolute left-[-10%] bottom-[10%] w-[30%] h-[30%] rounded-full opacity-10 blur-[100px] bg-gradient-to-tr from-[#8B5CF6] to-[#F43F5E] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-[#0EA5E9] uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10">
            At a Glance
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mt-4 tracking-tight leading-tight">
            Visualizing the Platform
          </h2>
          <p className="font-sans text-slate-400 mt-4 text-base leading-relaxed">
            Take a visual tour of IntelliPlan's advanced forecasting engine, constrained solvers, and integration dashboards.
          </p>
        </div>

        {/* Dynamic Card Container */}
        <div className="glass-card rounded-3xl border border-white/10 bg-[#0F2137]/30 p-6 lg:p-10 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Tab Selector & Descriptions (Left Column) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {GLANCE_TABS.map((tab) => {
                const isActive = activeTab.id === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab)}
                    className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border flex gap-4 ${
                      isActive
                        ? 'bg-[#0F2137]/90 border-[#0EA5E9]/30 shadow-lg shadow-black/25'
                        : 'bg-transparent border-transparent hover:bg-white/5 hover:border-white/5'
                    }`}
                  >
                    <div className={`p-2.5 rounded-xl flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-[#0EA5E9] text-white' : 'bg-white/5 text-slate-400'
                    }`}>
                      {tab.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold font-display text-lg">{tab.title}</h4>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-2 overflow-hidden"
                        >
                          <p className="font-sans text-slate-400 text-sm leading-relaxed">
                            {tab.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {tab.features.map((feat) => (
                              <span key={feat} className="text-[11px] font-medium text-[#0EA5E9] bg-[#0EA5E9]/10 px-2 py-0.5 rounded-md border border-[#0EA5E9]/20">
                                {feat}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Display Screenshot (Right Column) */}
            <div className="lg:col-span-7 h-full flex items-center justify-center">
              <div className="w-full relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl p-1.5 group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeTab.id}
                    src={activeTab.imgUrl}
                    alt={activeTab.title}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-auto rounded-xl object-cover hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
                  />
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
