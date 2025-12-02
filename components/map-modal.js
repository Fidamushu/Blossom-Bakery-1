class MapModal extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        // This component is already implemented in contact.html
        // It's here for completeness in the component structure
        this.innerHTML = `
            <style>
                .map-modal {
                    transition: all 0.3s ease;
                }
            </style>
        `;
    }
}

customElements.define('custom-map-modal', MapModal);