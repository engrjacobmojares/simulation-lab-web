import Matter from 'matter-js';

export function getWorld(engine) {
    return engine.world;
}

export function addBodies(world, bodies) {
    Matter.World.add(world, Array.isArray(bodies) ? bodies :[bodies]);
}