interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  color: string;
  icon: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "Scribble.io Multiplayer Game",
    description:
      "Real-time multiplayer drawing and guessing game inspired by Scribble.io. Players join rooms, draw prompts, and guess answers using WebSocket communication.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
    github: "https://github.com/DHIYANESH21/ScribbleGame.git",
    demo: "#",
    color: "#4ade80",
    icon: "🎨",
    category: "GAME DEV",
  },
  {
    title: "AI Book Writing Platform",
    description:
      "AI-powered platform that helps users generate and structure books automatically using machine learning and natural language processing.",
    tech: ["React", "Node.js", "Python", "OpenAI API"],
    github: "https://github.com/DHIYANESH21/HackMate.git",
    demo: "#",
    color: "#60a5fa",
    icon: "🤖",
    category: "AI / ML",
  },
  {
    title: "EasyQuizzy",
    description:
      "Interactive quiz platform where users can take quizzes, track scores, and compete with others. Built with React and Firebase for real-time data.",
    tech: ["React", "Firebase", "Tailwind", "JavaScript"],
    github: "https://github.com/DHIYANESH21/Ai-quiz-generator.git",
    demo: "#",
    color: "#fb923c",
    icon: "📝",
    category: "WEB APP",
  },
  {
    title: "Retirement Planning System",
    description:
      "Smart retirement planning system that predicts future savings and financial stability using machine learning models and financial datasets.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Machine Learning"],
    github: "#",
    demo: "https://github.com/Kabil081/IdeaForge.git",
    color: "#c084fc",
    icon: "📈",
    category: "ML / FINTECH",
  },
  {
    title: "Flappy Bird Clone",
    description:
      "Browser-based clone of the classic Flappy Bird game with physics-based gameplay, scoring system, and responsive controls.",
    tech: ["JavaScript", "HTML5 Canvas", "CSS"],
    github: "https://github.com/DHIYANESH21/flappy-bird.git",
    demo: "#",
    color: "#f472b6",
    icon: "🐦",
    category: "GAME DEV",
  },
  {
    title: "BlogApp",
    description:
      "Full-stack blogging platform where users can create, edit, and manage blog posts with authentication and database storage.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/TSKailash/Blog-app.git",
    demo: "#",
    color: "#34d399",
    icon: "✍️",
    category: "FULLSTACK",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-4 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg,#020617 0%,#020617 30%,#031433 70%,#050d1a 100%)",
      }}
    >
      {/* Pixel Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.15,
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 32px)",
        }}
      />

      {/* Floating Grass Blocks */}
      {/* Floating Grass Blocks */}

<div
  className="absolute w-16 h-16 opacity-20"
  style={{
    top: "10%",
    left: "5%",
    background: "linear-gradient(#4ade80 0 30%, #7a5230 30% 100%)",
    boxShadow: "4px 4px 0px #000",
  }}
/>

<div
  className="absolute w-14 h-14 opacity-20"
  style={{
    top: "15%",
    right: "30%",
    background: "linear-gradient(#4ade80 0 30%, #7a5230 30% 100%)",
    boxShadow: "4px 4px 0px #000",
  }}
/>

<div
  className="absolute w-12 h-12 opacity-20"
  style={{
    bottom: "2%",
    left: "12%",
    background: "linear-gradient(#4ade80 0 30%, #7a5230 30% 100%)",
    boxShadow: "4px 4px 0px #000",
  }}
/>

<div
  className="absolute w-16 h-16 opacity-20"
  style={{
    bottom: "15%",
    right: "35%",
    background: "linear-gradient(#4ade80 0 30%, #7a5230 30% 100%)",
    boxShadow: "4px 4px 0px #000",
  }}
/>

      {/* Section header */}
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span
              className="font-pixel text-xs px-3 py-2"
              style={{
                background: "rgba(74,222,128,0.1)",
                border: "2px solid rgba(74,222,128,0.3)",
                color: "#4ade80",
              }}
            >
              ▣ MY WORK
            </span>
          </div>
          <h2 className="section-title text-2xl md:text-3xl">
            Featured Projects
          </h2>
          <p className="section-subtitle">Things I've built and shipped</p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="group relative flex flex-col transition-all duration-200 hover:-translate-y-2"
      style={{
        background: "linear-gradient(180deg, #0a1628 0%, #050d1a 100%)",
        border: `3px solid rgba(${hexToRgb(project.color)}, 0.25)`,
        boxShadow: "4px 4px 0px #000",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = `3px solid ${project.color}`;
        e.currentTarget.style.boxShadow = `6px 6px 0px #000, 0 0 20px rgba(${hexToRgb(
          project.color
        )}, 0.2)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = `3px solid rgba(${hexToRgb(
          project.color
        )}, 0.25)`;
        e.currentTarget.style.boxShadow = "4px 4px 0px #000";
      }}
    >
      {/* Preview */}
      <div
        className="relative h-40 flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(${hexToRgb(
            project.color
          )}, 0.08) 0%, #0a1628 100%)`,
          borderBottom: `3px solid rgba(${hexToRgb(project.color)}, 0.2)`,
        }}
      >
        <div
          className="text-5xl group-hover:scale-110 transition-transform duration-300"
          style={{
            filter: `drop-shadow(0 0 12px ${project.color})`,
          }}
        >
          {project.icon}
        </div>

        <div
          className="absolute top-3 right-3 font-pixel text-black px-2 py-1"
          style={{
            background: project.color,
            fontSize: "8px",
            boxShadow: "2px 2px 0px #000",
          }}
        >
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3
          className="font-pixel text-sm mb-2"
          style={{
            color: project.color,
            textShadow: "1px 1px 0px rgba(0,0,0,0.8)",
          }}
        >
          {project.title}
        </h3>

        <p className="font-pixelify text-sm text-pixel-gray/70 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-pixelify text-xs px-2 py-1"
              style={{
                background: `rgba(${hexToRgb(project.color)}, 0.1)`,
                border: `1px solid rgba(${hexToRgb(project.color)}, 0.3)`,
                color: project.color,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href={project.github}
            className="flex-1 font-pixel text-center py-2 text-white text-xs"
            style={{
              background: "#1a1a2e",
              border: "2px solid rgba(255,255,255,0.2)",
              boxShadow: "2px 2px 0px #000",
            }}
          >
            GITHUB
          </a>

          <a
            href={project.demo}
            className="flex-1 font-pixel text-center py-2 text-black text-xs"
            style={{
              background: project.color,
              border: "2px solid #000",
              boxShadow: "2px 2px 0px #000",
            }}
          >
            LIVE DEMO
          </a>
        </div>
      </div>
    </div>
  );
}

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "255,255,255";
  return `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(
    result[3],
    16
  )}`;
}