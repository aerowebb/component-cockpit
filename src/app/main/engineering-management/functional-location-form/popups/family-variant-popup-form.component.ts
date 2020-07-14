import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { DialogTableData } from '../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../shared/services/message.service';
import { BireItemDTOId } from '../../../../shared/types/api-types/bire-item-dto-id.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { FindBidoFlVariantsByFlCodeDTO } from '../../../../shared/types/api-types/find-bido-fl-variants-by-fl-code-dto.interface';
import { FindBireVariantVersionsByFamilyFunctionAlternativeDTO } from '../../../../shared/types/api-types/find-bire-variant-versions-by-family-function-alternative-dto.interface';
import { DialogComponent } from '../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../shared/types/popup-entry.interface';

import { FamilyVariantPopupFormService } from './family-variant-popup-form.service';

@Component({
  selector: 'aw-family-variant-popup-form',
  styleUrls: ['./family-variant-popup-form.component.scss'],
  templateUrl: './family-variant-popup-form.component.html'
})
export class FamilyVariantPopupFormComponent extends DialogComponent implements OnInit {
  @Input('component-data')
  public componentData: PopupEntry<FindBidoFlVariantsByFlCodeDTO> | undefined;
  @Input()
  public familyvariantItems: FindBidoFlVariantsByFlCodeDTO | undefined;
  @Output()
  public onAdded: EventEmitter<FindBidoFlVariantsByFlCodeDTO>;
  @Output()
  public onUpdate: EventEmitter<FindBidoFlVariantsByFlCodeDTO> = new EventEmitter<FindBidoFlVariantsByFlCodeDTO>();
  @Input()
  public isNewFunctionalLocation: boolean;
  @Input()
  public isReadOnlyForm: boolean;

  public findBireVariantVersion: FindBireVariantVersionsByFamilyFunctionAlternativeDTO[];
  public findBireVariantVersionFilter: FindBireVariantVersionsByFamilyFunctionAlternativeDTO[];
  public familyVariants: LabelValue<string>[];
  public familyVariantCode: string | undefined;
  public itemTableData: DialogTableData<BireItemDTO>;
  public showItemTableDialog: boolean;
  public readonly componentId: string;
  public inputBireItemDTOId: BireItemDTOId;
  public familyCode: string | undefined;
  public structureType: string | undefined;
  public variantCode: string | undefined;

  public bireItemDTO: BireItemDTOId;
  public flFunction: string | undefined;

  public chapter: string;
  public section: string;
  public subject: string;
  public sheet: string;
  public marks: string;

  public constructor(
    public familyVariantPopupFormService: FamilyVariantPopupFormService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'FunctionalLocationFormComponent');

    this.findBireVariantVersion = [];
    this.findBireVariantVersionFilter = [];
    this.loadfamilyVariant();
    this.familyCode = undefined;
    this.familyVariantCode = undefined;
    this.familyVariants = [];
    this.onAdded = new EventEmitter<FindBidoFlVariantsByFlCodeDTO>();
    this.familyvariantItems = undefined;
    this.bireItemDTO = {
      familyCode: !!this.familyCode ? this.familyCode : '',
      variantCode: !!this.variantCode ? this.variantCode : '',
      chapter: '',
      section: '',
      subject: '',
      sheet: '',
      marks: '',
      structureType: !!this.structureType ? this.structureType : ''
    };
    // this.chapter = undefined;
    // this.section = undefined;
    // this.subject = undefined;
    // this.sheet = undefined;
    // this.marks = undefined;
  }

  public ngOnInit() {
    if (this.componentData && this.componentData.object) {
      this.updateOpenMode(this.componentData.openMode);
      this.familyVariantCode = this.componentData.object.familyVariantCode;
      if (this.componentData.object.bireItemDTOId) {
        this.bireItemDTO = this.componentData.object.bireItemDTOId;
      }
      if (!!this.componentData.object.flFunction) {
        this.flFunction = this.componentData.object.flFunction;
      }
    }
  }

  // To bind drop-down
  private loadfamilyVariant(): void {
    this.familyVariantPopupFormService.findBireVariantVersionsByFamilyFunctionAlternative().subscribe((results) => {
      this.findBireVariantVersion = results;
      const list: LabelValue<string>[] = [];
      results.forEach((element) => {
        list.push(element.labelValue);
      });

      this.familyVariants = list;

      // To fetch the value of familyCode and VariantCode
      if (this.familyVariantCode) {
        this.familyCode = results.filter(
          (x) => x.labelValue.value === this.familyVariantCode
        )[0].bireVariantVersionDTO.familyCode;
        const strType = results.filter((x) => x.labelValue.value === this.familyVariantCode)[0].bireVariantVersionDTO
          .structureType;
        if (!!strType) {
          this.structureType = strType;
        }
        const varCode = results.filter((x) => x.labelValue.value === this.familyVariantCode)[0].bireVariantVersionDTO
          .variantCode;
        if (!!varCode) {
          this.variantCode = varCode;
        }
        if (!!this.familyvariantItems) {
          this.familyvariantItems.familyVariantCode = this.variantCode;
        }
      }
    });
  }

  // To split the value of family-variant, as they are used in search parameter
  public onFamilyVariantSelected(event) {
    this.findBireVariantVersionFilter = [];
    this.familyCode = undefined;
    this.structureType = undefined;
    this.variantCode = undefined;

    this.bireItemDTO.chapter = '';
    this.bireItemDTO.section = '';
    this.bireItemDTO.sheet = '';
    this.bireItemDTO.subject = '';
    this.bireItemDTO.marks = '';
    // this.bireItemDTO = {
    //   familyCode: undefined,
    //   variantCode: undefined,
    //   chapter: '',
    //   section: '',
    //   subject: '',
    //   sheet: '',
    //   marks: '',
    //   structureType: undefined
    // };
    if (event.value) {
      this.findBireVariantVersionFilter = this.findBireVariantVersion.filter((x) => x.labelValue.value === event.value);
      this.familyCode = this.findBireVariantVersionFilter[0].bireVariantVersionDTO.familyCode;
      this.structureType = this.findBireVariantVersionFilter[0].bireVariantVersionDTO.structureType;
      this.variantCode = this.findBireVariantVersionFilter[0].bireVariantVersionDTO.variantCode;
    }
  }

  public onCancel() {
    this.display = false;
  }

  public onSave(): void {
    if (!this.familyVariantCode || this.familyVariantCode.trim().length === 0) {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    } else {
      this.familyvariantItems = {
        bireItemDTOId: this.bireItemDTO,
        item:
          this.bireItemDTO.chapter +
          '-' +
          this.bireItemDTO.section +
          '-' +
          this.bireItemDTO.subject +
          '-' +
          this.bireItemDTO.sheet +
          '-' +
          this.bireItemDTO.marks
      };

      // tslint:disable-next-line:max-line-length
      const selectedVariantCode: FindBireVariantVersionsByFamilyFunctionAlternativeDTO = this.findBireVariantVersion.filter(
        (x) => !!this.familyVariantCode && x.labelValue.value.includes(this.familyVariantCode)
      )[0];
      this.familyvariantItems.familyVariantCode = selectedVariantCode.labelValue.value;

      if (this.isNewFunctionalLocation) {
        this.onAdded.emit(this.familyvariantItems);
        this.display = false;
      } else {
        this.onUpdate.emit(this.familyvariantItems);
        this.display = false;
      }
    }
  }

  // To open item dialog
  public openItemTableDialog(): void {
    if (!this.isReadOpenMode) {
      this.showItemTableDialog = true;
    }
  }

  public onSelectedItem(item: BireItemDTO): void {
    if (
      !!item &&
      !!item.chapter &&
      !!item.section &&
      !!item.subject &&
      !!item.sheet &&
      !!item.marks &&
      !!item.structureType
    ) {
      this.familyCode = item.familyCode;
      this.structureType = item.structureType;
      this.variantCode = item.variantCode;
      this.familyVariantCode = `${item.familyCode}-${item.variantCode}`;
      this.bireItemDTO = {
        familyCode: item.familyCode,
        variantCode: item.variantCode,
        chapter: item.chapter,
        section: item.section,
        subject: item.subject,
        sheet: item.sheet,
        marks: item.marks,
        structureType: item.structureType as string
      };
    } else {
      super.throwUnboundLocalError('onSelectedItem', 'item && this.structureType');
    }
  }
}
