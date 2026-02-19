import Matter from 'matter-js';
import {GRAVITY} from '../config/constants.js';

const engine = Matter.Engine.create();
engine.gravity.x = GRAVITY.x;
engine.gravity.y = GRAVITY.y;

export { engine };