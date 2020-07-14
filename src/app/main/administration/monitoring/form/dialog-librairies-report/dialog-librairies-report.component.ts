import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'aw-dialog-librairies-report',
  templateUrl: './dialog-librairies-report.component.html'
})
export class DialogLibrairiesReportComponent implements OnInit {
  @Input()
  public get display() {
    return this.displayValue;
  }

  public set display(displayValue) {
    this.displayValue = displayValue;
    this.displayChange.emit(this.displayValue);
  }

  @Output()
  public displayChange: EventEmitter<boolean>;

  @Input() public importReportMessage: string | null;

  public readonly componentId: string;
  public displayValue: boolean;

  public constructor() {
    this.componentId = 'DialogLibrairiesReportComponent';
    this.displayChange = new EventEmitter<boolean>();
  }

  public ngOnInit() {
    // TODO
  }

  public closeDialog() {
    this.display = false;
  }
}
