import * as THREE from 'three';
import { WORLD_WIDTH, WORLD_HEIGHT } from '../config/constants.js';

const camera = new THREE.PerspectiveCamera(
    50,
    WORLD_WIDTH / WORLD_HEIGHT,
    0.1,
    2000
);


camera.position.set(WORLD_WIDTH / 2, WORLD_HEIGHT / 2, 600);
camera.lookAt(WORLD_WIDTH / 2, WORLD_HEIGHT / 2, 0);

export function resizeCamera(camera, width, height) {
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
}

export { camera };