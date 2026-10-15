document.addEventListener('DOMContentLoaded', () => {
    // 1. Alternar estado activo en botones de filtro
    const filtroBtns = document.querySelectorAll('.filtro-btn');
    
    filtroBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filtroBtns.forEach(b => b.classList.remove('activo'));
            this.classList.add('activo');
        });
    });

    // 2. Selección de elemento de mensaje
    const mensajes = document.querySelectorAll('.item-mensaje');
    
    mensajes.forEach(mensaje => {
        mensaje.addEventListener('click', function() {
            mensajes.forEach(m => m.classList.remove('activo'));
            this.classList.add('activo');
            
            // Si el mensaje no estaba leído, remueve el estado
            if (this.classList.contains('no-leido')) {
                this.classList.remove('no-leido');
                const indicador = this.querySelector('.indicador-no-leido');
                if (indicador) indicador.remove();
            }
        });
    });
});