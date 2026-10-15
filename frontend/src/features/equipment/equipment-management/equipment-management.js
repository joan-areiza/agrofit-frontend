document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carruselTrack');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    const tarjetas = document.querySelectorAll('.tarjeta-maquina');

    let currentIndex = 0;

    function getVisibleCards() {
        if (window.innerWidth <= 600) return 1;
        if (window.innerWidth <= 992) return 2;
        return 3;
    }

    function updateCarrusel() {
        const visibleCards = getVisibleCards();
        const maxIndex = tarjetas.length - visibleCards;
        
        if (currentIndex > maxIndex) currentIndex = maxIndex;
        if (currentIndex < 0) currentIndex = 0;

        const cardWidth = tarjetas[0].getBoundingClientRect().width;
        const gap = 20; // Coincide con el gap definido en el CSS
        const amountToMove = (cardWidth + gap) * currentIndex;

        track.style.transform = `translateX(-${amountToMove}px)`;
    }

    btnNext.addEventListener('click', () => {
        const visibleCards = getVisibleCards();
        if (currentIndex < tarjetas.length - visibleCards) {
            currentIndex++;
            updateCarrusel();
        }
    });

    btnPrev.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarrusel();
        }
    });

    window.addEventListener('resize', updateCarrusel);

    // Cambio de estado de máquinas
    document.querySelectorAll('.btn-accion').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.tarjeta-maquina');
            const estadoTag = card.querySelector('.etiqueta-estado');

            if (estadoTag.classList.contains('estado-operativa')) {
                estadoTag.classList.remove('estado-operativa');
                estadoTag.classList.add('estado-preventivo');
                estadoTag.textContent = 'Mantenimiento Preventivo';
                e.target.textContent = 'Cambiar a Operativa';
            } else {
                estadoTag.classList.remove('estado-preventivo');
                estadoTag.classList.add('estado-operativa');
                estadoTag.textContent = 'Operativa';
                e.target.textContent = 'Cambiar a Mantenimiento';
            }
        });
    });
});