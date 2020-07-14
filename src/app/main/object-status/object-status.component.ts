import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { DateService } from '../../shared/services/date.service';
import { OverlayRef } from '../overlay/overlay-ref';

export interface ObjectStatus {
  label: string;
  value: string;
}

export interface ObjectStatusInputData {
  currentAuthor: string;
  currentDate: Date;
  currentStatus: ObjectStatus;
  nextStatuses: ObjectStatus[];
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'aw-object-status',
  styleUrls: ['./object-status.component.scss'],
  templateUrl: './object-status.component.html'
})
export class ObjectStatusComponent {
  public tooltip: string;
  public currentStatus: ObjectStatus;
  public nextStatuses: ObjectStatus[];
  public newStatus: string | undefined;

  public constructor(
    private readonly _overlayRef: OverlayRef<string>,
    private readonly _dateService: DateService,
    private readonly _translateService: TranslateService
  ) {
    const inputData = this._overlayRef.data as ObjectStatusInputData;

    this.currentStatus = inputData.currentStatus;
    this.nextStatuses = inputData.nextStatuses
      .filter((status) => status.value !== this.currentStatus.value)
      .sort((s1, s2) => s1.label.localeCompare(s2.label));
    this.newStatus = undefined;

    this.tooltip = inputData.currentDate
      ? this._translateService.instant(
          'statusByOn',

          {
            author: inputData.currentAuthor,
            date: this._dateService.dateToString(inputData.currentDate)
          }
        )
      : this._translateService.instant(
          'statusBy',

          {
            author: inputData.currentAuthor
          }
        );
  }

  // //////////////////////////////////////////////////////////////////////////

  public validate(): void {
    if (this.newStatus) {
      this._overlayRef.close(this.newStatus);
    }
  }
}
