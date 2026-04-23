// ─── Navigation ──────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Services', id: 'services' },
  { label: 'Pricing',  id: 'pricing'  },
  { label: 'Why Us',   id: 'why-us'   },
  { label: 'Contact',  id: 'contact'  },
]

// ─── Hero Stats ───────────────────────────────────────────────────────────────
export const HERO_STATS = [
  { value: '99.9%',  label: 'Uptime SLA'      },
  { value: '< 1hr',  label: 'Response Time'   },
  { value: '100+',   label: 'Clients Served'  },
]

// ─── Services ─────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id:   'hosting',
    tag:  'Infrastructure',
    title: 'Cloud Hosting & VPS',
    desc:  'Scalable virtual private servers and cloud hosting tailored for Myanmar businesses — with guaranteed uptime, flexible resources, and local latency advantages.',
  },
  {
    id:   'backup',
    tag:  'Resilience',
    title: 'Backup & Disaster Recovery',
    desc:  'Automated daily backups, geo-redundant storage, and rapid restoration plans so your business never loses critical data — even in a crisis.',
  },
  {
    id:   'managed',
    tag:  'Managed',
    title: 'Managed Cloud Support',
    desc:  'Full-service management of your cloud environment — patching, configuration, optimization, and proactive maintenance handled by local experts.',
  },
  {
    id:   'migration',
    tag:  'Migration',
    title: 'Migration Services',
    desc:  'Seamless cloud migration from on-premise or other providers, with zero-downtime strategies and complete data integrity checks throughout the process.',
  },
  {
    id:   'monitoring',
    tag:  'Security',
    title: 'Monitoring & Security',
    desc:  '24/7 real-time infrastructure monitoring, threat detection, SSL management, firewall configuration, and instant alerts — keeping your systems secure around the clock.',
  },
]

// ─── Pricing Plans ────────────────────────────────────────────────────────────
export const PLANS = [
  {
    name:      'Starter',
    price:     '$49',
    period:    '/month',
    desc:      'For small businesses and startups getting started in the cloud.',
    highlight: false,
    cta:       'Get Started',
    features: [
      '1 vCPU / 2 GB RAM',
      '50 GB SSD Storage',
      'Daily Automated Backups',
      'Basic Monitoring',
      'Email Support (48h SLA)',
      'SSL Certificate Included',
    ],
  },
  {
    name:      'Business',
    price:     '$149',
    period:    '/month',
    desc:      'For growing companies that need reliability and managed support.',
    highlight: true,
    cta:       'Most Popular',
    features: [
      '4 vCPU / 8 GB RAM',
      '250 GB SSD Storage',
      'Hourly Backups + Offsite Copy',
      'Advanced Monitoring & Alerts',
      'Priority Support (8h SLA)',
      'Managed Patching & Updates',
      'Migration Assistance Included',
    ],
  },
  {
    name:      'Enterprise',
    price:     'Custom',
    period:    '',
    desc:      'For large organisations needing dedicated resources and full management.',
    highlight: false,
    cta:       'Contact Us',
    features: [
      'Dedicated Resources',
      'Custom Storage & Bandwidth',
      'Full Disaster Recovery Plan',
      '24/7 NOC Monitoring',
      'Dedicated Account Manager',
      'On-site Consultation Available',
      'Custom SLA Agreement',
    ],
  },
]

// ─── Why Choose Us ────────────────────────────────────────────────────────────
export const TRUST_ITEMS = [
  {
    id:    'local',
    title: 'Local Expert, On the Ground',
    body:  'We are based in Myanmar and understand the unique connectivity, compliance, and operational needs of local businesses — no overseas call centres, just real local help.',
  },
  {
    id:    'response',
    title: 'Fast Response Times',
    body:  'Our team operates within Myanmar business hours and beyond. Critical incidents are responded to within the hour — because downtime costs real money.',
  },
  {
    id:    'enterprise',
    title: 'Enterprise-Grade Infrastructure',
    body:  'Our clients run on the same world-class infrastructure trusted by global enterprises — delivered at a price and scale that makes sense for Myanmar SMEs.',
  },
  {
    id:    'pricing',
    title: 'Transparent, Honest Pricing',
    body:  'No hidden fees, no surprise invoices. Every plan is clearly scoped. We grow with your business — and our pricing grows only when yours does.',
  },
]

// ─── Contact Info ─────────────────────────────────────────────────────────────
export const CONTACT_INFO = [
  { icon: '📧', label: 'Email',         value: 'nimbuscloud.asia@gmail.com'  },
  { icon: '📞', label: 'Phone / Viber', value: '09-794600151'               },
  { icon: '🏙️', label: 'Location',      value: 'Yangon, Myanmar'           },
  { icon: '⏰', label: 'Office Hours',  value: 'Mon–Fri, 9 AM – 6 PM (MMT)'},
]

// ─── Footer Links ─────────────────────────────────────────────────────────────
export const FOOTER_SERVICES = [
  { label: 'Cloud Hosting & VPS',   id: 'services'  },
  { label: 'Backup & Recovery',     id: 'services'  },
  { label: 'Managed Support',       id: 'services'  },
  { label: 'Cloud Migration',       id: 'services'  },
  { label: 'Monitoring & Security', id: 'services'  },
]

export const FOOTER_COMPANY = [
  { label: 'Pricing',      id: 'pricing'  },
  { label: 'Why Choose Us', id: 'why-us'  },
  { label: 'Contact Us',   id: 'contact'  },
]

// ─── Service Interest Options (Contact Form) ──────────────────────────────────
export const SERVICE_OPTIONS = [
  'Cloud Hosting / VPS',
  'Backup & Disaster Recovery',
  'Managed Cloud Support',
  'Migration Services',
  'Monitoring & Security',
  'General Inquiry',
]
