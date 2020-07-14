import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, forkJoin } from 'rxjs';

import { BireUnitMeasureConstants } from '../../../../../../shared/constants/bire-unit-measure-constants';
import { ControlConfigConstants } from '../../../../../../shared/constants/control-config-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { ComputeRemainingForAirworthinessControlPartOutput } from '../../../../../../shared/types/api-output-types/airworthiness-management/compute-remaining-for-airworthiness-control-part-output.interface';
import { GenerateAirworthinessControlTableOutput } from '../../../../../../shared/types/api-output-types/airworthiness-management/generate-airworthiness-control-table-output.interface';
import { GenericComponent } from '../../../../../../shared/types/generic-component';
import { TableColumn } from '../../../../../../shared/types/table-column.interface';
import { ListUtils } from '../../../../../../shared/utils/list-utils';
import { NumberUtils } from '../../../../../../shared/utils/number-utils';
import { ObjectUtils } from '../../../../../../shared/utils/object-utils';
import { SimulationCriteria } from '../../../types/simulation-criteria.interface';
import { AirworthinessControlFormService } from '../airworthiness-control-form.service';
import { AirworthinessRow } from '../types/airworthiness-row.interface';
import { RemainingRow } from '../types/remaining-row.interface';

@Component({
  selector: 'aw-airworthiness-table-remaining-values',
  templateUrl: './airworthiness-table-remaining-values.component.html',
  styleUrls: ['./airworthiness-table-remaining-values.component.scss']
})
export class AirworthinessTableRemainingValuesComponent extends GenericComponent implements OnInit {
  private static readonly TOOLTIP_CONTENT_SEPRATOR: string = ', ';

  public readonly controlConfigConstants: typeof ControlConfigConstants;

  @Input()
  public equipmentCodeList: string[];

  @Input()
  public fullTable: boolean;

  @Input()
  public minimumRemainingEquivalentMap: Map<string, GenerateAirworthinessControlTableOutput>;

  @Input()
  public row: AirworthinessRow;

  @Input()
  public simulationCriteria: SimulationCriteria | undefined;

  @Input()
  public potentialUnitSelected: string;

  public remainingTable: RemainingRow[];
  public remainingTableCols: TableColumn[];
  public remainingTableLoading: boolean;

  public constructor(
    private readonly airworthinessControlFormService: AirworthinessControlFormService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write);

    this.controlConfigConstants = ControlConfigConstants;

    this.init();
  }

  public getComponentName(): string {
    return 'AirworthinessTableRemainingValuesComponent';
  }

  public ngOnInit(): void {
    this.setRemainingTableColumnList();

    if (this.fullTable) {
      this.load();
    }
  }

  private clearTable(): void {
    this.remainingTable = [];
  }

  public addSubAssemblyData(): void {
    if (this.minimumRemainingEquivalentMap) {
      const minimumRemainingEquivalentKey = this.row._obj.code;
      if (minimumRemainingEquivalentKey) {
        const minimumRemainingEquivalent = this.minimumRemainingEquivalentMap.get(minimumRemainingEquivalentKey);
        if (
          minimumRemainingEquivalent &&
          minimumRemainingEquivalent.bidoEquipment &&
          minimumRemainingEquivalent.assetDesignation &&
          ObjectUtils.isDefined(minimumRemainingEquivalent.remainingEquivalentValue)
        ) {
          const id = `${minimumRemainingEquivalent.bidoEquipment.pnCode}/${
            minimumRemainingEquivalent.bidoEquipment.sn
          }`;
          const designation = minimumRemainingEquivalent.assetDesignation;
          const value = minimumRemainingEquivalent.remainingEquivalentValue as number;

          const subAssemblyKey = this.getTranslateKey('subAssembly');
          this.translateService.get(subAssemblyKey).subscribe((translatedKey) => {
            const remainingType = translatedKey || 'Sub Assembly';

            const row: RemainingRow = {
              remainingType,
              elementDesignation: designation,
              elementId: id,
              remainingValue: `${value.toString()} ${this.potentialUnitSelected}`,
              _obj: { remainingValue: value, elementIdList: [designation], elementDesignationList: [] }
            };
            this.remainingTable = [...this.remainingTable, row];
            this.sortRemainingTable();
          });
        }
      }
    }
  }

  private createRemainingRow(
    elt: ComputeRemainingForAirworthinessControlPartOutput,
    label: string,
    unitMeasure?: string
  ): RemainingRow {
    const elementDesignation = ListUtils.isNullOrEmpty(elt.elementDesignationList) ? '' : elt.elementDesignationList[0];
    const elementDesignationTooltip =
      ListUtils.isNullOrEmpty(elt.elementDesignationList) || elt.elementDesignationList.length <= 1
        ? undefined
        : elt.elementDesignationList.join(AirworthinessTableRemainingValuesComponent.TOOLTIP_CONTENT_SEPRATOR);
    const elementId = ListUtils.isNullOrEmpty(elt.elementIdList) ? '' : elt.elementIdList[0];
    const elementIdTooltip =
      ListUtils.isNullOrEmpty(elt.elementIdList) || elt.elementIdList.length <= 1
        ? undefined
        : elt.elementIdList.join(AirworthinessTableRemainingValuesComponent.TOOLTIP_CONTENT_SEPRATOR);
    const remainingValue =
      elt.remainingValue !== undefined && elt.remainingValue !== null
        ? NumberUtils.roundNumber(elt.remainingValue, 2).toString() + ' ' + (unitMeasure || this.potentialUnitSelected)
        : '';

    return {
      elementDesignation,
      elementDesignationTooltip,
      elementId,
      elementIdTooltip,
      remainingValue,
      remainingType: label,
      _obj: elt
    };
  }

  private init(): void {
    this.fullTable = true;
    this.potentialUnitSelected = BireUnitMeasureConstants.DAY;
    this.remainingTableLoading = true;

    this.clearTable();
  }

  public load(): void {
    this.clearTable();
    this.remainingTableLoading = true;

    const equipmentCode = this.row._obj.bidoEquipment.equipmentCode as string;
    const input = {
      equipmentCode,
      equipmentCodeList: this.equipmentCodeList,
      simulation: this.simulationCriteria !== undefined,
      simulationCyclesValue: this.simulationCriteria ? this.simulationCriteria.inCycles : undefined,
      simulationDateValue: this.simulationCriteria ? this.simulationCriteria.atDate : undefined,
      simulationHoursValue: this.simulationCriteria ? this.simulationCriteria.inHours : undefined,
      unitMeasure: this.potentialUnitSelected,
      fatherEquipmentCode: this.row._obj.bidoEquipment.equEquipmentCode || equipmentCode
    };

    const observables: Observable<ComputeRemainingForAirworthinessControlPartOutput | undefined>[] = [
      this.airworthinessControlFormService.computeRemainingForAd(input),
      this.airworthinessControlFormService.computeRemainingForDefect(input),
      this.airworthinessControlFormService.computeRemainingForDocument(equipmentCode),
      this.airworthinessControlFormService.computeRemainingForLlp(input),
      this.airworthinessControlFormService.computeRemainingForTask(input)
    ];

    forkJoin(observables).subscribe(([adResult, defectResult, documentationResult, llpResult, taskResult]) => {
      const adTypeKey = this.getTranslateKey('remainingtypeAd');
      const defectTypeKey = this.getTranslateKey('remainingtypeDefect');
      const documentationTypeKey = this.getTranslateKey('remainingtypeDocumentation');
      const llpTypeKey = this.getTranslateKey('remainingtypeLlp');
      const taskTypeKey = this.getTranslateKey('remainingtypeTask');
      this.translateService
        .get([adTypeKey, defectTypeKey, documentationTypeKey, llpTypeKey, taskTypeKey])
        .subscribe((results) => {
          this.remainingTableLoading = false;

          const adTypeLabel = results ? results[adTypeKey] : 'SB/AD';
          const defectTypeLabel = results ? results[defectTypeKey] : 'Defect';
          const documentationTypeLabel = results ? results[documentationTypeKey] : 'Documentation';
          const llpTypeLabel = results ? results[llpTypeKey] : 'LLP';
          const taskTypeLabel = results ? results[taskTypeKey] : 'OMP';

          if (!!adResult) {
            this.remainingTable = [...this.remainingTable, this.createRemainingRow(adResult, adTypeLabel)];
          }
          if (!!defectResult) {
            this.remainingTable = [...this.remainingTable, this.createRemainingRow(defectResult, defectTypeLabel)];
          }
          if (!!documentationResult) {
            this.remainingTable = [
              ...this.remainingTable,
              this.createRemainingRow(documentationResult, documentationTypeLabel, BireUnitMeasureConstants.DAY)
            ];
          }
          if (!!llpResult) {
            this.remainingTable = [...this.remainingTable, this.createRemainingRow(llpResult, llpTypeLabel)];
          }
          if (!!taskResult) {
            this.remainingTable = [...this.remainingTable, this.createRemainingRow(taskResult, taskTypeLabel)];
          }

          this.addSubAssemblyData();
        });
    });
  }

  private sortRemainingTable(): void {
    this.remainingTable = this.remainingTable.sort((elt1, elt2) => {
      if (elt1._obj.remainingValue === undefined || elt1._obj.remainingValue === null) {
        return 1;
      }
      if (elt2._obj.remainingValue === undefined || elt2._obj.remainingValue === null) {
        return -1;
      }

      if (elt1._obj.remainingValue < elt2._obj.remainingValue) {
        return -1;
      } else if (elt1._obj.remainingValue > elt2._obj.remainingValue) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  private setRemainingTableColumnList(): void {
    this.remainingTableCols = [
      { field: 'remainingValue', alignment: 'left', width: '15%' },
      { field: 'remainingType', alignment: 'left', width: '17.5%' }
    ];

    if (this.fullTable) {
      this.remainingTableCols = [
        ...this.remainingTableCols,
        { field: 'elementId', alignment: 'left', width: '32.5%' },
        { field: 'elementDesignation', alignment: 'left', width: '35%' }
      ];
    } else {
      this.remainingTableCols = [...this.remainingTableCols, { field: 'elementId', alignment: 'left', width: '67.5%' }];
    }
  }
}
