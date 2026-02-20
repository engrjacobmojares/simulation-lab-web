import Matter from 'matter-js';
import {GRAVITY} from '../config/constants.js';

const engine = Matter.Engine.create(); //Standard Engine call using Matter
engine.gravity.x = GRAVITY.x; // Extracts horizontal gravity
engine.gravity.y = GRAVITY.y; // Extracts vertical gravity
engine.enableSleeping = false;

export { engine };