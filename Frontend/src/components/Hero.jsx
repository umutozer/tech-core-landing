import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Shield, Zap, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-[-5%] w-[30%] h-[30%] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
            Yeni Nesil Teknoloji Ortağınız
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-darkBg font-heading mb-6 tracking-tight">
            Geleceği <span className="text-primary">Kodluyoruz</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-secondary mb-10 leading-relaxed">
            Karmaşık iş süreçlerinizi modern yazılım çözümleriyle basitleştirin. 
            Performans odaklı, ölçeklenebilir ve güvenli dijital dönüşüm için buradayız.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-darkBg text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              Projeye Başla <ChevronRight size={20} />
            </button>
            <button className="w-full sm:w-auto border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-darkBg hover:bg-slate-50 transition-colors">
              Demoyu İzle
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 grayscale opacity-60"
        >
          {/* Mock Client Icons */}
          <div className="flex items-center justify-center font-bold text-xl uppercase tracking-widest">GlobalLog</div>
          <div className="flex items-center justify-center font-bold text-xl uppercase tracking-widest">Quantum</div>
          <div className="flex items-center justify-center font-bold text-xl uppercase tracking-widest">NexGen</div>
          <div className="flex items-center justify-center font-bold text-xl uppercase tracking-widest">ApexSys</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;