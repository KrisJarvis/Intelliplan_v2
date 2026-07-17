import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const MARKETPLACE_URL = 'https://marketplace.microsoft.com/en-us/product/saas/intellimark.intelliplan?tab=overview&signInModalType=1&ctaType=7';

export default function Footer() {
  return (
    <footer className="bg-[#060E1A] border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <a href="#" className="flex items-center gap-3 group">
              <img src="/logo.png" alt="IntelliPlan Logo" className="w-9 h-9 object-contain" />
              <span className="text-xl font-display font-bold text-white tracking-tight">
                Intelli<span className="bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent">Plan</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              AI‑powered supply chain planning on Microsoft Azure. Forecast demand, optimize inventory, and make smarter decisions — all in one platform.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-1">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-400 hover:bg-sky-400/10 transition-all duration-200">
                <InstagramIcon sx={{ fontSize: 18 }} />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-400 hover:bg-sky-400/10 transition-all duration-200">
                <TwitterIcon sx={{ fontSize: 18 }} />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-400 hover:bg-sky-400/10 transition-all duration-200">
                <LinkedInIcon sx={{ fontSize: 18 }} />
              </a>
              <a href="#" aria-label="Email" className="w-9 h-9 rounded-full border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-400 hover:bg-sky-400/10 transition-all duration-200">
                <EmailIcon sx={{ fontSize: 18 }} />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-semibold text-sm mb-5 font-display">Platform</h4>
            <ul className="flex flex-col gap-3 text-slate-400 text-sm">
              <li><a href="#glance" className="hover:text-white transition-colors">Precision Forecast</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Constraint Solving</a></li>
              <li><a href="#glance" className="hover:text-white transition-colors">Decision Sandbox</a></li>
            </ul>
          </div>

          {/* Azure Native Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-5 font-display">Azure Native</h4>
            <ul className="flex flex-col gap-3 text-slate-400 text-sm">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Sovereign Tenant</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Entra ID Login</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Synapse Connectors</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-5 font-display">Company</h4>
            <ul className="flex flex-col gap-3 text-slate-400 text-sm">
              <li>
                <a
                  href={MARKETPLACE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Azure Marketplace
                  <span className="text-sky-400">&rarr;</span>
                </a>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partner Network</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
          <span>&copy; {new Date().getFullYear()} IntelliPlan. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
