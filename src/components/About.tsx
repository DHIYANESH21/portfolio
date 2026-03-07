const timeline = [
  { year: '2023', event: 'Exploring tech but not focused on career yet', icon: '🌱', color: '#94a3b8' },

  { year: 'Early 2024', event: 'Started learning Data Structures and Algorithms (DSA)', icon: '📚', color: '#60a5fa' },

  { year: 'Late 2024', event: 'Started web development (React, Node.js, full-stack basics)', icon: '💻', color: '#4ade80' },

  { year: 'Early 2025', event: 'Built multiple projects and participated in hackathons', icon: '🚀', color: '#fb923c' },

  { year: 'Late 2025', event: 'Reached strong flow in DSA and began understanding real software development practices', icon: '🧠', color: '#c084fc' },

  { year: '2026', event: 'Learning Spring Boot and exploring backend architecture', icon: '⚙️', color: '#f472b6' },
];
export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-4"
      style={{ background: '#050d1a' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span
              className="font-pixel text-xs px-3 py-2"
              style={{
                background: 'rgba(251,146,60,0.1)',
                border: '2px solid rgba(251,146,60,0.3)',
                color: '#fb923c',
              }}
            >
              ▣ ABOUT ME
            </span>
          </div>
          <h2 className="section-title text-2xl md:text-3xl">Player Profile</h2>
          <p className="section-subtitle">Get to know the developer behind the code</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bio card */}
          <div
            className="p-6"
            style={{
              background: '#0a1628',
              border: '3px solid rgba(251,146,60,0.4)',
              boxShadow: '4px 4px 0px #000',
            }}
          >
            {/* Player card header */}
            <div
              className="flex items-center gap-4 mb-6 pb-4"
              style={{ borderBottom: '2px solid rgba(251,146,60,0.2)' }}
            >
              {/* Avatar */}
              <div
                className="w-16 h-16 flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #4ade80, #22c55e)',
                  border: '3px solid #000',
                  boxShadow: '3px 3px 0px #000',
                }}
              >
                <span className="text-3xl" style={{ imageRendering: 'auto' }}>👨‍💻</span>
              </div>
              <div>
                <h3
                  className="font-pixel text-sm text-pixel-green"
                  style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.8)' }}
                >
                  Dhiyanesh Sakthivel
                </h3>
                <p className="font-pixelify text-sm text-pixel-orange">Full-Stack Developer</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 bg-pixel-green animate-pulse" />
                  <span className="font-pixel text-xs text-pixel-green/70">Pre-final Year</span>
                </div>
              </div>
            </div>

            {/* Stats table */}
<div className="space-y-2 mb-6">
  {[
    { label: 'LEVEL', value: 'Student Developer', color: '#4ade80' },
    { label: 'CLASS', value: 'Full-Stack Learner', color: '#60a5fa' },
    { label: 'GUILD', value: 'Hackathons & Open Source', color: '#fb923c' },
    { label: 'LOCATION', value: 'Chennai, India', color: '#c084fc' },
    { label: 'STATUS', value: 'Computer Science Student', color: '#4ade80' },
  ].map(({ label, value, color }) => (
    <div
      key={label}
      className="flex items-center justify-between py-2 px-3"
      style={{
        background: 'rgba(0,0,0,0.3)',
        border: '1px solid rgba(255,255,255,0.05)'
      }}
    >
      <span className="font-pixel text-xs text-pixel-gray/50">{label}</span>
      <span className="font-pixelify text-sm" style={{ color }}>{value}</span>
    </div>
  ))}
</div>

            {/* Bio text */}
           <p className="font-pixelify text-lg text-pixel-gray/80 leading-relaxed text-justify">
  I’m a passionate developer who enjoys building solutions and understanding how things work from the ground up. My journey into computer science didn’t start with much interest, but over time it completely changed the way I think and learn.
  Today I genuinely enjoy exploring everything from the fundamentals of computing to more advanced concepts.
  Data Structures and Algorithms became a major turning point for me, and platforms like LeetCode played an important role in shaping my problem-solving mindset.
  Solving problems regularly helped me develop patience, logical thinking, and a deeper appreciation for software engineering.
  ONE DAY AT A TIME guys !
</p>
          </div>

          {/* Timeline */}
          <div>
            <div
              className="p-4 mb-4"
              style={{
                background: '#0a1628',
                border: '3px solid rgba(96,165,250,0.4)',
                boxShadow: '4px 4px 0px #000',
              }}
            >
              <span className="font-pixel text-xs text-pixel-blue">◈ QUEST LOG</span>
            </div>

            <div className="space-y-3">
              {timeline.map((item, i) => (
  <div
    key={item.year}
    className="flex items-center gap-4 p-4 transition-all duration-200 hover:-translate-x-1 cursor-default"
    style={{
      background: '#0a1628',
      border: '2px solid rgba(255,255,255,0.07)',
      boxShadow: '3px 3px 0px #000',
    }}
  >
    {/* Year */}
    <div
      className="flex-shrink-0 font-pixel text-black px-2 py-1"
      style={{
        background: item.color,
        fontSize: '8px',
        boxShadow: '2px 2px 0px #000',
        width: '90px',
        textAlign: 'center',
      }}
    >
      {item.year}
    </div>

    {/* Icon */}
    <div style={{ fontSize: '18px' }}>
      {item.icon}
    </div>

    {/* Event */}
    <div className="flex-1 font-pixelify text-sm text-pixel-gray">
      {item.event}
    </div>

    {/* Status */}
    {i < timeline.length - 1 ? (
      <span className="font-pixel text-xs text-pixel-green">✓</span>
    ) : (
      <span className="font-pixel text-xs text-pixel-orange animate-pulse">▶</span>
    )}
  </div>
))}
            </div>

            {/* Fun facts */}
            <div
              className="mt-4 p-4"
              style={{
                background: '#0a1628',
                border: '2px solid rgba(74,222,128,0.2)',
                boxShadow: '3px 3px 0px #000',
              }}
            >
              <p className="font-pixel text-xs text-pixel-green mb-3">⚡ FUN FACTS</p>
              {['Loves DSA','Forza ferrari', 'Digital creator',  'loves movie'].map((fact) => (
                <div key={fact} className="font-pixelify text-lg text-pixel-gray/60 py-1">
                  <span className="text-pixel-green mr-2">▸</span>{fact}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
