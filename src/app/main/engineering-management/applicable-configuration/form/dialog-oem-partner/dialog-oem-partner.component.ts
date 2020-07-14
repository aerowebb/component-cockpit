import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { BidoCustomerDTO } from '../../../../../shared/types/api-types/bido-customer-dto.interface';
import { BireItemDTOId } from '../../../../../shared/types/api-types/bire-item-dto-id.interface';
import { BirePartnerDTO } from '../../../../../shared/types/api-types/bire-partner-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { ApplicableConfigurationFormService } from '../applicable-configuration-form.service';

@Component({
  selector: 'aw-dialog-oem-partner',
  styleUrls: ['./dialog-oem-partner.component.scss'],
  templateUrl: './dialog-oem-partner.component.html'
})
export class DialogOemPartnerComponent extends DialogComponent implements OnInit {
  @Output()
  public onValidated: EventEmitter<Object>;
  @Input()
  public openMode: ComponentOpenMode;
  @Input()
  public oemPartnerMaxSelected: BireItemDTOId;
  @Input()
  public oemPartnerMinSelected: BireItemDTOId;

  @Input()
  public oemPartners: BirePartnerDTO[];

  public oemPartnerDTO: Object;
  public oemPartnersList: LabelValue<string>[];
  public selectedPartner: string;
  public bireItemDTOIdMin: BireItemDTOId;
  public bireItemDTOIdMax: BireItemDTOId;

  public constructor(
    private readonly messageService: MessageService,
    private readonly applicableConfigurationFormService: ApplicableConfigurationFormService
  ) {
    super(ComponentOpenMode.Read, 'DialogOemPartnerComponent');
    this.onValidated = new EventEmitter<Object>();

    // this.selectedPartner = '';
    this.bireItemDTOIdMin = {
      familyCode: '',
      variantCode: '',
      chapter: '',
      section: '',
      subject: '',
      sheet: '',
      marks: '',
      structureType: ''
    };

    this.bireItemDTOIdMax = {
      familyCode: '',
      variantCode: '',
      chapter: '',
      section: '',
      subject: '',
      sheet: '',
      marks: '',
      structureType: ''
    };

    this.bireItemDTOIdMax = { ...this.bireItemDTOIdMin };
  }

  public ngOnInit() {
    this.updateOpenMode(this.openMode);
    this.fetchOEMPartnerList();
  }

  // Event to fill OEM Partner dropdown
  private fetchOEMPartnerList() {
    const oemCustomer: BidoCustomerDTO = {};

    this.applicableConfigurationFormService.findOEMPartnersBySearchCriteria(oemCustomer).subscribe((result) => {
      this.oemPartnersList = result;

      if (this.oemPartnerMinSelected && this.oemPartnerMaxSelected) {
        this.oemPartnersList.forEach((results) => {
          if (results.value === this.oemPartnerMinSelected.structureType) {
            this.selectedPartner = this.oemPartnerMinSelected.structureType;
          }
        });
        this.bireItemDTOIdMax = this.oemPartnerMaxSelected;
        this.bireItemDTOIdMin = this.oemPartnerMinSelected;
      }
    });
  }

  public cancel(): void {
    this.display = false;
  }

  // Event on validate click
  public validate(): void {
    if (!this.selectedPartner) {
      this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');

      return;
    }

    const birePartner: BirePartnerDTO = {
      partnerCode: this.selectedPartner,
      itemRangeMin: `${this.bireItemDTOIdMin.chapter}-${this.bireItemDTOIdMin.section}-${
        this.bireItemDTOIdMin.subject
      }-${this.bireItemDTOIdMin.sheet}-${this.bireItemDTOIdMin.marks}`,
      itemRangeMax: `${this.bireItemDTOIdMax.chapter}-${this.bireItemDTOIdMax.section}-${
        this.bireItemDTOIdMax.subject
      }-${this.bireItemDTOIdMax.sheet}-${this.bireItemDTOIdMax.marks}`
    };

    if (!this.isItemRangeValid(birePartner)) {
      return;
    }

    if (!this.isDuplicateEntry(birePartner)) {
      this.onValidated.emit(birePartner);
      this.cancel();
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorOfDuplicateEntry'));
    }
  }

  // Is Item Range Valid or not
  private isItemRangeValid(birePartner): boolean {
    if (!this.bireItemDTOIdMin.chapter || !this.bireItemDTOIdMax.chapter) {
      this.messageService.showErrorMessage(this.getTranslateKey('errorOfValidChapterRequired'));

      return false;
    }

    const minItems = birePartner.itemRangeMin.split('-');
    const maxItems = birePartner.itemRangeMax.split('-');

    for (let i = 0; i < minItems.length; i++) {
      if (minItems[i] && maxItems[i]) {
        // Skip in case of equal, both alphabet, min has alpha and max has number
        if (
          minItems[i] === maxItems[i] ||
          (isNaN(minItems[i]) && isNaN(maxItems[i])) ||
          (isNaN(minItems[i]) && !isNaN(maxItems[i]))
        ) {
          continue;
        }

        // If Max has alphabet and min with numeric
        if (isNaN(maxItems[i]) && !isNaN(minItems[i])) {
          this.messageService.showErrorMessage(
            `Item Range is not correct! : ${birePartner.itemRangeMin}/${birePartner.itemRangeMax}`
          );

          return false;
        }

        if (minItems[i] > maxItems[i]) {
          this.messageService.showErrorMessage(
            `Item Range is not correct! : ${birePartner.itemRangeMin}/${birePartner.itemRangeMax}`
          );

          return false;
        }
      }
    }

    return true;
  }

  // Is duplicate entry being added
  private isDuplicateEntry(birePartner): boolean {
    let isFound = false;
    this.oemPartners.forEach((results) => {
      if (
        results.partnerCode === this.getPartnerLabel(birePartner.partnerCode) &&
        // results.itemRangeMax === birePartner.itemRangeMax &&
        results.itemRangeMin === birePartner.itemRangeMin
      ) {
        isFound = true;
      }
    });

    return isFound ? true : false;
  }

  private getPartnerLabel(val) {
    let label = '';
    this.oemPartnersList.forEach((res) => {
      if (res.value === val) {
        label = res.label;
      }
    });

    return label;
  }
}
