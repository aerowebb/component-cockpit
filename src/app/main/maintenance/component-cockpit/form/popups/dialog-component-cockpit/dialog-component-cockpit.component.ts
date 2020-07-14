import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../shared/services/message.service';
import { SessionService } from '../../../../../../shared/services/session.service';
import { FillTypeInput } from '../../../../../../shared/types/api-input-types/component-filter/fill-type-input-dto.interface';
import { FillValueInput } from '../../../../../../shared/types/api-input-types/component-filter/fill-value-input-dto.interface';
import { ElementListFilterOutput } from '../../../../../../shared/types/api-output-types/element-list-filter-output-dto.interface';
import { SiteListFilterOutput } from '../../../../../../shared/types/api-output-types/site-list-filter-output.interface';
import { VariantListFilterOutput } from '../../../../../../shared/types/api-output-types/variant-list-filter-output.interface';
import { BidoPuProfileDTO } from '../../../../../../shared/types/api-types/bido-pu-profile-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { LabelValueUtils } from '../../../../../../shared/utils/label-value-utils';

import { DialogComponentCockptService } from './dialog-component-cockpit.service';

@Component({
  selector: 'aw-dialog-component-cockpit',
  templateUrl: './dialog-component-cockpit.component.html',
  styleUrls: ['./dialog-component-cockpit.component.scss']
})
export class DialogComponentCockpitComponent  extends DialogComponent implements OnInit {
  @Input() public elementFlag : boolean;
  @Input() public profileFlag : boolean;
  @Input() public siteFlag : boolean;
  @Input() public variantFlag : boolean;
  @Input() public dialogData : ElementListFilterOutput;
  @Input() public propertyProfile : LabelValue<string>[];
  @Input() public propertySite : LabelValue<string>[];
  @Input() public propertyVariant : LabelValue<string>[];
  @Input()
  public openMode: ComponentOpenMode;
  @Output()
  public onValidated: EventEmitter<ElementListFilterOutput>;

  @Output()
  public onValidatedOtherData: EventEmitter<VariantListFilterOutput | SiteListFilterOutput | BidoPuProfileDTO>;

  public propertyObject: LabelValue<string>[];
  public propertyData: LabelValue<string>[];
  public propertyType: LabelValue<string>[];
  public propertyValue: LabelValue<string>[];
  public variantValue : VariantListFilterOutput;
  public siteValue : SiteListFilterOutput;
  public profileValue : BidoPuProfileDTO;

  public selectedData : string | undefined;


  public constructor(
    public readonly sessionService: SessionService,
    private readonly dialogComponentCockptService : DialogComponentCockptService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Read, 'DialogComponentCockpitComponent');
    this.propertyObject = [];
    this.propertyData = [];
    this.propertyType = [];
    this.propertyValue = [];
    this.onValidated = new EventEmitter<ElementListFilterOutput>();
    this.onValidatedOtherData = new EventEmitter<VariantListFilterOutput | SiteListFilterOutput | BidoPuProfileDTO>();
    this.variantValue = {};
    this.siteValue = {};
    this.profileValue = {};
    this.selectedData = undefined;
   }

  public ngOnInit() {
  this.updateOpenMode(this.openMode);
  if (!this.dialogData) {
    this.dialogData = {};
  }
  if (this.elementFlag) {
   this.fillDropDown();
  }
  }

  public fillDropDown() {
    this.dialogComponentCockptService.getObjectDropdown().subscribe(
      (results) => {
        this.propertyObject = results || [];
      },
      (err) => {
        this.messageService.showErrorMessage(err.error.errorDetail);
      }
    );
    if (!!this.dialogData.object) {
      if (this.dialogData.object === 'e.3') {
        this.propertyData = [];
        this.dialogComponentCockptService.getFilterList().subscribe(
          (results) => {
            let data: LabelValue<string>;
            if (!!results) {
              results.forEach((obj) => {
                if (!!obj.bidoPreferenceUserDTO.preferenceUserId && !!obj.bidoPreferenceUserDTO.description ) {
                  data = {
                    label: obj.bidoPreferenceUserDTO.description,
                    value: obj.bidoPreferenceUserDTO.preferenceUserId.toString()
                  };
                }
                this.propertyData.push(data);
              });
            } else {
              this.propertyData = [];
            }

            this.selectedData = this.dialogData.data;
          },
          (err) => {
            this.messageService.showErrorMessage(err.error.errorDetail);
          }
        );
      } else {
        const data1 = this.dialogData.object;
        this.dialogComponentCockptService.getDataDropdown(data1).subscribe(
          (results) => {
            this.propertyData = results || [];
            this.selectedData = this.dialogData.data;
          },
          (err) => {
            this.messageService.showErrorMessage(err.error.errorDetail);
          }
        );
      }
    }
    const data2 : FillTypeInput = {
      objectKey : this.dialogData.object,
      dataKey : this.dialogData.data
      };
    this.dialogComponentCockptService.getTypeDropDown(data2).subscribe(
      (results) => {
        this.propertyType = results || [];
      },
      (err) => {
        this.messageService.showErrorMessage(err.error.errorDetail);
      }
    );
    const data3 : FillValueInput = {
      objectKey : this.dialogData.object,
      dataKey : this.dialogData.data,
      typeKey : this.dialogData.type
    };
    this.dialogComponentCockptService.getValueDropdown(data3).subscribe(
      (results) => {
        this.propertyValue = results || [];
      },
      (err) => {
        this.messageService.showErrorMessage(err.error.errorDetail);
      }
    );
  }
  public loadObjectDropdown(): void {
    this.dialogComponentCockptService.getObjectDropdown().subscribe(
      (results) => {
        this.propertyObject = results || [];
      },
      (err) => {
        this.messageService.showErrorMessage(err.error.errorDetail);
      }
    );
  }

  public loadData(): void {
    this.selectedData = undefined;
    this.dialogData.data = undefined;
    this.dialogData.type = undefined;
    this.dialogData.value = undefined;
    this.propertyData = [];
    if (!!this.dialogData.object) {
      if (this.dialogData.object === 'e.3') {
        this.dialogComponentCockptService.getFilterList().subscribe(
          (results) => {
            let data: LabelValue<string>;
            if (!!results) {
              results.forEach((obj) => {
                if (!!obj.bidoPreferenceUserDTO.preferenceUserId && !!obj.bidoPreferenceUserDTO.description ) {
                  data = {
                    label: obj.bidoPreferenceUserDTO.description,
                    value: obj.bidoPreferenceUserDTO.preferenceUserId
                  };
                }
                this.propertyData.push(data);
              });
            } else {
              this.propertyData = [];
            }
          },
          (err) => {
            this.messageService.showErrorMessage(err.error.errorDetail);
          }
        );
      } else {
        const data = this.dialogData.object;
        this.dialogComponentCockptService.getDataDropdown(data).subscribe(
          (results) => {
            this.propertyData = results || [];
          },
          (err) => {
            this.messageService.showErrorMessage(err.error.errorDetail);
          }
        );
      }
    }
  }

  public loadType(): void {
    this.dialogData.type = undefined;
    this.dialogData.value = undefined;
    this.dialogData.data = this.selectedData;
    const data : FillTypeInput = {
      objectKey : this.dialogData.object,
      dataKey : this.dialogData.data
      };
    this.dialogComponentCockptService.getTypeDropDown(data).subscribe(
      (results) => {
        this.propertyType = results || [];
      },
      (err) => {
        this.messageService.showErrorMessage(err.error.errorDetail);
      }
    );
  }

  public loadValue(): void {
    this.dialogData.value = undefined;
    this.dialogData.data = this.selectedData;
    const data : FillValueInput = {
      objectKey : this.dialogData.object,
      dataKey : this.dialogData.data,
      typeKey : this.dialogData.type
    };
    this.dialogComponentCockptService.getValueDropdown(data).subscribe(
      (results) => {
        this.propertyValue = results || [];
      },
      (err) => {
        this.messageService.showErrorMessage(err.error.errorDetail);
      }
    );
  }

  public isChecked(): boolean {
    if (
      (!this.dialogData.data ||
      !this.dialogData.object ||
      !this.dialogData.type) &&
      !this.variantValue.name &&
      !this.profileValue.profileId &&
      !this.siteValue.name
    ) {
      return true;
    } else {
      return false;
    }
  }
  public onValidate() {
    if (this.elementFlag) {
      this.dialogData.objectKey = this.dialogData.object;
      this.dialogData.typeKey = this.dialogData.type;
      this.dialogData.dataKey = this.dialogData.data;
      this.dialogData.valueKey = !!this.dialogData.value ? this.dialogData.value : '';
      LabelValueUtils.stringValueToLabel<ElementListFilterOutput>(this.dialogData, 'objectKey', this.propertyObject);
      LabelValueUtils.stringValueToLabel<ElementListFilterOutput>(this.dialogData, 'dataKey', this.propertyData);
      LabelValueUtils.stringValueToLabel<ElementListFilterOutput>(this.dialogData, 'typeKey', this.propertyType);
      LabelValueUtils.stringValueToLabel<ElementListFilterOutput>(this.dialogData, 'valueKey', this.propertyValue);
      this.dialogData.value = !!this.dialogData.value ? this.dialogData.value : '';
      this.dialogData.filterPreferenceFormated =
      `${this.dialogData.object};;${this.dialogData.data};;${this.dialogData.type};;${this.dialogData.value}`;
      this.onValidated.emit(this.dialogData);
      this.closeDialog();
    }

    if (this.variantFlag) {
      this.variantValue.filterPreferenceFormated = this.variantValue.name;
      this.onValidatedOtherData.emit(this.variantValue);
      this.closeDialog();
    }

    if (this.siteFlag) {
      this.siteValue.filterPreferenceFormated = this.variantValue.name;
      this.onValidatedOtherData.emit(this.siteValue);
      this.closeDialog();
    }

    if (this.profileFlag) {
      this.onValidatedOtherData.emit(this.profileValue);
      this.closeDialog();
    }
  }

}
