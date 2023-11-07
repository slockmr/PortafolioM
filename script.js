const square = document.getElementById("animated-square");
const startStopButton = document.getElementById("start-stop-button");

let animationRunning = false;
let currentPosition = 0;

function startAnimation() {
    if (!animationRunning) {
        animationRunning = true;
        startStopButton.textContent = "Detener Animación";

        function animate() {
            currentPosition += 5;
            square.style.transform = `translateX(${currentPosition}px)`;

            if (currentPosition >= window.innerWidth) {
                currentPosition = -50;
            }

            if (animationRunning) {
                requestAnimationFrame(animate);
            }
        }

        animate();
    } else {
        animationRunning = false;
        startStopButton.textContent = "Iniciar Animación";
    }
}

startStopButton.addEventListener("click", startAnimation);
