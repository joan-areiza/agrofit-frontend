document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carruselTrack');
    const slides = Array.from(track.children);
    const btnNext = document.getElementById('btnNext');
    const btnPrev = document.getElementById('btnPrev');
    const dotsContainer = document.getElementById('carruselDots');
    const dots = Array.from(dotsContainer.children);

    let currentIndex = 0;

    const updateCarrusel = (index) => {
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('activo'));
        dots[index].classList.add('activo');
    };

    btnNext?.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarrusel(currentIndex);
    });

    btnPrev?.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarrusel(currentIndex);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarrusel(currentIndex);
        });
    });

    const btnRegistrar = document.getElementById('btnRegistrar');
    if (btnRegistrar) {
        btnRegistrar.addEventListener('click', () => {
            btnRegistrar.style.backgroundColor = '#007832';
            btnRegistrar.innerHTML = `
                <span><ion-icon name="checkmark-done-outline"></ion-icon> ¡Asistencia Registrada!</span>
            `;
            btnRegistrar.disabled = true;
        });
    }
});