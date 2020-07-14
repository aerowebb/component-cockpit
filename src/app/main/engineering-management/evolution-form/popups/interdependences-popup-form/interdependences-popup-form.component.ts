import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';

import { DialogTableData } from '../../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../../shared/enums/table-selection-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { BireEvolutionDTO } from '../../../../../shared/types/api-types/bire-evolution-dto.interface';
import { BireEvolutionEvolutionDTO } from '../../../../../shared/types/api-types/bire-evolution-evolution-dto.interface';
import { BireVariantDTO } from '../../../../../shared/types/api-types/bire-variant-dto.interface';
import { BireVariantVersionDTO } from '../../../../../shared/types/api-types/bire-variant-version-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../../shared/types/popup-entry.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';

import { InterdependencesPopupFormService } from './interdependences-popup-form.service';

@Component({
  selector: 'aw-interdependences-popup-form',
  templateUrl: './interdependences-popup-form.component.html'
})
export class InterdependencesPopupFormComponent extends DialogComponent implements OnInit {
  @Input('component-data')
  public componentData: PopupEntry<BireEvolutionEvolutionDTO> | null;

  @Input()
  public isNewInterdependence: boolean;

  @Input()
  public isReadOnlyForm: boolean;

  @Output()
  public onCreate: EventEmitter<BireEvolutionEvolutionDTO>;

  @Output()
  public onUpdate: EventEmitter<BireEvolutionEvolutionDTO>;

  public newEvol: BireEvolutionEvolutionDTO;
  public displayDialog: boolean;
  public newItem: boolean;
  public isEditable: boolean;
  public contentTable: BireEvolutionEvolutionDTO[];
  public interdependence: SelectItem[];
  public keyMap: Map<string, Observable<LabelValue<string>[]>>;

  public evolutionNumberTable: BireEvolutionDTO[];
  public selectedEvolutionNumberTable: BireEvolutionDTO[];
  public evolutionNumberTableTableCols: TableColumn[];
  public evolutionNumberTableFilteredRowsNb: number;

  public familyCodeTable: BireVariantVersionDTO[];
  public selectedfamilyCodeTable: BireVariantVersionDTO[];
  public familyCodeTableTableCols: TableColumn[];
  public familyCodeTableFilteredRowsNb: number;

  public dialogTableDataFamilyCode: DialogTableData<BireVariantDTO>;
  public dialogTableDataEvolutionNumber: DialogTableData<BireEvolutionDTO>;
  public showFamilyCodeDialog: boolean;
  public showEvolutionNumberDialog: boolean;

  public constructor(
    public interdependencesPopupFormService: InterdependencesPopupFormService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'InterdependencePopupDialog');

    this.onCreate = new EventEmitter<BireEvolutionEvolutionDTO>();
    this.onUpdate = new EventEmitter<BireEvolutionEvolutionDTO>();

    this.displayDialog = false;
    this.newItem = false;
    this.showFamilyCodeDialog = false;
    this.showEvolutionNumberDialog = false;

    this.contentTable = [];
    this.newEvol = {};
    this.keyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.keyMap.set('familyFunction', this.interdependencesPopupFormService.getFamilyFunctionMap());
    this.keyMap.set('evolutionType', this.interdependencesPopupFormService.getEvolutionTypeMap());
    this.keyMap.set('evolutionCompliance', this.interdependencesPopupFormService.getComplianceMap());
    this.keyMap.set('evolutionLevel', this.interdependencesPopupFormService.getEvolutionLevelMap());
    this.keyMap.set('structureType', this.interdependencesPopupFormService.getStructureTypeMap());

    this.loadInterdependences();
    this.searchFamilyCode();
    this.searchEvolutionNumber();
  }

  public ngOnInit() {
    if (
      this.componentData &&
      this.componentData.componentId &&
      this.componentData.object &&
      this.componentData.componentId.length > 0
    ) {
      this.newEvol = this.componentData.object;
      this.isEditable = !!this.componentData.selectedRow && this.componentData.selectedRow.length === 0;
    }
  }

  public onShow() {
    this.displayDialog = true;
  }

  public onHide(): void {
    this.newItem = false;
    this.newEvol = {};
    this.display = false;
  }

  public onValidate(): void {
    if (
      !(
        this.newEvol.evolutionNumber === this.newEvol.evoEvolutionNumber &&
        this.newEvol.evolutionRevisionNumber === this.newEvol.evoEvolutionRevisionNumber
      )
    ) {
      if (this.newEvol.familyCode && this.newEvol.evoEvolutionNumber && this.newEvol.interdependenceCode) {
        if (this.isNewInterdependence) {
          this.onCreate.emit(this.newEvol);
          this.display = false;
        } else {
          this.onUpdate.emit(this.newEvol);
          this.display = false;
        }
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('missingFields'));
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('sameEvolutionNumber'));
    }
  }

  public searchFamilyCode() {
    const test: TableColumn[] = [
      { field: 'familyCode', width: '180px', filterMode: TableColumnFilterMode.Input },
      { field: 'familyName', width: '180px', filterMode: TableColumnFilterMode.Input },
      { field: 'familyFunction', width: '180px', filterMode: TableColumnFilterMode.Input },
      { field: 'structureType', width: '180px', filterMode: TableColumnFilterMode.Input },
      { field: 'variantCode', width: '180px', filterMode: TableColumnFilterMode.Input },
      { field: 'variantName', width: '180px', filterMode: TableColumnFilterMode.Input }
    ];
    this.dialogTableDataFamilyCode = {
      componentId: 'InterdependencePopupDialog',
      tableCols: test,
      tableRows: this.interdependencesPopupFormService.findFamilyVariantVersion(),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  public searchEvolutionNumber() {
    const evolutionNumberCol: TableColumn[] = [
      { field: 'evolutionNumber', width: '100px', filterMode: TableColumnFilterMode.Input },
      { field: 'evolutionRevisionNumber', width: '100px', filterMode: TableColumnFilterMode.Input },
      { field: 'statusState', width: '100px', filterMode: TableColumnFilterMode.Input },
      { field: 'evolutionType', width: '100px', filterMode: TableColumnFilterMode.Input },
      { field: 'evolutionCompliance', width: '100px', filterMode: TableColumnFilterMode.Input },
      { field: 'evolutionLevel', width: '200px', filterMode: TableColumnFilterMode.Input },
      { field: 'tracked', width: '50px', filterMode: TableColumnFilterMode.Tricheckbox },
      { field: 'evolutionSummary', width: '200px', filterMode: TableColumnFilterMode.Input }
    ];
    this.dialogTableDataEvolutionNumber = {
      componentId: 'InterdependencePopupDialog',
      tableRows: this.interdependencesPopupFormService.findBireEvolutionsByEvolutionCriteria(
        this.newEvol.familyCode,
        this.newEvol.structureType,
        this.newEvol.variantCode
      ),
      tableCols: evolutionNumberCol,
      globalFilter: true,
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single
    };
  }

  public showFamilyCode() {
    if (!this.isReadOnlyForm) {
      this.showFamilyCodeDialog = true;
    }
  }

  public showEvolutionNumber() {
    if (!this.isReadOnlyForm) {
      this.showEvolutionNumberDialog = true;
    }
  }

  public setSelectedFamilyCode(selectedObject: BireVariantDTO) {
    if (selectedObject) {
      this.newEvol.familyCode = selectedObject.familyCode;
      this.newEvol.structureType = selectedObject.structureType;
      this.newEvol.variantCode = selectedObject.variantCode;
    }
    this.showFamilyCodeDialog = false;
  }

  public setSelectedEvolutionNumber(selectedObject: BireEvolutionDTO) {
    if (selectedObject) {
      this.newEvol.evoEvolutionNumber = selectedObject.evolutionNumber;
      this.newEvol.evoEvolutionRevisionNumber = selectedObject.evolutionRevisionNumber;
    }
    this.showEvolutionNumberDialog = false;
  }

  private loadInterdependences(): void {
    this.interdependencesPopupFormService.findAllBireInterdependences().subscribe(
      (results) => {
        this.interdependence = results;
      },
      () => {
        this.messageService.showErrorMessage('errorOnGetInterdependences');
      }
    );
  }
}
