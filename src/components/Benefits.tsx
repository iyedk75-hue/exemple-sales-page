import { motion, type Variants } from 'motion/react';
import { ArrowRight, X, Check } from 'lucide-react';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const comparisons = [
  {
    problem: 'Freddo d\'inverno, caldo d\'estate',
    benefit: '+30% isolamento termico certificato',
  },
  {
    problem: 'Lavori in casa per 2 settimane',
    benefit: 'Trasformazione completa in 48 ore',
  },
  {
    problem: 'Preventivo che cambia sempre',
    benefit: 'Prezzo fisso scritto, zero sorprese',
  },
  {
    problem: 'Rumori fastidiosi dai vicini',
    benefit: '-70% rumore — silenzio garantito',
  },
  {
    problem: 'Design datato e spazi brutti',
    benefit: 'Progetto su misura da hotel 5 stelle',
  },
  {
    problem: 'Crepe e muri che si deteriorano',
    benefit: 'Materiali anti-fessurazione, 10 anni di garanzia',
  },
];

export default function Benefits() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FDFCFB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.p
            variants={fadeUp}
            className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#A67C52]/60 mb-4"
          >
            Perché Sceglierci
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
          >
            Non stiamo vendendo pareti.
            <br />
            <span className="text-[#A67C52]">Stiamo vendendo risultati.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-[#1A1A1A]/45 max-w-md mx-auto">
            La differenza tra una casa che soffri e una casa che ami — in numeri concreti.
          </motion.p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          className="grid lg:grid-cols-2 gap-4 sm:gap-5 mb-12 sm:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Before column */}
          <div>
            <div className="flex items-center gap-2 mb-4 px-2">
              <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                <X className="w-3 h-3 text-red-500" strokeWidth={3} />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#1A1A1A]/40">
                Senza Elite Cartongesso
              </span>
            </div>
            <div className="space-y-3">
              {comparisons.map((c, i) => (
                <motion.div
                  key={i}
                  variants={rowVariants}
                  className="flex items-center gap-3 bg-red-50/60 border border-red-100 rounded-2xl px-5 py-4"
                >
                  <X className="w-4 h-4 text-red-400 shrink-0" strokeWidth={2.5} />
                  <span className="text-sm text-[#1A1A1A]/55 line-through decoration-red-300/60">
                    {c.problem}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* After column */}
          <div>
            <div className="flex items-center gap-2 mb-4 px-2">
              <div className="w-5 h-5 rounded-full bg-[#A67C52]/15 flex items-center justify-center">
                <Check className="w-3 h-3 text-[#A67C52]" strokeWidth={3} />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#A67C52]/70">
                Con Elite Cartongesso
              </span>
            </div>
            <div className="space-y-3">
              {comparisons.map((c, i) => (
                <motion.div
                  key={i}
                  variants={rowVariants}
                  className="flex items-center gap-3 bg-[#A67C52]/[0.06] border border-[#A67C52]/20 rounded-2xl px-5 py-4"
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  <Check className="w-4 h-4 text-[#A67C52] shrink-0" strokeWidth={2.5} />
                  <span className="text-sm font-semibold text-[#1A1A1A]/80">
                    {c.benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-9 py-4 rounded-full font-bold text-sm hover:bg-[#A67C52] transition-colors duration-300 shadow-xl shadow-black/10"
          >
            Accedi ai benefici ora
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-xs text-[#1A1A1A]/35 mt-3">
            Sopralluogo gratuito · Preventivo in 24h · Zero impegno
          </p>
        </motion.div>

      </div>
    </section>
  );
}
