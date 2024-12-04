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
      <style>
        :host {
          display: block;
          font-family: var(--font-default);
          font-size: var(--font-body-sm);
        }
        input {
          height: var(--input-min-dimension);
          width: 100%;
          border-radius: var(--radius-sm);
          border: var(--border-default);
          font-size: var(--font-body-md);
          padding-left: var(--padding-sm);
          outline: none;
          box-sizing: border-box;
        }
        input:focus,
        input:focus:hover,
        input:active {
          border: var(--border-focus);
        }
        input.error,
        input.error:hover,
        input.error:focus,
        input.error:active {
          border: var(--border-error);
          outline: none;
          box-shadow: none;
          color: var(--color-error);
        }
        input[disabled] {
          opacity: var(--color-disable);
          background: var(--color-disable);
          border: var(--border-disable);
        }
        input[disabled]:hover,
        input[disabled]:focus,
        input[disabled]:active {
          border: var(--border-disable);
          outline: none;
          box-shadow: none;
        }
        .message {
          margin-top: var(--margin-xxs);
          color: var(--color-error);
          font-weight: var(--font-weight-default);
        }
      </style>
            <div class="control">
                <input type="text" />
            </div>
            <div class="message"></div>
        `;
    shadowRoot.appendChild(template.content.cloneNode(true));
    this.internals = this.attachInternals();
  }

  static get observedAttributes() {
    return ["required", "value", "disabled"]
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
      case "disabled":
        this.disabled = next;
        break;
    }
  }

  connectedCallback() {
  
    for (let prop in this.$attr) {
      this.$input.setAttribute(prop, this.$attr[prop]);
    }
    this.$input.onblur = ()=> {
      this.onValidate(true);
    }
    this.onValidate(false);
  }

  formDisabledCallback(disabled) {
    this.disabled = disabled;
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

  focus() {
    this.$input.focus()
  }

  blur() {
    this.$input.blur()
  }

  set disabled (value: boolean | string) {
    if (value === "true" || value === true) {
      this.$input.setAttribute("disabled", "true")
    }
    if (value === "false" || value === false) {
      this.$input.removeAttribute("disabled")
    }
  }
  get disabled() {
    return this.$input.disabled;
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
