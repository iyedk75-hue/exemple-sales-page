import { motion } from 'motion/react';
import { type Variants } from 'motion/react';
import { Hammer, Phone, Mail } from 'lucide-react';

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const contacts = [
  { Icon: Phone, text: '+393519631564', href: 'tel:+393519631564' },
  { Icon: Mail, text: 'mahmoudsassi2077@gmail.com', href: 'mailto:mahmoudsassi2077@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-7 sm:py-9">
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
        >
          <div className="space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-[#A67C52] flex items-center justify-center rounded-lg shrink-0">
                <Hammer className="text-white w-3.5 h-3.5" />
              </div>
              <div>
                <div className="font-black text-base sm:text-lg tracking-tight uppercase leading-none">Elite Cartongesso</div>
                <div className="text-[#A67C52] text-[11px] font-bold uppercase tracking-[0.22em] mt-0.5">Milano · Dal 2010</div>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Cartongesso premium, finiture nettes et interventions sur mesure.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 md:justify-end">
            {contacts.map(({ Icon, text, href }) => (
              <a
                key={text}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs sm:text-sm text-gray-300 hover:text-[#E6C9A8] hover:border-[#A67C52]/40 transition-colors duration-200"
              >
                <Icon className="w-3.5 h-3.5 text-[#A67C52] shrink-0" />
                <span className="leading-none">{text}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 sm:py-5">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-2.5 text-[11px] sm:text-xs text-gray-500 font-medium text-center">
          <span>© 2026 Elite Cartongesso S.R.L.</span>
          <span>Tutti i diritti riservati · Milano, Italia</span>
        </div>
      </div>
    </footer>
  );
}
