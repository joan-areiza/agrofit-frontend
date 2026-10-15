// Lógica para alternar estado (Suspender / Activar)
function cambiarEstado(btn) {
    const fila = btn.closest('tr') || btn.closest('.tarjeta-usuario');
    const badgeEstado = fila.querySelector('.badge-estado');

    if (btn.classList.contains('btn-suspender')) {
        badgeEstado.textContent = 'Suspendido';
        badgeEstado.className = 'badge-estado suspendido';
        btn.textContent = 'Activar';
        btn.classList.remove('btn-suspender');
        btn.classList.add('btn-activar');
    } else {
        badgeEstado.textContent = 'Activo';
        badgeEstado.className = 'badge-estado activo';
        btn.textContent = 'Suspender';
        btn.classList.remove('btn-activar');
        btn.classList.add('btn-suspender');
    }
}

// Lógica para desplazamiento del carrusel en dispositivos móviles
function moverCarrusel(direccion) {
    const contenedor = document.getElementById('carruselUsuarios');
    const desplazar = contenedor.clientWidth * 0.8;
    contenedor.scrollBy({
        left: direccion * desplazar,
        behavior: 'smooth'
    });
}