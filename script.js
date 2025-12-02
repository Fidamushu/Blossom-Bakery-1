document.addEventListener('DOMContentLoaded', function() {
    // Initialize carousel functionality
    const carousel = document.getElementById('productCarousel');
    if (carousel) {
        let isDown = false;
        let startX;
        let scrollLeft;

        carousel.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });

        carousel.addEventListener('mouseleave', () => {
            isDown = false;
        });

        carousel.addEventListener('mouseup', () => {
            isDown = false;
        });

        carousel.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2;
            carousel.scrollLeft = scrollLeft - walk;
        });

        // Auto-scroll carousel
        let scrollAmount = 0;
        const scrollSpeed = 1;
        const scrollInterval = setInterval(() => {
            if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
                scrollAmount = 0;
            } else {
                scrollAmount += scrollSpeed;
            }
            carousel.scrollLeft = scrollAmount;
        }, 30);

        // Pause auto-scroll on hover
        carousel.addEventListener('mouseenter', () => {
            clearInterval(scrollInterval);
        });

        carousel.addEventListener('mouseleave', () => {
            scrollInterval = setInterval(() => {
                if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
                    scrollAmount = 0;
                } else {
                    scrollAmount += scrollSpeed;
                }
                carousel.scrollLeft = scrollAmount;
            }, 30);
        });
    }

    // WhatsApp modal functionality
    const whatsappBtns = document.querySelectorAll('#whatsappBtn');
    const whatsappModal = document.getElementById('whatsappModal');
    const closeModal = document.getElementById('closeModal');

    if (whatsappBtns && whatsappModal && closeModal) {
        whatsappBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                whatsappModal.classList.remove('hidden');
                whatsappModal.classList.add('flex');
            });
        });

        closeModal.addEventListener('click', () => {
            whatsappModal.classList.add('hidden');
            whatsappModal.classList.remove('flex');
        });

        whatsappModal.addEventListener('click', (e) => {
            if (e.target === whatsappModal) {
                whatsappModal.classList.add('hidden');
                whatsappModal.classList.remove('flex');
            }
        });
    }

    // Map modal functionality
    const mapPreview = document.getElementById('mapPreview');
    const mapModal = document.getElementById('mapModal');
    const closeMapModal = document.getElementById('closeMapModal');

    if (mapPreview && mapModal && closeMapModal) {
        mapPreview.addEventListener('click', () => {
            mapModal.classList.remove('hidden');
            mapModal.classList.add('flex');
        });

        closeMapModal.addEventListener('click', () => {
            mapModal.classList.add('hidden');
            mapModal.classList.remove('flex');
        });

        mapModal.addEventListener('click', (e) => {
            if (e.target === mapModal) {
                mapModal.classList.add('hidden');
                mapModal.classList.remove('flex');
            }
        });
    }

    // Add animations to elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in, .slide-up');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load

    // Back to top button functionality
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.remove('opacity-0', 'invisible');
                backToTopBtn.classList.add('opacity-100', 'visible');
            } else {
                backToTopBtn.classList.remove('opacity-100', 'visible');
                backToTopBtn.classList.add('opacity-0', 'invisible');
            }
        });

        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});