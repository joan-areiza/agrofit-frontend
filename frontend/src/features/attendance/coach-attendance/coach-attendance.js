document.addEventListener('DOMContentLoaded', () => {
    // 1. Control de Carruseles
    const carruseles = document.querySelectorAll('.carrusel-evidencias');

    carruseles.forEach(carrusel => {
        const pista = carrusel.querySelector('.carrusel-pista');
        const items = carrusel.querySelectorAll('.carrusel-item');
        const btnPrev = carrusel.querySelector('.btn-carrusel.prev');
        const btnNext = carrusel.querySelector('.btn-carrusel.next');
        
        let indiceActual = 0;
        const totalItems = items.length;

        function actualizarPosicion() {
            pista.style.transform = `translateX(-${indiceActual * 100}%)`;
        }

        btnNext.addEventListener('click', (e) => {
            e.preventDefault();
            indiceActual = (indiceActual + 1) % totalItems;
            actualizarPosicion();
        });

        btnPrev.addEventListener('click', (e) => {
            e.preventDefault();
            indiceActual = (indiceActual - 1 + totalItems) % totalItems;
            actualizarPosicion();
        });
    });

    // 2. Respaldo de Imágenes (Fallback por si se interrumpe la conexión)
    const imagenes = document.querySelectorAll('.img-evidencia');
    imagenes.forEach((img, i) => {
        img.addEventListener('error', () => {
            img.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='300' viewBox='0 0 600 300'><rect width='100%' height='100%' fill='%2339A900'/><text x='50%' y='50%' font-family='sans-serif' font-size='22' fill='%23ffffff' text-anchor='middle' dominant-baseline='middle'>Evidencia de Entrenamiento %23${i + 1}</text></svg>`;
        });
    });

    // 3. Eventos de Aprobar / Rechazar Solicitudes
    document.querySelectorAll('.btn-aprobar').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tarjeta = e.target.closest('.tarjeta-solicitud');
            const badge = tarjeta.querySelector('.estado-badge');
            
            badge.textContent = 'Aprobada';
            badge.className = 'estado-badge aprobado';
            
            const acciones = tarjeta.querySelector('.solicitud-acciones');
            if (acciones) acciones.remove();
        });
    });

    document.querySelectorAll('.btn-rechazar').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tarjeta = e.target.closest('.tarjeta-solicitud');
            const badge = tarjeta.querySelector('.estado-badge');
            
            badge.textContent = 'Rechazada';
            badge.className = 'estado-badge rechazada';
            badge.style.backgroundColor = '#f8d7da';
            badge.style.color = '#842029';
            
            const acciones = tarjeta.querySelector('.solicitud-acciones');
            if (acciones) acciones.remove();
        });
    });
});