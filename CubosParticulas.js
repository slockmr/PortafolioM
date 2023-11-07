    // Configuración de la escena
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("canvas-container").appendChild(renderer.domElement);

    // Creación de cubos (partículas) más grandes con color #ffb400
    const cubes = [];
    const cubeGeometry = new THREE.BoxGeometry(0.3, 0.3, 0.3); // Tamaño aumentado
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffb400 }); // Cambio de color

    for (let i = 0; i < 100; i++) {
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.set(Math.random() * 10 - 5, Math.random() * 10 - 5, -10);
        cubes.push(cube);
        scene.add(cube);
    }

    // Configuración de la cámara y posición inicial
    camera.position.z = 5;

    // Función de animación
    const animate = () => {
        requestAnimationFrame(animate);

        cubes.forEach(cube => {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
        });

        renderer.render(scene, camera);
    };

    // Iniciar la animación
    animate();
