function preload(){

}

function setup(){
canvas=createCanvas(640,480)
canvas.position(100,250)
video=createCapture(VIDEO)
video.hide()
}

function draw(){

circle(60, 60, 100);
rect(45,60,35,400,);
circle(200,60,100);
rect(185,60,35,400)
circle(340,60,100);
rect(325,60,35,400)
image(video,400,300,200,200)
}

