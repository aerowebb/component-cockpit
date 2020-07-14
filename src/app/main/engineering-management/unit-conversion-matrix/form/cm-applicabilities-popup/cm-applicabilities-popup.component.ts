import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { DialogTableData } from '../../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../../shared/enums/table-selection-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { BireCmVariantDTO } from '../../../../../shared/types/api-output-types/unit-conversion-matrix/bire-unit-conversion-matrix-variant-dto.interface';
import { BireVariantDTO } from '../../../../../shared/types/api-types/bire-variant-dto.interface';
import { BireVariantVersionDTO } from '../../../../../shared/types/api-types/bire-variant-version-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../../shared/types/popup-entry.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';

import { ConversionMatrixApplicabilitiesPopupFormService } from './cm-applicabilities-popup.service';

@Component({
  selector: 'aw-cm-applicabilities-popup',
  templateUrl: './cm-applicabilities-popup.component.html'
})
export class ConversionMatrixApplicabilitiesPopupFormComponent extends DialogComponent implements OnInit {
  @Input('component-data') public componentData: PopupEntry<BireCmVariantDTO>;

  @Input() public isNewVariant: boolean;

  @Output() public onCreate: EventEmitter<BireCmVariantDTO> = new EventEmitter<BireCmVariantDTO>();

  @Output() public onUpdate: EventEmitter<BireCmVariantDTO> = new EventEmitter<BireCmVariantDTO>();

  public cmVariantObject: BireCmVariantDTO;

  public dialogTableDataFamilyCode: DialogTableData<BireVariantDTO>;

  public showFamilyCodeDialog: boolean;

  // POPUP
  public dialogTableData: DialogTableData<BireVariantVersionDTO>;
  public tableKeyMap: Map<string, Observable<LabelValue<string>[]>>;

  public constructor(
    public applicabilitiesPopupFormService: ConversionMatrixApplicabilitiesPopupFormService,
    private readonly messageService: MessageService,
    public sessionService: SessionService
  ) {
    super(ComponentOpenMode.Write, 'ConversionMatrixApplicabilitiesPopupFormComponent');

    this.showFamilyCodeDialog = false;

    this.tableKeyMap = new Map<string, Observable<LabelValue<string>[]>>();

    this.searchFamilyCode();
  }

  public getComponentName(): string {
    return 'ConversionMatrixApplicabilitiesPopupFormComponent';
  }

  public ngOnInit() {
    if (this.componentData && this.componentData.componentId && this.componentData.componentId.length > 0) {
      this.cmVariantObject = this.componentData.object as BireCmVariantDTO;
      this.updateOpenMode(this.componentData.openMode);
    }
  }

  public onShow() {
    this.display = true;
  }

  public onValidate(): void {
    if (this.isRequiredFieldsFilled()) {
      if (this.isNewVariant) {
        this.onCreate.emit(this.cmVariantObject);
        this.display = false;
      } else {
        this.onUpdate.emit(this.cmVariantObject);
        this.display = false;
      }
    } else {
      this.messageService.showErrorMessage('global.missingFields');
    }
  }

  public searchFamilyCode() {
    const test: TableColumn[] = [
      { field: 'familyCode', width: '200px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'familyName', width: '200px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'familyFunction', width: '200px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'structureType', width: '250px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'variantCode', width: '250px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'variantName', width: '200px', filterMode: TableColumnFilterMode.Input, alignment: 'left' }
    ];

    this.tableKeyMap.set('familyFunction', this.applicabilitiesPopupFormService.getEquipmentFunctionList());
    this.dialogTableDataFamilyCode = {
      componentId: 'ConversionMatrixApplicabilitiesPopupFormComponent.familyCodePopup',
      tableCols: test,
      tableRows: this.applicabilitiesPopupFormService.findFamilyVariantVersion(),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  private isRequiredFieldsFilled(): boolean {
    return !!this.cmVariantObject.familyCode;
  }

  public setSelectedFamilyCode(selectedObject: BireVariantDTO) {
    if (selectedObject) {
      this.cmVariantObject.familyCode = selectedObject.familyCode;
      this.cmVariantObject.structureType = selectedObject.structureType;
      this.cmVariantObject.variantCode = selectedObject.variantCode;
    }
    this.showFamilyCodeDialog = false;
  }

  public showFamilyCode() {
    this.showFamilyCodeDialog = true;
  }
}
