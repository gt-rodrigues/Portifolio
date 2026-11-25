import { ArrowDown } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function Navbar() {
  return (
    <header className="relative z-30 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">
        {/* Marca */}
        <a
          href="#"
          className="font-serif text-xl tracking-[0.18em] text-white md:text-2xl"
        >
          {portfolioData.brandName}
          <sup className="ml-1 font-sans text-[10px] tracking-normal text-[#B8C0CC]">
            {portfolioData.version}
          </sup>
        </a>

        {/* Links com marcadores técnicos HUD */}
        <nav className="hidden items-center gap-7 lg:flex">
          {portfolioData.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex items-center gap-1.5 font-mono text-[11px] tracking-[0.16em] text-[#B8C0CC] transition-colors hover:text-white"
            >
              <span className="text-[10px] text-[#4A5568] transition-colors group-hover:text-white">
                [{link.code}]
              </span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Botão HUD do topo direito */}
        <a
          href="#sobre"
          className="hud-glass-btn group inline-flex items-center gap-2 rounded-xs px-4 py-2.5 font-mono text-[10px] font-medium tracking-[0.18em] text-white"
        >
          <span>CONHEÇA MAIS</span>
          <ArrowDown className="h-3.5 w-3.5 text-[#B8C0CC] transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-white" />
        </a>
      </div>

      {/* Linha divisória ultrafina com gradiente que desaparece nas pontas */}
      <div
        aria-hidden="true"
        className="mx-auto h-[1px] max-w-7xl"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(184,192,204,0.28) 20%, rgba(255,255,255,0.45) 50%, rgba(184,192,204,0.28) 80%, transparent 100%)",
        }}
      />
    </header>
  );
}