export function CircuitBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Padrão de circuitos em cinza claro bem discreto */}
      <svg
        className="h-full w-full opacity-[0.055]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="circuit-pattern"
            width="240"
            height="240"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 20 60 L 60 100 L 140 100 L 170 70 L 240 70"
              fill="none"
              stroke="#E5DFD5"
              strokeWidth="1"
            />
            <path
              d="M 0 160 L 80 160 L 110 190 L 110 240"
              fill="none"
              stroke="#E5DFD5"
              strokeWidth="1"
            />
            <path
              d="M 180 240 L 180 150 L 210 120 L 240 120"
              fill="none"
              stroke="#E5DFD5"
              strokeWidth="1"
            />
            <path
              d="M 90 0 L 90 40 L 120 70"
              fill="none"
              stroke="#E5DFD5"
              strokeWidth="1"
            />

            <circle cx="60" cy="100" r="2.5" fill="none" stroke="#E5DFD5" strokeWidth="1" />
            <circle cx="140" cy="100" r="2" fill="#E5DFD5" />
            <circle cx="80" cy="160" r="2.5" fill="none" stroke="#E5DFD5" strokeWidth="1" />
            <circle cx="180" cy="150" r="2" fill="#E5DFD5" />
            <circle cx="120" cy="70" r="2.5" fill="none" stroke="#E5DFD5" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
      </svg>

      {/* Vinheta nas bordas para guiar o olhar ao centro */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 58% 48%, rgba(8,8,8,0.05) 0%, rgba(8,8,8,0.72) 68%, rgba(5,5,5,0.96) 100%)",
        }}
      />
    </div>
  );
}