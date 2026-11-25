import { ArrowDown } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function Navbar() {
  return (
    <header className="relative z-30 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7 md:px-12">
      {/* Logo à esquerda */}
      <a
        href="#"
        className="font-serif text-xl tracking-[0.18em] text-[#F2EFE9] md:text-2xl"
      >
        {portfolioData.brandName}
        <sup className="ml-1 font-sans text-[10px] tracking-normal text-[#8E8A82]">
          {portfolioData.version}
        </sup>
      </a>

      {/* Links Centrais */}
      <nav className="hidden items-center gap-8 md:flex">
        {portfolioData.navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[11px] font-medium tracking-[0.2em] text-[#A39E93] transition-colors hover:text-[#F2EFE9]"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Botão do Topo Direito (borda fina + navegação interna ↓) */}
      <a
        href="#sobre"
        className="group inline-flex items-center gap-2 rounded-sm border border-[#F2EFE9]/25 bg-[#080808]/60 px-4 py-2.5 text-[11px] font-medium tracking-[0.16em] text-[#F2EFE9] backdrop-blur-sm transition-all hover:border-[#F2EFE9] hover:bg-[#F2EFE9] hover:text-[#080808]"
      >
        CONHEÇA MAIS
        <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
      </a>
    </header>
  );
}