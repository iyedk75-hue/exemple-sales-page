import { AlertCircle, Clock, Sparkles, ShieldCheck, Check } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <section id="interest" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 bg-[#FDFCFB] rounded-3xl border border-gray-100 shadow-sm">
                <AlertCircle className="w-10 h-10 text-red-400 mb-4" />
                <h3 className="font-bold text-lg mb-2">Stanco del rumore?</h3>
                <p className="text-sm text-gray-500">Le nostre pareti acustiche abbattono fino al 70% dei rumori dei vicini.</p>
              </div>
              <div className="p-8 bg-[#FDFCFB] rounded-3xl border border-gray-100 shadow-sm mt-8">
                <Clock className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="font-bold text-lg mb-2">Lavori infiniti?</h3>
                <p className="text-sm text-gray-500">Installazione rapida e pulita. Trasformiamo una stanza in soli 2 giorni.</p>
              </div>
              <div className="p-8 bg-[#FDFCFB] rounded-3xl border border-gray-100 shadow-sm">
                <Sparkles className="w-10 h-10 text-yellow-500 mb-4" />
                <h3 className="font-bold text-lg mb-2">Design datato?</h3>
                <p className="text-sm text-gray-500">Controsoffitti moderni con LED integrati per un'atmosfera da hotel 5 stelle.</p>
              </div>
              <div className="p-8 bg-[#FDFCFB] rounded-3xl border border-gray-100 shadow-sm mt-8">
                <ShieldCheck className="w-10 h-10 text-green-500 mb-4" />
                <h3 className="font-bold text-lg mb-2">Crepe fastidiose?</h3>
                <p className="text-sm text-gray-500">Utilizziamo solo materiali anti-fessurazione garantiti per 10 anni.</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Perché accontentarsi di una casa "normale"?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Molti proprietari di casa convivono con spazi mal organizzati, rumori molesti o soffitti banali. Noi non costruiamo solo pareti; risolviamo problemi di spazio e comfort con soluzioni di design intelligenti.
            </p>
            <ul className="space-y-4">
              {["Isolamento Termico & Acustico", "Illuminazione LED Integrata", "Arredi su Misura in Cartongesso", "Finiture Lisce come Seta"].map((text, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-[#1A1A1A]">
                  <div className="w-6 h-6 rounded-full bg-[#E6C9A8] flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#A67C52]" />
                  </div>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
