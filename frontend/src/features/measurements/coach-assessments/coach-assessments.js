document.addEventListener('DOMContentLoaded', () => {
    // ELEMENTOS DEL CARRUSEL
    const wrapper = document.getElementById('carruselWrapper');
    const track = document.getElementById('carruselTrack');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    const inputBuscar = document.getElementById('inputBuscar');
    const filtroFicha = document.getElementById('filtroFicha');

    // ELEMENTOS DEL MODAL
    const modalMensaje = document.getElementById('modalMensaje');
    const modalNombreAprendiz = document.getElementById('modalNombreAprendiz');
    const btnCerrarModal = document.getElementById('btnCerrarModal');
    const formMensaje = document.getElementById('formMensaje');

    let currentTranslate = 0;

    // Calcular desplazamiento exacto (evita que queden espacios vacíos a la derecha)
    const getMaxScroll = () => {
        const trackWidth = track.scrollWidth;
        const wrapperWidth = wrapper.clientWidth;
        const max = trackWidth - wrapperWidth;
        return max > 0 ? max : 0;
    };

    const getStepWidth = () => {
        const card = track.querySelector('.tarjeta-aprendiz:not([style*="display: none"])');
        if (!card) return 300;
        const style = window.getComputedStyle(track);
        const gap = parseFloat(style.gap) || 0;
        return card.offsetWidth + gap;
    };

    const updateCarousel = (newTranslate) => {
        const maxScroll = getMaxScroll();
        
        // Limitar entre 0 y el máximo de desplazamiento real
        if (newTranslate < 0) newTranslate = 0;
        if (newTranslate > maxScroll) newTranslate = maxScroll;

        currentTranslate = newTranslate;
        track.style.transform = `translateX(-${currentTranslate}px)`;

        // Actualizar estado de los botones
        if (btnPrev && btnNext) {
            btnPrev.disabled = currentTranslate <= 0;
            btnNext.disabled = currentTranslate >= maxScroll || maxScroll === 0;
        }
    };

    if (btnNext) {
        btnNext.addEventListener('click', () => {
            const step = getStepWidth();
            updateCarousel(currentTranslate + step);
        });
    }

    if (btnPrev) {
        btnPrev.addEventListener('click', () => {
            const step = getStepWidth();
            updateCarousel(currentTranslate - step);
        });
    }

    // FILTRADO (Búsqueda y Ficha)
    const filtrarAprendices = () => {
        const textoBusqueda = inputBuscar.value.toLowerCase().trim();
        const fichaSeleccionada = filtroFicha.value;
        const tarjetas = track.querySelectorAll('.tarjeta-aprendiz');

        tarjetas.forEach(tarjeta => {
            const nombre = tarjeta.getAttribute('data-nombre');
            const ficha = tarjeta.getAttribute('data-ficha');

            const coincideNombre = nombre.includes(textoBusqueda);
            const coincideFicha = fichaSeleccionada === 'todas' || ficha === fichaSeleccionada;

            if (coincideNombre && coincideFicha) {
                tarjeta.style.display = 'flex';
            } else {
                tarjeta.style.display = 'none';
            }
        });

        // Reiniciar al inicio sin dejar huecos vacíos
        updateCarousel(0);
    };

    inputBuscar.addEventListener('input', filtrarAprendices);
    filtroFicha.addEventListener('change', filtrarAprendices);

    // LÓGICA DEL MODAL
    const abrirModal = (nombreAprendiz) => {
        modalNombreAprendiz.textContent = nombreAprendiz;
        modalMensaje.classList.add('activo');
        document.body.style.overflow = 'hidden'; // Deshabilitar scroll de fondo
    };

    const cerrarModal = () => {
        modalMensaje.classList.remove('activo');
        document.body.style.overflow = '';
        formMensaje.reset();
    };

    // Event listener delegado para los botones de "Enviar Mensaje"
    track.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-abrir-modal');
        if (btn) {
            const tarjeta = btn.closest('.tarjeta-aprendiz');
            const primerNombre = tarjeta.getAttribute('data-primer-nombre') || 'Aprendiz';
            abrirModal(primerNombre);
        }
    });

    btnCerrarModal.addEventListener('click', cerrarModal);

    // Cerrar al hacer clic fuera del modal
    modalMensaje.addEventListener('click', (e) => {
        if (e.target === modalMensaje) {
            cerrarModal();
        }
    });

    // Enviar Formulario
    formMensaje.addEventListener('submit', (e) => {
        e.preventDefault();
        alert(`Mensaje enviado con éxito a ${modalNombreAprendiz.textContent}`);
        cerrarModal();
    });

    // Re-calcular si la ventana cambia de tamaño
    window.addEventListener('resize', () => {
        updateCarousel(currentTranslate);
    });

    // Inicialización inicial
    updateCarousel(0);
});