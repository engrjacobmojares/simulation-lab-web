import * as THREE from 'three';
import { COLOR_BACKGROUND } from '../config/constants.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(COLOR_BACKGROUND);

export { scene };