# 🎮 Minecraft Pixel Portfolio

A modern developer portfolio with a Minecraft-inspired pixel art aesthetic.

## Tech Stack
- **React 18** + **TypeScript**
- **Tailwind CSS** for styling
- **Vite** for bundling
- **Press Start 2P** + **Pixelify Sans** fonts

## Features
- 🎮 Pixel art UI inspired by Minecraft
- 🌊 Animated floating clouds & particles
- 📦 Pixel inventory skill system with XP bars
- 🚀 Responsive design
- ✨ Smooth hover effects & transitions
- 🌿 Minecraft grass/dirt section dividers

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Project Structure
```
src/
  components/
    Navbar.tsx       # Fixed navigation bar
    Hero.tsx         # Hero section with background
    StatsCards.tsx   # Stats display cards
    Projects.tsx     # Project grid
    Skills.tsx       # Pixel inventory skill system
    About.tsx        # About / player profile
    Contact.tsx      # Contact form
    Footer.tsx       # Footer with social links
  App.tsx
  main.tsx
  index.css          # Global styles & animations
```

## Customization
- Update personal info in each component
- Modify `projects` array in `Projects.tsx`
- Update `categories` in `Skills.tsx`
- Change `timeline` in `About.tsx`
- Color palette is defined in `tailwind.config.js`
