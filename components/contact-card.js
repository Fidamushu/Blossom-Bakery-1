class ContactCard extends HTMLElement {
    constructor() {
        super();
        this.icon = this.getAttribute('icon') || 'phone';
        this.title = this.getAttribute('title') || '';
        this.text = this.getAttribute('text') || '';
        this.action = this.getAttribute('action') || '#';
        this.id = this.getAttribute('id') || '';
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .contact-card {
                    transition: all 0.3s ease;
                }
                
                .contact-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
                }
                
                .contact-icon {
                    width: 40px;
                    height: 40px;
                    margin-bottom: 1rem;
                    color: #ec4899;
                }
            </style>
            
            <div class="contact-card bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div class="flex justify-center">
                    <i data-feather="${this.icon}" class="contact-icon"></i>
                </div>
                <h3 class="text-lg font-bold mb-2 text-gray-800">${this.title}</h3>
                ${this.action === '#' ? 
                    `<button class="text-pink-500 hover:text-pink-600 font-medium" ${this.id ? `id="${this.id}"` : ''}>${this.text}</button>` : 
                    `<a href="${this.action}" class="text-pink-500 hover:text-pink-600 font-medium">${this.text}</a>`
                }
            </div>
        `;
        
        feather.replace();
    }
}

customElements.define('custom-contact-card', ContactCard);