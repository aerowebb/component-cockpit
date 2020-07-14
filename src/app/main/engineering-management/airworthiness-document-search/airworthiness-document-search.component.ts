import { ElementRef, OnInit, ViewChild } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { Observable } from 'rxjs';

import { ISearchCriteria } from '../../../shared/components/manage-search-criteria/search-criteria.interface';
import { TableDataSource } from '../../../shared/components/table/table-data-source';
import { AWPropertiesConstants } from '../../../shared/constants/aw-properties-constants';
import { BidoFunctionTypeConstants } from '../../../shared/constants/bido-function-type-constants';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { DateService } from '../../../shared/services/date.service';
import { ExportService } from '../../../shared/services/export.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { SessionService } from '../../../shared/services/session.service';
import { TabService } from '../../../shared/services/tab.service';
import { FindBireSbsBySbCriteriaInput } from '../../../shared/types/api-input-types/product-structure-management/find-bire-sbs-by-sb-criteria-input.interface';
import { FindFamilyVariantInput } from '../../../shared/types/api-input-types/product-structure-management/find-family-variant-input.interface';
import { BireSbDTOId } from '../../../shared/types/api-types/bire-sb-dto-id.interface';
import { BireSbDTO } from '../../../shared/types/api-types/bire-sb-dto.interface';
import { FamilyVariantDTO } from '../../../shared/types/api-types/family-variant-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { LabelValueUtils } from '../../../shared/utils/label-value-utils';

import { AirworthinessDocumentSearchService } from './airworthiness-document-search.service';

interface ResultTableRow {
  sbNumber: string;
  sbRevisionNumber: string;
  statusState: string | undefined;
  sbType: string | undefined;
  sbSubType: string | undefined;
  sbCompliance: string | undefined;
  sbClass: string | undefined;
  sbPublicationDate: string | undefined;
  sbEffectiveDate: string | undefined;
  sbDocumentUrl: string | undefined;
  sbTitle: string | undefined;
  expand: boolean;
  dataKey: string;
  _obj: BireSbDTO;
}

export abstract class AirworthinessDocumentSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  @ViewChild('resultsContainerAnchor')
  public resultsContainerAnchor: ElementRef;
  public isLoading: boolean;
  public adTableDataSource: TableDataSource<ResultTableRow>;
  public searchObject: BireSbDTO;
  public exportMethods: MenuItem[];
  public showAdvancedCriteria: boolean;
  public familyVariant: string | undefined;
  public familyVariantDTOList: FamilyVariantDTO[];

  public propertyType: LabelValue<string>[];
  public propertySubType: LabelValue<string>[];
  public propertyStatus: LabelValue<string>[];
  public propertyVariant: LabelValue<string>[];
  public propertyClass: LabelValue<string>[];
  public propertyCompliance: LabelValue<string>[];
  public familyCode: string | undefined;
  public structureType: string | undefined;
  public variantCode: string | undefined;

  // Date parametres
  public sbPublicationDateFrom?: Date;
  public sbPublicationDateTo?: Date;
  public sbEffectiveDateFrom?: Date;
  public sbEffectiveDateTo?: Date;

  public criteriaToSave: FindBireSbsBySbCriteriaInput;
  public criteriaName: string | undefined;

  public SEARCH_CRITERIA_ID: string;
  public hasBeenCalculated: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    public readonly confirmationService: ConfirmationService,
    private readonly exportService: ExportService,
    protected readonly propertiesService: PropertiesService,
    public translateService: TranslateService,
    public dateService: DateService,
    protected readonly airworthinessDocumentSearchService: AirworthinessDocumentSearchService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.showAdvancedCriteria = false;
    this.isLoading = false;
    this.propertyStatus = [];

    this.searchObject = {};
    this.exportMethods = [];
    this.propertyVariant = [];

    this.initAdTableDataSource();

    this.setExportMethods();

    // DropDown
    this.loadDropDownLists();

    this.translateService.onLangChange.subscribe((_: LangChangeEvent) => {
      this.setExportMethods();
      this.loadDropDownLists();
    });
  }

  public showSubType(): boolean {
    return false;
  }

  protected abstract findAirworthinessDocumentByCriteria(
    familyCode: string | undefined,
    structureType: string | undefined,
    variantCode: string | undefined
  ): Observable<SearchResultsDTO<BireSbDTO>>;

  protected initAdTableDataSource(): void {
    this.adTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'sbNumber', translateKey: this.getTranslateKey('sbNumber'), width: '12%' },
        { field: 'sbRevisionNumber', translateKey: this.getTranslateKey('sbRevisionNumber'), width: '10%' },
        { field: 'sbTitle', translateKey: this.getTranslateKey('sbTitle'), width: '28%' },
        { field: 'statusState', translateKey: this.getTranslateKey('statusState'), width: '10%' },
        { field: 'sbType', translateKey: this.getTranslateKey('sbType'), width: '10%' },
        { field: 'sbCompliance', translateKey: this.getTranslateKey('sbCompliance'), width: '10%' },
        { field: 'sbPublicationDate', translateKey: this.getTranslateKey('sbPublicationDate'), width: '10%' },
        { field: 'sbEffectiveDate', translateKey: this.getTranslateKey('sbEffectiveDate'), width: '10%' }
      ],
      data: []
    });
  }

  public getComponentName(): string {
    return ComponentConstants.ENG_SBAD_SEARCH;
  }

  public ngOnInit() {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);
  }

  public deleteSelectedSbad(): void {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey('confirmDeleteSelectedSbs'),
      accept: () => {
        const selectedObj: BireSbDTO[] = this.adTableDataSource.dataSelection.map((obj) => {
          return obj._obj;
        });
        this.airworthinessDocumentSearchService.removeBireSbs(selectedObj).subscribe(
          (result) => {
            this.messageService.showSuccessMessage(this.getTranslateKey('onSuccessDeleteSbad'));
            this.adTableDataSource.dataSelection = [];
            this.search();
          },
          () => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnDeleteSbad'));
          }
        );
      }
    });
  }

  public moreResult(): void {
    // TODO: Implement the button when it will be available
  }

  public openNewSbad(): void {
    this.openSbad(undefined, ComponentOpenMode.Create);
  }

  public openSelectedSbad(): void {
    this.adTableDataSource.dataSelection.forEach((sbad) => {
      if (sbad && sbad.sbNumber && sbad.sbRevisionNumber) {
        const bireSbId: BireSbDTOId = { sbNumber: sbad.sbNumber, sbRevisionNumber: sbad.sbRevisionNumber };
        this.openSbad(bireSbId, ComponentOpenMode.Read);
      }
    });
  }

  public resetResultsTable(table: Table): void {
    table.reset();
    table.filters = {};
  }

  public resetSearchCriteria(): void {
    this.searchObject = {};
    this.sbPublicationDateFrom = undefined;
    this.sbPublicationDateTo = undefined;
    this.sbEffectiveDateFrom = undefined;
    this.sbEffectiveDateTo = undefined;
    this.familyVariant = undefined;

    this.criteriaName = undefined;
  }

  public loadSearchCriteria(event: ISearchCriteria): void {
    const criteria: FindBireSbsBySbCriteriaInput | undefined = event.criteria;
    if (!criteria) {
      this.resetSearchCriteria();

      return;
    }
    this.criteriaName = event.name;
    this.searchObject = criteria.bireSbDTO || {};
    this.sbPublicationDateFrom = criteria.publicationDateFrom;
    this.sbPublicationDateTo = criteria.publicationDateTo;
    this.sbEffectiveDateFrom = criteria.effectiveDateFrom;
    this.sbEffectiveDateTo = criteria.effectiveDateTo;
    this.familyVariant = criteria.familyCode;
    this.variantCode = criteria.variantCode;
    this.structureType = criteria.structureType;
    this.familyCode = criteria.fCode;
    this.searchByFavorite();
  }

  public saveSearchCriteriaAsked(): void {
    let familyCode: string | undefined;
    let structureType: string | undefined;
    let variantCode: string | undefined;

    if (this.familyVariantDTOList) {
      const familyVariantObject = this.familyVariantDTOList.find(
        (family) => !!family.labelValueDTO && family.labelValueDTO.label === this.familyVariant
      );
      if (familyVariantObject) {
        familyCode = familyVariantObject.familyCode;
        structureType = familyVariantObject.structureType;
        variantCode = familyVariantObject.variantCode;
      } else {
        familyCode = undefined;
        structureType = undefined;
        variantCode = undefined;
      }
    } else {
      familyCode = undefined;
      structureType = undefined;
      variantCode = undefined;
    }
    this.familyCode = familyCode;
    this.variantCode = variantCode;
    this.structureType = structureType;
    const criteriaToSave: FindBireSbsBySbCriteriaInput = {
      bireSbDTO: this.searchObject,
      publicationDateFrom: this.sbPublicationDateFrom,
      publicationDateTo: this.sbPublicationDateTo,
      effectiveDateFrom: this.sbEffectiveDateFrom,
      effectiveDateTo: this.sbEffectiveDateTo,
      familyCode: this.familyVariant,
      fCode: this.familyCode,
      variantCode: this.variantCode,
      structureType: this.structureType
    };
    this.criteriaToSave = criteriaToSave;
  }

  private loadDropDownLists(): void {
    this.loadStatus(AWPropertiesConstants.OBJECT_STATUS_LOADED_KEY);
    this.loadClassifications();
    this.loadTypes();
    this.loadSubTypes();
    this.loadCompliances();
    this.loadFamilyVariants();
  }

  protected loadStatus(statusState: string): void {
    this.propertiesService.getObjectStatusList(true, false, false, statusState, false).subscribe(
      (results) => {
        if (results) {
          results.forEach((element) => {
            if (this.propertyStatus.filter((status) => status.value === element.value).length === 0) {
              this.propertyStatus.push(element);
            }
          });
          this.propertyStatus = [...this.propertyStatus];
          this.adTableDataSource.dataSrc.forEach((element) => {
            LabelValueUtils.stringValueToLabel<BireSbDTO>(element._obj, 'statusState', this.propertyStatus);
          });
          this.adTableDataSource.setData(this.adTableDataSource.dataSrc);
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetStatusList'));
      }
    );
  }

  protected loadTypes(): void {
    this.propertiesService.getValue('getSbTypeMap').subscribe(
      (results) => {
        this.propertyType = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnSbTypeList'));
      }
    );
  }

  public loadSubTypes(): void {
    this.propertiesService.getValue('getAdditionalGuidelineSubTypeMap').subscribe(
      (results) => {
        if (results) {
          this.propertySubType = results;
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnSbTypeList'));
      }
    );
  }

  private loadCompliances(): void {
    this.propertiesService.getValue('getComplianceMap').subscribe(
      (results) => {
        if (results) {
          this.propertyCompliance = results;
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnComplianceList'));
      }
    );
  }

  private loadClassifications(): void {
    this.propertiesService.getValue('getSbClassificationMap').subscribe(
      (results) => {
        if (results) {
          this.propertyClass = results;
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnClassificationList'));
      }
    );
  }

  private loadFamilyVariants(): void {
    const familyVariantInput: FindFamilyVariantInput = {
      useCase: BidoFunctionTypeConstants.UC_MCH_BOM,
      module: BidoFunctionTypeConstants.MODULE_FAMILY
    };
    this.airworthinessDocumentSearchService.getFamilyVariants(familyVariantInput).subscribe(
      (results) => {
        const list: LabelValue<string>[] = [];
        results.forEach((element) => {
          if (!!element.labelValueDTO) {
            list.push(element.labelValueDTO);
          } else {
            super.throwUnboundLocalError('loadFamilyVariants', 'element.labelValueDTO');
          }
        });
        this.propertyVariant = list;
        this.familyVariantDTOList = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetFamilyVariant'));
      }
    );
  }

  public exportTable(): void {
    this.exportService.toExcel(
      this.adTableDataSource.sanitizedData,
      this.getTableExportName(),
      this.componentData.componentId
    );
  }

  public abstract getFormComponentName(): string;

  public openSbad(objectId: BireSbDTOId | undefined, openMode: ComponentOpenMode): void {
    let serializedObjectId: string | undefined;
    if (objectId != undefined) {
      serializedObjectId = this.serializationService.serialize(objectId);
    }

    const formComponentName = this.getFormComponentName();
    const labelKey = 'transaction.' + formComponentName;
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: formComponentName,
      objectId: serializedObjectId,
      openMode
    };
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private setExportMethods(): void {
    this.exportMethods = [
      {
        label: this.translateService.instant('global.excel'),
        icon: 'fa-file-excel-o'
        // command: () => {
        //   // TODO ?
        // }
      },
      {
        label: this.translateService.instant('global.pdf'),
        icon: 'fa-file-pdf-o'
        // command: () => {
        //   // TODO ?
        // }
      }
    ];
  }

  // TODO add the publicationDateFrom/To and effectiveDateFrom/To
  public search(): void {
    this.adTableDataSource.setData([]);
    super.scrollToAnchor(this.resultsContainerAnchor);

    let familyCode: string | undefined;
    let structureType: string | undefined;
    let variantCode: string | undefined;

    if (this.familyVariantDTOList) {
      const familyVariantObject = this.familyVariantDTOList.find(
        (family) => !!family.labelValueDTO && family.labelValueDTO.value === this.familyVariant
      );
      if (familyVariantObject) {
        familyCode = familyVariantObject.familyCode;
        structureType = familyVariantObject.structureType;
        variantCode = familyVariantObject.variantCode;
      } else {
        familyCode = undefined;
        structureType = undefined;
        variantCode = undefined;
      }
    } else {
      familyCode = undefined;
      structureType = undefined;
      variantCode = undefined;
    }

    this.isLoading = true;
    this.findAirworthinessDocumentByCriteria(familyCode, structureType, variantCode).subscribe(
      (results) => {
        // Modifying the value into the label for statusState, sbCompliance and sbType
        if (results) {
          results.list.forEach((element) => {
            if (
              !LabelValueUtils.stringValueToLabel<BireSbDTO>(element, 'statusState', this.propertyStatus) &&
              !!element.statusState
            ) {
              this.loadStatus(element.statusState);
            }
            LabelValueUtils.stringValueToLabel<BireSbDTO>(element, 'sbCompliance', this.propertyCompliance);
            LabelValueUtils.stringValueToLabel<BireSbDTO>(element, 'sbType', this.propertyType);
          });

          const adList = results.list.map((obj) => {
            const row: ResultTableRow = {
              sbNumber: obj.sbNumber || '',
              sbRevisionNumber: obj.sbRevisionNumber || '',
              statusState: obj.statusState,
              sbType: obj.sbType,
              sbSubType: obj.sbSubType,
              sbCompliance: obj.sbCompliance,
              sbClass: obj.sbClass,
              sbPublicationDate: this.dateService.dateToString(obj.sbPublicationDate),
              sbEffectiveDate: this.dateService.dateToString(obj.sbEffectiveDate),
              sbDocumentUrl: obj.sbDocumentUrl,
              sbTitle: obj.sbTitle,
              _obj: obj,
              expand: false,
              dataKey: `${obj.sbNumber} ${obj.sbRevisionNumber}`
            };

            return row;
          });
          this.adTableDataSource.setData(adList);
        }
        this.isLoading = false;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetResults'));
        this.isLoading = false;
      }
    );
  }

  public searchByFavorite(): void {
    super.scrollToAnchor(this.resultsContainerAnchor);
    if (this.isAD()) {
      this.searchObject.sbType = AWPropertiesConstants.SB_TYPE_AD_KEY;
      this.airworthinessDocumentSearchService
        .findBireSbsBySbCriteria(
          this.searchObject,
          this.familyCode,
          this.structureType,
          this.variantCode,
          this.sbPublicationDateFrom,
          this.sbPublicationDateTo,
          this.sbEffectiveDateFrom,
          this.sbEffectiveDateTo
        )
        .subscribe(
          (results) => {
            // Modifying the value into the label for statusState, sbCompliance and sbType
            if (results) {
              results.list.forEach((element) => {
                if (
                  !LabelValueUtils.stringValueToLabel<BireSbDTO>(element, 'statusState', this.propertyStatus) &&
                  !!element.statusState
                ) {
                  this.loadStatus(element.statusState);
                }
                LabelValueUtils.stringValueToLabel<BireSbDTO>(element, 'sbCompliance', this.propertyCompliance);
                LabelValueUtils.stringValueToLabel<BireSbDTO>(element, 'sbType', this.propertyType);
              });

              const adList = results.list.map((obj) => {
                const row: ResultTableRow = {
                  sbNumber: obj.sbNumber || '',
                  sbRevisionNumber: obj.sbRevisionNumber || '',
                  statusState: obj.statusState,
                  sbType: obj.sbType,
                  sbSubType: obj.sbSubType,
                  sbCompliance: obj.sbCompliance,
                  sbClass: obj.sbClass,
                  sbPublicationDate: this.dateService.dateToString(obj.sbPublicationDate),
                  sbEffectiveDate: this.dateService.dateToString(obj.sbEffectiveDate),
                  sbDocumentUrl: obj.sbDocumentUrl,
                  sbTitle: obj.sbTitle,
                  _obj: obj,
                  expand: false,
                  dataKey: `${obj.sbNumber} ${obj.sbRevisionNumber}`
                };

                return row;
              });
              this.adTableDataSource.setData(adList);
            }
          },
          () => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetResults'));
          }
        );
    } else {
      this.familyCode = !!this.familyCode ? this.familyCode : '';
      this.structureType = !!this.structureType ? this.structureType : '';
      this.variantCode = !!this.variantCode ? this.variantCode : '';
      this.airworthinessDocumentSearchService
        .findBireSbsBySbCriteriaAd(
          this.searchObject,
          this.familyCode,
          this.structureType,
          this.variantCode,
          this.sbPublicationDateFrom,
          this.sbPublicationDateTo,
          this.sbEffectiveDateFrom,
          this.sbEffectiveDateTo
        )
        .subscribe(
          (results) => {
            // Modifying the value into the label for statusState, sbCompliance and sbType
            if (results) {
              results.list.forEach((element) => {
                if (
                  !LabelValueUtils.stringValueToLabel<BireSbDTO>(element, 'statusState', this.propertyStatus) &&
                  !!element.statusState
                ) {
                  this.loadStatus(element.statusState);
                }
                LabelValueUtils.stringValueToLabel<BireSbDTO>(element, 'sbCompliance', this.propertyCompliance);
                LabelValueUtils.stringValueToLabel<BireSbDTO>(element, 'sbType', this.propertyType);
              });

              const adList = results.list.map((obj) => {
                const row: ResultTableRow = {
                  sbNumber: obj.sbNumber || '',
                  sbRevisionNumber: obj.sbRevisionNumber || '',
                  statusState: obj.statusState,
                  sbType: obj.sbType,
                  sbSubType: obj.sbSubType,
                  sbCompliance: obj.sbCompliance,
                  sbClass: obj.sbClass,
                  sbPublicationDate: this.dateService.dateToString(obj.sbPublicationDate),
                  sbEffectiveDate: this.dateService.dateToString(obj.sbEffectiveDate),
                  sbDocumentUrl: obj.sbDocumentUrl,
                  sbTitle: obj.sbTitle,
                  _obj: obj,
                  expand: false,
                  dataKey: `${obj.sbNumber} ${obj.sbRevisionNumber}`
                };

                return row;
              });
              this.adTableDataSource.setData(adList);
            }
          },
          () => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetResults'));
          }
        );
    }
  }

  /**************************************************************************
   * Abstract methods
   *************************************************************************/

  protected abstract getTableExportName(): string;

  public abstract isAD(): boolean;

  public toggleRowDetailsVisibility(row: ResultTableRow): void {
    row.expand = !row.expand;
  }

  public openSbadNumber(sbad: ResultTableRow): void {
    if (sbad && sbad.sbNumber && sbad.sbRevisionNumber) {
      const bireSbId: BireSbDTOId = { sbNumber: sbad.sbNumber, sbRevisionNumber: sbad.sbRevisionNumber };
      this.openSbad(bireSbId, ComponentOpenMode.Read);
    }
  }
}
