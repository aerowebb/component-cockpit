import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { forkJoin } from 'rxjs';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { InputValidationService } from '../../../../../shared/services/input-validation.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { BireSbCounterDTO } from '../../../../../shared/types/api-types/bire-sb-counter-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../../shared/types/popup-entry.interface';

import { SbAdLimitsPeriodicitiesPopupFormService } from './sb-ad-limits-periodicities-popup-form.service';

@Component({
  selector: 'aw-sb-ad-limits-periodicities-popup-form',
  templateUrl: './sb-ad-limits-periodicities-popup-form.component.html'
})
export class SbAdLimitsPeriodicitiesPopupFormComponent extends DialogComponent implements OnInit {
  @Input('component-data') public componentData: PopupEntry<BireSbCounterDTO>;

  @Input() public isNewLimitAndPeriodicity: boolean;

  @Input() public sbCounterLimitRefDateMap: string;

  @Input() public parentComponentName: string;

  @Output() public onCreate: EventEmitter<BireSbCounterDTO> = new EventEmitter<BireSbCounterDTO>();

  @Output() public onUpdate: EventEmitter<BireSbCounterDTO> = new EventEmitter<BireSbCounterDTO>();

  public assetObject: BireSbCounterDTO;
  public counterCodeList: LabelValue<string>[];
  public limitType: LabelValue<string>[];
  public limitRefernceType: LabelValue<string>[];
  public displayComment: string;

  public constructor(
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService,
    private readonly sbAdLimitsPeriodicitiesPopupFormService: SbAdLimitsPeriodicitiesPopupFormService,
    public inputValidationService: InputValidationService
  ) {
    super(ComponentOpenMode.Write, 'SbadFormComponent');
    this.assetObject = {};
  }

  public ngOnInit() {
    if (this.componentData && this.componentData.componentId && this.componentData.componentId.length > 0) {
      this.updateOpenMode(this.componentData.openMode);
      this.loadDropdownList();
    }
  }

  public onShow() {
    this.display = true;
  }

  public onValidate(): void {
    if (this.checkLimitsAndPeriodicities()) {
      if (this.isNewLimitAndPeriodicity) {
        this.onCreate.emit(this.assetObject);
        this.display = false;
      } else {
        this.onUpdate.emit(this.assetObject);
        this.display = false;
      }
    }
  }

  protected loadDropdownList(): void {
    const counterCode$ = this.sbAdLimitsPeriodicitiesPopupFormService.findAllColunterCode();
    const limitType$ = this.propertiesService.getValue('getSbCounterLimitTypeMap');
    const limitRefernceDate$ = this.propertiesService.getValue(this.sbCounterLimitRefDateMap);

    forkJoin([counterCode$, limitType$, limitRefernceDate$]).subscribe(([counterCode, types, refernceType]) => {
      this.counterCodeList = counterCode;
      this.limitType = types;
      this.limitRefernceType = refernceType;
      this.assetObject = this.componentData.object as BireSbCounterDTO;
      this.displayComment = this.getDisplayComments(this.assetObject.comments || '');
    });
  }

  public getComponentName(): string {
    return this.parentComponentName || super.getComponentName();
  }

  private checkLimitsAndPeriodicities(): boolean {
    if (!this.assetObject.counterCode) {
      this.messageService.showErrorMessage(this.getComponentName() + '.limitsAndPeriodicitiesMandatoryFields');

      return false;
    } else if (
      (this.assetObject.limitValue || this.assetObject.limitType || this.assetObject.limitReferenceDate) &&
      (this.assetObject.limitValue === undefined ||
        !this.assetObject.limitType === undefined ||
        !this.assetObject.limitReferenceDate === undefined)
    ) {
      this.messageService.showErrorMessage(this.getComponentName() + '.limitAndPeriodicitiesAllFieldsOrNone');

      return false;
    }

    return true;
  }

  public getDisplayComments(comment: string): string {
    try {
      if (comment) {
        const commentObj = JSON.parse(comment);
        if (commentObj && commentObj.length === 1) {
          return commentObj[0].comment;
        } else if (commentObj && commentObj.length > 1) {
          return !!commentObj[0].comment ? commentObj[0].comment : comment;
        }
      }

      return '';
    } catch (e) {
      return comment;
    }
  }
}
