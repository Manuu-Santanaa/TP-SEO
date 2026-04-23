document.addEventListener("DOMContentLoaded", () => {

    const enlaces = document.querySelectorAll('nav a[href^="#"]');
    
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const destino = document.querySelector(this.getAttribute('href'));
            
            const offsetHeader = document.querySelector('header').offsetHeight;
            const posicion = destino.getBoundingClientRect().top + window.scrollY - offsetHeader;

            window.scrollTo({
                top: posicion,
                behavior: 'smooth'
            });
        });
    });

    const form = document.getElementById('registroForm');
    
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value;
            
            alert(`¡Gracias por sumarte, ${nombre}! Nos pondremos en contacto con vos muy pronto.`);
            
            form.reset();
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    
    const formulario = document.getElementById("registroForm");

    formulario.addEventListener("submit", function(evento) {
        
        evento.preventDefault();

        alert("¡Excelente! Tu registro se envió correctamente. Nos pondremos en contacto pronto.");

        formulario.reset();
    });

});

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active"); 
    });

    const linksMenu = document.querySelectorAll("#navMenu a");
    linksMenu.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });