import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { DialogTableData } from '../../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../../shared/enums/table-selection-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { BireEvolutionVariantDTO } from '../../../../../shared/types/api-types/bire-evolution-variant-dto.interface';
import { BireVariantDTO } from '../../../../../shared/types/api-types/bire-variant-dto.interface';
import { BireVariantVersionDTOId } from '../../../../../shared/types/api-types/bire-variant-version-dto-id.interface';
import { BireVariantVersionDTO } from '../../../../../shared/types/api-types/bire-variant-version-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../../shared/types/popup-entry.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';

import { ApplicabilitiesPopupFormService } from './applicabilities-popup-form.service';

interface DTOForPartnerInfoTable {
  familyCode?: string;
  structureType?: string;
  variantCode?: string;
  partnerCode?: string;
  owner?: boolean;
  finished?: boolean;
}

@Component({
  selector: 'aw-applicabilities-popup-form',
  templateUrl: './applicabilities-popup-form.component.html'
})
export class ApplicabilitiesPopupFormComponent extends DialogComponent implements OnInit {
  @Input()
  public isReadOnlyForm: boolean;

  @Input()
  public isNewApplicability: boolean;

  @Output()
  public onCreate: EventEmitter<BireEvolutionVariantDTO>;

  @Output()
  public onUpdate: EventEmitter<BireEvolutionVariantDTO>;

  @Input('component-data')
  public componentData: PopupEntry<BireEvolutionVariantDTO> | null;

  public newEvol: BireEvolutionVariantDTO;
  public isEditable: boolean;
  public contentTable: BireEvolutionVariantDTO[];
  public selectedEvolutions: BireEvolutionVariantDTO[];
  public applicabilitiesPartnerTable: DTOForPartnerInfoTable[];
  public selectedApplicabilitiesPartner: DTOForPartnerInfoTable;
  public applicabilitiesPartnerTableCols: TableColumn[];
  public applicabilitiesPartnerTableFilteredRowsNb: number;

  public dialogTableDataFamilyCode: DialogTableData<BireVariantDTO>;
  public showFamilyCodeDialog: boolean;
  public keyMap: Map<string, Observable<LabelValue<string>[]>>;

  // POPUP
  public dialogTableData: DialogTableData<BireVariantVersionDTO>;

  public constructor(
    public applicabilitiesPopupFormService: ApplicabilitiesPopupFormService,
    private readonly messageService: MessageService,
    public sessionService: SessionService
  ) {
    super(ComponentOpenMode.Write, 'ApplicabilityPopupDialog');

    this.onCreate = new EventEmitter<BireEvolutionVariantDTO>();
    this.onUpdate = new EventEmitter<BireEvolutionVariantDTO>();

    this.showFamilyCodeDialog = false;

    this.applicabilitiesPartnerTable = [];
    this.applicabilitiesPartnerTableFilteredRowsNb = 0;
    this.contentTable = [];
    this.selectedEvolutions = [];
    this.newEvol = {};

    this.keyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.keyMap.set('familyFunction', this.applicabilitiesPopupFormService.getFamilyFunctionMap());
    this.keyMap.set('structureType', this.applicabilitiesPopupFormService.getStructureTypeMap());

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

      this.applicabilitiesPartnerTableCols = [
        { field: 'partnerCode', alignment: 'left' },
        { field: 'owner?', alignment: 'left' },
        { field: 'finished?', alignment: 'left' }
      ];

      if (!!this.componentData.selectedRow && this.componentData.selectedRow.length === 0) {
        this.isEditable = true;
      } else {
        if (!!this.newEvol.evolutionApplicabilityDate) {
          this.newEvol.evolutionApplicabilityDate = new Date(this.newEvol.evolutionApplicabilityDate);
        }

        this.isEditable = false;
      }

      this.loadApplicabilityPartner();
    }
  }

  public onShow() {
    this.display = true;
  }

  private alterEvolution(evol: BireEvolutionVariantDTO): BireEvolutionVariantDTO {
    let oemPartner = '';
    this.applicabilitiesPartnerTable.forEach((rowData: DTOForPartnerInfoTable) => {
      if (!rowData.owner) {
        rowData.finished = undefined;
      }

      if (!!rowData && rowData.partnerCode) {
        if (rowData.owner && !rowData.finished) {
          // tslint:disable-next-line:no-string-literal
          oemPartner = oemPartner + rowData.partnerCode.split('-')[0] + '=' + 'On going' + ' ';
        } else if (rowData.owner && rowData.finished) {
          // tslint:disable-next-line:no-string-literal
          oemPartner = oemPartner + rowData.partnerCode.split('-')[0] + '=' + 'Finished' + ' ';
        }
      }
    });

    // tslint:disable-next-line:no-string-literal
    evol.statusStatePerPartner = oemPartner;

    return evol;
  }

  public onHide(): void {
    this.newEvol = {};
    this.display = false;
  }

  public onValidate(): void {
    if (this.newEvol.familyCode) {
      if (this.isNewApplicability) {
        this.newEvol = this.alterEvolution(this.newEvol);
        this.onCreate.emit(this.newEvol);
        this.display = false;
      } else {
        this.newEvol = this.alterEvolution(this.newEvol);
        this.onUpdate.emit(this.newEvol);
        this.display = false;
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('missingFields'));
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
      componentId: 'ApplicabilityPopupDialog',
      tableCols: test,
      tableRows: this.applicabilitiesPopupFormService.findFamilyVariantVersion(),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  public setSelectedFamilyCode(selectedObject: BireVariantDTO) {
    if (selectedObject) {
      this.newEvol.familyCode = selectedObject.familyCode;
      this.newEvol.structureType = selectedObject.structureType;
      this.newEvol.variantCode = selectedObject.variantCode;
    }
    this.showFamilyCodeDialog = false;
    this.loadApplicabilityPartner();
  }

  public showFamilyCode() {
    if (!this.isReadOnlyForm && this.isEditable) {
      this.showFamilyCodeDialog = true;
    }
  }

  private loadApplicabilityPartner(): void {
    if (!!this.newEvol && !!this.newEvol.familyCode && !!this.newEvol.structureType && !!this.newEvol.variantCode) {
      const variantVersion: BireVariantVersionDTOId = {
        familyCode: this.newEvol.familyCode,
        structureType: this.newEvol.structureType,
        variantCode: this.newEvol.variantCode
      };
      this.applicabilitiesPartnerTable = [];
      this.applicabilitiesPopupFormService.findBirePartnersByVariant(variantVersion).subscribe(
        (results) => {
          if (results) {
            results.forEach((res) => {
              const dto: DTOForPartnerInfoTable = {
                familyCode: res.familyCode,
                partnerCode: res.partnerCode,
                structureType: res.structureType,
                variantCode: res.variantCode
              };
              if (
                this.componentData &&
                this.componentData.componentId &&
                this.componentData.object &&
                this.componentData.object.statusStatePerPartner &&
                this.componentData.componentId.length > 0
              ) {
                const tableArr = this.getArrayOfTableData(this.componentData.object.statusStatePerPartner);
                tableArr.forEach((result) => {
                  if (!!dto.partnerCode) {
                    if (result.indexOf(dto.partnerCode) !== -1) {
                      const code = result.split('=')[1];
                      if (code === 'On going') {
                        dto.owner = true;
                      } else if (code === 'Finished') {
                        dto.owner = true;
                        dto.finished = true;
                      }
                    }
                  }
                });
              }
              this.applicabilitiesPartnerTable.push(dto);
            });
            this.applicabilitiesPartnerTableFilteredRowsNb = this.applicabilitiesPartnerTable.length;
          }
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetApplicabilityPartnerResults'));
        }
      );
    }
  }

  private getArrayOfTableData(tableString: string): string[] {
    const b = tableString.split(' ');

    for (let i = 0; i < b.length; i++) {
      if (b[i].startsWith('going')) {
        b[i - 1] = b[i - 1] + ' ' + 'going';
        b.splice(i, 1);
      }
      if (b[i].length === 0) {
        b.splice(i, 1);
      }
    }

    return b;
  }
}
