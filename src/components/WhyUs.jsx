import { useScrollTo } from '../hooks'
import { TRUST_ITEMS } from '../data/content'
import { TRUST_ICONS, IconArrowRight } from './Icons'
import FadeIn from './FadeIn'

// ─── Single trust item card ───────────────────────────────────────────────────
function TrustCard({ item, delay }) {
  const Icon = TRUST_ICONS[item.id]

  return (
    <FadeIn delay={delay}>
      <div
        className="card-hover flex gap-4 p-5 rounded-2xl border bg-slate-50"
        style={{ borderColor: 'rgba(14,165,233,0.1)' }}
      >
        <div
          className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-sky-500"
          style={{
            background: 'linear-gradient(135deg, rgba(14,165,233,0.12), rgba(56,189,248,0.06))',
            border:     '1px solid rgba(14,165,233,0.15)',
          }}
        >
          {Icon && <Icon className="w-6 h-6" />}
        </div>
        <div>
          <h4 className="text-slate-900 text-sm mb-1" style={{ fontWeight: 600 }}>
            {item.title}
          </h4>
          <p className="text-slate-500 text-sm leading-relaxed" style={{ fontWeight: 400 }}>
            {item.body}
          </p>
        </div>
      </div>
    </FadeIn>
  )
}

// ─── Why Us Section ───────────────────────────────────────────────────────────
export default function WhyUs() {
  const scrollTo = useScrollTo()

  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ── Left: copy ── */}
          <FadeIn>
            <span className="text-sky-500 text-xs font-bold tracking-widest uppercase mb-3 block">
              Why NimbusCloud
            </span>
            <h2
              className="font-display text-3xl md:text-5xl text-slate-900 mb-6"
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              Local Knowledge.<br />
              <span style={{ color: '#0ea5e9' }}>Global Standards.</span>
            </h2>
            <p
              className="text-slate-500 text-base leading-relaxed mb-8"
              style={{ fontWeight: 400 }}
            >
              We combine enterprise-grade cloud capabilities with the responsiveness and cultural
              understanding that only a local Myanmar team can deliver. Your business deserves both.
            </p>
            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary text-white px-7 py-3.5 rounded-xl font-semibold text-sm inline-flex items-center gap-2"
            >
              Talk to Our Team
              <IconArrowRight className="w-4 h-4" />
            </button>
          </FadeIn>

          {/* ── Right: trust cards ── */}
          <div className="grid grid-cols-1 gap-5">
            {TRUST_ITEMS.map((item, i) => (
              <TrustCard key={item.id} item={item} delay={i * 0.1} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
