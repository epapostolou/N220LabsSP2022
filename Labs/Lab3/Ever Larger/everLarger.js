let diameter = 1
function setup() {
    createCanvas(800, 600);
    fill(255, 126, 180);
}
function draw() {
    background(0, 31, 61);
    circle(400, 300, diameter)
    diameter++
    if (diameter >= 200) {
        diameter = 1;

    }
}