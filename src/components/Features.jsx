import { motion } from 'framer-motion'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import HubIcon from '@mui/icons-material/Hub'
import PercentIcon from '@mui/icons-material/Percent'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

const features = [
  {
    icon: <TrendingUpIcon sx={{ fontSize: 28 }} />,
    title: 'Automated Model Selection',
    description:
      'Our engine tests your data against a library of best-in-class algorithms to select the highest-performing model for your KPIs.',
    color: '#0EA5E9',
  },
  {
    icon: <HubIcon sx={{ fontSize: 28 }} />,
    title: 'External Signal Integration',
    description:
      'Easily layer in macro variables like weather patterns, holidays, or economic indices that impact your demand.',
    color: '#8B5CF6',
  },
  {
    icon: <PercentIcon sx={{ fontSize: 28 }} />,
    title: 'Inventory & Supply Chain Logic',
    description:
      'Optimize stock levels across multiple nodes to reduce carrying costs while maintaining high service levels.',
    color: '#F43F5E',
  },
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 28 }} />,
    title: 'Constraint-Based Solving',
    description:
      'Input your real-world limitations—budget caps, warehouse space, or lead times—and let IntelliPlan find the best path.',
    color: '#38BDF8',
  },
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28">
      {/* Subtle bg glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-electric-500/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3 block">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Core Modules
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Four integrated planning features built directly into your Azure tenant.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group relative bg-[#0F2137] border border-white/5 rounded-2xl p-6 lg:p-7 glow-hover cursor-default"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `${feature.color}10`,
                  color: feature.color,
                }}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-white font-semibold text-lg mb-2.5 font-display">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${feature.color}40, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
