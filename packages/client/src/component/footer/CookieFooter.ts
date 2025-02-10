import { attachShadow, html, css, Component } from '@in/common';

const styles = css``;
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
