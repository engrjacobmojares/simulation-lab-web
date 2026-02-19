import * as THREE from 'three';
import { createBall as createBallBody} from '../physics/bodies.js';
import { BALL_RADIUS } from '../config/constants.js';
import { COLOR_BALL } from '../config/constants.js';

export function createBall(scene, x, y) {
    const body = createBallBody(x, y);
    const geometry = new THREE.SphereGeometry(BALL_RADIUS, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: COLOR_BALL });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);

    function update() {
        mesh.position.x = body.position.x;
        mesh.position.y = body.position.y;
        mesh.rotation.z = body.angle;
    }

    return { body, mesh, update };
}