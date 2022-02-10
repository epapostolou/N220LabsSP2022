let ball = {
    xVel: 5,
    yVel: 5,
    ballX: 1,
    ballY: 300,
    size: 25,
    zero: 0,
    borderX: 800,
    borderY: 600,
    velSwap: -1,
    backgroundColor: "#152a4d",

}

let Xvelocity = 5;
let Yvelocity = 5
let circleX = 1;
let circleY = 300;
function setup() {
    createCanvas(800, 600);
    fill(255, 126, 180);


}
function draw() {
    background(ball.backgroundColor);
    circle(ball.ballX, ball.ballY, ball.size);

    ball.ballX = ball.ballX + ball.xVel;
    ball.ballY = ball.ballY + ball.yVel;

    if (ball.ballX <= ball.zero || ball.ballX >= ball.borderX) {
        ball.xVel = ball.xVel * ball.velSwap
    }
    if (ball.ballY <= ball.zero || ball.ballY >= ball.borderY) {
        ball.yVel = ball.yVel * ball.velSwap
    }

}
