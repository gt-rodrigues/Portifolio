import { ArrowDown, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { CircuitBackground } from "./CircuitBackground";
import { Navbar } from "./Navbar";
import { CrystalLaptopHud } from "./CrystalLaptopHud";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-[#000000] bg-noise text-white">
      {/* Fundo de metal líquido escuro e circuitos sutis */}
      <CircuitBackground />

      {/* Cabeçalho HUD */}
      <Navbar />

      {/* Área Principal */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-center px-6 py-10 md:px-12">
        {/* Palavra de fundo em contorno ultra discreto */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 select-none overflow-hidden text-center"
        >
          <span className="text-outline-subtle block font-display text-[20vw] uppercase leading-[0.85] tracking-[0.02em] lg:text-[230px]">
            {portfolioData.bgWord}
          </span>
        </div>

        {/* Grid: Ficha Técnica à Esquerda + Notebook 3D e HUD à Direita */}
        <div className="relative z-20 grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Coluna Esquerda: Título Chrome + Ficha Técnica + Botões HUD */}
          <div className="lg:col-span-6">
            <div className="mb-3 font-mono text-[10px] tracking-[0.24em] text-[#B8C0CC]">
              SPECIFICATION SHEET // HUD TELEMETRY
            </div>

            <h1 className="chrome-entity-title font-serif text-3xl font-semibold uppercase tracking-[0.06em] sm:text-4xl lg:text-[42px]">
              {portfolioData.entityTitle}
            </h1>

            {/* Ficha Técnica de Laboratório */}
            <div className="mt-6 space-y-4 border-l border-white/15 pl-4 font-mono text-[11px] leading-relaxed tracking-[0.12em]">
              {portfolioData.specGroups.map((group, groupIndex) => (
                <div key={groupIndex} className="space-y-1">
                  {group.map((item) => (
                    <div
                      key={item.key}
                      className="flex flex-wrap gap-x-2 text-[#B8C0CC]"
                    >
                      <span className="text-[#64748B]">{item.key}:</span>
                      <span className="font-medium text-white">{item.value}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Botões de Ação (HUD Glassmorphism) */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* Link externo -> ↗ */}
              <a
                href={portfolioData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hud-glass-btn group inline-flex items-center gap-2.5 rounded-xs px-5 py-3 font-mono text-[11px] font-medium tracking-[0.18em] text-white"
              >
                <span>VER GITHUB</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#B8C0CC] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </a>

              {/* Rolagem interna -> ↓ */}
              <a
                href="#sobre"
                className="hud-glass-btn group inline-flex items-center gap-2 rounded-xs px-5 py-3 font-mono text-[11px] font-medium tracking-[0.18em] text-[#E2E8F0]"
              >
                <span>SOBRE MIM</span>
                <ArrowDown className="h-3.5 w-3.5 text-[#B8C0CC] transition-transform duration-200 group-hover:translate-y-0.5 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Coluna Direita: Notebook 3D em Cristal Líquido + Callout + Boxes HUD */}
          <div className="lg:col-span-6">
            <CrystalLaptopHud />
          </div>
        </div>

        {/* Indicador Lateral Direito (01 — 04) */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-2.5 font-mono text-[10px] tracking-widest xl:flex"
        >
          <span className="font-semibold text-white">01</span>
          <span className="h-9 w-[1px] bg-white/20" />
          <span className="text-[#4A5568]">04</span>
        </div>
      </div>

      {/* Rodapé do Hero */}
      <div className="relative z-20 mx-auto flex w-full max-w-7xl justify-end px-6 pb-6 md:px-12">
        <a
          href="#sobre"
          className="text-right font-mono text-[9px] leading-tight tracking-[0.22em] text-[#64748B] transition-colors hover:text-white"
        >
          SCROLL
          <br />
          TO EXPLORE
        </a>
      </div>
    </section>
  );
}