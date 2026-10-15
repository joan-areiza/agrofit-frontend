document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carruselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Verificar que los elementos existan en el DOM
    if (!track || !prevBtn || !nextBtn) return;

    let index = 0;

    // Función para obtener la cantidad de tarjetas visibles según la pantalla
    function getVisibleCards() {
        return window.innerWidth <= 600 ? 1 : 2;
    }

    // Función principal para mover el carrusel
    function updateCarousel() {
        const cards = track.querySelectorAll('.tarjeta-novedad');
        const totalCards = cards.length;
        if (totalCards === 0) return;

        const visibleCards = getVisibleCards();
        const maxIndex = Math.max(0, totalCards - visibleCards);

        // Asegurar que el índice no se salga de los límites
        if (index < 0) index = 0;
        if (index > maxIndex) index = maxIndex;

        // Obtener el ancho real de la primera tarjeta y el espacio (gap)
        const firstCard = cards[0];
        const cardWidth = firstCard.offsetWidth;
        
        // Obtener el gap en px (si la pantalla es <= 600px no aplica offset por gap adicional entre dos tarjetas visibles)
        const style = window.getComputedStyle(track);
        const gap = parseFloat(style.gap) || 16; 

        // Desplazamiento exacto: ancho tarjeta + espacio entre ellas
        const moveAmount = (cardWidth + gap) * index;

        track.style.transform = `translateX(-${moveAmount}px)`;
    }

    // Evento Botón Siguiente
    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const cards = track.querySelectorAll('.tarjeta-novedad');
        const visibleCards = getVisibleCards();
        const maxIndex = cards.length - visibleCards;

        if (index < maxIndex) {
            index++;
            updateCarousel();
        }
    });

    // Evento Botón Anterior
    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (index > 0) {
            index--;
            updateCarousel();
        }
    });

    // Recalcular al redimensionar la ventana
    window.addEventListener('resize', () => {
        updateCarousel();
    });

    // Ejecutar ajuste inicial
    updateCarousel();
});