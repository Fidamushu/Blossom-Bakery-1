class ProductCard extends HTMLElement {
    connectedCallback() {
        this.image = this.getAttribute('image') || '';
        this.title = this.getAttribute('title') || '';
        this.price = this.getAttribute('price') || '';
        this.description = this.getAttribute('description') || '';
        this.modalId = this.getAttribute('modal-id') || '';
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .product-card {
                    transition: all 0.3s ease;
                    min-width: 280px;
                }
                
                .product-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
                }
                
                .product-image {
                    height: 200px;
                    object-fit: cover;
                }
            </style>
            
            <div class="product-card bg-white rounded-lg overflow-hidden shadow-md cursor-pointer" ${this.modalId ? `onclick="document.getElementById('${this.modalId}').classList.remove('hidden')"` : ''}>
                <img src="${this.image}" alt="${this.title}" class="product-image w-full">
                <div class="p-4">
                    <h3 class="text-lg font-bold text-gray-800 mb-1">${this.title}</h3>
                    <p class="text-pink-500 font-bold">${this.price}</p>
                </div>
            </div>
        `;
    }
}

customElements.define('custom-product-card', ProductCard);