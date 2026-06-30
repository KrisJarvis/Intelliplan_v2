import { motion } from 'framer-motion'
import { Button } from '@mui/material'
import { Sparkles, TrendingUp, ArrowRight } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const MARKETPLACE_URL = 'https://marketplace.microsoft.com/en-us/product/saas/intellimark.intelliplan?tab=overview&signInModalType=1&ctaType=7'

const chartData = [
  { month: 'Jan', forecast: 4200, actual: 4000 },
  { month: 'Feb', forecast: 4800, actual: 4600 },
  { month: 'Mar', forecast: 5100, actual: 5300 },
  { month: 'Apr', forecast: 5600, actual: 5500 },
  { month: 'May', forecast: 6200, actual: 6000 },
  { month: 'Jun', forecast: 6800, actual: 6900 },
  { month: 'Jul', forecast: 7400, actual: 7200 },
  { month: 'Aug', forecast: 7900, actual: 7800 },
]

const stats = [
  { value: '96.8%', label: 'Forecast Accuracy', icon: '🎯' },
  { value: '-84%', label: 'Stockout Reduction', icon: '📉' },
  { value: '3x', label: 'ROI in 6 Months', icon: '🚀' },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card rounded-xl px-4 py-3 text-xs">
        <p className="text-slate-400 mb-1.5 font-medium">{label}</p>
        {payload.map((entry, i) => (
          <p key={i} className="flex items-center gap-2" style={{ color: entry.color }}>
            <span className="w-2 h-2 rounded-full" style={{ background: entry.color }} />
            {entry.name}: <span className="font-semibold text-white">{entry.value.toLocaleString()}</span>
          </p>
        ))}
      </div>
    )
  }
  return null
}

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-electric-500/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-electric-400">
                Azure-Native Enterprise Platform
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.1] tracking-tight mb-6"
            >
              Forecasting That <br className="hidden sm:block" />
              <span className="gradient-text">Actually Works</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl animate-fade-in"
            >
              IntelliPlan is a dual-purpose intelligence platform that combines state-of-the-art machine learning forecasting with a powerful constrained-optimization engine. Deployed securely within your own Azure environment.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                variant="contained"
                href={MARKETPLACE_URL}
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<ArrowRight className="w-4 h-4" />}
                sx={{
                  background: 'linear-gradient(135deg, #0EA5E9 0%, #8B5CF6 100%)',
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  fontFamily: 'Inter, sans-serif',
                  borderRadius: '14px',
                  px: 3.5,
                  py: 1.5,
                  boxShadow: '0 8px 32px rgba(14,165,233,0.3)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #38BDF8 0%, #a78bfa 100%)',
                    boxShadow: '0 8px 40px rgba(14,165,233,0.45)',
                    transform: 'translateY(-1px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Get This App
              </Button>
            </motion.div>
          </div>

          {/* Right: Chart */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl p-6 bg-[#0F2137]/80">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-white font-semibold text-base">Demand Forecast</h3>
                  <p className="text-slate-500 text-sm mt-0.5">Predictions vs actuals</p>
                </div>
                <span className="text-slate-500 text-xs font-medium font-sans">Updated 5m ago</span>
              </div>

              {/* Chart */}
              <div className="h-56 sm:h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="forecastGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.25} />
                        <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="actualGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#475569', fontSize: 12 }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#475569', fontSize: 12 }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                      type="monotone"
                      dataKey="forecast"
                      name="Forecast"
                      stroke="#0EA5E9"
                      strokeWidth={2.5}
                      fill="url(#forecastGrad)"
                      dot={false}
                      activeDot={{ r: 5, stroke: '#0EA5E9', strokeWidth: 2, fill: '#0F2137' }}
                    />
                    <Area
                      type="monotone"
                      dataKey="actual"
                      name="Actual"
                      stroke="#8B5CF6"
                      strokeWidth={2}
                      strokeDasharray="6 4"
                      fill="url(#actualGrad)"
                      dot={false}
                      activeDot={{ r: 5, stroke: '#8B5CF6', strokeWidth: 2, fill: '#0F2137' }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Legend */}
              <div className="flex items-center gap-6 mt-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-0.5 rounded-full bg-electric-500" />
                  <span className="text-xs text-slate-500">AI Forecast</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-0.5 rounded-full bg-violet-500 opacity-70" />
                  <span className="text-xs text-slate-500">Actual</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16 lg:mt-20"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card-light rounded-2xl px-6 py-5 flex items-center gap-4 glow-hover"
            >
              <span className="text-2xl">{stat.icon}</span>
              <div>
                <p className="text-2xl sm:text-3xl font-display font-bold text-white">{stat.value}</p>
                <p className="text-sm text-slate-500 mt-0.5">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
