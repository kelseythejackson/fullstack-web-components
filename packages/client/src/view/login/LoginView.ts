import { attachShadow, css, html, Component } from '@in/common';

const styles = css``;
const shadowTemplate = html`
  <app-header></app-header>
  <div id="content-root">
    <in-card style="max-width: 320px">
      <h4 slot="header">Login</h4>
      <form name="foo" slot="content">
        <fieldset>
          <legend>Login Form</legend>
        </fieldset>
      </form>
    </in-card>
  </div>
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
