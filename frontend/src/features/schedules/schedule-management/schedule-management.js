document.addEventListener('DOMContentLoaded', () => {
    const pista = document.getElementById('carruselPista');
    const tarjetas = Array.from(pista.children);
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    const contenedorIndicadores = document.getElementById('carruselIndicadores');
    
    let indiceActual = 0;

    // Crear puntos indicadores
    tarjetas.forEach((_, idx) => {
        const punto = document.createElement('span');
        punto.classList.add('punto-indicador');
        if (idx === 0) punto.classList.add('activo');
        punto.addEventListener('click', () => irASlide(idx));
        contenedorIndicadores.appendChild(punto);
    });

    const puntos = Array.from(contenedorIndicadores.children);

    function actualizarCarrusel() {
        // En pantallas pequeñas funciona como carrusel, en grandes mantiene la cuadrícula 2x2
        if (window.innerWidth <= 850) {
            pista.style.transform = `translateX(-${indiceActual * 100}%)`;
        } else {
            pista.style.transform = 'translateX(0)';
        }

        puntos.forEach((punto, idx) => {
            punto.classList.toggle('activo', idx === indiceActual);
        });
    }

    function irASlide(indice) {
        indiceActual = indice;
        actualizarCarrusel();
    }

    btnNext.addEventListener('click', () => {
        indiceActual = (indiceActual + 1) % tarjetas.length;
        actualizarCarrusel();
    });

    btnPrev.addEventListener('click', () => {
        indiceActual = (indiceActual - 1 + tarjetas.length) % tarjetas.length;
        actualizarCarrusel();
    });

    // Escucha de cambio de tamaño corregida pasándole directamente la función callback
    window.addEventListener('resize', actualizarCarrusel);
});