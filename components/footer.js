class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .footer-link:hover {
                    color: #ec4899;
                    transform: translateX(4px);
                }
                
                .social-icon {
                    transition: all 0.3s ease;
                }
                
                .social-icon:hover {
                    transform: translateY(-3px);
                    color: #ec4899;
                }
                
                .back-to-top {
                    transition: all 0.3s ease;
                }
                
                .back-to-top:hover {
                    transform: translateY(-3px);
                    background-color: #ec4899;
                }
            </style>
            
            <footer class="bg-pink-800 text-white pt-12 pb-6 px-4">
                <div class="max-w-7xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <!-- About Column -->
                        <div>
                            <h3 class="text-xl font-bold mb-4">Blossom Bakery</h3>
                            <p class="mb-4">Freshly baked goods made with love and the finest ingredients since 2010.</p>
                            <div class="flex space-x-4">
                                <a href="#" class="social-icon"><i data-feather="instagram"></i></a>
                                <a href="#" class="social-icon"><i data-feather="facebook"></i></a>
                                <a href="#" class="social-icon"><i data-feather="twitter"></i></a>
                            </div>
                        </div>
                        
                        <!-- Quick Links -->
                        <div>
                            <h3 class="text-xl font-bold mb-4">Quick Links</h3>
                            <ul class="space-y-2">
                                <li><a href="index.html" class="footer-link flex items-center transition duration-300"><i data-feather="chevron-right" class="mr-1 w-4 h-4"></i> Home</a></li>
                                <li><a href="menu.html" class="footer-link flex items-center transition duration-300"><i data-feather="chevron-right" class="mr-1 w-4 h-4"></i> Menu</a></li>
                                <li><a href="about.html" class="footer-link flex items-center transition duration-300"><i data-feather="chevron-right" class="mr-1 w-4 h-4"></i> About Us</a></li>
                                <li><a href="contact.html" class="footer-link flex items-center transition duration-300"><i data-feather="chevron-right" class="mr-1 w-4 h-4"></i> Contact</a></li>
                            </ul>
                        </div>
                        
                        <!-- Contact Info -->
                        <div>
                            <h3 class="text-xl font-bold mb-4">Contact Us</h3>
                            <ul class="space-y-2">
                                <li class="flex items-center"><i data-feather="map-pin" class="mr-2 w-4 h-4"></i> 123 Sweet Street, City</li>
                                <li class="flex items-center"><i data-feather="phone" class="mr-2 w-4 h-4"></i> (123) 456-7890</li>
                                <li class="flex items-center"><i data-feather="mail" class="mr-2 w-4 h-4"></i> hello@blossombakery.com</li>
                            </ul>
                            <button id="whatsappBtn" class="mt-4 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-full transition duration-300 flex items-center gap-2">
                                <i data-feather="message-circle"></i> WhatsApp Order
                            </button>
                        </div>
                        
                        <!-- Hours -->
                        <div>
                            <h3 class="text-xl font-bold mb-4">Opening Hours</h3>
                            <ul class="space-y-2">
                                <li class="flex justify-between"><span>Mon-Fri:</span> <span>7AM - 7PM</span></li>
                                <li class="flex justify-between"><span>Sat:</span> <span>8AM - 6PM</span></li>
                                <li class="flex justify-between"><span>Sun:</span> <span>9AM - 4PM</span></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="border-t border-pink-700 pt-6 flex flex-col md:flex-row justify-between items-center">
                        <p>&copy; ${new Date().getFullYear()} Blossom Bakery. All rights reserved.</p>
                        <a href="#" id="backToTop" class="back-to-top mt-4 md:mt-0 bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-full opacity-0 invisible transition-all duration-300">
                            <i data-feather="arrow-up"></i>
                        </a>
                    </div>
                </div>
            </footer>
        `;

        // Initialize WhatsApp button in footer
        const whatsappBtn = this.querySelector('#whatsappBtn');
        if (whatsappBtn) {
            whatsappBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const modal = document.getElementById('whatsappModal');
                if (modal) {
                    modal.classList.remove('hidden');
                    modal.classList.add('flex');
                }
            });
        }

        feather.replace();
    }
}

customElements.define('custom-footer', CustomFooter);