import React from 'react';
import { motion } from 'motion/react';
import { Mic, Volume2, CalendarDays, Users, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Mic':
        return <Mic className="w-5 h-5" />;
      case 'Volume2':
        return <Volume2 className="w-5 h-5" />;
      case 'CalendarDays':
        return <CalendarDays className="w-5 h-5" />;
      case 'Users':
      default:
        return <Users className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-white border-t border-[#EAE8E3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E5E3DD] gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#E5E3DD] text-[#374151] text-xs font-bold tracking-widest uppercase mb-3">
              <span>05 — Value & Services</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
              Layanan & Kontribusi Nyata yang Bisa Saya Berikan.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6B7280] max-w-md">
            Pendekatan berbasis nilai: bukan sekadar mengisi waktu panggung atau kepanitiaan, melainkan memastikan acara dan tim Anda mencapai tujuan terbaiknya.
          </p>
        </motion.div>

        {/* Services Grid (Editorial 2x2 with clear hierarchy) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              id={`service-card-${service.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="rounded-3xl bg-[#FAF9F6] border border-[#E5E3DD] p-7 sm:p-9 flex flex-col justify-between hover:bg-white hover:border-[#CBD5E1] hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                {/* Card Top: Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#E5E3DD] flex items-center justify-center text-[#111827] shadow-xs group-hover:scale-110 group-hover:bg-[#111827] group-hover:text-white transition-all">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="font-mono text-sm font-bold text-[#9CA3AF] tracking-wider">
                    {service.number} / 04
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-display text-2xl font-bold text-[#111827] mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm font-semibold text-[#4B5563] mb-4">
                  {service.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="mb-6 pt-4 border-t border-[#E5E3DD]">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#111827] mb-3">
                    Bentuk Luaran / Deliverables:
                  </p>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#374151]">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom: Ideal For & Direct Inquire Button */}
              <div className="pt-6 border-t border-[#E5E3DD] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-[11px] text-[#6B7280] max-w-xs">
                  <span className="font-bold text-[#374151]">Cocok untuk:</span> {service.idealFor}
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-[#D1D5DB] text-xs font-semibold text-[#111827] hover:bg-[#111827] hover:text-white hover:border-[#111827] transition-all cursor-pointer shadow-xs shrink-0"
                >
                  <span>Diskusikan Acara Ini</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note / Disclaimer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 p-5 rounded-2xl bg-[#FAF9F6] border border-dashed border-[#CBD5E1] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <p className="text-xs text-[#6B7280]">
            💡 <strong>Transparansi Kolaborasi:</strong> Setiap bentuk keterlibatan dirancang sesuai kebutuhan spesifik panitia atau organisasi, mengedepankan etika, kepatuhan rundown, dan kenyamanan seluruh pihak.
          </p>
          <a
            href="#contact"
            className="text-xs font-bold text-blue-600 hover:text-blue-800 underline underline-offset-4 whitespace-nowrap"
          >
            Konsultasikan Kebutuhan Acara →
          </a>
        </motion.div>
      </div>
    </section>
  );
};
