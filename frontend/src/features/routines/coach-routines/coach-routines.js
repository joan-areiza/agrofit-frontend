document.addEventListener('DOMContentLoaded', () => {
    // Redirección al presionar Configurar Rutina
    const btnConfigurar = document.getElementById('btnConfigurarRutina');
    if (btnConfigurar) {
        btnConfigurar.addEventListener('click', () => {
            window.location.href = '/src/features/routines/routine-management/routine-management.html';
        });
    }

    // Código existente del carrusel...
    const track = document.getElementById('carruselTrack');
    const btnNext = document.getElementById('carruselNext');
    const btnPrev = document.getElementById('carruselPrev');

    if (track && btnNext && btnPrev) {
        let scrollAmount = 0;

        btnNext.addEventListener('click', () => {
            const cardWidth = track.querySelector('.tarjeta-evidencia').offsetWidth + 16;
            const maxScroll = track.scrollWidth - track.clientWidth;
            
            if (scrollAmount < maxScroll) {
                scrollAmount += cardWidth;
                track.style.transform = `translateX(-${scrollAmount}px)`;
            }
        });

        btnPrev.addEventListener('click', () => {
            const cardWidth = track.querySelector('.tarjeta-evidencia').offsetWidth + 16;
            
            if (scrollAmount > 0) {
                scrollAmount -= cardWidth;
                if (scrollAmount < 0) scrollAmount = 0;
                track.style.transform = `translateX(-${scrollAmount}px)`;
            }
        });
    }
});