var renderer, scene, camera, cube;
/*var mouseX = 0, var mouseY = 0;*/


	init();
	animate();

function init(){

	// CREATE RENDERER
	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	// CREATE SCENE, CAMERA & LIGHTSOURCE
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 1, 1000 );
	camera.position.set(0, 0, 3);
	ambientLight = new THREE.AmbientLight(0xffffff, 1);
	scene.add(ambientLight);

}

function animate(){
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}