import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AWPropertiesConstants } from '../../../../../../shared/constants/aw-properties-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../../../../shared/services/date.service';
import { InputValidationService } from '../../../../../../shared/services/input-validation.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../../shared/services/session.service';
import { BirePnDTO } from '../../../../../../shared/types/api-types/bire-pn-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { MaterialFormService } from '../../material-form.service';

@Component({
  selector: 'aw-assign-container-popup-form',
  templateUrl: './assign-container-popup-form.component.html',
  styleUrls: ['../popup-form.component.scss']
})
export class AssignContainerPopupFormComponent extends DialogComponent implements OnInit {
  @Input()
  public containerDetail: BirePnDTO;
  @Input()
  public openMode: ComponentOpenMode;
  @Input()
  public pnType: string;
  @Output()
  public onValidated: EventEmitter<BirePnDTO>;

  public showSearchPartDialog: boolean;
  public isEditable: boolean;
  public goodFormattedDate: string;

  public constructor(
    public inputValidationService: InputValidationService,
    public messageService: MessageService,
    public sessionService: SessionService,
    public propertiesService: PropertiesService,
    public materialFormService: MaterialFormService,
    public readonly _dateService: DateService
  ) {
    super(ComponentOpenMode.Read, 'AssignContainerPopupFormComponent');
    this.onValidated = new EventEmitter<BirePnDTO>();
    this.displayChange = new EventEmitter<boolean>();
    this.showSearchPartDialog = false;
  }

  public ngOnInit() {
    this.updateOpenMode(this.openMode);

    if (!this.containerDetail) {
      this.containerDetail = {};
    } else {
      this.goodFormattedDate = this._dateService.dateToString(this.containerDetail.statusDate);
    }

    if (this.pnType === AWPropertiesConstants.PN_TYPE_BOX_KEY) {
      this.containerDetail.pnType = '';
    } else {
      this.containerDetail.pnType = AWPropertiesConstants.PN_TYPE_BOX_KEY;
    }
  }

  public getTypeName(): string {
    return 'AssignContainerPopupFormComponent';
  }

  public cancel(): void {
    this.display = false;
  }

  public validate(): void {
    if (!!this.containerDetail.pnCode) {
      this.onValidated.emit(this.containerDetail);
    }
    this.cancel();
  }

  public isScreenValid() {
    if (!!this.containerDetail.pnCode) {
      return true;
    }

    return false;
  }

  public searchPNCode() {
    this.showSearchPartDialog = true;
  }

  public setSelectedPnCode(selectedObject: BirePnDTO) {
    if (selectedObject) {
      this.containerDetail = selectedObject;
    }
  }
}
