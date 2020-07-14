import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../../shared/services/session.service';
import { BidtPnAlternativeDTO } from '../../../../../../shared/types/api-types/bidt-pn-alternative-dto.interface';
import { BirePnDTO } from '../../../../../../shared/types/api-types/bire-pn-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { SelectItemUtils } from '../../../../../../shared/utils/select-item-utils';
import { MaterialFormService } from '../../material-form.service';

@Component({
  selector: 'aw-assign-alternative-popup-form',
  templateUrl: './assign-alternative-popup-form.component.html',
  styleUrls: ['../popup-form.component.scss']
})
export class AssignAlternativesPopupFormComponent extends DialogComponent implements OnInit {
  @Output()
  public onValidated: EventEmitter<BidtPnAlternativeDTO>;

  @Input()
  public openMode: ComponentOpenMode;

  @Input()
  public alternativeDetail: BidtPnAlternativeDTO;

  @Input()
  public pnCode: string;
  public interchangeability: SelectItem[];
  public showQuickSearchMaterialPopup: boolean;

  public searchObject: BirePnDTO;

  public constructor(
    public messageService: MessageService,
    public sessionService: SessionService,
    public propertiesService: PropertiesService,
    public materialFormService: MaterialFormService
  ) {
    super(ComponentOpenMode.Read, 'AssignAlternativesPopupFormComponent');
    this.onValidated = new EventEmitter<BidtPnAlternativeDTO>();
    this.displayChange = new EventEmitter<boolean>();
    this.showQuickSearchMaterialPopup = false;
    this.searchObject = {};
    this.loadDropDown();
  }

  public ngOnInit() {
    this.updateOpenMode(this.openMode);
    if (!this.alternativeDetail) {
      this.resetMaterials();
    }
  }

  public getTypeName(): string {
    return 'AssignAlternativesPopupFormComponent';
  }

  public cancel(): void {
    this.display = false;
  }
  public loadDropDown() {
    this.propertiesService.getValue('getPnInterchangeabilityMap').subscribe((results) => {
      this.interchangeability = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });
  }

  public resetMaterials(): void {
    this.alternativeDetail = {};
  }
  public quickSearchMaterial(): void {
    this.searchObject = {
      pnCode: this.alternativeDetail.birePnByFkBidtPnBidtPn2BirePnPnCode
    };
    this.showQuickSearchMaterialPopup = true;
  }

  public validate(): void {
    if (this.alternativeDetail) {
      this.alternativeDetail.nameOfInterchangebilty = '';
      this.interchangeability.forEach((res) => {
        if (!!this.alternativeDetail && this.alternativeDetail.alternativeType === res.value) {
          this.alternativeDetail.nameOfInterchangebilty = res.label;
        }
      });
      if (this.pnCode === this.alternativeDetail.birePnByFkBidtPnBidtPn2BirePnPnCode) {
        this.messageService.showWarningMessage(this.getTranslateKey('sameAlternativeError'));
      } else {
        this.onValidated.emit(this.alternativeDetail);
      }
    }
    this.cancel();
  }
  public isScreenValid() {
    if (this.alternativeDetail && this.alternativeDetail.birePnByFkBidtPnBidtPn2BirePnPnCode) {
      return true;
    }

    return false;
  }
  /*************************************************************************
   * Dialog Search Material
   *************************************************************************/

  public setSelectedMaterial(event: BirePnDTO): void {
    if (!!this.alternativeDetail) {
      if (Object.keys(event).length === 0) {
        this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
      }
      this.alternativeDetail.birePnByFkBidtPnBidtPn2BirePnPnCode = event.pnCode;
    } else {
      super.throwUnboundLocalError('setSelectedContact', 'this.contact');
    }
  }
}
