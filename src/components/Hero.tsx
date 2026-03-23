import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6C9A8]/30 text-[#A67C52] text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3 h-3" />
            L'Eccellenza del Cartongesso a Milano
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.05] mb-8 tracking-tighter">
            Basta pareti anonime. <br/>
            Crea un <span className="text-[#A67C52]">Capolavoro</span> in casa tua.
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
            Smetti di sognare una casa da rivista. Realizziamo controsoffitti, pareti e arredi in cartongesso con finiture di lusso e precisione millimetrica.
          </p>
          <div className="flex flex-col sm:row gap-4">
            <a href="#contact" className="flex items-center justify-center gap-2 bg-[#1A1A1A] text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform group shadow-xl shadow-black/10">
              Voglio un Preventivo Gratuito
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-3 px-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <img key={i} src={`https://picsum.photos/seed/face${i}/100/100`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="Client" referrerPolicy="no-referrer" />
                ))}
              </div>
              <p className="text-sm font-medium text-gray-500">
                <span className="text-[#1A1A1A] font-bold">+250</span> progetti completati con successo
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000" 
              alt="Luxury Drywall Design" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-8 -right-8 bg-[#A67C52] text-white p-8 rounded-3xl shadow-2xl rotate-3">
            <div className="text-4xl font-black mb-1">15%</div>
            <div className="text-xs font-bold uppercase tracking-widest opacity-80">Sconto Lancio</div>
            <div className="text-[10px] mt-2 opacity-60">Scade tra 7 giorni</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
