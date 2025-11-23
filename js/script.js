document.addEventListener('DOMContentLoaded', function() {

    // ==================== LÓGICA DEL FORMULARIO DE CONTACTO CON EMAILJS ====================
    
    // 1. Reemplaza 'TU_PUBLIC_KEY' con tu Public Key de tu cuenta de EmailJS > Account.
    emailjs.init('TU_PUBLIC_KEY');

    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // 2. Reemplaza con tu Service ID y Template ID de EmailJS.
            const serviceID = 'TU_SERVICE_ID';
            const templateID = 'TU_TEMPLATE_ID';

            formStatus.textContent = 'Enviando...';
            formStatus.style.color = '#333';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    formStatus.textContent = '¡Mensaje enviado con éxito!';
                    formStatus.style.color = 'green';
                    contactForm.reset();
                }, (err) => {
                    formStatus.textContent = 'Hubo un error. Por favor, inténtalo de nuevo.';
                    formStatus.style.color = 'red';
                    console.error('EmailJS Error:', JSON.stringify(err));
                });
        });
    }

    // ==================== OTRAS FUNCIONALIDADES (Ej: Header con Sombra al hacer Scroll) ====================
    
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 50) {
                header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            } else {
                header.style.boxShadow = 'none';
            }
        });
    }

    // Scroll suave al top al hacer clic en 'Inicio'
    var btnInicio = document.getElementById('nav-inicio');
    if (btnInicio) {
        btnInicio.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

});