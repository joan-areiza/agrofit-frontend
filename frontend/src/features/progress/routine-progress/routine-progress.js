document.addEventListener('DOMContentLoaded', () => {
  // 1. Filtrado por Pestañas (Todos, Completados, Incompletos)
  const tabs = document.querySelectorAll('.tab-btn');
  const tarjetas = document.querySelectorAll('.tarjeta-actividad');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('activo'));
      tab.classList.add('activo');

      const filtro = tab.getAttribute('data-filtro');

      tarjetas.forEach(tarjeta => {
        if (filtro === 'todos') {
          tarjeta.style.display = 'block';
        } else {
          const estado = tarjeta.getAttribute('data-estado');
          tarjeta.style.display = (estado === filtro) ? 'block' : 'none';
        }
      });
    });
  });

  // 2. Búsqueda por texto
  const inputBuscar = document.getElementById('input-buscar');
  if (inputBuscar) {
    inputBuscar.addEventListener('input', (e) => {
      const texto = e.target.value.toLowerCase();
      
      tarjetas.forEach(tarjeta => {
        const titulo = tarjeta.querySelector('.actividad-titulo').textContent.toLowerCase();
        if (titulo.includes(texto)) {
          tarjeta.style.display = 'block';
        } else {
          tarjeta.style.display = 'none';
        }
      });
    });
  }
});