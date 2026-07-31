# Clouds beyond the imaginations ☁️

A premium, highly immersive web experience featuring an **Apple-style cinematic scroll animation** overlaid with a modern, glass-morphism React user interface. 

This project bridges the gap between raw performance (rendering hundreds of image frames on a canvas with zero lag) and beautiful, modern UI design.

## 🎨 UI Design & Aesthetics
- **Glass-morphism**: The UI components utilize semi-transparent backgrounds and subtle backdrop blurs (`backdrop-blur`), allowing the animating background to shine right through the layout.
- **Dark Mode / Cinematic Feel**: The interface is designed around a dark theme to make the background imagery pop, providing a premium, movie-like experience.
- **Scroll-Driven Parallax**: The entire website feels alive. The background isn't a static image or a looping video; it is mathematically tied to your scroll position.

## 🛠️ Tech Stack & Tags
`React` `TypeScript` `Vite` `TailwindCSS (v4)` `HTML5 <canvas>` `Lenis Smooth Scroll` `Glassmorphism` `Frontend Development`

## 🧠 The Thought Process
Before writing a single line of code, the goal was to create an experience where the background *is* the experience, much like Apple's product landing pages. 

Standard CSS animations or embedded videos often suffer from stuttering or poor performance when tied to scroll events. To achieve that buttery-smooth, cinematic scroll:
1. **Frame Extraction**: I extracted 236 individual high-res image frames.
2. **Canvas Rendering Engine**: I built a custom `<canvas>` component (`BackgroundAnimation.tsx`) that mathematically calculates your exact scroll percentage and draws the corresponding frame to the screen. The result is a flawless, scrubbable animation that plays backward and forward as you scroll.
3. **Lenis Scroll Override**: Browser default scrolling can be clunky. I integrated **Lenis** to override the default scroll mechanics, replacing them with a premium, physics-based smooth scroll.
4. **Transparent React Layout**: Finally, I built out the React UI using TailwindCSS, explicitly stripping away solid backgrounds (`bg-black`) in favor of `bg-white/10` and `backdrop-blur-sm` to create floating glass panels over the animation.

## 📂 Project Structure

```text
FFrontend/
├── public/
│   └── frames/                 # 236 individual image frames for the scroll sequence
├── src/
│   ├── components/             # Reusable UI sections
│   │   ├── BackgroundAnimation.tsx  # Core canvas rendering engine & Lenis logic
│   │   ├── Navbar.tsx          # Glass-morphism navigation bar
│   │   ├── Hero.tsx            # Hero section
│   │   ├── MissionSection.tsx  # Mission & Vision layout
│   │   ├── AboutSection.tsx    # Transparent About Us section
│   │   ├── ServicesSection.tsx # Services & Features
│   │   ├── Testimonials.tsx    # Client spotlights
│   │   └── Modals.tsx          # Interactive overlay modals
│   ├── App.tsx                 # Main layout assembly and state management
│   ├── main.tsx                # React application entry point
│   └── index.css               # Global styling and Tailwind CSS v4 imports
├── index.html                  # Main HTML document
├── package.json                # Project dependencies (React, Vite, Lenis)
├── vite.config.ts              # Vite configuration & plugins
└── tsconfig.json               # TypeScript configurations
```

## 🚀 How to Run Locally

1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Clone or download the repository.
3. Open your terminal in the `FFrontend` directory.
4. Install the dependencies:
   ```bash
   npm install
   ```
5. Start the Vite development server:
   ```bash
   npm run dev
   ```
6. Open your browser and navigate to the local link (usually `http://localhost:5173`).
