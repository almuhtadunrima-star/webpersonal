import React from 'react';
import { motion } from 'motion/react';
import { Quote, Sparkles, Compass } from 'lucide-react';
import { PHILOSOPHY_DATA } from '../data/portfolioData';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 md:py-28 bg-white border-t border-[#EAE8E3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-16 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#E5E3DD] text-[#374151] text-xs font-bold tracking-widest uppercase mb-3">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            <span>10 — Personal Principles</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
            What I Believe.
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] mt-3 leading-relaxed">
            Empat prinsip dasar yang mengomandoi bagaimana saya bersikap di lapangan sepak bola, saat memegang mikrofon di panggung, maupun ketika memimpin musyawarah organisasi.
          </p>
        </motion.div>

        {/* 4 Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PHILOSOPHY_DATA.map((item, index) => (
            <motion.div
              key={item.number}
              id={`philosophy-card-${item.number}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="p-8 sm:p-10 rounded-3xl bg-[#FAF9F6] border border-[#E5E3DD] hover:bg-white hover:border-[#CBD5E1] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#9CA3AF] tracking-widest">
                    PRINSIP // {item.number}
                  </span>
                  <Quote className="w-5 h-5 text-[#9CA3AF] group-hover:text-blue-600 transition-colors" />
                </div>

                <h3 className="font-display text-2xl font-bold text-[#111827] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-blue-700 mb-4">
                  {item.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E3DD]">
                <p className="text-xs italic text-[#1F2937] font-medium leading-normal">
                  “{item.quote}”
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
