import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { forkJoin } from 'rxjs';

import { ColumnAlignment, TableDataSource } from '../../../../shared/components/table/table-data-source';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { ExportService } from '../../../../shared/services/export.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BireVariantDTO } from '../../../../shared/types/api-types/bire-variant-dto.interface';
import { BireVariantVersionDTOId } from '../../../../shared/types/api-types/bire-variant-version-dto-id.interface';
import { BireVariantVersionDTO } from '../../../../shared/types/api-types/bire-variant-version-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { LabelValueUtils } from '../../../../shared/utils/label-value-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';

import { ApplicableConfigurationSearchService } from './applicable-configuration-search.service';

@Component({
  selector: 'aw-applicable-configuration-search',
  templateUrl: './applicable-configuration-search.component.html'
})
export class ApplicableConfigurationSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  private static readonly RESULTS_TABLE_EXPORT_NAME: string = 'applicable-configuration-list';

  public countries: SelectItem[];
  public customerTypes: SelectItem[];
  public applicableConfTableDataSource: TableDataSource<BireVariantDTO>;
  public searchObject: BidoCustomerDTO;
  public showAdvancedCriteria: boolean;
  public flFunctions: LabelValue<string>[];
  public structureTypes: LabelValue<string>[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly applicableConfigurationSearchService: ApplicableConfigurationSearchService,
    private readonly confirmationService: ConfirmationService,
    private readonly exportService: ExportService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.searchObject = {};
    this.showAdvancedCriteria = false;
    this.flFunctions = [];
    this.structureTypes = [];
    this.initApplicableConfTableDataSource();
  }

  public getComponentName(): string {
    return ComponentConstants.ENG_APPLICABLE_CONFIGURATION_SEARCH;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);

    forkJoin([
      this.propertiesService.getFamilyFunctionMap(),
      this.propertiesService.getValue(GenericPropertyConstants.STRUCTURE_TYPE_MAP)
    ]).subscribe(([itemFamilyList, structureTypeList]) => {
      this.flFunctions = ListUtils.orEmpty(itemFamilyList);
      this.structureTypes = ListUtils.orEmpty(structureTypeList);

      this.search();
    });
  }

  private initApplicableConfTableDataSource(): void {
    this.applicableConfTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'familyCode',
          translateKey: this.getTranslateKey('familyCode'),
          alignment: ColumnAlignment.LEFT,
          width: '10%'
        },
        {
          field: 'familyName',
          translateKey: this.getTranslateKey('familyName'),
          alignment: ColumnAlignment.LEFT,
          width: '18%'
        },
        {
          field: 'familyFunction',
          translateKey: this.getTranslateKey('familyFunction'),
          alignment: ColumnAlignment.LEFT,
          width: '18%'
        },
        {
          field: 'variantCode',
          translateKey: this.getTranslateKey('variantCode'),
          alignment: ColumnAlignment.LEFT,
          width: '18%'
        },
        {
          field: 'variantName',
          translateKey: this.getTranslateKey('variantName'),
          alignment: ColumnAlignment.LEFT,
          width: '18%'
        },
        {
          field: 'structureType',
          translateKey: this.getTranslateKey('structureType'),
          alignment: ColumnAlignment.LEFT,
          width: '18%'
        }
      ],
      data: []
    });
  }

  public deleteApplicableConfiguration(): void {
    if (this.applicableConfTableDataSource.hasDataSelection) {
      this.confirmationService.confirmDelete({
        messageKey: 'global.deleteConfirmationMsg',
        accept: () => {
          const selectedBireVariantVersionDTOId = new Array<BireVariantVersionDTOId>();
          this.applicableConfTableDataSource.dataSelection.forEach((applicableConfiguration) => {
            if (applicableConfiguration) {
              LabelValueUtils.labelToStringValue(applicableConfiguration, 'structureType', this.structureTypes);
              if (
                !!applicableConfiguration.familyCode &&
                !!applicableConfiguration.structureType &&
                !!applicableConfiguration.variantCode
              ) {
                const bireVariantVersionDTOId: BireVariantVersionDTOId = {
                  familyCode: applicableConfiguration.familyCode,
                  structureType: applicableConfiguration.structureType,
                  variantCode: applicableConfiguration.variantCode
                };
                selectedBireVariantVersionDTOId.push(bireVariantVersionDTOId);
              } else {
                super.throwUnboundLocalError('deleteApplicableConfiguration', 'applicableConfiguration');
              }
            }
          });
          this.applicableConfigurationSearchService.removeBireVariantVersion(selectedBireVariantVersionDTOId).subscribe(
            (result) => {
              this.messageService.showSuccessMessage('global.deleteSuccessMsg');
              this.applicableConfTableDataSource.deleteDataSelection();
            },
            () => {
              this.messageService.showErrorMessage('global.deleteErrorMsg');
            }
          );
        }
      });
    }
  }

  public exportTable(): void {
    if (!!this.componentData) {
      this.exportService.toExcel(
        this.modifyExportColumns(this.applicableConfTableDataSource.dataSrc),
        ApplicableConfigurationSearchComponent.RESULTS_TABLE_EXPORT_NAME,
        this.componentData.componentId
      );
    } else {
      super.throwUnboundLocalError('exportTable', 'this.componentData');
    }
  }

  private modifyExportColumns(resultArr: BidoCustomerDTO[]): BidoCustomerDTO[] {
    const exportArr: BidoCustomerDTO[] = [];
    resultArr.forEach((res) => {
      const json: BidoCustomerDTO = {};
      const keys = Object.keys(res);
      keys.forEach((key) => {
        if (
          key !== 'statusDate' &&
          key !== 'statusUser' &&
          key !== 'statusState' &&
          key !== 'variantRevisionDate' &&
          key !== 'variantRevisionNumber'
        ) {
          json[key] = res[key];
        }
      });
      exportArr.push(json);
    });

    return exportArr;
  }

  public refresh() {
    this.search();
  }

  public openNewApplicableConfigration(): void {
    this.openApplicableConfiguration(undefined, ComponentOpenMode.Create);
  }

  public openSelectedApplicableConfiguration(): void {
    this.applicableConfTableDataSource.dataSelection.forEach((applicableConfiguration) => {
      if (!!applicableConfiguration) {
        if (
          !!applicableConfiguration.familyCode &&
          applicableConfiguration.familyCode.trim().length > 0 &&
          !!applicableConfiguration.variantCode &&
          applicableConfiguration.variantCode.trim().length > 0 &&
          !!applicableConfiguration.structureType &&
          applicableConfiguration.structureType.trim().length > 0
        ) {
          this.openApplicableConfiguration(applicableConfiguration, ComponentOpenMode.Read);
        } else {
          this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingCustomerCode'));
        }
      }
    });
  }

  private openApplicableConfiguration(objectId: BireVariantDTO | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_APPLICABLE_CONFIGURATION_FORM,
      openMode
    };
    if (!!objectId && !!objectId.familyFunction) {
      const matchingFlFunction = this.flFunctions.find((elt) => elt.label === objectId.familyFunction);
      const familyFunction = matchingFlFunction ? matchingFlFunction.value : undefined;

      const matchingStructureType = this.structureTypes.find((elt) => elt.label === objectId.structureType);
      const structureType = matchingStructureType ? matchingStructureType.value : undefined;

      const bireVariantVersionDTO: BireVariantDTO = {
        familyFunction,
        structureType,
        familyCode: objectId.familyCode,
        variantCode: objectId.variantCode,
        variantName: objectId.variantName,
        variantRevisionNumber: objectId.variantRevisionNumber,
        variantRevisionDate: objectId.variantRevisionDate,
        familyName: objectId.familyName,
        statusDate: objectId.statusDate,
        statusState: objectId.statusState,
        statusUser: objectId.statusUser
      };
      data.objectId = this.serializationService.serialize(bireVariantVersionDTO);
    }
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public formatFunctions(functionKey: string): string {
    const selectedFunction = this.flFunctions.find((functions) => functions.value === functionKey);

    return !!selectedFunction && !!selectedFunction.label ? selectedFunction.label : '';
  }

  public formatStructures(structureKey: string): string {
    const selectedStructure = this.structureTypes.find((structures) => structures.value === structureKey);

    return !!selectedStructure && !!selectedStructure.label ? selectedStructure.label : '';
  }

  public resetSearchCriteria(): void {
    this.searchObject = {};
  }

  public search(): void {
    this.applicableConfigurationSearchService.findFamilyVariantVersion().subscribe((result) => {
      if (result) {
        result.list.forEach((element) => {
          LabelValueUtils.stringValueToLabel(element, 'structureType', this.structureTypes);
          LabelValueUtils.stringValueToLabel(element, 'familyFunction', this.flFunctions);
        });
      }
      this.setResultsTable(result);
    });
  }

  private setResultsTable(result: SearchResultsDTO<BireVariantDTO>): void {
    if (!!result) {
      this.applicableConfTableDataSource.setData(
        result.list.sort((e1, e2) => {
          if (StringUtils.isNullOrEmpty(e1.familyCode)) {
            return 1;
          } else if (StringUtils.isNullOrEmpty(e2.familyCode)) {
            return -1;
          } else {
            return (e1.familyCode as string).localeCompare(e2.familyCode as string);
          }
        })
      );
    }
    this.applicableConfTableDataSource.dataSelection = [];
  }

  private returnStructureValue(label) {
    let value;
    this.structureTypes.forEach((res) => {
      if (res.label === label) {
        value = res.value;
      }
    });

    return value;
  }

  public openExportLimits(): void {
    const selectedApplicableConf = this.applicableConfTableDataSource.dataSelection;
    LabelValueUtils.stringValueToLabel(selectedApplicableConf, 'structureType', this.structureTypes);
    const bireVariantVersionDto: BireVariantVersionDTO = {
      familyCode: selectedApplicableConf[0].familyCode,
      structureType: this.returnStructureValue(selectedApplicableConf[0].structureType),
      variantCode: selectedApplicableConf[0].variantCode,
      variantName: selectedApplicableConf[0].variantName,
      variantRevisionNumber: selectedApplicableConf[0].variantRevisionNumber,
      variantRevisionDate: selectedApplicableConf[0].variantRevisionDate,
      statusState: selectedApplicableConf[0].statusState,
      statusUser: selectedApplicableConf[0].statusUser,
      statusDate: selectedApplicableConf[0].statusDate
    };

    this.applicableConfigurationSearchService.exportLimitsData(bireVariantVersionDto).subscribe(
      (result) => {
        if (!!this.componentData) {
          // this.downLoadFiles(result, templateName);
          if (result.length === 0) {
            const dto = {
              atachapter: '',
              limitValue: '',
              unitCode: '',
              familyVariant: '',
              itemNumber: '',
              partNumber: '',
              counter: '',
              rating: '',
              limitIsUpdatable: '',
              partDesignation: ''
            };
            result.push(dto);
          }

          this.exportService.toExcel(
            result,
            ApplicableConfigurationSearchComponent.RESULTS_TABLE_EXPORT_NAME,
            this.componentData.componentId
          );
        } else {
          super.throwUnboundLocalError('openExportLimits', 'this.componentData');
        }
      },
      () => {
        this.messageService.showErrorMessage('errorExportLimits');
      }
    );
  }
}
