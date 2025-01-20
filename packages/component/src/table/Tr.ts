import { Component, Listen } from '@in/common';

@Component({
  selector: 'in-tr',
  custom: { extends: 'tr' },
})
export class TrComponent extends HTMLTableRowElement {
  public $rowData: any;
  constructor() {
    super();
  }

  @Listen('data')
  setValue(ev: CustomEvent) {
    this.$rowData = ev.detail;
  }

  @Listen('patch')
  patchData(ev: CustomEvent) {
    this.$rowData[ev.detail.property] = ev.detail.changes;
  }
}
