import { Hammer } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#E6C9A8]/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#1A1A1A] flex items-center justify-center rounded-lg">
            <Hammer className="text-[#E6C9A8] w-6 h-6" />
          </div>
          <span className="font-bold text-xl tracking-tight uppercase">Elite <span className="text-[#A67C52]">Cartongesso</span></span>
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
