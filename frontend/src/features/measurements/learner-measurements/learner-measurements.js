document.addEventListener("DOMContentLoaded", () => {
    // 1. CÁLCULO DINÁMICO DEL IMC
    const pesoInput = document.getElementById("peso");
    const alturaInput = document.getElementById("altura");
    const imcValor = document.getElementById("valor-imc");
    const imcEstado = document.getElementById("estado-imc");

    function calcularIMC() {
        const peso = parseFloat(pesoInput.value);
        const alturaCm = parseFloat(alturaInput.value);

        if (peso > 0 && alturaCm > 0) {
            const alturaM = alturaCm / 100;
            const imc = (peso / (alturaM * alturaM)).toFixed(1);
            imcValor.textContent = imc;

            if (imc < 25) {
                imcEstado.textContent = "Normal";
                imcEstado.className = "badge-imc imc-normal";
            } else {
                imcEstado.textContent = "Elevado";
                imcEstado.className = "badge-imc imc-alerta";
            }
        } else {
            imcValor.textContent = "--";
        }
        validarFormulario();
    }

    pesoInput?.addEventListener("input", calcularIMC);
    alturaInput?.addEventListener("input", calcularIMC);

    // 2. SLIDER DE ACTIVIDAD DIARIA
    const slider = document.getElementById("actividad-slider");
    const labelsSlider = document.querySelectorAll(".labels-slider span");

    slider?.addEventListener("input", (e) => {
        const val = e.target.value;
        labelsSlider.forEach(label => {
            if (label.getAttribute("data-step") === val) {
                label.classList.add("activo");
            } else {
                label.classList.remove("activo");
            }
        });
    });

    // 3. SELECCIÓN DE COMPLEXIÓN FÍSICA
    const cardsComplexion = document.querySelectorAll(".opcion-card");
    cardsComplexion.forEach(card => {
        card.addEventListener("click", () => {
            cardsComplexion.forEach(c => {
                c.classList.remove("seleccionada");
                c.querySelector(".avatar-letra").classList.remove("badge-verde");
                c.querySelector("ion-icon").setAttribute("name", "checkmark-circle-outline");
            });

            card.classList.add("seleccionada");
            card.querySelector(".avatar-letra").classList.add("badge-verde");
            card.querySelector("ion-icon").setAttribute("name", "checkmark-circle");
        });
    });

    // 4. SELECCIÓN DE MODO DE ENTRENAMIENTO
    const cardsModo = document.querySelectorAll(".card-modo");
    cardsModo.forEach(modo => {
        modo.addEventListener("click", () => {
            cardsModo.forEach(m => {
                m.classList.remove("seleccionado");
                m.querySelector(".tag-nivel").classList.remove("tag-verde");
                m.querySelector(".icono-check").setAttribute("name", "checkmark-circle-outline");
            });

            modo.classList.add("seleccionado");
            modo.querySelector(".tag-nivel").classList.add("tag-verde");
            modo.querySelector(".icono-check").setAttribute("name", "checkmark-circle");
        });
    });

    // 5. DRAG & DROP Y SUBIDA DE ARCHIVOS
    const zonaDrop = document.getElementById("zona-drop");
    const inputArchivo = document.getElementById("archivo-medico");
    const textoDrop = document.getElementById("texto-drop");

    zonaDrop?.addEventListener("dragover", (e) => {
        e.preventDefault();
        zonaDrop.classList.add("dragover");
    });

    zonaDrop?.addEventListener("dragleave", () => {
        zonaDrop.classList.remove("dragover");
    });

    zonaDrop?.addEventListener("drop", (e) => {
        e.preventDefault();
        zonaDrop.classList.remove("dragover");
        if (e.dataTransfer.files.length) {
            inputArchivo.files = e.dataTransfer.files;
            mostrarNombreArchivo(e.dataTransfer.files[0].name);
        }
    });

    inputArchivo?.addEventListener("change", () => {
        if (inputArchivo.files.length) {
            mostrarNombreArchivo(inputArchivo.files[0].name);
        }
    });

    function mostrarNombreArchivo(nombre) {
        textoDrop.textContent = `Archivo adjuntado: ${nombre}`;
    }

    // 6. VALIDACIÓN Y HABILITACIÓN DEL BOTÓN CONTINUAR
    const pechoInput = document.getElementById("pecho");
    const btnGuardar = document.getElementById("btn-guardar-valoracion");
    const alertaEstado = document.getElementById("alerta-estado");

    function validarFormulario() {
        const pesoValido = pesoInput.value !== "" && parseFloat(pesoInput.value) > 0;
        const alturaValida = alturaInput.value !== "" && parseFloat(alturaInput.value) > 0;
        const pechoValido = pechoInput.value !== "" && parseFloat(pechoInput.value) > 0;

        if (pesoValido && alturaValida && pechoValido) {
            btnGuardar.removeAttribute("disabled");
            alertaEstado.style.display = "none";
        } else {
            btnGuardar.setAttribute("disabled", "true");
            alertaEstado.style.display = "flex";
        }
    }

    pechoInput?.addEventListener("input", validarFormulario);
    
    // Ejecutar cálculo y validación al cargar
    calcularIMC();
});