import './style.css'
import * as THREE from 'three'

// Scene
const scene = new THREE.Scene();

// Clock (This is Deprecated)
// const clock = new THREE.Clock();

// Timer
const timer = new THREE.Timer();

// 3D Object - mesh
// geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);

// material
const material = new THREE.MeshBasicMaterial({color: 0xff0000});

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.set(0, 0, 3);

// Renderer
const canvas = document.querySelector('#canvas');

const renderer = new THREE.WebGLRenderer({canvas});

renderer.setSize(window.innerWidth, window.innerHeight);

// Renderer Turn On

// requestAnimationFrame (requestAnimationFrame.mp4)
// function animate() {
//     cube.rotation.y += 0.01;
//     cube.rotation.x += 0.02;
//     renderer.render(scene, camera);
//     requestAnimationFrame(animate);
// }

// Clock (clock.mp4)
// function animate() {
//     const delta = clock.getElapsedTime();
//     cube.rotation.y = delta;
//     cube.rotation.x = delta;
//     renderer.render(scene, camera);
//     requestAnimationFrame(animate);
// }

// Timer (timer.mp4)
function animate() {
    timer.update();
    const delta = timer.getDelta();
    cube.rotation.y += delta;
    cube.rotation.x += delta;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();
