interface Stat {
  icon: string;
  label: string;
  value: string;
  color: string;
  borderColor: string;
}

const stats: Stat[] = [
  { icon: '💻', label: 'Development', value: '12+', color: 'text-pixel-green', borderColor: 'rgba(74,222,128,0.5)' },
  { icon: '🎨', label: 'Design', value: '5+', color: 'text-pixel-blue', borderColor: 'rgba(96,165,250,0.5)' },
  { icon: '🚀', label: 'Projects', value: '10+', color: 'text-pixel-orange', borderColor: 'rgba(251,146,60,0.5)' },
  { icon: '🛠️', label: 'Tools', value: '15+', color: 'text-purple-400', borderColor: 'rgba(192,132,252,0.5)' },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="relative group cursor-default transition-all duration-200 hover:-translate-y-1"
          style={{
            background: 'rgba(10,22,40,0.8)',
            border: `3px solid ${stat.borderColor}`,
            boxShadow: '4px 4px 0px #000',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.boxShadow = `6px 6px 0px #000, 0 0 15px ${stat.borderColor}`;
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.boxShadow = '4px 4px 0px #000';
          }}
        >
          <div className="p-4 text-center">
            {/* Icon */}
            <div className="text-2xl mb-2 group-hover:animate-bounce" style={{ imageRendering: 'auto' }}>
              {stat.icon}
            </div>
            {/* Value */}
            <div
              className={`font-pixel text-xl mb-1 ${stat.color}`}
              style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.8)' }}
            >
              {stat.value}
            </div>
            {/* Label */}
            <div className="font-pixelify text-xs text-pixel-gray/70 uppercase tracking-wider">
              {stat.label}
            </div>
            {/* Years text for dev/design */}
            {(stat.label === 'Development' || stat.label === 'Design') && (
              <div className="font-pixel text-xs mt-1" style={{ color: stat.borderColor, fontSize: '8px' }}>
                works
              </div>
            )}
          </div>

          {/* Corner decorations */}
          <div
            className="absolute top-0 left-0 w-2 h-2"
            style={{ background: stat.borderColor }}
          />
          <div
            className="absolute top-0 right-0 w-2 h-2"
            style={{ background: stat.borderColor }}
          />
        </div>
      ))}
    </div>
  );
}
