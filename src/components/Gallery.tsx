import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const galleryItems = [
  { title: "Living Minimalista", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600" },
  { title: "Soffitto a Isola LED", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600" },
  { title: "Libreria Integrata", img: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=600" },
  { title: "Camera da Letto Zen", img: "https://images.unsplash.com/photo-1616486341351-7973a6960c12?auto=format&fit=crop&q=80&w=600" },
  { title: "Ufficio Acustico", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" },
  { title: "Dettagli di Lusso", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=600" }
];

export default function Gallery() {
  return (
    <section id="desire" className="py-24 bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 italic">Senti già il <span className="text-[#E6C9A8]">cambiamento</span>?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Scorri i nostri ultimi lavori. Ogni progetto è una promessa mantenuta di qualità e bellezza.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-[#E6C9A8] mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Vedi Dettagli →</p>
                <a
                  href={`https://wa.me/393519631564?text=${encodeURIComponent(`Ciao! Sono interessato al progetto "${item.title}". Vorrei ricevere un preventivo gratuito. Grazie!`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#A67C52] text-white px-5 py-2.5 rounded-full text-sm font-bold
                    opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
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
