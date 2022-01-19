let Xvelocity = 5;
let Yvelocity = 5
let circleX = 1;
let circleY = 300;
function setup() {
    createCanvas(800, 600);
    fill(255, 126, 180);


}
function draw() {
    background(0, 31, 61);
    circle(circleX, circleY, 25);

    circleX = circleX + Xvelocity;
    circleY = circleY + Yvelocity;

    if (circleX <= 0 || circleX >= 800) {
        Xvelocity = Xvelocity * -1
    }
    if (circleY <= 0 || circleY >= 600) {
        Yvelocity = Yvelocity * -1
    }

}
