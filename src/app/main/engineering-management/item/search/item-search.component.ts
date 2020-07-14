import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { ColumnAlignment, TableDataSource } from '../../../../shared/components/table/table-data-source';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { ExportService } from '../../../../shared/services/export.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { FindBireItemsBySearchCriteriaInput } from '../../../../shared/types/api-input-types/product-structure-management/find-bire-items-by-search-criteria-input.interface';
import { BireItemCustomDTO } from '../../../../shared/types/api-output-types/engineering-data-exchange/bire-item-custom-dto.interface';
import { BireItemDTOId } from '../../../../shared/types/api-types/bire-item-dto-id.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { FindBireVariantVersionsByFamilyFunctionAlternativeDTO } from '../../../../shared/types/api-types/find-bire-variant-versions-by-family-function-alternative-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { LabelValueUtils } from '../../../../shared/utils/label-value-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';

import { ItemSearchService } from './item-search.service';

@Component({
  selector: 'aw-item-search',
  templateUrl: './item-search.component.html'
})
export class ItemSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  private static readonly TABLE_EXPORT_NAME: string = 'item-list';
  public readonly componentName: string;
  public searchCriteria: BireItemDTO;
  public itemTableDataSource: TableDataSource<BireItemDTO>;
  public isTableLoading: boolean;
  public showAdvancedCriteria: boolean;
  public itemFamily: LabelValue<string>[];
  public flocType: LabelValue<string>[];
  public itemType: LabelValue<string>[];
  public familyVariant: LabelValue<string>[];
  public familyVariantValue: FindBireVariantVersionsByFamilyFunctionAlternativeDTO[];
  public isMelSelected: boolean;

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
    private readonly exportService: ExportService,
    private readonly itemSearchService: ItemSearchService,
    private readonly confirmationService: ConfirmationService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.componentName = ComponentConstants.ENG_ITEM_SEARCH;

    this.isTableLoading = false;
    this.showAdvancedCriteria = false;
    this.itemFamily = [];
    this.familyVariant = [];
    this.flocType = [];
    this.itemType = [];
    this.familyVariantValue = [];
    this.loadDropdowns();
    this.resetSearchCriteria();
    this.initTableCols();
  }

  public getComponentName(): string {
    return ComponentConstants.ENG_ITEM_SEARCH;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);
  }

  /**
   * On action delete items
   */
  public deleteItems(): void {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey('confirmItemDeletion'),
      accept: () => {
        const bireItemDTOIdArr: BireItemDTOId[] = [];
        const selectedFamilyVariant = this.getSelectedFamilyVariant();
        this.itemTableDataSource.dataSelection.forEach((res) => {
          if (!!selectedFamilyVariant && !!selectedFamilyVariant.bireVariantVersionDTO) {
            const bireItemDTOId: BireItemDTOId = {
              familyCode: selectedFamilyVariant.bireVariantVersionDTO.familyCode,
              variantCode: selectedFamilyVariant.bireVariantVersionDTO.variantCode,
              structureType: selectedFamilyVariant.bireVariantVersionDTO.structureType as string,
              chapter: res.chapter as string,
              section: res.section as string,
              sheet: res.sheet as string,
              subject: res.subject as string,
              marks: res.marks as string
            };
            bireItemDTOIdArr.push(bireItemDTOId);
          }
        });

        this.itemSearchService.removeBireItem(bireItemDTOIdArr).subscribe((result) => {
          this.search();
        });
      }
    });
  }

  /**
   * Export table functionality
   */
  public exportTable(): void {
    const itemExportData: BireItemCustomDTO[] = this.itemTableDataSource.dataSrc.map((item) => {
      const itemRowExport: BireItemCustomDTO = {
        chapter: item.chapter ? item.chapter : '',
        section: item.section ? item.section : '',
        subject: item.subject ? item.subject : '',
        sheet: item.sheet ? item.sheet : '',
        marks: item.marks ? item.marks : '',
        name: item.name ? item.name : '',
        familyVariantCode: `${item.familyCode}-${item.structureType}-${item.variantCode}`,
        itemFamilyCode: item.itemFamilyCode ? item.itemFamilyCode : '',
        functionCode: item.functionCode ? item.functionCode : '',
        itemNumber: item.itemNumber ? item.itemNumber : ''
      };

      return itemRowExport;
    });
    this.exportService.toExcel(itemExportData, ItemSearchComponent.TABLE_EXPORT_NAME, this.componentData.componentId);
  }

  /**
   * Open item screen form
   */
  public openNewItem(): void {
    this.openItem(undefined, ComponentOpenMode.Create);
  }

  public openSelectedItem(): void {
    this.itemTableDataSource.dataSelection.forEach((item) => {
      if (!!item) {
        if (StringUtils.isNullOrEmpty(item.familyCode)) {
          this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingCode'));
        } else {
          this.openItem(item, ComponentOpenMode.Read);
        }
      }
    });
  }

  private openItem(objectId: BireItemDTO | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_ITEM_FORM,
      openMode
    };
    if (!!objectId) {
      const itemFormId: BireItemDTO = {
        familyCode: objectId.familyCode,
        chapter: objectId.chapter,
        section: objectId.section,
        sheet: objectId.sheet,
        marks: objectId.marks,
        subject: objectId.subject,
        structureType: objectId.structureType,
        variantCode: objectId.variantCode
      };
      data.objectId = this.serializationService.serialize(itemFormId);
    }
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  /**
   * Reset search criteria
   */
  public resetSearchCriteria(): void {
    this.searchCriteria = {};
    this.isMelSelected = false;
  }

  /**
   * Action on search
   */
  public search(): void {
    const selectedFamilyVariant = this.getSelectedFamilyVariant();

    if (!selectedFamilyVariant) {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');

      return;
    }

    this.isTableLoading = true;
    super.scrollToAnchor(this.resultsContainerAnchor);
    const bire: BireItemDTO = {
      familyCode: selectedFamilyVariant ? selectedFamilyVariant.bireVariantVersionDTO.familyCode : undefined,
      variantCode: selectedFamilyVariant ? selectedFamilyVariant.bireVariantVersionDTO.variantCode : undefined,
      structureType: selectedFamilyVariant ? selectedFamilyVariant.bireVariantVersionDTO.structureType : undefined,
      chapter: !!this.searchCriteria.chapter ? this.searchCriteria.chapter : undefined,
      section: !!this.searchCriteria.section ? this.searchCriteria.section : undefined,
      sheet: !!this.searchCriteria.sheet ? this.searchCriteria.sheet : undefined,
      subject: !!this.searchCriteria.subject ? this.searchCriteria.subject : undefined,
      marks: !!this.searchCriteria.marks ? this.searchCriteria.marks : undefined,
      ippeNodeType: !!this.searchCriteria.ippeNodeType ? this.searchCriteria.ippeNodeType : undefined,
      itemType: !!this.searchCriteria.itemType ? this.searchCriteria.itemType : undefined,
      itemFamilyCode: !!this.searchCriteria.itemFamilyCode ? this.searchCriteria.itemFamilyCode : undefined,
      attachingPart: !!this.searchCriteria.attachingPart ? this.searchCriteria.attachingPart : undefined,
      name: !!this.searchCriteria.name ? this.searchCriteria.name : undefined,
      itemNumber: !!this.searchCriteria.itemNumber ? this.searchCriteria.itemNumber : undefined,
      functionCode: !!this.searchCriteria.functionCode ? this.searchCriteria.functionCode : undefined
    };

    const criteria: FindBireItemsBySearchCriteriaInput = {
      bireItemDTOCriteria: bire
    };

    if (this.isMelSelected) {
      // tslint:disable-next-line:no-any
      const mapAttributeObj: any = {
        6: this.isMelSelected
      };
      criteria.attribute = mapAttributeObj;
    }

    this.itemSearchService.findBireItemsBySearchCriteria(criteria).subscribe((result) => {
      this.isTableLoading = false;
      if (result) {
        result.list.forEach((element) => {
          LabelValueUtils.stringValueToLabel(element, 'familyVariantCode', this.familyVariant);
          LabelValueUtils.stringValueToLabel(element, 'itemFamilyCode', this.itemFamily);
        });
      }
      this.setCustomerTable(result);
    });
  }

  /**
   * init table columns
   */
  private initTableCols(): void {
    this.itemTableDataSource = new TableDataSource({
      columns: [
        { field: 'chapter', translateKey: this.getTranslateKey('chapter'), width: '6%' },
        { field: 'section', translateKey: this.getTranslateKey('section'), width: '6%' },
        { field: 'subject', translateKey: this.getTranslateKey('subject'), width: '6%' },
        { field: 'sheet', translateKey: this.getTranslateKey('sheet'), width: '6%' },
        { field: 'marks', translateKey: this.getTranslateKey('marks'), width: '6%' },
        { field: 'name', translateKey: this.getTranslateKey('name'), width: '30%' },
        { field: 'familyVariantCode', translateKey: this.getTranslateKey('familyVariantCode'), width: '10%' },
        { field: 'itemFamilyCode', translateKey: this.getTranslateKey('itemFamilyCode'), width: '10%' },
        { field: 'functionCode', translateKey: this.getTranslateKey('functionCode'), width: '10%' },
        {
          field: 'itemNumber',
          translateKey: this.getTranslateKey('itemNumber'),
          width: '10%',
          alignment: ColumnAlignment.RIGHT
        }
      ],
      data: []
    });
  }

  private setCustomerTable(results: SearchResultsDTO<BireItemDTO>): void {
    this.itemTableDataSource.setData([]);
    if (!!results) {
      this.itemTableDataSource.addData(results.list);
    }
  }

  /**
   * Init load dropdowns
   */
  private loadDropdowns(): void {
    // To bind dropdown family variant
    this.itemSearchService.findBireVariantVersionsByFamilyFunctionItemAlternative().subscribe((results) => {
      const list: LabelValue<string>[] = [];
      results.forEach((element) => {
        list.push(element.labelValue);
      });
      this.familyVariant = list || [];
      this.familyVariantValue = results;
      if (!!list && list.length > 0) {
        this.searchCriteria.familyCode = list[0].value;
      }
    });
    this.itemSearchService.getItemFamily().subscribe((results) => {
      this.itemFamily = results;
    });
    this.itemSearchService.getFlocType().subscribe((results) => {
      this.flocType = results;
    });
    this.itemSearchService.getItemType().subscribe((results) => {
      this.itemType = results;
    });
  }

  private getSelectedFamilyVariant(): FindBireVariantVersionsByFamilyFunctionAlternativeDTO | undefined {
    return this.familyVariantValue.find((elt) => {
      return elt.labelValue.value === this.searchCriteria.familyCode;
    });
  }
}
