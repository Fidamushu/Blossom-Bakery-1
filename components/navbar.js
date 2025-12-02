class CustomNavbar extends HTMLElement {
    constructor() {
        super();
        this.active = this.getAttribute('active') || 'home';
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .nav-link {
                    position: relative;
                    transition: color 0.3s ease;
                }
                
                .nav-link:hover {
                    color: #ec4899;
                }
                
                .nav-link.active {
                    color: #ec4899;
                    font-weight: 600;
                }
                
                .nav-link.active::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: #ec4899;
                    border-radius: 2px;
                }
                
                @media (max-width: 768px) {
                    .mobile-menu {
                        display: none;
                    }
                    
                    .mobile-menu.active {
                        display: flex;
                        flex-direction: column;
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        background-color: white;
                        padding: 1rem;
                        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                        z-index: 50;
                    }
                }
            </style>
            
            <nav class="bg-white shadow-md fixed w-full z-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16 items-center">
                        <!-- Logo -->
                        <div class="flex-shrink-0 flex items-center">
                            <a href="index.html" class="flex items-center">
                                <span class="text-2xl font-bold text-pink-500">Blossom Bakery</span>
                            </a>
                        </div>
                        
                        <!-- Desktop Navigation -->
                        <div class="hidden md:flex space-x-8">
                            <a href="index.html" class="nav-link ${this.active === 'home' ? 'active' : ''} text-gray-700 hover:text-pink-500 px-3 py-2">Home</a>
                            <a href="menu.html" class="nav-link ${this.active === 'menu' ? 'active' : ''} text-gray-700 hover:text-pink-500 px-3 py-2">Menu</a>
                            <a href="about.html" class="nav-link ${this.active === 'about' ? 'active' : ''} text-gray-700 hover:text-pink-500 px-3 py-2">About</a>
                            <a href="contact.html" class="nav-link ${this.active === 'contact' ? 'active' : ''} text-gray-700 hover:text-pink-500 px-3 py-2">Contact</a>
                        </div>
                        
                        <!-- Mobile menu button -->
                        <div class="md:hidden">
                            <button id="mobileMenuButton" class="text-gray-700 hover:text-pink-500 focus:outline-none">
                                <i data-feather="menu"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- Mobile Navigation -->
                <div id="mobileMenu" class="mobile-menu md:hidden">
                    <a href="index.html" class="nav-link ${this.active === 'home' ? 'active' : ''} text-gray-700 hover:text-pink-500 px-3 py-2">Home</a>
                    <a href="menu.html" class="nav-link ${this.active === 'menu' ? 'active' : ''} text-gray-700 hover:text-pink-500 px-3 py-2">Menu</a>
                    <a href="about.html" class="nav-link ${this.active === 'about' ? 'active' : ''} text-gray-700 hover:text-pink-500 px-3 py-2">About</a>
                    <a href="contact.html" class="nav-link ${this.active === 'contact' ? 'active' : ''} text-gray-700 hover:text-pink-500 px-3 py-2">Contact</a>
                </div>
            </nav>
        `;

        // Initialize mobile menu toggle
        const mobileMenuButton = this.querySelector('#mobileMenuButton');
        const mobileMenu = this.querySelector('#mobileMenu');

        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
                feather.replace();
            });
        }

        feather.replace();
    }
}

customElements.define('custom-navbar', CustomNavbar);