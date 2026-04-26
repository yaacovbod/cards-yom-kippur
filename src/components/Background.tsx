export function Background({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-root">
      <svg className="bg-noise" xmlns="http://www.w3.org/2000/svg" width="0" height="0">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feBlend in="SourceGraphic" mode="multiply" />
        </filter>
      </svg>
      <div className="bg-noise-overlay" />
      {children}
    </div>
  );
}
