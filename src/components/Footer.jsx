import { useScrollTo } from '../hooks'
import { FOOTER_SERVICES, FOOTER_COMPANY, CONTACT_INFO } from '../data/content'
import Logo from './Logo'

// ─── Social icon button ───────────────────────────────────────────────────────
function SocialBtn({ label }) {
  return (
    <div
      className="w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors select-none"
      style={{
        background: 'rgba(255,255,255,0.06)',
        border:     '1px solid rgba(255,255,255,0.08)',
      }}
      aria-label={label}
    >
      <span className="text-xs text-slate-400 font-medium">{label[0].toUpperCase()}</span>
    </div>
  )
}

// ─── Footer link button ───────────────────────────────────────────────────────
function FooterLink({ label, id, scrollTo }) {
  return (
    <li>
      <button
        onClick={() => scrollTo(id)}
        className="text-slate-400 text-sm hover:text-sky-400 transition-colors text-left"
      >
        {label}
      </button>
    </li>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
export default function Footer({ onPrivacyClick, onTermsClick }) {
  const scrollTo = useScrollTo()
  const year = new Date().getFullYear()

  // Pull the contact items we want displayed in footer
  const footerContactItems = CONTACT_INFO.slice(0, 3) // email, phone, location

  return (
    <footer style={{ background: '#020d1a' }}>
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">

        {/* ── Top grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="md:col-span-2">
            <Logo onClick={() => scrollTo('hero')} />

            <p
              className="text-slate-400 text-sm leading-relaxed max-w-xs mt-4"
              style={{ fontWeight: 400 }}
            >
              Myanmar's trusted local cloud specialist. Reliable managed cloud services for businesses
              of every size — built on enterprise infrastructure, delivered with local support.
            </p>

            <div className="flex gap-3 mt-5">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1DmwCx9sLf/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border:     '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Line */}
              <a
                href="https://line.me/ti/p/8y8vDx82wU"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border:     '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.661h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.625h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.21 22.5 1.5 17.79 1.5 12S6.21 1.5 12 1.5 22.5 6.21 22.5 12 17.79 22.5 12 22.5z"/>
                </svg>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/Isaac_lk12"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border:     '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5 uppercase tracking-widest">
              Services
            </h4>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((item) => (
                <FooterLink key={item.label} {...item} scrollTo={scrollTo} />
              ))}
            </ul>
          </div>

          {/* Company + Contact column */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5 uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-3 mb-8">
              {FOOTER_COMPANY.map((item) => (
                <FooterLink key={item.label} {...item} scrollTo={scrollTo} />
              ))}
            </ul>

            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-widest">
              Contact
            </h4>
            <div className="space-y-1.5">
              {footerContactItems.map((item) => (
                <p key={item.label} className="text-slate-400 text-sm">
                  {item.value}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="border-t flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <p className="text-slate-500 text-xs">
            © {year} NimbusCloud. All rights reserved. | Managed Cloud Services, Myanmar.
          </p>
          <div className="flex gap-6">
            <button
              onClick={onPrivacyClick}
              className="text-slate-500 text-xs hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={onTermsClick}
              className="text-slate-500 text-xs hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}
