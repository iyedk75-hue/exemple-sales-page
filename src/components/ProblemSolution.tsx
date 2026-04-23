import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'motion/react';
import img22 from '../img/22.jpeg';
import img23 from '../img/23.jpeg';
import img24 from '../img/24.jpeg';
import img25 from '../img/25.jpeg';

const rows = [
  {
    num: '01',
    title: 'Stanco del rumore?',
    desc: 'Le nostre pareti acustiche abbattono fino al 70% dei rumori dei vicini.',
    img: img22,
  },
  {
    num: '02',
    title: 'Lavori infiniti?',
    desc: 'Installazione rapida e pulita. Trasformiamo una stanza in soli 2 giorni.',
    img: img23,
  },
  {
    num: '03',
    title: 'Design datato?',
    desc: "Controsoffitti moderni con LED integrati per un'atmosfera da hotel 5 stelle.",
    img: img24,
  },
  {
    num: '04',
    title: 'Crepe fastidiose?',
    desc: 'Utilizziamo solo materiali anti-fessurazione garantiti per 10 anni.',
    img: img25,
  },
];

const features = [
  'Isolamento Termico & Acustico',
  'Illuminazione LED Integrata',
  'Arredi su Misura in Cartongesso',
  'Finiture Lisce come Seta',
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function ProblemSolution() {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  return (
    <section id="interest" className="py-16 sm:py-20 lg:py-24 bg-[#1A1A1A] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* ── Zone 1: heading left + images right ── */}
        <motion.div
          className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-end pb-12 sm:pb-16 border-b border-white/[0.07]"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.15 }}
          variants={containerVariants}
        >
          {/* Heading */}
          <div className="flex flex-col justify-end">
            <motion.p
              variants={fadeUp}
              className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/30 mb-5"
            >
              Perché Sceglierci
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            >
              Perché accontentarsi di una casa{' '}
              <span className="text-[#E6C9A8]">"normale"</span>?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base text-white/50 leading-relaxed max-w-md"
            >
              Noi non costruiamo solo pareti — risolviamo problemi di spazio e comfort
              con soluzioni di design intelligenti.
            </motion.p>
          </div>

          {/* Images: img2 tall left, img3 shorter right offset */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 gap-3 sm:gap-4 items-end"
          >
            <motion.div
              className="rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl shadow-black/50"
              whileInView={{ opacity: [0, 1], scale: [0.95, 1] }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <img src={img22} alt="Struttura in acciaio" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              className="rounded-2xl overflow-hidden aspect-square shadow-2xl shadow-black/50 mb-6 sm:mb-10 border border-[#E6C9A8]/20"
              whileInView={{ opacity: [0, 1], scale: [0.95, 1] }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <img src={img23} alt="Griglia soffitto" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Zone 2: Services-style rows with hover-expand image ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={containerVariants}
        >
          {rows.map((row) => {
            const isHovered = hoveredRow === row.num;
            return (
              <motion.div
                key={row.num}
                variants={rowVariants}
                className="border-b border-white/[0.07] overflow-hidden"
                onMouseEnter={() => setHoveredRow(row.num)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <div className={`flex items-center gap-4 sm:gap-8 py-5 sm:py-6 cursor-default transition-colors duration-200 px-2 -mx-2 rounded-xl ${
                  isHovered ? 'bg-white/[0.03]' : ''
                }`}>
                  <span className="text-[0.65rem] font-bold tracking-[0.1em] text-white/25 min-w-[28px] shrink-0">
                    {row.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <motion.span
                      className="block font-bold leading-snug"
                      animate={{ color: isHovered ? '#E6C9A8' : '#ffffff' }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      style={{ fontSize: 'clamp(1.1rem, 2.4vw, 1.75rem)' }}
                    >
                      {row.title}
                    </motion.span>
                    <span className="block text-sm text-white/40 mt-1">{row.desc}</span>
                  </div>
                  <motion.span
                    className="text-lg shrink-0"
                    animate={{
                      color: isHovered ? '#E6C9A8' : 'rgba(255,255,255,0.25)',
                      x: isHovered ? 4 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    →
                  </motion.span>
                </div>

                <AnimatePresence initial={false}>
                  {isHovered && (
                    <motion.div
                      key="img"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 340, opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden w-full"
                    >
                      <motion.img
                        src={row.img}
                        alt={row.title}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.06 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Feature pills ── */}
        <motion.div
          className="flex flex-wrap gap-2 mt-8 sm:mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          variants={containerVariants}
        >
          {features.map((text, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.85 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.4, delay: i * 0.07, ease: 'easeOut' },
                },
              }}
              className="bg-white/[0.05] border border-white/10 rounded-full px-3 py-1.5 text-[0.7rem] font-bold text-[#E6C9A8] tracking-wide"
            >
              {text}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
