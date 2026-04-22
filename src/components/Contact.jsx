import { useState } from 'react'
import { CONTACT_INFO, SERVICE_OPTIONS } from '../data/content'
import { IconCheckCircle, IconSend } from './Icons'
import FadeIn from './FadeIn'

// ─── Contact Info Item ────────────────────────────────────────────────────────
function InfoItem({ item }) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
        style={{
          background: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(56,189,248,0.06))',
          border:     '1px solid rgba(14,165,233,0.12)',
        }}
      >
        {item.icon}
      </div>
      <div>
        <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
          {item.label}
        </div>
        <div className="text-slate-700 text-sm font-medium">{item.value}</div>
      </div>
    </div>
  )
}

// ─── Success State ────────────────────────────────────────────────────────────
function SuccessMessage() {
  return (
    <div
      className="flex flex-col items-center justify-center h-full text-center py-16 rounded-2xl border"
      style={{
        borderColor: 'rgba(14,165,233,0.15)',
        background:  'rgba(14,165,233,0.03)',
      }}
    >
      <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center text-sky-500 mb-5">
        <IconCheckCircle className="w-8 h-8" />
      </div>
      <h3 className="font-display text-xl text-slate-900 mb-2" style={{ fontWeight: 700 }}>
        Message Received!
      </h3>
      <p className="text-slate-500 text-sm max-w-xs">
        Thank you for reaching out. Our team will contact you within one business day.
      </p>
    </div>
  )
}

// ─── Contact Form ─────────────────────────────────────────────────────────────
function ContactForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', service: '', message: '',
  })

  const set = (field) => (e) => setFormData({ ...formData, [field]: e.target.value })

  const inputClass = 'form-input w-full rounded-xl px-4 py-3 text-sm text-slate-700'

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit() }} className="space-y-5">

      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
            Full Name *
          </label>
          <input
            required
            value={formData.name}
            onChange={set('name')}
            placeholder="Mg Aung Ko"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
            Email *
          </label>
          <input
            required
            type="email"
            value={formData.email}
            onChange={set('email')}
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>
      </div>

      {/* Company */}
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
          Company / Organisation
        </label>
        <input
          value={formData.company}
          onChange={set('company')}
          placeholder="Your Company Ltd."
          className={inputClass}
        />
      </div>

      {/* Service interest */}
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
          Service Interest *
        </label>
        <select
          required
          value={formData.service}
          onChange={set('service')}
          className={`${inputClass} appearance-none cursor-pointer`}
        >
          <option value="">Select a service…</option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
          Message
        </label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={set('message')}
          placeholder="Tell us about your current setup and what you'd like to achieve…"
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="btn-primary w-full text-white py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2.5"
      >
        Send Message
        <IconSend className="w-4 h-4" />
      </button>

      <p className="text-xs text-slate-400 text-center">
        By submitting this form, you agree that we may contact you about your inquiry and process your information according to our Privacy Policy.
      </p>
    </form>
  )
}

// ─── Contact Section ──────────────────────────────────────────────────────────
export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">

          {/* ── Left: info ── */}
          <FadeIn>
            <span className="text-sky-500 text-xs font-bold tracking-widest uppercase mb-3 block">
              Get In Touch
            </span>
            <h2
              className="font-display text-3xl md:text-4xl text-slate-900 mb-5"
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              Let's Talk About<br />Your Cloud Needs
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-10" style={{ fontWeight: 400 }}>
              Whether you're migrating from on-premise, looking for better hosting, or need managed
              ongoing support — we're here to help. Fill in the form and we'll get back to you within
              one business day.
            </p>
            <div className="space-y-5">
              {CONTACT_INFO.map((item) => (
                <InfoItem key={item.label} item={item} />
              ))}
            </div>
          </FadeIn>

          {/* ── Right: form or success ── */}
          <FadeIn delay={0.1}>
            {submitted
              ? <SuccessMessage />
              : <ContactForm onSubmit={() => setSubmitted(true)} />
            }
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
