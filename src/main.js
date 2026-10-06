import './style.css'
import * as THREE from 'three'

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

scene.add(cube);

// Camera
const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 100);

camera.position.set(0, 0, 3);

// Renderer
const canvas = document.querySelector('#canvas');

const renderer = new THREE.WebGLRenderer({canvas});

renderer.setSize(size.width, size.height);

window.addEventListener('resize', () => {
    size.width = window.innerWidth;
    size.height = window.innerHeight;

    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();

    renderer.setSize(size.width, size.height);
});

// Renderer Turn On
function animate() {
    timer.update();
    const delta = timer.getDelta();
    cube.rotation.y += delta;
    cube.rotation.x += delta;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();

