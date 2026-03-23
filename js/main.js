/* =============================================
   MAIN.JS — Navigazione SPA, Hamburger,
             Scroll Reveal, Lightbox,
             Traduzioni, Form Validation
   ============================================= */

// --- 1. NAVIGAZIONE (SPA) ---
function showPage(id) {
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
        p.style.display = 'none';
    });
    const activePage = document.getElementById(id);
    activePage.style.display = 'block';
    setTimeout(() => { activePage.classList.add('active'); }, 10);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMobileMenu();
    setTimeout(initScrollReveal, 100);

    // Aggiorna link attivo nella navbar
    document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
        a.classList.toggle('active', a.dataset.page === id);
    });
}

// --- 1B. HAMBURGER MENU MOBILE ---
function toggleMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
}

function closeMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
}

// --- 2. SCROLL REVEAL ---
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.glass-card, .project-card, .contact-container, .section-title').forEach(el => {
        if (!el.classList.contains('visible')) {
            el.classList.add('scroll-reveal');
            observer.observe(el);
        }
    });
}

// --- 2B. LIGHTBOX ---
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = src;
    lightbox.style.display = 'flex';
    setTimeout(() => lightbox.classList.add('active'), 10);
}

function closeLightbox(e) {
    if (e.target !== document.getElementById('lightbox-img')) {
        const lightbox = document.getElementById('lightbox');
        lightbox.classList.remove('active');
        setTimeout(() => lightbox.style.display = 'none', 300);
    }
}

// Chiudi con tasto ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox({ target: null });
});

// --- 3. TRADUZIONI ---
const translations = {
    it: {
        nav_home: "Home", nav_portfolio: "Portfolio", nav_contact: "Contatti",
        hero_tag: "CREATIVE 3D ARTIST", hero_title: "Scolpire l'Immaginazione.", btn_explore: "Esplora Lavori",
        about_title: "Ciao, sono Gabriele Bongiovanni",
        about_desc: "Appassionato di 3D nel settore del rendering, dell'animazione e della modellazione. Il mio obiettivo è trasformare assets statici in animati e creare assets da utilizzare",
        about_spec: "Specializzato in: Blender, ZBrush, Substance Painter e Unreal Engine 5.", btn_collab: "Lavoriamo Insieme",
        port_title: "Ultimi Progetti", contact_title: "Parliamo del tuo Progetto", contact_sub: "Mettiamoci in contatto",
        contact_text: "Hai un'idea in mente o hai bisogno di un modello 3D? Scrivimi e trasformiamo la tua visione in realtà.",
        form_name: "Il tuo nome", form_email: "La tua email", form_msg: "Parlami di te", btn_send: "Invia Messaggio",
        work_in_progress: "Lavoro in corso",
        err_name: "Nome deve avere almeno 2 caratteri",
        err_email: "Email non valida",
        err_msg: "Messaggio deve avere almeno 10 caratteri",
        success_msg: "✓ Messaggio inviato con successo! Ti risponderò presto.",
        error_submit: "✗ Controlla i campi e riprova"
    },
    en: {
        nav_home: "Home", nav_portfolio: "Portfolio", nav_contact: "Contact",
        hero_tag: "CREATIVE 3D ARTIST", hero_title: "Sculpting Imagination.", btn_explore: "Explore Works",
        about_title: "Hi, I'm Gabriele Bongiovanni",
        about_desc: "Passionate about 3D in the fields of rendering, animation and modeling. My goal is to transform static assets into animated ones and create assets ready for use.",
        about_spec: "Specialized in: Blender, ZBrush, Substance Painter, and Unreal Engine 5.", btn_collab: "Work Together",
        port_title: "Latest Projects", contact_title: "Let's Talk Projects", contact_sub: "Get in Touch",
        contact_text: "Have an idea in mind or need a 3D model? Text me and let's turn your vision into reality.",
        form_name: "Your Name", form_email: "Your Email", form_msg: "Tell me about yourself", btn_send: "Send Message",
        work_in_progress: "Work in progress",
        err_name: "Name must be at least 2 characters",
        err_email: "Invalid email",
        err_msg: "Message must be at least 10 characters",
        success_msg: "✓ Message sent successfully! I'll reply soon.",
        error_submit: "✗ Please check the fields and try again"
    },
    es: {
        nav_home: "Inicio", nav_portfolio: "Portafolio", nav_contact: "Contacto",
        hero_tag: "ARTISTA 3D CREATIVO", hero_title: "Esculpiendo la Imaginación.", btn_explore: "Explorar Trabajos",
        about_title: "Hola, soy Gabriele Bongiovanni",
        about_desc: "Apasionado por el 3D en los ámbitos del renderizado, la animación y el modelado. Mi objetivo es transformar assets estáticos en animados y crear assets listos para usar.",
        about_spec: "Especializado en: Blender, ZBrush, Substance Painter y Unreal Engine 5.", btn_collab: "Trabajemos Juntos",
        port_title: "Últimos Proyectos", contact_title: "Hablemos de tu Proyecto", contact_sub: "Ponte en contacto",
        contact_text: "¿Tienes una idea o necesitas un modelo 3D? Escríbeme y hagamos realidad tu visión.",
        form_name: "Tu Nombre", form_email: "Tu Correo", form_msg: "Cuéntame sobre ti", btn_send: "Enviar Mensaje",
        work_in_progress: "Trabajo en curso",
        err_name: "El nombre debe tener al menos 2 caracteres",
        err_email: "Email inválido",
        err_msg: "El mensaje debe tener al menos 10 caracteres",
        success_msg: "✓ ¡Mensaje enviado con éxito! Pronto te responderé.",
        error_submit: "✗ Por favor verifica los campos e intenta de nuevo"
    },
    fr: {
        nav_home: "Accueil", nav_portfolio: "Portfolio", nav_contact: "Contact",
        hero_tag: "ARTISTE 3D CRÉATIF", hero_title: "Sculpter l'Imagination.", btn_explore: "Explorer les Travaux",
        about_title: "Salut, je suis Gabriele Bongiovanni",
        about_desc: "Passionné par la 3D dans les domaines du rendu, de l'animation et de la modélisation. Mon objectif est de transformer des assets statiques en animés et de créer des assets prêts à l'emploi.",
        about_spec: "Spécialisé en : Blender, ZBrush, Substance Painter et Unreal Engine 5.", btn_collab: "Travaillons Ensemble",
        port_title: "Derniers Projets", contact_title: "Parlons de votre Projet", contact_sub: "Restons en contact",
        contact_text: "Vous avez une idée ou besoin d'un modèle 3D ? Écrivez-moi et transformons votre vision en réalité.",
        form_name: "Votre Nom", form_email: "Votre Email", form_msg: "Parlez-moi de vous", btn_send: "Envoyer Message",
        work_in_progress: "Travail en cours",
        err_name: "Le nom doit contenir au moins 2 caractères",
        err_email: "Email invalide",
        err_msg: "Le message doit contenir au moins 10 caractères",
        success_msg: "✓ Message envoyé avec succès ! Je vous répondrai bientôt.",
        error_submit: "✗ Veuillez vérifier les champs et réessayer"
    }
};

let currentLanguage = 'it';

function changeLanguage(lang) {
    currentLanguage = lang;
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerText = translations[lang][key];
            }
        }
    });
}

// --- 4. FORM VALIDATION ---
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm() {
    const name = document.getElementById('formName');
    const email = document.getElementById('formEmail');
    const msg = document.getElementById('formMsg');
    let isValid = true;

    if (name.value.trim().length < 2) {
        name.classList.add('error'); name.classList.remove('success');
        name.nextElementSibling.textContent = translations[currentLanguage].err_name;
        name.nextElementSibling.classList.add('error');
        isValid = false;
    } else {
        name.classList.remove('error'); name.classList.add('success');
        name.nextElementSibling.classList.remove('error');
    }

    if (!validateEmail(email.value)) {
        email.classList.add('error'); email.classList.remove('success');
        email.nextElementSibling.textContent = translations[currentLanguage].err_email;
        email.nextElementSibling.classList.add('error');
        isValid = false;
    } else {
        email.classList.remove('error'); email.classList.add('success');
        email.nextElementSibling.classList.remove('error');
    }

    if (msg.value.trim().length < 10) {
        msg.classList.add('error'); msg.classList.remove('success');
        msg.nextElementSibling.textContent = translations[currentLanguage].err_msg;
        msg.nextElementSibling.classList.add('error');
        isValid = false;
    } else {
        msg.classList.remove('error'); msg.classList.add('success');
        msg.nextElementSibling.classList.remove('error');
    }

    return isValid;
}

function handleFormSubmit(event) {
    event.preventDefault();
    const feedback = document.getElementById('formFeedback');
    if (validateForm()) {
        document.getElementById('contactForm').submit();
    } else {
        feedback.textContent = translations[currentLanguage].error_submit;
        feedback.classList.add('error');
        feedback.classList.remove('success');
    }
}

// --- 5. INIT ---
document.addEventListener('DOMContentLoaded', () => {
    // Hamburger
    document.getElementById('hamburger')?.addEventListener('click', toggleMobileMenu);

    // Chiudi menu mobile cliccando un link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Form
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
        form.addEventListener('input', (e) => {
            if (e.target.classList.contains('form-input')) {
                const feedback = e.target.nextElementSibling;
                if (feedback && e.target.value.trim()) {
                    feedback.classList.remove('error');
                    e.target.classList.remove('error');
                }
            }
        });
    }

    // Scroll reveal iniziale
    initScrollReveal();
});
