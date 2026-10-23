import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import GUI from 'lil-gui';

const gui = new GUI();

const property = {
    color: '#ff0000'
}

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
const geometry = new THREE.BoxGeometry(1, 1, 1);

// material
const material = new THREE.MeshBasicMaterial({color: 0xff0000});

const cube = new THREE.Mesh(geometry, material);

// gui.add(cube.position, 'x').min(-3).max(3).step(0.01).name("Position X");
// gui.add(cube.position, 'y').min(-3).max(3).step(0.01).name("Position Y");
// gui.add(cube.position, 'z').min(-3).max(3).step(0.01).name("Position Z");
//
// gui.add(cube, 'visible', true);
//
// gui.add(material, 'wireframe', false);
//
// gui.addColor(property, "color").onChange(() => {
//     material.color.set(property.color);
// });

const positionFolder = gui.addFolder('Position');
const rotationFolder = gui.addFolder('Rotation');

positionFolder.add(cube.position, 'x').min(-3).max(3).step(0.01).name("Position X");
positionFolder.add(cube.position, 'y').min(-3).max(3).step(0.01).name("Position Y");
positionFolder.add(cube.position, 'z').min(-3).max(3).step(0.01).name("Position Z");

rotationFolder.add(cube.rotation, 'x').min(-3).max(3).step(0.01).name("Rotation X");
rotationFolder.add(cube.rotation, 'y').min(-3).max(3).step(0.01).name("Rotation Y");
rotationFolder.add(cube.rotation, 'z').min(-3).max(3).step(0.01).name("Rotation Z");

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