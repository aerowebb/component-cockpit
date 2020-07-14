import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { DialogTableData } from '../../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../../shared/enums/table-selection-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { BireEvolutionSbDTO } from '../../../../../shared/types/api-types/bire-evolution-sb-dto.interface';
import { BireSbDTO } from '../../../../../shared/types/api-types/bire-sb-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../../shared/types/popup-entry.interface';

import { SbadPopupFormService } from './sbad-popup-form.service';

@Component({
  selector: 'aw-sbad-popup-form',
  templateUrl: './sbad-popup-form.component.html'
})
export class SbadPopupFormComponent extends DialogComponent implements OnInit {
  @Input('component-data')
  public componentData: PopupEntry<BireEvolutionSbDTO> | null;

  @Input()
  public isNewSbad: boolean;

  @Input()
  public isReadOnlyForm: boolean;

  @Output()
  public onCreate: EventEmitter<BireEvolutionSbDTO>;

  @Output()
  public onUpdate: EventEmitter<BireEvolutionSbDTO>;

  public evolution: BireEvolutionSbDTO;
  // POPUP
  public dialogTableData: DialogTableData<BireSbDTO>;
  public showSbadDialog: boolean;
  public propertyStatus: LabelValue<string>[];
  public keyMap: Map<string, Observable<LabelValue<string>[]>>;

  public constructor(
    public sbadPopupFormService: SbadPopupFormService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'SbadPopupDialog');

    this.onCreate = new EventEmitter<BireEvolutionSbDTO>();
    this.onUpdate = new EventEmitter<BireEvolutionSbDTO>();

    this.showSbadDialog = false;
    this.evolution = {};
    this.keyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.keyMap.set('statusState', this.sbadPopupFormService.getFuncObjectStatusMap());
    this.keyMap.set('sbType', this.sbadPopupFormService.getSbTypeMap());
    this.keyMap.set('sbCompliance', this.sbadPopupFormService.getComplianceMap());
    this.keyMap.set('sbClass', this.sbadPopupFormService.getSbClassificationMap());

    this.loadDialog();
  }

  public ngOnInit() {
    if (
      this.componentData &&
      this.componentData.componentId &&
      this.componentData.object &&
      this.componentData.componentId.length > 0
    ) {
      this.evolution = this.componentData.object;
    }
  }

  public onHide(): void {
    this.evolution = {};
    this.display = false;
  }

  public onValidate(): void {
    if (this.evolution.sbNumber) {
      if (this.isNewSbad) {
        this.onCreate.emit(this.evolution);
        this.display = false;
      } else {
        this.onUpdate.emit(this.evolution);
        this.display = false;
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('missingFields'));
    }
  }

  // Fonctions popup
  public showDialog() {
    if (!this.isReadOnlyForm) {
      this.showSbadDialog = true;
    }
  }

  public loadDialog() {
    this.dialogTableData = {
      componentId: 'SbadPopupDialog',
      tableRows: this.sbadPopupFormService.findBireSbsBySbCriteria(),
      tableCols: [
        { field: 'sbNumber', width: '75px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
        { field: 'sbRevisionNumber', width: '75px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
        { field: 'statusState', width: '90px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
        { field: 'sbType', width: '100px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
        { field: 'sbCompliance', width: '90px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
        { field: 'sbClass', width: '90px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
        {
          field: 'sbPublicationDate',
          width: '100px',
          filterMode: TableColumnFilterMode.Input,
          isDate: true,
          alignment: 'left'
        },
        {
          field: 'sbEffectiveDate',
          width: '100px',
          filterMode: TableColumnFilterMode.Input,
          isDate: true,
          alignment: 'left'
        },
        { field: 'sbDocumentUrl', width: '200px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
        { field: 'sbTitle', width: '250px', filterMode: TableColumnFilterMode.Input, alignment: 'left' }
      ],
      exportExcel: true,
      globalFilter: true,
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single
    };
  }

  public setSelectedObject(selectedObject: BireSbDTO) {
    if (selectedObject) {
      this.evolution.statusState = selectedObject.statusState;
      this.evolution.sbNumber = selectedObject.sbNumber;
      this.evolution.sbRevisionNumber = selectedObject.sbRevisionNumber;
      this.evolution.statusDate = selectedObject.statusDate;
      this.evolution.statusUser = selectedObject.statusUser;
    }
    this.showSbadDialog = false;
  }
}
