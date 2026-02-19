import Matter from 'matter-js';
import { engine } from './physics/engine.js';
import { getWorld, addBodies } from './physics/world.js';
import { createGround } from './physics/bodies.js';
import { createBall, makeBallGlow } from './objects/Ball.js';
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

const ball = createBall(scene, WORLD_WIDTH / 2, 500);
makeBallGlow(ball);
addBodies(world, ball.body);

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

let lastTime = 0;
function loop(time) {
  const deltaMs = time - lastTime;
  lastTime = time;
  Matter.Engine.update(engine, deltaMs);
  ball.update();
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);