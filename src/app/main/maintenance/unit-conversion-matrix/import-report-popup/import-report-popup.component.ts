import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'aw-import-report-popup',
  templateUrl: './import-report-popup.component.html',
  styleUrls: ['./import-report-popup.component.scss']
})
export class ImportReportPopupComponent implements OnInit {
  @Input()
  public get display() {
    return this.displayValue;
  }

  public set display(displayValue) {
    this.displayValue = displayValue;
    this.displayChange.emit(this.displayValue);
  }

  @Output() public displayChange: EventEmitter<boolean>;

  @Input() public importReportMessage: string | null;

  public readonly componentId: string;
  public displayValue: boolean;

  public constructor() {
    this.componentId = 'ImportReportPopupComponent';
    this.displayChange = new EventEmitter<boolean>();
  }

  public ngOnInit() {
    if (this.importReportMessage === '') {
      this.close();
    }
  }

  public close(): void {
    this.display = false;
  }
}
