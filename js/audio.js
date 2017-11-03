var song, analyzer;

var col = {
    r: 0,
    g: 0,
    b: 0
};

function preload(){
    song = loadSound('mm.mp3');
}

function setup(){
    createCanvas(windowWidth,windowHeight, WEBGL);
    song.loop();
    analyzer = new p5.Amplitude();
    analyzer.setInput(song);
}

function draw(){
    background(234,165,255);
    rotateY(frameCount * 0.01);
    var rms = analyzer.getLevel();
    translate(100,100);
    rotateX(frameCount * 0.01);
    for(var j = 0; j < 6; j++){
        push();
        for(var i = 0; i < 50; i++){
            translate(sin(frameCount * 0.0001 + j) * 200, cos(frameCount * 0.0001 + j) * 200, i * 0.5);
            rotateZ(frameCount * 0.002);
            push();
            sphere(10+rms*30); 
            pop();
        }
        pop();
    }
}