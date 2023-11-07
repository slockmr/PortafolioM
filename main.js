

    // Punto 2: Animación de Carga
    // Agrega aquí código para una animación de carga si lo deseas

    // Punto 3: Botón de Volver Arriba
    const scrollTopButton = document.createElement("button");
    scrollTopButton.className = "btn scroll-top";
    scrollTopButton.textContent = "Volver Arriba";
    document.body.appendChild(scrollTopButton);

    scrollTopButton.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    // Puntos 5-8: Animación de Elementos
    const sections = document.querySelectorAll("section");

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            }
        });
    }, options);

    sections.forEach(function (section) {
        observer.observe(section);
    });
