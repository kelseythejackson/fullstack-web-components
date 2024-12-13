export class ButtonComponent extends HTMLButtonElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.classList.add('in-button');
    this.addStylesheet();
  }

  addStylesheet() {
    const head = document.head;
    if (document.getElementById(`in-button-style`)) {
      return;
    }
    const style = document.createElement('style');
    style.setAttribute('id', `in-button-style`);
    style.textContent = buttonStyles;
    head.appendChild(style);
  }
}

const buttonStyles = `
    .in-button.primary {
      background: var(--color-blue-500);
      border: 2px solid var(--color-blue-500);
      box-sizing: border-box;
      border-radius: 12px;
      min-height: 44px;
      min-width: 180px;
      color: var(--color-white);
      font-size: var(--font-body-md);
      font-weight: var(--font-weight-button);
      cursor: pointer;
      padding: 0px;
    }
    .in-button.secondary {
      background: var(--color-blue-white);
      border: 2px solid var(--color-blue-500);
      box-sizing: border-box;
      border-radius: 12px;
      min-height: 44px;
      min-width: 180px;
      color: var(--color-blue-500);
      font-size: var(--font-body-md);
      font-weight: var(--font-weight-button);
      cursor: pointer;
      padding: 0px;
    }

    .in-button.icon {
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--color-white);
      border: 2px solid var(--color-blue-500);
      box-sizing: border-box;
      border-radius: 12px;
      height: 44px;
      width: 44px;
      color: var(--color-blue-500);
      font-size: var(--font-body-icon);
      font-weight: var(--font-weight-button);
      cursor: pointer;
      padding: 0px;
      padding: var(--padding-xs);
    }

    .icon svg {
      width: 100%;
      height: 100%;
    }

    .icon.icon-close svg {
      transform: rotateZ(45deg);
    }
  `;

customElements.define('in-button', ButtonComponent, { extends: 'button' });
