import * as THREE from 'three';
import { WORLD_WIDTH, WORLD_HEIGHT } from '../config/constants.js';

export function addLights(scene) {
    const ambient = new THREE.AmbientLight(0x404060, 0.6);
    scene.add(ambient);

    const directional = new THREE.DirectionalLight(0xffffff, 0.8);
    directional.position.set(WORLD_WIDTH / 2, WORLD_HEIGHT / 2, 400);
    directional.castShadow = true;
    directional.shadow.mapSize.width = 1024;
    directional.shadow.mapSize.height = 1024;
    scene.add(directional);
}