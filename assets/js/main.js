// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for your message! I\'ll get back to you soon.');
        this.reset();
    });
}

// Initialize first section as visible
const firstFadeIn = document.querySelector('#home .fade-in');
if (firstFadeIn) {
    firstFadeIn.classList.add('visible');
}

// Add navbar background on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function () {
            this.style.opacity = '1';
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const portfolioGrid = document.getElementById("portfolioGrid");

    // List of image filenames — you can add/remove easily
    const images = [
        "school30.jpeg", "school31.jpeg", "school32.jpeg", "school33.jpeg",
        "school21.jpeg", "school13.jpeg", "school24.jpeg", "school15.jpeg",
        "school16.jpeg", "school2.jpeg", "school14.jpeg", "school4.jpeg",
        "school11.jpeg", "school12.jpeg", "school8.jpeg", "school5.jpeg",
        "school3.jpeg", "school17.jpeg", "school18.jpeg", "school19.jpeg",
        "school20.jpeg", "school26.jpg", "school22.jpeg", "school23.jpeg", "school1.jpeg",
        "school9.jpeg", "school10.jpeg", "school7.jpeg", "school25.jpeg","school27.jpg","school28.jpg","school29.jpg"
    ];

    // Generate dynamic HTML
    images.forEach(img => {
        const col = document.createElement("div");
        col.className = "col-6 col-md-4 col-lg-3";


        const imageElement = document.createElement("img");
        imageElement.src = `assets/img/${img}`;
        imageElement.alt = `Portfolio image - ${img}`;
        imageElement.className = "img-fluid rounded shadow-sm";

        col.appendChild(imageElement);
        portfolioGrid.appendChild(col);
    });
});
