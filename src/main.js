import './style.css'
import * as THREE from 'three'

// Scene
const scene = new THREE.Scene();

// 3D Object - mesh
// geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);

// material
const material = new THREE.MeshBasicMaterial({color: 0xff0000});

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

// Camera

// Perspective camera

// Human eye (human-eye.png)
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

// Wide (wide.png)
// const camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 0.1, 100);

// Zoomed (zoomed.png)
// const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 100);

// Orthographic camera
const camera = new THREE.OrthographicCamera(-2, 2, 2, -2, 0.1, 100);

camera.position.set(0, 0, 3);

// Renderer
const canvas = document.querySelector('#canvas');

const renderer = new THREE.WebGLRenderer({canvas});

renderer.setSize(window.innerWidth, window.innerHeight);

// Renderer Turn On
renderer.render(scene, camera);

