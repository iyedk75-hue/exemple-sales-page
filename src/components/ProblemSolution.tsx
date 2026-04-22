import { motion, type Variants } from 'motion/react';
import { AlertCircle, Clock, Sparkles, ShieldCheck, Check } from 'lucide-react';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cards = [
  {
    Icon: AlertCircle,
    color: 'text-red-400',
    title: 'Stanco del rumore?',
    desc: 'Le nostre pareti acustiche abbattono fino al 70% dei rumori dei vicini.',
    offset: false,
  },
  {
    Icon: Clock,
    color: 'text-blue-400',
    title: 'Lavori infiniti?',
    desc: 'Installazione rapida e pulita. Trasformiamo una stanza in soli 2 giorni.',
    offset: true,
  },
  {
    Icon: Sparkles,
    color: 'text-yellow-500',
    title: 'Design datato?',
    desc: "Controsoffitti moderni con LED integrati per un'atmosfera da hotel 5 stelle.",
    offset: false,
  },
  {
    Icon: ShieldCheck,
    color: 'text-green-500',
    title: 'Crepe fastidiose?',
    desc: 'Utilizziamo solo materiali anti-fessurazione garantiti per 10 anni.',
    offset: true,
  },
];

const features = [
  'Isolamento Termico & Acustico',
  'Illuminazione LED Integrata',
  'Arredi su Misura in Cartongesso',
  'Finiture Lisce come Seta',
];

export default function ProblemSolution() {
  return (
    <section id="interest" className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          {/* Cards grid */}
          <motion.div
            className="order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.15 }}
          >
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {cards.map(({ Icon, color, title, desc, offset }, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className={`p-6 sm:p-8 bg-[#FDFCFB] rounded-3xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#E6C9A8] transition-all duration-300 ${
                    offset ? 'sm:mt-8' : ''
                  }`}
                  whileHover={{ y: -4 }}
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className={`w-8 h-8 sm:w-10 sm:h-10 ${color} mb-4`} />
                  </motion.div>
                  <h3 className="font-bold text-lg mb-2">{title}</h3>
                  <p className="text-sm text-gray-500">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            className="order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.15 }}
            variants={containerVariants}
          >
            <motion.h2
              variants={cardVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight"
            >
              Perché accontentarsi di una casa "normale"?
            </motion.h2>
            <motion.p
              variants={cardVariants}
              className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed"
            >
              Molti proprietari di casa convivono con spazi mal organizzati, rumori molesti o
              soffitti banali. Noi non costruiamo solo pareti; risolviamo problemi di spazio e
              comfort con soluzioni di design intelligenti.
            </motion.p>
            <motion.ul
              variants={containerVariants}
              className="space-y-3 sm:space-y-4"
            >
              {features.map((text, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5, delay: i * 0.09, ease: 'easeOut' },
                    },
                  }}
                  className="flex items-center gap-3 font-bold text-sm sm:text-base text-[#1A1A1A]"
                >
                  <motion.div
                    className="w-6 h-6 rounded-full bg-[#E6C9A8] flex items-center justify-center shrink-0"
                    whileInView={{ scale: [0.5, 1.2, 1] }}
                    viewport={{}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.09 }}
                  >
                    <Check className="w-4 h-4 text-[#A67C52]" />
                  </motion.div>
                  {text}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
