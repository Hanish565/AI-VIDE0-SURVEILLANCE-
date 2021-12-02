video="";
status="";

function preload(){
  video=createVideo("video.mp4");
  video.hide();
}

function setup(){
    canvas= createCanvas(620,500);
    canvas.center();
}

function draw(){
    image(video,0,0,620,500);
}


function start(){
    objectDetector=ml5.objectDetector("cocossd",modeloaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}


function modeloaded(){
    console.log("Model has been loaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}