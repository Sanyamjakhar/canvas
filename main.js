function preload() {

}

function setup() {
    canvas = createCanvas(640, 480)
    canvas.position(100, 250)
    video = createCapture(VIDEO)
    video.hide()
}

function draw() {
    image(video, 200, 150, 200, 200)
    fill("red")
    stroke("cyan")
    circle(60, 60, 100);
    rect(45, 60, 35, 400, );
    circle(585, 60, 100);
    rect(100, 45, 500, 35)
    circle(60, 430, 100);
    rect(570, 60, 35, 400)
    circle(585, 430, 100);
    rect(100, 400, 500, 35)
}

function snap() {
    save("san.png")

}