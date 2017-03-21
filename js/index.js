var renderer, scene, camera, audio, radius, ringColor, analyser, dataArray;
var fft = 256;
var posX = 0, posY = 0;



	init();
	animate();

function init(){

	// CREATE RENDERER
	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	// CREATE SCENE, CAMERA
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xffffff);
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 1, 1000 );
	camera.position.set(0, 0, 3);

	audio = new Audio();
	audio.src = "sound/finalsong.ogg";
	//audio.autoplay = true;

	var context = new (window.AudioContext || window.webkitAudioContext)();
	analyser = context.createAnalyser();
	analyser.fftSize = fft;

	var bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);


}

function animate(){

	requestAnimationFrame( animate );
	analyser.getByteFrequencyData(dataArray);
	drawCircle(0.5, posX, posY, ringColor);


	renderer.render( scene, camera );

}

function getColor(){

	
}
function drawCircle(radius, posX, posY, ringColor){

	var geometry = new THREE.CircleGeometry(radius, 16);
	var material = new THREE.MeshBasicMaterial({color: ringColor});
	var circle = new THREE Mesh( geometry, material );
	circle.position = new THREE.Vector3(posX,posY, 0);
	scene.add(circle);

}
