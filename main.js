

import * as THREE from 'three';


import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene;

const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000); 

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});

renderer.outputColorSpace  = THREE.SRGBColorSpace;

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(1);

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize() {
    renderer.setSize( window.innerWidth, window.innerHeight );

    camera.aspect = window.innerWidth / window.innerHeight;

    //camera move
    camera.updateProjectionMatrix();
}


renderer.render(scene, camera);







const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(ambientLight);

//const gridHelper = new THREE.GridHelper(200, 50);
//scene.add(gridHelper);


const controls = new OrbitControls(camera, renderer.domElement);

//Add Star white
function addStar(){
  const geometry = new THREE.SphereGeometry(0.1, 24, 24);
  const material = new THREE.MeshStandardMaterial({color:0xffffff});
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(300, 500));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(500).fill().forEach(addStar);

//Add Star red
function addStar_red(){
  const geometry = new THREE.SphereGeometry(0.1, 24, 24);
  const material = new THREE.MeshStandardMaterial({color:0xFF0000});
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(300, 500));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(50).fill().forEach(addStar_red);

//Add Star red
function addStar_yellow(){
  const geometry = new THREE.SphereGeometry(0.1, 24, 24);
  const material = new THREE.MeshStandardMaterial({color:0xFFFF00});
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(300, 500));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(50).fill().forEach(addStar_yellow);

//Add Star green
function addStar_green(){
  const geometry = new THREE.SphereGeometry(0.1, 24, 24);
  const material = new THREE.MeshStandardMaterial({color:0x00FF00});
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(300, 500));

  star.position.set(x, y, z);
  scene.add(star);
}

//Add Star blue
function addStar_blue(){
  const geometry = new THREE.SphereGeometry(0.1, 24, 24);
  const material = new THREE.MeshStandardMaterial({color:0x0000FF});
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(300, 500));

  star.position.set(x, y, z);
  scene.add(star);
}


//moon 1 terrestrial
const moonTexture = new THREE.TextureLoader().load('images/planets/Terrestrial1.png');
const normalTexture = new THREE.TextureLoader().load('images/planets/normal.jpg');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(1.5, 32, 32),
  new THREE.MeshStandardMaterial(
    {
      map: moonTexture,
      normalMap: normalTexture
    }
  )
);

scene.add(moon);

function plusOrMinus(){
var plusOrMinusnum = Math.random() < 0.5 ? -1 : 1;
return plusOrMinusnum;
}


moon.position.z = THREE.MathUtils.randFloat(30, 80) * plusOrMinus();
moon.position.setX(THREE.MathUtils.randFloat(0, 40) * plusOrMinus());
moon.position.setY(THREE.MathUtils.randFloatSpread(80));


//moon 2 terrestrial
const moonTexture2 = new THREE.TextureLoader().load('images/planets/Gaseous2.png');
const normalTexture2 = new THREE.TextureLoader().load('images/planets/normal.jpg');

const moon2 = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial(
    {
      map: moonTexture2,
      normalMap: normalTexture2
    }
  )
);

scene.add(moon2);

moon2.position.z = THREE.MathUtils.randFloat(30, 80) * plusOrMinus();
moon2.position.setX(THREE.MathUtils.randFloat(0, 40) * plusOrMinus());
moon2.position.setY(THREE.MathUtils.randFloatSpread(80));



//Moon 3 terrestrial
const moonTexture3 = new THREE.TextureLoader().load('images/planets/Alpine.png');
const normalTexture3 = new THREE.TextureLoader().load('images/planets/normal.jpg');

const moon3 = new THREE.Mesh(
  new THREE.SphereGeometry(2.3, 32, 32),
  new THREE.MeshStandardMaterial(
    {
      map: moonTexture3,
      normalMap: normalTexture3
    }
  )
);

scene.add(moon3);

moon3.position.z = THREE.MathUtils.randFloat(30, 80) * plusOrMinus();
moon3.position.setX(THREE.MathUtils.randFloat(0, 40) * plusOrMinus());
moon3.position.setY(THREE.MathUtils.randFloatSpread(80));



//moon 4 terrestrial
const moonTexture4 = new THREE.TextureLoader().load('images/planets/Icy.png');
const normalTexture4 = new THREE.TextureLoader().load('images/planets/normal.jpg');

const moon4 = new THREE.Mesh(
  new THREE.SphereGeometry(0.8, 32, 32),
  new THREE.MeshStandardMaterial(
    {
      map: moonTexture4,
      normalMap: normalTexture4
    }
  )
);

scene.add(moon4);

moon4.position.z = THREE.MathUtils.randFloat(30, 80) * plusOrMinus();
moon4.position.setX(THREE.MathUtils.randFloat(0, 40) * plusOrMinus());
moon4.position.setY(THREE.MathUtils.randFloatSpread(80));



//moon 5 terrestrial
const moonTexture5 = new THREE.TextureLoader().load('images/planets/Clouds4.png');
const normalTexture5 = new THREE.TextureLoader().load('images/planets/normal.jpg');

const moon5 = new THREE.Mesh(
  new THREE.SphereGeometry(1.8, 32, 32),
  new THREE.MeshStandardMaterial(
    {
      map: moonTexture5,
      normalMap: normalTexture5
    }
  )
);

scene.add(moon5);

moon5.position.z = THREE.MathUtils.randFloat(30, 80) * plusOrMinus();
moon5.position.setX(THREE.MathUtils.randFloat(0, 40) * plusOrMinus());
moon5.position.setY(THREE.MathUtils.randFloatSpread(80));



//moon 6 terrestrial
const moonTexture6 = new THREE.TextureLoader().load('images/planets/Savannah.png');
const normalTexture6 = new THREE.TextureLoader().load('images/planets/normal.jpg');

const moon6 = new THREE.Mesh(
  new THREE.SphereGeometry(2.2, 32, 32),
  new THREE.MeshStandardMaterial(
    {
      map: moonTexture6,
      normalMap: normalTexture6
    }
  )
);

scene.add(moon6);

moon6.position.z = THREE.MathUtils.randFloat(30, 80) * plusOrMinus();
moon6.position.setX(THREE.MathUtils.randFloat(0, 40) * plusOrMinus());
moon6.position.setY(THREE.MathUtils.randFloatSpread(80));



//moon 7 terrestrial
const moonTexture7 = new THREE.TextureLoader().load('images/planets/Volcanic.png');
const normalTexture7 = new THREE.TextureLoader().load('images/planets/normal.jpg');

const moon7 = new THREE.Mesh(
  new THREE.SphereGeometry(2.8, 32, 32),
  new THREE.MeshStandardMaterial(
    {
      map: moonTexture7,
      normalMap: normalTexture7
    }
  )
);

scene.add(moon7);

moon7.position.z = THREE.MathUtils.randFloat(30, 80) * plusOrMinus();
moon7.position.setX(THREE.MathUtils.randFloat(0, 40) * plusOrMinus());
moon7.position.setY(THREE.MathUtils.randFloatSpread(80));










Array(50).fill().forEach(addStar_blue);

/*
//Background
const spaceTexture = new THREE.TextureLoader().load('space.jpg');

scene.background = spaceTexture;*/






function animateCam(){
  requestAnimationFrame(animateCam);

  camera.rotation.x +=0.000009; 
  camera.rotation.y +=0.0009;
  camera.rotation.z +=0;



  renderer.render(scene, camera);
}

animateCam()


/*
function animate(){
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate()
*/

//Moon Spins
function animateMoon(){
  requestAnimationFrame(animateMoon);

  moon.rotation.x +=0.001; 
  moon.rotation.y +=0.001;
  moon.rotation.z +=0.001;

  moon2.rotation.x -=0.001; 
  moon2.rotation.y -=0.001;
  moon2.rotation.z +=0.001;



  //controls.update();
  renderer.render(scene, camera);
}

animateMoon()











