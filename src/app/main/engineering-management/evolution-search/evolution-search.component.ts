import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';

import { ColumnAlignment, TableDataSource } from '../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { ExportService } from '../../../shared/services/export.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { TabService } from '../../../shared/services/tab.service';
import { FindFamilyVariantInput } from '../../../shared/types/api-input-types/product-structure-management/find-family-variant-input.interface';
import { BireEvolutionDTOId } from '../../../shared/types/api-types/bire-evolution-dto-id.interface';
import { BireEvolutionDTO } from '../../../shared/types/api-types/bire-evolution-dto.interface';
import { FamilyVariantDTO } from '../../../shared/types/api-types/family-variant-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { LabelValueUtils } from '../../../shared/utils/label-value-utils';

import { EvolutionSearchService } from './evolution-search.service';

@Component({
  selector: 'aw-evolution-search',
  templateUrl: './evolution-search.component.html'
})
export class EvolutionSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  private static readonly RESULTS_TABLE_EXPORT_NAME: string = 'evolution-list';
  public isLoading: boolean;
  public resultsTableDatasource: TableDataSource<BireEvolutionDTO>;
  public moreResults: boolean;
  public searchObject: BireEvolutionDTO;
  public selectedEvolution: BireEvolutionDTO[];
  public exportMethods: MenuItem[];
  public propertyVariant: LabelValue<string>[];
  public propertyStatus: LabelValue<string>[];
  public propertyType: LabelValue<string>[];
  public propertyCompliance: LabelValue<string>[];
  public propertyLevel: LabelValue<string>[];
  public showAdvancedCriteria: boolean;
  /*public selectedFamilyVariant: LabelValue<string>;*/
  public familyVariant: string | undefined;
  public familyVariantMap: Map<LabelValue<string>, FamilyVariantDTO>;

  /* HTML references ***********************************************************/

  @ViewChild('resultsContainerAnchor')
  public resultsContainerAnchor: ElementRef;

  /* ***************************************************************************/

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly evolutionSearchService: EvolutionSearchService,
    private readonly confirmationService: ConfirmationService,
    private readonly translateService: TranslateService,
    private readonly exportService: ExportService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.isLoading = false;
    this.showAdvancedCriteria = false;
    this.familyVariantMap = new Map<LabelValue<string>, FamilyVariantDTO>();

    this.searchObject = {};
    this.selectedEvolution = [];
    this.exportMethods = [];
    this.propertyVariant = [];
    this.propertyStatus = [];
    this.propertyType = [];
    this.propertyCompliance = [];
    this.propertyLevel = [];

    this.setExportMethods();

    this.translateService.onLangChange.subscribe((_: LangChangeEvent) => {
      this.setExportMethods();
      this.loadDropDownLists();
    });

    this.initResultsTableDatasource();
  }

  public getComponentName(): string {
    return 'EvolutionSearchComponent';
  }

  public ngOnInit() {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);

    this.loadDropDownLists();
  }

  public deleteSelectedEvolution(): void {
    const partialMessageKey =
      this.resultsTableDatasource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedEvolutions'
        : 'confirmDeleteSelectedEvolution';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.resultsTableDatasource.dataSelection.forEach((evolution) => {
          if (evolution && evolution.evolutionNumber && evolution.evolutionRevisionNumber) {
            const evolutionId: BireEvolutionDTOId = {
              evolutionNumber: evolution.evolutionNumber,
              evolutionRevisionNumber: evolution.evolutionRevisionNumber
            };
            this.evolutionSearchService.removeBireEvolution(evolutionId).subscribe(
              (result) => {
                if (result) {
                  this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteEvolution'));
                } else {
                  this.messageService.showErrorMessage(this.getTranslateKey('errorOnDeleteEvolution'));
                }
              },
              () => {
                this.messageService.showErrorMessage(this.getTranslateKey('errorOnDeleteEvolution'));
              }
            );
          }
        });
        this.resultsTableDatasource.deleteDataSelection();
      }
    });
  }

  public openNewEvolution(): void {
    this.openEvolution(undefined, ComponentOpenMode.Create);
  }

  public openEvolutionLink(evolution: BireEvolutionDTO): void {
    if (evolution && evolution.evolutionNumber && evolution.evolutionRevisionNumber) {
      const bireEvolutionId: BireEvolutionDTOId = {
        evolutionNumber: evolution.evolutionNumber,
        evolutionRevisionNumber: evolution.evolutionRevisionNumber
      };
      this.openEvolution(bireEvolutionId, ComponentOpenMode.Read);
    }
  }

  public openSelectedEvolution(): void {
    this.resultsTableDatasource.dataSelection.forEach((evolution) => {
      if (evolution && evolution.evolutionNumber && evolution.evolutionRevisionNumber) {
        const bireEvolutionId: BireEvolutionDTOId = {
          evolutionNumber: evolution.evolutionNumber,
          evolutionRevisionNumber: evolution.evolutionRevisionNumber
        };
        this.openEvolution(bireEvolutionId, ComponentOpenMode.Read);
      }
    });
  }

  public resetResultsTable(table: Table): void {
    table.reset();
    table.filters = {};
  }

  public resetSearchCriteria(): void {
    this.searchObject = {};
    this.familyVariant = undefined;
  }

  public search(): void {
    let familyCode = '';
    let structureType = '';
    let variantCode = '';
    if (this.familyVariant) {
      let familyVariantDTO: FamilyVariantDTO;
      this.familyVariantMap.forEach((variantElement) => {
        if (!!variantElement.labelValueDTO && variantElement.labelValueDTO.value === this.familyVariant) {
          familyVariantDTO = variantElement;

          if (!!familyVariantDTO.familyCode && !!familyVariantDTO.structureType && !!familyVariantDTO.variantCode) {
            familyCode = familyVariantDTO.familyCode;
            structureType = familyVariantDTO.structureType;
            variantCode = familyVariantDTO.variantCode;
          }
        }
      });
    }
    super.scrollToAnchor(this.resultsContainerAnchor);
    this.isLoading = true;
    this.evolutionSearchService
      .findBireEvolutionsByEvolutionCriteria(this.searchObject, familyCode, structureType, variantCode)
      .subscribe(
        (results) => {
          if (results) {
            results.list.forEach((element) => {
              // if (element.evolutionLevel) {
              //   element.evolutionLevel = this.propertyLevel.filter(
              //     (level) => level.value === element.evolutionLevel
              //   )[0].label;
              // }
              // if (element.evolutionCompliance) {
              //   element.evolutionCompliance = this.propertyCompliance.filter(
              //     (compliance) => compliance.value === element.evolutionCompliance
              //   )[0].label;
              // }
              // if (element.evolutionType) {
              //   element.evolutionType = this.propertyType.filter(
              //     (type) => type.value === element.evolutionType
              //   )[0].label;
              // }
              LabelValueUtils.stringValueToLabel<BireEvolutionDTO>(element, 'evolutionLevel', this.propertyLevel);
              LabelValueUtils.stringValueToLabel<BireEvolutionDTO>(
                element,
                'evolutionCompliance',
                this.propertyCompliance
              );
              LabelValueUtils.stringValueToLabel<BireEvolutionDTO>(element, 'evolutionType', this.propertyType);
            });
            this.resultsTableDatasource.setData(results.list);
            this.moreResults = results.moreResults;
          }
          super.differ(() => {
            super.scrollToAnchor(this.resultsContainerAnchor);
          });
          this.isLoading = false;
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetResults'));
          this.isLoading = false;
        }
      );
  }

  private loadDropDownLists(): void {
    const familyVariantInput: FindFamilyVariantInput = {
      useCase: 'UC50',
      module: 'FAMILY'
    };
    this.evolutionSearchService.getFamilyVariant(familyVariantInput).subscribe(
      (results) => {
        const list = new Array<LabelValue<string>>();
        results.forEach((variantElement) => {
          if (!!variantElement.labelValueDTO) {
            list.push(variantElement.labelValueDTO);
            this.familyVariantMap.set(variantElement.labelValueDTO, variantElement);
          }
        });
        this.propertyVariant = list;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetFamilyVariant'));
      }
    );
    this.evolutionSearchService.getFuncObjectStatusMap().subscribe(
      (results) => {
        this.propertyStatus = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetStatus'));
      }
    );

    this.evolutionSearchService.getEvolutionTypeMap().subscribe(
      (results) => {
        this.propertyType = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetEvolutionType'));
      }
    );

    this.evolutionSearchService.getComplianceMap().subscribe(
      (results) => {
        this.propertyCompliance = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetCompliance'));
      }
    );

    this.evolutionSearchService.getEvolutionLevelMap().subscribe(
      (results) => {
        this.propertyLevel = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetEvolutionLevel'));
      }
    );
  }

  private openEvolution(objectId: BireEvolutionDTOId | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.EvolutionFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EvolutionFormComponent',
      objectId: this.serializationService.serialize(objectId),
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
    this.selectedEvolution = [];
  }

  public save() {
    // TODO
  }

  private setExportMethods(): void {
    this.exportMethods = [
      {
        label: this.translateService.instant('global.excel'),
        icon: 'fa-file-excel-o',
        command: () => {
          // TODO
        }
      },
      {
        label: this.translateService.instant('global.pdf'),
        icon: 'fa-file-pdf-o',
        command: () => {
          // TODO
        }
      }
    ];
  }

  public exportTable(): void {
    if (!!this.componentData) {
      this.exportService.toExcel(
        this.modifyExportColumns(this.resultsTableDatasource.dataSrc),
        EvolutionSearchComponent.RESULTS_TABLE_EXPORT_NAME,
        this.componentData.componentId
      );
    } else {
      super.throwUnboundLocalError('exportTable', 'this.componentData');
    }
  }

  private modifyExportColumns(resultArr: BireEvolutionDTO[]): BireEvolutionDTO[] {
    const exportArr: BireEvolutionDTO[] = [];

    resultArr.forEach((res) => {
      const json: BireEvolutionDTO = {};
      const keys = Object.keys(res);
      keys.forEach((key) => {
        if (key !== 'statusUser' && key !== 'statusDate') {
          json[key] = res[key];
        }
      });
      exportArr.push(json);
    });

    return exportArr;
  }

  private initResultsTableDatasource(): void {
    this.resultsTableDatasource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'evolutionNumber',
          translateKey: this.getTranslateKey('evolutionNumber'),
          width: '11%',
          alignment: ColumnAlignment.LEFT
        },
        {
          field: 'evolutionRevisionNumber',
          translateKey: this.getTranslateKey('evolutionRevisionNumber'),
          width: '11%',
          alignment: ColumnAlignment.LEFT
        },
        {
          field: 'evolutionSummary',
          translateKey: this.getTranslateKey('evolutionSummary'),
          width: '23%',
          alignment: ColumnAlignment.LEFT
        },
        {
          field: 'statusState',
          translateKey: this.getTranslateKey('statusState'),
          width: '11%',
          alignment: ColumnAlignment.LEFT
        },
        {
          field: 'evolutionType',
          translateKey: this.getTranslateKey('evolutionType'),
          width: '11%',
          alignment: ColumnAlignment.LEFT
        },
        {
          field: 'evolutionCompliance',
          translateKey: this.getTranslateKey('evolutionCompliance'),
          width: '11%',
          alignment: ColumnAlignment.LEFT
        },
        {
          field: 'evolutionLevel',
          translateKey: this.getTranslateKey('evolutionLevel'),
          width: '11%',
          alignment: ColumnAlignment.LEFT
        },
        {
          field: 'tracked',
          translateKey: this.getTranslateKey('tracked'),
          width: '11%',
          alignment: ColumnAlignment.CENTER
        }
      ],
      data: []
    });
  }
}
