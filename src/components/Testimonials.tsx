import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform, type Variants } from 'motion/react';
import { ArrowRight, Quote, Star } from 'lucide-react';

/** Animated number counter */
function AnimatedCounter({ target, decimals = 0, suffix = '' }: { target: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { margin: '-60px' });
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 80, damping: 18 });
  const display = useTransform(spring, (v) => `${v.toFixed(decimals)}${suffix}`);
  const [text, setText] = useState(`0${suffix}`);

  useEffect(() => {
    if (isInView) raw.set(target);
  }, [isInView, raw, target]);

  useEffect(() => {
    const unsub = display.on('change', (v) => setText(v));
    return unsub;
  }, [display]);

  return <span ref={ref}>{text}</span>;
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const testimonials = [
  {
    quote: "Non pensavo che il cartongesso potesse fare così tanta differenza. La mia casa ora sembra un'altra, più calda e infinitamente più bella.",
    name: 'Laura Bernasconi',
    role: 'Proprietaria, Monza',
    result: 'Casa completata in 3 giorni',
    seed: 'laura',
  },
  {
    quote: "Finalmente silenzio! Avevo i vicini che sentivo respirare. Dopo la parete acustica di Elite, zero rumori. Vale ogni centesimo.",
    name: 'Marco Ferretti',
    role: 'Avvocato, Milano Centro',
    result: '-70% rumori certificati',
    seed: 'marco99',
  },
  {
    quote: "Il controsoffitto con LED integrati ha trasformato il mio salotto in qualcosa da rivista. I miei ospiti non credono ai loro occhi.",
    name: 'Giulia Ricci',
    role: 'Interior Designer, Sesto S. Giovanni',
    result: 'Valore immobile +18%',
    seed: 'giulia2',
  },
  {
    quote: "Preventivo onesto, nessuna sorpresa in fattura, lavoro finito prima del previsto. Rarissimo trovare artigiani così professionali a Milano.",
    name: 'Antonio Mancuso',
    role: 'Imprenditore, Cinisello Balsamo',
    result: 'Lavori terminati in anticipo',
    seed: 'antonio7',
  },
];

export default function Testimonials() {
  return (
    <motion.section
      className="py-16 sm:py-20 lg:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Section header */}
        <motion.div variants={revealVariants} className="text-center mb-10 sm:mb-14">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#A67C52]/60 mb-4">
            Clienti Soddisfatti
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Loro ci hanno già scelto.
            <br />
            <span className="text-[#A67C52]">Ecco cosa dicono.</span>
          </h2>
          <p className="text-sm text-[#1A1A1A]/45 max-w-md mx-auto">
            +250 famiglie trasformate. Ogni recensione è reale — controllabile su Google.
          </p>
        </motion.div>

        {/* 4 testimonial cards grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-8 sm:mb-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="bg-[#F5F2ED] rounded-[2rem] p-6 sm:p-8 flex flex-col gap-5 hover:shadow-lg transition-shadow duration-300"
              whileHover={{ y: -3 }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[0,1,2,3,4].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-[#A67C52] text-[#A67C52]" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote className="absolute -top-1 -left-1 w-6 h-6 text-[#A67C52]/20" />
                <p className="text-sm sm:text-base text-[#1A1A1A]/75 leading-relaxed pl-4 italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Result badge */}
              <span className="inline-flex items-center gap-1.5 bg-[#A67C52]/10 text-[#A67C52] text-[0.68rem] font-bold px-3 py-1.5 rounded-full w-fit tracking-wide">
                ✓ {t.result}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-[#1A1A1A]/[0.06]">
                <img
                  src={`https://picsum.photos/seed/${t.seed}/48/48`}
                  className="w-11 h-11 rounded-full border-2 border-white shadow-sm"
                  alt={t.name}
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats + CTA row */}
        <motion.div
          variants={revealVariants}
          className="bg-[#1A1A1A] rounded-[2rem] p-6 sm:p-10 grid sm:grid-cols-3 gap-6 items-center"
        >
          <div className="text-center sm:border-r border-white/[0.08]">
            <div className="text-4xl sm:text-5xl font-black text-[#E6C9A8] mb-1">
              <AnimatedCounter target={4.9} decimals={1} />
            </div>
            <div className="flex justify-center gap-0.5 mb-1">
              {[0,1,2,3,4].map((i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{}}
                  transition={{ duration: 0.35, delay: 0.4 + i * 0.07, type: 'spring', stiffness: 200 }}
                >
                  <Star className="w-4 h-4 fill-[#A67C52] text-[#A67C52]" />
                </motion.span>
              ))}
            </div>
            <p className="text-[0.65rem] font-bold text-white/30 uppercase tracking-widest">Google Reviews</p>
          </div>

          <div className="text-center sm:border-r border-white/[0.08]">
            <div className="text-4xl sm:text-5xl font-black text-[#E6C9A8] mb-1">
              <AnimatedCounter target={250} suffix="+" />
            </div>
            <p className="text-[0.65rem] font-bold text-white/30 uppercase tracking-widest">Famiglie Felici</p>
          </div>

          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-white/70 text-sm leading-snug">
              Pronti a diventare il <span className="text-[#E6C9A8] font-semibold">prossimo caso di successo</span>?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#A67C52] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#E6C9A8] hover:text-[#1A1A1A] transition-colors duration-300"
            >
              Inizia ora
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
