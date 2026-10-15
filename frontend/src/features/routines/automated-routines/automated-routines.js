document.addEventListener("DOMContentLoaded", () => {
    const btnGenerar = document.getElementById("btn-generar");
    const textoBtn = document.getElementById("texto-btn");
    const tituloEstado = document.getElementById("titulo-estado");
    const descEstado = document.getElementById("desc-estado");
    const iconoEstado = document.getElementById("icono-estado");
    const contenedorResultado = document.getElementById("resultado-rutina");

    if (btnGenerar) {
        btnGenerar.addEventListener("click", () => {
            // 1. Estado de carga
            btnGenerar.disabled = true;
            if (textoBtn) textoBtn.textContent = "Procesando Biométricos...";

            if (iconoEstado) {
                iconoEstado.classList.add("cargando");
                iconoEstado.style.backgroundColor = "#FEF3C7";
                iconoEstado.style.color = "#D97706";
            }

            if (tituloEstado) tituloEstado.textContent = "Generando Plan Adaptado...";
            if (descEstado) descEstado.textContent = "Cruzando valoración clínica con tus metas de entrenamiento...";

            // 2. Transición a estado de Éxito
            setTimeout(() => {
                btnGenerar.style.display = "none"; // Oculta completamente el botón inicial

                if (iconoEstado) {
                    iconoEstado.classList.remove("cargando");
                    iconoEstado.style.backgroundColor = "#E8F5E9";
                    iconoEstado.style.color = "#39A900";
                    iconoEstado.innerHTML = `<ion-icon name="checkmark-done-circle-outline"></ion-icon>`;
                }

                if (tituloEstado) tituloEstado.textContent = "¡Rutina Generada Con Éxito!";
                if (descEstado) descEstado.textContent = "Se ha procesado tu perfil clínico y biométrico correctamente.";

                // 3. Renderizar los detalles y UN ÚNICO botón
                if (contenedorResultado) {
                    contenedorResultado.classList.remove("oculto");
                    contenedorResultado.innerHTML = `
                        <div class="alert alert-success border-0 shadow-sm rounded-3 p-3 my-3">
                            <h4 class="h6 fw-bold mb-2 text-success"><ion-icon name="sparkles-outline"></ion-icon> Detalles de la Rutina Creada:</h4>
                            <p class="small text-muted mb-1"><strong>Plan:</strong> Cardio & Fuerza - Plan Adaptado</p>
                            <p class="small text-muted mb-1"><strong>Parámetros:</strong> Límite FC: 140 BPM | Nivel Principiante</p>
                            <p class="small text-muted mb-0"><strong>Duración estimada:</strong> 50 min • 380 kcal</p>
                        </div>
                        
                        <div class="text-center mt-3">
                            <button id="btn-observar-rutinas" class="btn btn-success d-inline-flex align-items-center gap-2 px-4 py-2" style="border-radius: 12px; font-weight: 600;">
                                <ion-icon name="eye-outline"></ion-icon>
                                <span>Observar Mis Rutinas</span>
                            </button>
                        </div>
                    `;

                    // Al hacer clic, guarda la marca y redirige a la página completa de rutinas
                    // Dentro del evento click de 'btn-observar-rutinas'
                    document.getElementById("btn-observar-rutinas").addEventListener("click", () => {
                        localStorage.setItem('nuevaRutinaGenerada', 'true');
                        window.location.href = "/src/features/routines/learner-routines/learner-routines.html";
                    });
                }
            }, 1500);
        });
    }
});