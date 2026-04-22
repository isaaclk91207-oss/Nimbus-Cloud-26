import { useScrollTo } from '../hooks'
import { HERO_STATS } from '../data/content'
import { IconArrowRight } from './Icons'

export default function Hero() {
  const scrollTo = useScrollTo()

  return (
    <section
      id="hero"
      className="hero-bg grid-pattern min-h-screen flex items-center relative overflow-hidden"
      style={{ paddingTop: '80px' }}
    >
      {/* ── Decorative floating blobs ── */}
      <div
        className="floating-blob absolute top-1/4 right-8 w-72 h-72 rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.6), transparent 70%)' }}
      />
      <div
        className="floating-blob-delayed absolute bottom-1/4 left-4 w-48 h-48 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.8), transparent 70%)' }}
      />

      {/* ── Content ── */}
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 relative z-10 w-full">
        <div className="max-w-3xl">

          {/* Label badge */}
          <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full tag-badge">
            <span className="glow-dot w-2 h-2 rounded-full bg-sky-400 inline-block" />
            <span className="text-sky-300 text-xs font-semibold tracking-widest uppercase">
              Myanmar's Local Cloud Specialist
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
            style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            Cloud Infrastructure<br />
            <span className="gradient-text">Built for Myanmar</span><br />
            Business.
          </h1>

          {/* Subheadline */}
          <p
            className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            style={{ fontWeight: 300 }}
          >
            Trusted managed cloud services — hosting, backup, migration, and 24/7 support —
            delivered by local experts who understand your business environment.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary text-white px-8 py-4 rounded-xl font-semibold text-base inline-flex items-center gap-2.5"
            >
              Schedule a Free Consultation
              <IconArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="btn-outline border text-white px-8 py-4 rounded-xl font-semibold text-base"
              style={{ borderColor: 'rgba(255,255,255,0.15)' }}
            >
              Explore Services
            </button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-lg">
            {HERO_STATS.map(({ value, label }) => (
              <div key={label} className="stat-card rounded-xl p-4 text-center">
                <div
                  className="font-display text-2xl mb-1"
                  style={{ fontWeight: 700, color: '#38bdf8' }}
                >
                  {value}
                </div>
                <div className="text-xs text-slate-400" style={{ fontWeight: 500 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom fade to white ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #f8fafc)' }}
      />
    </section>
  )
}
