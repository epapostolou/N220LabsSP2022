let TV = {
    x: 300,
    y: 100,
    width: 100,
    height: 100,
    colorOn: "'145, 159, 161'",
    colorOff: "'208, 218, 219'",

}

function setup() {
    createCanvas(800, 600);
    background("aqua");
}
function makeTV() {
    fill('TV.colorON')
    rect(TV.x, TV.y, TV.width, TV.height); //TV body
    fill('TV.colorOff')
    rect(TV.x + 25, TV.y + 25, TV.width / 2, TV.height / 2)//TV Screen
    fill('TV.colorOff')
}
function draw() {
    makeTV();
}

