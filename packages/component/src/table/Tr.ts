import { Component } from '@in/common';

@Component({
  selector: 'in-tr',
  custom: { extends: 'tr' },
})
export class TrComponent extends HTMLTableRowElement {
  constructor() {
    super();
  }
}
