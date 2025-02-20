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
    display: flex;
    flex-direction: column;
  }
  a:link,
  a:visited {
    font-family: var(--font-default);
    font-weight: var(--font-weight-default);
    font-size: var(--font-body-md);
    text-decoration: none;
    color: var(--color-black);
  }
  .cta:after {
    display: inline-block;
    margin-left: 4px;
    content: '\\25BA';
  }
  .section {
    padding: var(--margin-lg);
  }
  .blurb {
    text-align: justify;
  }
  .half {
    width: 50%;
  }
  .right {
    float: right;
  }
  [is='in-bg'] {
    width: calc(100% - (var(--margin-lg) * 2));
    min-height: 480px;
  }
  .section:last-child {
    padding-bottom: 120px;
  }
  .light {
    color: var(--color-white);
  }
  @media (max-width: 480px) {
    .half {
      width: 100%;
    }
    .third {
      width: 100%;
    }
    .right {
      float: left;
    }
  }
`;
const shadowTemplate = html`
  <app-header></app-header>
  <div id="content-root">
    <div
      is="in-bg"
      class="section"
      background="/style/asset/timon-studler-BIk2ANMmNz4-unsplash.jpg"
    >
      <div class="blurb half right">
        <h2>Your Last Contact List</h2>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Orci dis sit
          himenaeos nullam senectus felis mauris feugiat.
        </p>
        <a href="/dashboard" class="cta dashboard-link" hidden>View Contacts</a>
      </div>
    </div>
    <div
      is="in-bg"
      class="section light"
      background="/style/asset/valiant-made-zBkVp3E2CnE-unsplash.jpg"
    >
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
