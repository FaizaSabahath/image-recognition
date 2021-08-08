function setup(){
    canvas = createCanvas(300,300);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    canvas.position(550,200)
}
function modelLoaded(){
    console.log("Model Loaded")
}
function draw(){
    image(video,0,0,300,300);
}
function take_snapshot(){
    save('famous name.png');
}