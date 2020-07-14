import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[numeric]'
})
export class NumericDirective {
  @Input('decimals') public decimals: number = 0;

  private readonly specialKeys = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Delete'];

  public constructor(private readonly el: ElementRef) {}

  private check(value: string, decimals: number) {
    if (decimals <= 0) {
      return String(value).match(new RegExp(/^\d+$/));
    } else {
      const regExpString = `^\\s*((\\d+(\\.\\d{0,${decimals}})?)|((\\d*(\\.\\d{1,${decimals}}))))\\s*$`;

      return String(value).match(new RegExp(regExpString));
    }
  }

  @HostListener('keydown', ['$event'])
  public onKeyDown(event: KeyboardEvent) {
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    const current: string = this.el.nativeElement.value;
    const next: string = current.concat(event.key);
    if (next && !this.check(next, this.decimals)) {
      event.preventDefault();
    }
  }
}
