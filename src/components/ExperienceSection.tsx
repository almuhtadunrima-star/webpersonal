import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Briefcase, CheckCircle2, Milestone } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-white border-t border-[#EAE8E3] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-left mb-16 pb-6 border-b border-[#E5E3DD]"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#E5E3DD] text-[#374151] text-xs font-bold tracking-widest uppercase mb-3">
            <Milestone className="w-3.5 h-3.5 text-blue-600" />
            <span>08 — Perjalanan & Tanggung Jawab</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
            Jejak Pengalaman & Kepemimpinan.
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] max-w-xl mt-3">
            Rangkaian peran yang melatih konsistensi, kepekaan sosial, dan keterampilan komunikasi di dunia nyata.
          </p>
        </motion.div>

        {/* Modern Vertical Timeline */}
        <div className="relative border-l-2 border-[#E5E3DD] ml-3 sm:ml-6 space-y-12">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="relative pl-6 sm:pl-10 group"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#111827] group-hover:border-blue-600 group-hover:scale-125 transition-all duration-300" />

              {/* Timeline Card */}
              <motion.div
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="p-6 sm:p-8 rounded-3xl bg-[#FAF9F6] border border-[#E5E3DD] hover:bg-white hover:border-[#CBD5E1] hover:shadow-lg transition-all duration-300"
              >
                {/* Year & Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                    {exp.year}
                  </span>
                  <span className="text-xs font-semibold text-[#6B7280]">
                    {exp.type}
                  </span>
                </div>

                {/* Role & Org */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#111827] mb-1">
                  {exp.role}
                </h3>
                <p className="text-sm font-semibold text-[#4B5563] mb-4">
                  {exp.organization} · <span className="text-[#6B7280] font-normal">{exp.location}</span>
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Key Responsibilities & Highlights */}
                <div className="pt-4 border-t border-[#E5E3DD]">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#111827] mb-2.5">
                    Fokus Kontribusi:
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#374151]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
