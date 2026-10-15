/*
============================================================
sidebar.js
============================================================
Manejo de:
- Menú móvil
- Confirmación de cierre de sesión
- Modal de perfil
*/

(function () {
    'use strict';

    // Elementos del menú móvil
    const menuMovil = document.getElementById('menuMovil');
    const barraLateral = document.getElementById('barraLateral');
    const superposicion = document.getElementById('superposicion');

    // Cierra el menú móvil
    function cerrarMenuMovil() {
        if (barraLateral && superposicion && menuMovil) {
            barraLateral.classList.remove('abierto');
            superposicion.classList.remove('visible');
            menuMovil.classList.remove('oculto');
        }
    }

    if (menuMovil && barraLateral && superposicion) {
        // Abrir / cerrar menú
        menuMovil.addEventListener('click', function () {
            barraLateral.classList.toggle('abierto');
            superposicion.classList.toggle('visible');
            menuMovil.classList.toggle('oculto');
        });

        // Cerrar al pulsar fuera del menú
        superposicion.addEventListener('click', cerrarMenuMovil);

        // Cerrar al volver a escritorio
        window.addEventListener('resize', function () {
            if (window.innerWidth >= 768) {
                cerrarMenuMovil();
            }
        });
    }

})();


// ============================================================
// Funcionalidades Interactivas (Logout & Modal de Perfil)
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

    // --- Cierre de Sesión ---
    const btnLogout = document.getElementById('btnLogout');

    if (btnLogout) {
        btnLogout.addEventListener('click', function (e) {
            e.preventDefault();

            Swal.fire({
                icon: 'warning',
                title: '¿Estás seguro?',
                text: '¿Deseas cerrar sesión?',
                showCancelButton: true,
                confirmButtonText: 'Sí',
                cancelButtonText: 'No',
                confirmButtonColor: '#3F9A1A',
                cancelButtonColor: '#d33'
            }).then((resultado) => {
                if (resultado.isConfirmed) {
                    window.location.href = "../../../../index.html";
                }
            });
        });
    }

    // --- Modal de Perfil ---
    const btnPerfil = document.getElementById('btnPerfil');
    const modalOverlay = document.getElementById('modalPerfilOverlay');
    const btnClosePerfil = document.getElementById('btnClosePerfil');
    const btnCancelPerfil = document.getElementById('btnCancelPerfil');
    const formPerfil = document.getElementById('formPerfil');

    function openPerfilModal() {
        if (modalOverlay) {
            modalOverlay.classList.add('active');
        }
    }

    function closePerfilModal() {
        if (modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    }

    if (btnPerfil) {
        btnPerfil.addEventListener('click', function (e) {
            e.preventDefault();
            openPerfilModal();
        });
    }

    document.querySelectorAll('.btn-abrir-perfil').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            openPerfilModal();
        });
    });

    if (btnClosePerfil) btnClosePerfil.addEventListener('click', closePerfilModal);
    if (btnCancelPerfil) btnCancelPerfil.addEventListener('click', closePerfilModal);

    if (modalOverlay) {
        modalOverlay.addEventListener('click', function (e) {
            if (e.target === modalOverlay) {
                closePerfilModal();
            }
        });
    }

    if (formPerfil) {
        formPerfil.addEventListener('submit', function (e) {
            e.preventDefault();
            if (typeof Swal !== 'undefined') {
                Swal.fire({
                    icon: 'success',
                    title: '¡Perfil actualizado!',
                    text: 'Tus datos han sido guardados correctamente.',
                    confirmButtonColor: '#3F9A1A'
                });
            }
            closePerfilModal();
        });
    }

});