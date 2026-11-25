export function CrystalLaptopHud() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] select-none">
      {/* Glow branco-azulado difuso atrás do notebook em cristal */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 55% 42%, rgba(255,255,255,0.11) 0%, rgba(148,163,184,0.06) 45%, transparent 72%)",
        }}
      />

      {/* BLOCO 1: NOTEBOOK 3D EM CRISTAL LÍQUIDO & CROMO */}
      <div
        className="relative mx-auto w-[88%]"
        style={{ perspective: "1100px" }}
      >
        <div
          className="transition-transform duration-500 hover:scale-[1.015]"
          style={{
            transform: "rotateY(-8deg) rotateX(4deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Tela Holográfica / Vidro Translúcido */}
          <div className="chromatic-edge relative rounded-t-2xl border border-white/30 bg-white/[0.03] p-3 backdrop-blur-md">
            {/* Reflexo especular diagonal de cristal */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-t-2xl opacity-50"
              style={{
                background:
                  "linear-gradient(125deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.02) 32%, transparent 60%, rgba(184,192,204,0.14) 100%)",
              }}
            />

            {/* Câmera / Sensor de cristal */}
            <div className="relative z-10 mx-auto mb-2 h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_8px_rgba(255,255,255,0.9)]" />

            {/* Display Translúcido com o código hello-world.jsx flutuando */}
            <div className="relative z-10 overflow-hidden rounded-lg border border-white/15 bg-[#030305]/65 p-4 font-mono text-xs leading-relaxed backdrop-blur-sm sm:p-5 sm:text-sm">
              <div className="mb-3.5 flex items-center justify-between border-b border-white/15 pb-2">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/80" />
                  <span className="h-2 w-2 rounded-full bg-[#B8C0CC]/60" />
                  <span className="h-2 w-2 rounded-full bg-[#4A5568]" />
                </div>
                <span className="text-[10px] tracking-[0.2em] text-[#B8C0CC]">
                  hello-world.jsx // CRYSTAL_CORE
                </span>
              </div>

              <div className="space-y-1.5 text-[#E2E8F0]">
                <div className="flex gap-3.5">
                  <span className="text-[#64748B]">01</span>
                  <span>
                    <span className="font-semibold text-white">const</span>{" "}
                    <span className="font-semibold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.45)]">
                      Developer
                    </span>{" "}
                    = () =&gt; &#123;
                  </span>
                </div>

                <div className="flex gap-3.5">
                  <span className="text-[#64748B]">02</span>
                  <span className="pl-3">
                    <span className="font-semibold text-white">const</span> stack = [
                    <span className="text-[#F8FAFC]">&apos;FullStack&apos;</span>,{" "}
                    <span className="text-[#F8FAFC]">&apos;UI/UX&apos;</span>,{" "}
                    <span className="text-[#F8FAFC]">&apos;AI&apos;</span>];
                  </span>
                </div>

                <div className="flex gap-3.5">
                  <span className="text-[#64748B]">03</span>
                  <span className="pl-3">
                    <span className="font-semibold text-white">return</span> (
                  </span>
                </div>

                <div className="flex gap-3.5">
                  <span className="text-[#64748B]">04</span>
                  <span className="pl-6 text-white">
                    &lt;<span className="text-[#CBD5E1]">h1</span>&gt;
                    <span className="mx-1 rounded-xs border border-white/40 bg-white/15 px-1.5 py-0.5 font-semibold text-white shadow-[0_0_12px_rgba(255,255,255,0.25)]">
                      Hello, World!
                    </span>
                    &lt;/<span className="text-[#CBD5E1]">h1</span>&gt;
                  </span>
                </div>

                <div className="flex gap-3.5">
                  <span className="text-[#64748B]">05</span>
                  <span className="pl-3">);</span>
                </div>

                <div className="flex gap-3.5">
                  <span className="text-[#64748B]">06</span>
                  <span>&#125;;</span>
                </div>

                <div className="flex gap-3.5 pt-1">
                  <span className="text-[#64748B]">07</span>
                  <span className="italic text-[#64748B]">
                    // Ready to build{" "}
                    <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-pulse bg-white align-middle not-italic shadow-[0_0_8px_#fff]" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Dobradiça cromada & Base em Cristal Líquido */}
          <div className="relative h-1.5 w-full bg-gradient-to-r from-[#4A5568] via-white to-[#4A5568] opacity-80" />
          <div className="chromatic-edge relative mx-auto h-4 w-[104%] -translate-x-[2%] rounded-b-xl border border-white/25 bg-gradient-to-b from-white/15 via-[#94A3B8]/10 to-black/80 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.95)]">
            <div className="mx-auto h-1.5 w-24 rounded-b-md border-x border-b border-white/20 bg-black/60" />
          </div>
        </div>
      </div>

      {/* BLOCO 2: PONTO DE ANCORAGEM / CALLOUT ATÉ AS CAIXAS HUD */}
      <div className="relative mx-auto w-[92%]">
        <svg
          className="h-10 w-full overflow-visible"
          viewBox="0 0 460 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Nó de ancoragem no núcleo inferior */}
          <circle cx="230" cy="4" r="3" fill="#FFFFFF" />
          <circle cx="230" cy="4" r="6.5" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
          {/* Linha fina saindo para a caixa esquerda (Wireframe View) */}
          <path
            d="M 230 7 L 230 22 L 115 22 L 115 40"
            stroke="rgba(226,232,240,0.45)"
            strokeWidth="1"
          />
          {/* Ramificação para a caixa direita (Perspective View) */}
          <path
            d="M 230 22 L 355 22 L 355 40"
            stroke="rgba(184,192,204,0.25)"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
        </svg>

        {/* BLOCO 3: DUAS CAIXAS DE INSPEÇÃO HUD */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-12">
          {/* Caixa 1: Wireframe View + Status/Stack */}
          <div className="relative border border-white/20 bg-white/[0.02] p-3 backdrop-blur-md sm:col-span-7">
            {/* Cantos estilo mira HUD */}
            <span className="pointer-events-none absolute -left-[1px] -top-[1px] h-2.5 w-2.5 border-l-2 border-t-2 border-white" />
            <span className="pointer-events-none absolute -right-[1px] -top-[1px] h-2.5 w-2.5 border-r-2 border-t-2 border-white" />
            <span className="pointer-events-none absolute -bottom-[1px] -left-[1px] h-2.5 w-2.5 border-b-2 border-l-2 border-white" />
            <span className="pointer-events-none absolute -bottom-[1px] -right-[1px] h-2.5 w-2.5 border-b-2 border-r-2 border-white" />

            <div className="flex items-center gap-3.5">
              {/* Planta 2D em Wireframe do Notebook */}
              <svg
                className="h-12 w-16 shrink-0 text-[#B8C0CC]"
                viewBox="0 0 80 56"
                fill="none"
              >
                <rect x="14" y="6" width="52" height="34" rx="2" stroke="currentColor" strokeWidth="1" />
                <rect x="18" y="10" width="44" height="26" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 2" />
                <line x1="22" y1="18" x2="46" y2="18" stroke="#FFFFFF" strokeWidth="0.8" />
                <line x1="22" y1="24" x2="54" y2="24" stroke="currentColor" strokeWidth="0.7" />
                <path d="M 6 40 L 74 40 L 70 46 L 10 46 Z" stroke="currentColor" strokeWidth="1" />
              </svg>

              <div className="space-y-1 font-mono text-[9px] tracking-[0.14em]">
                <div className="text-[8px] text-[#64748B]">WIREFRAME VIEW // 2D</div>
                <div className="text-white">
                  SYSTEM STATUS: <span className="text-[#E2E8F0]">READY TO BUILD</span>
                </div>
                <div className="text-[#B8C0CC]">
                  STACK: <span className="text-white">FULLSTACK / UI-UX / AI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Caixa 2: Perspective View */}
          <div className="relative flex flex-col justify-between border border-white/15 bg-white/[0.02] p-3 backdrop-blur-md sm:col-span-5">
            <span className="pointer-events-none absolute -right-[1px] -top-[1px] h-2 w-2 border-r border-t border-white/80" />
            <span className="pointer-events-none absolute -bottom-[1px] -left-[1px] h-2 w-2 border-b border-l border-white/80" />

            <div className="flex items-center justify-between font-mono text-[8px] tracking-[0.16em] text-[#B8C0CC]">
              <span>PERSPECTIVE VIEW</span>
              <span className="text-white/60">3D</span>
            </div>

            {/* Detalhe wireframe de teclas/núcleo em perspectiva */}
            <div className="mt-2 flex items-center justify-between gap-2">
              <div className="grid grid-cols-4 gap-1">
                {Array.from({ length: 8 }).map((_, idx) => (
                  <span
                    key={idx}
                    className="h-2.5 w-3.5 border border-white/25 bg-white/[0.04]"
                  />
                ))}
              </div>
              <span className="font-mono text-[9px] tracking-wider text-white">
                CORE 99%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}