import { useState } from 'react'
import FadeIn from './FadeIn'

export default function TermsOfService({ isOpen, onClose }) {
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
                <h2 className="text-2xl font-bold text-slate-900">Terms of Service</h2>
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
                  By using this website, you agree to these Terms of Service. Please read them carefully.
                </p>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">Our Services</h3>
                <p className="text-slate-600 mb-6">
                  We provide cloud-related services, including hosting, backup, migration, monitoring, and managed support. We may update or change our services at any time.
                </p>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">Use of the Website</h3>
                <p className="text-slate-600 mb-3">You agree not to:</p>
                <ul className="list-disc list-inside text-slate-600 mb-6 space-y-1">
                  <li>Use the website for illegal activity.</li>
                  <li>Try to damage, hack, or disrupt the website.</li>
                  <li>Send spam or harmful content.</li>
                  <li>Copy or misuse our content without permission.</li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">Service Availability</h3>
                <p className="text-slate-600 mb-6">
                  We try to keep our services available and working well. However, we do not guarantee that the website or services will always be error-free or uninterrupted.
                </p>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">Payments</h3>
                <p className="text-slate-600 mb-6">
                  If you buy a service from us, you agree to pay the listed price or the price in your service agreement. We may suspend or stop service if payment is late.
                </p>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">Refunds</h3>
                <p className="text-slate-600 mb-6">
                  Refunds, if any, will follow the rules in your service agreement or invoice. Some services may not be refundable once setup has started.
                </p>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">Limitation of Liability</h3>
                <p className="text-slate-600 mb-3">We are not responsible for losses caused by:</p>
                <ul className="list-disc list-inside text-slate-600 mb-6 space-y-1">
                  <li>Service downtime.</li>
                  <li>Data loss.</li>
                  <li>Third-party system problems.</li>
                  <li>Customer misuse of the service.</li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">Changes to These Terms</h3>
                <p className="text-slate-600 mb-6">
                  We may update these Terms of Service from time to time. If we make changes, we will post the updated version on this page.
                </p>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">Contact Us</h3>
                <p className="text-slate-600 mb-2">
                  If you have questions about these Terms, contact us at:
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
