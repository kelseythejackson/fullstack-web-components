import { attachShadow, html, css, Component } from '@in/common';

const styles = css``;
const shadowTemplate = html``;

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
