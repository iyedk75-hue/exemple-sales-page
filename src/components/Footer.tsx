import { motion } from 'motion/react';
import { type Variants } from 'motion/react';
import { Hammer, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
};

const contacts = [
  { Icon: MapPin, text: 'Via Brera 12, 20121 Milano MI', href: 'https://maps.google.com/?q=Via+Brera+12+Milano' },
  { Icon: Phone, text: '+39 02 1234 5678', href: 'tel:+390212345678' },
  { Icon: Mail, text: 'info@elitecartongesso.it', href: 'mailto:info@elitecartongesso.it' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-14 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — brand + contact */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#A67C52] flex items-center justify-center rounded-xl">
                <Hammer className="text-white w-5 h-5" />
              </div>
              <div>
                <div className="font-black text-lg tracking-tight uppercase leading-none">Elite Cartongesso</div>
                <div className="text-[#A67C52] text-xs font-bold uppercase tracking-widest mt-0.5">Milano · Dal 2010</div>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Trasformiamo spazi ordinari in ambienti straordinari. Cartongesso di lusso,
              finiture impeccabili, risultati che parlano da soli.
            </p>

            <div className="space-y-4">
              {contacts.map(({ Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#E6C9A8] transition-colors duration-200 group"
                >
                  <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#A67C52]/40 transition-colors duration-200">
                    <Icon className="w-4 h-4 text-[#A67C52]" />
                  </span>
                  {text}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Map */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            className="relative pb-4"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
              {/* Header bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                <MapPin className="w-4 h-4 text-[#A67C52]" />
                <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">Dove siamo</span>
                <a
                  href="https://maps.google.com/?q=Via+Brera+12+Milano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto flex items-center gap-1 text-xs text-[#A67C52] hover:text-[#E6C9A8] transition-colors font-bold"
                >
                  Apri in Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map iframe */}
              <div className="relative h-64 sm:h-80">
                <iframe
                  title="Elite Cartongesso — Via Brera 12, Milano"
                  src="https://maps.google.com/maps?q=Via+Brera+12,+Milano,+Italia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full opacity-95"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1A1A1A]/60 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Address pill */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              className="mt-4 bg-[#A67C52] text-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-xl"
            >
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-black text-sm leading-none">Via Brera 12, Milano</div>
                <div className="text-white/70 text-xs mt-0.5 font-medium">Lun–Ven 8:00–18:00 · Sab 9:00–13:00</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500 font-medium text-center">
          <span>© 2026 Elite Cartongesso S.R.L. · P.IVA 12345678901</span>
          <span>Tutti i diritti riservati · Milano, Italia</span>
        </div>
      </div>
    </footer>
  );
}
