// Scène décorative de l'Atelier : un plan de travail esquissé « blueprint »,
// composant serveur (aucun JS client), animé en CSS pur. Respecte prefers-reduced-motion.
const css = `
.atelier-scene .draw {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: atelier-draw 1.8s ease forwards;
}
.atelier-scene .steam {
  transform-box: fill-box;
  transform-origin: center;
  animation: atelier-steam 3.2s ease-in-out infinite;
}
.atelier-scene .steam-2 { animation-delay: 0.8s; }
@keyframes atelier-draw {
  to { stroke-dashoffset: 0; }
}
@keyframes atelier-steam {
  0% { opacity: 0; transform: translateY(4px) scaleY(0.9); }
  35% { opacity: 0.7; }
  100% { opacity: 0; transform: translateY(-10px) scaleY(1.15); }
}
@media (prefers-reduced-motion: reduce) {
  .atelier-scene .draw { animation: none; stroke-dashoffset: 0; }
  .atelier-scene .steam { animation: none; opacity: 0.5; transform: none; }
}
`

export function AtelierScene() {
  return (
    <div
      className="relative min-h-[18rem] overflow-hidden rounded-3xl border border-mocha/25 bg-espresso shadow-xl shadow-black/20"
      aria-hidden="true"
    >
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <svg
        className="atelier-scene absolute inset-0 h-full w-full"
        viewBox="0 0 400 300"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* plan de travail */}
        <line
          className="draw"
          x1="40"
          y1="232"
          x2="360"
          y2="232"
          pathLength={1}
          stroke="var(--color-mocha)"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ animationDelay: '0.1s' }}
        />

        {/* écran + pied + lignes de code */}
        <g stroke="var(--color-honey)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect className="draw" x="70" y="96" width="150" height="104" rx="8" pathLength={1} style={{ animationDelay: '0.2s' }} />
          <line className="draw" x1="145" y1="200" x2="145" y2="222" pathLength={1} style={{ animationDelay: '0.7s' }} />
          <line className="draw" x1="120" y1="222" x2="170" y2="222" pathLength={1} style={{ animationDelay: '0.8s' }} />
        </g>
        <g stroke="var(--color-toast)" strokeWidth="2" strokeLinecap="round" opacity="0.85">
          <line className="draw" x1="88" y1="120" x2="132" y2="120" pathLength={1} style={{ animationDelay: '0.9s' }} />
          <line className="draw" x1="88" y1="138" x2="176" y2="138" pathLength={1} style={{ animationDelay: '1s' }} />
          <line className="draw" x1="88" y1="156" x2="150" y2="156" pathLength={1} style={{ animationDelay: '1.1s' }} />
          <line className="draw" x1="88" y1="174" x2="120" y2="174" pathLength={1} style={{ animationDelay: '1.2s' }} />
        </g>

        {/* tasse de café + anse + vapeur */}
        <g stroke="var(--color-honey)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path className="draw" d="M262 176 h56 v20 a28 28 0 0 1 -56 0 z" pathLength={1} style={{ animationDelay: '0.5s' }} />
          <path className="draw" d="M318 180 a12 12 0 0 1 0 24" pathLength={1} style={{ animationDelay: '0.9s' }} />
          <line className="draw" x1="250" y1="232" x2="330" y2="232" pathLength={1} style={{ animationDelay: '1s' }} />
        </g>
        <g stroke="var(--color-toast)" strokeWidth="2" strokeLinecap="round" fill="none">
          <path className="steam" d="M280 168 q6 -10 0 -20 q-6 -10 0 -20" />
          <path className="steam steam-2" d="M300 168 q6 -10 0 -20 q-6 -10 0 -20" />
        </g>

        {/* croissant */}
        <path
          className="draw"
          d="M214 214 a20 20 0 0 1 34 0"
          pathLength={1}
          stroke="var(--color-honey)"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ animationDelay: '1.3s' }}
        />

        {/* petit globe */}
        <g stroke="var(--color-sage)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.9">
          <circle className="draw" cx="330" cy="120" r="24" pathLength={1} style={{ animationDelay: '1.1s' }} />
          <path className="draw" d="M330 96 v48" pathLength={1} style={{ animationDelay: '1.4s' }} />
          <path className="draw" d="M308 120 h44" pathLength={1} style={{ animationDelay: '1.5s' }} />
          <path className="draw" d="M314 104 a24 18 0 0 0 32 0" pathLength={1} style={{ animationDelay: '1.6s' }} />
          <path className="draw" d="M314 136 a24 18 0 0 1 32 0" pathLength={1} style={{ animationDelay: '1.7s' }} />
        </g>
      </svg>
    </div>
  )
}
