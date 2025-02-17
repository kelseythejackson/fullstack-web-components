import { attachShadow, html, css, Component } from '@in/common';
import { COOKIES, CookieService } from './../../service/cookies';

const cookieService = new CookieService();
const styles = css`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  }
  #content-root {
    overflow-y: scroll;
  }
`;
const shadowTemplate = html`
  <app-header></app-header>
  <div id="content-root">
    <div class="section">
      <div class="blurb half right">
        <h2>Your Last Contact List</h2>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Orci dis sit
          himenaeos nullam senectus felis mauris feugiat.
        </p>
        <a href="/dashboard" class="cta dashboard-link">View Contacts</a>
      </div>
    </div>
    <div class="section">
      <div class="blurb">
        <h2>Turn Group Chats Into Live Events</h2>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Id fringilla
          parturient dapibus habitant suspendisse venenatis luctus. Faucibus ad
          litora mi torquent, mattis placerat congue id ex. Sodales vestibulum
          facilisi eget eros penatibus laoreet praesent aliquet. Ut vestibulum
          accumsan molestie, taciti interdum hac tristique. Arcu ante habitasse
          condimentum ad donec aliquet nisl dolor. Curae magnis amet nam
          torquent lacinia platea cubilia.
        </p>
      </div>
    </div>
  </div>
  <cookie-footer></cookie-footer>
`;

@Component({
  selector: 'main-view',
  style: styles,
  template: shadowTemplate,
})
export class MainView extends HTMLElement {
  constructor() {
    super();
    attachShadow(this);
  }

  connectedCallback() {
    cookieService.getPermission().then((cookies) => {
      if (cookies.permission === COOKIES.ACCEPT) {
        this.$cookieFooter.setAttribute('hidden', 'true');
      } else {
        this.$cookieFooter.removeAttribute('hidden');
      }
    });
  }

  get $cookieFooter() {
    return this.shadowRoot.querySelector('cookie-footer');
  }
}
