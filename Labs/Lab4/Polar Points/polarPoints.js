function polarPoints(r) {
    let x = r * Math.sin(mouseX);
    let y = r * Math.cos(mouseX);
    return createVector(x, y);

}
function setup() {
    createCanvas(400, 400);
}
function draw() {
    let res = polarPoints(50)
    translate(200, 200)
    fill(random(255), random(255), random(255))
    circle(res.x, res.y, 10);
}
