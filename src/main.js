import './style.css';
import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();

// 3D Object - mesh
// geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);

// material
const material = new THREE.MeshBasicMaterial({color: 0xff0000});

const cube = new THREE.Mesh(geometry, material);

// Position (position-x-positive.png)
// cube.position.x = 4;

// Position (position-x-negative.png)
// cube.position.x = -4;

// Position (position-y-positive.png)
// cube.position.y = 2;

// Position (position-y-negative.png)
// cube.position.y = -2;

// Position (position-z-positive.png)
// cube.position.z = 2;

// Position (position-z-negative.png)
// cube.position.z = -2;

// Position (position-set.png)
// cube.position.set(2, 2, -2);

// Scale (scale-x.png)
// cube.scale.x = 2;

// Scale (scale-y.png)
// cube.scale.y = 2;

// Scale (You can't able to see any change)
// cube.scale.z = 2;

// Scale (scale-set.png)
// cube.scale.set(1.5, 2, 2);

// Rotation (rotation-x.png)
// cube.rotation.x = Math.PI / 4;

// Rotation (rotation-y.png)
// cube.rotation.y = Math.PI / 4;

// Rotation (rotation-z.png)
// cube.rotation.z = Math.PI / 4;

// Rotation (rotation-set.png)
// cube.rotation.set(Math.PI / 3, Math.PI / 6, Math.PI / 5);

scene.add(cube);

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.set(0, 0, 3);

// Renderer
const canvas = document.querySelector('#canvas');

const renderer = new THREE.WebGLRenderer({canvas});

renderer.setSize(window.innerWidth, window.innerHeight);

// Renderer Turn On
renderer.render(scene, camera);