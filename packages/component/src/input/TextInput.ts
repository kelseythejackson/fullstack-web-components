import { IElementInternals } from 'types/lib.elementInternals';
export class TextInputComponent extends HTMLElement {
  static formAssociated = true;

  private internals: IElementInternals;
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const template = document.createElement('template');

    template.innerHTML = `
            <div class="control">
                <input type="text" />
            </div>
            <div class="message"></div>
        `;
    shadowRoot.appendChild(template.content.cloneNode(true));
    this.internals = this.attachInternals();
  };
  checkValidity() {
    return this.internals.checkValidity()
  };
  reportValidity() {
    return this.internals.reportValidity();
  };
  get validity() {
    return this.internals.validity;
  };
  get validationMessage() {
    return this.internals.validationMessage;
  };
  setValidity(flags: ValidityStateFlags, message?: string, anchor?: HTMLElement): void {
    this.internals.setValidity(flags, message, anchor);
  };
}

customElements.define('in-textinput', TextInputComponent);
