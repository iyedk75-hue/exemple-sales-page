import { useRef } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import img5 from '../img/5.jpeg';
import img6 from '../img/6.jpeg';
import img7 from '../img/7.jpeg';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const stats = [
  { value: '+250', label: 'Progetti completati' },
  { value: '+10',  label: 'Anni di esperienza'  },
  { value: '15%',  label: 'Sconto lancio'        },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const imgY  = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28 overflow-hidden bg-[#FDFCFB]"
    >
      {/* Grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.032]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full">

        {/* Centered text block */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 lg:mb-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="text-[0.6rem] tracking-[0.32em] uppercase text-[#A67C52]/60 font-medium mb-8 sm:mb-10"
          >
            Eccellenza Artigianale &nbsp;·&nbsp; Milano
          </motion.p>

          <motion.h1
            variants={itemVariants}
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-[3.2rem] sm:text-[5rem] lg:text-[7rem] xl:text-[8.5rem] font-light leading-[0.92] tracking-[-0.01em] text-[#1A1A1A] mb-8 sm:mb-10"
          >
            Basta pareti<br />
            anonime. Crea{' '}
            <em className="italic font-light text-[#A67C52]">un</em>
            <br />
            <span className="font-semibold">Capolavoro</span>
            {' '}in casa tua.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#1A1A1A]/45 max-w-lg mx-auto leading-relaxed mb-10 sm:mb-12 font-light"
          >
            Realizziamo controsoffitti, pareti e arredi in cartongesso con finiture
            di lusso e precisione millimetrica.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Preventivo Gratuito
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>
            <motion.a
              href="#desire"
              className="inline-flex items-center gap-2 border border-[#1A1A1A]/12 text-[#1A1A1A]/60 px-8 py-4 rounded-full text-sm tracking-wide font-medium hover:border-[#A67C52]/40 hover:text-[#A67C52] transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Scopri i nostri lavori
            </motion.a>
          </motion.div>
        </motion.div>

        {/* 3-image editorial mosaic */}
        <motion.div
          style={{ y: imgY }}
          className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-5 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="aspect-[3/4] rounded-2xl overflow-hidden">
            <img
              src={img6}
              alt="Dettagli di lusso"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="aspect-[3/5] rounded-2xl overflow-hidden -mt-8 sm:-mt-14 shadow-2xl shadow-[#A67C52]/10 border-4 border-white">
            <img
              src={img5}
              alt="Luxury drywall finish"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="aspect-[3/4] rounded-2xl overflow-hidden">
            <img
              src={img7}
              alt="Architettura in cartongesso"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 mt-12 sm:mt-16 pt-8 border-t border-[#1A1A1A]/[0.06]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] tracking-tight leading-none"
              >
                {value}
              </div>
              <div className="text-[0.6rem] text-[#1A1A1A]/40 uppercase tracking-[0.18em] mt-2">
                {label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
