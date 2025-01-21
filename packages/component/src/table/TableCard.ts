import { Component, attachShadow, html, css, Listen } from '@in/common';

@Component({
  selector: 'in-tablecard',
  style: css`
    :host .primary[is='in-button'],
    :host .secondary[is='in-button'] {
      min-width: 160px;
      margin-left: var(--margin-lg);
    }

    .table-footer {
      display: flex;
      justify-content: space-between;
      padding-top: var(--padding-md);
    }

    [hidden] {
      display: none;
    }
  `,
  template: html`
    <in-card>
      <table is="in-table" slot="content"></table>
      <div class="table-footer" slot="footer">
        <div class="crud-actions">
          <button class="icon icon-add button-add" is="in-button">
            <svg aria-hidden="true" focusable="false data-prefix="fas"" data-icon="plus" class="svg-inline--fa fa-plus fa-w-14" role="img"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                fill="currentColor"
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
              />
            </svg>
          </button>
        </div>
        <div class="save-actions">
          <button class="primary button-save" is="in-button" hidden>
            save
          </button>
          <button class="secondary button-cancel" is="in-button" hidden>
            cancel
          </button>
          <button class="secondary button-edit" is="in-button">edit</button>
        </div>
      </div>
    </in-card>
  `,
})
export class TableCardComponent extends HTMLElement {
  private channel: BroadcastChannel;
  constructor() {
    super();
    attachShadow(this);
  }

  static get observedAttributes() {
    return ['channel'];
  }

  attributeChangedCallback(name, prev, next) {
    switch (name) {
      case 'channel':
        this.channel = new BroadcastChannel(next);
        this.$table.setAttribute('channel', next);
        break;
    }
  }

  @Listen('click', '.button-edit')
  editMode() {
    this.$editButton.setAttribute('hidden', 'true');
    this.$saveButton.removeAttribute('hidden');
    this.$cancelButton.removeAttribute('hidden');
    this.channel.postMessage({
      type: 'edit',
    });
  }

  @Listen('click', '.button-cancel')
  readOnlyMode() {
    this.$editButton.removeAttribute('hidden');
    this.$saveButton.setAttribute('hidden', 'true');
    this.$cancelButton.setAttribute('hidden', 'true');
    this.channel.postMessage({
      type: 'readOnly',
    });
  }

  @Listen('click', '.button-save')
  save() {
    this.channel.postMessage({
      type: 'save',
    });
  }

  @Listen('click', '.button-add')
  add() {
    this.$addButton.blur();
    this.$editButton.setAttribute('hidden', 'true');
    this.$saveButton.removeAttribute('hidden');
    this.$cancelButton.removeAttribute('hidden');
    this.channel.postMessage({
      type: 'add',
    });
  }

  get $table(): HTMLTableElement {
    return this.shadowRoot.querySelector('table');
  }

  get $editButton(): HTMLElement {
    return this.shadowRoot.querySelector('.button-edit');
  }

  get $saveButton(): HTMLElement {
    return this.shadowRoot.querySelector('.button-save');
  }

  get $cancelButton(): HTMLElement {
    return this.shadowRoot.querySelector('.button-cancel');
  }

  get $addButton(): HTMLElement {
    return this.shadowRoot.querySelector('.button-add');
  }
}
