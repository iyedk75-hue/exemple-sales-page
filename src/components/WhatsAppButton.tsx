import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';

export default function WhatsAppButton() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            aria-label="Torna in alto"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-transparent border-2 border-[#1A1A1A] text-[#1A1A1A] flex items-center justify-center shadow-lg hover:bg-[#A67C52] hover:border-[#A67C52] hover:text-white transition-colors cursor-pointer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-2 sm:gap-3"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <AnimatePresence>
          {showTooltip && (
            <motion.span
              className="hidden sm:inline-flex bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-full shadow-md whitespace-nowrap"
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              Bisogno d'aiuto ?
            </motion.span>
          )}
        </AnimatePresence>
                                                                                    
        <motion.a
          href="https://wa.me/393519631564?text=Ciao%21%20Vorrei%20un%20preventivo%20per%20un%20progetto%20in%20cartongesso."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contattaci su WhatsApp"
          className="relative w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-shadow flex items-center justify-center cursor-pointer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Pulse rings */}
          <span className="pulse-ring" aria-hidden="true" />
          <span className="pulse-ring-delay" aria-hidden="true" />

          <svg viewBox="0 0 32 32" className="w-6 h-6 sm:w-7 sm:h-7 fill-white shrink-0 relative z-10" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.129 6.744 3.047 9.379L1.054 31.25l6.088-1.953A15.91 15.91 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.335 22.594c-.39 1.1-1.932 2.013-3.178 2.28-.852.18-1.964.324-5.71-1.228-4.796-1.987-7.882-6.86-8.121-7.18-.23-.32-1.932-2.573-1.932-4.907s1.223-3.478 1.657-3.955c.434-.477.949-.597 1.264-.597.316 0 .63.003.906.016.29.014.68-.11 1.064.813.39.937 1.327 3.24 1.443 3.475.117.234.195.508.039.813-.156.312-.234.504-.468.777-.234.273-.492.61-.703.82-.234.234-.477.488-.205.957.273.469 1.213 2 2.604 3.24 1.787 1.592 3.293 2.085 3.762 2.319.469.234.742.195 1.016-.117.273-.312 1.172-1.365 1.484-1.836.312-.468.625-.39 1.055-.234.434.156 2.734 1.29 3.203 1.525.469.234.781.351.898.546.117.195.117 1.133-.273 2.233Z"/>
          </svg>
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse z-20" />
        </motion.a>
      </div>
    </div>
  );
}
