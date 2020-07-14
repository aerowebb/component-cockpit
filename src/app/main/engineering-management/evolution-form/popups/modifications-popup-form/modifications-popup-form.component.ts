import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { DialogTableData } from '../../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../../shared/enums/table-selection-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { BireFamilyDTO } from '../../../../../shared/types/api-types/bire-family-dto.interface';
import { BireModificationDTO } from '../../../../../shared/types/api-types/bire-modification-dto.interface';
import { BireModificationEvolutionDTO } from '../../../../../shared/types/api-types/bire-modification-evolution-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../../shared/types/popup-entry.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';

import { ModificationsPopupFormService } from './modifications-popup-form.service';

@Component({
  selector: 'aw-modifications-popup-form',
  templateUrl: './modifications-popup-form.component.html'
})
export class ModificationsPopupFormComponent extends DialogComponent implements OnInit {
  @Input('component-data')
  public componentData: PopupEntry<BireModificationEvolutionDTO> | null;

  @Input()
  public isNewModification: boolean;

  @Input()
  public isReadOnlyForm: boolean;

  @Output()
  public onCreate: EventEmitter<BireModificationEvolutionDTO>;

  @Output()
  public onUpdate: EventEmitter<BireModificationEvolutionDTO>;

  public newEvol: BireModificationDTO;
  public newItem: boolean;
  public contentTable: BireModificationDTO[];
  public selectedEvolutions: BireModificationDTO[];

  public familyCodeTable: BireFamilyDTO[];
  public selectedfamilyCodeTable: BireFamilyDTO[];
  public familyCodeTableTableCols: TableColumn[];
  public familyCodeTableFilteredRowsNb: number;

  public modificationTypeTable: BireModificationDTO[];
  public selectedmodificationTypeTable: BireModificationDTO[];
  public modificationTypeTableCols: TableColumn[];
  public modificationTypeTableFilteredRowsNb: number;

  public dialogTableDataFamilyCode: DialogTableData<BireFamilyDTO>;
  public dialogTableDataModificationType: DialogTableData<BireModificationDTO> | undefined;
  public showFamilyCodeDialog: boolean;
  public showModificationTypeDialog: boolean;
  public keyMap: Map<string, Observable<LabelValue<string>[]>>;

  public constructor(
    public modificationsPopupFormService: ModificationsPopupFormService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'ModificationsPopupDialog');

    this.onCreate = new EventEmitter<BireModificationEvolutionDTO>();
    this.onUpdate = new EventEmitter<BireModificationEvolutionDTO>();

    this.dialogTableDataModificationType = undefined;
    this.newItem = false;
    this.showFamilyCodeDialog = false;
    this.showModificationTypeDialog = false;

    this.contentTable = [];
    this.selectedEvolutions = [];
    this.newEvol = {};
    this.keyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.keyMap.set('familyFunction', this.modificationsPopupFormService.getFuncObjectStatusMap());
    this.keyMap.set('structureType', this.modificationsPopupFormService.getStructureTypeMap());

    this.searchFamilyCode();
  }

  public ngOnInit() {
    if (
      this.componentData &&
      this.componentData.componentId &&
      this.componentData.object &&
      this.componentData.componentId.length > 0
    ) {
      this.newEvol = this.componentData.object;
      if (!!this.componentData.selectedRow) {
        this.selectedEvolutions = this.componentData.selectedRow;
      }

      this.searchModificationType();
    }
  }

  public onShow() {
    this.display = true;
  }

  public onHide(): void {
    this.newItem = false;
    this.newEvol = {};
    this.display = false;
  }

  public onValidate(): void {
    if (
      this.newEvol.familyCode != undefined &&
      this.newEvol.modificationNumber != undefined &&
      this.newEvol.modificationType != undefined
    ) {
      if (this.isNewModification) {
        this.onCreate.emit(this.newEvol);
        this.display = false;
      } else {
        this.onUpdate.emit(this.newEvol);
        this.display = false;
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('missingFields'));
    }
  }

  public searchFamilyCode() {
    const test: TableColumn[] = [
      { field: 'familyCode', width: '200px', filterMode: TableColumnFilterMode.Input },
      { field: 'familyName', width: '200px', filterMode: TableColumnFilterMode.Input },
      { field: 'structureType', width: '250px', filterMode: TableColumnFilterMode.Input },
      { field: 'familyFunction', width: '200px', filterMode: TableColumnFilterMode.Input }
    ];
    this.dialogTableDataFamilyCode = {
      componentId: 'ApplicabilityPopupDialog',
      tableCols: test,
      tableRows: this.modificationsPopupFormService.findAllBireFamilys(),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  public searchModificationType() {
    const evolutionTableCols: TableColumn[] = [
      { field: 'familyCode', width: '80px', filterMode: TableColumnFilterMode.Input },
      { field: 'structureType', width: '60px', filterMode: TableColumnFilterMode.Input },
      { field: 'modificationType', width: '80px', filterMode: TableColumnFilterMode.Input },
      { field: 'modificationNumber', width: '80px', filterMode: TableColumnFilterMode.Input },
      { field: 'modificationRevisionNumber', width: '80px', filterMode: TableColumnFilterMode.Input },
      { field: 'modificationDocumentUrl', width: '100px', filterMode: TableColumnFilterMode.Input },
      { field: 'modificationTitle', width: '250px', filterMode: TableColumnFilterMode.Input }
    ];
    this.dialogTableDataModificationType = {
      componentId: 'ModificationsPopupDialog',
      tableCols: evolutionTableCols,
      tableRows: this.modificationsPopupFormService.findBireModificationsByModificationPKAndDesignation(
        this.newEvol,
        this.newEvol.modificationNumber
      ),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  // Fonctions popup
  public showFamilyCode() {
    if (!this.isReadOnlyForm) {
      this.showFamilyCodeDialog = true;
    }
  }

  public showType() {
    // if (!this.isReadOnlyForm && this.newEvol.familyCode != undefined) {
    if (!this.isReadOnlyForm) {
      this.showModificationTypeDialog = true;
    }
  }

  public setSelectedObject(selectedObject: BireFamilyDTO) {
    if (selectedObject) {
      this.newEvol.familyCode = selectedObject.familyCode;
      this.newEvol.structureType = selectedObject.structureType;
      this.searchModificationType();
      this.newEvol.modificationType = undefined;
      this.newEvol.modificationNumber = undefined;
      this.newEvol.modificationRevisionNumber = undefined;
      this.newEvol.modificationDocumentUrl = undefined;
      this.newEvol.modificationTitle = undefined;
    }
    this.showFamilyCodeDialog = false;
  }

  public setSelectedObjectType(selectedObject: BireModificationDTO) {
    if (selectedObject) {
      this.newEvol.modificationType = selectedObject.modificationType;
      this.newEvol.modificationNumber = selectedObject.modificationNumber;
      this.newEvol.modificationRevisionNumber = selectedObject.modificationRevisionNumber;
      this.newEvol.modificationDocumentUrl = selectedObject.modificationDocumentUrl;
      this.newEvol.modificationTitle = selectedObject.modificationTitle;
      if (!this.newEvol.familyCode) {
        this.newEvol.familyCode = selectedObject.familyCode;
        this.newEvol.structureType = selectedObject.structureType;
      }
    }
    this.showModificationTypeDialog = false;
  }
}
