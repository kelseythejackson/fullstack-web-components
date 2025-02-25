import { attachShadow, css, html, Component } from '@in/common';

const styles = css``;
const shadowTemplate = html`
  <h1>Login</h1>
  <a href="/">Landing Page</a>
  <a href="/dashboard">Dashboard</a>
`;

@Component({
  selector: 'login-view',
  style: styles,
  template: shadowTemplate,
})
export class LoginView extends HTMLElement {
  constructor() {
    super();
    attachShadow(this);
  }
}
