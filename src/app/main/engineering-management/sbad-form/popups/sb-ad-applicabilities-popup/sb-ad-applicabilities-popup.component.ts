import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { DialogTableData } from '../../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../../shared/enums/table-selection-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { BireSbVariantDTO } from '../../../../../shared/types/api-types/bire-sb-variant-dto.interface';
import { BireVariantDTO } from '../../../../../shared/types/api-types/bire-variant-dto.interface';
import { BireVariantVersionDTO } from '../../../../../shared/types/api-types/bire-variant-version-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../../shared/types/popup-entry.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';

import { SbadApplicabilitiesPopupFormService } from './sb-ad-applicabilities-popup.service';

@Component({
  selector: 'aw-sb-ad-applicabilities-popup',
  templateUrl: './sb-ad-applicabilities-popup.component.html'
})
export class SbadApplicabilitiesPopupFormComponent extends DialogComponent implements OnInit {
  @Input('component-data') public componentData: PopupEntry<BireSbVariantDTO>;

  @Input() public isNewVariant: boolean;

  @Output() public onCreate: EventEmitter<BireSbVariantDTO> = new EventEmitter<BireSbVariantDTO>();

  @Output() public onUpdate: EventEmitter<BireSbVariantDTO> = new EventEmitter<BireSbVariantDTO>();

  public sbVariantObject: BireSbVariantDTO;

  public dialogTableDataFamilyCode: DialogTableData<BireVariantDTO>;

  public showFamilyCodeDialog: boolean;

  // POPUP
  public dialogTableData: DialogTableData<BireVariantVersionDTO>;
  public tableKeyMap: Map<string, Observable<LabelValue<string>[]>>;

  public constructor(
    public applicabilitiesPopupFormService: SbadApplicabilitiesPopupFormService,
    private readonly messageService: MessageService,
    public sessionService: SessionService
  ) {
    super(ComponentOpenMode.Write, 'SbadFormComponent');

    this.showFamilyCodeDialog = false;

    this.tableKeyMap = new Map<string, Observable<LabelValue<string>[]>>();

    this.searchFamilyCode();
  }

  public ngOnInit() {
    if (this.componentData && this.componentData.componentId && this.componentData.componentId.length > 0) {
      this.sbVariantObject = this.componentData.object as BireSbVariantDTO;
      this.updateOpenMode(this.componentData.openMode);
    }
  }

  public onShow() {
    this.display = true;
  }

  public onValidate(): void {
    if (this.isRequiredFiledFill()) {
      if (this.isNewVariant) {
        this.onCreate.emit(this.sbVariantObject);
        this.display = false;
      } else {
        this.onUpdate.emit(this.sbVariantObject);
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
      componentId: 'SbadFormComponent.familyCodePopup',
      tableCols: test,
      tableRows: this.applicabilitiesPopupFormService.findFamilyVariantVersion(),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  private isRequiredFiledFill(): boolean {
    return !!this.sbVariantObject.familyCode;
  }

  public setSelectedFamilyCode(selectedObject: BireVariantDTO) {
    if (selectedObject) {
      this.sbVariantObject.familyCode = selectedObject.familyCode;
      this.sbVariantObject.structureType = selectedObject.structureType;
      this.sbVariantObject.variantCode = selectedObject.variantCode;
    }
    this.showFamilyCodeDialog = false;
  }

  public showFamilyCode() {
    this.showFamilyCodeDialog = true;
  }
}
