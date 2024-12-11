export class ButtonComponent extends HTMLButtonElement {
  constructor() {
    super();
  }
}

customElements.define('in-button', ButtonComponent, { extends: 'button' });
