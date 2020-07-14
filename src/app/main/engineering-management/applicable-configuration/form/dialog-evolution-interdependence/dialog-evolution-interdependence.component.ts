import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { DialogTableData } from '../../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../../shared/enums/table-selection-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { BireEvolutionDTO } from '../../../../../shared/types/api-types/bire-evolution-dto.interface';
import { BireVariantDTO } from '../../../../../shared/types/api-types/bire-variant-dto.interface';
import { BireVariantVersionDTOId } from '../../../../../shared/types/api-types/bire-variant-version-dto-id.interface';
import { EvolutionInterdependencesListDTO } from '../../../../../shared/types/api-types/evolution-interdependences-list-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { ApplicableConfigurationFormService } from '../applicable-configuration-form.service';

@Component({
  selector: 'aw-dialog-evolution-interdependence',
  templateUrl: './dialog-evolution-interdependence.component.html'
})
export class DialogEvolutionInterdependenceComponent extends DialogComponent implements OnInit {
  @Input()
  public bireVariantVersionSelected: BireVariantVersionDTOId;
  @Input()
  public evolutionInterdependence: EvolutionInterdependencesListDTO;
  @Input()
  public openMode: ComponentOpenMode;
  @Output()
  public onValidated: EventEmitter<EvolutionInterdependencesListDTO>;

  public dialogTableDataFamilyCode: DialogTableData<BireVariantDTO>;
  public showFamilyCodeDialog: boolean;

  public evolutionTableData: DialogTableData<BireEvolutionDTO>;
  public showEvolutionInterdependencesDialog: boolean;

  public interdependences: LabelValue<string>[];
  public showEvolutionTableDialog: boolean;
  public showEvoEvolutionTableDialog: boolean;
  public keyMap: Map<string, Observable<LabelValue<string>[]>>;

  public constructor(
    private readonly applicableConfigurationFormService: ApplicableConfigurationFormService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Read, 'DialogEvolutionInterdependenceComponent');
    this.showEvolutionTableDialog = false;
    this.showEvoEvolutionTableDialog = false;

    this.onValidated = new EventEmitter<EvolutionInterdependencesListDTO>();

    this.showFamilyCodeDialog = false;

    this.keyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.keyMap.set('familyFunction', this.propertiesService.getValue(GenericPropertyConstants.FAMILY_FUNCTION_MAP));
    this.keyMap.set('structureType', this.propertiesService.getValue(GenericPropertyConstants.STRUCTURE_TYPE_MAP));
    this.searchFamilyCode();

    this.showEvolutionInterdependencesDialog = false;

    this.loadInterdependences();
    this.keyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.keyMap.set('evolutionType', this.applicableConfigurationFormService.getEvolutionTypeMap());
    this.keyMap.set('evolutionCompliance', this.applicableConfigurationFormService.getComplianceMap());
    this.keyMap.set('evolutionLevel', this.applicableConfigurationFormService.getEvolutionLevelMap());
  }

  public ngOnInit(): void {
    this.updateOpenMode(this.openMode);

    if (!this.evolutionInterdependence) {
      this.evolutionInterdependence = { bireEvolutionEvolutionDTO: {} };
      this.evolutionInterdependence.bireEvolutionEvolutionDTO = {
        familyCode: this.bireVariantVersionSelected.familyCode,
        variantCode: this.bireVariantVersionSelected.variantCode,
        structureType: this.bireVariantVersionSelected.structureType
      };
    }
  }

  // To bind drop-down
  private loadInterdependences(): void {
    this.applicableConfigurationFormService.findAllBireInterdependences().subscribe(
      (results) => {
        this.interdependences = results;
      },
      () => {
        this.messageService.showErrorMessage('errorOnGetInterdependences');
      }
    );
  }

  public openEvolutionDialog(): void {
    if (!this.isReadOpenMode) {
      this.initEvolutionTableData();
      this.showEvolutionTableDialog = true;
    }
  }

  public openEvoEvolutionDialog(): void {
    if (!this.isReadOpenMode) {
      this.initEvolutionTableData();
      this.showEvoEvolutionTableDialog = true;
    }
  }

  public cancel(): void {
    this.display = false;
  }

  // Family Code dialog
  public showFamilyCode() {
    if (!this.isReadOpenMode) {
      this.showFamilyCodeDialog = true;
    }
  }

  public setSelectedFamilyCode(selectedObject: BireVariantDTO) {
    if (!!selectedObject && !!this.evolutionInterdependence.bireEvolutionEvolutionDTO) {
      this.evolutionInterdependence.bireEvolutionEvolutionDTO.familyCode = selectedObject.familyCode;
      this.evolutionInterdependence.bireEvolutionEvolutionDTO.structureType = selectedObject.structureType;
      this.evolutionInterdependence.bireEvolutionEvolutionDTO.variantCode = selectedObject.variantCode;

      // Resetting values of evolution
      this.evolutionInterdependence.bireEvolutionEvolutionDTO.evolutionNumber = undefined;
      this.evolutionInterdependence.bireEvolutionEvolutionDTO.evolutionRevisionNumber = undefined;
      this.evolutionInterdependence.bireEvolutionEvolutionDTO.evoEvolutionNumber = undefined;
      this.evolutionInterdependence.bireEvolutionEvolutionDTO.evoEvolutionRevisionNumber = undefined;

      this.showFamilyCodeDialog = false;
    } else {
      super.throwUnboundLocalError('setSelectedFamilyCode', 'this.evolutionInterdependence && selectedObject');
    }
  }

  public searchFamilyCode() {
    const test: TableColumn[] = [
      { field: 'familyCode', width: '180px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'familyName', width: '180px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'familyFunction', width: '180px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'structureType', width: '180px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'variantCode', width: '180px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'variantName', width: '180px', filterMode: TableColumnFilterMode.Input, alignment: 'left' }
    ];
    this.dialogTableDataFamilyCode = {
      componentId: 'ApplicabilityPopupDialog',
      tableCols: test,
      tableRows: this.applicableConfigurationFormService.findFamilyVariantVersion(),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  private initEvolutionTableData(): void {
    const evolutionTableCols: TableColumn[] = [
      { field: 'evolutionNumber', alignment: 'left', width: '10%', filterMode: TableColumnFilterMode.Input },
      { field: 'evolutionRevisionNumber', alignment: 'left', width: '15%', filterMode: TableColumnFilterMode.Input },
      { field: 'statusState', alignment: 'left', width: '10%', filterMode: TableColumnFilterMode.Input },
      { field: 'evolutionType', alignment: 'left', width: '10%', filterMode: TableColumnFilterMode.Input },
      { field: 'evolutionCompliance', alignment: 'left', width: '10%', filterMode: TableColumnFilterMode.Input },
      { field: 'evolutionLevel', alignment: 'left', width: '20%', filterMode: TableColumnFilterMode.Input },
      { field: 'tracked', alignment: 'center', width: '10%', filterMode: TableColumnFilterMode.Tricheckbox },
      { field: 'evolutionSummary', alignment: 'left', width: '25%', filterMode: TableColumnFilterMode.Input }
    ];

    let familyCode;
    let structureType;
    let variantCode;

    if (!!this.evolutionInterdependence && !!this.evolutionInterdependence.bireEvolutionEvolutionDTO) {
      familyCode = this.evolutionInterdependence.bireEvolutionEvolutionDTO.familyCode;
      structureType = this.evolutionInterdependence.bireEvolutionEvolutionDTO.structureType;
      variantCode = this.evolutionInterdependence.bireEvolutionEvolutionDTO.variantCode;
    } else {
      super.throwUnboundLocalError('initEvolutionTableData', 'this.evolutionInterdependence.bireEvolutionEvolutionDTO');
    }

    this.evolutionTableData = {
      componentId: 'DialogEvolution',
      tableCols: evolutionTableCols,
      tableRows: this.applicableConfigurationFormService.findBireEvolutionsByEvolutionCriteria(
        {},
        familyCode,
        structureType,
        variantCode
      ),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  public validate(): void {
    if (
      !!this.evolutionInterdependence.bireEvolutionEvolutionDTO &&
      this.evolutionInterdependence.bireEvolutionEvolutionDTO.evolutionNumber &&
      this.evolutionInterdependence.bireEvolutionEvolutionDTO.evolutionRevisionNumber &&
      this.evolutionInterdependence.bireEvolutionEvolutionDTO.evoEvolutionNumber &&
      this.evolutionInterdependence.bireEvolutionEvolutionDTO.evoEvolutionRevisionNumber &&
      this.evolutionInterdependence.bireEvolutionEvolutionDTO.interdependenceCode
    ) {
      if (
        this.evolutionInterdependence.bireEvolutionEvolutionDTO.evoEvolutionNumber ===
        this.evolutionInterdependence.bireEvolutionEvolutionDTO.evolutionNumber
      ) {
        this.messageService.showWarningMessage(this.getTranslateKey('warningOnSameInterdependence'));
      } else {
        this.onValidated.emit(this.evolutionInterdependence);
        this.display = false;
      }
    } else {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    }
  }

  public onSelectedEvolution(evolutionInterdependence: BireEvolutionDTO): void {
    if (!!evolutionInterdependence && !!this.evolutionInterdependence.bireEvolutionEvolutionDTO) {
      this.evolutionInterdependence.bireEvolutionEvolutionDTO.evolutionNumber =
        evolutionInterdependence.evolutionNumber;
      this.evolutionInterdependence.bireEvolutionEvolutionDTO.evolutionRevisionNumber =
        evolutionInterdependence.evolutionRevisionNumber;
    } else {
      super.throwUnboundLocalError(
        'onSelectedEvolution',
        'evolutionInterdependence && this.evolutionInterdependence.bireEvolutionEvolutionDTO'
      );
    }
  }

  public onSelectedEvoEvolution(evolutionInterdependence: BireEvolutionDTO): void {
    if (!!evolutionInterdependence && !!this.evolutionInterdependence.bireEvolutionEvolutionDTO) {
      this.evolutionInterdependence.bireEvolutionEvolutionDTO.evoEvolutionNumber =
        evolutionInterdependence.evolutionNumber;
      this.evolutionInterdependence.bireEvolutionEvolutionDTO.evoEvolutionRevisionNumber =
        evolutionInterdependence.evolutionRevisionNumber;
    } else {
      super.throwUnboundLocalError(
        'onSelectedEvoEvolution',
        'evolutionInterdependence && this.evolutionInterdependence.bireEvolutionEvolutionDTO'
      );
    }
  }
}
