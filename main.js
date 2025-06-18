import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';
import { MindARThree } from 'https://cdn.jsdelivr.net/npm/mind-ar@1.1.5/dist/mindar-image-three.prod.js';

const mindarThree = new MindARThree({
  container: document.body,
  imageTargetSrc: './targets.mind', // asegúrate que esté en tu carpeta
});

const { renderer, scene, camera } = mindarThree;

// ancla para el primer target
const anchor = mindarThree.addAnchor(0);

// esfera
const geometry = new THREE.SphereGeometry(0.25, 32, 32);
const material = new THREE.MeshStandardMaterial({ color: 0xef2d5e });
const sphere = new THREE.Mesh(geometry, material);
anchor.group.add(sphere);

// luz
const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
scene.add(light);

// iniciar cámara y render
await mindarThree.start();

renderer.setAnimationLoop(() => {
  renderer.render(scene, camera);
});
