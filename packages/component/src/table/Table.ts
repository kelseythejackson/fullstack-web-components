import { Component, attachTemplate, attachStyle, html, css } from '@in/common';
import { TrComponent } from './Tr';
import { TdComponent } from './Td';
export interface Column {
  property: string;
  label: string;
  span?: number;
  align: 'left' | 'center' | 'right' | 'justify';
  index: number;
}

export type ColumnData = Column[];

@Component({
  selector: 'in-table',
  custom: { extends: 'table' },
  style: css`
    [is='in-table'] {
      font-family: var(--font-default);
      font-size: var(--font-body-md);
      font-weight: var(--font-weight-default);
      color: var(--color-neutral-500);
      width: 100%;
    }
    [is='in-table'] th {
      display: table-cell;
      box-sizing: border-box;
      margin-top: var(--margin-xs);
      padding-left: calc(var(--padding-xxs) + var(--padding-sm));
      padding-right: var(--padding-xxs);
      height: 44px;
      vertical-align: middle;
      font-weight: var(--font-weight-default);
    }
    [is='in-table'] tr {
      height: 58px;
      vertical-align: middle;
    }
    [is='in-table'] td {
      padding-left: var(--padding-xxs);
      padding-right: var(--padding-xxs);
    }
  `,
  template: html`
    <thead></thead>
    <tbody></tbody>
  `,
})
export class TableComponent extends HTMLTableElement {
  private channel: BroadcastChannel;
  private columnData: ColumnData;
  private savedState: any[];
  private editIndex: number = 0;
  constructor() {
    super();
    attachTemplate(this);
    attachStyle(this);
  }

  static get observedAttributes() {
    return ['channel'];
  }

  attributeChangedCallback(name, prev, next) {
    switch (name) {
      case 'channel':
        this.channel = new BroadcastChannel(next);
        this.channel.onmessage = this.onMessage.bind(this);
        break;
    }
  }

  onMessage(ev) {
    switch (ev.data.type) {
      case 'data':
        this.onTableData(ev.data.detail);
        break;
      case 'edit':
        this.onEdit();
        break;
      case 'readOnly':
        this.onReadOnly();
        break;
      case 'save':
        this.onSave();
        break;
    }
  }

  onEdit() {
    const cells = this.querySelectorAll('td');
    if (!this.savedState) {
      this.savedState = JSON.parse(JSON.stringify(this.state));
    }
    cells.forEach(this.handleCellListeners.bind(this));
    this.onNext();
  }
  onReadOnly() {
    const cells = this.querySelectorAll('td');
    cells.forEach((td) => {
      td.setAttribute('readonly', 'true');
    });
    if (this.savedState) {
      this.renderRows(this.savedState);
      this.savedState = undefined;
    }
    this.editIndex = 0;
  }
  onSave() {}

  onTableData(next) {
    this.renderHeader(next.columnData);
    this.renderRows(next.rowData);
  }

  get state() {
    return Array.from(this.querySelector('tbody').querySelectorAll('tr')).map(
      (tr: TrComponent) => tr.$rowData
    );
  }

  onNext() {
    const cells = this.querySelectorAll('td');
    if (!cells[this.editIndex]) {
      return;
    }
    const input = cells[this.editIndex].querySelector(
      'in-textinput'
    ) as HTMLInputElement;
    if (input) {
      input.focus();
    }
  }
  renderHeader(cols: ColumnData) {
    this.columnData = cols.sort((a, b) => a.index - b.index);
    const tr = document.createElement('tr');
    cols.forEach((colData) => {
      const th = document.createElement('th');
      th.innerText = colData.label;
      if (colData.span) {
        th.colSpan = colData.span;
      }
      if (colData.align) {
        th.align = colData.align;
      }
      tr.appendChild(th);
    });
    this.$head.innerHTML = '';
    this.$head.appendChild(tr);
  }

  renderRows(rows: any[]) {
    this.$body.innerHTML = '';
    rows.forEach((rowData) => {
      const tr = document.createElement('tr', { is: 'in-tr' });
      this.columnData.forEach((colData) => {
        const td = document.createElement('td', { is: 'in-td' });
        if (colData.align) {
          td.align = colData.align;
        }
        td.setAttribute('value', rowData[colData.property]);
        td.setAttribute('readonly', 'true');
        td.setAttribute('data-property', colData.property);
        td.innerText = rowData[colData.property];
        tr.appendChild(td);
      });
      this.$body.append(tr);
      tr.dispatchEvent(
        new CustomEvent('data', {
          detail: rowData,
        })
      );
    });
  }

  handleCellListeners(td: TdComponent, index: number) {
    const tr = td.parentNode as TrComponent;
    const input = td.querySelector('in-textinput') as HTMLInputElement;
    if (input) {
      input.value = td.getAttribute('value');
      td.setAttribute('readonly', 'false');
      input.onclick = (ev) => {
        const cells = this.querySelectorAll('td');
        this.editIndex = Array.from(cells).indexOf(td);
      };
      input.onkeyup = (ev) => {
        td.setAttribute('value', input.value);
        tr.dispatchEvent(
          new CustomEvent('patch', {
            detail: {
              property: td.getAttribute('data-property'),
              changes: td.getAttribute('value'),
            },
          })
        );
      };
      input.onkeydown = (ev) => {
        ev.stopPropagation();
        if (ev.key === 'Tab') {
          this.editIndex = index;
          this.onNext();
        }
      };
    }
  }

  get $head() {
    return this.querySelector('thead');
  }

  get $body() {
    return this.querySelector('tbody');
  }
}
