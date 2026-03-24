import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'residential',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Richiesta Sopralluogo - ${formData.name}`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nTelefono: ${formData.phone}\nEmail: ${formData.email}\n\nDettagli Progetto:\n${formData.message}`
    );
    window.location.href = `mailto:mahmoudsassi2077@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-[#A67C52]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center text-white mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">Pronto per il grande salto?</h2>
          <p className="text-white/80 text-base sm:text-xl">
            Prenota il tuo sopralluogo gratuito. Solo 3 slot rimasti per questo mese.
          </p>
        </div>

        <div className="bg-white rounded-[2rem] sm:rounded-[3rem] shadow-2xl overflow-hidden grid lg:grid-cols-5">
          <div className="lg:col-span-2 bg-[#1A1A1A] px-7 py-10 sm:px-10 sm:py-12 lg:p-12 text-white">
            <h3 className="text-2xl font-bold mb-8">Contatti Diretti</h3>
            <div className="space-y-8">
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#E6C9A8]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Chiamaci</div>
                  <div className="text-lg sm:text-xl font-bold">+39 351 963 1564</div>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#E6C9A8]" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Email</div>
                  <div className="text-lg sm:text-xl font-bold break-all">mahmoudsassi2077@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#E6C9A8]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Sede</div>
                  <div className="text-lg sm:text-xl font-bold">Milano, Italia</div>
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-12 pt-8 border-t border-white/10">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5">Seguici sui Social</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://facebook.com/elitecartongesso"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#1877F2] hover:scale-110 transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 fill-gray-400 group-hover:fill-white transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/elitecartongesso"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:scale-110 transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 fill-gray-400 group-hover:fill-white transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </a>
                <a
                  href="https://tiktok.com/@elitecartongesso"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#010101] hover:scale-110 transition-all duration-300 group relative overflow-hidden"
                >
                  <svg className="w-5 h-5 fill-gray-400 group-hover:fill-white transition-colors relative z-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#69C9D0]/20 via-transparent to-[#EE1D52]/20 z-0" />
                </a>
              </div>
            </div>

            <div className="mt-12 sm:mt-16 lg:mt-20 p-6 sm:p-8 bg-[#E6C9A8]/10 rounded-3xl border border-white/5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm font-bold text-green-500 uppercase tracking-widest">Disponibili Ora</span>
              </div>
              <p className="text-sm text-gray-400">
                Siamo operativi in tutta la provincia di Milano, Monza e Brianza.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 px-6 py-10 sm:px-10 sm:py-12 lg:p-16">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Nome</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-6 py-4 sm:px-8 sm:py-5 bg-gray-50 border-0 rounded-2xl focus:ring-2 focus:ring-[#A67C52] transition-all text-base sm:text-lg"
                    placeholder="Mario Rossi"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Telefono</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-6 py-4 sm:px-8 sm:py-5 bg-gray-50 border-0 rounded-2xl focus:ring-2 focus:ring-[#A67C52] transition-all text-base sm:text-lg"
                    placeholder="+39 333..."
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-6 py-4 sm:px-8 sm:py-5 bg-gray-50 border-0 rounded-2xl focus:ring-2 focus:ring-[#A67C52] transition-all text-base sm:text-lg"
                  placeholder="mario@email.it"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Dettagli Progetto</label>
                <textarea 
                  rows={4}
                  className="w-full px-6 py-4 sm:px-8 sm:py-5 bg-gray-50 border-0 rounded-2xl focus:ring-2 focus:ring-[#A67C52] transition-all text-base sm:text-lg resize-none"
                  placeholder="Cosa vorresti realizzare?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#1A1A1A] text-white py-5 sm:py-6 rounded-2xl font-black text-lg sm:text-xl hover:bg-[#333] transition-all shadow-2xl shadow-black/20 flex items-center justify-center gap-3 sm:gap-4 group"
              >
                <Mail className="w-6 h-6" />
                Inviaci un'Email
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>

              <div className="relative flex items-center gap-4 my-2">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-xs font-bold uppercase tracking-widest text-gray-300">oppure</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              <a
                href="https://wa.me/393519631564?text=Ciao%21%20Vorrei%20un%20preventivo%20per%20un%20progetto%20in%20cartongesso.%20Grazie%21"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white py-5 rounded-2xl font-bold text-base sm:text-lg hover:bg-[#1EBE5A] transition-all shadow-xl shadow-green-500/15 flex items-center justify-center gap-3 group"
              >
                <svg viewBox="0 0 32 32" className="w-6 h-6 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.129 6.744 3.047 9.379L1.054 31.25l6.088-1.953A15.91 15.91 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.335 22.594c-.39 1.1-1.932 2.013-3.178 2.28-.852.18-1.964.324-5.71-1.228-4.796-1.987-7.882-6.86-8.121-7.18-.23-.32-1.932-2.573-1.932-4.907s1.223-3.478 1.657-3.955c.434-.477.949-.597 1.264-.597.316 0 .63.003.906.016.29.014.68-.11 1.064.813.39.937 1.327 3.24 1.443 3.475.117.234.195.508.039.813-.156.312-.234.504-.468.777-.234.273-.492.61-.703.82-.234.234-.477.488-.205.957.273.469 1.213 2 2.604 3.24 1.787 1.592 3.293 2.085 3.762 2.319.469.234.742.195 1.016-.117.273-.312 1.172-1.365 1.484-1.836.312-.468.625-.39 1.055-.234.434.156 2.734 1.29 3.203 1.525.469.234.781.351.898.546.117.195.117 1.133-.273 2.233Z"/>
                </svg>
                Scrivici su WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-center text-sm text-gray-400 font-medium px-2">
                Rispondiamo solitamente entro 2 ore lavorative.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
