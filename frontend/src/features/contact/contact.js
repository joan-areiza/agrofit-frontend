const contactForm = document.querySelector('.contact-us form');

contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    // Aquí podrías validar campos si quieres

    alert('Tu mensaje se ha enviado correctamente. Pronto nos pondremos en contacto contigo.');
    contactForm.reset();
});