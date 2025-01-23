export function query(selector: string, root?: HTMLElement): Element {
  function __query(
    selector: string,
    match: Element,
    element?: Element
  ): Element {
    if (!element && document.querySelector(selector)) {
      match = document.querySelector(selector);
    }
    if (match) {
      return match;
    }
    const walk = document.createTreeWalker(
      element ? element : (document.body as Element),
      NodeFilter.SHOW_ELEMENT,
      {
        acceptNode(node) {
          return NodeFilter.FILTER_ACCEPT;
        },
      },
      // @ts-ignore
      false
    );
    while (walk.nextNode()) {}
  }
  return __query(selector, root);
}
