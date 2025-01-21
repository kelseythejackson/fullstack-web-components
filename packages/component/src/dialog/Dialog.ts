import { Component, attachShadow, css } from '@in/common';

@Component({
  selector: 'in-dialog',
  style: css`
    :host {
      display: none;
    }
  `,
})
export class DialogComponent extends HTMLElement {
  public $state: 'open' | 'close';
  public $target: Element;
  public $targetSelector: string;
  public $templateSelector: string;
  public $variant: 'modal' | 'tooltip';
  public $container: Element;
  constructor() {
    super();
    attachShadow(this, {
      mode: 'open',
    });
  }

  static get observedAttributes() {
    return ['target', 'template', 'variant'];
  }

  attributeChangedCallback(name, prev, next) {
    switch (name) {
      case 'target':
        setTimeout(() => {
          this.setTarget(next);
        }, 0);
        break;
      case 'template':
        this.$templateSelector = next;
        break;
      case 'variant':
        this.$variant = next;
        break;
    }
  }

  setTarget(selector: string) {
    this.$targetSelector = selector;
    this.$target = document.querySelector(this.$targetSelector);
    if (!this.$target) {
      console.error(
        `DialogComponent cannot find Element with selector ${selector}`
      );
      return;
    }

    this.$target.addEventListener(
      'click',
      this.targetListener.bind(this),
      false
    );
  }

  targetListener(ev: MouseEvent) {
    if (this.$state !== 'open') {
      this.onOpen();
    }
  }

  onOpen() {
    const template = document.querySelector(
      this.$templateSelector
    ) as HTMLTemplateElement;
  }
}
