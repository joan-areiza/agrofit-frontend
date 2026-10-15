//Variables
const wrapper = document.querySelector('.wrapper');
const modal_overlay = document.querySelector('.modal-overlay');
const icon_close = document.querySelector('.icon-close');

const btn_login_popup = document.querySelector('.btn-login-header');
const btn_register_popup = document.querySelector('.btn-register-header');

const login_link = document.querySelector('.login-link');
const register_link = document.querySelector('.register-link');
const forgot_password_link = document.querySelector('.forgot-password-link');
const forgot_login_link = document.querySelector('.forgot-login-link');
const verification_login_link = document.querySelector('.verification-login-link');
const new_password_login_link = document.querySelector('.new-password-login-link');

const forgot_password_form = document.querySelector('.forgot-password form');
const verification_form = document.querySelector('.verification-code form');
const new_password_form = document.querySelector('.new-password form');
const register_form = document.querySelector('.form-box.register form');

const documentInput = document.querySelector('#register-num-document');


// =========================
// UTILIDADES
// =========================

function resetWrapper() {
    wrapper.classList.remove(
        'active',
        'forgot-active',
        'verification-active',
        'new-password-active'
    );
}

function isSenaEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@soy\.sena\.edu\.co$/.test(email);
}

function isValidDocument(documentNumber) {
    return /^\d{10}$/.test(documentNumber);
}


// =========================
// MOSTRAR FORMULARIOS
// =========================

function showLogin() {
    resetWrapper();
    modal_overlay.classList.add('active');
}

function showRegister() {
    resetWrapper();
    wrapper.classList.add('active');
    modal_overlay.classList.add('active');
}

function showForgotPassword() {
    resetWrapper();
    wrapper.classList.add('forgot-active');
    modal_overlay.classList.add('active');
}

function showVerificationCode() {
    resetWrapper();
    wrapper.classList.add('verification-active');
    modal_overlay.classList.add('active');
}

function showNewPassword() {
    resetWrapper();
    wrapper.classList.add('new-password-active');
    modal_overlay.classList.add('active');
}


// =========================
// NAVEGACIÓN ENTRE FORMULARIOS
// =========================

register_link.addEventListener('click', (e) => {
    e.preventDefault();
    showRegister();
});

login_link.addEventListener('click', (e) => {
    e.preventDefault();
    showLogin();
});

forgot_password_link.addEventListener('click', (e) => {
    e.preventDefault();
    showForgotPassword();
});

forgot_login_link.addEventListener('click', (e) => {
    e.preventDefault();
    showLogin();
});

verification_login_link.addEventListener('click', (e) => {
    e.preventDefault();
    showLogin();
});

new_password_login_link.addEventListener('click', (e) => {
    e.preventDefault();
    showLogin();
});


// =========================
// BOTONES QUE ABREN EL MODAL
// =========================

btn_login_popup.addEventListener('click', (e) => {
    e.preventDefault();
    showLogin();
});

btn_register_popup.addEventListener('click', (e) => {
    e.preventDefault();
    showRegister();
});

// =========================
// CERRAR MODAL
// =========================

icon_close.addEventListener('click', () => {
    modal_overlay.classList.remove('active');
    resetWrapper();
});


// =========================
// FORMULARIO: RECUPERAR CONTRASEÑA
// =========================

forgot_password_form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#recovery-email').value.trim();

    if (!isSenaEmail(email)) {
        alert('Debes utilizar un correo institucional @soy.sena.edu.co');
        return;
    }

    showVerificationCode();
});


// =========================
// FORMULARIO: CÓDIGO DE VERIFICACIÓN
// =========================

verification_form.addEventListener('submit', (e) => {
    e.preventDefault();

    const code = document.querySelector('#verification-code').value;

    if (!/^\d{6}$/.test(code)) {
        alert('El código debe contener exactamente 6 cifras.');
        return;
    }

    // Aquí se validará el código con el backend
    showNewPassword();
});

// =========================
// REENVIAR CÓDIGO
// =========================
const btnResendCode = document.querySelector('.btn-resend-code');

btnResendCode?.addEventListener('click', (e) => {
    e.preventDefault();
    alert('El código se ha reenviado correctamente a tu correo institucional.');
});

// =========================
// FORMULARIO: NUEVA CONTRASEÑA
// =========================

new_password_form.addEventListener('submit', (e) => {
    e.preventDefault();

    const password = document.querySelector('#new-password').value;
    const confirmPassword = document.querySelector('#confirm-new-password').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    if (password.length < 8) {
        alert('La contraseña debe tener mínimo 8 caracteres.');
        return;
    }

    alert('Has cambiado la contraseña exitosamente. Ahora inicia sesión.');
    new_password_form.reset();
    showLogin();
});


// =========================
// FORMULARIO: REGISTRO
// =========================

// Solo permite números y máximo 10 dígitos
documentInput.addEventListener('input', () => {
    documentInput.value = documentInput.value
        .replace(/\D/g, '')
        .slice(0, 10);
});

register_form.addEventListener('submit', (e) => {
    e.preventDefault();

    const documentNumber = documentInput.value.trim();
    const email = document.querySelector('#email-register').value.trim().toLowerCase();

    if (!isValidDocument(documentNumber)) {
        alert('El número de documento debe contener exactamente 10 dígitos.');
        return;
    }

    if (!isSenaEmail(email)) {
        alert('Debes utilizar un correo institucional @soy.sena.edu.co');
        return;
    }

    // Registro correcto
    alert('Te has registrado correctamente. Ahora inicia sesión.');
    register_form.reset();
    showLogin();
});

