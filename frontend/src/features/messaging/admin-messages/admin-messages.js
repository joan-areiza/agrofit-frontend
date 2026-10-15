document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carrusel-track');
    const btnPrev = document.getElementById('carrusel-prev');
    const btnNext = document.getElementById('carrusel-next');
    const tarjetas = document.querySelectorAll('.tarjeta-imagen');
    const form = document.getElementById('form-alerta');

    // Desplazamiento del Carrusel
    btnNext.addEventListener('click', () => {
        track.scrollBy({ left: 150, behavior: 'smooth' });
    });

    btnPrev.addEventListener('click', () => {
        track.scrollBy({ left: -150, behavior: 'smooth' });
    });

    // Selección de Tarjeta de Imagen
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', () => {
            tarjetas.forEach(t => t.classList.remove('activa'));
            tarjeta.classList.add('activa');
        });
    });

    // Evento de Envío
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const titulo = document.getElementById('titulo-alerta').value;
        const prioridad = document.getElementById('prioridad-alerta').value;
        const mensaje = document.getElementById('mensaje-alerta').value;
        const imgSeleccionada = document.querySelector('.tarjeta-imagen.activa')?.dataset.img;

        console.log('Alerta Emitida:', { titulo, prioridad, mensaje, imgSeleccionada });
        alert('¡Alerta emitida exitosamente a todos los usuarios!');
        
        form.reset();
    });
});