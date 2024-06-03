const ball = document.getElementById('ball');
const hole = document.getElementById('hole');
const timeDisplay = document.getElementById('time');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('start-button');

let ballPosition = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let holePosition = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

let score = 0;
let time = 60;
let interval;
let gameActive = false;

function resetBall() {
    ballPosition = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    ball.style.left = `${ballPosition.x}px`;
    ball.style.top = `${ballPosition.y}px`;
}

function updateBallPosition(gamma, beta) {
    const maxTilt = 45;
    const maxMove = 5;

    let moveX = (gamma / maxTilt) * maxMove;
    let moveY = (beta / maxTilt) * maxMove;

    ballPosition.x += moveX;
    ballPosition.y += moveY;

    ballPosition.x = Math.max(0, Math.min(window.innerWidth - ball.offsetWidth, ballPosition.x));
    ballPosition.y = Math.max(0, Math.min(window.innerHeight - ball.offsetHeight, ballPosition.y));

    ball.style.left = `${ballPosition.x}px`;
    ball.style.top = `${ballPosition.y}px`;

    checkIfBallIn();
}

function checkIfBallIn() {
    const ballRect = ball.getBoundingClientRect();
    const holeRect = hole.getBoundingClientRect();

    if (
        ballRect.left < holeRect.right &&
        ballRect.right > holeRect.left &&
        ballRect.top < holeRect.bottom &&
        ballRect.bottom > holeRect.top
    ) {
        score++;
        scoreDisplay.textContent = score;
        resetBall();
    }
}

function startGame() {
    gameActive = true;

    score = 0;
    scoreDisplay.textContent = score;

    time = 60;
    timeDisplay.textContent = time;

    resetBall();

    interval = setInterval(() => {
        time--;
        timeDisplay.textContent = time;

        if (time <= 0) {
            clearInterval(interval);
            gameActive = false;
            alert('Game Over! Your score: ' + score);
            saveScore(score);
        }
    }, 1000);
}

function saveScore(score) {
    let scores = JSON.parse(localStorage.getItem('scores')) || [];
    scores.push({ score, date: new Date().toLocaleString() });
    localStorage.setItem('scores', JSON.stringify(scores));
}

window.addEventListener('deviceorientation', (event) => {
    if (!gameActive) return;

    const { beta, gamma } = event;
    updateBallPosition(gamma, beta);
});

startButton.addEventListener('click', startGame);

