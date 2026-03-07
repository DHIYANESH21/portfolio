import { useEffect, useState, useRef } from "react";

/* -------------------- STEVE SPRITE -------------------- */

function SteveSprite({ frame, direction }: { frame: number; direction: 1 | -1 }) {
  return (
    <div
      style={{
        transform: direction === -1 ? "scaleX(-1)" : "none",
        imageRendering: "pixelated",
        display: "inline-block",
        width: 16,
        height: 24,
      }}
    >
      <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
        {/* Head */}
        <rect x="3" y="0" width="10" height="8" fill="#c8926a" />
        <rect x="3" y="0" width="10" height="2" fill="#5a3010" />
        {/* Eyes */}
        <rect x="5" y="2" width="2" height="2" fill="#1a0a00" />
        <rect x="9" y="2" width="2" height="2" fill="#1a0a00" />
        {/* Mouth */}
        <rect x="5" y="6" width="6" height="1" fill="#7a4020" />
        {/* Body */}
        <rect x="4" y="8" width="8" height="6" fill="#4444aa" />
        <rect x="4" y="8" width="8" height="1" fill="#5555bb" />

        {/* Arms */}
        {frame === 0 && (
          <>
            <rect x="1" y="9" width="3" height="5" fill="#3a3a88" />
            <rect x="12" y="7" width="3" height="6" fill="#5555bb" />
          </>
        )}
        {frame === 1 && (
          <>
            <rect x="1" y="8" width="3" height="6" fill="#3a3a88" />
            <rect x="12" y="8" width="3" height="6" fill="#3a3a88" />
          </>
        )}
        {frame === 2 && (
          <>
            <rect x="1" y="7" width="3" height="6" fill="#5555bb" />
            <rect x="12" y="9" width="3" height="5" fill="#3a3a88" />
          </>
        )}

        {/* Legs */}
        {frame === 0 && (
          <>
            <rect x="4" y="14" width="4" height="7" fill="#1a1a66" />
            <rect x="4" y="20" width="4" height="2" fill="#2a1000" />
            <rect x="8" y="13" width="4" height="7" fill="#222288" />
            <rect x="8" y="19" width="4" height="2" fill="#3a1800" />
          </>
        )}
        {frame === 1 && (
          <>
            <rect x="4" y="14" width="4" height="7" fill="#222277" />
            <rect x="4" y="20" width="4" height="2" fill="#3a1800" />
            <rect x="8" y="14" width="4" height="7" fill="#222277" />
            <rect x="8" y="20" width="4" height="2" fill="#3a1800" />
          </>
        )}
        {frame === 2 && (
          <>
            <rect x="4" y="13" width="4" height="7" fill="#222288" />
            <rect x="4" y="19" width="4" height="2" fill="#3a1800" />
            <rect x="8" y="14" width="4" height="7" fill="#1a1a66" />
            <rect x="8" y="20" width="4" height="2" fill="#2a1000" />
          </>
        )}
      </svg>
    </div>
  );
}

/* -------------------- RUNNING STEVE -------------------- */

function RunningSteve() {
  const [isRunning, setIsRunning] = useState(false);
  const [posX, setPosX] = useState(0);
  const [frame, setFrame] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const posRef = useRef(0);
  const dirRef = useRef<1 | -1>(1);
  const animRef = useRef<number>(0);
  const idleRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startRun = () => {
    const dir: 1 | -1 = Math.random() > 0.5 ? 1 : -1;
    dirRef.current = dir;
    setDirection(dir);
    const startX = dir === 1 ? -60 : window.innerWidth + 20;
    posRef.current = startX;
    setPosX(startX);
    setIsRunning(true);
  };

  const scheduleNext = () => {
  const delay = 5000 + Math.random() * 5000; // 5–10 seconds
  idleRef.current = setTimeout(startRun, delay);
};

  useEffect(() => {
    idleRef.current = setTimeout(startRun, 1500);
    return () => {
      if (idleRef.current) clearTimeout(idleRef.current);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isRunning) return;

    const speed = 2.5;
    let lastFrameTime = 0;
    const frameInterval = 120;

    const tick = (time: number) => {
      posRef.current += speed * dirRef.current;
      setPosX(posRef.current);

      if (time - lastFrameTime > frameInterval) {
        setFrame((f) => (f + 1) % 3);
        lastFrameTime = time;
      }

      const offscreen =
        dirRef.current === 1
          ? posRef.current > window.innerWidth + 80
          : posRef.current < -80;

      if (offscreen) {
        setIsRunning(false);
        setFrame(1);
        scheduleNext();
        return;
      }

      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, [isRunning]);

  if (!isRunning) return null;

  return (
    <div
      style={{
        position: "absolute",
        left: posX,
        // sits on top of the grass: grass starts at top=0, Steve's feet at bottom of sprite
        // sprite is 24px tall, scaled 2.5x = 60px, grass top = 0, so top = -(60 - 14) = -46
        top: -20,
        zIndex: 100,
        imageRendering: "pixelated",
        transform: "scale(2.5)",
        transformOrigin: "bottom left",
        filter:
          "drop-shadow(2px 0px 0px #000) drop-shadow(-2px 0px 0px #000) drop-shadow(0px -2px 0px #000) drop-shadow(0px 2px 0px #000)",
        pointerEvents: "none",
      }}
    >
      <SteveSprite frame={frame} direction={direction} />
    </div>
  );
}

/* -------------------- PIXEL DIVIDER -------------------- */

export default function PixelDivider() {
  return (
    // overflow-visible so Steve can poke above the divider
    <div
      style={{
        position: "relative",
        height: 28,
        overflow: "visible",
        zIndex: 50,
      }}
    >
      {/* Grass — top 12px */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 12,
          background:
            "repeating-linear-gradient(90deg, #4ade80 0px, #4ade80 8px, #22c55e 8px, #22c55e 16px, #16a34a 16px, #16a34a 24px, #4ade80 24px, #4ade80 32px)",
          zIndex: 1,
        }}
      />

      {/* Dirt — bottom 16px */}
      <div
        style={{
          position: "absolute",
          top: 12,
          left: 0,
          right: 0,
          height: 16,
          background:
            "repeating-linear-gradient(90deg, #5c3d1e 0px, #5c3d1e 16px, #7a5230 16px, #7a5230 32px, #4a3118 32px, #4a3118 48px, #6b4826 48px, #6b4826 64px)",
          borderTop: "3px solid #8B6340",
          borderBottom: "3px solid #3d2811",
          zIndex: 1,
        }}
      />

      {/* Steve — needs to float above the divider */}
      <RunningSteve />
    </div>
  );
}