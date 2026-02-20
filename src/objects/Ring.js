import * as THREE from 'three';
import { createRingBody } from '../physics/bodies.js';
import {
    RING_INNER_RADIUS,
    RING_THICKNESS,
    RING_OUTER_RADIUS,
    RING_SEGMENTS,
    COLOR_RING
} from '../config/constants.js';


export function createRing(scene, x, y) {
    // Generates Ring
    const body = createRingBody(x, y);
    const geometry = new THREE.RingGeometry(
        RING_OUTER_RADIUS - RING_THICKNESS,
        RING_OUTER_RADIUS,
        RING_SEGMENTS
    );

    const material = new THREE.MeshBasicMaterial({
        color: COLOR_RING,
        side: THREE.DoubleSide
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    function update() {
        mesh.position.x = x;
        mesh.position.y = y;
        mesh.rotation.z = 0;
    }

    return {body, mesh, update};
}