import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform, type Variants } from 'motion/react';
import { Quote, Star } from 'lucide-react';

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

export default function Testimonials() {
  return (
    <motion.section
      className="py-16 sm:py-20 lg:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.15 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="bg-[#F5F2ED] rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-20 relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-3 gap-8 sm:gap-12 items-center">
            <div className="lg:col-span-2">
              <motion.div variants={revealVariants}>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.2 }}
                  viewport={{}}
                  transition={{ duration: 0.5, type: 'spring', stiffness: 150 }}
                >
                  <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-[#A67C52] mb-6 sm:mb-8" />
                </motion.div>
              </motion.div>

              <motion.h2
                variants={revealVariants}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 leading-tight"
              >
                "Non pensavo che il cartongesso potesse fare così tanta differenza. La mia casa ora
                sembra un'altra, più calda e infinitamente più bella."
              </motion.h2>

              <motion.div variants={revealVariants} className="flex items-center gap-4">
                <img
                  src="https://picsum.photos/seed/laura/60/60"
                  className="w-14 h-14 rounded-full border-2 border-white"
                  alt="Laura B."
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold text-lg">Laura Bernasconi</div>
                  <div className="text-sm text-gray-500">Proprietaria, Monza</div>
                </div>
              </motion.div>
            </div>

            {/* Stats card */}
            <motion.div
              variants={revealVariants}
              className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-xl border border-[#E6C9A8]/20"
              whileHover={{ y: -4 }}
            >
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-black text-[#A67C52] mb-2">
                  <AnimatedCounter target={4.9} decimals={1} />
                </div>

                {/* Stars stagger in */}
                <div className="flex justify-center gap-1 mb-4">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{}}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.08, type: 'spring', stiffness: 200 }}
                    >
                      <Star className="w-5 h-5 fill-[#A67C52] text-[#A67C52]" />
                    </motion.span>
                  ))}
                </div>

                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                  Recensioni Google
                </p>

                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-100">
                  <div className="text-2xl font-bold mb-1">
                    <AnimatedCounter target={10} suffix=" Anni" />
                  </div>
                  <p className="text-xs text-gray-500">Garanzia Certificata su ogni lavoro</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
