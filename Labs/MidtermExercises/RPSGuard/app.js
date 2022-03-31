let userScore = 0;
let scoreBoard = document.getElementById("score");
let outputMove = document.getElementById("output");

function compMove(compMoves) {
    return Math.floor(Math.random() * compMoves);
}

function guard() {
    userScore -= 0.5;
    outputMove.innerHTML = "You chose to guard!";
    scoreBoard.innerHTML = "Score: " + userScore;
}

function rock() {
    if (compMove(3) == 0) {
        outputMove.innerHTML = "The computer chose rock! You chose rock! Rock is the same as rock.";
    } else if (compMove(3) == 1) {
        outputMove.innerHTML = "The computer chose paper! You chose rock! Paper beats rock.";
        userScore--;
    } else if (compMove(3) == 2) {
        outputMove.innerHTML = "The computer chose scissors! You chose rock! Scissors does not beat rock.";
        userScore++;
    }
    scoreBoard.innerHTML = "Score: " + userScore;
}

function paper() {
    if (compMove(3) == 1) {
        outputMove.innerHTML = "The computer chose paper! You chose paper! Paper is the same as paper.";
    } else if (compMove(3) == 2) {
        outputMove.innerHTML = "The computer chose scissors! You chose paper! Scissors beats paper.";
        userScore--;
    } else if (compMove(3) == 0) {
        outputMove.innerHTML = "The computer chose rock! You chose paper! Rock does not beat paper.";
        userScore++;
    }
    scoreBoard.innerHTML = "Score: " + userScore;
}

function scissors() {
    if (compMove(3) == 2) {
        outputMove.innerHTML = "The computer chose scissors! You chose scissors! Scissors is the same as scissors.";
    } else if (compMove(3) == 0) {
        outputMove.innerHTML = "The computer chose rock! You chose scissors! Rock beats scissors."
        userScore--;
    } else if (compMove(3) == 1) {
        outputMove.innerHTML = "The computer chose paper! You chose scissors! Paper does not beat scissors."
        userScore++;
    }
    scoreBoard.innerHTML = "Score: " + userScore;
}

document.body.appendChild(outputMove);
document.body.appendChild(scoreBoard);