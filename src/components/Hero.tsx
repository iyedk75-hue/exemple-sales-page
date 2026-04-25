import { useRef, useState, useMemo, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, type PanInfo } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../img/1.jpeg';
import img2 from '../img/2.jpeg';
import img3 from '../img/3.jpeg';
import img4 from '../img/4.jpeg';
import img5 from '../img/5.jpeg';
import img6 from '../img/6.jpeg';
import img7 from '../img/7.jpeg';
import img8 from '../img/8.jpeg';
import img9 from '../img/9.jpeg';
import img22 from '../img/22.jpeg';
import img23 from '../img/23.jpeg';
import img24 from '../img/24.jpeg';
import img25 from '../img/25.jpeg';

/* ── Word-by-word mask reveal ─────────────────────────── */
const wordReveal: Variants = {
  hidden: { y: '115%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const headingContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
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

type WordToken = { text: string; className?: string; gold?: boolean };

const h1Lines: WordToken[][] = [
  [{ text: 'Basta' }, { text: 'pareti' }],
  [{ text: 'anonime.' }, { text: 'Crea' }],
  [{ text: 'un', className: 'italic font-light', gold: true }],
  [
    { text: 'Capolavoro', className: 'font-semibold' },
    { text: 'in' },
    { text: 'casa' },
    { text: 'tua.' },
  ],
];

const heroImages = [
  { img: img1,  title: 'Curve Architettoniche',    category: 'Struttura'     },
  { img: img2,  title: 'Ritmo e Divisione',        category: 'Divisori'      },
  { img: img3,  title: 'Griglia Sospesa',          category: 'Soffitti'      },
  { img: img4,  title: 'Precisione Strutturale',   category: 'Pareti'        },
  { img: img5,  title: 'Maestria e Trasformazione',category: 'Milano'        },
  { img: img6,  title: 'Dettagli di Lusso',        category: 'Finiture'      },
  { img: img7,  title: 'Sagesse Antique',          category: 'Stile'         },
  { img: img8,  title: 'Bagno Moderno',            category: 'Design'        },
  { img: img9,  title: 'Soffitto a Cielo Stellato',category: 'Illuminazione' },
  { img: img22, title: 'Eleganza Contemporanea',   category: 'Progetto'      },
  { img: img23, title: 'Ambienti su Misura',       category: 'Arredo'        },
  { img: img24, title: "Architettura d'Interni",   category: 'Interni'       },
  { img: img25, title: 'Spazi Trasformati',        category: 'Lavori'        },
];

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Shortest circular offset of index i from current */
function normalizeOffset(i: number, current: number, total: number): number {
  let offset = i - current;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
}

/* ── Gallery-style coverflow carousel for Hero ──────────── */
function HeroCarousel() {
  const items = useMemo(() => shuffleArray(heroImages), []);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);
  const containerRef = useRef<HTMLDivElement>(null);
  const n = items.length;

  /* Measure container */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setContainerWidth(el.offsetWidth);
    const ro = new ResizeObserver(update);
    ro.observe(el);
    update();
    return () => ro.disconnect();
  }, []);

  const next = useCallback(() => setCurrent(i => (i + 1) % n), [n]);
  const prev = useCallback(() => setCurrent(i => (i - 1 + n) % n), [n]);

  /* Auto-play */
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  /* Keyboard */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev]);

  /* Swipe */
  const handlePanEnd = useCallback((_e: PointerEvent, info: PanInfo) => {
    if (info.offset.x < -50) next();
    else if (info.offset.x > 50) prev();
  }, [next, prev]);

  /* Card geometry */
  const isMobile = containerWidth < 640;
  const cardWidthRatio = isMobile ? 0.82 : 0.55;
  const cardW = containerWidth * cardWidthRatio;
  const gap   = isMobile ? 10 : 20;
  const getX  = (offset: number) =>
    containerWidth / 2 + offset * (cardW + gap) - cardW / 2;

  return (
    <div
      className="relative w-full select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      {/* ── Coverflow track ── */}
      <div className="relative h-[360px] sm:h-[460px] lg:h-[500px]">

        {/* Cards */}
        <motion.div
          ref={containerRef}
          className="relative w-full h-full overflow-hidden"
          onPanEnd={handlePanEnd}
        >
          {items.map((item, i) => {
            const offset    = normalizeOffset(i, current, n);
            const isCenter  = offset === 0;
            const isVisible = Math.abs(offset) <= 1;

            return (
              <motion.div
                key={i}
                className="absolute top-0 rounded-3xl overflow-hidden"
                animate={{
                  x:       getX(offset),
                  scale:   isCenter ? 1 : 0.88,
                  opacity: isVisible ? (isCenter ? 1 : 0.6) : 0,
                }}
                transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  width:         cardW,
                  height:        '100%',
                  zIndex:        isCenter ? 10 : isVisible ? 5 : 0,
                  pointerEvents: isVisible ? 'auto' : 'none',
                }}
              >
                {isCenter ? (
                  <div className="w-full h-full group relative">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent flex flex-col justify-end p-5 sm:p-7 lg:p-9">
                      <p className="text-xs font-bold tracking-[0.25em] text-[#A67C52] mb-2 uppercase">
                        {item.category}
                      </p>
                      <h3
                        style={{ fontFamily: 'var(--font-display)' }}
                        className="text-white text-xl sm:text-2xl lg:text-3xl font-bold italic leading-tight mb-4"
                      >
                        {item.title}
                      </h3>
                      <a
                        href={`https://wa.me/393519631564?text=${encodeURIComponent(`Ciao! Sono interessato al progetto "${item.title}". Vorrei ricevere un preventivo gratuito. Grazie!`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#A67C52] text-white px-4 sm:px-5 py-2.5 rounded-full text-sm font-bold
                          opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
                          transition-all duration-300 ease-out
                          hover:bg-[#E6C9A8] hover:text-[#1A1A1A] w-fit shadow-lg shadow-black/30"
                        style={{ position: 'relative', zIndex: 20 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Richiedi Preventivo
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full relative cursor-pointer" onClick={offset < 0 ? prev : next}>
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          aria-label="Precedente"
          className="absolute top-1/2 -translate-y-1/2 z-20
            w-10 h-10 sm:w-12 sm:h-12 rounded-full
            bg-white/90 backdrop-blur-sm shadow-xl
            flex items-center justify-center
            hover:bg-white hover:scale-110 active:scale-95
            transition-all duration-200"
          style={{ left: Math.max(12, (containerWidth - cardW) / 4 - 24) }}
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" />
        </button>
        <button
          onClick={next}
          aria-label="Successivo"
          className="absolute top-1/2 -translate-y-1/2 z-20
            w-10 h-10 sm:w-12 sm:h-12 rounded-full
            bg-white/90 backdrop-blur-sm shadow-xl
            flex items-center justify-center
            hover:bg-white hover:scale-110 active:scale-95
            transition-all duration-200"
          style={{ right: Math.max(12, (containerWidth - cardW) / 4 - 24) }}
        >
          <ChevronRight className="w-5 h-5 text-gray-800" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center items-center gap-2 mt-5">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Vai alla foto ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'w-6 h-2.5 bg-[#A67C52]'
                : 'w-2.5 h-2.5 bg-[#1A1A1A]/20 hover:bg-[#1A1A1A]/40'
            }`}
          />
        ))}
      </div>

      {/* Auto-play progress bar */}
      {!paused && (
        <div className="mt-3 mx-auto w-16 h-[2px] bg-[#1A1A1A]/10 rounded-full overflow-hidden">
          <motion.div
            key={current}
            className="h-full bg-[#A67C52] rounded-full origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 4, ease: 'linear' }}
          />
        </div>
      )}
    </div>
  );
}


export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [curtainGone, setCurtainGone] = useState(false);
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
      {/* ── Cinematic curtain intro ── */}
      {!curtainGone && (
        <>
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-[#1A1A1A] z-[60] pointer-events-none"
            initial={{ y: 0 }}
            animate={{ y: '-102%' }}
            transition={{ duration: 1.1, delay: 1.7, ease: [0.76, 0, 0.24, 1] }}
            onAnimationComplete={() => setCurtainGone(true)}
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-[#1A1A1A] z-[60] pointer-events-none"
            initial={{ y: 0 }}
            animate={{ y: '102%' }}
            transition={{ duration: 1.1, delay: 1.7, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute inset-0 z-[65] flex items-center justify-center pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 2.1 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35, delay: 1.72, ease: [0.16, 1, 0.3, 1] }}
              className="text-center px-6"
            >
              <div
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-white text-3xl sm:text-4xl font-light tracking-[0.15em] uppercase"
              >
                Elite <span className="text-[#E6C9A8] font-semibold">Cartongesso</span>
              </div>
              <div className="mt-2 h-[1px] w-full bg-gradient-to-r from-transparent via-[#A67C52] to-transparent" />
            </motion.div>
          </motion.div>
        </>
      )}

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
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 lg:mb-24">
          {/* Eyebrow — letter-spacing expand */}
          <motion.p
            initial={{ opacity: 0, y: 18, letterSpacing: '0.04em' }}
            animate={{ opacity: 1, y: 0, letterSpacing: '0.32em' }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[0.6rem] uppercase text-[#A67C52]/60 font-medium mb-8 sm:mb-10"
          >
            Eccellenza Artigianale &nbsp;·&nbsp; Milano
          </motion.p>

          {/* H1 — word-by-word slide-up mask (explicit delays) */}
          <h1
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-[3.2rem] sm:text-[5rem] lg:text-[7rem] xl:text-[8.5rem] font-light leading-[1.05] tracking-[-0.01em] text-[#1A1A1A] mb-8 sm:mb-10"
          >
            {(() => {
              let wordIdx = 0;
              let charIdx = 0;
              return h1Lines.map((line, li) => (
                <div key={li} className="flex justify-center flex-wrap" style={{ gap: '0 0.28em' }}>
                  {line.map((token) => {
                    const wordDelay = 0.05 + wordIdx++ * 0.08;
                    return (
                      /* overflow:hidden clips the word during entrance */
                      <span
                        key={token.text}
                        style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', lineHeight: '1.2' }}
                      >
                        {/* word slides up from mask on entrance */}
                        <motion.span
                          initial={{ y: '110%', opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.85, delay: wordDelay, ease: [0.16, 1, 0.3, 1] }}
                          className={token.className}
                          style={{ display: 'inline-flex', ...(token.gold ? { color: '#A67C52' } : {}) }}
                        >
                          {/* each character waves after entrance */}
                          {token.text.split('').map((char) => {
                            const ci = charIdx++;
                            return (
                              <motion.span
                                key={ci}
                                animate={{ y: [0, -8, 0] }}
                                transition={{
                                  repeat: Infinity,
                                  duration: 2.6,
                                  delay: wordDelay + 0.9 + ci * 0.055,
                                  ease: 'easeInOut',
                                }}
                                style={{ display: 'inline-block' }}
                              >
                                {char}
                              </motion.span>
                            );
                          })}
                        </motion.span>
                      </span>
                    );
                  })}
                </div>
              ));
            })()}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base text-[#1A1A1A]/45 max-w-lg mx-auto leading-relaxed mb-10 sm:mb-12 font-light"
          >
            Realizziamo controsoffitti, pareti e arredi in cartongesso con finiture
            di lusso e precisione millimetrica.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
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
        </div>

        {/* ── Vespa-style carousel ── */}
        <motion.div
          style={{ y: imgY }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto"
        >
          <HeroCarousel />
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
