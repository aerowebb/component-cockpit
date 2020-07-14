import { Injectable } from '@angular/core';

@Injectable()
export class DomHandler {
  private calculatedScrollbarWidth: number | undefined = undefined;

  public addClass(element, className: string): void {
    if (element.classList) {
      element.classList.add(className);
    } else {
      element.className += ' ' + className;
    }
  }

  public appendChild(element, target) {
    if (this.isElement(target)) {
      target.appendChild(element);
    } else if (target.el && target.el.nativeElement) {
      target.el.nativeElement.appendChild(element);
    }
  }

  public getOuterHeight(el, margin?): number {
    let height = el.offsetHeight;

    if (margin) {
      const style = getComputedStyle(el);
      if (style.marginTop && style.marginBottom) {
        height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
      }
    }

    return height;
  }

  public getOuterWidth(el, margin?): number {
    let width = el.offsetWidth;

    if (margin) {
      const style = getComputedStyle(el);
      if (style.marginLeft && style.marginRight) {
        width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
      }
    }

    return width;
  }

  public getScrollbarWidth(): number {
    if (!this.calculatedScrollbarWidth) {
      const scrollDiv = document.createElement('div');
      scrollDiv.style.height = '100px';
      scrollDiv.style.overflow = 'scroll';
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '100px';

      document.body.appendChild(scrollDiv);
      const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);

      this.calculatedScrollbarWidth = scrollbarWidth;

      return scrollbarWidth;
    } else {
      return this.calculatedScrollbarWidth;
    }
  }

  public getViewport(): { width: number; height: number } {
    return { width: window.innerWidth, height: window.innerHeight };
  }

  public removeChild(element, target): void {
    if (this.isElement(target)) {
      target.removeChild(element);
    } else if (target.el && target.el.nativeElement) {
      target.el.nativeElement.removeChild(element);
    }
  }

  public removeClass(element, className: string): void {
    if (element.classList) {
      element.classList.remove(className);
    } else {
      element.className = element.className.replace(
        new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'),
        ' '
      );
    }
  }

  private isElement(obj): boolean {
    return typeof HTMLElement === 'object'
      ? obj instanceof HTMLElement
      : obj && typeof obj === 'object' && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === 'string';
  }
}
