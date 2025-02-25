import { attachShadow, css, html, Component } from '@in/common';

const styles = css``;
const shadowTemplate = html`
  <h1>Dashboard</h1>
  <a href="/">Landing Page</a>
  <a href="/login">Login</a>
`;

@Component({
  selector: 'dashboard-view',
  style: styles,
  template: shadowTemplate,
})
export class DashboardView extends HTMLElement {
  constructor() {
    super();
    attachShadow(this);
  }
}
