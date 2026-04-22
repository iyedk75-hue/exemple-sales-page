import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hammer, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y > 64) {
          setHidden(y > lastScrollY.current);
        } else {
          setHidden(false);
        }
        lastScrollY.current = y;
        ticking.current = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { href: '#interest', label: 'Perché Noi' },
    { href: '#desire', label: 'Galleria' },
  ];

  return (
    <>
      <motion.div
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-3 transition-transform duration-300 ease-in-out ${
          hidden ? '-translate-y-full' : 'translate-y-0'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 25, delay: 0.1 }}
      >
        <nav className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md rounded-full shadow-lg shadow-black/8 border border-[#E6C9A8]/30">
          <div className="px-5 sm:px-8 h-14 sm:h-16 flex items-center justify-between gap-4">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-8 h-8 bg-[#1A1A1A] flex items-center justify-center rounded-lg shrink-0">
                <Hammer className="text-[#E6C9A8] w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="font-bold text-sm sm:text-base tracking-tight uppercase leading-none">
                Elite <span className="text-[#A67C52]">Cartongesso</span>
              </span>
            </motion.a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:text-[#A67C52] transition-colors relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#A67C52] rounded-full group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="bg-[#1A1A1A] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#333] transition-all"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.36 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Preventivo Rapido
              </motion.a>
            </div>

            {/* Mobile hamburger */}
            <motion.button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-[#1A1A1A]/5 text-[#1A1A1A]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
              whileTap={{ scale: 0.92 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile menu — expands inside pill */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className="md:hidden overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="px-6 pb-5 pt-3 flex flex-col gap-1 border-t border-[#E6C9A8]/20">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className="px-3 py-3 rounded-2xl font-medium hover:bg-[#E6C9A8]/20 hover:text-[#A67C52] transition-colors"
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                  <motion.a
                    href="#contact"
                    onClick={closeMenu}
                    className="mt-2 bg-[#1A1A1A] text-white px-4 py-3 rounded-full font-semibold text-center hover:bg-[#333] transition-colors"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 }}
                  >
                    Preventivo Rapido
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.div>

      {/* Backdrop overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/20 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
}
