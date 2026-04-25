import React, { useState, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform, type Variants } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import img1 from '../img/1.jpeg';
import img2 from '../img/2.jpeg';
import img3 from '../img/3.jpeg';
import img4 from '../img/4.jpeg';
import img5 from '../img/5.jpeg';
import img6 from '../img/6.jpeg';
import im7 from '../img/7.jpeg';
import im8 from '../img/8.jpeg';
import im9 from '../img/9.jpeg';
import { GalleryCardSkeleton } from './Skeleton';

const galleryItems = [
  { title: "CURVE ARCHITETTONICHE: L'arte della cartongessatura strutturale", img: img1 },
  { title: "RITMO E DIVISIONE: La prospettiva di un divisorio a binari",      img: img2 },
  { title: "GRIGLIA SOSPENSA: La rete per l'integrazione degli impianti",     img: img3 },
  { title: "PRECISIONE STRUTTURALE: I pannelli autoportanti in cartongesso",  img: img4 },
  { title: "Maestria e Trasformazione: Un Portfolio Milanese",                img: img5 },
  { title: "Dettagli di Lusso",                                               img: img6 },
  { title: "Sagesse Antique",                                                 img: im7 },
  { title: "Bagno Moderno",                                                   img: im8 },
  { title: "Soffitto a Cielo Stellato",                                       img: im9 },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden:  { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function TiltCard({ item }: { item: (typeof galleryItems)[0] }) {
  const [loaded, setLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [rawX, rawY]);

  const handleMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return (
    <motion.div
      variants={cardVariants}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 1000, transformStyle: 'preserve-3d' }}
      className="group relative h-[340px] sm:h-[400px] rounded-3xl overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.02, zIndex: 10 }}
      transition={{ duration: 0.25 }}
    >
      {!loaded && (
        <div className="absolute inset-0 z-10">
          <GalleryCardSkeleton />
        </div>
      )}

      <motion.img
        src={item.img}
        alt={item.title}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transformStyle: 'preserve-3d' }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
        <h3 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
        <p className="text-sm text-[#E6C9A8] mb-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
          Vedi Dettagli →
        </p>
        <a
          href={`https://wa.me/393519631564?text=${encodeURIComponent(`Ciao! Sono interessato al progetto "${item.title}". Vorrei ricevere un preventivo gratuito. Grazie!`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#A67C52] text-white px-4 sm:px-5 py-2.5 rounded-full text-sm font-bold
            opacity-100 translate-y-0 sm:opacity-0 sm:translate-y-4 sm:group-hover:opacity-100 sm:group-hover:translate-y-0
            transition-all duration-300 ease-out
            hover:bg-[#E6C9A8] hover:text-[#1A1A1A] w-fit shadow-lg shadow-black/20"
          style={{ position: 'relative', zIndex: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          Richiedi Preventivo
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section id="desire" className="py-16 sm:py-20 lg:py-24 bg-[#1A1A1A] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 italic">
            Senti già il <span className="text-[#E6C9A8]">cambiamento</span>?
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Scorri i nostri ultimi lavori. Ogni progetto è una promessa mantenuta di qualità e bellezza.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.05 }}
        >
          {galleryItems.map((item, i) => (
            <TiltCard key={i} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
