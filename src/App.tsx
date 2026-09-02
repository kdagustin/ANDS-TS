import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Wifi, Shield, FileText, ChevronRight, Menu, X, CheckCircle2 } from 'lucide-react';

const SECTIONS = [
  { id: 'nature', title: '1. NATURE OF SERVICE' },
  { id: 'plans', title: '2. SERVICE PLANS AND SUBSCRIPTIONS' },
  { id: 'roaming', title: '3. WIFI ROAMING POLICY' },
  { id: 'performance', title: '4. SERVICE PERFORMANCE AND AVAILABILITY' },
  { id: 'fup', title: '5. FAIR USE POLICY (FUP)' },
  { id: 'payment', title: '6. PAYMENT TERMS' },
  { id: 'acceptable-use', title: '7. ACCEPTABLE USE POLICY' },
  { id: 'privacy', title: '8. DATA PRIVACY AND PROTECTION (RA 10173)' },
  { id: 'responsibilities', title: '9. CUSTOMER RESPONSIBILITIES' },
  { id: 'suspension', title: '10. SUSPENSION AND TERMINATION' },
  { id: 'liability', title: '11. LIMITATION OF LIABILITY' },
  { id: 'modification', title: '12. MODIFICATION OF TERMS' },
  { id: 'governing-law', title: '13. GOVERNING LAW AND REGULATION' },
  { id: 'acknowledgment', title: '14. ACKNOWLEDGMENT AND ACCEPTANCE' },
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
          // If the top of the section is near the top of the viewport
          if (rect.top <= 150) {
            currentActiveId = el.id;
          }
        }
      }
      setActiveSection(currentActiveId);
    };

    window.addEventListener('scroll', handleScroll);
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
                <span>Umiray, Dingalan, Aurora</span>
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
            className="absolute right-0 top-20 bottom-0 w-3/4 max-w-sm bg-white shadow-2xl overflow-y-auto border-l border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Table of Contents</h3>
              <nav className="space-y-1">
                {SECTIONS.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeSection === section.id
                        ? 'bg-orange-50 text-orange-700'
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
            <span className="font-semibold tracking-wider uppercase text-sm">Legal Document</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Customer Service Agreement
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl leading-relaxed">
            This Customer Service Agreement ("Agreement") is entered into by and between <strong className="text-slate-900">Agustin Network</strong>, operating under the name <strong className="text-slate-900">Agustin Hotspot & Pisonet</strong>, with principal address at Umiray, Dingalan, Aurora ("Provider"), and the subscribing individual or entity ("Subscriber" or "Customer").
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-blue-50 text-blue-800 px-4 py-3 rounded-lg border border-blue-100">
            <Shield className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm font-medium">
              By purchasing, activating, accessing, or using the service, the Customer signifies acceptance of the terms and conditions herein.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 relative">
          
          {/* Desktop Sidebar Navigation */}
          <aside className="hidden md:block w-72 flex-shrink-0">
            <div className="sticky top-32">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-3">Table of Contents</h3>
              <nav className="space-y-1 border-l-2 border-slate-100">
                {SECTIONS.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left pl-4 pr-3 py-2.5 text-sm font-medium transition-all duration-200 relative ${
                      activeSection === section.id
                        ? 'text-orange-600'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {/* Active indicator line */}
                    {activeSection === section.id && (
                      <span className="absolute left-[-2px] top-0 bottom-0 w-0.5 bg-orange-500 rounded-r-full" />
                    )}
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Document Content */}
          <main className="flex-1 max-w-3xl prose prose-slate prose-headings:text-slate-900 prose-headings:font-bold prose-h3:text-lg prose-p:text-slate-600 prose-li:text-slate-600 prose-strong:text-slate-900">
            
            <section id="nature" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">1</span>
                NATURE OF SERVICE
              </h3>
              <div className="space-y-4">
                <p>
                  <strong>1.1</strong> The Provider offers <strong>wireless broadband internet access</strong> via a <strong>WiFi hotspot network</strong> covering designated areas within the barangay.
                </p>
                <p>
                  <strong>1.2</strong> The service operates on a <strong>shared, best-effort basis</strong>, consistent with community and public WiFi systems, and is subject to applicable <strong>National Telecommunications Commission (NTC)</strong> rules and regulations.
                </p>
                <p>
                  <strong>1.3</strong> Advertised speeds are <strong>maximum theoretical speeds ("up to")</strong> and are <strong>not guaranteed</strong> at all times.
                </p>
              </div>
            </section>

            <section id="plans" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">2</span>
                SERVICE PLANS AND SUBSCRIPTIONS
              </h3>
              
              <div className="mb-8">
                <h4 className="text-lg font-bold text-slate-800 mb-3">2.1 Device-Based Prepaid Plans (Per Device / Voucher)</h4>
                <p className="mb-4 text-slate-600">Each Device Plan allows <strong>one (1) device connection at any given time</strong>:</p>
                
                <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                  <div className="bg-slate-50 px-6 py-3 border-b border-slate-200">
                    <h5 className="font-semibold text-slate-700">Device Plan</h5>
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
                <p className="mb-4 text-slate-600">Monthly plans are intended for <strong>continuous and regular use</strong>, subject to Fair Use Policy:</p>
                
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
                        <Wifi className="w-4 h-4" />
                        {plan.devices}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-500 italic bg-slate-100 p-4 rounded-lg border border-slate-200">
                  The Provider reserves the right to manage bandwidth allocation to maintain network stability.
                </p>
              </div>
            </section>

            <section id="roaming" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">3</span>
                WIFI ROAMING POLICY
              </h3>
              <div className="space-y-4">
                <p>
                  <strong>3.1</strong> A valid voucher or active subscription may be used to access <strong>any Provider-operated hotspot within the covered area</strong>, subject to availability and capacity.
                </p>
                <p>
                  <strong>3.2</strong> WiFi roaming performance depends on:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 marker:text-orange-500">
                  <li>Signal strength</li>
                  <li>Distance from access points</li>
                  <li>Simultaneous user load</li>
                </ul>
                <p>
                  <strong>3.3</strong> The Provider may limit roaming access if usage adversely affects network performance or other subscribers.
                </p>
              </div>
            </section>

            <section id="performance" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">4</span>
                SERVICE PERFORMANCE AND AVAILABILITY
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-3">4.1 Speed and Quality of Service</h4>
                  <p className="mb-2">Internet speed and latency may vary due to:</p>
                  <ul className="list-circle pl-8 space-y-2 text-slate-600 marker:text-slate-400">
                    <li>Network congestion</li>
                    <li>Environmental conditions</li>
                    <li>Equipment limitations</li>
                    <li>Force majeure events</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-3">4.2 Service Interruptions</h4>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600 marker:text-orange-500">
                    <li>The Provider does not guarantee uninterrupted service.</li>
                    <li>Temporary service disruptions may occur due to maintenance, system upgrades, or unforeseen technical issues.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="fup" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">5</span>
                FAIR USE POLICY (FUP)
              </h3>
              <div className="space-y-4">
                <p><strong>5.1</strong> All subscriptions are subject to a <strong>Fair Use Policy</strong> to ensure equitable access among users.</p>
                <p><strong>5.2</strong> Excessive or abusive usage includes but is not limited to:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 marker:text-orange-500">
                  <li>Continuous high-bandwidth consumption</li>
                  <li>Activities that degrade service quality for others</li>
                </ul>
                <p><strong>5.3</strong> The Provider may implement:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 marker:text-orange-500">
                  <li>Speed throttling</li>
                  <li>Temporary suspension</li>
                  <li>Session disconnection</li>
                </ul>
                <p>without prior notice, consistent with guidelines.</p>
              </div>
            </section>

            <section id="payment" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">6</span>
                PAYMENT TERMS
              </h3>
              <div className="space-y-4">
                <p><strong>6.1</strong> All services are <strong>prepaid</strong> unless otherwise agreed in writing.</p>
                <p><strong>6.2</strong> Payment must be completed <strong>prior to service activation</strong>.</p>
                <p><strong>6.3</strong> No refunds shall be issued for:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 marker:text-orange-500">
                  <li>Unused service time</li>
                  <li>Expired vouchers</li>
                  <li>Voluntary termination</li>
                </ul>
                <p className="bg-orange-50 text-orange-800 p-4 rounded-lg border border-orange-100 font-medium">
                  except in cases of <strong>verified prolonged service outage</strong> directly attributable to the Provider.
                </p>
              </div>
            </section>

            <section id="acceptable-use" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">7</span>
                ACCEPTABLE USE POLICY
              </h3>
              <div className="space-y-4">
                <p>The Customer shall <strong>not</strong> use the service for:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 marker:text-orange-500">
                  <li>Illegal activities under Philippine law</li>
                  <li>Cybercrime, hacking, or malware distribution</li>
                  <li>Activities violating NTC rules, public order, or national security</li>
                  <li>Unauthorized resale or redistribution of service</li>
                </ul>
                <p className="font-medium text-slate-800 border-l-4 border-orange-500 pl-4 py-1">
                  The Provider reserves the right to <strong>suspend or terminate service</strong> for violations.
                </p>
              </div>
            </section>

            <section id="privacy" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">8</span>
                DATA PRIVACY AND PROTECTION (RA 10173)
              </h3>
              <div className="space-y-4">
                <p><strong>8.1</strong> The Provider complies with the <strong>Data Privacy Act of 2012 (Republic Act No. 10173)</strong> and its Implementing Rules and Regulations.</p>
                <p><strong>8.2</strong> The Provider may collect and process limited personal data, including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 marker:text-orange-500">
                  <li>Device identifiers (MAC/IP address)</li>
                  <li>Login credentials or voucher codes</li>
                  <li>Connection logs and usage timestamps</li>
                </ul>
                <p><strong>8.3</strong> Collected data shall be used <strong>solely for</strong>:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 marker:text-orange-500">
                  <li>Service delivery and authentication</li>
                  <li>Network security and abuse prevention</li>
                  <li>Regulatory compliance, when required by law</li>
                </ul>
                <p><strong>8.4</strong> The Provider shall <strong>not sell or disclose personal data</strong> to third parties except:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 marker:text-orange-500">
                  <li>When required by lawful order of a court or government agency</li>
                  <li>For lawful compliance with NTC or other regulatory authorities</li>
                </ul>
                <p><strong>8.5</strong> Customers have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 marker:text-orange-500">
                  <li>Be informed</li>
                  <li>Access their data</li>
                  <li>Object to processing</li>
                  <li>Request correction or deletion, subject to legal and operational limitations</li>
                </ul>
              </div>
            </section>

            <section id="responsibilities" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">9</span>
                CUSTOMER RESPONSIBILITIES
              </h3>
              <div className="space-y-4">
                <p><strong>9.1</strong> The Customer is responsible for:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 marker:text-orange-500">
                  <li>Securing devices and access credentials</li>
                  <li>All activities conducted using their account or voucher</li>
                </ul>
                <p><strong>9.2</strong> Lost, shared, or compromised vouchers are the Customer's responsibility.</p>
              </div>
            </section>

            <section id="suspension" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">10</span>
                SUSPENSION AND TERMINATION
              </h3>
              <div className="space-y-4">
                <p><strong>10.1</strong> The Provider may suspend or terminate service without refund for:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 marker:text-orange-500">
                  <li>Violation of this Agreement</li>
                  <li>Abuse of network resources</li>
                  <li>Fraudulent or unlawful activities</li>
                </ul>
                <p><strong>10.2</strong> Service availability may be discontinued in specific areas due to regulatory, technical, or operational requirements.</p>
              </div>
            </section>

            <section id="liability" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">11</span>
                LIMITATION OF LIABILITY
              </h3>
              <div className="space-y-4">
                <p>To the maximum extent permitted by law:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 marker:text-orange-500">
                  <li>The Provider shall not be liable for indirect, incidental, or consequential damages.</li>
                  <li>Service is provided on an <strong>"AS IS"</strong> and <strong>"AS AVAILABLE"</strong> basis.</li>
                </ul>
              </div>
            </section>

            <section id="modification" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">12</span>
                MODIFICATION OF TERMS
              </h3>
              <div className="space-y-4">
                <p>The Provider reserves the right to amend this Agreement, including pricing and service terms, with reasonable notice via:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 marker:text-orange-500">
                  <li>Captive portal announcements</li>
                  <li>Posted notices</li>
                  <li>Official communication channels</li>
                </ul>
                <p className="font-medium text-slate-800">Continued use of the service constitutes acceptance of the revised terms.</p>
              </div>
            </section>

            <section id="governing-law" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">13</span>
                GOVERNING LAW AND REGULATION
              </h3>
              <p className="text-slate-600">
                This Agreement shall be governed by the <strong>laws of the Republic of the Philippines</strong> and applicable <strong>NTC Memorandum Circulars, rules, and regulations</strong>.
              </p>
            </section>

            <section id="acknowledgment" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-500">14</span>
                ACKNOWLEDGMENT AND ACCEPTANCE
              </h3>
              <p className="text-slate-600">
                By accessing or using the service, the Customer acknowledges that they have read, understood, and agreed to all terms and conditions herein.
              </p>
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
                Providing reliable wireless broadband internet access and hotspot services to our community.
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
            <p>Customer Service Agreement</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
