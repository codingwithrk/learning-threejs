import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const size = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Scene
const scene = new THREE.Scene();

// Timer
const timer = new THREE.Timer();

// 3D Object - mesh
// geometry
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const geometry = new THREE.SphereGeometry( 15, 32, 16 );
// const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );

// Custom geometry
const geometry = new THREE.BufferGeometry();

// How many triangles needed
const count = 50;

// Need to declare position of triangle
const positionArray = new Float32Array(count * 3 * 3);
for (let i = 0; i < count * 3 * 3; i++) {
    positionArray[i] = (Math.random() - 0.5) * 4; // range -4 to 4
}
geometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));

// material
// const material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});
const material = new THREE.MeshBasicMaterial({color: 0xff0000});

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

// Camera
const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 100);

camera.position.set(0, 0, 3);
camera.lookAt(0, 0, 0);

// Renderer
const canvas = document.querySelector('#canvas');

const renderer = new THREE.WebGLRenderer({canvas});

renderer.setSize(size.width, size.height);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.1;

window.addEventListener('resize', () => {
    size.width = window.innerWidth;
    size.height = window.innerHeight;

    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();

    renderer.setSize(size.width, size.height);
});

// Renderer Turn On
function animate(timestamp) {
    timer.update(timestamp);
    controls.update();
    const delta = timer.getDelta();
    // cube.rotation.y += delta;
    // cube.rotation.x += delta;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();