document.addEventListener('DOMContentLoaded', function () {

    // ─── Carousel ────────────────────────────────────────────────────────────
    const carousel = document.getElementById('productCarousel');
    if (carousel) {
        let isDown = false;
        let startX;
        let scrollLeft;
        let scrollAmount = 0;
        const scrollSpeed = 1;

        // Manual drag
        carousel.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });
        carousel.addEventListener('mouseup', () => { isDown = false; });
        carousel.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2;
            carousel.scrollLeft = scrollLeft - walk;
        });

        // Auto-scroll
        let scrollInterval = setInterval(() => {
            if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
                scrollAmount = 0;
            } else {
                scrollAmount += scrollSpeed;
            }
            carousel.scrollLeft = scrollAmount;
        }, 30);

        // Pause on hover
        carousel.addEventListener('mouseenter', () => {
            clearInterval(scrollInterval);
        });

        // Resume on leave (sync position first)
        carousel.addEventListener('mouseleave', () => {
            isDown = false;
            scrollAmount = carousel.scrollLeft;
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

    // ─── WhatsApp Modal ───────────────────────────────────────────────────────
    const whatsappModal = document.getElementById('whatsappModal');
    const closeModal = document.getElementById('closeModal');

    if (whatsappModal && closeModal) {
        // Open modal on any element with id="whatsappBtn" including those inside custom elements
        document.body.addEventListener('click', (e) => {
            const btn = e.target.closest('#whatsappBtn');
            if (btn) {
                e.preventDefault();
                whatsappModal.classList.remove('hidden');
                whatsappModal.classList.add('flex');
            }
        });

        closeModal.addEventListener('click', () => {
            whatsappModal.classList.add('hidden');
            whatsappModal.classList.remove('flex');
        });

        // Close on backdrop click
        whatsappModal.addEventListener('click', (e) => {
            if (e.target === whatsappModal) {
                whatsappModal.classList.add('hidden');
                whatsappModal.classList.remove('flex');
            }
        });
    }

    // ─── Map Modal ────────────────────────────────────────────────────────────
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

    // ─── Scroll Animations ────────────────────────────────────────────────────
    const animateOnScroll = () => {
        document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight / 1.2) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // ─── Back to Top ──────────────────────────────────────────────────────────
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
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ─── Menu Filter & Search ────────────────────────────────────────────────
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuSearch = document.getElementById('menuSearch');
    const noResults = document.getElementById('noResults');

    if (filterButtons.length > 0) {
        let activeFilter = 'all';

        // Apply both the active category filter AND the current search term
        function applyFilters() {
            const searchTerm = menuSearch ? menuSearch.value.toLowerCase().trim() : '';
            const cards = document.querySelectorAll('custom-product-card');
            let visibleCount = 0;

            cards.forEach(card => {
                const category = (card.getAttribute('category') || '').toLowerCase();
                const title = (card.getAttribute('title') || '').toLowerCase();
                const description = (card.getAttribute('description') || '').toLowerCase();

                const matchesCategory = activeFilter === 'all' || category === activeFilter;
                const matchesSearch = !searchTerm || title.includes(searchTerm) || description.includes(searchTerm);

                if (matchesCategory && matchesSearch) {
                    card.style.display = '';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            if (noResults) {
                noResults.classList.toggle('hidden', visibleCount > 0);
            }
        }

        // Filter button clicks
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active state styling
                filterButtons.forEach(b => {
                    b.classList.remove('active-filter', 'bg-pink-500', 'text-white');
                    b.classList.add('bg-white', 'text-pink-500');
                });
                btn.classList.add('active-filter', 'bg-pink-500', 'text-white');
                btn.classList.remove('bg-white', 'text-pink-500');

                activeFilter = btn.getAttribute('data-filter');
                applyFilters();
            });
        });

        // Search input
        if (menuSearch) {
            menuSearch.addEventListener('input', applyFilters);
        }
    }

    // ─── Contact Form ─────────────────────────────────────────────────────────
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            if (!name) {
                alert('Please enter your name.');
                return;
            }
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});