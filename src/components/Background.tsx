import heroImg from '../assets/hero.png';

export function Background({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-root">
      <div className="bg-hero" style={{ backgroundImage: `url(${heroImg})` }} />
      <div className="bg-noise-overlay" />
      {children}
    </div>
  );
}
