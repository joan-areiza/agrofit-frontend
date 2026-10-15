document.addEventListener('DOMContentLoaded', () => {
    const carrusel = id('carrusel-ejercicios');
    const contador = id('contador-seleccionados');
    const formRutina = id('form-crear-rutina');
    const listaBanco = id('lista-banco-rutinas');

    function id(str) { return document.getElementById(str); }

    // Actualizar contador y estado visual de checkboxes
    function actualizarEjercicios() {
        const items = carrusel.querySelectorAll('.item-ejercicio');
        let seleccionados = 0;

        items.forEach(item => {
            const checkbox = item.querySelector('input[type="checkbox"]');
            if (checkbox.checked) {
                item.classList.add('seleccionado');
                seleccionados++;
            } else {
                item.classList.remove('seleccionado');
            }
        });

        contador.textContent = seleccionados;
    }

    // Evento de selección en la lista
    carrusel.addEventListener('change', (e) => {
        if (e.target.tagName === 'INPUT') {
            actualizarEjercicios();
        }
    });

    // Guardar y agregar al Banco de Rutinas
    formRutina.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = id('nombre-rutina').value;
        const objetivo = id('objetivo-rutina').value;
        const seleccionados = carrusel.querySelectorAll('input[type="checkbox"]:checked').length;

        if (seleccionados === 0) {
            alert('Debes seleccionar al menos un ejercicio.');
            return;
        }

        // Crear nueva tarjeta para el banco
        const nuevaRutina = document.createElement('div');
        nuevaRutina.className = 'card-rutina-banco';
        nuevaRutina.innerHTML = `
            <div class="info-rutina-banco">
                <span class="badge-tag tag-objetivo">${objetivo}</span>
                <h3 class="nombre-rutina-banco">${nombre}</h3>
                <p class="meta-rutina-banco">${seleccionados} ejercicios configurados</p>
            </div>
            <button type="button" class="btn-eliminar-rutina" aria-label="Eliminar rutina">
                <ion-icon name="trash-outline"></ion-icon>
            </button>
        `;

        listaBanco.prepend(nuevaRutina);
        formRutina.reset();
        actualizarEjercicios();
    });

    // Eliminar rutina del banco
    listaBanco.addEventListener('click', (e) => {
        const btnEliminar = e.target.closest('.btn-eliminar-rutina');
        if (btnEliminar) {
            const tarjeta = btnEliminar.closest('.card-rutina-banco');
            tarjeta.remove();
        }
    });

    actualizarEjercicios();
});