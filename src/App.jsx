import { useState } from 'react'
import {
  Navbar,
  Hero,
  Services,
  WhyUs,
  Pricing,
  Contact,
  Footer,
  SectionDivider,
  PrivacyPolicy,
  TermsOfService,
} from './components'

/**
 * App
 * Root component — assembles all page sections in order.
 * All state, data, and logic live in their respective components/hooks.
 */
export default function App() {
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [showTerms, setShowTerms] = useState(false)

  const openPrivacy = () => setShowPrivacy(true)
  const openTerms = () => setShowTerms(true)
  const closePrivacy = () => setShowPrivacy(false)
  const closeTerms = () => setShowTerms(false)

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <SectionDivider />
        <WhyUs />
        <SectionDivider />
        <Pricing />
        <SectionDivider />
        <Contact />
      </main>

      <Footer 
        onPrivacyClick={openPrivacy}
        onTermsClick={openTerms}
      />

      <PrivacyPolicy isOpen={showPrivacy} onClose={closePrivacy} />
      <TermsOfService isOpen={showTerms} onClose={closeTerms} />
    </div>
  )
}
