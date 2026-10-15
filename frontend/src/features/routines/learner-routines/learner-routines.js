const rutinasData = {
    adaptada: {
        titulo: "Cardio & Fuerza - Plan Adaptado",
        descripcion: "Plan personalizado según valoración médica (Límite FC: 140 BPM, Nivel Principiante).",
        dificultad: "Nueva",
        tiempo: "50 min",
        kcal: "380 kcal",
        img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=400&q=80",
        ejercicios: [
            {
                nombre: "Calentamiento en Bicicleta",
                series: "1 serie",
                reps: "10 min",
                peso: "FC < 120",
                img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=100&q=80"
            },
            {
                nombre: "Prensa de Piernas Guiada",
                series: "3 series",
                reps: "12 reps",
                peso: "40kg",
                img: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&w=100&q=80"
            },
            {
                nombre: "Polea al Pecho (Máquina)",
                series: "3 series",
                reps: "12 reps",
                peso: "25kg",
                img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=100&q=80"
            },
            {
                nombre: "Caminadora Inclinada Moderada",
                series: "1 serie",
                reps: "15 min",
                peso: "FC Máx 135",
                img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=100&q=80"
            }
        ]
    },

    push: {
        titulo: "Push Day - Hipertrofia",
        descripcion: "Enfoque en pecho, hombros y tríceps para máxima ganancia muscular.",
        dificultad: "Alta",
        tiempo: "65 min",
        kcal: "450 kcal",
        img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
        ejercicios: [
            {
                nombre: "Press de Banca Plano",
                series: "4 series",
                reps: "8-10 reps",
                peso: "80kg",
                img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=100&q=80"
            },
            {
                nombre: "Press Militar con Barra",
                series: "3 series",
                reps: "10-12 reps",
                peso: "40kg",
                img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=100&q=80"
            },
            {
                nombre: "Aperturas en Polea Alta",
                series: "3 series",
                reps: "15 reps",
                peso: "15kg",
                img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=100&q=80"
            },
            {
                nombre: "Elevaciones Laterales",
                series: "4 series",
                reps: "12-15 reps",
                peso: "10kg",
                img: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?auto=format&fit=crop&w=100&q=80"
            }
        ]
    },

    leg: {
        titulo: "Leg Day - Fuerza Base",
        descripcion: "Construcción de potencia en tren inferior con ejercicios compuestos.",
        dificultad: "Alta",
        tiempo: "75 min",
        kcal: "600 kcal",
        img: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&w=400&q=80",
        ejercicios: [
            {
                nombre: "Sentadilla Libre con Barra",
                series: "4 series",
                reps: "6-8 reps",
                peso: "100kg",
                img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=100&q=80"
            },
            {
                nombre: "Prensa 45°",
                series: "4 series",
                reps: "10-12 reps",
                peso: "160kg",
                img: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&w=100&q=80"
            },
            {
                nombre: "Peso Muerto Rumano",
                series: "3 series",
                reps: "10 reps",
                peso: "70kg",
                img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=100&q=80"
            },
            {
                nombre: "Extensión de Cuádriceps",
                series: "3 series",
                reps: "15 reps",
                peso: "45kg",
                img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=100&q=80"
            }
        ]
    },

    hiit: {
        titulo: "Full Body HIIT",
        descripcion: "Sesión metabólica de alta intensidad para quema de grasa.",
        dificultad: "Media",
        tiempo: "45 min",
        kcal: "550 kcal",
        img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=400&q=80",
        ejercicios: [
            {
                nombre: "Kettlebell Swings",
                series: "4 series",
                reps: "45 seg",
                peso: "16kg",
                img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=100&q=80"
            },
            {
                nombre: "Burpees",
                series: "4 series",
                reps: "45 seg",
                peso: "Corporal",
                img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=100&q=80"
            },
            {
                nombre: "Mountain Climbers",
                series: "4 series",
                reps: "45 seg",
                peso: "Corporal",
                img: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&w=100&q=80"
            }
        ]
    }
};


/* ============================================================
   INICIALIZACIÓN
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    const track = document.getElementById("carruselTrack");

    const tieneNuevaRutina =
        localStorage.getItem("nuevaRutinaGenerada") === "true";

    /*
     * Si existe una nueva rutina:
     * - La agregamos al inicio.
     * - La seleccionamos.
     * - Cargamos sus ejercicios.
     * - Posicionamos el carrusel en la primera tarjeta.
     */
    if (tieneNuevaRutina && track) {

        const rutina = rutinasData.adaptada;

        /*
         * Evita duplicar la rutina adaptada si ya existe.
         */
        const cardExistente = track.querySelector(
            '[data-rutina="adaptada"]'
        );

        if (cardExistente) {

            cardExistente.remove();

        }

        /*
         * Quitar selección de las tarjetas existentes.
         */
        track.querySelectorAll(".card-plan").forEach(card => {
            card.classList.remove("activa");
        });

        /*
         * Crear nueva tarjeta.
         */
        const nuevaCardHTML = `
            <article
                class="card-plan activa"
                data-rutina="adaptada"
            >

                <span class="badge-dificultad media">
                    Nueva
                </span>

                <img
                    src="${rutina.img}"
                    alt="${rutina.titulo}"
                >

                <div class="card-plan-content">

                    <h4>${rutina.titulo}</h4>

                    <p>${rutina.descripcion}</p>

                    <ul class="plan-stats">

                        <li>
                            <ion-icon name="time-outline"></ion-icon>
                            ${rutina.tiempo}
                        </li>

                        <li>
                            <ion-icon name="flame-outline"></ion-icon>
                            ${rutina.kcal}
                        </li>

                    </ul>

                </div>

            </article>
        `;

        /*
         * Insertar SIEMPRE como primera tarjeta.
         */
        track.insertAdjacentHTML(
            "afterbegin",
            nuevaCardHTML
        );

        /*
         * Cargar ejercicios inmediatamente.
         */
        cargarEjercicios(rutina);

        /*
         * Ya procesamos la nueva rutina.
         */
        localStorage.removeItem("nuevaRutinaGenerada");
    }


    /*
     * Esperar a que el navegador calcule dimensiones.
     */
    requestAnimationFrame(() => {

        requestAnimationFrame(() => {

            inicializarCarruselYEventos();

        });

    });

});


/* ============================================================
   CARRUSEL
   ============================================================ */

function inicializarCarruselYEventos() {

    const track =
        document.getElementById("carruselTrack");

    const container =
        document.querySelector(".carrusel-track-container");

    const btnNext =
        document.getElementById("btnNext");

    const btnPrev =
        document.getElementById("btnPrev");


    if (!track || !container) {
        return;
    }


    const cards =
        Array.from(track.querySelectorAll(".card-plan"));


    if (cards.length === 0) {
        return;
    }


    let currentIndex = 0;


    /*
     * Calcula dinámicamente cuántas tarjetas caben.
     * Ya NO usamos siempre 3.
     */
    function obtenerCardsVisibles() {

        const containerWidth =
            container.getBoundingClientRect().width;

        if (!containerWidth) {
            return 1;
        }


        const cardWidth =
            cards[0].getBoundingClientRect().width;


        const estiloTrack =
            window.getComputedStyle(track);

        const gap =
            parseFloat(estiloTrack.columnGap) ||
            parseFloat(estiloTrack.gap) ||
            16;


        return Math.max(
            1,
            Math.floor(
                (containerWidth + gap) /
                (cardWidth + gap)
            )
        );
    }


    function actualizarBotones() {

        const cardsVisibles =
            obtenerCardsVisibles();

        const maxIndex =
            Math.max(
                0,
                cards.length - cardsVisibles
            );


        if (btnPrev) {

            btnPrev.style.opacity =
                currentIndex <= 0
                    ? "0.3"
                    : "1";

            btnPrev.disabled =
                currentIndex <= 0;
        }


        if (btnNext) {

            btnNext.style.opacity =
                currentIndex >= maxIndex
                    ? "0.3"
                    : "1";

            btnNext.disabled =
                currentIndex >= maxIndex;
        }
    }


    function moverCarrusel(direccion) {

        const cardsVisibles =
            obtenerCardsVisibles();

        const maxIndex =
            Math.max(
                0,
                cards.length - cardsVisibles
            );


        if (direccion === "next") {

            currentIndex =
                Math.min(
                    currentIndex + 1,
                    maxIndex
                );

        } else if (direccion === "prev") {

            currentIndex =
                Math.max(
                    currentIndex - 1,
                    0
                );
        }


        /*
         * IMPORTANTE:
         * El gap se obtiene directamente del CSS.
         * Ya no está fijado artificialmente en 24px.
         */
        const cardWidth =
            cards[0].getBoundingClientRect().width;


        const estiloTrack =
            window.getComputedStyle(track);

        const gap =
            parseFloat(estiloTrack.columnGap) ||
            parseFloat(estiloTrack.gap) ||
            16;


        const desplazamiento =
            currentIndex *
            (cardWidth + gap);


        track.style.transform =
            `translate3d(-${desplazamiento}px, 0, 0)`;


        actualizarBotones();
    }


    /*
     * Eventos de botones.
     */
    if (btnNext) {

        btnNext.onclick = () => {
            moverCarrusel("next");
        };

    }


    if (btnPrev) {

        btnPrev.onclick = () => {
            moverCarrusel("prev");
        };

    }


    /*
     * Eventos de las cards.
     */
    cards.forEach(card => {

        card.onclick = () => {

            cards.forEach(c => {
                c.classList.remove("activa");
            });


            card.classList.add("activa");


            const rutinaKey =
                card.getAttribute("data-rutina");


            if (
                rutinaKey &&
                rutinasData[rutinaKey]
            ) {

                cargarEjercicios(
                    rutinasData[rutinaKey]
                );

            }

        };

    });


    /*
     * Estado inicial.
     *
     * La nueva rutina está en la posición 0,
     * por lo tanto se muestra inmediatamente.
     */
    currentIndex = 0;

    track.style.transform =
        "translate3d(0, 0, 0)";


    actualizarBotones();


    escucharCheckboxes();


    /*
     * Recalcular cuando cambia el tamaño
     * de la ventana.
     */
    window.addEventListener(
        "resize",
        () => {

            currentIndex = 0;

            track.style.transform =
                "translate3d(0, 0, 0)";

            actualizarBotones();

        }
    );
}


/* ============================================================
   CARGAR EJERCICIOS
   ============================================================ */

function cargarEjercicios(plan) {

    const ejerciciosSeccion =
        document.querySelector(
            ".ejercicios-seccion"
        );


    if (!ejerciciosSeccion) {
        return;
    }


    const header =
        ejerciciosSeccion.querySelector(
            ".ejercicios-header"
        );


    if (header) {

        const titulo =
            header.querySelector("h3");

        const descripcion =
            header.querySelector("p");


        if (titulo) {
            titulo.innerText = plan.titulo;
        }


        if (descripcion) {
            descripcion.innerText =
                plan.descripcion;
        }

    }


    const contenedorLista =
        document.querySelector(
            ".ejercicios-lista"
        );


    if (!contenedorLista) {
        return;
    }


    contenedorLista.innerHTML = "";


    plan.ejercicios.forEach(ej => {

        const itemHTML = `
            <label class="item-ejercicio">

                <img
                    src="${ej.img}"
                    alt="${ej.nombre}"
                >

                <div class="ejercicio-info">

                    <h5>
                        ${ej.nombre}
                    </h5>

                    <p>
                        ${ej.series}
                        •
                        ${ej.reps}
                        •
                        <span>${ej.peso}</span>
                    </p>

                </div>

                <input
                    type="checkbox"
                    class="check-ejercicio"
                >

            </label>
        `;


        contenedorLista.insertAdjacentHTML(
            "beforeend",
            itemHTML
        );

    });


    actualizarProgreso();

    escucharCheckboxes();
}


/* ============================================================
   CHECKBOXES
   ============================================================ */

function escucharCheckboxes() {

    const checkboxes =
        document.querySelectorAll(
            ".check-ejercicio"
        );


    checkboxes.forEach(check => {

        /*
         * Evita registrar el mismo listener
         * múltiples veces.
         */
        check.onchange =
            actualizarProgreso;

    });
}


/* ============================================================
   PROGRESO
   ============================================================ */

function actualizarProgreso() {

    const checkboxes =
        document.querySelectorAll(
            ".check-ejercicio"
        );


    const marcados =
        document.querySelectorAll(
            ".check-ejercicio:checked"
        ).length;


    const porcentaje =
        checkboxes.length > 0
            ? Math.round(
                (marcados /
                checkboxes.length) * 100
            )
            : 0;


    const fill =
        document.querySelector(
            ".progreso-fill"
        );


    const text =
        document.querySelector(
            ".progreso-bar-container span"
        );


    if (fill) {

        fill.style.width =
            `${porcentaje}%`;

    }


    if (text) {

        text.innerText =
            `${porcentaje}%`;

    }
}


/* ============================================================
   TEMPORIZADOR
   ============================================================ */

let countdownInterval = null;

let tiempoRestante = 60 * 60;

let timerCorriendo = false;


/* ============================================================
   CONFIRMACIÓN
   ============================================================ */

function solicitarConfirmacion() {

    const modalEl =
        document.getElementById(
            "confirmModal"
        );


    if (
        !timerCorriendo &&
        modalEl
    ) {

        const bootstrapModal =
            new bootstrap.Modal(
                modalEl
            );


        bootstrapModal.show();
    }
}


/* ============================================================
   INICIAR TEMPORIZADOR
   ============================================================ */

function confirmarInicio() {

    const modalEl =
        document.getElementById(
            "confirmModal"
        );


    if (modalEl) {

        const bootstrapModal =
            bootstrap.Modal.getInstance(
                modalEl
            );


        if (bootstrapModal) {
            bootstrapModal.hide();
        }

    }


    if (timerCorriendo) {
        return;
    }


    timerCorriendo = true;


    const btn =
        document.getElementById(
            "btnIniciar"
        );


    if (btn) {

        btn.disabled = true;

        btn.innerHTML = `
            <ion-icon name="time-outline"></ion-icon>
            Sesión en curso...
        `;

    }


    actualizarPantalla(
        tiempoRestante
    );


    countdownInterval =
        setInterval(() => {

            tiempoRestante--;

            actualizarPantalla(
                tiempoRestante
            );


            if (tiempoRestante <= 0) {

                clearInterval(
                    countdownInterval
                );

                finalizarSesion();

            }

        }, 1000);
}


/* ============================================================
   PANTALLA DEL TEMPORIZADOR
   ============================================================ */

function actualizarPantalla(totalSegundos) {

    const horas =
        Math.floor(
            totalSegundos / 3600
        );


    const minutos =
        Math.floor(
            (totalSegundos % 3600) / 60
        );


    const segundos =
        totalSegundos % 60;


    const hrsString =
        horas < 10
            ? "0" + horas
            : horas;


    const minString =
        minutos < 10
            ? "0" + minutos
            : minutos;


    const segString =
        segundos < 10
            ? "0" + segundos
            : segundos;


    const timeDisplay =
        document.getElementById(
            "timeString"
        );


    if (timeDisplay) {

        timeDisplay.innerText =
            `${hrsString}:${minString}:${segString}`;

    }
}


/* ============================================================
   REINICIAR
   ============================================================ */

function reiniciarSesion() {

    if (
        confirm(
            "¿Seguro que deseas reiniciar el temporizador?"
        )
    ) {

        clearInterval(
            countdownInterval
        );


        timerCorriendo = false;

        tiempoRestante = 60 * 60;


        const btn =
            document.getElementById(
                "btnIniciar"
            );


        if (btn) {

            btn.disabled = false;

            btn.innerHTML = `
                <ion-icon name="play-outline"></ion-icon>
                Comenzar
            `;

        }


        actualizarPantalla(
            tiempoRestante
        );

    }
}


/* ============================================================
   FINALIZAR SESIÓN
   ============================================================ */

function finalizarSesion() {

    timerCorriendo = false;


    alert(
        "¡Felicidades! Has completado tus 60 minutos de sesión."
    );


    const btn =
        document.getElementById(
            "btnIniciar"
        );


    if (btn) {

        btn.disabled = false;

        btn.innerHTML = `
            <ion-icon name="play-outline"></ion-icon>
            Comenzar
        `;

    }


    tiempoRestante = 60 * 60;


    actualizarPantalla(
        tiempoRestante
    );
}