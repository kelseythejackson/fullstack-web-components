import { attachShadow, html, css, Component } from '@in/common';

const styles = css`
  :host {
    display: flex;
    justify-content: space-between;
    height: 120px;
    padding-left: var(--margin-lg);
    padding-right: var(--margin-lg);
    border-top: var(--border-default);
    align-items: center;
  }
  .button-container {
    align-self: right;
    display: flex;
    height: 40px;
  }
  button {
    margin-left: var(--margin-sm);
  }
  @media (max-width: 720px) {
    :host {
      flex-direction: column;
      margin-bottom: var(--margin-lg);
    }
  }
`;
const shadowTemplate = html`
  <p class="message">
    We use cookies to personalize content and ads, to provide social media
    features and to analyze our traffic.
  </p>
  <div class="button-container">
    <button is="in-button" class="in-button secondary">Deny</button>
    <button is="in-button" class="in button primary">Allow</button>
  </div>
`;

@Component({
  selector: 'cookie-footer',
  style: styles,
  template: shadowTemplate,
})
export class CookieFooter extends HTMLElement {
  constructor() {
    super();
    attachShadow(this);
  }
}
