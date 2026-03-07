import { useEffect, useRef, useState } from 'react';
import StatsCards from './StatsCards';

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

interface Cloud {
  id: number;
  y: number;
  scale: number;
  duration: number;
  delay: number;
}

export default function Hero() {
  const [particles] = useState<Particle[]>(() =>
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() > 0.5 ? 4 : 6,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 10,
    }))
  );

  const [clouds] = useState<Cloud[]>(() =>
    Array.from({ length: 4 }, (_, i) => ({
      id: i,
      y: 10 + i * 15,
      scale: 0.8 + Math.random() * 0.8,
      duration: 35 + i * 12,
      delay: i * -10,
    }))
  );

  const [typedText, setTypedText] = useState('');
  const fullText = 'Crafting Digital Experiences';
  const indexRef = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (indexRef.current < fullText.length) {
        setTypedText(fullText.slice(0, indexRef.current + 1));
        indexRef.current++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
      style={{
        background: 'linear-gradient(180deg, #050d1a 0%, #0a1628 40%, #0f1f3d 70%, #0a1628 100%)',
      }}
    >
      {/* Scanlines overlay */}
      <div className="absolute inset-0 scanlines pointer-events-none" />

      {/* Radial glow behind hero */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, rgba(74,222,128,0.08) 0%, rgba(74,222,128,0.03) 50%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Second glow - blue */}
      <div
        className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(96,165,250,0.05) 0%, transparent 70%)',
          filter: 'blur(30px)',
          animationDelay: '1.5s',
        }}
      />

      {/* Pixel clouds */}
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="absolute pointer-events-none"
          style={{
            top: `${cloud.y}%`,
            animation: `cloud ${cloud.duration}s linear ${cloud.delay}s infinite`,
            transform: `scale(${cloud.scale})`,
          }}
        >
          <PixelCloud />
        </div>
      ))}

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute particle pointer-events-none"
          style={{
            left: `${p.x}%`,
            bottom: '0',
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: Math.random() > 0.5 ? 'rgba(74,222,128,0.6)' : 'rgba(96,165,250,0.4)',
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            boxShadow: `0 0 ${p.size * 2}px currentColor`,
          }}
        />
      ))}

      {/* Floating pixel islands corners */}
      <PixelIsland className="absolute bottom-32 left-8 opacity-30 hidden lg:block" />
      <PixelIsland className="absolute bottom-20 right-12 opacity-20 hidden lg:block" style={{ transform: 'scaleX(-1) scale(0.7)' }} />

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Pre-title badge */}
        <div className="inline-flex items-center gap-2 mb-6">
          <div
            className="px-4 py-2 font-pixel text-xs"
            style={{
              background: 'rgba(74,222,128,0.1)',
              border: '2px solid rgba(74,222,128,0.4)',
              boxShadow: '2px 2px 0px rgba(0,0,0,0.5)',
            }}
          >
            <span className="text-pixel-green">✦ WELCOME TO MY PORTFOLIO ✦</span>
          </div>
        </div>

        {/* Main title */}
        <h1
          className="font-pixel text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 glow-text-white leading-tight"
          style={{ letterSpacing: '0.05em' }}
        >
          <span className="text-white">dhiya</span>
          <span className="text-pixel-green glow-text-green">Nesh</span>
        </h1>

        {/* Subtitle */}
        <div className="mb-4">
          <p
            className="font-pixelify text-xl md:text-2xl font-semibold"
            style={{ color: '#fb923c', textShadow: '2px 2px 0px rgba(0,0,0,0.8)' }}
          >
            Interactive Designer & Developer
          </p>
        </div>

        {/* Typewriter tagline */}
        <div className="mb-10 h-8">
          <span
            className="font-pixel text-xs text-pixel-blue"
            style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.8)' }}
          >
            &gt; {typedText}
            <span className="cursor-blink text-pixel-green">█</span>
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            className="pixel-btn-green"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            VIEW PROJECTS
          </button>
          <button
            className="pixel-btn-outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            BE IN TOUCH
          </button>
        </div>

        {/* Stats Cards */}
        <StatsCards />
      </div>

      {/* Bottom grass strip */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="grass-divider" />
        <div className="dirt-divider" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <div
          className="font-pixel text-xs text-pixel-green/60 text-center"
          style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.5)' }}
        >
          ▼ SCROLL
        </div>
      </div>
    </section>
  );
}

function PixelCloud() {
  return (
    <svg width="120" height="48" viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="32" y="8" width="56" height="8" fill="rgba(255,255,255,0.06)" />
      <rect x="16" y="16" width="88" height="8" fill="rgba(255,255,255,0.08)" />
      <rect x="8" y="24" width="104" height="8" fill="rgba(255,255,255,0.1)" />
      <rect x="16" y="32" width="88" height="8" fill="rgba(255,255,255,0.08)" />
    </svg>
  );
}

function PixelIsland({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`animate-float ${className}`} style={style}>
      <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
        {/* Grass top */}
        <rect x="16" y="0" width="8" height="8" fill="#4ade80" />
        <rect x="24" y="0" width="8" height="8" fill="#22c55e" />
        <rect x="32" y="0" width="8" height="8" fill="#4ade80" />
        <rect x="40" y="0" width="8" height="8" fill="#16a34a" />
        <rect x="48" y="0" width="8" height="8" fill="#4ade80" />
        <rect x="56" y="0" width="8" height="8" fill="#22c55e" />
        <rect x="64" y="0" width="8" height="8" fill="#4ade80" />
        <rect x="72" y="0" width="8" height="8" fill="#16a34a" />
        <rect x="80" y="0" width="8" height="8" fill="#4ade80" />
        {/* Dirt body */}
        <rect x="8" y="8" width="104" height="8" fill="#7a5230" />
        <rect x="0" y="16" width="120" height="8" fill="#5c3d1e" />
        <rect x="0" y="24" width="120" height="8" fill="#7a5230" />
        <rect x="8" y="32" width="104" height="8" fill="#5c3d1e" />
        <rect x="16" y="40" width="88" height="8" fill="#7a5230" />
        <rect x="24" y="48" width="72" height="8" fill="#5c3d1e" />
      </svg>
    </div>
  );
}
