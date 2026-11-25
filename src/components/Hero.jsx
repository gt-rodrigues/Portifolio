import { ArrowDown, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { CircuitBackground } from "./CircuitBackground";
import { Navbar } from "./Navbar";
import { LaptopCodeArtwork } from "./LaptopCodeArtwork";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-[#080808] bg-noise">
      {/* Fundo com circuitos e vinheta */}
      <CircuitBackground />

      {/* Menu Superior */}
      <Navbar />

      {/* Área Principal */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-center px-6 pb-16 pt-6 md:px-12">
        {/* CAMADA 1 (Fundo): Palavra Gigante DEVELOPER em contorno sutil */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 select-none overflow-hidden text-center"
        >
          <span className="text-outline-subtle block font-display text-[21vw] uppercase leading-[0.85] tracking-[0.02em] lg:text-[235px]">
            {portfolioData.bgWord}
          </span>
        </div>

        {/* CAMADA 2 (Frente): Grid com Textos à Esquerda e Computador à Direita */}
        <div className="relative z-20 grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Coluna Esquerda: Textos e Botões */}
          <div className="lg:col-span-6 lg:pt-12">
            {/* Tag em linha única sem órfãos */}
            <p className="mb-4 text-[9px] font-medium tracking-[0.15em] text-[#A39E93] sm:whitespace-nowrap sm:text-[10px] sm:tracking-[0.17em]">
              {portfolioData.roleTag}
            </p>

            <h1 className="font-serif text-3xl font-normal uppercase leading-[1.15] tracking-wide text-[#F2EFE9] sm:text-4xl lg:text-[42px]">
              {portfolioData.headline}
            </h1>

            <p className="mt-5 max-w-md text-xs leading-relaxed text-[#9E998F] sm:text-sm">
              {portfolioData.subheadline}
            </p>

            {/* Grupo de Botões */}
            <div className="mt-9 flex flex-wrap items-center gap-6">
              {/* Botão Principal Sólido: Link externo -> ↗ */}
              <a
                href={portfolioData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-sm bg-[#E5DFD5] px-6 py-3.5 text-[11px] font-semibold tracking-[0.16em] text-[#080808] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F2EFE9] hover:shadow-[0_8px_28px_rgba(229,223,213,0.22)]"
              >
                VER GITHUB
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Botão Secundário Interno: Rolagem para baixo -> ↓ */}
              <a
                href="#sobre"
                className="group inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] text-[#E5DFD5] transition-colors hover:text-[#FFFFFF]"
              >
                SOBRE MIM
                <ArrowDown className="h-3.5 w-3.5 text-[#9E998F] transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-[#FFFFFF]" />
              </a>
            </div>
          </div>

          {/* Coluna Direita: Computador Aberto com Hello World */}
          <div className="lg:col-span-6">
            <LaptopCodeArtwork />
          </div>
        </div>

        {/* Indicador Lateral Direito (01 — 04) próximo à margem */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-2.5 text-[10px] tracking-widest xl:flex"
        >
          <span className="font-medium text-[#FFFFFF]">01</span>
          <span className="h-9 w-[1px] bg-white/15" />
          <span className="text-[#55524C]">04</span>
        </div>
      </div>

      {/* Rodapé do Hero: Scroll to Explore */}
      <div className="relative z-20 mx-auto flex w-full max-w-7xl justify-end px-6 pb-6 md:px-12">
        <a
          href="#sobre"
          className="text-right text-[9px] leading-tight tracking-[0.22em] text-[#7A766E] transition-colors hover:text-[#F2EFE9]"
        >
          SCROLL
          <br />
          TO EXPLORE
        </a>
      </div>
    </section>
  );
}