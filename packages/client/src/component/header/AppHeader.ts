import { attachShadow, html, css, Component } from '@in/common';

const styles = css``;
const shadowTemplate = html``;

@Component({
  selector: 'app-header',
  style: styles,
  template: shadowTemplate,
})
export class AppHeader extends HTMLElement {
  constructor() {
    super();
    attachShadow(this);
  }
}
