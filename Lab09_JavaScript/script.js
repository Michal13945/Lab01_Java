const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

let balls = [];
let animationFrameId;

function start() {
    const count = parseInt(document.getElementById('count').value);
    const distance = parseInt(document.getElementById('distance').value);

    balls = generateBalls(count);

    startAnimation(distance);
}

function reset() {
    cancelAnimationFrame(animationFrameId);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    balls = [];
}

function generateBalls(num) {
    let ballsArray = [];

    for (let i = 0; i < num; i++) {
        let ball = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 4,
            vy: (Math.random() - 0.5) * 4,
            radius: 10
        };

        ballsArray.push(ball);
    }

    return ballsArray;
}

function drawBall(ball) {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
}

function drawLine(ball1, ball2) {
    ctx.beginPath();
    ctx.moveTo(ball1.x, ball1.y);
    ctx.lineTo(ball2.x, ball2.y);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.closePath();
}

function updateBall(ball) {
    ball.x += ball.vx;
    ball.y += ball.vy;

    if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) {
        ball.vx *= -1;
    }
    if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
        ball.vy *= -1;
    }
}

function startAnimation(distance) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i];

        updateBall(ball);
        drawBall(ball);

        for (let j = i + 1; j < balls.length; j++) {
            let otherBall = balls[j];

            let dx = ball.x - otherBall.x;
            let dy = ball.y - otherBall.y;

            let dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < distance) {
                drawLine(ball, otherBall);
            }
        }
    }

    animationFrameId = requestAnimationFrame(() => startAnimation(distance));
}

document.getElementById('start-button').addEventListener('click', start);
document.getElementById('reset-button').addEventListener('click', reset);
