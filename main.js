import './style.css'

import * as THREE from 'three';


import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene;

const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000); 

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});

renderer.outputEncoding = THREE.SRGBColorSpace;

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
const moonTexture = new THREE.TextureLoader().load('Terrestrial1.png');
const normalTexture = new THREE.TextureLoader().load('normal.jpg');

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
const moonTexture2 = new THREE.TextureLoader().load('Gaseous2.png');
const normalTexture2 = new THREE.TextureLoader().load('normal.jpg');

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



//moon 3 terrestrial
const moonTexture3 = new THREE.TextureLoader().load('Alpine.png');
const normalTexture3 = new THREE.TextureLoader().load('normal.jpg');

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
const moonTexture4 = new THREE.TextureLoader().load('Icy.png');
const normalTexture4 = new THREE.TextureLoader().load('normal.jpg');

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
const moonTexture5 = new THREE.TextureLoader().load('Clouds4.png');
const normalTexture5 = new THREE.TextureLoader().load('normal.jpg');

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
const moonTexture6 = new THREE.TextureLoader().load('Savannah.png');
const normalTexture6 = new THREE.TextureLoader().load('normal.jpg');

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
const moonTexture7 = new THREE.TextureLoader().load('Volcanic.png');
const normalTexture7 = new THREE.TextureLoader().load('normal.jpg');

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











//from my other javascript file
/*jQuery animate paragraph*/ 
/* 1 */
$( ".icon_wrapper_1" ).click(function() {
  $( ".content_2" ).toggleClass( "flip_alt flip_alt_back" );
});

$( ".icon_wrapper_1" ).click(function(){
if($( ".content_3, .content_4, .content_5, .content_6" ).hasClass("flip_alt")){
  $( ".content_3, .content_4, .content_5, .content_6" ).addClass( "flip_alt_back");
  $( ".content_3, .content_4, .content_5, .content_6" ).removeClass( "flip_alt");
}
});

$( ".icon_wrapper_1" ).click(function() {
  if($(".content_2").hasClass("flip_alt")){
    $( ".content_1" ).addClass( "flip");
    $( ".content_1" ).removeClass( "flip_back");
    }
    else{
      $( ".content_1" ).addClass( "flip_back" );
    }
});

/* 2 */

$( ".icon_wrapper_2" ).click(function() {
  $( ".content_3" ).toggleClass( "flip_alt flip_alt_back" );
});

$( ".icon_wrapper_2" ).click(function(){
  if($( ".content_2, .content_4, .content_5, .content_6" ).hasClass("flip_alt")){
    $( ".content_2, .content_4, .content_5, .content_6" ).addClass( "flip_alt_back");
    $( ".content_2, .content_4, .content_5, .content_6" ).removeClass( "flip_alt");
  }
  });

$( ".icon_wrapper_2" ).click(function() {
  if($(".content_3").hasClass("flip_alt")){
    $( ".content_1" ).addClass( "flip");
    $( ".content_1" ).removeClass( "flip_back");


    }
    else{
      $( ".content_1" ).addClass( "flip_back" );
    }
});



/* 3 */

$( ".icon_wrapper_3" ).click(function() {
  $( ".content_4" ).toggleClass( "flip_alt flip_alt_back" );
});

$( ".icon_wrapper_3" ).click(function(){
  if($( ".content_2, .content_3, .content_5, .content_6" ).hasClass("flip_alt")){
    $( ".content_2, .content_3, .content_5, .content_6" ).addClass( "flip_alt_back");
    $( ".content_2, .content_3, .content_5, .content_6" ).removeClass( "flip_alt");
  }
  });

$( ".icon_wrapper_3" ).click(function() {
  if($(".content_4").hasClass("flip_alt")){
    $( ".content_1" ).addClass( "flip");
    $( ".content_1" ).removeClass( "flip_back");


    }
    else{
      $( ".content_1" ).addClass( "flip_back" );
    }
});


/* 4 */
$( ".icon_wrapper_4" ).click(function() {
  $( ".content_5" ).toggleClass( "flip_alt flip_alt_back" );
});

$( ".icon_wrapper_4" ).click(function(){
  if($( ".content_2, .content_3, .content_4, .content_6" ).hasClass("flip_alt")){
    $( ".content_2, .content_3, .content_4, .content_6" ).addClass( "flip_alt_back");
    $( ".content_2, .content_3, .content_4, .content_6" ).removeClass( "flip_alt");
  }
  });

$( ".icon_wrapper_4" ).click(function() {
  if($(".content_5").hasClass("flip_alt")){
    $( ".content_1" ).addClass( "flip");
    $( ".content_1" ).removeClass( "flip_back");


    }
    else{
      $( ".content_1" ).addClass( "flip_back" );
    }
});

/* 5 PROJECT */

$( ".projects_button" ).click(function() {
  $( ".content_6" ).toggleClass( "flip_alt flip_alt_back" );
});

$( ".projects_button" ).click(function(){
  if($( ".content_2, .content_3, .content_4, .content_5" ).hasClass("flip_alt")){
    $( ".content_2, .content_3, .content_4, .content_5" ).addClass( "flip_alt_back");
    $( ".content_2, .content_3, .content_4, .content_5" ).removeClass( "flip_alt");
  }
  });

$( ".projects_button" ).click(function() {
  if($(".content_6").hasClass("flip_alt")){
    $( ".content_1" ).addClass( "flip");
    $( ".content_1" ).removeClass( "flip_back");


    }
    else{
      $( ".content_1" ).addClass( "flip_back" );
    }
});




/* HOVER BUTTON AFFECT CONTENT */
/*
$(function() {
  $('.icon_wrapper:nth-child(1) p').hover(function() {
  
   $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').addClass('hover_color_r');
   $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').css('border-left', 'solid 3px red');

  

  }, function() {
    // on mouseout, reset the background colour
    $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').removeClass('hover_color_r');
    $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').css('border-left', 'solid 3px white');
    
    
  });
});

$(function() {
  $('.icon_wrapper:nth-child(2) p').hover(function() {
  
   $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').addClass('hover_color_y');
   $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').css('border-left', 'solid 3px yellow');


  }, function() {
    // on mouseout, reset the background colour
    $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').removeClass('hover_color_y');
    $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').css('border-left', 'solid 3px white');
    
  });
});

$(function() {
  $('.icon_wrapper:nth-child(3) p').hover(function() {
  
   $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').addClass('hover_color_g');
   $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').css('border-left', 'solid 3px rgb(0, 255, 0)');

  }, function() {
    // on mouseout, reset the background colour
    $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').removeClass('hover_color_g');
    $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').css('border-left', 'solid 3px white');
    
  });
});

$(function() {
  $('.icon_wrapper:nth-child(4) p').hover(function() {
  
   $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').addClass('hover_color_b');
   $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').css('border-left', 'solid 3px blue');

  }, function() {
    // on mouseout, reset the background colour
    $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').removeClass('hover_color_b');
    $('.content_1 p, .content_2 p, .content_3 p, .content_4 p, .content_5 p').css('border-left', 'solid 3px white');
    
  });
});
*/


/*Media Open Button*/

$( ".media_button" ).click(function() {
  if($( ".top_links_wrapper" ).hasClass("media_close")){
  $( ".top_links_wrapper" ).addClass( "media_open").removeClass("media_close");
}else if($( ".top_links_wrapper").hasClass("media_open")){
  $( ".top_links_wrapper" ).removeClass("media_open").addClass("media_close");
}
else{$( ".top_links_wrapper").addClass("media_open")}
});

/*$( ".media_button" ).click(function() {
  if($( ".top_links_caller_button" ).hasClass("media_close")){
  $( ".top_links_caller_button" ).addClass( "media_open").removeClass("media_close");
}else if($( ".top_links_caller_button").hasClass("media_open")){
  $( ".top_links_caller_button" ).removeClass("media_open").addClass("media_close");
}
else{$( ".top_links_caller_button").addClass("media_open")}
});*/

/*MOVE LITTLE ARROW LINK A FEW DEGREES!*/
$(function() {
  $('.project_link_button').hover(function() {
  
   $('.fa-arrow-right').css('transform', 'rotateZ(-45deg)');
  
  }, function() {
    // on mouseout, reset the background colour
    $('.fa-arrow-right').css('transform', 'rotateZ(0deg)');
    
  });
});

/*CLICK IMAGE EXPAND PROJECT DESCRIPTION*/

 
  $('.project_img').click(function() {
  
   $('.project_p').toggleClass('no_show');
   $('.project_link_button').toggleClass('no_show');
   
  });

/*ROTATE ARROW ON CLICK SIDEBAR*/
function rotateArrow() {
if(document.getElementById('caller-arrow').style.transform == "rotateY(0deg)"){
  document.getElementById('caller-arrow').style.transform = "rotateY(180deg)";
  
}
  else{
    document.getElementById('caller-arrow').style.transform = "rotateY(0deg)";
  }

};


const rotArr = document.querySelector('.top_links_caller_button');

console.log(rotArr);

  rotArr.addEventListener("click", rotateArrow);


/*COPY HEIGHT OF ABSOLUTE CONTENT DIV*/
/*
var link1 = document.querySelector('.icon_wrapper_1');
link1.addEventListener('click', contentHeight1);

function contentHeight1() {
  var switchHeight = document.querySelector('.content_2');
var gottenHeight = switchHeight.offsetHeight + 20 + "px";
  document.getElementById('content_left_hey').style.height = gottenHeight;
};

var link2 = document.querySelector('.icon_wrapper_2');
link2.addEventListener('click', contentHeight2);

function contentHeight2() {
  var switchHeight = document.querySelector('.content_3');
var gottenHeight = switchHeight.offsetHeight + 20 + "px";
  document.getElementById('content_left_hey').style.height = gottenHeight;
}

var link3 = document.querySelector('.icon_wrapper_3');
link3.addEventListener('click', contentHeight3);

function contentHeight3() {
  var switchHeight = document.querySelector('.content_4');
var gottenHeight = switchHeight.offsetHeight + 20 + "px";
  document.getElementById('content_left_hey').style.height = gottenHeight;
}

var link4 = document.querySelector('.icon_wrapper_4');
link4.addEventListener('click', contentHeight4);

function contentHeight4() {
  var switchHeight = document.querySelector('.content_5');
var gottenHeight = switchHeight.offsetHeight + 20 + "px";
  document.getElementById('content_left_hey').style.height = gottenHeight;
}
*/