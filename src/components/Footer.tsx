export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    {
      label: 'GITHUB',
      icon: '⌥',
      href: 'https://github.com/DHIYANESH21/',
      color: '#f0f6ff',
    },
    {
      label: 'LINKEDIN',
      icon: '◈',
      href: 'https://www.linkedin.com/in/dhiyanesh-sakthivel-09116a2a2/',
      color: '#60a5fa',
    },
    {
      label: 'EMAIL',
      icon: '✉',
      href: 'dhiyaneshsakthivel@gmail.com',
      color: '#4ade80',
    },
  ];

  return (
    <footer
      className="relative"
      style={{ background: '#050d1a' }}
    >
      {/* Grass + dirt top border */}
      <div className="grass-divider" />
      <div className="dirt-divider" />

      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div
            className="w-12 h-12 flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #4ade80, #22c55e)',
              border: '3px solid #000',
              boxShadow: '3px 3px 0px #000',
            }}
          >
            <span className="font-pixel text-black text-sm">DS</span>
          </div>
        </div>

        <p
          className="font-pixel text-xs text-pixel-green mb-2"
          style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.8)' }}
        >
          Dhiyanesh
        </p>
        <p className="font-pixelify text-sm text-pixel-gray/50 mb-8">
          Interactive Designer & Developer
        </p>

        {/* Social links */}
        <div className="flex justify-center gap-4 mb-8">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-pixel text-xs transition-all duration-100"
              style={{
                padding: '8px 16px',
                background: 'rgba(0,0,0,0.4)',
                border: `2px solid rgba(${hexToRgb(s.color)}, 0.3)`,
                color: s.color,
                boxShadow: '2px 2px 0px #000',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = s.color;
                e.currentTarget.style.boxShadow = `3px 3px 0px #000, 0 0 8px rgba(${hexToRgb(s.color)}, 0.3)`;
                e.currentTarget.style.transform = 'translate(-1px, -1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `rgba(${hexToRgb(s.color)}, 0.3)`;
                e.currentTarget.style.boxShadow = '2px 2px 0px #000';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <span>{s.icon}</span>
              <span>{s.label}</span>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div
          className="mb-6"
          style={{
            height: '2px',
            background: 'repeating-linear-gradient(90deg, rgba(74,222,128,0.2) 0px, rgba(74,222,128,0.2) 8px, transparent 8px, transparent 16px)',
          }}
        />

        {/* Copyright */}
        <div className="font-pixel text-xs text-pixel-gray/30" style={{ fontSize: '9px' }}>
          © {year} DIVA DHIYANESH — BUILT WITH REACT + TYPESCRIPT
        </div>
        <div className="font-pixel text-xs text-pixel-green/20 mt-2" style={{ fontSize: '8px' }}>
          MADE WITH ❤️ & ☕
        </div>
      </div>
    </footer>
  );
}

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '255,255,255';
  return `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`;
}
