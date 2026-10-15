document.addEventListener('DOMContentLoaded', () => {
    const pista = document.getElementById('carruselPista');
    const btnPrev = document.getElementById('carruselPrev');
    const btnNext = document.getElementById('carruselNext');

    if (pista && btnPrev && btnNext) {
        btnNext.addEventListener('click', () => {
            const desplazamiento = pista.clientWidth * 0.8;
            pista.scrollBy({ left: desplazamiento, behavior: 'smooth' });
        });

        btnPrev.addEventListener('click', () => {
            const desplazamiento = pista.clientWidth * 0.8;
            pista.scrollBy({ left: -desplazamiento, behavior: 'smooth' });
        });
    }
});