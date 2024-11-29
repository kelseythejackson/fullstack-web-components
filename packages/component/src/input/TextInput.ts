import { IElementInternals } from 'types/lib.elementInternals';
import { Validator, validate } from './validator';
export class TextInputComponent extends HTMLElement {
  static formAssociated = true;
  public $validator: Validator;
  private internals: IElementInternals;
  private $attr = {}
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
  }

  static get observedAttributes() {
    return ["required", "value"]
  }
  attributeChangedCallback(name, prev, next) {
    this.$attr[name] = next;
    switch (name) {
      case "value":
        this.value = next
        break;
      case "required":
        this.required = next
        break;
    }
  }

  connectedCallback() {
    this.$input.onblur = ()=> {
      this.onValidate(true);
    }
    for (let prop in this.$attr) {
      this.$input.setAttribute(prop, this.$attr[prop]);
    }
    this.onValidate(false);
  }
  checkValidity() {
    return this.internals.checkValidity();
  }
  reportValidity() {
    return this.internals.reportValidity();
  }

  onValidate(showError: boolean) {
    validate(this, showError)
  }
  get validity() {
    return this.internals.validity;
  }
  get validationMessage() {
    return this.internals.validationMessage;
  }

  get $input(): HTMLInputElement {
    return this.shadowRoot.querySelector('input');
  }

  set value (value: string) {
    this.$input.value = value
  }

  get value(): string {
    return this.$input.value
  }

  set required(value: boolean | string) {
    if (value === "true" || value === true) {
      this.$input.setAttribute("required", "true")
    }
    if (value === "false" || value == false) {
      this.$input.removeAttribute("required")
    }
  }

  get required(): boolean {
    return this.$input.required
  }

  setValidity(
    flags: ValidityStateFlags,
    message?: string,
    anchor?: HTMLElement
  ): void {
    this.internals.setValidity(flags, message, anchor);
  }
}

customElements.define('in-textinput', TextInputComponent);
