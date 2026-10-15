document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carruselTrack');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    
    if (!track || !btnPrev || !btnNext) return;

    const cards = track.querySelectorAll('.tarjeta-programa');
    let currentIndex = 0;

    function getVisibleCards() {
        return window.innerWidth <= 820 ? 1 : 2;
    }

    function updateCarrusel() {
        const visibleCards = getVisibleCards();
        const maxIndex = cards.length - visibleCards;
        
        // Mantener el índice dentro de los límites
        if (currentIndex > maxIndex) currentIndex = maxIndex;
        if (currentIndex < 0) currentIndex = 0;

        const cardWidth = cards[0].getBoundingClientRect().width;
        const gap = 20; // Separación equivalente a 1.25rem
        const moveAmount = (cardWidth + gap) * currentIndex;

        track.style.transform = `translateX(-${moveAmount}px)`;

        // Estado de botones
        btnPrev.disabled = currentIndex === 0;
        btnNext.disabled = currentIndex >= maxIndex;
    }

    btnNext.addEventListener('click', () => {
        const visibleCards = getVisibleCards();
        const maxIndex = cards.length - visibleCards;
        if (currentIndex < maxIndex) {
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
    
    // Inicialización
    updateCarrusel();
});