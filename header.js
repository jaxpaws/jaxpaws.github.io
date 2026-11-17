class JaxHeader extends HTMLElement {
    static observedAttributes = ['current'];

    constructor() {
        super();
        this.current = 'about';
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) { return; }
        this[name] = newValue;
    }
    
    connectedCallback() {
        let classes = {
            about: '',
            experience: '',
            education: '',
            contact: ''
        }
        classes[this.current] = `class="current"`;

        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <style>
                #container {
                    background-color: #ffffff;
                }
                nav {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    padding: 0.25rem 0;
                    column-gap: 2px;
                }
                .flex-row {
                    display: flex;
                    flex-direction: row;
                    row-gap: 10px;
                    column-gap: 2px;
                }

                a {
                    font-size: 0.9rem;
                    color: black;
                    padding: 0.25rem;
                    text-decoration: none;
                    text-align: center;
                    align-self: center;
                }
                @media (width >= 500px) {
                    nav, .flex-row {
                        column-gap: 10px;
                        padding: 0.25rem 0.5rem;
                    }
                    a {
                        font-size: 1.1rem;
                        color: black;
                        padding: 0.5rem;
                        text-decoration: none;
                    }
                }
                @media (width >= 700px) {
                    a {
                        font-size: 1.25rem;
                        color: black;
                        padding: 0.5rem;
                        text-decoration: none;
                    }
                }
                
                a.current {
                    background: lightgrey;
                    color: black;
                    border-radius: 5px;
                }
                a:hover {
                    background: lightgrey;
                    color: black;
                    text-decoration: underline;
                    border-radius: 5px;
                }
            </style>
            <div id="container">
                <nav>
                    <a href="index.html" ${classes['about']}>Jackson Bare</a>
                    <span class="flex-row">
                        <a href="experience.html" ${classes['experience']}>Experience</a>
                        <a href="education.html" ${classes['education']}>Education</a>
                        <a href="connect.html" ${classes['connect']}>Connect</a>
                    </span>
                </nav>
            </div>
        `;
    }
}

customElements.define('jax-header', JaxHeader);