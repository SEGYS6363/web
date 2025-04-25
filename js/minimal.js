
document.addEventListener('DOMContentLoaded', function () {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuToggle && closeMenu && mobileMenu) {
        menuToggle.addEventListener('click', function () {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        });

        closeMenu.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto'; 
        });
    }


    const animatedElements = document.querySelectorAll('.service-card, .cta-section, .service-detail-card, .package-card, .story-content, .story-images, .stat-card, .team-member');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8;
    }

    function handleScroll() {
        animatedElements.forEach(element => {
            if (isElementInViewport(element) && !element.classList.contains('visible') && !element.classList.contains('animated')) {
                element.classList.add('visible');
                element.classList.add('animated');
            }
        });
    }

    if (animatedElements.length > 0) {
        handleScroll();

        let scrollTimeout;
        window.addEventListener('scroll', function () {
            if (!scrollTimeout) {
                scrollTimeout = setTimeout(function () {
                    handleScroll();
                    scrollTimeout = null;
                }, 100); // throttle (100ms)
            }
        });
    }


    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const emailInput = contactForm.querySelector('input[name="email"]');
            const nameInput = contactForm.querySelector('input[name="name"]');
            const messageInput = contactForm.querySelector('textarea[name="message"]');

            if (!emailInput.value.includes('@')) {
                alert('Пожалуйста, введите корректный email');
                return;
            }

            if (!nameInput.value.trim()) {
                alert('Введите ваше имя');
                return;
            }

            if (!messageInput.value.trim()) {
                alert('Введите сообщение');
                return;
            }

            alert('Форма успешно отправелна');
        });
    }
});
