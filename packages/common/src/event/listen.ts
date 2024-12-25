type MethodDecoratorFactoryFunction = (
  target: any,
  key: string | number,
  descriptor: PropertyDescriptor
) => void;

export function Listen(
  eventName: string,
  selector?: string
): MethodDecoratorFactoryFunction {
  return function decorator(
    target: any,
    key: string | number,
    descriptor: PropertyDescriptor
  ) {
    const { connectedCallback = () => {}, disconnectedCallback = () => {} } =
      target;
  };
}
