class ProductModal extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        // This component will be inserted by the product-card when needed
        this.innerHTML = `
            <style>
                .product-modal {
                    transition: all 0.3s ease;
                }
                
                .product-modal-image {
                    height: 300px;
                    object-fit: cover;
                }
                
                @media (max-width: 768px) {
                    .product-modal-image {
                        height: 200px;
                    }
                }
            </style>
        `;
    }
}

// Create modals for each product in menu.html
document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('custom-product-card[modal-id]')) {
        const productModals = document.querySelectorAll('custom-product-card[modal-id]');

        productModals.forEach(product => {
            const modalId = product.getAttribute('modal-id');
            const title = product.getAttribute('title');
            const price = product.getAttribute('price');
            const image = product.getAttribute('image');
            const description = product.getAttribute('description');

            const modal = document.createElement('div');
            modal.id = modalId;
            // FIXED: Removed 'flex' from initial classes — 'hidden' sets display:none,
            // and 'flex' is only added via JS when the modal is opened.
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 hidden items-center justify-center p-4 product-modal';
            modal.innerHTML = `
                <div class="bg-white rounded-lg w-full max-w-2xl overflow-hidden">
                    <div class="relative">
                        <img src="${image}" alt="${title}" class="product-modal-image w-full">
                        <button onclick="document.getElementById('${modalId}').classList.add('hidden'); document.getElementById('${modalId}').classList.remove('flex');" class="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-pink-500">
                            <i data-feather="x"></i>
                        </button>
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-4">
                            <h3 class="text-2xl font-bold text-gray-800">${title}</h3>
                            <p class="text-xl font-bold text-pink-500">${price}</p>
                        </div>
                        <p class="text-gray-600 mb-6">${description}</p>
                        <button class="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 w-full flex items-center justify-center gap-2" id="whatsappBtn-${modalId}">
                            <i data-feather="message-circle"></i> Order via WhatsApp
                        </button>
                    </div>
                </div>
            `;

            document.body.appendChild(modal);

            // Close modal when clicking the backdrop
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.add('hidden');
                    modal.classList.remove('flex');
                }
            });

            // Initialize WhatsApp button in modal
            modal.querySelector(`#whatsappBtn-${modalId}`)?.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                const whatsappModal = document.getElementById('whatsappModal');
                if (whatsappModal) {
                    whatsappModal.classList.remove('hidden');
                    whatsappModal.classList.add('flex');
                }
            });

            // Open modal when clicking product card
            product.addEventListener('click', () => {
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                feather.replace();
            });
        });

        feather.replace();
    }
});

customElements.define('custom-product-modal', ProductModal);