// Variables
const hero_login_btn = document.querySelector('.hero-login-btn');

// =========================
// BOTONES QUE ABREN EL MODAL
// =========================
if (hero_login_btn) {
    hero_login_btn.addEventListener('click', (e) => {
        e.preventDefault();
        showLogin();
    });
}

// =========================
// INSTALACIONES — dots en lugar de scrollbar (móvil)
// =========================
(function initEquipmentDots() {
    const grid = document.querySelector('.equipment-grid');
    const dotsBox = document.getElementById('equipmentDots');
    if (!grid || !dotsBox) return;

    const slides = grid.querySelectorAll('.equipment-col');
    if (!slides.length) return;

    dotsBox.innerHTML = '';
    slides.forEach((_, i) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'dot' + (i === 0 ? ' activo' : '');
        btn.setAttribute('aria-label', 'Ir a instalación ' + (i + 1));
        btn.addEventListener('click', () => {
            slides[i].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
        });
        dotsBox.appendChild(btn);
    });

    const dots = () => dotsBox.querySelectorAll('.dot');

    function updateActive() {
        const scrollLeft = grid.scrollLeft;
        const width = grid.clientWidth || 1;
        let index = Math.round(scrollLeft / width);
        index = Math.max(0, Math.min(index, slides.length - 1));
        dots().forEach((d, i) => d.classList.toggle('activo', i === index));
    }

    grid.addEventListener('scroll', () => {
        window.requestAnimationFrame(updateActive);
    }, { passive: true });

    window.addEventListener('resize', updateActive);
    updateActive();
})();
