import React, { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && message.trim()) {
      setSubmitted(true);
      setEmail('');
      setMessage('');
    }
  };

  return (
    <footer className="bg-[#0A0B0D] mt-auto relative overflow-hidden border-t border-white/5 font-sans pt-16 pb-6 text-left">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
          
          {/* Left Column (Contact Form) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="font-display font-semibold text-lg text-white">
              Get in Touch
            </h3>
            
            {submitted ? (
              <span className="text-xs font-semibold text-[#D4F53B] bg-[#D4F53B]/10 px-3 py-1.5 rounded-lg border border-[#D4F53B]/20 self-start">
                Thank you! Your message has been sent.
              </span>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-sm">
                <input 
                  type="email" 
                  required
                  placeholder="your.email@company.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border border-slate-700/60 rounded-xl px-4 py-2.5 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-[#D4F53B] w-full transition-colors"
                />
                <textarea 
                  required
                  placeholder="How can we help optimize your supply chain?" 
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-transparent border border-slate-700/60 rounded-xl px-4 py-2.5 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-[#D4F53B] w-full transition-colors resize-none"
                />
                <button 
                  type="submit" 
                  className="bg-[#D4F53B] hover:bg-[#C2E330] text-black font-semibold text-sm px-6 py-2.5 rounded-xl transition-all duration-200 self-start"
                >
                  Send Message
                </button>
              </form>
            )}

            {/* Social Icons */}
            <div className="flex gap-3 mt-2">
              <a href="#" className="w-9 h-9 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all">
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all">
                <EmailIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Columns (Links) */}
          <div className="lg:col-span-7 grid grid-cols-3 gap-6">
            <div>
              <h4 className="text-white font-semibold text-sm mb-5 font-display">Platform</h4>
              <ul className="flex flex-col gap-3 text-slate-400 text-sm">
                <li><a href="#glance" className="hover:text-white transition-colors">Precision Forecast</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Constraint Solving</a></li>
                <li><a href="#glance" className="hover:text-white transition-colors">Decision Sandbox</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-5 font-display">Azure Native</h4>
              <ul className="flex flex-col gap-3 text-slate-400 text-sm">
                <li><a href="#how-it-works" className="hover:text-white transition-colors">Sovereign Tenant</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">Entra ID Login</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">Synapse Connectors</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-5 font-display">Company</h4>
              <ul className="flex flex-col gap-3 text-slate-400 text-sm">
                <li>
                  <a 
                    href="https://marketplace.microsoft.com/en-us/product/saas/intellimark.intelliplan?tab=overview&signInModalType=1&ctaType=7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors text-[#D4F53B]"
                  >
                    Azure Marketplace &rarr;
                  </a>
                </li>
                <li><span className="text-slate-400 cursor-default">Documentation</span></li>
                <li><span className="text-slate-400 cursor-default">Partner Network</span></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Section: Massive lowercase word */}
        <div className="border-t border-white/5 pt-8 pb-4 relative overflow-hidden select-none pointer-events-none">
          <h1 className="text-white font-light text-[15.5vw] tracking-tighter leading-none text-center font-display lowercase">
            intelliplan
          </h1>
        </div>

        {/* Small copyright disclaimer */}
        <div className="mt-4 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
          <span>© {new Date().getFullYear()} IntelliPlan. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <span className="text-white/10">|</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
