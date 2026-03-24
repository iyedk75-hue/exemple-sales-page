import { Hammer } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-10 sm:py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 text-center md:text-left">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#1A1A1A] flex items-center justify-center rounded-lg">
            <Hammer className="text-[#E6C9A8] w-5 h-5" />
          </div>
          <span className="font-bold tracking-tight uppercase">Elite Cartongesso</span>
        </div>
        <div className="text-sm text-gray-400 font-medium leading-relaxed">
          © 2026 Elite Cartongesso S.R.L. • P.IVA 12345678901 • Milano
        </div>
        <div className="flex gap-6 sm:gap-8">
          <a href="#" className="text-gray-400 hover:text-[#A67C52] transition-colors font-bold text-xs uppercase tracking-widest">Privacy</a>
          <a href="#" className="text-gray-400 hover:text-[#A67C52] transition-colors font-bold text-xs uppercase tracking-widest">Cookie</a>
        </div>
      </div>
    </footer>
  );
}
