import * as THREE from 'three';
main();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();

//
// start here
//
function main() {
  // const canvas = document.querySelector("#gl_canvas");
  // // Initialize the GL context
  // const gl = canvas.getContext("webgl");

  // // Only continue if WebGL is available and working
  // if (gl === null) {
  //   alert(
  //     "Unable to initialize WebGL. Your browser or machine may not support it.",
  //   );
  //   return;
  // }

  // // Set clear color to black, fully opaque
  // gl.clearColor(1.0, 0.0, 0.0, 1.0);
  // // Clear the color buffer with specified clear color
  // gl.clear(gl.COLOR_BUFFER_BIT);

  console.log("Hello GL");
  console.log(THREE.Scene);
}
