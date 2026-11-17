class JaxFooter extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <style>
                #container {
                    background-color: #3c51d9;
                    padding: 0.75rem;
                }
                p {
                    color: white;
                    margin: 0;
                }
            </style>
            <div id="container">
                <p>&copy; 2026 Jackson Bare</p>
            </div>
        `;
    }
}

customElements.define('jax-footer', JaxFooter);