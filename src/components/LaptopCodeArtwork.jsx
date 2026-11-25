export function LaptopCodeArtwork() {
  return (
    <div className="relative mx-auto w-full max-w-[520px] select-none">
      {/* Glow difuso atrás do notebook para destacar do fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(226, 232, 240, 0.08) 0%, rgba(229, 223, 213, 0.03) 45%, transparent 75%)",
        }}
      />

      {/* Tampa / Tela do Notebook com Rim Light superior */}
      <div className="relative mx-auto w-[88%] rounded-t-2xl border border-[#2A2A2A] border-t-[rgba(255,255,255,0.18)] bg-gradient-to-b from-[#1A1A1A] to-[#0C0C0C] p-3 shadow-[0_28px_75px_rgba(0,0,0,0.95)]">
        {/* Câmera */}
        <div className="mx-auto mb-2 h-1.5 w-1.5 rounded-full bg-[#3A3A3A]" />

        {/* Display Interno (Editor de Código) */}
        <div className="overflow-hidden rounded-lg border border-white/10 bg-[#070707] p-4 font-mono text-xs leading-relaxed sm:p-5 sm:text-sm">
          {/* Barra superior do editor */}
          <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#4A4A4A]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#323232]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#222222]" />
            </div>
            <span className="text-[10px] tracking-widest text-[#66635D]">
              hello-world.jsx
            </span>
          </div>

          {/* Linhas de código com hierarquia monocromática */}
          <div className="space-y-1.5 text-[#9E998F]">
            <div className="flex gap-4">
              <span className="text-[#45423D]">01</span>
              <span>
                <span className="font-medium text-[#F2EFE9]">const</span>{" "}
                <span className="font-semibold text-[#FFFFFF]">Developer</span> = () =&gt; &#123;
              </span>
            </div>

            <div className="flex gap-4">
              <span className="text-[#45423D]">02</span>
              <span className="pl-4">
                <span className="font-medium text-[#F2EFE9]">const</span> stack = [
                <span className="text-[#E5DFD5]">&apos;FullStack&apos;</span>,{" "}
                <span className="text-[#E5DFD5]">&apos;UI/UX&apos;</span>,{" "}
                <span className="text-[#E5DFD5]">&apos;AI&apos;</span>];
              </span>
            </div>

            <div className="flex gap-4">
              <span className="text-[#45423D]">03</span>
              <span className="pl-4">
                <span className="font-medium text-[#F2EFE9]">return</span> (
              </span>
            </div>

            <div className="flex gap-4">
              <span className="text-[#45423D]">04</span>
              <span className="pl-8 text-[#C8C3B8]">
                &lt;<span className="text-[#FFFFFF]">h1</span>&gt;
                <span className="mx-1 rounded-[2px] bg-[#E5DFD5] px-1.5 py-0.5 font-semibold text-[#080808]">
                  Hello, World!
                </span>
                &lt;/<span className="text-[#FFFFFF]">h1</span>&gt;
              </span>
            </div>

            <div className="flex gap-4">
              <span className="text-[#45423D]">05</span>
              <span className="pl-4">);</span>
            </div>

            <div className="flex gap-4">
              <span className="text-[#45423D]">06</span>
              <span>&#125;;</span>
            </div>

            <div className="flex gap-4 pt-1">
              <span className="text-[#45423D]">07</span>
              <span className="italic text-[#66635D]">
                // Ready to build{" "}
                <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-pulse bg-[#E5DFD5] align-middle not-italic" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Base / Teclado do Notebook */}
      <div className="relative mx-auto h-4 w-full rounded-b-xl border-x border-b border-[#383838] bg-gradient-to-b from-[#2A2A2A] via-[#181818] to-[#0B0B0B] shadow-[0_22px_55px_rgba(0,0,0,1)]">
        <div className="mx-auto h-1.5 w-20 rounded-b-md bg-[#111111]" />
      </div>
    </div>
  );
}