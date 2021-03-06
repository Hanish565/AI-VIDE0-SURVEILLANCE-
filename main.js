video="";
status="";
objects=[]
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
    if (status != "") {
        objectDetector.detect(video,gotResult);
        for ( i = 0; i < objects.length; i++) {
           document.getElementById("status").innerHTML="Status:Object Detected";
           document.getElementById("objectcounter").innerHTML="The Number of objects :" + objects.length;
           
           fill("green");
           percentage=floor(objects[i].confidence*100);
           text(objects[i].label+ " " + percentage + "%",objects[i].x+15,objects[i].y+15);
           noFill();
           stroke("green");
           rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

        }
    }
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

function gotResult(error,results){
  if (error) {
      console.error(error);
  } else {
      console.log(results);
      objects=results;
  }
  
}