import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.CylinderGeometry(0.7, 0.5, 2, 32);
const material = new THREE.MeshStandardMaterial({
  color: 0x00ff00,
  flatShading: true,
});
const cup = new THREE.Mesh(geometry, material);
cup.rotation.x = 0.4;
scene.add(cup);

camera.position.z = 5;

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 4);
scene.add(pointLight);
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// ANIMATE

const clock = new THREE.Clock();

function animate() {
  const elapsed = clock.getElapsedTime();

  cup.rotation.y = 0.5 * elapsed;
  cup.position.y = Math.sin(elapsed) * 0.6;
  cup.rotation.z = Math.sin(elapsed) * 0.3;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();
