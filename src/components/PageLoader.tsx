import { motion } from 'motion/react';
import { Hammer } from 'lucide-react';

export default function PageLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[999] bg-[#FDFCFB] flex flex-col items-center justify-center gap-8"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {/* Logo mark */}
      <motion.div
        className="flex flex-col items-center gap-5"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.div
          className="w-16 h-16 bg-[#1A1A1A] flex items-center justify-center rounded-2xl shadow-2xl shadow-black/20"
          animate={{ rotate: [0, -8, 8, -4, 0] }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
        >
          <Hammer className="text-[#E6C9A8] w-8 h-8" />
        </motion.div>

        <div className="text-center">
          <motion.div
            className="font-black text-2xl tracking-tight uppercase leading-none text-[#1A1A1A]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Elite <span className="text-[#A67C52]">Cartongesso</span>
          </motion.div>
          <motion.div
            className="text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Premium Drywall Solutions
          </motion.div>
        </div>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        className="w-48 sm:w-64 h-[3px] bg-[#E6C9A8]/40 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="h-full bg-[#A67C52] loader-bar rounded-full" />
      </motion.div>
    </motion.div>
  );
}
