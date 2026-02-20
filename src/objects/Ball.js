import * as THREE from 'three';
import { createBall as createBallBody} from '../physics/bodies.js';
import { BALL_RADIUS,
         COLOR_BALL,
         GLOW_COLOR, 
         GLOW_EMISSIVE_INTENSITY, 
         GLOW_LIGHT_INTENSITY, 
         GLOW_LIGHT_DISTANCE 
} from '../config/constants.js';


export function createBall(scene, x, y) {
    // Generates Standard 3D Ball Mesh
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

export function create2DBall(scene, x, y) {
    // Generates 2D Ball
    const body = createBallBody(x, y);
    const geometry = new THREE.CircleGeometry(BALL_RADIUS, 32);
    const material = new THREE.MeshBasicMaterial({
        color: COLOR_BALL,
        side: THREE.DoubleSide
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    function update() {
        mesh.position.x = body.position.x;
        mesh.position.y = body.position.y;
        mesh.rotation.z = body.angle;
    }

    return {body, mesh, update};
}


// 3D Effects

export function makeBallGlow(ball, options = {}) {
    // Makes a Ball Glow (ball is an instance of createBall)
    const color = options.color ?? GLOW_COLOR;
    const intensity = options.intensity ?? GLOW_EMISSIVE_INTENSITY;
    const lightIntensity = options.lightIntensity ?? GLOW_LIGHT_INTENSITY;
    const lightDistance = options.lightDistance ?? GLOW_LIGHT_DISTANCE;

    const mesh = ball.mesh;
    const currentMat = mesh.material;

    mesh.material = new THREE.MeshStandardMaterial({
        color: currentMat.color,
        emissive: new THREE.Color(color),
        emissiveIntensity: intensity,
        roughness: 0.3,
        metalness: 0.1
    });

    const pointLight = new THREE.PointLight(color, lightIntensity, lightDistance);
    pointLight.position.set(0,0,0);
    mesh.add(pointLight);

    return ball;
}