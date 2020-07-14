import { ListUtils } from './list-utils';

export class DomUtils {
  public static readonly HTML_ELEMENT_DISABLED_PROPERTY_KEY: string = 'disabled';

  public static isTargetDisabled(target: EventTarget | null): boolean {
    return !target || DomUtils.hasAttribute(target as HTMLElement, 'disabled');
  }

  public static getAttributeValue(element: HTMLElement | undefined, attributeName: string): string | null | undefined {
    return element && element.getAttribute(attributeName);
  }

  public static hasAttribute(element: HTMLElement | undefined, attributeName: string): boolean {
    return !!element && element.hasAttribute(attributeName);
  }

  public static addAttributeToDomElement(
    element: HTMLElement | undefined,
    attributeName: string,
    attributeValue: string
  ): void {
    if (element) {
      element.setAttribute(attributeName, attributeValue);
    }
  }

  public static removeAttributeToDomElement(element: HTMLElement | undefined, attributeName: string): void {
    if (element) {
      element.removeAttribute(attributeName);
    }
  }

  public static hasClass(element: HTMLElement | undefined, className: string): boolean {
    return !!element && element.classList.contains(className);
  }

  public static addClassToDomElement(element: HTMLElement | undefined, className: string): void {
    if (element) {
      element.classList.add(className);
    }
  }

  public static removeClassToDomElement(element: HTMLElement | undefined, className: string): void {
    if (element) {
      element.classList.remove(className);
    }
  }

  public static findChildByClassName(element: HTMLElement | undefined, className: string): HTMLElement | undefined {
    if (!element || !element.children) {
      return undefined;
    } else {
      let queue: Element[] = [...Array.from(element.children)];

      while (!ListUtils.isEmpty(queue)) {
        const first = queue.shift();
        if (!!first) {
          if (first.classList.contains(className)) {
            return first as HTMLElement;
          } else {
            queue = [...queue, ...Array.from(first.children)];
          }
        }
      }

      return undefined;
    }
  }

  public static findChildrenByClassName(element: HTMLElement | undefined, className: string): HTMLElement[] {
    if (!element || !element.children) {
      return [];
    } else {
      let queue: Element[] = [...Array.from(element.children)];
      let result: HTMLElement[] = [];

      while (!ListUtils.isEmpty(queue)) {
        const first = queue.shift();
        if (!!first) {
          if (first.classList.contains(className)) {
            result = [...result, first as HTMLElement];
          } else {
            queue = [...queue, ...Array.from(first.children)];
          }
        }
      }

      return result;
    }
  }

  public static findParentElementByClassName(
    element: HTMLElement | undefined,
    className: string
  ): HTMLElement | undefined {
    if (!element || !element.parentElement) {
      return undefined;
    } else {
      return !!element.parentElement.classList && element.parentElement.classList.contains(className)
        ? element.parentElement
        : this.findParentElementByClassName(element.parentElement, className);
    }
  }

  public static scrollToPosition(offsetPosition: number, behavior?: ScrollBehavior): void {
    window.scrollTo({
      behavior,
      top: offsetPosition
    });
  }
}
