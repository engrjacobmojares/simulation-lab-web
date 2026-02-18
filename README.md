## Basic Project Structure
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
