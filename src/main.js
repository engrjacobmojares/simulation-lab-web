import Matter from 'matter-js';
import { engine } from './physics/engine.js';
import { getWorld, addBodies } from './physics/world.js';
import { createGround } from './physics/bodies.js';
import { createBall, create2DBall, makeBallGlow } from './objects/Ball.js';
import { createRing } from './objects/Ring.js';
import { scene } from './render/scene.js';
import { camera, resizeCamera } from './render/camera.js';
import { createRenderer, resizeRenderer } from './render/renderer.js';
import { addLights } from './render/lights.js';
import {
  WORLD_WIDTH,
  WORLD_HEIGHT,
} from './config/constants.js';

const app = document.getElementById('app');
if (!app) throw new Error ('#app not found');

document.body.style.background = '#0a0a0f';

const world = getWorld(engine);
const ground = createGround();
addBodies(world, ground);

const ball = create2DBall(scene, WORLD_WIDTH / 2, WORLD_HEIGHT / 2);
// makeBallGlow(ball);
addBodies(world, ball.body);


const ring = createRing(scene, WORLD_WIDTH / 2, WORLD_HEIGHT / 2);
addBodies(world, ring.body);

const renderer = createRenderer(app);
addLights(scene);

function resize(){
  const w = app.clientWidth;
  const h = app.clientHeight;
  resizeRenderer(renderer, w, h);
  resizeCamera(camera, w, h)
}
window.addEventListener('resize', resize);
resize();

const FIXED_DT_MS = 16.67; // 60 updates per second
let lastTime = 0;
let accumulator = 0;
function loop(time) {
  let deltaMs = Math.min(time - lastTime, 50);
  lastTime = time;
  accumulator += deltaMs;
  while (accumulator >= FIXED_DT_MS) {
    Matter.Engine.update(engine, FIXED_DT_MS);
    accumulator -= FIXED_DT_MS;
  }
  ball.update();
  ring.update();
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);