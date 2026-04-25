/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PageLoader from './components/PageLoader';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1600);

    const blockMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener('contextmenu', blockMenu);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('contextmenu', blockMenu);
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <AnimatePresence>
        {isLoading && <PageLoader key="loader" />}
      </AnimatePresence>

      <motion.div
        className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-[#E6C9A8] selection:text-[#1A1A1A]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Navbar />
        <Hero />
        <ProblemSolution />
        <Benefits />
        <Gallery />
        <Testimonials />
        <ContactForm />
        <Footer />
        <WhatsAppButton />
      </motion.div>
    </>
    
  );
}
