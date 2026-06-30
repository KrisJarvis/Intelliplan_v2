import { useState, useEffect } from 'react'
import { Button, IconButton, Drawer, Box } from '@mui/material'
import CloudQueueIcon from '@mui/icons-material/CloudQueue'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const MARKETPLACE_URL = 'https://marketplace.microsoft.com/en-us/product/saas/intellimark.intelliplan?tab=overview&signInModalType=1&ctaType=7'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 transition-all duration-300 rounded-2xl md:rounded-full ${
          scrolled
            ? 'bg-[#060E1A]/95 backdrop-blur-md shadow-xl border border-white/5 py-3'
            : 'bg-[#0F2137]/80 backdrop-blur-md border border-white/10 py-5'
        }`}
      >
        <div className="w-full px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <img src="/logo.png" alt="IntelliPlan Logo" className="w-10 h-10 object-contain hover:scale-105 transition-transform duration-300" />
              <span className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                Intelli<span className="gradient-text-blue">Plan</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-2 h-full">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-5 py-2 text-[15px] font-semibold text-slate-300 hover:text-white transition-colors rounded-xl hover:bg-white/5 relative after:absolute after:bottom-1 after:left-5 after:right-5 after:h-[2px] after:bg-gradient-to-r after:from-electric-500 after:to-violet-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4 h-full">
              <Button
                variant="contained"
                href={MARKETPLACE_URL}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  background: 'linear-gradient(135deg, #0EA5E9 0%, #8B5CF6 100%)',
                  textTransform: 'none',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  fontFamily: '"Nunito Sans", sans-serif',
                  borderRadius: '12px',
                  px: 4,
                  height: '46px',
                  boxShadow: '0 6px 20px rgba(14,165,233,0.3)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #38BDF8 0%, #a78bfa 100%)',
                    boxShadow: '0 8px 28px rgba(14,165,233,0.45)',
                    transform: 'translateY(-0.5px)'
                  },
                  transition: 'all 0.2s ease-in-out'
                }}
              >
                Get This App
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{ color: '#e2e8f0', p: 1.5 }}
              >
                <MenuIcon sx={{ fontSize: 28 }} />
              </IconButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: '#0A1628',
            borderLeft: '1px solid rgba(255,255,255,0.08)',
          },
        }}
      >
        <Box className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-10">
            <span className="text-lg font-display font-bold text-white">
              Intelli<span className="gradient-text-blue">Plan</span>
            </span>
            <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: '#94a3b8' }}>
              <CloseIcon />
            </IconButton>
          </div>

          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                className="px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors text-base font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-3">
            <Button
              variant="contained"
              href={MARKETPLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                background: 'linear-gradient(135deg, #0EA5E9 0%, #8B5CF6 100%)',
                textTransform: 'none',
                fontWeight: 600,
                fontFamily: 'Inter, sans-serif',
                borderRadius: '12px',
                py: 1.2,
                boxShadow: '0 4px 20px rgba(14,165,233,0.3)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #38BDF8 0%, #a78bfa 100%)',
                },
              }}
            >
              Get This App
            </Button>
          </div>
        </Box>
      </Drawer>
    </>
  )
}
