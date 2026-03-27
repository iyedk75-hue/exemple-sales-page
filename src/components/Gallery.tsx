import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import img1 from '../img/1.jpeg';
import img2 from '../img/2.jpeg';
import img3 from '../img/3.jpeg';
import img4 from '../img/4.jpeg';

const galleryItems = [
  { title: "Living Minimalista", img: img1 },
  { title: "Soffitto a Isola LED", img: img2 },
  { title: "Libreria Integrata", img: img3 },
  { title: "Camera da Letto Zen", img: img4 },
  { title: "Ufficio Acustico", img: img2 },
  { title: "Dettagli di Lusso", img: img3 }
];

export default function Gallery() {
  return (
    <section id="desire" className="py-16 sm:py-20 lg:py-24 bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 italic">Senti già il <span className="text-[#E6C9A8]">cambiamento</span>?</h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Scorri i nostri ultimi lavori. Ogni progetto è una promessa mantenuta di qualità e bellezza.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {galleryItems.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="group relative h-[340px] sm:h-[400px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-[#E6C9A8] mb-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">Vedi Dettagli →</p>
                <a
                  href={`https://wa.me/393519631564?text=${encodeURIComponent(`Ciao! Sono interessato al progetto "${item.title}". Vorrei ricevere un preventivo gratuito. Grazie!`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#A67C52] text-white px-4 sm:px-5 py-2.5 rounded-full text-sm font-bold
                    opacity-100 translate-y-0 sm:opacity-0 sm:translate-y-4 sm:group-hover:opacity-100 sm:group-hover:translate-y-0
                    transition-all duration-300 ease-out
                    hover:bg-[#E6C9A8] hover:text-[#1A1A1A] w-fit shadow-lg shadow-black/20"
                >
                  Richiedi Preventivo
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
