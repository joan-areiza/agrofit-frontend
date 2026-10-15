document.addEventListener("DOMContentLoaded", () => {
    inicializarCarrusel();
});

function inicializarCarrusel() {
    const track = document.getElementById("carruselTrack");
    const contenedorIndicadores = document.getElementById("carruselIndicadores");
    const tarjetas = track.querySelectorAll(".tarjeta-metrica");

    if (!track || !contenedorIndicadores) return;

    contenedorIndicadores.innerHTML = "";

    // Generar puntos de navegación
    tarjetas.forEach((_, index) => {
        const punto = document.createElement("span");
        punto.classList.add("punto-indicador");
        if (index === 0) punto.classList.add("activo");
        contenedorIndicadores.appendChild(punto);
    });

    const puntos = contenedorIndicadores.querySelectorAll(".punto-indicador");

    // Sincronizar el indicador visible al deslizar
    track.addEventListener("scroll", () => {
        const anchoTarjeta = tarjetas[0].offsetWidth;
        const indiceActivo = Math.round(track.scrollLeft / anchoTarjeta);

        puntos.forEach((punto, i) => {
            punto.classList.toggle("activo", i === indiceActivo);
        });
    });
}

// Funciones para interactividad
function verVideo() {
    alert("Abriendo el reproductor de video biomecánico...");
}

function aprobarSolicitud(idElemento) {
    const elemento = document.getElementById(idElemento);
    if (elemento) {
        elemento.style.opacity = "0.4";
        elemento.style.pointerEvents = "none";
        setTimeout(() => {
            elemento.remove();
            actualizarConteoPendientes();
        }, 300);
    }
}

function actualizarConteoPendientes() {
    const contenedor = document.querySelector(".lista-solicitudes");
    if (contenedor && contenedor.children.length === 0) {
        contenedor.innerHTML = "<p style='text-align:center; color:#64748b;'>No hay solicitudes pendientes.</p>";
    }
}