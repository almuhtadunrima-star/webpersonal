import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onSelectContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['story', 'three-sides', 'about', 'services', 'impact', 'work', 'experience', 'skills', 'philosophy', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Story', href: '#story', id: 'story' },
    { label: '3 Sisi', href: '#three-sides', id: 'three-sides' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Impact', href: '#impact', id: 'impact' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Journey', href: '#experience', id: 'experience' },
    { label: 'Filosofi', href: '#philosophy', id: 'philosophy' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#E7E5E0] shadow-xs py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          id="nav-brand"
          href="#"
          className="group flex flex-col items-start focus:outline-hidden"
        >
          <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-[#111827] group-hover:text-blue-600 transition-colors">
            MUHAMMAD ALI
          </span>
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#6B7280] -mt-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Communicator · Leader
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 bg-white/70 border border-[#E5E3DD] px-3 py-1.5 rounded-full shadow-xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#111827] text-white shadow-xs'
                    : 'text-[#4B5563] hover:text-[#111827] hover:bg-black/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="nav-cta-btn"
            onClick={onSelectContact}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111827] text-white text-xs font-semibold tracking-wide hover:bg-blue-600 transition-all shadow-xs cursor-pointer active:scale-95"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#1F2937] hover:bg-black/5 focus:outline-hidden cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="lg:hidden bg-[#FAF9F6] border-b border-[#E5E3DD] px-5 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1.5 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`mobile-link-${link.id}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-[#374151] hover:bg-white hover:text-[#111827] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#E5E3DD] flex flex-col gap-2">
            <button
              id="mobile-nav-cta"
              onClick={() => {
                setMobileMenuOpen(false);
                onSelectContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#111827] text-white text-sm font-semibold hover:bg-blue-600 transition-colors"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-center text-[#6B7280] mt-1">
              Available for MC, Speaking & Youth Program Consultation
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
