export class UnboundLocalError extends Error {
  public constructor(error: { componentName: string; methodName: string; variableName: string }) {
    const message =
      `${error.componentName}#${error.methodName}: ` +
      `variable '${error.variableName}' has been accessed before being initialized`;
    super(message);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, UnboundLocalError.prototype);
  }
}
