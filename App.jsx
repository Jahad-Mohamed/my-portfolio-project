import { useState } from "react";
import "./src/styles/app.scss";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Header from "./src/component/Header/Header";
import Nav from "./src/component/Nav/Nav";
import About from "./src/component/About/About";
import Skills from "./src/component/Skills/Skills";
import Projects from "./src/component/Projects/Projects";
import Testimonials from "./src/component/Testimonials/Testimonials";
import Contact from "./src/component/Contact/Contact";
import Footer from "./src/component/Footer/Footer";

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
// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper);

// const controls = new OrbitControls(camera, renderer.domElement);

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
const spaceTexture = new THREE.TextureLoader().load(
  "ThreeJSBackground/space.jpg"
);
scene.background = spaceTexture;

// Avatar
const jayTexture = new THREE.TextureLoader().load("ThreeJSBackground/jay.png");

const jay = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial({ map: jayTexture })
);

scene.add(jay);

// Moon

const moonTexture = new THREE.TextureLoader().load(
  "ThreeJSBackground/moon.jpg"
);
const normalTexture = new THREE.TextureLoader().load(
  "ThreeJSBackground/normal.jpg"
);

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

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  jay.rotation.x += 0.05;
  jay.rotation.y += 0.01;
  jay.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

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
  return (
    <div className="app__section">
      <Nav />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
