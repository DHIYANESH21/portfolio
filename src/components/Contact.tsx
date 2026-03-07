import { useState, FormEvent } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4"
      style={{ background: 'linear-gradient(180deg, #050d1a 0%, #0a1628 100%)' }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span
              className="font-pixel text-xs px-3 py-2"
              style={{
                background: 'rgba(74,222,128,0.1)',
                border: '2px solid rgba(74,222,128,0.3)',
                color: '#4ade80',
              }}
            >
              ▣ SEND MESSAGE
            </span>
          </div>
          <h2 className="section-title text-2xl md:text-3xl">Contact Me</h2>
          <p className="section-subtitle">Let's build something amazing together</p>
        </div>
              
<div
  className="absolute w-16 h-16 opacity-20"
  style={{
    top: "30%",
    left: "10%",
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
    bottom: "10%",
    left: "12%",
    background: "linear-gradient(#4ade80 0 30%, #7a5230 30% 100%)",
    boxShadow: "4px 4px 0px #000",
  }}
/>
        {/* Success message */}
        {sent && (
          <div
            className="mb-6 p-4 text-center font-pixel text-xs text-black animate-bounce"
            style={{
              background: '#4ade80',
              border: '3px solid #166534',
              boxShadow: '4px 4px 0px #000',
            }}
          >
            ✓ MESSAGE SENT! I'LL REPLY SOON.
          </div>
        )}

        {/* Form card */}
        <div
          className="p-6 md:p-8"
          style={{
            background: '#0a1628',
            border: '3px solid rgba(74,222,128,0.4)',
            boxShadow: '6px 6px 0px #000',
          }}
        >
          {/* Terminal header */}
          <div
            className="flex items-center gap-2 mb-6 pb-4"
            style={{ borderBottom: '2px solid rgba(74,222,128,0.2)' }}
          >
            <div className="w-3 h-3" style={{ background: '#ef4444', border: '1px solid #000' }} />
            <div className="w-3 h-3" style={{ background: '#fbbf24', border: '1px solid #000' }} />
            <div className="w-3 h-3" style={{ background: '#4ade80', border: '1px solid #000' }} />
            <span className="font-pixel text-xs text-pixel-green/50 ml-2">contact.exe</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label
                className="font-pixel text-xs text-pixel-green mb-2 block"
                style={{ fontSize: '9px' }}
              >
                PLAYER NAME
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
                placeholder="Enter your name..."
                required
                className="pixel-input"
                style={{
                  borderColor: focused === 'name' ? '#4ade80' : 'rgba(74,222,128,0.3)',
                }}
              />
            </div>

            {/* Email */}
            <div>
              <label
                className="font-pixel text-xs text-pixel-green mb-2 block"
                style={{ fontSize: '9px' }}
              >
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                placeholder="your@email.com"
                required
                className="pixel-input"
                style={{
                  borderColor: focused === 'email' ? '#4ade80' : 'rgba(74,222,128,0.3)',
                }}
              />
            </div>

            {/* Message */}
            <div>
              <label
                className="font-pixel text-xs text-pixel-green mb-2 block"
                style={{ fontSize: '9px' }}
              >
                YOUR MESSAGE
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                placeholder="Tell me about your project..."
                required
                rows={5}
                className="pixel-input resize-none"
                style={{
                  borderColor: focused === 'message' ? '#4ade80' : 'rgba(74,222,128,0.3)',
                }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={sending}
              className="w-full font-pixel text-xs py-4 text-black transition-all duration-100 relative overflow-hidden"
              style={{
                background: sending ? '#166534' : '#4ade80',
                border: '3px solid #000',
                boxShadow: sending ? '1px 1px 0px #000' : '4px 4px 0px #000',
                transform: sending ? 'translate(2px, 2px)' : 'none',
                cursor: sending ? 'not-allowed' : 'pointer',
              }}
            >
              {sending ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin">◈</span>
                  SENDING...
                </span>
              ) : (
                '▶ SEND MESSAGE'
              )}
            </button>
          </form>

          {/* Contact info */}
          <div
            className="mt-6 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3"
            style={{ borderTop: '2px solid rgba(74,222,128,0.1)' }}
          >
            {[
              { icon: '📧', label: 'EMAIL', value: 'dhiyaneshsakthivel@gmail.com', color: '#4ade80' },
              { icon: '💼', label: 'LINKEDIN', value: '/in/dhiaynesh sakthivel', color: '#60a5fa' },
              { icon: '📍', label: 'LOCATION', value: 'Chennai', color: '#fb923c' },
            ].map(({ icon, label, value, color }) => (
              <div
                key={label}
                className="text-center p-3"
                style={{
                  background: 'rgba(0,0,0,0.3)',
                  border: `1px solid rgba(${hexToRgb(color)}, 0.2)`,
                }}
              >
                <div className="text-lg mb-1" style={{ imageRendering: 'auto' }}>{icon}</div>
                <div className="font-pixel mb-1" style={{ fontSize: '8px', color }}>{label}</div>
                <div className="font-pixelify text-xs text-pixel-gray/60">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '255,255,255';
  return `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`;
}
