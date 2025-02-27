import { attachShadow, css, html, Component } from '@in/common';

const styles = css`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  }
  #content-root {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    min-width: 320px;
  }
`;
const shadowTemplate = html`
  <app-header></app-header>
  <div id="content-root">
    <in-card style="max-width: 320px">
      <h4 slot="header">Login</h4>
      <form name="foo" slot="content">
        <fieldset>
          <legend>Login Form</legend>
          <label for="username">Username</label>
          <in-textinput
            type="text"
            id="username"
            name="username"
            required
            minlength="5"
            class="form-control"
          ></in-textinput>
          <label for="password">Password</label>
          <in-textinput
            type="password"
            id="password"
            name="password"
            required
            minlength="5"
            class="form-control"
          ></in-textinput>
          <button class="primary submit form-button" is="in-button">
            Submit
          </button>
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
