import { useState } from "react";
import "./App.scss";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import SPACE from "../public/space.jpg";
// import Normal from "../public/normaljpg";
// import jay from "../public/jay.jpg";
// import Moon from "../public/moon.jpg";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75, //field of view
  window.innerWidth / window.innerHeight, // aspect ratio: based off user browser window
  0.1, // view frustum:
  1000 // control which objects are visable relative to camera
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

// Torus - Geometry Shape
const geometry = new THREE.TorusGeometry(10, 3, 100, 16);
const material = new THREE.MeshStandardMaterial({
  color: 0xc70039,
});
const torusKnot = new THREE.Mesh(geometry, material);

scene.add(torusKnot);

// Light

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

//helpers
const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffd700 });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(100).fill().forEach(addStar);

// Background

const spaceTexture = new THREE.TextureLoader().load("space.jpg");
scene.background = spaceTexture;

// Avatar

const jayTexture = new THREE.TextureLoader().load("jay.png");

const jay = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({ map: jayTexture })
);

scene.add(jay);

// Moon

const moonTexture = new THREE.TextureLoader().load("moon.jpg");
const normalTexture = new THREE.TextureLoader().load("normal.jpg");

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);

scene.add(moon);

moon.position.z = 30;
moon.position.setX(-10);

jay.position.z = -5;
jay.position.x = 2;

// Spinning Torus Knot
function animate() {
  requestAnimationFrame(animate);

  torusKnot.rotation.x += 0.01;
  torusKnot.rotation.y += 0.01;
  torusKnot.rotation.z += 0.01;

  renderer.render(scene, camera);
}

animate();

function App() {
  return <div className="App">Hello World</div>;
}

export default App;
