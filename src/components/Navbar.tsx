import { Hammer } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#E6C9A8]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#1A1A1A] flex items-center justify-center rounded-lg shrink-0">
            <Hammer className="text-[#E6C9A8] w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <span className="font-bold text-base sm:text-xl tracking-tight uppercase leading-none">Elite <span className="text-[#A67C52]">Cartongesso</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#interest" className="text-sm font-medium hover:text-[#A67C52] transition-colors">Perché Noi</a>
          <a href="#desire" className="text-sm font-medium hover:text-[#A67C52] transition-colors">Galleria</a>
          <a href="#contact" className="bg-[#1A1A1A] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#333] transition-all">Preventivo Rapido</a>
        </div>
      </div>
    </nav>
  );
}
