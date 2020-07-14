import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, forkJoin, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { AWPropertiesConstants } from '../../constants/aw-properties-constants';
import { BidoEvolutionConstants } from '../../constants/bido-evolution-constants';
import { GenericPropertyConstants } from '../../constants/generic-property-constants';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { PropertiesService } from '../../services/properties.service';
import { BireEvolutionDTO } from '../../types/api-types/bire-evolution-dto.interface';
import { BireModificationDTO } from '../../types/api-types/bire-modification-dto.interface';
import { BireSbDTO } from '../../types/api-types/bire-sb-dto.interface';
import { SearchResultsDTO } from '../../types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../types/dialog-component';
import { LabelValue } from '../../types/label-value.interface';
import { TableColumn } from '../../types/table-column.interface';
import { BidoFamilyVariantUtils } from '../../utils/bido-family-variant-utils';
import { ListUtils } from '../../utils/list-utils';
import { ObjectUtils } from '../../utils/object-utils';
import { StringUtils } from '../../utils/string-utils';

import { DialogSearchEvolutionService } from './dialog-search-evolution.service';

interface EvolutionRow {
  compliance: string;
  designation: string;
  number: string;
  revisionNumber: string;
  source: string;
  status: string;
  _obj: BireEvolutionDTO | BireModificationDTO | BireSbDTO;
}

@Component({
  selector: 'aw-dialog-search-evolution',
  templateUrl: 'dialog-search-evolution.component.html'
})
export class DialogSearchEvolutionComponent extends DialogComponent {
  @Input()
  public complianceStatus: number | undefined;

  @Input()
  public equipmentCode: string | undefined;

  @Input()
  public evolutionNumber: string | undefined;

  @Input()
  public evolutionRevisionNumber: string | undefined;

  @Input()
  public evolutionSource: string | undefined;

  @Input()
  public pnCode: string | undefined;

  @Input()
  public sn: string | undefined;

  @Input()
  public get familyVariantCode(): string | undefined {
    return this._familyVariantCode;
  }
  public set familyVariantCode(value: string | undefined) {
    this._familyVariantCode = value;
    if (this._familyVariantCode) {
      this.familyCode = BidoFamilyVariantUtils.getFamilyCodeFromFamilyVariantCode(value);
      this.variantCode = BidoFamilyVariantUtils.getVariantCodeFromFamilyVariantCode(value);
    }
  }

  @Output()
  public onSelected: EventEmitter<BireEvolutionDTO | BireModificationDTO | BireSbDTO>;

  public evolutionSourceList: LabelValue<string>[];
  public evolutionTable: SearchResultsDTO<EvolutionRow>;
  public evolutionTableColList: TableColumn[];
  public evolutionTableLoading: boolean;
  public evolutionTableSelection: EvolutionRow | undefined;
  public searchCriteria: BireEvolutionDTO;

  private readonly structureType: string;

  private evolutionComplianceList: LabelValue<string>[];
  private evolutionStatusList: LabelValue<string>[];
  private familyCode: string | undefined;
  private variantCode: string | undefined;
  private _familyVariantCode: string | undefined;

  public constructor(
    private readonly dialogSearchEvolutionService: DialogSearchEvolutionService,
    private readonly propertiesService: PropertiesService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write, 'DialogSearchEvolutionComponent');

    this.structureType = AWPropertiesConstants.STRUCTURE_TYPE_IPC_KEY;

    this.init();

    this.loadEvolutionComplianceList();
    this.loadEvolutionSourceList();
    this.loadEvolutionStatusList();

    this.setEvolutionTableColList();
  }

  public cancel(): void {
    super.closeDialog();
  }

  public search(): void {
    this.clearTable();

    this.evolutionTableLoading = true;

    let evolutionObservableList: Observable<SearchResultsDTO<BireEvolutionDTO>>[] = [];
    let modificationObservableList: Observable<SearchResultsDTO<BireModificationDTO>>[] = [];
    let sbObservableList: Observable<SearchResultsDTO<BireSbDTO>>[] = [];

    // Evolutions (i.e. Configuring SB impacting Part Numbers)
    if (
      StringUtils.isNullOrEmpty(this.evolutionSource) ||
      this.evolutionSource === BidoEvolutionConstants.CODE_EVOLUTION
    ) {
      if (!StringUtils.isNullOrEmpty(this.equipmentCode)) {
        // If research is done for a particular Asset
        evolutionObservableList = [
          ...evolutionObservableList,
          this.findEvolutionListByEquipment().pipe(map((result) => this.postProcessEvolutionResultList(result)))
        ];
      } else if (!StringUtils.isNullOrEmpty(this.pnCode)) {
        // If research is done for a particular Part Number
        evolutionObservableList = [
          ...evolutionObservableList,
          this.findRecursivelyAssociatedEvolutionListToItemAndPnCode().pipe(
            map((result) => this.postProcessEvolutionResultList(result))
          )
        ];
      } else if (!StringUtils.isNullOrEmpty(this.variantCode)) {
        // Else If research is done for a particular Family Variant
        evolutionObservableList = [
          ...evolutionObservableList,
          this.findEvolutionListByFamilyCodeAndVariantCode().pipe(
            map((result) => this.postProcessEvolutionResultList(result))
          )
        ];
      } else {
        // Only evolutions according to criteria of number, revision and designation
        evolutionObservableList = [
          ...evolutionObservableList,
          this.findEvolutionListByEvolutionIdAndDesignation().pipe(
            map((result) => this.postProcessEvolutionResultList(result))
          )
        ];
      }
    }

    // SBs (i.e. different than Configuring SB and AD)
    if (StringUtils.isNullOrEmpty(this.evolutionSource) || this.evolutionSource === BidoEvolutionConstants.CODE_SB) {
      if (!StringUtils.isNullOrEmpty(this.equipmentCode)) {
        // If research is done for a particular Asset
        sbObservableList = [
          ...sbObservableList,
          this.findSbListByEquipment().pipe(map((result) => this.postProcessSbResultList(result)))
        ];
      } else if (!StringUtils.isNullOrEmpty(this.variantCode)) {
        // If research is done for a particular Family Variant (get Applicable SB for FV)
        sbObservableList = [
          ...sbObservableList,
          this.findApplicableSbList().pipe(map((result) => this.postProcessSbResultList(result)))
        ];
      } else {
        // Only SBs according to criteria of number, revision and designation
        evolutionObservableList = [
          ...evolutionObservableList,
          this.findSbListBySbIdAndDesignation().pipe(map((result) => this.postProcessSbResultList(result)))
        ];
      }
    }

    // ADs
    if (StringUtils.isNullOrEmpty(this.evolutionSource) || this.evolutionSource === BidoEvolutionConstants.CODE_AD) {
      if (!StringUtils.isNullOrEmpty(this.variantCode)) {
        // If research is done for a particular Family Variant (get Applicable AD for FV)
        sbObservableList = [
          ...sbObservableList,
          this.findApplicableAdList().pipe(map((result) => this.postProcessAdResultList(result)))
        ];
      } else {
        // Only ADs according to criteria of number, revision and designation
        sbObservableList = [
          ...sbObservableList,
          this.findSbListBySbIdAndDesignation().pipe(map((result) => this.postProcessAdResultList(result)))
        ];
      }
    }

    // Modifications
    if (
      StringUtils.isNullOrEmpty(this.evolutionSource) ||
      this.evolutionSource === BidoEvolutionConstants.CODE_MODIFICATION
    ) {
      if (!StringUtils.isNullOrEmpty(this.variantCode)) {
        // If research is done for a particular Family Variant (get Applicable MOD for FV)
        modificationObservableList = [
          ...modificationObservableList,
          this.findApplicableModificationList().pipe(map((result) => this.postProcessModificationResultList(result)))
        ];
      } else {
        // Only MODs according to criteria of number, revision and designation
        modificationObservableList = [
          ...modificationObservableList,
          this.findModificationListByModificationIdAndDesignation().pipe(
            map((result) => this.postProcessModificationResultList(result))
          )
        ];
      }
    }

    forkJoin({
      evolutionList: ListUtils.isEmpty(evolutionObservableList) ? of([]) : forkJoin(evolutionObservableList),
      modificationList: ListUtils.isEmpty(modificationObservableList) ? of([]) : forkJoin(modificationObservableList),
      sbList: ListUtils.isEmpty(sbObservableList) ? of([]) : forkJoin(sbObservableList)
    }).subscribe({
      next: (result) => this.processSearchResultList(result.evolutionList, result.modificationList, result.sbList)
    });
  }

  public validate(): void {
    this.onSelected.emit((this.evolutionTableSelection as EvolutionRow)._obj);
    super.closeDialog();
  }

  private clearTable(): void {
    this.evolutionTableLoading = false;
    this.evolutionTableSelection = undefined;

    this.evolutionTable = {
      list: [],
      moreResults: false
    };
  }

  private createEvolutionRowFromEvolution(evolution: BireEvolutionDTO): EvolutionRow {
    const compliance = this.evolutionComplianceList.find((elt) => elt.value === evolution.evolutionCompliance);
    const status = this.evolutionStatusList.find((elt) => elt.value === evolution.statusState);

    const evolutionRow: EvolutionRow = {
      compliance: compliance ? StringUtils.orEmpty(compliance.label) : '',
      designation: StringUtils.orEmpty(evolution.evolutionSummary),
      number: StringUtils.orEmpty(evolution.evolutionNumber),
      revisionNumber: StringUtils.orEmpty(evolution.evolutionRevisionNumber),
      source: evolution.evolutionType as string,
      status: status ? StringUtils.orEmpty(status.label) : '',
      _obj: evolution
    };

    return evolutionRow;
  }

  private createEvolutionRowFromModification(modification: BireModificationDTO): EvolutionRow {
    const status = this.evolutionStatusList.find((elt) => elt.value === modification.statusState);

    const evolutionRow: EvolutionRow = {
      compliance: '',
      designation: StringUtils.orEmpty(modification.modificationTitle),
      number: StringUtils.orEmpty(modification.modificationNumber),
      revisionNumber: StringUtils.orEmpty(modification.modificationRevisionNumber),
      source: modification.modificationType as string,
      status: status ? StringUtils.orEmpty(status.label) : '',
      _obj: modification
    };

    return evolutionRow;
  }

  private createEvolutionRowFromSb(sb: BireSbDTO): EvolutionRow {
    const compliance = this.evolutionComplianceList.find((elt) => elt.value === sb.sbCompliance);
    const status = this.evolutionStatusList.find((elt) => elt.value === sb.statusState);

    const evolutionRow: EvolutionRow = {
      compliance: compliance ? StringUtils.orEmpty(compliance.label) : '',
      designation: StringUtils.orEmpty(sb.sbTitle),
      number: StringUtils.orEmpty(sb.sbNumber),
      revisionNumber: StringUtils.orEmpty(sb.sbRevisionNumber),
      source: sb.sbType as string,
      status: status ? StringUtils.orEmpty(status.label) : '',
      _obj: sb
    };

    return evolutionRow;
  }

  private init(): void {
    this.evolutionComplianceList = [];
    this.evolutionSourceList = [];
    this.evolutionStatusList = [];
    this.familyCode = undefined;
    this.searchCriteria = {};
    this.variantCode = undefined;

    this.evolutionSource = BidoEvolutionConstants.CODE_EVOLUTION;

    this.onSelected = new EventEmitter<BireEvolutionDTO | BireModificationDTO | BireSbDTO>();

    this.clearTable();
  }

  private loadEvolutionComplianceList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.COMPLIANCE_MAP).subscribe((results) => {
      this.evolutionComplianceList = ListUtils.orEmpty(results);
    });
  }

  private loadEvolutionSourceList(): void {
    const adTypeKey = this.getTranslateKey('adType');
    const evolutionTypeKey = this.getTranslateKey('evolutionType');
    const modificationTypeKey = this.getTranslateKey('modificationType');
    const sbTypeKey = this.getTranslateKey('sbType');
    this.translateService
      .get([adTypeKey, evolutionTypeKey, modificationTypeKey, sbTypeKey])
      .subscribe((results: string[]) => {
        const adTypeLabel = !!results ? results[adTypeKey] : 'AD (Airworthiness Directive)';
        const evolutionTypeLabel = !!results ? results[evolutionTypeKey] : 'SB Configuration';
        const modificationTypeLabel = !!results ? results[modificationTypeKey] : 'Modification';
        const sbTypeLabel = !!results ? results[sbTypeKey] : 'Others SB';

        this.evolutionSourceList = [
          {
            label: evolutionTypeLabel,
            value: BidoEvolutionConstants.CODE_EVOLUTION
          },
          {
            label: sbTypeLabel,
            value: BidoEvolutionConstants.CODE_SB
          },
          {
            label: adTypeLabel,
            value: BidoEvolutionConstants.CODE_AD
          },
          {
            label: modificationTypeLabel,
            value: BidoEvolutionConstants.CODE_MODIFICATION
          }
        ];
      });
  }

  private loadEvolutionStatusList(): void {
    forkJoin([
      this.propertiesService.getValue(GenericPropertyConstants.FUNC_OBJECT_STATUS_MAP),
      this.propertiesService.getValue(GenericPropertyConstants.OBJECT_STATUS_MAP)
    ]).subscribe(([funcObjectList, objectList]) => {
      this.evolutionStatusList = [...ListUtils.orEmpty(funcObjectList), ...ListUtils.orEmpty(objectList)];
    });
  }

  private processSearchResultList(
    evolutionResultList: SearchResultsDTO<BireEvolutionDTO>[],
    modificationResultList: SearchResultsDTO<BireEvolutionDTO>[],
    sbResultList: SearchResultsDTO<BireEvolutionDTO>[]
  ): void {
    const processedEvolutionList = new Set<string>();

    const evolutionList = evolutionResultList
      .map((result) => result.list)
      .reduce((acc, x) => acc.concat(x), [])
      .filter((evolution) => !processedEvolutionList.has(this.computeEvolutionKey(evolution)))
      .map((evolution) => {
        processedEvolutionList.add(this.computeEvolutionKey(evolution));

        return this.createEvolutionRowFromEvolution(evolution);
      });
    const modificationList = modificationResultList
      .map((result) => result.list)
      .reduce((acc, x) => acc.concat(x), [])
      .filter((modification) => !processedEvolutionList.has(this.computeModificationKey(modification)))
      .map((modification) => {
        processedEvolutionList.add(this.computeModificationKey(modification));

        return this.createEvolutionRowFromModification(modification);
      });
    const sbList = sbResultList
      .map((result) => result.list)
      .reduce((acc, x) => acc.concat(x), [])
      .filter((sb) => !processedEvolutionList.has(this.computeSbKey(sb)))
      .map((sb) => {
        processedEvolutionList.add(this.computeSbKey(sb));

        return this.createEvolutionRowFromSb(sb);
      });
    this.evolutionTable.list = [...evolutionList, ...modificationList, ...sbList];

    this.evolutionTable.moreResults = [
      evolutionResultList.map((results) => results.moreResults),
      modificationResultList.map((results) => results.moreResults),
      sbResultList.map((results) => results.moreResults)
    ]
      .reduce((acc, x) => acc.concat(x), [])
      .some((hasMoreResult) => hasMoreResult);

    this.evolutionTableLoading = false;
  }

  private setEvolutionTableColList(): void {
    this.evolutionTableColList = [
      { field: 'number', alignment: 'left', width: '12.5%' },
      { field: 'revisionNumber', alignment: 'right', width: '12.5%' },
      { field: 'status', alignment: 'left', width: '12.5%' },
      { field: 'source', alignment: 'left', width: '12.5%' },
      // { field: 'compliance', alignment: 'left', width: '12.5%' },
      { field: 'designation', alignment: 'left', width: '50%' }
    ];
  }

  ///////////////////////////////////////////////////////////////////////////////

  private computeEvolutionKey(evolution: BireEvolutionDTO): string {
    return `${evolution.evolutionNumber}-${evolution.evolutionRevisionNumber}`;
  }

  private computeModificationKey(modification: BireModificationDTO): string {
    return `${modification.modificationNumber}-${modification.modificationRevisionNumber}`;
  }

  private computeSbKey(sb: BireSbDTO): string {
    return `${sb.sbNumber}-${sb.sbRevisionNumber}`;
  }

  private filterAd(sb: BireSbDTO): boolean {
    const criteriaNumber = !StringUtils.isNullOrEmpty(this.searchCriteria.evolutionNumber);
    const criteriaRevisionNumber = !StringUtils.isNullOrEmpty(this.searchCriteria.evolutionRevisionNumber);
    const criteriaTitle = !StringUtils.isNullOrEmpty(this.searchCriteria.evolutionSummary);

    return (
      !StringUtils.isNullOrEmpty(sb.sbType) &&
      (sb.sbType as string) === AWPropertiesConstants.SB_TYPE_AD_KEY &&
      (!criteriaNumber ||
        (criteriaNumber &&
          (!StringUtils.isNullOrEmpty(sb.sbNumber) &&
            (sb.sbNumber as string).includes(this.searchCriteria.evolutionNumber as string)))) &&
      (!criteriaRevisionNumber ||
        (criteriaRevisionNumber &&
          (!StringUtils.isNullOrEmpty(sb.sbRevisionNumber) &&
            (sb.sbRevisionNumber as string).includes(this.searchCriteria.evolutionRevisionNumber as string)))) &&
      (!criteriaTitle ||
        (criteriaTitle &&
          (!StringUtils.isNullOrEmpty(sb.sbTitle) &&
            (sb.sbTitle as string).includes(this.searchCriteria.evolutionSummary as string))))
    );
  }

  private filterEvolution(evolution: BireEvolutionDTO): boolean {
    const criteriaNumber = !StringUtils.isNullOrEmpty(this.searchCriteria.evolutionNumber);
    const criteriaRevisionNumber = !StringUtils.isNullOrEmpty(this.searchCriteria.evolutionRevisionNumber);
    const criteriaTitle = !StringUtils.isNullOrEmpty(this.searchCriteria.evolutionSummary);

    return (
      (!criteriaNumber ||
        (criteriaNumber &&
          (!StringUtils.isNullOrEmpty(evolution.evolutionNumber) &&
            (evolution.evolutionNumber as string).includes(this.searchCriteria.evolutionNumber as string)))) &&
      (!criteriaRevisionNumber ||
        (criteriaRevisionNumber &&
          (!StringUtils.isNullOrEmpty(evolution.evolutionRevisionNumber) &&
            (evolution.evolutionRevisionNumber as string).includes(this.searchCriteria
              .evolutionRevisionNumber as string)))) &&
      (!criteriaTitle ||
        (criteriaTitle &&
          (!StringUtils.isNullOrEmpty(evolution.evolutionSummary) &&
            (evolution.evolutionSummary as string).includes(this.searchCriteria.evolutionSummary as string))))
    );
  }

  private filterModification(modification: BireModificationDTO): boolean {
    const criteriaNumber = !StringUtils.isNullOrEmpty(this.searchCriteria.evolutionNumber);
    const criteriaRevisionNumber = !StringUtils.isNullOrEmpty(this.searchCriteria.evolutionRevisionNumber);
    const criteriaTitle = !StringUtils.isNullOrEmpty(this.searchCriteria.evolutionSummary);

    return (
      (!criteriaNumber ||
        (criteriaNumber &&
          (!StringUtils.isNullOrEmpty(modification.modificationNumber) &&
            (modification.modificationNumber as string).includes(this.searchCriteria.evolutionNumber as string)))) &&
      (!criteriaRevisionNumber ||
        (criteriaRevisionNumber &&
          (!StringUtils.isNullOrEmpty(modification.modificationRevisionNumber) &&
            (modification.modificationRevisionNumber as string).includes(this.searchCriteria
              .evolutionRevisionNumber as string)))) &&
      (!criteriaTitle ||
        (criteriaTitle &&
          (!StringUtils.isNullOrEmpty(modification.modificationTitle) &&
            (modification.modificationTitle as string).includes(this.searchCriteria.evolutionSummary as string))))
    );
  }

  private filterSb(sb: BireSbDTO): boolean {
    const criteriaNumber = !StringUtils.isNullOrEmpty(this.searchCriteria.evolutionNumber);
    const criteriaRevisionNumber = !StringUtils.isNullOrEmpty(this.searchCriteria.evolutionRevisionNumber);
    const criteriaTitle = !StringUtils.isNullOrEmpty(this.searchCriteria.evolutionSummary);

    return (
      !StringUtils.isNullOrEmpty(sb.sbType) &&
      (sb.sbType as string) !== AWPropertiesConstants.SB_TYPE_CONFIGURATION_KEY &&
      (sb.sbType as string) !== AWPropertiesConstants.SB_TYPE_AD_KEY &&
      (!criteriaNumber ||
        (criteriaNumber &&
          (!StringUtils.isNullOrEmpty(sb.sbNumber) &&
            (sb.sbNumber as string).includes(this.searchCriteria.evolutionNumber as string)))) &&
      (!criteriaRevisionNumber ||
        (criteriaRevisionNumber &&
          (!StringUtils.isNullOrEmpty(sb.sbRevisionNumber) &&
            (sb.sbRevisionNumber as string).includes(this.searchCriteria.evolutionRevisionNumber as string)))) &&
      (!criteriaTitle ||
        (criteriaTitle &&
          (!StringUtils.isNullOrEmpty(sb.sbTitle) &&
            (sb.sbTitle as string).includes(this.searchCriteria.evolutionSummary as string))))
    );
  }

  private findEvolutionListByEquipment(): Observable<SearchResultsDTO<BireEvolutionDTO>> {
    return this.dialogSearchEvolutionService.findEvolutionListByEquipment(
      this.familyVariantCode,
      this.equipmentCode,
      ObjectUtils.isDefined(this.complianceStatus) ? [this.complianceStatus as number] : undefined,
      this.sn
    );
  }

  private findRecursivelyAssociatedEvolutionListToItemAndPnCode(): Observable<SearchResultsDTO<BireEvolutionDTO>> {
    return this.dialogSearchEvolutionService.findRecursivelyAssociatedEvolutionListToItemAndPnCode(
      this.familyCode,
      this.variantCode,
      this.structureType,
      this.pnCode
    );
  }

  private findEvolutionListByFamilyCodeAndVariantCode(): Observable<SearchResultsDTO<BireEvolutionDTO>> {
    return this.dialogSearchEvolutionService.findEvolutionListByFamilyCodeAndVariantCode(
      this.familyCode,
      this.variantCode,
      this.structureType
    );
  }

  private findEvolutionListByEvolutionIdAndDesignation(): Observable<SearchResultsDTO<BireEvolutionDTO>> {
    return this.dialogSearchEvolutionService.findEvolutionListByEvolutionIdAndDesignation(this.searchCriteria);
  }

  private findSbListByEquipment(): Observable<SearchResultsDTO<BireSbDTO>> {
    return this.dialogSearchEvolutionService.findSbListByEquipment(
      this.familyVariantCode,
      this.equipmentCode,
      ObjectUtils.isDefined(this.complianceStatus) ? [this.complianceStatus as number] : undefined,
      this.sn
    );
  }

  private findApplicableSbList(): Observable<SearchResultsDTO<BireSbDTO>> {
    return this.dialogSearchEvolutionService.findApplicableSbList(
      this.familyCode,
      this.variantCode,
      this.structureType,
      this.sn
    );
  }

  private findSbListBySbIdAndDesignation(): Observable<SearchResultsDTO<BireSbDTO>> {
    return this.dialogSearchEvolutionService.findSbListBySbIdAndDesignation(this.searchCriteria);
  }

  private findApplicableAdList(): Observable<SearchResultsDTO<BireSbDTO>> {
    return this.dialogSearchEvolutionService.findApplicableAdList(
      this.familyCode,
      this.variantCode,
      this.structureType,
      this.sn
    );
  }

  private findApplicableModificationList(): Observable<SearchResultsDTO<BireModificationDTO>> {
    return this.dialogSearchEvolutionService.findApplicableModificationList(
      this.familyCode,
      this.variantCode,
      this.structureType
    );
  }

  private findModificationListByModificationIdAndDesignation(): Observable<SearchResultsDTO<BireModificationDTO>> {
    return this.dialogSearchEvolutionService.findModificationListByModificationIdAndDesignation(
      this.searchCriteria,
      this.familyCode,
      this.structureType
    );
  }

  private postProcessAdResultList(result: SearchResultsDTO<BireSbDTO>): SearchResultsDTO<BireEvolutionDTO> {
    return this.postProcessResultList<BireSbDTO>(result, this.filterAd.bind(this), (sb: BireSbDTO) => {
      const updatedSb = { ...sb };
      updatedSb.sbType = BidoEvolutionConstants.CODE_AD;

      return updatedSb;
    });
  }

  private postProcessEvolutionResultList(
    result: SearchResultsDTO<BireEvolutionDTO>
  ): SearchResultsDTO<BireEvolutionDTO> {
    return this.postProcessResultList<BireEvolutionDTO>(
      result,
      this.filterEvolution.bind(this),
      (evolution: BireEvolutionDTO) => {
        const updatedEvolution = { ...evolution };
        updatedEvolution.evolutionType = BidoEvolutionConstants.CODE_EVOLUTION;

        return updatedEvolution;
      }
    );
  }

  private postProcessModificationResultList(
    result: SearchResultsDTO<BireModificationDTO>
  ): SearchResultsDTO<BireModificationDTO> {
    return this.postProcessResultList<BireModificationDTO>(
      result,
      this.filterModification.bind(this),
      (modification: BireModificationDTO) => {
        const updatedModification = { ...modification };
        updatedModification.modificationType = BidoEvolutionConstants.CODE_MODIFICATION;

        return updatedModification;
      }
    );
  }

  private postProcessResultList<T>(
    result: SearchResultsDTO<T>,
    filterfn: (obj: T) => boolean,
    transformfn: (obj: T) => T
  ): SearchResultsDTO<T> {
    return {
      list: result.list.filter(filterfn).map(transformfn),
      moreResults: result.moreResults
    };
  }

  private postProcessSbResultList(result: SearchResultsDTO<BireSbDTO>): SearchResultsDTO<BireSbDTO> {
    return this.postProcessResultList<BireSbDTO>(result, this.filterSb.bind(this), (sb: BireSbDTO) => {
      const updatedSb = { ...sb };
      updatedSb.sbType = BidoEvolutionConstants.CODE_SB;

      return updatedSb;
    });
  }
}
