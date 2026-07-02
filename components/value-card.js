class ValueCard extends HTMLElement {
    connectedCallback() {
        this.icon = this.getAttribute('icon') || 'star';
        this.title = this.getAttribute('title') || '';
        this.text = this.getAttribute('text') || '';
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .value-card {
                    transition: all 0.3s ease;
                }
                
                .value-card:hover {
                    transform: translateY(-5px);
                }
                
                .value-icon {
                    width: 48px;
                    height: 48px;
                    margin-bottom: 1rem;
                    color: #ec4899;
                }
            </style>
            
            <div class="value-card bg-white p-6 rounded-lg shadow-md text-center">
                <div class="flex justify-center">
                    <i data-feather="${this.icon}" class="value-icon"></i>
                </div>
                <h3 class="text-xl font-bold mb-2 text-pink-500">${this.title}</h3>
                <p class="text-gray-600">${this.text}</p>
            </div>
        `;

        feather.replace();
    }
}

customElements.define('custom-value-card', ValueCard);