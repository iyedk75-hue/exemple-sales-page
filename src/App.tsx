/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-[#E6C9A8] selection:text-[#1A1A1A]">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Gallery />
      <Testimonials />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
