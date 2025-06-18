import * as THREE from 'three';
import { MindARThree } from 'mindar-image-three';

const mindarThree = new MindARThree({
  container: document.body,
  imageTargetSrc: './targets.mind',
});

const { renderer, scene, camera } = mindarThree;

const anchor = mindarThree.addAnchor(0);

// Crear una esfera como el <a-sphere> de A-Frame
const geometry = new THREE.SphereGeometry(0.25, 32, 32);
const material = new THREE.MeshStandardMaterial({ color: 0xef2d5e });
const sphere = new THREE.Mesh(geometry, material);
anchor.group.add(sphere);

// Luz básica
const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
scene.add(light);

// Iniciar la app
await mindarThree.start();

// Loop de renderizado
renderer.setAnimationLoop(() => {
  renderer.render(scene, camera);
});
