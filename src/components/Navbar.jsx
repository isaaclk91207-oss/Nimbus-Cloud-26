import { useState } from 'react'
import { useScrolled, useScrollTo } from '../hooks'
import { NAV_LINKS } from '../data/content'
import Logo from './Logo'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled  = useScrolled(40)
  const scrollTo  = useScrollTo()

  const handleNav = (id) => {
    scrollTo(id)
    setMenuOpen(false)
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background:    scrolled ? 'rgba(2,13,26,0.92)' : 'transparent',
        backdropFilter:scrolled ? 'blur(20px)'          : 'none',
        borderBottom:  scrolled ? '1px solid rgba(14,165,233,0.12)' : 'none',
      }}
    >
      {/* ── Desktop bar ── */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo onClick={() => handleNav('hero')} />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className="nav-link text-sm text-slate-300 hover:text-white transition-colors"
              style={{ fontWeight: 500 }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNav('contact')}
            className="btn-primary text-white text-sm px-5 py-2.5 rounded-lg font-semibold"
          >
            Get a Free Consultation
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span
            className="block w-5 h-0.5 bg-white mb-1.5 transition-all duration-200"
            style={{ transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }}
          />
          <span
            className="block w-5 h-0.5 bg-white mb-1.5 transition-all duration-200"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-5 h-0.5 bg-white transition-all duration-200"
            style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }}
          />
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6" style={{ background: 'rgba(2,13,26,0.97)' }}>
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className="block w-full text-left text-slate-300 py-3 text-sm"
              style={{
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                fontWeight: 500,
              }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNav('contact')}
            className="btn-primary w-full text-white text-sm px-5 py-3 rounded-lg font-semibold mt-4"
          >
            Get a Free Consultation
          </button>
        </div>
      )}
    </nav>
  )
}
