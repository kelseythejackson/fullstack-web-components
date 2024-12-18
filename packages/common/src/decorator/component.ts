export interface ElementMeta {
  selector?: string;
  style?: string;
  template?: string;
}

export function Component(meta: ElementMeta) {
  if (!meta) {
    console.error('Component must include ElementMeta to compile');
    return;
  }
  return (target: any) => {
    if (!meta.style) {
      meta.style = '';
    }
    if (!meta.template) {
      meta.template = '';
    }
    target.prototype.elementMeta = meta;
    if (meta.selector) {
      customElements.define(meta.selector, target);
    }
    return target;
  };
}
