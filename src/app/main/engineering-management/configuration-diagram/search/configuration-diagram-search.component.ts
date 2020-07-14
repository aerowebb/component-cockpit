import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ColumnAlignment, TableDataSource } from '../../../../shared/components/table/table-data-source';
import { BidoFunctionTypeConstants } from '../../../../shared/constants/bido-function-type-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { FindAllFamilyByModuleAndUseCaseInput } from '../../../../shared/types/api-input-types/product-structure-management/find-all-family-by-module-and-use-case-input.interface';
import { FindBireItemsBySearchCriteriaInput } from '../../../../shared/types/api-input-types/product-structure-management/find-bire-items-by-search-criteria-input.interface';
import { BireFamilyDTO } from '../../../../shared/types/api-types/bire-family-dto.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { BireVariantVersionDTO } from '../../../../shared/types/api-types/bire-variant-version-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';

import { ConfigurationDiagramSearchService } from './configuration-diagram-search.service';

interface ItemRow {
  familyVariant: string;
  name: string;
  chapter: string;
  section: string;
  subject: string;
  sheet: string;
  marks: string;
  itemFamily: string;
  functionCode: string;
  itemNumber: string;
  _obj: BireItemDTO;
}

@Component({
  selector: 'aw-configuration-diagram-search',
  templateUrl: './configuration-diagram-search.component.html'
})
export class ConfigurationDiagramSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public searchApplicabilityDate: Date | undefined;
  public searchFamilyList: SelectItem[];
  public searchSelectedFamily: BireFamilyDTO | undefined;
  public searchChapter: string | undefined;
  public searchMarks: string | undefined;
  public searchPn: string | undefined;
  public searchSection: string | undefined;
  public searchSelectedVariant: BireVariantVersionDTO | undefined;
  public searchSheet: string | undefined;
  public searchSubject: string | undefined;
  public searchVariantList: SelectItem[];
  public tableDataSource: TableDataSource<ItemRow>;
  public moreResults: boolean;
  public tableLoading: boolean;

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
    private readonly configurationDiagramSearchService: ConfigurationDiagramSearchService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.initTableDataSource();

    this.init();

    this.loadFamilyList();
  }

  public getComponentName(): string {
    return ComponentConstants.ENG_CONFIGURATION_DIAGRAM_SEARCH;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);
  }

  public onSelectFamily(): void {
    this.searchSelectedVariant = undefined;
    this.clearOptionalSearchCriteria();

    if (this.searchSelectedFamily) {
      this.configurationDiagramSearchService
        .findAllBireVariantVersionByFamilyCode(this.searchSelectedFamily.familyCode as string)
        .subscribe((results) => {
          this.searchVariantList = ListUtils.orEmpty(results)
            .filter((elt) => ObjectUtils.isDefined(elt))
            .map((elt) => {
              const label = ObjectUtils.isDefined(elt.variantName)
                ? `${elt.structureType}-${elt.variantCode}-${elt.variantName}`
                : `${elt.structureType}-${elt.variantCode}`;

              return {
                label,
                value: elt
              };
            });
        });
    }
  }

  public onSelectVariant(): void {
    this.clearOptionalSearchCriteria();
  }

  public openTableSelectedList(): void {
    this.tableDataSource.dataSelection.forEach((row) => {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.ENG_CONFIGURATION_DIAGRAM_FORM,
        objectId: this.serializationService.serialize(row._obj),
        openMode: ComponentOpenMode.Write
      };
      const labelKey = 'transaction.' + data.componentId;

      this.tabService.open(this.tabService.create(data, labelKey, true));
    });
  }

  public resetSearchCriteria(): void {
    this.searchSelectedFamily = undefined;
    this.searchSelectedVariant = undefined;

    this.clearOptionalSearchCriteria();
  }

  public search(): void {
    this.tableLoading = true;
    this.clearTable();
    super.scrollToAnchor(this.resultsContainerAnchor);

    const criteria: FindBireItemsBySearchCriteriaInput = {
      bireItemDTOCriteria: {
        familyCode: (this.searchSelectedFamily as BireFamilyDTO).familyCode,
        variantCode: (this.searchSelectedVariant as BireVariantVersionDTO).variantCode,
        structureType: (this.searchSelectedVariant as BireVariantVersionDTO).structureType,
        chapter: this.searchChapter,
        section: this.searchSection,
        sheet: this.searchSheet,
        subject: this.searchSubject,
        marks: this.searchMarks
      },
      pnCode: this.searchPn
    };
    this.configurationDiagramSearchService.findAllBireItemBySearchCriteria(criteria).subscribe((result) => {
      this.tableLoading = false;

      this.setTable(result);

      super.differ(() => {
        super.scrollToAnchor(this.resultsContainerAnchor);
      });
    });
  }

  private clearOptionalSearchCriteria(): void {
    this.searchChapter = undefined;
    this.searchMarks = undefined;
    this.searchPn = undefined;
    this.searchSection = undefined;
    this.searchSheet = undefined;
    this.searchSubject = undefined;
  }

  private clearTable(): void {
    this.tableDataSource.setData([]);
  }

  private init(): void {
    this.searchApplicabilityDate = undefined;
    this.searchFamilyList = [];
    this.searchSelectedFamily = undefined;
    this.searchChapter = undefined;
    this.searchMarks = undefined;
    this.searchPn = undefined;
    this.searchSection = undefined;
    this.searchSelectedVariant = undefined;
    this.searchSheet = undefined;
    this.searchSubject = undefined;
    this.searchVariantList = [];
    this.tableLoading = false;

    this.clearTable();
  }

  private loadFamilyList(): void {
    const input: FindAllFamilyByModuleAndUseCaseInput = {
      module: BidoFunctionTypeConstants.MODULE_FAMILY,
      useCase: BidoFunctionTypeConstants.UC_MCH_BOM
    };
    this.configurationDiagramSearchService.findAllFamilyByModuleAndUseCase(input).subscribe((results) => {
      this.searchFamilyList = ListUtils.orEmpty(results)
        .filter((elt) => elt && elt.familyCode)
        .map((elt) => {
          const label = ObjectUtils.isDefined(elt.familyName)
            ? `${elt.familyCode}-${elt.familyName}`
            : `${elt.familyCode}`;

          return {
            label,
            value: elt
          };
        });
    });
  }

  private setTable(data: SearchResultsDTO<BireItemDTO>): void {
    this.tableDataSource.setData(data.list.map((item) => {
      const itemRow: ItemRow = {
        familyVariant: StringUtils.orEmpty(item.familyCode),
        name: StringUtils.orEmpty(item.name),
        chapter: StringUtils.orEmpty(item.chapter),
        section: StringUtils.orEmpty(item.section),
        subject: StringUtils.orEmpty(item.subject),
        sheet: StringUtils.orEmpty(item.sheet),
        marks: StringUtils.orEmpty(item.marks),
        itemFamily: StringUtils.orEmpty(item.itemFamilyCode),
        functionCode: StringUtils.orEmpty(item.functionCode),
        itemNumber: StringUtils.orEmpty(item.itemNumber),
        _obj: item
      };

      return itemRow;
    }));
    this.moreResults = data.moreResults;
  }

  private initTableDataSource(): void {
    this.tableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'familyVariant',
          translateKey: this.getTranslateKey('familyVariant'),
          alignment: ColumnAlignment.LEFT,
          width: '12.5%'
        },
        { field: 'name', translateKey: this.getTranslateKey('name'), alignment: ColumnAlignment.LEFT, width: '22.5%' },
        {
          field: 'chapter',
          translateKey: this.getTranslateKey('chapter'),
          alignment: ColumnAlignment.LEFT,
          width: '6%'
        },
        {
          field: 'section',
          translateKey: this.getTranslateKey('section'),
          alignment: ColumnAlignment.LEFT,
          width: '6%'
        },
        {
          field: 'subject',
          translateKey: this.getTranslateKey('subject'),
          alignment: ColumnAlignment.LEFT,
          width: '6%'
        },
        { field: 'sheet', translateKey: this.getTranslateKey('sheet'), alignment: ColumnAlignment.LEFT, width: '6%' },
        { field: 'marks', translateKey: this.getTranslateKey('marks'), alignment: ColumnAlignment.LEFT, width: '6%' },
        {
          field: 'itemFamily',
          translateKey: this.getTranslateKey('itemFamily'),
          alignment: ColumnAlignment.LEFT,
          width: '15%'
        },
        {
          field: 'functionCode',
          translateKey: this.getTranslateKey('functionCode'),
          alignment: ColumnAlignment.LEFT,
          width: '10%'
        },
        {
          field: 'itemNumber',
          translateKey: this.getTranslateKey('itemNumber'),
          alignment: ColumnAlignment.LEFT,
          width: '10%'
        }
      ],
      data: []
    });

  }
}
