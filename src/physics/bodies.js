import Matter from 'matter-js';
import {
    WORLD_WIDTH,
    WORLD_HEIGHT,
    BALL_RADIUS,
    BALL_RESTITUTION,
    BALL_FRICTION,
    GROUND_HEIGHT,
    GROUND_RESTITUTION,
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
        }
    );
}


export function createGround() {
    // Creates a Ground body
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