import { attachShadow, html, css, Component } from '@in/common';

const styles = css``;
const shadowTemplate = html``;

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
}
