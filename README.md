# 🚀 Simulation Lab

A modular physics simulation framework built using **Three.js** for rendering and **Matter.js** for physics, powered by **Vite** for fast development and production builds.

This project is designed as a **clean, scalable, and professional simulation architecture** suitable for:

- Physics experiments
- Interactive web simulations
- Educational tools
- YouTube-quality visual simulations
- Advanced system modeling

We must trust this structure.  
The architecture below is intentional.  
Every folder has a purpose.  
All new features must be added in their designated modules to keep the codebase clean, extensible, and maintainable.

---

# 🧠 Core Stack

- Three.js → Rendering engine (WebGL)
- Matter.js → Physics engine
- Vite → Development & build tool
- ES Modules → Modular architecture

---

# 📁 Basic Project Structure
simulation-lab/
│
├── public/
│   └── index.html
│
├── src/
│   ├── main.js
│   │
│   ├── physics/
│   │   ├── engine.js
│   │   ├── world.js
│   │   ├── bodies.js
│   │   └── constraints.js
│   │
│   ├── render/
│   │   ├── scene.js
│   │   ├── camera.js
│   │   ├── renderer.js
│   │   └── lights.js
│   │
│   ├── objects/
│   │   ├── Ball.js
│   │   ├── Box.js
│   │   └── Planet.js
│   │
│   ├── config/
│   │   └── constants.js
│   │
│   └── utils/
│       └── helpers.js
│
├── package.json
└── vite.config.js


---

# 📖 Folder Responsibilities (STRICT GUIDELINES)

This structure must be respected.

Do not mix responsibilities between folders.

---

## 📂 public/

### Purpose:
Contains static assets and the root HTML file.

### index.html
- Entry point for the browser
- Loads `/src/main.js`
- Should remain minimal
- No business logic here

---

## 📂 src/main.js

### Purpose:
The application entry point.

Responsibilities:
- Initialize physics engine
- Initialize rendering system
- Connect physics ↔ rendering
- Start animation loop
- Manage update cycle

This file orchestrates the system.  
It should NOT contain object definitions or physics logic directly.

---

## 📂 src/physics/

Handles all physics-related logic using Matter.js.

Physics code must stay here.

### engine.js
- Create and export the Matter.js engine
- Configure gravity
- Configure time step
- Setup global physics settings

### world.js
- Create and manage the physics world
- Add/remove bodies
- Manage world-level operations

### bodies.js
- Factory functions for creating physics bodies
- Circles
- Rectangles
- Polygons
- Custom shapes

No rendering code allowed here.

### constraints.js
- Define joints
- Springs
- Ropes
- Pendulums
- Distance constraints

All object relationships must be created here.

---

## 📂 src/render/

Handles everything related to Three.js rendering.

Rendering must stay separate from physics.

### scene.js
- Create and export Three.js scene
- Set background
- Configure fog if needed

### camera.js
- Setup camera type
- Positioning
- Responsive resizing
- Future camera controls

### renderer.js
- Create WebGL renderer
- Enable shadows
- Pixel ratio setup
- Attach canvas to DOM

### lights.js
- Add directional light
- Ambient light
- Point lights
- Shadow settings

No physics logic allowed here.

---

## 📂 src/objects/

This folder bridges physics and rendering.

Each file represents a simulation object.

### Ball.js
Should:
- Create Matter.js body
- Create Three.js mesh
- Sync position and rotation
- Expose update() method

### Box.js
Same pattern as Ball.

### Planet.js
May include:
- Gravitational logic
- Orbital mechanics
- Mass relationships

Each object must:
- Own its mesh
- Own its physics body
- Handle its own synchronization

This keeps main.js clean.

---

## 📂 src/config/

Central configuration values.

### constants.js
Contains:
- Gravity strength
- World size
- Colors
- Physics defaults
- Simulation constants

Never hardcode values elsewhere.
Always import from config.

---

## 📂 src/utils/

Reusable helpers.

### helpers.js
May contain:
- Random generators
- Math utilities
- Angle conversions
- Debug helpers
- Vector helpers

If logic is reusable → put it here.

---

# 🔁 Simulation Flow

1. Engine updates physics
2. Objects sync mesh positions from physics bodies
3. Renderer draws updated scene
4. Loop continues using requestAnimationFrame

Physics drives motion.  
Rendering mirrors state.

---

# 🧱 Development Rules

- Do not mix physics and rendering logic
- Do not define objects inside main.js
- Do not hardcode constants outside config/
- Keep modules small and focused
- Add new systems as folders, not hacks

Clean code > quick hacks.

---

# 🛠 Installation

```bash
npm install
npm run dev
