import { useScrollTo } from '../hooks'
import { SERVICES } from '../data/content'
import { SERVICE_ICONS, IconArrowRight, IconChat } from './Icons'
import FadeIn from './FadeIn'

// ─── Single Service Card ──────────────────────────────────────────────────────
function ServiceCard({ service, delay, onContact }) {
  const Icon = SERVICE_ICONS[service.id]

  return (
    <FadeIn delay={delay}>
      <div
        className="card-hover bg-white rounded-2xl p-7 border h-full flex flex-col"
        style={{ borderColor: 'rgba(14,165,233,0.12)' }}
      >
        {/* Header row */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-sky-500"
            style={{
              background: 'linear-gradient(135deg, rgba(14,165,233,0.12), rgba(56,189,248,0.06))',
              border:     '1px solid rgba(14,165,233,0.15)',
            }}
          >
            {Icon && <Icon className="w-7 h-7" />}
          </div>
          <span className="tag-badge text-xs text-sky-600 px-3 py-1 rounded-full font-semibold">
            {service.tag}
          </span>
        </div>

        <h3 className="font-display text-lg text-slate-900 mb-3" style={{ fontWeight: 700 }}>
          {service.title}
        </h3>

        <p className="text-slate-500 text-sm leading-relaxed flex-1" style={{ fontWeight: 400 }}>
          {service.desc}
        </p>

        <button
          onClick={onContact}
          className="mt-5 text-sky-500 text-sm font-semibold hover:text-sky-600 flex items-center gap-1.5 group"
        >
          Learn More
          <IconArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </FadeIn>
  )
}

// ─── CTA Card (last slot in grid) ────────────────────────────────────────────
function CtaCard({ onContact }) {
  return (
    <FadeIn delay={0.4}>
      <div
        className="rounded-2xl p-7 flex flex-col justify-between h-full"
        style={{
          background: 'linear-gradient(135deg, #0c4a6e, #0369a1)',
          border:     '1px solid rgba(14,165,233,0.3)',
        }}
      >
        <div>
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-5">
            <IconChat className="w-7 h-7" />
          </div>
          <h3 className="font-display text-lg text-white mb-3" style={{ fontWeight: 700 }}>
            Not sure what you need?
          </h3>
          <p className="text-sky-200 text-sm leading-relaxed" style={{ fontWeight: 400 }}>
            Book a free 30-minute consultation and we'll map out the right cloud strategy for your business.
          </p>
        </div>
        <button
          onClick={onContact}
          className="mt-6 bg-white text-sky-700 text-sm px-5 py-3 rounded-xl font-bold hover:bg-sky-50 transition-colors"
        >
          Book Free Consultation →
        </button>
      </div>
    </FadeIn>
  )
}

// ─── Services Section ─────────────────────────────────────────────────────────
export default function Services() {
  const scrollTo = useScrollTo()

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <FadeIn className="text-center mb-16">
          <span className="text-sky-500 text-xs font-bold tracking-widest uppercase mb-3 block">
            What We Offer
          </span>
          <h2
            className="font-display text-3xl md:text-5xl text-slate-900 mb-4"
            style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            Full-Stack Cloud Services
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto" style={{ fontWeight: 400 }}>
            From infrastructure to ongoing management, we cover every layer of your cloud needs.
          </p>
        </FadeIn>

        {/* Cards grid: 5 service cards + 1 CTA card = 6 cells, 3-col on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              delay={i * 0.08}
              onContact={() => scrollTo('contact')}
            />
          ))}
          <CtaCard onContact={() => scrollTo('contact')} />
        </div>
      </div>
    </section>
  )
}
