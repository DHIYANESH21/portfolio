import { useState, useEffect } from 'react';

const navLinks = ['Home', 'Projects', 'Skills', 'About', 'Contact'];

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (link: string) => {
    setActive(link);
    setMenuOpen(false);
    const el = document.getElementById(link.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-900/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
      style={{
        borderBottom: scrolled ? '3px solid rgba(74,222,128,0.4)' : '3px solid transparent',
        boxShadow: scrolled ? '0 4px 0px rgba(0,0,0,0.5)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center" style={{
            background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 50%, #166534 100%)',
            border: '2px solid #000',
            boxShadow: '2px 2px 0px #000',
          }}>
            <span className="font-pixel text-black text-xs">D</span>
          </div>
          <span className="font-pixel text-pixel-green text-xs hidden sm:block" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.8)' }}>
            DS.Dev
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className={`font-pixel text-xs px-3 py-2 transition-all duration-100 cursor-pointer ${
                active === link
                  ? 'text-black bg-pixel-green'
                  : 'text-pixel-gray hover:text-pixel-green'
              }`}
              style={
                active === link
                  ? { border: '2px solid #166534', boxShadow: '2px 2px 0px #000' }
                  : { border: '2px solid transparent' }
              }
            >
              {link}
            </button>
          ))}
        </div>

        {/* Status indicator */}
        <div className="hidden md:flex items-center gap-2">
          <div className="w-2 h-2 bg-pixel-green animate-pulse" style={{ boxShadow: '0 0 6px #4ade80' }} />
          <span className="font-pixel text-pixel-green text-xs">ONLINE</span>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden font-pixel text-pixel-green text-xs px-3 py-2"
          style={{ border: '2px solid #4ade80', boxShadow: '2px 2px 0px #000' }}
        >
          {menuOpen ? 'X' : '≡'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-900/98 border-t-2 border-pixel-green/40 px-4 py-3">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className={`block w-full text-left font-pixel text-xs py-3 px-2 transition-all ${
                active === link ? 'text-pixel-green' : 'text-pixel-gray'
              }`}
              style={{ borderBottom: '1px solid rgba(74,222,128,0.1)' }}
            >
              {active === link ? '▶ ' : '  '}{link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
