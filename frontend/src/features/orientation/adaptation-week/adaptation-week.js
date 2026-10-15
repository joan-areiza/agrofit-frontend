
document.addEventListener('DOMContentLoaded', () => {

    // ============================================================
    // ESTADO DE SELECCIÓN
    // ============================================================

    let seleccionados = [];

    const MAX_SELECCION = 2;


    // ============================================================
    // BASE DE DATOS COMPLETA DE MÚSCULOS
    // ============================================================

    const baseDatosMusculos = {

        'pecho': {
            nombre: 'Pecho (Pectorales)',
            sinergista: 'Tríceps / Hombro Frontal',

            textoSinergia:
                'Pecho y Tríceps es una combinación sinérgica ideal para el día de empuje (Push).',

            advertencia:
                'Evita entrenar Hombros al día siguiente, ya que se fatigan bastante en los press de pecho.',

            videos: [
                {
                    titulo: 'Press de Banca Plano',
                    equipo: 'Barra Libre',
                    duracion: '01:45'
                },
                {
                    titulo: 'Aperturas en Máquina',
                    equipo: 'Pec Deck',
                    duracion: '02:10'
                }
            ]
        },


        'espalda': {
            nombre: 'Espalda (Dorsales)',
            sinergista: 'Bíceps / Trapecio',

            textoSinergia:
                'Espalda y Bíceps trabajan juntos de forma natural en todos los movimientos de tracción (Pull).',

            advertencia:
                'Evita entrenar Piernas pesadas el día anterior si harás Peso Muerto para tu espalda.',

            videos: [
                {
                    titulo: 'Dominadas Asistidas',
                    equipo: 'Máquina',
                    duracion: '01:30'
                },
                {
                    titulo: 'Remo Gironda',
                    equipo: 'Polea Baja',
                    duracion: '02:00'
                }
            ]
        },


        'brazos': {
            nombre: 'Bíceps (Brazos)',
            sinergista: 'Espalda',

            textoSinergia:
                'El bíceps actúa como motor secundario en los jalones. Se pueden aislar al final de la sesión.',

            advertencia:
                'No abuses del volumen de bíceps, es un músculo pequeño que se sobreentrena rápido.',

            videos: [
                {
                    titulo: 'Curl de Bíceps',
                    equipo: 'Mancuernas',
                    duracion: '01:10'
                }
            ]
        },


        'piernas': {
            nombre: 'Cuádriceps (Piernas Frontales)',
            sinergista: 'Glúteos / Femorales',

            textoSinergia:
                'Un día de pierna enfocado en empuje desarrollará masivamente tus cuádriceps.',

            advertencia:
                'Nunca programes un día de Pierna el día previo o posterior a un partido intenso de fútbol o running.',

            videos: [
                {
                    titulo: 'Sentadilla Libre',
                    equipo: 'Rack de Sentadillas',
                    duracion: '02:30'
                },
                {
                    titulo: 'Prensa Inclinada',
                    equipo: 'Máquina Prensa',
                    duracion: '02:00'
                }
            ]
        },


        'abdomen': {
            nombre: 'Abdomen (Core)',
            sinergista: 'Oblicuos / Lumbares',

            textoSinergia:
                'El abdomen se trabaja de forma isométrica en ejercicios pesados. Aislarlo al final es ideal.',

            advertencia:
                'Hacer cientos de crunches diarios no quemará la grasa de tu abdomen, solo lo hipertrofiará.',

            videos: [
                {
                    titulo: 'Plancha Abdominal',
                    equipo: 'Peso Corporal',
                    duracion: '01:00'
                },
                {
                    titulo: 'Crunch en Polea',
                    equipo: 'Polea Alta',
                    duracion: '01:15'
                }
            ]
        },


        'hombros': {
            nombre: 'Hombros (Deltoides)',
            sinergista: 'Trapecios / Tríceps',

            textoSinergia:
                'El deltoides lateral le da esa apariencia redonda al hombro. Trabájalo frecuentemente.',

            advertencia:
                'Calienta siempre los manguitos rotadores antes de cualquier press pesado sobre la cabeza.',

            videos: [
                {
                    titulo: 'Elevaciones Laterales',
                    equipo: 'Mancuernas',
                    duracion: '01:45'
                },
                {
                    titulo: 'Press Militar',
                    equipo: 'Barra Libre',
                    duracion: '02:15'
                }
            ]
        },


        'pantorrillas': {
            nombre: 'Pantorrillas (Gastrocnemio)',
            sinergista: 'Sóleo',

            textoSinergia:
                'Las pantorrillas responden muy bien a un volumen alto y frecuencias de 2 a 3 veces por semana.',

            advertencia:
                'No rebotes el peso. Haz una pausa de 1 segundo en la parte más baja del movimiento.',

            videos: [
                {
                    titulo: 'Elevación de Talones',
                    equipo: 'Máquina Sentado',
                    duracion: '01:30'
                }
            ]
        },


        'trapecios': {
            nombre: 'Trapecios',
            sinergista: 'Hombros / Espalda Alta',

            textoSinergia:
                'El trapecio superior se trabaja muy bien con encogimientos y remo al mentón.',

            advertencia:
                'Evita girar los hombros en círculos al hacer encogimientos; solo sube y baja en línea recta.',

            videos: [
                {
                    titulo: 'Encogimientos',
                    equipo: 'Mancuernas',
                    duracion: '01:20'
                }
            ]
        },


        'triceps': {
            nombre: 'Tríceps',
            sinergista: 'Pecho / Hombros',

            textoSinergia:
                'El tríceps conforma 2/3 del tamaño de tu brazo. Enfócate en ejercicios de extensión.',

            advertencia:
                'Evita abrir demasiado los codos en los press cerrados para proteger tus articulaciones.',

            videos: [
                {
                    titulo: 'Extensión en Polea',
                    equipo: 'Cuerda',
                    duracion: '01:40'
                },
                {
                    titulo: 'Press Francés',
                    equipo: 'Barra EZ',
                    duracion: '02:00'
                }
            ]
        },


        'gluteos': {
            nombre: 'Glúteos',
            sinergista: 'Femorales / Cuádriceps',

            textoSinergia:
                'El Hip Thrust es el rey indiscutible para aislar el glúteo mayor y crear potencia.',

            advertencia:
                'Asegúrate de que el movimiento nazca de la cadera y no de hiperextender la zona lumbar.',

            videos: [
                {
                    titulo: 'Hip Thrust',
                    equipo: 'Barra / Banco',
                    duracion: '02:20'
                }
            ]
        },


        'femorales': {
            nombre: 'Isquiosurales (Femorales)',
            sinergista: 'Glúteos / Lumbares',

            textoSinergia:
                'Combinar Peso Muerto Rumano con un Curl de Pierna asegurará un desarrollo completo.',

            advertencia:
                'Un femoral débil frente a un cuádriceps fuerte es una de las mayores causas de lesión de rodilla.',

            videos: [
                {
                    titulo: 'Peso Muerto Rumano',
                    equipo: 'Barra Libre',
                    duracion: '02:15'
                },
                {
                    titulo: 'Curl Femoral Acostado',
                    equipo: 'Máquina',
                    duracion: '01:30'
                }
            ]
        },

'oblicuos': {

            nombre: 'Oblicuos',

            sinergista: 'Abdomen / Core',

            textoSinergia:
                'Los oblicuos participan en la rotación, inclinación lateral y estabilización del tronco, trabajando conjuntamente con la musculatura abdominal.',

            advertencia:
                'Realiza los movimientos de forma controlada y evita rotaciones bruscas durante la semana de adaptación.',

            videos: [

                {
                    titulo: 'Plancha Lateral',
                    equipo: 'Peso Corporal',
                    duracion: '01:20'
                },

                {
                    titulo: 'Pallof Press',
                    equipo: 'Polea',
                    duracion: '01:30'
                }

            ]

        },

    };


    // ============================================================
    // BASE DE DATOS DE COMBINACIONES
    //
    // IMPORTANTE:
    // valido: true  -> puede mostrar videos
    // valido: false -> NO muestra videos
    // ============================================================

    const baseCombinaciones = {

        'pecho-triceps': {
            valido: true,
            mensaje:
                'Excelente combinación sinérgica para el día de empuje (Push).'
        },


        'pecho-abdomen': {
            valido: true,
            mensaje:
                'Combinación funcional. Puedes aislar el abdomen al final de tu rutina de pecho.'
        },


        'espalda-brazos': {
            valido: true,
            mensaje:
                'Excelente combinación de tracción. El bíceps funciona como músculo secundario durante el trabajo de espalda.'
        },


        'espalda-trapecios': {
            valido: true,
            mensaje:
                'Buena combinación para desarrollar la cadena posterior superior y los movimientos de tracción.'
        },


        'hombros-triceps': {
            valido: true,
            mensaje:
                'Combinación adecuada para un día de empuje, ya que ambos músculos participan en los movimientos de press.'
        },


        'gluteos-femorales': {
            valido: true,
            mensaje:
                'Excelente combinación para trabajar la cadena posterior de las piernas.'
        },


        'piernas-gluteos': {
            valido: true,
            mensaje:
                'Combinación efectiva para un entrenamiento completo de tren inferior.'
        },


        'piernas-femorales': {
            valido: true,
            mensaje:
                'Buena combinación para desarrollar de forma equilibrada la musculatura de las piernas.'
        },

        
'piernas-pantorrillas': {

    valido: true,

    mensaje:
        'Combinación efectiva para el tren inferior. Los cuádriceps aportan el trabajo principal de extensión de rodilla y las pantorrillas completan el trabajo de la parte inferior de la pierna.'

},

'abdomen-oblicuos': {

    valido: true,

    mensaje:
        'Combinación adecuada para trabajar de forma integral la musculatura del core, combinando la función del abdomen con la estabilización y el trabajo lateral de los oblicuos.'

},



    // EJEMPLO DE COMBINACIÓN NO VÁLIDA
    //
    // Como el ID del bíceps en tu HTML es "brazos",
    // utilizamos "espalda-brazos".

    /*
    'espalda-brazos': {
        valido: false,
        mensaje:
            'Alerta: entrenar espalda y bíceps en días consecutivos puede dificultar la recuperación del bíceps.'
    }
    */

};


// ============================================================
// NODOS DEL DOM
// ============================================================

const gruposMusculares =
    document.querySelectorAll('.musculo-interactivo');


// Badge de selección
const badgeSeleccionado =
    document.getElementById('estado-seleccion');

const textoBadge =
    document.getElementById('texto-musculo-seleccionado');


// Panel de lógica
const panelVacio =
    document.getElementById('panel-logica-vacio');

const panelContenido =
    document.getElementById('panel-logica-contenido');

const textoSinergia =
    document.getElementById('texto-sinergia');

const tagPrincipal =
    document.getElementById('tag-principal');

const tagSinergista =
    document.getElementById('tag-sinergista');

const textoAdvertencia =
    document.getElementById('texto-advertencia');


// Alertas
const alertaExito =
    document.querySelector('.alerta-exito');

const alertaPeligro =
    document.querySelector('.alerta-peligro');


// Biblioteca
const seccionBiblioteca =
    document.getElementById('seccion-biblioteca');

const tituloBiblioteca =
    document.getElementById('titulo-biblioteca');

const numEjercicios =
    document.getElementById('num-ejercicios');

const contenedorVideos =
    document.getElementById('contenedor-videos');


// ============================================================
// EVENTOS DE LOS MÚSCULOS
// ============================================================

gruposMusculares.forEach(grupo => {

    grupo.addEventListener('click', function () {

        const musculoId =
            this.getAttribute('data-musculo');


        const data =
            baseDatosMusculos[musculoId];


        // ----------------------------------------------------
        // VALIDAR MÚSCULO
        // ----------------------------------------------------

        if (!data) {

            console.error(
                'Falta agregar datos para:',
                musculoId
            );

            return;
        }


        // ----------------------------------------------------
        // COMPROBAR SI YA ESTÁ SELECCIONADO
        // ----------------------------------------------------

        const index =
            seleccionados.indexOf(musculoId);


        // ----------------------------------------------------
        // DESELECCIONAR
        // ----------------------------------------------------

        if (index > -1) {

            seleccionados.splice(index, 1);


            // Quitar activo de todas las representaciones
            // del mismo músculo.

            document
                .querySelectorAll(
                    `[data-musculo="${musculoId}"]`
                )
                .forEach(elemento => {

                    elemento.classList.remove('activo');

                });

        }


        // ----------------------------------------------------
        // SELECCIONAR
        // ----------------------------------------------------

        else {

            // Si ya existen dos músculos seleccionados,
            // quitar el más antiguo.

            if (
                seleccionados.length >=
                MAX_SELECCION
            ) {

                const viejo =
                    seleccionados.shift();


                document
                    .querySelectorAll(
                        `[data-musculo="${viejo}"]`
                    )
                    .forEach(elemento => {

                        elemento.classList.remove('activo');

                    });

            }


            // Añadir nuevo músculo
            seleccionados.push(musculoId);


            // Activar todas sus representaciones
            document
                .querySelectorAll(
                    `[data-musculo="${musculoId}"]`
                )
                .forEach(elemento => {

                    elemento.classList.add('activo');

                });

        }


        // ----------------------------------------------------
        // ACTUALIZAR INTERFAZ
        // ----------------------------------------------------

        evaluarSeleccion();

    });

});


// ============================================================
// EVALUAR ESTADO DE SELECCIÓN
// ============================================================

function evaluarSeleccion() {


    // ========================================================
    // SIN SELECCIÓN
    // ========================================================

    if (seleccionados.length === 0) {

        if (panelVacio) {
            panelVacio.classList.remove('oculto');
        }

        if (panelContenido) {
            panelContenido.classList.add('oculto');
        }

        if (badgeSeleccionado) {
            badgeSeleccionado.classList.add('oculto');
        }

        ocultarBiblioteca();

        return;
    }


    // Mostrar panel
    if (panelVacio) {
        panelVacio.classList.add('oculto');
    }

    if (panelContenido) {
        panelContenido.classList.remove('oculto');
    }


    // ========================================================
    // UN SOLO MÚSCULO
    // ========================================================

    if (seleccionados.length === 1) {

        mostrarMensajeUnico(
            seleccionados[0]
        );

        return;
    }


    // ========================================================
    // DOS MÚSCULOS
    // ========================================================

    if (seleccionados.length === 2) {

        evaluarCombinacion(
            seleccionados[0],
            seleccionados[1]
        );

    }

}


// ============================================================
// MOSTRAR INFORMACIÓN DE UN SOLO MÚSCULO
// ============================================================

function mostrarMensajeUnico(musculo) {

    const data =
        baseDatosMusculos[musculo];


    if (!data) return;


    // --------------------------------------------------------
    // BADGE
    // --------------------------------------------------------

    if (badgeSeleccionado) {
        badgeSeleccionado.classList.remove('oculto');
    }

    if (textoBadge) {
        textoBadge.textContent =
            `${data.nombre} Seleccionado`;
    }


    // --------------------------------------------------------
    // PANEL
    // --------------------------------------------------------

    if (textoSinergia) {

        textoSinergia.textContent =
            `Has seleccionado ${data.nombre}. Selecciona otro músculo para analizar su sinergia.`;

    }


    if (tagPrincipal) {
        tagPrincipal.textContent =
            data.nombre;
    }


    if (tagSinergista) {
        tagSinergista.textContent =
            data.sinergista;
    }


    if (textoAdvertencia) {
        textoAdvertencia.textContent =
            data.advertencia;
    }


    // --------------------------------------------------------
    // ALERTAS
    // --------------------------------------------------------

    if (alertaExito) {
        alertaExito.classList.remove('oculto');
    }

    if (alertaPeligro) {
        alertaPeligro.classList.add('oculto');
    }


    // --------------------------------------------------------
    // BIBLIOTECA
    //
    // Con un solo músculo sí mostramos sus ejercicios.
    // --------------------------------------------------------

    mostrarBiblioteca(data);

}


// ============================================================
// EVALUAR COMBINACIÓN DE DOS MÚSCULOS
// ============================================================

function evaluarCombinacion(m1, m2) {

    const data1 =
        baseDatosMusculos[m1];

    const data2 =
        baseDatosMusculos[m2];


    if (!data1 || !data2) {
        return;
    }


    // --------------------------------------------------------
    // CREAR IDS DE COMBINACIÓN
    // --------------------------------------------------------

    const comboID =
        `${m1}-${m2}`;

    const comboIDInverso =
        `${m2}-${m1}`;


    // Buscar en ambos sentidos
    const dataCombo =
        baseCombinaciones[comboID] ||
        baseCombinaciones[comboIDInverso];


    // --------------------------------------------------------
    // BADGE
    // --------------------------------------------------------

    if (badgeSeleccionado) {
        badgeSeleccionado.classList.remove('oculto');
    }

    if (textoBadge) {

        textoBadge.textContent =
            `${data1.nombre} + ${data2.nombre}`;

    }


    // ========================================================
    // COMBINACIÓN REGISTRADA
    // ========================================================

    if (dataCombo) {


        // ====================================================
        // COMBINACIÓN VÁLIDA
        // ====================================================

        if (dataCombo.valido === true) {

            // Mostrar éxito
            if (alertaExito) {
                alertaExito.classList.remove('oculto');
            }

            // Ocultar peligro
            if (alertaPeligro) {
                alertaPeligro.classList.add('oculto');
            }


            // Mensaje de combinación
            if (textoSinergia) {

                textoSinergia.textContent =
                    dataCombo.mensaje;

            }


            // Tags
            if (tagPrincipal) {

                tagPrincipal.textContent =
                    `${data1.nombre} + ${data2.nombre}`;

            }


            if (tagSinergista) {

                tagSinergista.textContent =
                    `${data1.sinergista} / ${data2.sinergista}`;

            }


            // Advertencia general
            if (textoAdvertencia) {

                textoAdvertencia.textContent =
                    `${data1.advertencia} ${data2.advertencia}`;

            }


            // =================================================
            // SOLO UNA COMBINACIÓN VÁLIDA PUEDE MOSTRAR VIDEOS
            // =================================================

            mostrarBibliotecaCombinada(
                data1,
                data2
            );

        }


        // ====================================================
        // COMBINACIÓN NO VÁLIDA
        // ====================================================

        else {

            // Ocultar éxito
            if (alertaExito) {
                alertaExito.classList.add('oculto');
            }


            // Mostrar alerta
            if (alertaPeligro) {
                alertaPeligro.classList.remove('oculto');
            }


            // Mostrar mensaje de advertencia
            if (textoAdvertencia) {

                textoAdvertencia.textContent =
                    dataCombo.mensaje;

            }


            if (textoSinergia) {

                textoSinergia.textContent =
                    `Combinación seleccionada: ${data1.nombre} + ${data2.nombre}.`;

            }


            // Tags
            if (tagPrincipal) {

                tagPrincipal.textContent =
                    `${data1.nombre} + ${data2.nombre}`;

            }


            if (tagSinergista) {

                tagSinergista.textContent =
                    `${data1.sinergista} / ${data2.sinergista}`;

            }


            // =================================================
            // IMPORTANTE:
            // UNA COMBINACIÓN INVÁLIDA NO PUEDE MOSTRAR VIDEOS
            // =================================================

            ocultarBiblioteca();

        }

    }


    // ========================================================
    // COMBINACIÓN NO REGISTRADA
    // ========================================================

    else {

        // Ocultar éxito
        if (alertaExito) {
            alertaExito.classList.add('oculto');
        }


        // Mostrar peligro
        if (alertaPeligro) {
            alertaPeligro.classList.remove('oculto');
        }


        // Advertencia
        if (textoAdvertencia) {

            textoAdvertencia.textContent =
                'Combinación no registrada o poco común.';

        }


        // Mensaje principal
        if (textoSinergia) {

            textoSinergia.textContent =
                `${data1.nombre} + ${data2.nombre}. No existe una recomendación específica para esta combinación.`;

        }


        // Tags
        if (tagPrincipal) {

            tagPrincipal.textContent =
                `${data1.nombre} + ${data2.nombre}`;

        }


        if (tagSinergista) {

            tagSinergista.textContent =
                `${data1.sinergista} / ${data2.sinergista}`;

        }


        // =================================================
        // NO HAY COMBINACIÓN REGISTRADA
        // NO SE SUGIEREN VIDEOS
        // =================================================

        ocultarBiblioteca();

    }

}


// ============================================================
// MOSTRAR BIBLIOTECA DE UN MÚSCULO
// ============================================================

function mostrarBiblioteca(data) {

    if (!seccionBiblioteca) {
        return;
    }


    seccionBiblioteca.classList.remove('oculto');


    if (tituloBiblioteca) {

        tituloBiblioteca.textContent =
            `Biblioteca Multimedia: ${data.nombre}`;

    }


    if (numEjercicios) {

        numEjercicios.textContent =
            data.videos.length;

    }


    renderizarVideos(
        data.videos
    );

}


// ============================================================
// MOSTRAR BIBLIOTECA DE DOS MÚSCULOS
// ============================================================

function mostrarBibliotecaCombinada(
    data1,
    data2
) {

    if (!seccionBiblioteca) {
        return;
    }


    // Combinar ejercicios de ambos músculos
    const videosCombinados = [
        ...data1.videos,
        ...data2.videos
    ];


    seccionBiblioteca.classList.remove('oculto');


    if (tituloBiblioteca) {

        tituloBiblioteca.textContent =
            `Biblioteca Multimedia: ${data1.nombre} + ${data2.nombre}`;

    }


    if (numEjercicios) {

        numEjercicios.textContent =
            videosCombinados.length;

    }


    renderizarVideos(
        videosCombinados
    );

}


// ============================================================
// OCULTAR BIBLIOTECA
// ============================================================

function ocultarBiblioteca() {

    if (!seccionBiblioteca) {
        return;
    }


    // Ocultar sección
    seccionBiblioteca.classList.add('oculto');


    // Limpiar videos
    if (contenedorVideos) {

        contenedorVideos.innerHTML = '';

    }


    // Resetear contador
    if (numEjercicios) {

        numEjercicios.textContent = '0';

    }

}


// ============================================================
// RENDERIZAR VIDEOS
// ============================================================

function renderizarVideos(videos) {

    if (!contenedorVideos) {
        return;
    }


    // Limpiar contenido anterior
    contenedorVideos.innerHTML = '';


    // Si no hay videos, no renderizar nada
    if (!videos || videos.length === 0) {
        return;
    }


    videos.forEach(video => {

        const cardHTML = `

                <div class="video-card">

                    <div class="video-thumbnail">

                        <ion-icon
                            name="play-circle"
                            class="play-btn">
                        </ion-icon>

                        <span class="video-duracion">
                            ${video.duracion}
                        </span>

                    </div>


                    <div class="video-info">

                        <h4>
                            ${video.titulo}
                        </h4>

                        <p>

                            <ion-icon
                                name="barbell-outline">
                            </ion-icon>

                            ${video.equipo}

                        </p>

                    </div>

                </div>

            `;


        contenedorVideos.insertAdjacentHTML(
            'beforeend',
            cardHTML
        );

    });

}

/* ============================================================
   CATÁLOGO DE COMBINACIONES
   ============================================================ */

document
    .querySelectorAll(".combinacion-card")
    .forEach(card => {

        card.addEventListener("click", () => {

            /* ------------------------------------------------
               Obtener los dos músculos de la tarjeta
            ------------------------------------------------ */

            const musculos =
                card.dataset.musculos
                    ? card.dataset.musculos
                        .split(",")
                        .map(id => id.trim())
                    : [];


            /* ------------------------------------------------
               Validar que existan exactamente dos músculos
            ------------------------------------------------ */

            if (musculos.length !== 2) {

                console.error(
                    "La tarjeta no contiene dos músculos:",
                    card
                );

                return;
            }


            const [musculo1, musculo2] =
                musculos;


            /* ------------------------------------------------
               Validar existencia en la base de datos
            ------------------------------------------------ */

            if (
                !baseDatosMusculos[musculo1] ||
                !baseDatosMusculos[musculo2]
            ) {

                console.error(
                    "Músculo no encontrado:",
                    musculo1,
                    musculo2
                );

                return;
            }


            /* ------------------------------------------------
               LIMPIAR SELECCIÓN ACTUAL
               
               El catálogo representa una combinación completa,
               por lo tanto reemplazamos cualquier selección
               anterior.
            ------------------------------------------------ */

            seleccionados.forEach(musculoId => {

                document
                    .querySelectorAll(
                        `[data-musculo="${musculoId}"]`
                    )
                    .forEach(elemento => {

                        elemento.classList.remove(
                            "activo"
                        );

                    });

            });


            seleccionados = [];


            /* ------------------------------------------------
               SELECCIONAR PRIMER MÚSCULO
            ------------------------------------------------ */

            seleccionados.push(
                musculo1
            );


            document
                .querySelectorAll(
                    `[data-musculo="${musculo1}"]`
                )
                .forEach(elemento => {

                    elemento.classList.add(
                        "activo"
                    );

                });


            /* ------------------------------------------------
               SELECCIONAR SEGUNDO MÚSCULO
            ------------------------------------------------ */

            seleccionados.push(
                musculo2
            );


            document
                .querySelectorAll(
                    `[data-musculo="${musculo2}"]`
                )
                .forEach(elemento => {

                    elemento.classList.add(
                        "activo"
                    );

                });


            /* ------------------------------------------------
               ACTUALIZAR INTERFAZ
            ------------------------------------------------ */

            evaluarSeleccion();


            /* ------------------------------------------------
               DESPLAZAR HACIA EL MAPA ANATÓMICO
            ------------------------------------------------ */

            const mapa =
                document.querySelector(
                    ".mapa-card"
                );


            if (mapa) {

                mapa.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });



});

