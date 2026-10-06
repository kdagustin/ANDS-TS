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
  Calendar, 
  ExternalLink,
  AlertCircle,
  Zap,
  Radio,
  Clock
} from 'lucide-react';

const SECTIONS = [
  { id: 'agreement', title: '1. AGREEMENT & ACCEPTANCE' },
  { id: 'service-plans', title: '2. THE SERVICE & PLANS' },
  { id: 'application', title: '3. APPLICATION, SERVICEABILITY & INSTALLATION' },
  { id: 'equipment', title: '4. EQUIPMENT' },
  { id: 'billing', title: '5. PLANS, FEES & BILLING' },
  { id: 'payment', title: '6. PAYMENT TERMS' },
  { id: 'late-payment', title: '7. LATE PAYMENT, ISOLATION & RECONNECTION' },
  { id: 'plan-changes', title: '8. PLAN CHANGES & RELOCATION' },
  { id: 'cancellation', title: '9. MINIMUM TERM & CANCELLATION' },
  { id: 'acceptable-use', title: '10. ACCEPTABLE USE POLICY' },
  { id: 'interruptions', title: '11. SERVICE INTERRUPTIONS & MAINTENANCE' },
  { id: 'support', title: '12. SUPPORT & FAULT REPORTING' },
  { id: 'suspension', title: '13. SUSPENSION & TERMINATION BY US' },
  { id: 'liability', title: '14. LIMITATION OF LIABILITY' },
  { id: 'privacy', title: '15. DATA PRIVACY (RA 10173)' },
  { id: 'roaming', title: '16. WIFI ROAMING & HOTSPOT POLICY' },
  { id: 'changes', title: '17. CHANGES TO THESE TERMS' },
  { id: 'governing-law', title: '18. GOVERNING LAW & DISPUTES' },
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
      {/* Top Banner Notice */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Official Terms of Service & Customer Service Agreement</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <a 
              href="https://agustinnetwork.isproph.com/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 flex items-center gap-1 font-medium transition-colors"
            >
              Client Portal Login <ExternalLink className="w-3 h-3" />
            </a>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Hotline: <strong className="text-white">0969 122 5280</strong></span>
          </div>
        </div>
      </div>

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
            <div className="hidden lg:flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>Sitio Malamig, Umiray, Dingalan, Aurora</span>
              </div>
              <a 
                href="tel:09691225280" 
                className="flex items-center gap-2 hover:text-orange-600 transition-colors"
              >
                <Phone className="w-4 h-4 text-orange-500" />
                <span className="font-semibold text-slate-900">0969 122 5280</span>
              </a>
              <a 
                href="https://agustinnetwork.isproph.com/login" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium text-xs px-3.5 py-2 rounded-lg flex items-center gap-1.5 shadow-sm transition-all"
              >
                Account Portal <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-slate-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
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
        <div className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div 
            className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl overflow-y-auto border-l border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Table of Contents</h3>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-1 rounded-md text-slate-400 hover:text-slate-700">
                  <X className="w-5 h-5" />
                </button>
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

              <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
                <a 
                  href="https://agustinnetwork.isproph.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-orange-500 text-white text-xs font-semibold py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 shadow-sm"
                >
                  Client Login Portal <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="tel:09691225280"
                  className="w-full bg-slate-100 text-slate-800 text-xs font-semibold py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-orange-500" /> 0969 122 5280
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Page Title Header */}
        <div className="mb-10 border-b-2 border-orange-500 pb-8">
          <div className="flex items-center gap-3 mb-3 text-orange-600">
            <FileText className="w-6 h-6" />
            <span className="font-semibold tracking-wider uppercase text-sm">Terms of Service & Customer Service Agreement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Terms of Service (TnC)
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            These Terms of Service ("Terms") govern the internet service provided by <strong className="text-slate-900">Agustin Network</strong> ("we", "us" or "our") to you, the subscriber.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-blue-50 text-blue-900 p-4 rounded-xl border border-blue-100 shadow-sm">
              <Shield className="w-5 h-5 flex-shrink-0 text-blue-600 mt-0.5" />
              <p className="text-xs sm:text-sm font-medium leading-relaxed">
                They form a binding agreement between us the moment you submit an application, accept an installation, purchase or activate a voucher, or use or pay for the service.
              </p>
            </div>
            <div className="flex items-start gap-3 bg-orange-50 text-orange-950 p-4 rounded-xl border border-orange-100 shadow-sm">
              <AlertCircle className="w-5 h-5 flex-shrink-0 text-orange-600 mt-0.5" />
              <p className="text-xs sm:text-sm font-medium leading-relaxed">
                Please read them together with our Data Privacy Policy. If you do not agree with these Terms, do not apply for or use the service.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 relative">
          
          {/* Desktop Sidebar Navigation */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-28 max-h-[calc(100vh-8.5rem)] overflow-y-auto pr-2 scrollbar-thin">
              <div className="flex items-center justify-between mb-3 px-3">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Navigation</h3>
                <span className="text-[11px] font-semibold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">{SECTIONS.length} Sections</span>
              </div>
              <nav className="space-y-0.5 border-l-2 border-slate-100">
                {SECTIONS.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left pl-3.5 pr-2 py-1.5 text-xs font-medium transition-all duration-150 relative block ${
                      activeSection === section.id
                        ? 'text-orange-600 font-bold bg-orange-50/70 rounded-r-md'
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

              <div className="mt-6 p-4 bg-slate-100/80 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-2">
                <p className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-orange-500" /> Hotline Support:
                </p>
                <a href="tel:09691225280" className="block text-slate-900 font-bold text-sm hover:text-orange-600 transition-colors">
                  0969 122 5280
                </a>
                <a 
                  href="https://agustinnetwork.isproph.com/login" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium pt-1"
                >
                  Client Portal <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </aside>

          {/* Document Content */}
          <main className="flex-1 max-w-3xl prose prose-slate prose-headings:text-slate-900 prose-headings:font-bold prose-h3:text-xl prose-p:text-slate-600 prose-li:text-slate-600 prose-strong:text-slate-900">
            
            {/* 1. AGREEMENT AND ACCEPTANCE */}
            <section id="agreement" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-600 font-bold">1</span>
                AGREEMENT AND ACCEPTANCE
              </h3>
              <div className="space-y-4">
                <p>
                  <strong>1.1</strong> These Terms of Service ("Terms") govern the internet service provided by <strong>Agustin Network</strong> ("we", "us" or "our") to you, the subscriber. They form a binding agreement between us the moment you submit an application, accept an installation, or use or pay for the service.
                </p>
                <p>
                  <strong>1.2</strong> Please read them together with our <strong>Data Privacy Policy</strong>, which explains how we handle your personal data. If you do not agree with these Terms, do not apply for or use the service.
                </p>
                <p>
                  <strong>1.3</strong> By purchasing, activating, accessing, or using the service (whether through home broadband installation or voucher hotspot roaming), the Customer signifies unconditional acceptance of all terms and conditions herein.
                </p>
              </div>
            </section>

            {/* 2. THE SERVICE & PLANS */}
            <section id="service-plans" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-600 font-bold">2</span>
                THE SERVICE & PLANS
              </h3>
              <div className="space-y-4 mb-6">
                <p>
                  <strong>2.1 Single Premises Delivery:</strong> We provide internet access to your home or business at the plan and speed you select. Service is delivered over our network to a single service address and is intended for use at that address only.
                </p>
                <p>
                  <strong>2.2 Plan Speeds:</strong> Plan speeds are the maximum attainable rate (<strong>"up to"</strong>) for that plan, not a guaranteed constant rate. Actual speed varies with the equipment and wiring at your premises, the number of devices in use, Wi-Fi conditions and distance from your router, the capacity of the sites you connect to, and congestion anywhere along the path. Speeds measured over Wi-Fi are typically lower than the same connection measured by cable.
                </p>
                <p>
                  <strong>2.3 Coverage & Feasibility:</strong> Availability depends on our coverage. We may decline or defer an application where your location is outside our coverage area, where no port is available at the nearest network access point, or where installation is not technically feasible.
                </p>
              </div>

              {/* 2.4 Business / Home Internet Plans */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-orange-500" />
                  2.4 Business / Home Internet Plans
                </h4>
                <p className="mb-4 text-slate-600 text-sm">
                  Monthly plans are intended for continuous and regular home/office use, subject to network stability:
                </p>
                
                <div className="grid sm:grid-cols-3 gap-4 mb-4">
                  {/* BASIC PLAN P999 */}
                  <div className="bg-white border-2 border-slate-200 hover:border-orange-400 rounded-xl p-5 shadow-sm transition-all relative overflow-hidden">
                    <div className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-1">Entry Level</div>
                    <div className="font-extrabold text-xl text-slate-900 mb-2">BASIC PLAN P999</div>
                    <div className="bg-orange-50 text-orange-800 text-xs font-semibold px-2.5 py-1 rounded-md inline-block mb-3 border border-orange-100">
                      Was: 25 Mbps
                    </div>
                    <div className="text-2xl font-black text-orange-600 mb-1">
                      50 Mbps
                      <span className="text-xs font-normal text-slate-500"> / month</span>
                    </div>
                    <div className="text-xs font-medium text-slate-600 flex items-center gap-1.5 mt-3 pt-3 border-t border-slate-100">
                      <Wifi className="w-3.5 h-3.5 text-slate-400" />
                      Up to 5 devices
                    </div>
                  </div>

                  {/* ELITE PLAN P1199 */}
                  <div className="bg-white border-2 border-orange-500 rounded-xl p-5 shadow-sm transition-all relative overflow-hidden ring-2 ring-orange-500/10">
                    <div className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-bl-lg uppercase tracking-wider">
                      Popular
                    </div>
                    <div className="text-xs uppercase tracking-wider font-bold text-orange-600 mb-1">Most Recommended</div>
                    <div className="font-extrabold text-xl text-slate-900 mb-2">ELITE PLAN P1199</div>
                    <div className="bg-orange-50 text-orange-800 text-xs font-semibold px-2.5 py-1 rounded-md inline-block mb-3 border border-orange-100">
                      Was: 35 Mbps
                    </div>
                    <div className="text-2xl font-black text-orange-600 mb-1">
                      75 Mbps
                      <span className="text-xs font-normal text-slate-500"> / month</span>
                    </div>
                    <div className="text-xs font-medium text-slate-600 flex items-center gap-1.5 mt-3 pt-3 border-t border-slate-100">
                      <Wifi className="w-3.5 h-3.5 text-slate-400" />
                      Up to 7 devices
                    </div>
                  </div>

                  {/* PRIME PLAN P1499 */}
                  <div className="bg-white border-2 border-slate-200 hover:border-orange-400 rounded-xl p-5 shadow-sm transition-all relative overflow-hidden">
                    <div className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-1">High Speed</div>
                    <div className="font-extrabold text-xl text-slate-900 mb-2">PRIME PLAN P1499</div>
                    <div className="bg-orange-50 text-orange-800 text-xs font-semibold px-2.5 py-1 rounded-md inline-block mb-3 border border-orange-100">
                      Was: 60 Mbps
                    </div>
                    <div className="text-2xl font-black text-orange-600 mb-1">
                      120 Mbps
                      <span className="text-xs font-normal text-slate-500"> / month</span>
                    </div>
                    <div className="text-xs font-medium text-slate-600 flex items-center gap-1.5 mt-3 pt-3 border-t border-slate-100">
                      <Wifi className="w-3.5 h-3.5 text-slate-400" />
                      Up to 10 devices
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 italic bg-slate-100 p-3 rounded-lg border border-slate-200">
                  The Provider reserves the right to manage bandwidth allocation to maintain network stability across the entire community.
                </p>
              </div>

              {/* 2.5 Device-Based Prepaid Plans */}
              <div>
                <h4 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <Radio className="w-5 h-5 text-orange-500" />
                  2.5 Device-Based Prepaid Plans (Per Device / Voucher)
                </h4>
                <p className="mb-4 text-slate-600 text-sm">
                  Each Device Plan allows <strong>one (1) device connection at any given time</strong> across our community hotspot network:
                </p>
                
                <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                  <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex justify-between items-center text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    <span>Voucher / Device Package</span>
                    <span>Max Attainable Speed</span>
                  </div>
                  <ul className="divide-y divide-slate-100 text-sm">
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
                          <span className="text-slate-400 hidden sm:inline">•</span>
                          <span className="text-slate-600">{plan.duration}</span>
                        </div>
                        <span className="text-xs font-semibold text-slate-600 mt-1 sm:mt-0 ml-7 sm:ml-0 bg-slate-100 px-2.5 py-1 rounded-md">
                          {plan.speed}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. APPLICATION, SERVICEABILITY AND INSTALLATION */}
            <section id="application" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-600 font-bold">3</span>
                APPLICATION, SERVICEABILITY AND INSTALLATION
              </h3>
              <div className="space-y-4">
                <p>
                  <strong>3.1 Request for Service:</strong> An application is a request for service, not an acceptance of it. We review each application, confirm serviceability at your location, and may ask for identification or proof of billing before approving it. Service begins on the date of installation and activation.
                </p>
                <p>
                  <strong>3.2 Access & Premises Readiness:</strong> You agree to provide safe access to the premises on the agreed date, a suitable power outlet for the equipment, and permission from the property owner where you are not the owner.
                </p>
                <p>
                  <strong>3.3 Rescheduling:</strong> Installations may be rescheduled where weather, safety or access prevents the work.
                </p>
              </div>
            </section>

            {/* 4. EQUIPMENT */}
            <section id="equipment" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-600 font-bold">4</span>
                EQUIPMENT
              </h3>
              <div className="space-y-4">
                <p>
                  <strong>4.1 Maintenance of Equipment:</strong> You agree to keep the modem, ONU or router installed at your premises in good condition and not to open, modify or resell it. Ownership of the equipment and any charge for loss or damage is as stated in your service agreement.
                </p>
                <p>
                  <strong>4.2 Remote Management & Diagnostics:</strong> The equipment we install is remotely managed. We may read its status and configuration and change its settings remotely in order to activate your service, diagnose faults and apply security updates. This is how most complaints are resolved without a technician visit; what we collect in the process is described in our Privacy Policy.
                </p>
                <p>
                  <strong>4.3 Interference:</strong> Do not connect the service to equipment that interferes with our network. We may disconnect equipment that causes interference or damage until the problem is resolved.
                </p>
              </div>
            </section>

            {/* 5. PLANS, FEES AND BILLING */}
            <section id="billing" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-600 font-bold">5</span>
                PLANS, FEES AND BILLING
              </h3>
              <div className="space-y-4">
                <p>
                  <strong>5.1 Pricing:</strong> Your monthly fee is the published price of the plan you selected. Prices are inclusive of applicable taxes unless stated otherwise, and we will give notice before any change in price takes effect.
                </p>
                <p>
                  <strong>5.2 Due Date & Advance Billing:</strong> Your account has its own due day of the month, set at activation. Each bill covers the month that begins the day after that due date, so you are paying for the month ahead.
                </p>
                <p>
                  <strong>5.3 Invoicing:</strong> Invoices are issued on or about the due date.
                </p>
                <p>
                  <strong>5.4 Account Portal & Notices:</strong> Your invoices, payments and outstanding balance are available at any time from your account portal (
                  <a 
                    href="https://agustinnetwork.isproph.com/login" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-orange-600 font-semibold underline inline-flex items-center gap-1"
                  >
                    https://agustinnetwork.isproph.com/login <ExternalLink className="w-3 h-3" />
                  </a>
                  ), and we send billing notices to the mobile number and email address on your account. Keeping those details current is your responsibility.
                </p>
              </div>
            </section>

            {/* 6. PAYMENT TERMS */}
            <section id="payment" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-600 font-bold">6</span>
                PAYMENT TERMS
              </h3>
              <div className="space-y-4">
                <p>
                  <strong>6.1 Authorized Channels:</strong> Payment may be made through any channel we publish, including cash payment at our office, bank transfer, and verified e-wallets. Payment is due on or before the due date shown on your invoice.
                </p>
                <p>
                  <strong>6.2 Payment Confirmation:</strong> A payment is credited to your account once we have received and confirmed it. Payments made through a third party, an agent or an unauthorized collector are at your own risk until they reach us. Always keep your official receipt or reference number.
                </p>
                <p>
                  <strong>6.3 Non-Refundable Rules:</strong> All services are prepaid unless otherwise agreed in writing. Amounts already paid for a period during which the service was available are not refundable, except where a rebate is due under the section on service interruptions below or for verified prolonged service outages directly attributable to the Provider.
                </p>
              </div>
            </section>

            {/* 7. LATE PAYMENT, ISOLATION AND RECONNECTION */}
            <section id="late-payment" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-600 font-bold">7</span>
                LATE PAYMENT, ISOLATION AND RECONNECTION
              </h3>
              <div className="space-y-4">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-950">
                  <p className="font-semibold text-sm flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-600" />
                    7.1 Grace Period (3 Days):
                  </p>
                  <p className="text-xs sm:text-sm mt-1 text-amber-900 leading-relaxed">
                    We allow a grace period of <strong>3 day(s)</strong> after the due date. An account still unpaid at the end of that grace period may be isolated.
                  </p>
                </div>
                <p>
                  <strong>7.2 Portal Isolation:</strong> While your connection is isolated it reaches only our billing portal, where you can view your balance and settle it. Isolation is not termination: your account, your equipment and your settings remain in place.
                </p>
                <p>
                  <strong>7.3 Full Restoration:</strong> Full service is restored once your payment is recorded and validated.
                </p>
                <p>
                  <strong>7.4 Default & Collection:</strong> An account that remains unpaid for an extended period may be disconnected permanently and the outstanding balance referred for collection. You remain liable for amounts accrued up to disconnection, and for the return of any equipment that belongs to us.
                </p>
              </div>
            </section>

            {/* 8. PLAN CHANGES AND RELOCATION */}
            <section id="plan-changes" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-600 font-bold">8</span>
                PLAN CHANGES AND RELOCATION
              </h3>
              <div className="space-y-4">
                <p>
                  <strong>8.1 Upgrades & Downgrades:</strong> You may request an upgrade or downgrade of your plan. Changes take effect from your next billing cycle unless we agree otherwise, and a downgrade does not refund the current period.
                </p>
                <p>
                  <strong>8.2 Relocation:</strong> Transfers to a new address are subject to serviceability at the new location and may carry a relocation charge, quoted before the work is scheduled.
                </p>
                <p>
                  <strong>8.3 Non-Transferability:</strong> The account may not be transferred to another person without our written consent, and any outstanding balance must be settled first.
                </p>
              </div>
            </section>

            {/* 9. MINIMUM TERM AND CANCELLATION */}
            <section id="cancellation" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-600 font-bold">9</span>
                MINIMUM TERM AND CANCELLATION
              </h3>
              <div className="space-y-4">
                <p>
                  <strong>9.1 Month-to-Month Basis:</strong> Your subscription runs on a month-to-month basis with no minimum lock-in term, and continues until cancelled by you or by us.
                </p>
                <p>
                  <strong>9.2 Written Notice:</strong> To cancel, give us written notice before your next due date. Cancellation takes effect at the end of the period you have already paid for.
                </p>
                <p>
                  <strong>9.3 Equipment Return:</strong> On cancellation you must settle any outstanding balance and make the premises available for the retrieval of equipment that belongs to us in good working condition.
                </p>
              </div>
            </section>

            {/* 10. ACCEPTABLE USE POLICY */}
            <section id="acceptable-use" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-600 font-bold">10</span>
                ACCEPTABLE USE POLICY
              </h3>
              <div className="space-y-4">
                <p>The service is for your own use at the designated service address. You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 marker:text-orange-500">
                  <li>Resell, redistribute or share the service beyond your premises — including running it to a neighbouring household or operating it as an unauthorized public hotspot for profit — without our written consent</li>
                  <li>Use the service for any unlawful purpose, including any offence under <strong>Republic Act No. 10175 (the Cybercrime Prevention Act of 2012)</strong></li>
                  <li>Send unsolicited bulk messages (spam), distribute malware, or attempt to gain unauthorized access to any system or account</li>
                  <li>Interfere with or attack any network, including port scanning, denial-of-service (DoS/DDoS) attacks, or spoofing addresses</li>
                  <li>Infringe copyright or other intellectual property rights, or distribute material that is illegal under Philippine law</li>
                  <li>Tamper with our equipment, cabling or network, or bypass any restriction we have applied to your connection</li>
                </ul>

                <div className="border-l-4 border-orange-500 bg-orange-50/70 p-4 rounded-r-lg">
                  <p className="text-sm font-semibold text-slate-900">
                    10.1 Customer Responsibility for Wi-Fi Security:
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    You are responsible for all activity carried out over your connection, including activity by members of your household, guests, and anyone using your Wi-Fi. Securing your Wi-Fi network and changing default passwords is your responsibility.
                  </p>
                </div>
                <p className="text-sm text-slate-600">
                  We may suspend or terminate the service without prior notice where we reasonably believe it is being used in breach of this section, and we will cooperate fully with lawful requests from authorities and the National Telecommunications Commission (NTC).
                </p>
              </div>
            </section>

            {/* 11. SERVICE INTERRUPTIONS AND MAINTENANCE */}
            <section id="interruptions" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-600 font-bold">11</span>
                SERVICE INTERRUPTIONS AND MAINTENANCE
              </h3>
              <div className="space-y-4">
                <p>
                  <strong>11.1 General Disruptions:</strong> We aim to keep the service running continuously but cannot guarantee that it will be uninterrupted or error-free. Interruptions can arise from maintenance, upgrades, equipment failure, fibre cuts, power outages, and events beyond our control such as typhoons, floods, earthquakes, fire and civil disturbance (force majeure).
                </p>
                <p>
                  <strong>11.2 Planned Works:</strong> We carry out planned maintenance in low-usage periods where possible and give advance notice through our usual channels when an interruption is expected to be significant.
                </p>
                <p>
                  <strong>11.3 NTC Rebates:</strong> Where an interruption is attributable to us and runs beyond the period prescribed by the National Telecommunications Commission, you may request a prorated rebate on your monthly fee for the affected days. Report the outage promptly so that the period can be verified from our records.
                </p>
              </div>
            </section>

            {/* 12. SUPPORT AND FAULT REPORTING */}
            <section id="support" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-600 font-bold">12</span>
                SUPPORT AND FAULT REPORTING
              </h3>
              <div className="space-y-4">
                <p>
                  <strong>12.1 Reporting Channels:</strong> Report faults through your account portal (
                  <a 
                    href="https://agustinnetwork.isproph.com/login" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-orange-600 underline font-semibold"
                  >
                    Client Login
                  </a>
                  ), or through our hotline (
                  <a href="tel:09691225280" className="text-slate-900 font-bold underline">
                    0969 122 5280
                  </a>
                  ) and official Facebook page. Please report a problem as soon as you notice it — we can only verify and credit an outage that we know about.
                </p>
                <p>
                  <strong>12.2 Remote Diagnostics First:</strong> We will attempt to diagnose the problem remotely first. Where a site visit is needed you agree to provide access to the premises and to the equipment at a reasonable time.
                </p>
                <p>
                  <strong>12.3 Non-Fault Technical Visits:</strong> A visit that finds no fault in our network or equipment — for example a fault in your own device, your own internal wiring, or the absence of power at your premises — may be chargeable, and we will inform you before any such charge is applied.
                </p>
              </div>
            </section>

            {/* 13. SUSPENSION AND TERMINATION BY US */}
            <section id="suspension" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-600 font-bold">13</span>
                SUSPENSION AND TERMINATION BY US
              </h3>
              <div className="space-y-4">
                <p>
                  <strong>13.1 Grounds:</strong> We may suspend or terminate the service where your account is unpaid, where these Terms are breached, where the information given in your application proves to be false, where the service is used fraudulently, or where we are required to do so by law or by a competent authority.
                </p>
                <p>
                  <strong>13.2 Notice:</strong> Except in cases of abuse, fraud, security threat, or legal compulsion, we will give you notice and a reasonable opportunity to put matters right before terminating.
                </p>
              </div>
            </section>

            {/* 14. LIMITATION OF LIABILITY */}
            <section id="liability" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-600 font-bold">14</span>
                LIMITATION OF LIABILITY
              </h3>
              <div className="space-y-4">
                <p>
                  <strong>14.1 Best-Effort Basis:</strong> The service is provided on a best-effort basis. To the extent permitted by Philippine law, we are not liable for indirect or consequential loss arising from an interruption or degradation of the service — including lost income, lost data, lost business opportunity, or the failure of a device or service that depends on your connection.
                </p>
                <p>
                  <strong>14.2 Maximum Liability:</strong> Where we are liable, our liability is limited to the fees you paid for the period affected. Nothing in these Terms limits any right you have that cannot be waived under Philippine law, including your rights under the <strong>Consumer Act of the Philippines (RA 7394)</strong>.
                </p>
                <p>
                  <strong>14.3 Emergency Services & Power:</strong> The service should not be relied upon as the sole means of reaching emergency services, and it does not function during a power failure at your premises.
                </p>
              </div>
            </section>

            {/* 15. DATA PRIVACY (REPUBLIC ACT NO. 10173) */}
            <section id="privacy" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-600 font-bold">15</span>
                DATA PRIVACY (REPUBLIC ACT NO. 10173)
              </h3>
              <div className="space-y-4">
                <p>
                  <strong>15.1 Compliance:</strong> Your personal data is handled in strict accordance with the <strong>Data Privacy Act of 2012 (Republic Act No. 10173)</strong> and its Implementing Rules and Regulations.
                </p>
                <p>
                  <strong>15.2 Information Collected:</strong> We collect and process limited personal data necessary to activate and maintain service, including:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-slate-600 marker:text-orange-500 text-sm">
                  <li>Subscriber name, service address, mobile number, and email address</li>
                  <li>Device identifiers (MAC address, IP address) and router configuration status</li>
                  <li>Connection logs, session timestamps, and billing/payment history</li>
                </ul>
                <p>
                  <strong>15.3 Usage of Data:</strong> Data is used solely for service delivery, troubleshooting, billing notifications, abuse prevention, and regulatory compliance. We do not sell or monetize subscriber data.
                </p>
                <p>
                  <strong>15.4 Subscriber Rights:</strong> Subscribers retain all rights under the Data Privacy Act, including the right to be informed, access data, object, and request rectification or erasure subject to legal and regulatory archiving requirements.
                </p>
              </div>
            </section>

            {/* 16. WIFI ROAMING & HOTSPOT POLICY */}
            <section id="roaming" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-600 font-bold">16</span>
                WIFI ROAMING & HOTSPOT POLICY
              </h3>
              <div className="space-y-4">
                <p>
                  <strong>16.1 Covered Area Access:</strong> A valid voucher or active mobile device subscription may be used to access any Provider-operated hotspot within the covered areas (<strong>Umiray, Ibona, Matawe, and surrounding barangays</strong>), subject to availability and capacity.
                </p>
                <p>
                  <strong>16.2 Roaming Conditions:</strong> WiFi roaming performance depends on radio signal strength, environmental line-of-sight, distance from access points, and simultaneous user load.
                </p>
                <p>
                  <strong>16.3 Capacity Control:</strong> The Provider may limit roaming access if usage adversely affects network performance or other subscribers.
                </p>
              </div>
            </section>

            {/* 17. CHANGES TO THESE TERMS */}
            <section id="changes" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-600 font-bold">17</span>
                CHANGES TO THESE TERMS
              </h3>
              <div className="space-y-4">
                <p>
                  <strong>17.1 Notice of Changes:</strong> We may update these Terms to reflect changes in our service, our systems or the law. The current version is always published on this page with its revision date, and we will give notice of material changes through our usual channels.
                </p>
                <p>
                  <strong>17.2 Acceptance:</strong> Continuing to use the service after a change takes effect means you accept the updated Terms; if you do not agree, you may cancel your subscription under Section 9 without penalty.
                </p>
              </div>
            </section>

            {/* 18. GOVERNING LAW AND DISPUTES */}
            <section id="governing-law" className="scroll-mt-32 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-sm text-slate-600 font-bold">18</span>
                GOVERNING LAW AND DISPUTES
              </h3>
              <div className="space-y-4">
                <p>
                  <strong>18.1 Governing Law:</strong> These Terms are governed by the laws of the Republic of the Philippines, including applicable rules, circulars, and orders issued by the <strong>National Telecommunications Commission (NTC)</strong>.
                </p>
                <p>
                  <strong>18.2 Resolution Process:</strong> Please raise any dispute with us first — most issues are resolved quickly. Where a dispute cannot be settled amicably between us, it shall be brought before the proper courts of the Philippines.
                </p>
                <p>
                  <strong>18.3 Regulatory Recourse:</strong> You may also bring a complaint about your internet service to the <strong>National Telecommunications Commission (NTC)</strong>, or a consumer protection complaint to the <strong>Department of Trade and Industry (DTI)</strong>.
                </p>

                <div className="bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-md mt-6 space-y-2">
                  <p className="font-bold text-white text-base">
                    Agustin Network Customer Service Agreement
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    By submitting an application, paying for services, using our Wi-Fi hotspots, or accepting installation, the Customer agrees to abide by all the above terms and conditions.
                  </p>
                </div>
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
                Providing reliable wireless broadband internet access and community hotspot services in Umiray, Ibona, Matawe, and surrounding barangays.
              </p>
            </div>
            
            <div className="space-y-3 md:text-right">
              <div className="flex items-center md:justify-end gap-3 text-sm">
                <MapPin className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <span>Sitio Malamig, Umiray, Dingalan, Aurora</span>
              </div>
              <div className="flex items-center md:justify-end gap-3 text-sm">
                <Phone className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <a href="tel:09691225280" className="hover:text-white transition-colors font-medium">
                  0969 122 5280
                </a>
              </div>
              <div className="flex items-center md:justify-end gap-3 text-sm">
                <Mail className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <a href="mailto:agustinnetworkanddatasolution@gmail.com" className="hover:text-white transition-colors">
                  agustinnetworkanddatasolution@gmail.com
                </a>
              </div>
              <div className="flex items-center md:justify-end gap-3 text-sm pt-1">
                <a 
                  href="https://agustinnetwork.isproph.com/login" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-orange-400 hover:text-orange-300 font-semibold inline-flex items-center gap-1"
                >
                  Client Login Portal <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-800 text-xs sm:text-sm text-center flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Agustin Network. All rights reserved.</p>
            <p className="text-slate-500">Agustin Network Terms of Service (TnC)</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
