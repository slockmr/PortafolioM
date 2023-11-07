const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Configuración del lienzo
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

class Particle {
    constructor(x, y, size, color, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}

function createRandomParticles() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;

    for (let i = 0; i < 5; i++) {
        const size = Math.random() * 15 + 2;
        const grayValue = Math.random() * 100; // Valor de gris entre 0 y 100
        const color = `hsl(0, 0%, ${grayValue}%)`; // Negro a gris claro
        const speedX = (Math.random() - 0.5) * 3; // Velocidad X aleatoria
        const speedY = (Math.random() - 0.5) * 3; // Velocidad Y aleatoria
        particles.push(new Particle(x, y, size, color, speedX, speedY));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        if (particle.size <= 0.2) {
            particles.splice(index, 1);
        }
    });
}

setInterval(createRandomParticles, 100); // Generar partículas cada segundo

animate();
