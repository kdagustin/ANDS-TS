import { useState, useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Wifi, 
  Shield, 
  FileText, 
  Menu, 
  X, 
  CheckCircle2, 
  AlertTriangle, 
  Server, 
  Calendar, 
  HelpCircle,
  AlertCircle
} from 'lucide-react';

const SECTIONS = [
  { id: 'nature', title: '1. NATURE OF SERVICE' },
  { id: 'plans', title: '2. SERVICE PLANS & SUBSCRIPTIONS' },
  { id: 'application', title: '3. APPLICATION, SERVICEABILITY & INSTALLATION' },
  { id: 'equipment', title: '4. EQUIPMENT & REMOTE MANAGEMENT' },
  { id: 'roaming', title: '5. WIFI ROAMING POLICY' },
  { id: 'performance', title: '6. SERVICE PERFORMANCE & AVAILABILITY' },
  { id: 'fup', title: '7. FAIR USE POLICY (FUP)' },
  { id: 'billing', title: '8. PLANS, FEES & BILLING' },
  { id: 'payment', title: '9. PAYMENT TERMS' },
  { id: 'late-payment', title: '10. LATE PAYMENT, ISOLATION & RECONNECTION' },
  { id: 'plan-changes', title: '11. PLAN CHANGES & RELOCATION' },
  { id: 'cancellation', title: '12. MINIMUM TERM & CANCELLATION' },
  { id: 'acceptable-use', title: '13. ACCEPTABLE USE POLICY' },
  { id: 'privacy', title: '14. DATA PRIVACY & PROTECTION (RA 10173)' },
  { id: 'responsibilities', title: '15. CUSTOMER RESPONSIBILITIES' },
  { id: 'interruptions', title: '16. SERVICE INTERRUPTIONS & REBATES' },
  { id: 'support', title: '17. SUPPORT & FAULT REPORTING' },
  { id: 'suspension', title: '18. SUSPENSION & TERMINATION' },
  { id: 'liability', title: '19. LIMITATION OF LIABILITY' },
  { id: 'modification', title: '20. MODIFICATION OF TERMS' },
  { id: 'governing-law', title: '21. GOVERNING LAW & DISPUTES' },
  { id: 'acknowledgment', title: '22. ACKNOWLEDGMENT & ACCEPTANCE' },
];

export default function App() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = SECTIONS.map((s) => document.getElementById(s.id));
      
      let currentActiveId = SECTIONS[0].id;
      for (const el of sectionElements) {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            currentActiveId = el.id;
          }
        }
      }
      setActiveSection(currentActiveId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-orange-200 selection:text-orange-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Area */}
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="Agustin Network Logo" className="w-12 h-12 object-contain drop-shadow-sm" />
              <div>
                <h1 className="text-xl font-bold text-blue-900 leading-tight tracking-tight">
                  AGUSTIN NETWORK
                </h1>
                <p className="text-xs font-semibold text-orange-600 tracking-wider uppercase">
                  And Data Solution
                </p>
              </div>
            </div>

            {/* Desktop Contact Info */}
            <div className="hidden md:flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>Sitio Malamig, Umiray, Dingalan, Aurora</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>+639692101682</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div 
            className="absolute right-0 top-20 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl overflow-y-auto border-l border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Table of Contents</h3>
                <span className="text-xs text-orange-600 font-semibold">{SECTIONS.length} Sections</span>
              </div>
              <nav className="space-y-1">
                {SECTIONS.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                      activeSection === section.id
                        ? 'bg-orange-50 text-orange-700 font-bold border-l-4 border-orange-500'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Page Title Header */}
        <div className="mb-12 border-b-2 border-orange-500 pb-8">
          <div className="flex items-center gap-3 mb-4 text-orange-600">
            <FileText className="w-6 h-6" />
            <span className="font-semibold tracking-wider uppercase text-sm">Customer Service Agreement & Terms of Service</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Customer Service Agreement
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl leading-relaxed">
            These Terms of Service ("Terms" or "Agreement") govern the internet service provided by <strong className="text-slate-900">Agustin Network</strong> ("we", "us" or "our"), operating under the name <strong className="text-slate-900">Agustin Hotspot & Pisonet</strong>, with principal address at Sitio Malamig, Umiray, Dingalan, Aurora ("Provider"), to you, the subscriber ("Subscriber" or "Customer").
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 inline-flex items-start gap-3 bg-blue-50 text-blue-900 p-4 rounded-xl border border-blue-100 shadow-sm">
              <Shield className="w-5 h-5 flex-shrink-0 text-blue-600 mt-0.5" />
              <p className="text-sm font-medium leading-relaxed">
                They form a binding agreement between us the moment you submit an application, accept an installation, purchase or activate a voucher, or use or pay for the service.
              </p>
            </div>
            <div className="flex-1 inline-flex items-start gap-3 bg-orange-50 text-orange-950 p-4 rounded-xl border border-orange-100 shadow-sm">
              <AlertCircle className="w-5 h-5 flex-shrink-0 text-orange-600 mt-0.5" />
              <p className="text-sm font-medium leading-relaxed">
                Please read them together with our Privacy Policy. If you do not agree with these Terms, do not apply for, purchase, or use the service.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 relative">
          
          {/* Desktop Sidebar Navigation */}
          <aside className="hidden md:block w-72 flex-shrink-0">
            <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
              <div className="flex items-center justify-between mb-4 px-3">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Table of Contents</h3>
                <span className="text-[11px] font-semibold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">{SECTIONS.length} Sections</span>
              </div>
              <nav className="space-y-0.5 border-l-2 border-slate-100">
                {SECTIONS.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left pl-3.5 pr-2 py-1.5 text-xs font-medium transition-all duration-150 relative block ${
                      activeSection === section.id
                        ? 'text-orange-600 font-bold bg-orange-50/60 rounded-r-md'
                        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/60 rounded-r-md'
                    }`}
                  >
                    {activeSection === section.id && (
                      <span className="absolute left-[-2px] top-0 bottom-0 w-0.5 bg-orange-500 rounded-r-full" />
                    )}
                    <span className="truncate block">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Document Content */}
          <main className="flex-1 max-w-3xl prose prose-slate prose-headings:text-slate-900 prose-headings:font-bold prose-h3:text-lg prose-p:text-slate-600 prose-li:text-slate-600 prose-strong:text-slate-900">
            
            {/* 1. NATURE OF SERVICE */}
            <section id="nature" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">1</span>
                NATURE OF SERVICE
              </h3>
              <div className="space-y-4">
                <p>
                  <strong>1.1 General Scope:</strong> We provide internet access to your home, business, or device at the plan and speed you select. Service is delivered over our network to a single service address or via designated community access points, and is intended for use at that address or covered hotspot zones only.
                </p>
                <p>
                  <strong>1.2 Wireless Broadband & Community WiFi:</strong> The Provider offers wireless broadband internet access via a WiFi hotspot network and dedicated residential distribution covering designated areas within the barangay.
                </p>
                <p>
                  <strong>1.3 Shared Best-Effort Basis:</strong> The service operates on a <strong>shared, best-effort basis</strong>, consistent with community and public WiFi systems, and is subject to applicable <strong>National Telecommunications Commission (NTC)</strong> rules and regulations.
                </p>
                <p>
                  <strong>1.4 Maximum Speeds:</strong> Advertised plan speeds are <strong>maximum theoretical speeds ("up to")</strong> attainable under ideal conditions and are <strong>not a guaranteed constant rate</strong> at all times.
                </p>
              </div>
            </section>

            {/* 2. SERVICE PLANS AND SUBSCRIPTIONS */}
            <section id="plans" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">2</span>
                SERVICE PLANS & SUBSCRIPTIONS
              </h3>
              
              <div className="mb-8">
                <h4 className="text-lg font-bold text-slate-800 mb-3">2.1 Device-Based Prepaid Plans (Per Device / Voucher)</h4>
                <p className="mb-4 text-slate-600">Each Device Plan allows <strong>one (1) device connection at any given time</strong>:</p>
                
                <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                  <div className="bg-slate-50 px-6 py-3 border-b border-slate-200">
                    <h5 className="font-semibold text-slate-700">Prepaid Device Plans</h5>
                  </div>
                  <ul className="divide-y divide-slate-100">
                    {[
                      { name: 'Plan P5', duration: '1 Hour', speed: 'Up to 25mbps' },
                      { name: 'Plan P10', duration: '3 Hours', speed: 'Up to 25mbps' },
                      { name: 'Plan P15', duration: '6 Hours', speed: 'Up to 25mbps' },
                      { name: 'Plan P20', duration: '12 Hours', speed: 'Up to 25mbps' },
                      { name: 'Plan P30', duration: '1 Day', speed: 'Up to 25mbps' },
                      { name: 'Plan P149', duration: '7 Days', speed: 'Up to 35mbps' },
                      { name: 'Plan P249', duration: '15 Days', speed: 'Up to 35mbps' },
                      { name: 'Plan P300', duration: '1 Month (TV)', speed: 'Up to 15mbps' },
                      { name: 'Plan P399', duration: '30 Days', speed: 'Up to 15mbps' },
                      { name: 'Plan P449', duration: '30 Days', speed: 'Up to 50mbps' },
                      { name: 'Plan P499', duration: '30 Days', speed: 'Up to 150mbps' },
                    ].map((plan, i) => (
                      <li key={i} className="px-6 py-3 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                          <span className="font-bold text-slate-800">{plan.name}</span>
                          <span className="text-slate-500 hidden sm:inline">•</span>
                          <span className="text-slate-600">{plan.duration}</span>
                        </div>
                        <span className="text-sm font-medium text-slate-500 mt-1 sm:mt-0 ml-7 sm:ml-0 bg-slate-100 px-2.5 py-1 rounded-md">
                          {plan.speed}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-800 mb-3">2.2 Monthly / Home Internet Plans</h4>
                <p className="mb-4 text-slate-600">Monthly plans are intended for <strong>continuous and regular residential or business use</strong>, subject to our Fair Use Policy:</p>
                
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { name: 'Plan P999', speed: '35Mbps / month', devices: 'Up to 5 devices' },
                    { name: 'Plan P1199', speed: '45Mbps / month', devices: 'Up to 7 devices' },
                    { name: 'Plan P1499', speed: '70Mbps / month', devices: 'Up to 10 devices' },
                  ].map((plan, i) => (
                    <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-orange-300 transition-colors">
                      <div className="font-bold text-xl text-slate-900 mb-1">{plan.name}</div>
                      <div className="text-orange-600 font-medium mb-2">{plan.speed}</div>
                      <div className="text-sm text-slate-500 flex items-center gap-1.5">
                        <Wifi className="w-4 h-4 text-slate-400" />
                        {plan.devices}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-500 italic bg-slate-100 p-4 rounded-lg border border-slate-200">
                  The Provider reserves the right to manage bandwidth allocation to maintain network stability across the entire community.
                </p>
              </div>
            </section>

            {/* 3. APPLICATION, SERVICEABILITY AND INSTALLATION */}
            <section id="application" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">3</span>
                APPLICATION, SERVICEABILITY & INSTALLATION
              </h3>
              <div className="space-y-4">
                <p>
                  <strong>3.1 Request for Service:</strong> An application is a request for service, not an automatic acceptance of it. We review each application, confirm serviceability at your location, and may ask for government-issued identification or proof of billing before approving it.
                </p>
                <p>
                  <strong>3.2 Availability & Coverage:</strong> Availability strictly depends on our network coverage. We may decline or defer an application where your location is outside our coverage area, where no port is available at the nearest network access point, or where installation is not technically feasible.
                </p>
                <p>
                  <strong>3.3 Premises Access & Property Permission:</strong> You agree to provide safe access to the premises on the agreed date, a suitable grounded electrical outlet for the equipment, and written permission from the property owner where you are renting or not the legal owner.
                </p>
                <p>
                  <strong>3.4 Activation & Rescheduling:</strong> Service officially begins on the date of physical installation and activation. Installations may be rescheduled where weather conditions, safety hazards, or inaccessible premises prevent work.
                </p>
              </div>
            </section>

            {/* 4. EQUIPMENT AND REMOTE MANAGEMENT */}
            <section id="equipment" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">4</span>
                EQUIPMENT & REMOTE MANAGEMENT
              </h3>
              <div className="space-y-4">
                <p>
                  <strong>4.1 Care of Equipment:</strong> You agree to keep the modem, ONU, antenna, or router installed at your premises in good condition and not to open, tamper with, modify, or resell it. Ownership of the equipment and any replacement charge for loss or physical damage is as stated in your service agreement.
                </p>
                <p>
                  <strong>4.2 Remote Diagnostics & Updates:</strong> The equipment we install is remotely managed. We may read its status and configuration and modify its settings remotely to activate your service, diagnose technical faults, optimize performance, and apply firmware/security updates. This allows most complaints to be resolved without requiring an on-site technician visit.
                </p>
                <p>
                  <strong>4.3 Network Protection & Interference:</strong> Do not connect the service to third-party equipment that causes interference or harm to our network infrastructure. We may immediately disconnect any equipment that causes interference, signal leakage, or network degradation until the issue is rectified.
                </p>
              </div>
            </section>

            {/* 5. WIFI ROAMING POLICY */}
            <section id="roaming" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">5</span>
                WIFI ROAMING POLICY
              </h3>
              <div className="space-y-4">
                <p>
                  <strong>5.1 Coverage Access:</strong> A valid voucher code or active prepaid subscription may be used to access <strong>any Provider-operated hotspot within the covered area</strong>, subject to availability, signal strength, and network capacity.
                </p>
                <p>
                  <strong>5.2 Factors Affecting Performance:</strong> WiFi roaming performance depends upon:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 marker:text-orange-500">
                  <li>Local signal strength and physical obstructions (walls, trees, topography)</li>
                  <li>Distance from the nearest access point or antenna</li>
                  <li>Simultaneous user load and channel congestion</li>
                </ul>
                <p>
                  <strong>5.3 Capacity Management:</strong> The Provider may limit roaming access or session bandwidth if usage adversely affects local network stability or degrades service for other subscribers.
                </p>
              </div>
            </section>

            {/* 6. SERVICE PERFORMANCE AND AVAILABILITY */}
            <section id="performance" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">6</span>
                SERVICE PERFORMANCE & AVAILABILITY
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-3">6.1 Speed and Quality of Service</h4>
                  <p className="mb-2">Internet speed, latency, and throughput vary according to multiple factors beyond raw theoretical limits, including:</p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600 marker:text-orange-500">
                    <li>The internal wiring, distance from router, and specifications of your receiving devices</li>
                    <li>The number of active devices sharing the same Wi-Fi connection simultaneously</li>
                    <li>Wi-Fi radio conditions and physical interference (speeds measured over Wi-Fi are typically lower than direct cable connections)</li>
                    <li>The server capacity and international routing of the websites or apps you connect to</li>
                    <li>Network congestion, upstream provider maintenance, and environmental conditions</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-3">6.2 Service Interruptions</h4>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600 marker:text-orange-500">
                    <li>The Provider does not guarantee completely uninterrupted or error-free service.</li>
                    <li>Temporary service disruptions may occur due to scheduled maintenance, system upgrades, equipment failure, fibre cuts, or unforeseen technical issues.</li>
                    <li>Force majeure events such as typhoons, lightning strikes, floods, earthquakes, power grid outages, and civil disturbances may temporarily impair connectivity.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 7. FAIR USE POLICY (FUP) */}
            <section id="fup" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">7</span>
                FAIR USE POLICY (FUP)
              </h3>
              <div className="space-y-4">
                <p><strong>7.1 Equitable Access:</strong> All subscriptions are subject to our Fair Use Policy to ensure equitable bandwidth distribution and reliable connectivity among all users in the community.</p>
                <p><strong>7.2 Excessive or Abusive Usage:</strong> Activities that compromise network integrity include, but are not limited to:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 marker:text-orange-500">
                  <li>Continuous, automated high-bandwidth consumption that starves local bandwidth pools</li>
                  <li>Operating unapproved high-volume public distribution servers or unauthorized relays</li>
                  <li>Actions that artificially degrade overall service quality for other subscribers</li>
                </ul>
                <p><strong>7.3 Management Measures:</strong> The Provider may implement temporary speed throttling, bandwidth reallocation, or session disconnection without prior notice in accordance with standard traffic management guidelines.</p>
              </div>
            </section>

            {/* 8. PLANS, FEES AND BILLING */}
            <section id="billing" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">8</span>
                PLANS, FEES & BILLING
              </h3>
              <div className="space-y-4">
                <p>
                  <strong>8.1 Monthly Plan Rates:</strong> Your monthly subscription fee is the published price of the plan you selected. Prices are inclusive of applicable taxes unless stated otherwise, and we will provide reasonable advance notice before any price adjustments take effect.
                </p>
                <p>
                  <strong>8.2 Billing Cycle & Due Dates:</strong> Your account has its own due day of the month, established upon activation. Each bill covers the monthly cycle that begins the day after that due date, meaning billing covers the month ahead.
                </p>
                <p>
                  <strong>8.3 Invoicing & Account Portal:</strong> Invoices are generated on or about your due date. Your statement of account, payment records, and outstanding balance can be checked via your subscriber portal.
                </p>
                <p>
                  <strong>8.4 Billing Notices:</strong> We send official billing notices and reminders to the mobile phone number and email address on file. Maintaining accurate and updated contact details is strictly the subscriber's responsibility.
                </p>
              </div>
            </section>

            {/* 9. PAYMENT TERMS */}
            <section id="payment" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">9</span>
                PAYMENT TERMS
              </h3>
              <div className="space-y-4">
                <p><strong>9.1 Payment Channels:</strong> Payments may be remitted through any published official channels, including cash payment at our main office, accredited payment centers, and bank/e-wallet transfer.</p>
                <p><strong>9.2 Timely Settlement:</strong> Payment is due on or before the due date indicated on your billing invoice. Services are prepaid or billed in advance unless otherwise agreed in writing.</p>
                <p><strong>9.3 Confirmation & Receipts:</strong> A payment is credited once it has been verified and confirmed. Payments made through unauthorized agents or third parties are at your own risk. Always secure and keep your official receipt or electronic transaction reference number.</p>
                <p><strong>9.4 Non-Refundable Nature:</strong> Amounts paid for periods during which the service was active and available are non-refundable. No refunds shall be issued for unused time, expired vouchers, or voluntary termination, except where rebates apply under Section 16.</p>
              </div>
            </section>

            {/* 10. LATE PAYMENT, ISOLATION AND RECONNECTION */}
            <section id="late-payment" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">10</span>
                LATE PAYMENT, ISOLATION & RECONNECTION
              </h3>
              <div className="space-y-4">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-900">
                  <p className="font-semibold text-sm flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-600" />
                    Grace Period Policy:
                  </p>
                  <p className="text-xs mt-1 text-amber-800 leading-relaxed">
                    We allow a grace period of <strong>three (3) days</strong> after your due date. An account remaining unpaid at the end of this grace period may be placed into network isolation.
                  </p>
                </div>
                <p>
                  <strong>10.1 Portal Isolation:</strong> While your connection is isolated, your browser reaches only our billing and payment portal, where you can view your outstanding balance and settle payment. Isolation is not termination: your account profile, assigned equipment, and configuration remain intact.
                </p>
                <p>
                  <strong>10.2 Reconnection:</strong> Full high-speed internet access is restored automatically or promptly once your payment is confirmed and posted in our system.
                </p>
                <p>
                  <strong>10.3 Default & Retrieval:</strong> An account that remains unsettled for an extended period may be permanently disconnected and the balance referred for collection. The subscriber remains legally liable for all accrued arrears up to disconnection and must promptly surrender all provider-owned equipment.
                </p>
              </div>
            </section>

            {/* 11. PLAN CHANGES AND RELOCATION */}
            <section id="plan-changes" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">11</span>
                PLAN CHANGES & RELOCATION
              </h3>
              <div className="space-y-4">
                <p>
                  <strong>11.1 Upgrades & Downgrades:</strong> You may request an upgrade or downgrade of your existing plan. Requested plan changes take effect from your next billing cycle unless mutually agreed otherwise. A mid-cycle downgrade does not generate a cash refund for the current period.
                </p>
                <p>
                  <strong>11.2 Account Relocation:</strong> Transferring service to a new residential address is subject to serviceability and network capacity at the new location. Relocation may carry a standard technical rewiring fee, which will be quoted and approved before work is scheduled.
                </p>
                <p>
                  <strong>11.3 Account Transfer:</strong> Your subscription account may not be assigned, transferred, or assumed by another individual without our prior written consent, and all existing balances must be fully settled beforehand.
                </p>
              </div>
            </section>

            {/* 12. MINIMUM TERM AND CANCELLATION */}
            <section id="cancellation" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">12</span>
                MINIMUM TERM & CANCELLATION
              </h3>
              <div className="space-y-4">
                <p>
                  <strong>12.1 Month-to-Month Basis:</strong> Your monthly home subscription operates on a flexible <strong>month-to-month basis with no lock-in minimum term</strong>, and continues in full effect until cancelled by you or terminated by us.
                </p>
                <p>
                  <strong>12.2 Notice of Cancellation:</strong> To cancel your subscription, submit written notice to our office or support portal prior to your next due date. Cancellation takes effect at the end of the monthly billing period you have already paid for.
                </p>
                <p>
                  <strong>12.3 Equipment Retrieval:</strong> Upon cancellation, you must settle any remaining balance and make the premises accessible for our technicians to retrieve modems, ONUs, and optical antennas that belong to Agustin Network.
                </p>
              </div>
            </section>

            {/* 13. ACCEPTABLE USE POLICY */}
            <section id="acceptable-use" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">13</span>
                ACCEPTABLE USE POLICY
              </h3>
              <div className="space-y-4">
                <p>The service is dedicated solely for your own use at the designated service premises. The Customer shall <strong>not</strong> use the service for:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 marker:text-orange-500">
                  <li><strong>Unauthorized Resale or Distribution:</strong> Reselling, redistributing, or extending the connection beyond your premises — including running cable to neighboring houses or operating an unauthorized commercial public hotspot — without our express written consent.</li>
                  <li><strong>Unlawful & Cybercrime Activities:</strong> Any illegal activities under Philippine law, including violations of <strong>Republic Act No. 10175 (Cybercrime Prevention Act of 2012)</strong>.</li>
                  <li><strong>Malicious Network Behavior:</strong> Sending unsolicited bulk spam, distributing malware/viruses, port scanning, conducting denial-of-service (DoS) attacks, IP address spoofing, or attempting unauthorized system intrusion.</li>
                  <li><strong>Intellectual Property & Illegal Content:</strong> Infringing copyright, piracy, or transmitting material that violates public order, national security, or anti-child abuse laws.</li>
                  <li><strong>Network Tampering:</strong> Tampering with Provider cabling, bypassing bandwidth limitations, or cloning MAC/hardware addresses.</li>
                </ul>
                <div className="border-l-4 border-orange-500 bg-orange-50/50 p-4 rounded-r-lg">
                  <p className="text-sm font-semibold text-slate-900">Household & Wi-Fi Responsibility:</p>
                  <p className="text-xs text-slate-600 mt-1">
                    You are legally responsible for all activities conducted through your connection, including actions by household members, guests, and anyone connecting to your Wi-Fi. Securing your wireless network and regularly updating default admin passwords is your responsibility.
                  </p>
                </div>
              </div>
            </section>

            {/* 14. DATA PRIVACY AND PROTECTION (RA 10173) */}
            <section id="privacy" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">14</span>
                DATA PRIVACY & PROTECTION (RA 10173)
              </h3>
              <div className="space-y-4">
                <p><strong>14.1 Statutory Compliance:</strong> The Provider strictly complies with the <strong>Data Privacy Act of 2012 (Republic Act No. 10173)</strong> and its Implementing Rules and Regulations.</p>
                <p><strong>14.2 Collected Information:</strong> We collect and process limited personal and technical data, including:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 marker:text-orange-500">
                  <li>Subscriber name, billing address, contact mobile numbers, and email address</li>
                  <li>Device identifiers (MAC address, local IP assignments)</li>
                  <li>Voucher activation codes and captive portal access credentials</li>
                  <li>Connection session timestamps and technical bandwidth logs</li>
                </ul>
                <p><strong>14.3 Purpose of Data:</strong> Collected data is used strictly for authentication, service delivery, technical diagnostics, fraud prevention, billing, and regulatory compliance.</p>
                <p><strong>14.4 Non-Disclosure:</strong> We never sell personal data. Information is disclosed to third parties only when compelled by lawful court order, government subpoena, or NTC regulatory mandate.</p>
                <p><strong>14.5 Subscriber Rights:</strong> Under RA 10173, customers have the right to be informed, to access their personal records, to object to processing, and to request correction or deletion subject to legal and operational retention limits.</p>
              </div>
            </section>

            {/* 15. CUSTOMER RESPONSIBILITIES */}
            <section id="responsibilities" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">15</span>
                CUSTOMER RESPONSIBILITIES
              </h3>
              <div className="space-y-4">
                <p><strong>15.1 Account & Device Security:</strong> The Customer is responsible for securing physical devices, indoor cabling, router access credentials, and account passwords.</p>
                <p><strong>15.2 Voucher Codes:</strong> Lost, shared, or compromised voucher codes remain the Customer's sole responsibility; no replacements are issued for third-party voucher misuse.</p>
                <p><strong>15.3 Environmental Protection:</strong> The Customer must ensure the ONU/modem and power adapters are protected against moisture, excessive heat, physical drops, and severe electrical power surges.</p>
              </div>
            </section>

            {/* 16. SERVICE INTERRUPTIONS AND REBATES */}
            <section id="interruptions" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">16</span>
                SERVICE INTERRUPTIONS & REBATES
              </h3>
              <div className="space-y-4">
                <p>
                  <strong>16.1 Continuous Operation:</strong> We strive to maintain continuous high availability across our network. Scheduled maintenance is conducted during low-usage hours whenever practical, with advance notice posted through our portal or official channels for major works.
                </p>
                <p>
                  <strong>16.2 Unplanned Disruptions:</strong> Interruptions can occur from upstream bandwidth providers, fiber breaks, severe weather, power grid brownouts, or hardware failure.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-blue-950">
                  <p className="font-semibold text-sm flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-600" />
                    NTC Prorated Rebate Policy:
                  </p>
                  <p className="text-xs mt-1 text-blue-900 leading-relaxed">
                    Where an extended service outage is directly attributable to the Provider and exceeds the allowable downtime prescribed under National Telecommunications Commission regulations, monthly subscribers may request a prorated rebate credited toward their subsequent invoice. Disruptions must be reported promptly to facilitate ticket logging and verification.
                  </p>
                </div>
              </div>
            </section>

            {/* 17. SUPPORT AND FAULT REPORTING */}
            <section id="support" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">17</span>
                SUPPORT & FAULT REPORTING
              </h3>
              <div className="space-y-4">
                <p>
                  <strong>17.1 Reporting Channels:</strong> Report connectivity issues promptly through your account portal, official SMS (+639692101682), or via email at <a href="mailto:agustinnetworkanddatasolution@gmail.com" className="text-orange-600 underline font-medium">agustinnetworkanddatasolution@gmail.com</a>. Prompt reporting is essential, as rebate and outage calculations depend on verified logged tickets.
                </p>
                <p>
                  <strong>17.2 Remote Diagnosis First:</strong> Technical support will evaluate the connection remotely first to identify optical levels, signal degradation, or configuration issues.
                </p>
                <p>
                  <strong>17.3 Site Visits & Non-Fault Policy:</strong> If an on-site visit is necessary, the subscriber agrees to provide reasonable premises access. If an inspection confirms that the issue is due to customer-owned equipment, defective internal extension wires, or absence of electrical power at the premises, a standard diagnostic service charge may apply.
                </p>
              </div>
            </section>

            {/* 18. SUSPENSION AND TERMINATION */}
            <section id="suspension" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">18</span>
                SUSPENSION & TERMINATION
              </h3>
              <div className="space-y-4">
                <p>
                  <strong>18.1 Grounds for Suspension/Termination:</strong> The Provider may suspend or terminate service without refund for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 marker:text-orange-500">
                  <li>Unsettled accounts beyond the allowable grace period</li>
                  <li>Breach of our Acceptable Use Policy or Fair Use Policy</li>
                  <li>Fraudulent applications, false credentials, or deceptive representations</li>
                  <li>Abuse or tampering with network infrastructure or optical equipment</li>
                  <li>Compliance with court orders, regulatory mandates, or law enforcement directives</li>
                </ul>
                <p>
                  <strong>18.2 Notice & Opportunity to Cure:</strong> Except in emergency cases of fraud, malicious network attack, or statutory legal mandate, we will provide notice and reasonable opportunity to rectify the issue prior to permanent cancellation.
                </p>
              </div>
            </section>

            {/* 19. LIMITATION OF LIABILITY */}
            <section id="liability" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">19</span>
                LIMITATION OF LIABILITY
              </h3>
              <div className="space-y-4">
                <p>To the maximum extent permitted by Philippine law:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 marker:text-orange-500">
                  <li>Service is provided on an <strong>"AS IS"</strong> and <strong>"AS AVAILABLE"</strong> best-effort basis.</li>
                  <li>The Provider shall not be liable for indirect, incidental, or consequential damages — including loss of profits, data corruption, lost business revenue, or third-party service failures resulting from speed fluctuations or outages.</li>
                  <li>Where statutory liability exists, total liability is limited to the subscription fees paid by the Customer for the specific affected billing period. Nothing herein impairs non-waivable rights guaranteed under the <strong>Consumer Act of the Philippines</strong>.</li>
                  <li>The service must not be relied upon as the sole means for life-safety or emergency services, and does not operate during electrical power failures without customer-provided uninterruptible power supplies (UPS).</li>
                </ul>
              </div>
            </section>

            {/* 20. MODIFICATION OF TERMS */}
            <section id="modification" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">20</span>
                MODIFICATION OF TERMS
              </h3>
              <div className="space-y-4">
                <p>The Provider reserves the right to amend this Agreement, including plans, fees, and operational policies, to reflect changing systems, network technologies, or statutory regulations. Updates are communicated via:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 marker:text-orange-500">
                  <li>Captive portal banners and notices</li>
                  <li>Official website publication on this agreement page</li>
                  <li>SMS or billing notifications to registered subscriber contact numbers</li>
                </ul>
                <p className="font-medium text-slate-800">
                  Continued use of, or payment for, the service following the effective date of revised terms constitutes full acceptance of the updated Agreement.
                </p>
              </div>
            </section>

            {/* 21. GOVERNING LAW AND DISPUTES */}
            <section id="governing-law" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">21</span>
                GOVERNING LAW & DISPUTES
              </h3>
              <div className="space-y-4">
                <p className="text-slate-600">
                  This Agreement shall be governed by and construed in accordance with the <strong>laws of the Republic of the Philippines</strong>, including relevant rules and Memorandum Circulars of the <strong>National Telecommunications Commission (NTC)</strong>.
                </p>
                <p className="text-slate-600">
                  Subscribers are requested to contact us first regarding billing or technical disagreements so we can achieve prompt resolution. Unresolved disputes shall be submitted before the competent regular courts of Aurora, Philippines, or brought before the <strong>National Telecommunications Commission</strong> or the <strong>Department of Trade and Industry (DTI)</strong> under applicable consumer protection frameworks.
                </p>
              </div>
            </section>

            {/* 22. ACKNOWLEDGMENT AND ACCEPTANCE */}
            <section id="acknowledgment" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">22</span>
                ACKNOWLEDGMENT & ACCEPTANCE
              </h3>
              <div className="bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-md space-y-3">
                <p className="font-semibold text-white text-base">
                  Binding Subscriber Acknowledgment
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  By submitting a service application, permitting an installation, entering a voucher pin, connecting to our network, or making a subscription payment, the Customer acknowledges that they have read, fully understood, and explicitly agreed to all terms, conditions, and policies set forth in this Customer Service Agreement.
                </p>
              </div>
            </section>

          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.svg" alt="Agustin Network Logo" className="w-10 h-10 object-contain drop-shadow-sm" />
                <div>
                  <h2 className="text-lg font-bold text-white tracking-tight">AGUSTIN NETWORK</h2>
                  <p className="text-xs font-semibold text-orange-500 tracking-wider uppercase">And Data Solution</p>
                </div>
              </div>
              <p className="text-sm max-w-sm">
                Providing reliable wireless broadband internet access and community hotspot services in Umiray, Dingalan, Aurora.
              </p>
            </div>
            
            <div className="space-y-3 md:text-right">
              <div className="flex items-center md:justify-end gap-3 text-sm">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>Sitio Malamig, Umiray, Dingalan, Aurora</span>
              </div>
              <div className="flex items-center md:justify-end gap-3 text-sm">
                <Phone className="w-4 h-4 text-slate-500" />
                <span>+639692101682</span>
              </div>
              <div className="flex items-center md:justify-end gap-3 text-sm">
                <Mail className="w-4 h-4 text-slate-500" />
                <a href="mailto:agustinnetworkanddatasolution@gmail.com" className="hover:text-white transition-colors">
                  agustinnetworkanddatasolution@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-center flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Agustin Network. All rights reserved.</p>
            <p className="text-slate-500">Agustin Network Customer Service Agreement & Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
