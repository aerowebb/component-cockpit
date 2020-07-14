import { EventEmitter, Input, Output } from '@angular/core';

import { ComponentOpenMode } from '../enums/component-open-mode.enum';

import { GenericComponent } from './generic-component';

export abstract class DialogComponent extends GenericComponent {
  @Input()
  public get display(): boolean {
    return this._display;
  }

  public set display(displayValue) {
    this._display = displayValue;
    this.displayChange.emit(this._display);
  }

  @Output()
  public displayChange: EventEmitter<boolean>;

  private _display: boolean;

  protected constructor(openMode: ComponentOpenMode, private readonly _componentName: string) {
    super(openMode);

    this.displayChange = new EventEmitter<boolean>();
  }

  public getComponentName(): string {
    return this._componentName;
  }

  public closeDialog(): void {
    this.display = false;
  }
}
