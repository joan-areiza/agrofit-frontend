document.addEventListener("DOMContentLoaded", () => {
    // Carrusel de tarjetas
    const contenedor = document.getElementById("carruselMetricas");
    const btnPrev = document.getElementById("btnPrev");
    const btnNext = document.getElementById("btnNext");

    if (btnPrev && btnNext && contenedor) {
        btnNext.addEventListener("click", () => {
            contenedor.scrollBy({ left: 280, behavior: "smooth" });
        });

        btnPrev.addEventListener("click", () => {
            contenedor.scrollBy({ left: -280, behavior: "smooth" });
        });
    }

    // Formulario de Validación de Ingreso
    const formIngreso = document.getElementById("formIngreso");
    const inputDoc = document.getElementById("documentoInput");
    const msg = document.getElementById("mensajeIngreso");

    if (formIngreso) {
        formIngreso.addEventListener("submit", (e) => {
            e.preventDefault();
            const val = inputDoc.value.trim();
            if (val.length >= 6) {
                msg.style.color = "#15803D";
                msg.textContent = `Acceso AUTORIZADO para el documento ${val}.`;
                inputDoc.value = "";
            } else {
                msg.style.color = "#DC2626";
                msg.textContent = "Ingrese un número de documento válido.";
            }
        });
    }
});

// Función para alternar estado de desinfección en el checklist
function toggleHigiene(btn) {
    const item = btn.closest(".item-higiene");
    const isCompletado = item.classList.contains("completado");

    if (isCompletado) {
        item.classList.remove("completado");
        item.classList.add("pendiente");
        btn.innerHTML = "Pendiente";
    } else {
        item.classList.remove("pendiente");
        item.classList.add("completado");
        btn.innerHTML = `<ion-icon name="checkmark-outline"></ion-icon> Lista`;
    }

    actualizarContadorHigiene();
}

function actualizarContadorHigiene() {
    const total = document.querySelectorAll(".item-higiene").length;
    const completados = document.querySelectorAll(".item-higiene.completado").length;
    const contador = document.getElementById("contadorDesinfectadas");
    if (contador) {
        contador.innerHTML = `${completados} <span>/ ${total}</span>`;
    }
}