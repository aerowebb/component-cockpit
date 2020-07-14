import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appKeyPress]'
})
export class KeyPressDirective {
  @Input() public keyCode: string;

  @Output() public keyPress: EventEmitter<void>;

  public constructor() {
    this.init();
  }

  @HostListener('document:keypress', ['$event'])
  public onKeyPress(event: KeyboardEvent): void {
    if (event.key === this.keyCode) {
      this.keyPress.emit();
    }
  }

  private init(): void {
    this.keyPress = new EventEmitter<void>();
  }
}
