import { Component, attachTemplate, attachStyle, html, css } from '@in/common';
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
    }
  }

  onTableData(next) {
    this.renderHeader(next.columnData);
    this.renderRows(next.rowData);
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
      const tr = document.createElement('tr');
      this.columnData.forEach((colData) => {
        const td = document.createElement('td');
        if (colData.align) {
          td.align = colData.align;
        }
        td.innerText = rowData[colData.property];
        tr.appendChild(td);
      });
      this.$body.append(tr);
    });
  }

  get $head() {
    return this.querySelector('thead');
  }

  get $body() {
    return this.querySelector('tbody');
  }
}
