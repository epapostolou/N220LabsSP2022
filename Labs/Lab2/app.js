//Evan Apostolou
//1/18/2022
//n220
var eyes = 30
var smile = 50
function setup() {
    createCanvas(800, 600);
    //make base face (circle with skin tone)
    fill(212, 167, 108);
    circle(400, 300, 300);
    //draw eyes
    fill(255, 255, 255);
    circle(350, 250, eyes);
    circle(450, 250, eyes);
    //draw lips
    stroke(117, 21, 52);
    strokeWeight(25);
    fill(212, 167, 108);
    arc(400, 350, smile, smile, 0, PI);
}


