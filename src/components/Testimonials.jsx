import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconButton } from '@mui/material'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const testimonials = [
  {
    quote:
      "IntelliPlan transformed our demand planning. Forecast accuracy jumped from 72% to over 96%, and our stockouts dropped dramatically within the first quarter.",
    name: 'Sarah Chen',
    role: 'VP of Supply Chain, RetailCo',
    initials: 'SC',
    color: '#0EA5E9',
  },
  {
    quote:
      "The Planner Co-Pilot is a game changer. Our team spends 60% less time on manual adjustments and can finally focus on strategic planning instead of firefighting.",
    name: 'Marcus Okafor',
    role: 'Director of Operations, FreshGoods Inc.',
    initials: 'MO',
    color: '#8B5CF6',
  },
  {
    quote:
      "We evaluated five forecasting platforms. IntelliPlan was the only one that delivered enterprise-grade accuracy with a deployment experience that actually respects your time.",
    name: 'Priya Sharma',
    role: 'CTO, LogiFlow Systems',
    initials: 'PS',
    color: '#F43F5E',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const t = testimonials[current]

  return (
    <section id="testimonials" className="relative py-20 md:py-28">
      {/* BG glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-500/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3 block">
            Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            What Teams Say
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            See how operations teams are using IntelliPlan to manage forecasts and supply.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0F2137] rounded-3xl p-8 sm:p-10 md:p-12 border border-white/5 relative overflow-hidden"
          >
            {/* Decorative gradient */}
            <div
              className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[80px] opacity-20"
              style={{ background: t.color }}
            />

            {/* Quote Icon */}
            <div className="mb-6">
              <FormatQuoteIcon
                sx={{
                  fontSize: 48,
                  color: t.color,
                  opacity: 0.3,
                  transform: 'scaleX(-1)',
                }}
              />
            </div>

            {/* Quote Text */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed font-light mb-8">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ background: `${t.color}25`, border: `2px solid ${t.color}40` }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{t.name}</p>
                    <p className="text-slate-400 text-sm">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/5">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current
                        ? 'w-8 bg-electric-500'
                        : 'w-4 bg-white/10 hover:bg-white/20'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <IconButton
                  onClick={prev}
                  size="small"
                  sx={{
                    color: '#94a3b8',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '10px',
                    width: 38,
                    height: 38,
                    '&:hover': {
                      borderColor: 'rgba(14,165,233,0.3)',
                      backgroundColor: 'rgba(14,165,233,0.05)',
                      color: '#fff',
                    },
                  }}
                >
                  <ArrowBackIcon sx={{ fontSize: 18 }} />
                </IconButton>
                <IconButton
                  onClick={next}
                  size="small"
                  sx={{
                    color: '#94a3b8',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '10px',
                    width: 38,
                    height: 38,
                    '&:hover': {
                      borderColor: 'rgba(14,165,233,0.3)',
                      backgroundColor: 'rgba(14,165,233,0.05)',
                      color: '#fff',
                    },
                  }}
                >
                  <ArrowForwardIcon sx={{ fontSize: 18 }} />
                </IconButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
