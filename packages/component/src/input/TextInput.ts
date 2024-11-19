export class TextInputComponent extends HTMLElement {
    static formAssociated = true;
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        const template = document.createElement("template");

        template.innerHTML = `
            <div class="control">
                <input type="text" />
            </div>
            <div class="message"></div>
        `;
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("in-textinput", TextInputComponent);