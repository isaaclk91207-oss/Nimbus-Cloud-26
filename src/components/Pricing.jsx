import { useScrollTo } from '../hooks'
import { PLANS } from '../data/content'
import { IconCheck } from './Icons'
import FadeIn from './FadeIn'

// ─── Single Plan Card ─────────────────────────────────────────────────────────
function PlanCard({ plan, delay, onSelect }) {
  return (
    <FadeIn delay={delay}>
      <div
        className={`rounded-2xl p-8 flex flex-col h-full ${
          plan.highlight
            ? 'plan-highlight shadow-plan'
            : 'bg-white border'
        }`}
        style={
          plan.highlight
            ? { transform: 'scale(1.04)' }
            : { borderColor: 'rgba(14,165,233,0.12)' }
        }
      >
        {/* Popular badge */}
        {plan.highlight && (
          <div className="inline-block text-xs font-bold text-sky-300 tracking-widest uppercase mb-5 bg-white/10 px-3 py-1 rounded-full self-start">
            ★ Most Popular
          </div>
        )}

        {/* Plan name + description */}
        <h3
          className={`font-display text-xl mb-1 ${plan.highlight ? 'text-white' : 'text-slate-900'}`}
          style={{ fontWeight: 700 }}
        >
          {plan.name}
        </h3>
        <p
          className={`text-sm mb-6 ${plan.highlight ? 'text-sky-200' : 'text-slate-500'}`}
          style={{ fontWeight: 400 }}
        >
          {plan.desc}
        </p>

        {/* Price */}
        <div className="flex items-end gap-1 mb-8">
          <span
            className={`font-display text-4xl ${plan.highlight ? 'text-white' : 'text-slate-900'}`}
            style={{ fontWeight: 800 }}
          >
            {plan.price}
          </span>
          {plan.period && (
            <span
              className={`text-sm mb-1.5 ${plan.highlight ? 'text-sky-300' : 'text-slate-400'}`}
            >
              {plan.period}
            </span>
          )}
        </div>

        {/* Feature list */}
        <ul className="space-y-3 flex-1 mb-8">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5">
              <IconCheck
                className={`w-5 h-5 mt-0.5 shrink-0 ${plan.highlight ? 'text-sky-300' : 'text-sky-500'}`}
              />
              <span
                className={`text-sm ${plan.highlight ? 'text-sky-100' : 'text-slate-600'}`}
                style={{ fontWeight: 400 }}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <button
          onClick={onSelect}
          className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all ${
            plan.highlight
              ? 'bg-white text-sky-700 hover:bg-sky-50'
              : 'btn-primary text-white'
          }`}
        >
          {plan.cta}
        </button>
      </div>
    </FadeIn>
  )
}

// ─── Pricing Section ──────────────────────────────────────────────────────────
export default function Pricing() {
  const scrollTo = useScrollTo()

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <FadeIn className="text-center mb-16">
          <span className="text-sky-500 text-xs font-bold tracking-widest uppercase mb-3 block">
            Pricing
          </span>
          <h2
            className="font-display text-3xl md:text-5xl text-slate-900 mb-4"
            style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            Simple, Transparent Plans
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto" style={{ fontWeight: 400 }}>
            Monthly managed cloud services with no hidden fees. Start small, scale as you grow.
          </p>
        </FadeIn>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((plan, i) => (
            <PlanCard
              key={plan.name}
              plan={plan}
              delay={i * 0.1}
              onSelect={() => scrollTo('contact')}
            />
          ))}
        </div>

        {/* Footer note */}
        <FadeIn className="text-center mt-10">
          <p className="text-slate-500 text-sm">
            All plans include onboarding support. Need something custom?{' '}
            <button
              onClick={() => scrollTo('contact')}
              className="text-sky-500 font-semibold hover:underline"
            >
              Contact us
            </button>{' '}
            for a tailored quote.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
