import { useState } from 'react';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface Category {
  label: string;
  icon: string;
  color: string;
  skills: Skill[];
}

const categories: Category[] = [
  {
    label: 'Frontend',
    icon: '🖥️',
    color: '#4ade80',
    skills: [
      { name: 'HTML', level: 90, icon: '🌐' },
      { name: 'CSS', level: 85, icon: '🎨' },
      { name: 'JavaScript', level: 80, icon: 'JS' },
      { name: 'TypeScript', level: 65, icon: 'TS' },
      { name: 'React', level: 80, icon: '⚛️' },
      { name: 'Tailwind', level: 75, icon: '🌊' },
    ],
  },
  {
    label: 'Backend',
    icon: '⚙️',
    color: '#60a5fa',
    skills: [
      { name: 'Node.js', level: 90, icon: '🟩' },
      { name: 'Python', level: 70, icon: '🐍' },
      { name: 'MongoDB', level: 80, icon: '🍃' },
      { name: 'REST APIs', level: 90, icon: '🔗' },
      { name: 'Firebase', level: 70, icon: '🔥' },
      { name: 'SQL', level: 90, icon: '🗄️' },
    ],
  },
  {
    label: 'Tools',
    icon: '🛠️',
    color: '#fb923c',
    skills: [
      { name: 'Git/GitHub', level: 90, icon: '🐙' },
      { name: 'VS Code', level: 95, icon: '💻' },
      { name: 'Postman', level: 80, icon: '📮' },
      { name: 'Google Colab', level: 75, icon: '📊' },
      { name: 'Command Line', level: 85, icon: '⌨️' },
      { name: 'Antigravity', level: 60, icon: '🚀' },
    ],
  },
  {
    label: 'Interests',
    icon: '🚀',
    color: '#c084fc',
    skills: [
      { name: 'TensorFlow', level: 60, icon: '🤖' },
      { name: 'Socket Programming', level: 70, icon: '🔌' },
      { name: 'Networking', level: 65, icon: '🌐' },
      { name: 'Operating Systems', level: 70, icon: '🖥️' },
      { name: 'Spring Boot', level: 55, icon: '🌱' },
      { name: 'System Design', level: 60, icon: '📐' },
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const cat = categories[activeCategory];

  return (
    <section
      id="skills"
      className="relative py-24 px-4"
      style={{ background: 'linear-gradient(180deg, #050d1a 0%, #0a1628 100%)' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span
              className="font-pixel text-xs px-3 py-2"
              style={{
                background: 'rgba(96,165,250,0.1)',
                border: '2px solid rgba(96,165,250,0.3)',
                color: '#60a5fa',
              }}
            >
              ▣ INVENTORY
            </span>
          </div>
          <h2 className="section-title text-2xl md:text-3xl">Skills & Abilities</h2>
          <p className="section-subtitle">My tech stack and proficiency levels</p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(i)}
              className="font-pixel text-xs px-4 py-3 transition-all duration-100"
              style={
                activeCategory === i
                  ? {
                      background: cat.color,
                      color: '#000',
                      border: '2px solid #000',
                      boxShadow: '3px 3px 0px #000',
                    }
                  : {
                      background: 'transparent',
                      color: cat.color,
                      border: `2px solid rgba(${hexToRgb(cat.color)}, 0.4)`,
                      boxShadow: '2px 2px 0px #000',
                    }
              }
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skill inventory grid */}
          <div>
            <div
              className="p-4 mb-3"
              style={{
                background: '#0a1628',
                border: `3px solid ${cat.color}`,
                boxShadow: '4px 4px 0px #000',
              }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-pixel text-xs" style={{ color: cat.color }}>
                  {cat.icon} {cat.label.toUpperCase()} INVENTORY
                </span>
                <span className="font-pixel text-xs text-pixel-gray/50">
                  {cat.skills.length}/6
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {cat.skills.map((skill) => (
                <SkillSlot
                  key={skill.name}
                  skill={skill}
                  color={cat.color}
                  isHovered={hoveredSkill === skill.name}
                  onHover={setHoveredSkill}
                />
              ))}
            </div>
          </div>

          {/* XP bars panel */}
          <div>
            <div
              className="p-4 mb-3"
              style={{
                background: '#0a1628',
                border: `3px solid ${cat.color}`,
                boxShadow: '4px 4px 0px #000',
              }}
            >
              <span className="font-pixel text-xs" style={{ color: cat.color }}>
                ◈ PROFICIENCY LEVELS
              </span>
            </div>

            <div
              className="p-4"
              style={{
                background: '#0a1628',
                border: `3px solid rgba(${hexToRgb(cat.color)}, 0.3)`,
                boxShadow: '4px 4px 0px #000',
              }}
            >
              {cat.skills.map((skill, i) => (
                <XPBar
                  key={skill.name}
                  skill={skill}
                  color={cat.color}
                  isHighlighted={hoveredSkill === skill.name}
                  delay={i * 0.05}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillSlot({
  skill,
  color,
  isHovered,
  onHover,
}: {
  skill: Skill;
  color: string;
  isHovered: boolean;
  onHover: (name: string | null) => void;
}) {
  return (
    <div
      className="aspect-square flex flex-col items-center justify-center cursor-pointer transition-all duration-100 relative"
      style={{
        background: isHovered ? `rgba(${hexToRgb(color)}, 0.15)` : '#111827',
        border: `2px solid ${isHovered ? color : 'rgba(255,255,255,0.1)'}`,
        boxShadow: isHovered ? `3px 3px 0px #000, 0 0 10px rgba(${hexToRgb(color)}, 0.3)` : '2px 2px 0px #000',
        transform: isHovered ? 'translate(-1px, -1px)' : 'none',
      }}
      onMouseEnter={() => onHover(skill.name)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="text-lg mb-1" style={{ imageRendering: 'auto' }}>
        {skill.icon.length <= 2 && !/[^\x00-\x7F]/.test(skill.icon) ? (
          <span className="font-pixel text-xs" style={{ color }}>{skill.icon}</span>
        ) : (
          <span style={{ filter: isHovered ? `drop-shadow(0 0 4px ${color})` : 'none' }}>
            {skill.icon}
          </span>
        )}
      </div>
      <div
        className="font-pixelify text-center leading-tight"
        style={{ fontSize: '16px', color: isHovered ? color : '#94a3b8' }}
      >
        {skill.name}
      </div>

      {/* Level badge */}
      <div
        className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center"
        style={{
          background: color,
          border: '1px solid #000',
          fontSize: '9px',
          fontFamily: '"Press Start 2P"',
          color: '#000',
        }}
      >
        {Math.floor(skill.level / 10)}
      </div>
    </div>
  );
}

function XPBar({
  skill,
  color,
  isHighlighted,
  delay,
}: {
  skill: Skill;
  color: string;
  isHighlighted: boolean;
  delay: number;
}) {
  return (
    <div
      className="mb-3 transition-all duration-100"
      style={isHighlighted ? { transform: 'translateX(4px)' } : {}}
    >
      
      <div className="flex justify-between items-center mb-1">
        <span
          className="font-pixelify text-base"
          style={{ color: isHighlighted ? color : '#cbd5e1' }}
        >
          {skill.icon} {skill.name}
        </span>
        <span className="font-pixel" style={{ fontSize: '8px', color }}>
          {skill.level}%
        </span>
      </div>
      <div className="xp-bar">
        <div
          className="xp-fill"
          style={{
            width: `${skill.level}%`,
            background: `linear-gradient(90deg, ${color} 0%, ${lighten(color)} 50%, ${color} 100%)`,
            backgroundSize: '200% 100%',
            animation: 'shimmer 2s linear infinite',
            animationDelay: `${delay}s`,
            boxShadow: `0 0 8px ${color}80`,
          }}
        />
      </div>
    </div>
  );
}

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '255,255,255';
  return `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`;
}

function lighten(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return hex;
  const r = Math.min(255, parseInt(result[1], 16) + 40).toString(16).padStart(2, '0');
  const g = Math.min(255, parseInt(result[2], 16) + 40).toString(16).padStart(2, '0');
  const b = Math.min(255, parseInt(result[3], 16) + 40).toString(16).padStart(2, '0');
  return `#${r}${g}${b}`;
}
