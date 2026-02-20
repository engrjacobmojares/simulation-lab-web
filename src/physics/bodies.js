import Matter from 'matter-js';
import {
    WORLD_WIDTH,
    WORLD_HEIGHT,
    AIR_FRICTION,
    BALL_RADIUS,
    BALL_RESTITUTION,
    BALL_FRICTION,
    BALL_DENSITY,
    GROUND_HEIGHT,
    GROUND_RESTITUTION,
    RING_INNER_RADIUS,
    RING_OUTER_RADIUS,
    RING_SEGMENTS
} from '../config/constants.js';


export function createBall(x, y) {
    // Creates a Ball body
    return Matter.Bodies.circle(
        x,
        y,
        BALL_RADIUS,
        {
            restitution: BALL_RESTITUTION,
            friction: BALL_FRICTION,
            frictionAir: AIR_FRICTION,
            density: BALL_DENSITY
        }
    );
}


export function createGround() {
    // Creates a Ground body (Static)
    const x = WORLD_WIDTH / 2;
    const y = GROUND_HEIGHT / 2;
    return Matter.Bodies.rectangle(
        x,
        y,
        WORLD_WIDTH + 100,
        GROUND_HEIGHT,
        {
            isStatic: true,
            restitution: GROUND_RESTITUTION
        }
    );
}


export function createRingBody(x, y) {
    const N = RING_SEGMENTS;
    const midRadius = (RING_INNER_RADIUS + RING_OUTER_RADIUS) / 2;
    const segmentRadius = (RING_OUTER_RADIUS - RING_INNER_RADIUS) / 2;
    const bodies = [];
    for (let i = 0; i < N; i++) {
        const angle = (i / N) * Math.PI * 2;
        const bx = x + midRadius * Math.cos(angle);
        const by = y + midRadius * Math.sin(angle);
        bodies.push(Matter.Bodies.circle(bx, by, segmentRadius, {
            isStatic: true,
            restitution: BALL_RESTITUTION,
            friction: BALL_FRICTION,
        }));
    }
    return Matter.Composite.create({ bodies });
}