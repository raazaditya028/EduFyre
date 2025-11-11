EduFyre - Project Documentation
**URL**: edu-fyre.vercel.app
 Project Overview
EduFyre is a modern, responsive educational platform built with React + TypeScript + Tailwind CSS + shadcn‑ui, set up using Vite. It aims to provide a clean, performant web experience for learners and educators alike by leveraging cutting‑edge web technologies.
 Key Features
- Built with React + TypeScript for type safety and modular architecture.
- Styled with Tailwind CSS and enhanced UI components from shadcn‑ui.
- Powered by Vite for super‑fast builds and hot‑module reloading (HMR).
- Fully configured with ESLint, Prettier and TSConfig for robust code quality and maintainability.
- Structure designed for scalability: clear folder layout, environment separation, and modular components.
   Tech Stack
- Vite – fast build tool and development server.
- TypeScript – strongly‑typed JavaScript for improved reliability.
- React – component‑based UI library for declarative user interfaces.
- Tailwind CSS – utility‑first CSS framework for rapid UI development.
- shadcn‑ui – customizable UI component library built for React + Tailwind.
- ESLint + Prettier – static linting and formatting for code consistency.
- TSConfig / Vite config – custom configuration for project tooling and TypeScript support.
   Getting Started
### Prerequisites
- Node.js (version 16+ recommended)
- npm or yarn (npm used in instructions below)
- Git (for version control)

### Installation
```
git clone https://github.com/raazaditya028/EduFyre.git
cd EduFyre
npm install
```

### Development Server
```
npm run dev
```
Once started, open http://localhost:5173 in your browser.

### Building for Production
```
npm run build
```
Output is placed in the `dist/` folder.

### Linting & Formatting
```
npm run lint
npm run format
```
 Project Structure
/public              # static assets (images, favicon, etc.)
/src
  /components        # reusable UI components
  /pages             # top‑level pages / routes
  /styles            # global styles, Tailwind configuration
  /utils             # helper functions, hooks
.eslint.config.js
tsconfig.json
tailwind.config.ts
vite.config.ts
package.json
 Deployment
Deploy the production build on any static hosting platform like Vercel, Netlify, or GitHub Pages using the output folder from `npm run build`.
 Contributing
1. Fork the repo.
2. Create a new branch: `git checkout -b feature/my-feature`
3. Commit changes with a descriptive message.
4. Push to your branch and open a Pull Request.
5. Ensure linting and formatting pass before submitting.
 License
Specify your license here (e.g., MIT, Apache‑2.0) or link to a LICENSE file.
 Acknowledgements
- Thanks to the teams behind Vite, React, Tailwind CSS, shadcn‑ui for building excellent tools.
- Inspired by modern frontend architecture and best practices in UI/UX.
