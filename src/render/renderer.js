import * as THREE from 'three';
import { WORLD_HEIGHT, WORLD_WIDTH } from '../config/constants.js';

export function createRenderer(container) {
    const renderer = new THREE.WebGLRenderer({ antialias: true});
    renderer.setSize(WORLD_WIDTH, WORLD_HEIGHT);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    if (container) {
        container.appendChild(renderer.domElement);
    }

    return renderer;
}

export function resizeRenderer(renderer, width, height) {
    renderer.setSize(width, height);
}