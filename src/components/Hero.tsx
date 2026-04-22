import { useRef } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={sectionRef}
      className="relative pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-48 lg:pb-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
        {/* Text column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6C9A8]/30 text-[#A67C52] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-5 sm:mb-6"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <Sparkles className="w-3 h-3" />
            L'Eccellenza del Cartongesso a Milano
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] mb-6 sm:mb-8 tracking-tighter"
          >
            Basta pareti anonime. <br />
            Crea un <span className="text-[#A67C52]">Capolavoro</span> in casa tua.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-lg"
          >
            Smetti di sognare una casa da rivista. Realizziamo controsoffitti, pareti e arredi in
            cartongesso con finiture di lusso e precisione millimetrica.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <motion.a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-[#1A1A1A] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg shadow-xl shadow-black/10 text-center group"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Voglio un Preventivo Gratuito
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-200" />
            </motion.a>

            <motion.div variants={itemVariants} className="flex items-center gap-3 px-1 sm:px-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <motion.img
                    key={i}
                    src={`https://picsum.photos/seed/face${i}/100/100`}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-sm"
                    alt="Client"
                    referrerPolicy="no-referrer"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + i * 0.1 }}
                  />
                ))}
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-500 leading-relaxed">
                <span className="text-[#1A1A1A] font-bold">+250</span> progetti completati con
                successo
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative"
        >
          <motion.div
            style={{ y: imgY }}
            className="aspect-[4/5] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border-[6px] sm:border-8 border-white"
          >
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000"
              alt="Luxury Drywall Design"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Floating discount badge */}
          <motion.div
            className="absolute top-4 right-4 sm:-top-8 sm:-right-8 bg-[#A67C52] text-white p-5 sm:p-8 rounded-[1.5rem] sm:rounded-3xl shadow-2xl max-w-[150px] sm:max-w-none animate-float"
            initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ duration: 0.6, delay: 0.9, type: 'spring', stiffness: 180, damping: 14 }}
          >
            <div className="text-3xl sm:text-4xl font-black mb-1">15%</div>
            <div className="text-xs font-bold uppercase tracking-widest opacity-80">Sconto Lancio</div>
            <div className="text-[10px] mt-2 opacity-60">Scade tra 7 giorni</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
