import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { DialogComponent } from '../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-goods-receipt-scan',
  templateUrl: './dialog-package-scan.component.html',
  styleUrls: ['./dialog-package-scan.component.scss']
})
export class DialogGoodsReceiptPackageScanComponent extends DialogComponent implements AfterViewInit {
  private static readonly CODE_DEBOUNCE_TIME: number = 1000;

  @Output()
  public onValidate: EventEmitter<string>;

  @ViewChild('codeInput')
  public codeInputElt: ElementRef<HTMLElement>;

  public codeChanged: Subject<string>;
  public code: string;

  // ////////////////////////////////////////////////////////////////////////////

  public constructor(private readonly messageService: MessageService) {
    super(ComponentOpenMode.Read, 'DialogGoodsReceiptPackageScanComponent');

    this.onValidate = new EventEmitter<string>();

    this.code = '';

    this.registerCodeObservable();
  }

  // ////////////////////////////////////////////////////////////////////////////

  public ngAfterViewInit(): void {
    this.codeInputElt.nativeElement.focus();
  }

  // ////////////////////////////////////////////////////////////////////////////

  public onScan(searchTextValue: string) {
    this.codeChanged.next(searchTextValue);
  }

  // ////////////////////////////////////////////////////////////////////////////

  private registerCodeObservable(): void {
    this.codeChanged = new Subject<string>();
    this.codeChanged
      .pipe(
        debounceTime(DialogGoodsReceiptPackageScanComponent.CODE_DEBOUNCE_TIME),
        distinctUntilChanged(),
        takeUntil(this.unsubscribe)
      )
      .subscribe({
        next: (value) => {
          if (value) {
            try {
              this.onValidate.emit(value);
              this.closeDialog();
            } catch (error) {
              this.messageService.showErrorMessage(this.getTranslateKey('errorOnParsing'));
            }
          }
        }
      });
  }
}
