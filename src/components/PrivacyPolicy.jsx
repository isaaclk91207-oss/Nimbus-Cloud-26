import { useState } from 'react'
import FadeIn from './FadeIn'

export default function PrivacyPolicy({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />
        
        {/* Modal */}
        <FadeIn>
          <div className="relative bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-slate-200 px-8 py-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">Privacy Policy</h2>
                <button
                  onClick={onClose}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-slate-500 mt-2">Effective Date: April 22, 2026</p>
            </div>

            {/* Content */}
            <div className="px-8 py-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 mb-6">
                  We respect your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or contact us.
                </p>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">Information We Collect</h3>
                <p className="text-slate-600 mb-3">We may collect the following information:</p>
                <ul className="list-disc list-inside text-slate-600 mb-6 space-y-1">
                  <li>Isaac LK .</li>
                  <li>isaaclk99@gmail.com.</li>
                  <li>09-794600151</li>
                  <li>NimBus Cloud.</li>
                  <li>The message you send us.</li>
                  <li>Your IP address and browser information.</li>
                  <li>Cookies and similar tracking data.</li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">How We Use Your Information</h3>
                <p className="text-slate-600 mb-3">We use your information to:</p>
                <ul className="list-disc list-inside text-slate-600 mb-6 space-y-1">
                  <li>Respond to your inquiry.</li>
                  <li>Provide quotes and service information.</li>
                  <li>Offer customer support.</li>
                  <li>Improve our website and services.</li>
                  <li>Send important updates if needed.</li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">How We Share Information</h3>
                <p className="text-slate-600 mb-4">
                  We do not sell your personal information. We may share information only with trusted service providers who help us run our website, email, hosting, analytics, or payment services.
                </p>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">Cookies</h3>
                <p className="text-slate-600 mb-6">
                  Our website may use cookies to improve your browsing experience and analyze website traffic. You can turn off cookies in your browser settings.
                </p>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">Data Security</h3>
                <p className="text-slate-600 mb-6">
                  We take reasonable steps to protect your personal information. However, no online system is completely secure.
                </p>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">Your Rights</h3>
                <p className="text-slate-600 mb-3">You may ask us to:</p>
                <ul className="list-disc list-inside text-slate-600 mb-6 space-y-1">
                  <li>See the information we have about you.</li>
                  <li>Correct your information.</li>
                  <li>Delete your information, where allowed by law.</li>
                  <li>Stop receiving marketing emails.</li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">Contact Us</h3>
                <p className="text-slate-600 mb-2">
                  If you have any questions about this Privacy Policy, contact us at:
                </p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-slate-600"><strong>Email:</strong> nimbuscloud.asia@gmail.com</p>
                  <p className="text-slate-600"><strong>Address:</strong> Yangon, Myanmar</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
