// Create an entity for the main scene model
const baseScene = new Entity();

// Add it to the engine for rendering
engine.addEntity(baseScene);

// Give it a component for the model itself
baseScene.addComponent(new GLTFShape("models/scene.glb"));

// Add an entity for the door
const door = new Entity();
engine.addEntity(door);

// Give it a model and move it into place
door.addComponent(new GLTFShape("models/room1/Puzzle01_Door.glb"));
door.addComponent(new Transform({ position: new Vector3(21.18, 10.8, 24.5) }));