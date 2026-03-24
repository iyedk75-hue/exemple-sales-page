import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="bg-[#F5F2ED] rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-20 relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-3 gap-8 sm:gap-12 items-center">
            <div className="lg:col-span-2">
              <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-[#A67C52] mb-6 sm:mb-8 opacity-20" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 leading-tight">
                "Non pensavo che il cartongesso potesse fare così tanta differenza. La mia casa ora sembra un'altra, più calda e infinitamente più bella."
              </h2>
              <div className="flex items-center gap-4">
                <img src="https://picsum.photos/seed/laura/60/60" className="w-14 h-14 rounded-full border-2 border-white" alt="Laura B." referrerPolicy="no-referrer" />
                <div>
                  <div className="font-bold text-lg">Laura Bernasconi</div>
                  <div className="text-sm text-gray-500">Proprietaria, Monza</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-xl border border-[#E6C9A8]/20">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-black text-[#A67C52] mb-2">4.9</div>
                <div className="flex justify-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 fill-[#A67C52] text-[#A67C52]" />)}
                </div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Recensioni Google</p>
                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-100">
                  <div className="text-2xl font-bold mb-1">10 Anni</div>
                  <p className="text-xs text-gray-500">Garanzia Certificata su ogni lavoro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
