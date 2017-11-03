var renderer, scene, camera,  radius, circleColor;
var audio, context, analyser, dataArray, source;
var fft = 256;
var posX = 0, posY = 1;

var height = window.innerHeight, width = window.innerWidth;

	init();
	animate();

function init(){

	// CREATE RENDERER
	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( width, height );
	document.body.appendChild( renderer.domElement );

	// CREATE SCENE, CAMERA
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xffffff);
	camera = new THREE.PerspectiveCamera( 75, width/height, 1, 1000 );
	camera.position.set(0, 0, 3);
	audio = new Audio();
	audio.src = "sound/finalsong.ogg";
	audio.autoplay = true;

	context = new (window.AudioContext || window.webkitAudioContext)();
	analyser = context.createAnalyser();

	analyser.fftSize = fft;
	var bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);


  window.addEventListener( 'load', analyseSound, false);
}

function animate(){

	requestAnimationFrame( animate );
	analyser.getByteFrequencyData(dataArray);
	getPos();
	drawCircle(0.5, posX, posY, 0xff0000);
	renderer.render( scene, camera );

}

function analyseSound(){
	var source = context.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(context.destination);
}

function getColor(){

	//GET COLOR FROM THE FREQ OF THE SOUND
}

function getPos(){
	posX += /255;
	posY += N;
}

function drawCircle(radius, posX, posY, circleColor){

	var geometry = new THREE.CircleGeometry(radius, 32);
	var material = new THREE.MeshBasicMaterial({color: circleColor});
	var circle = new THREE.Mesh( geometry, material );
	circle.position.setX(posX);
	circle.position.setY(posY);
	scene.add(circle);

}
