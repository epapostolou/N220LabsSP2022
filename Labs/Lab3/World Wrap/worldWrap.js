let circleX = 0;

function setup() {
    createCanvas(800, 600);
    fill(255, 126, 180);

}

function draw() {
    background(0, 31, 61);

    circle(circleX, 300, 25);

    circleX = circleX + 5;

    if (circleX >= 800) {
        circleX = circleX - 800;
    }

    console.log(circleX);
}