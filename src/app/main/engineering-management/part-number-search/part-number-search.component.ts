import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { finalize } from 'rxjs/operators';

import { TableDataSource } from '../../../shared/components/table/table-data-source';
import { AWPropertiesConstants } from '../../../shared/constants/aw-properties-constants';
import { BidoFunctionTypeConstants } from '../../../shared/constants/bido-function-type-constants';
import { GenericPropertyConstants } from '../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { ExportService } from '../../../shared/services/export.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { SessionService } from '../../../shared/services/session.service';
import { TabService } from '../../../shared/services/tab.service';
import { FindFamilyVariantInput } from '../../../shared/types/api-input-types/product-structure-management/find-family-variant-input.interface';
import { BirePnDTOId } from '../../../shared/types/api-types/bire-pn-dto-id.interface';
import { BirePnDTO } from '../../../shared/types/api-types/bire-pn-dto.interface';
import { FamilyVariantDTO } from '../../../shared/types/api-types/family-variant-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { LabelValueUtils } from '../../../shared/utils/label-value-utils';

import { PartNumberSearchService } from './part-number-search.service';

interface SearchResultsExport {
  pnCode?: string;
  articleDesignation?: string;
  manufacturerOtanCode?: string;
  otanPnReference?: string;
  quantityUnit?: string;
  statusState?: string;
}

@Component({
  selector: 'aw-part-number-search',
  templateUrl: './part-number-search.component.html'
})
export class PartNumberSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  private static readonly TESTABLE: number = 14;
  private static readonly MINOR: number = 15;
  private static readonly SLAVE: number = 16;
  private static readonly FOLLOWED: number = 17;

  public exportMethods: MenuItem[];
  public selectedParts: BirePnDTO[];

  public partNumberTableDataSource: TableDataSource<BirePnDTO>;
  public searchObject: BirePnDTO;
  public familyVariantMap: Map<LabelValue<string>, FamilyVariantDTO>;
  public pnTypes: LabelValue<string>[];
  public itemFamilyCodeList: LabelValue<string>[];
  public propertyStatus: LabelValue<string>[];
  public statusDictionary: { [value: string]: string };
  public testable: boolean;
  public minor: boolean;
  public slave: boolean;
  public followed: boolean;

  public familyVariant: string | undefined;
  public pnType: string;
  public chapter: string | undefined;
  public section: string | undefined;
  public subject: string | undefined;
  public sheet: string | undefined;
  public mark: string | undefined;
  public itemFamilyCode: string | undefined;
  public isSerialized: boolean;
  public attributeMap: Object;
  public attributesMap: Map<number, boolean>;
  public statusState: string;
  public propertyVariant: LabelValue<string>[];
  private readonly resultsTableExportName: string;
  public isLoading: boolean;
  public showAdvancedCriteria: boolean;

  public component: typeof PartNumberSearchComponent;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly partNumberSearchService: PartNumberSearchService,
    private readonly confirmationService: ConfirmationService,
    private readonly translateService: TranslateService,
    private readonly exportService: ExportService,
    private readonly propertiesService: PropertiesService,
    public sessionService: SessionService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.searchObject = {};
    this.exportMethods = [];
    this.resultsTableExportName = 'part-number-list';

    this.component = PartNumberSearchComponent;
    this.familyVariantMap = new Map<LabelValue<string>, FamilyVariantDTO>();
    this.propertyVariant = [];
    this.familyVariant = undefined;
    this.searchObject.pnType = AWPropertiesConstants.PN_TYPE_PART_KEY;
    this.isLoading = false;
    this.showAdvancedCriteria = false;
    this.initMhiaelData();
    this.initPartNumberTableDataSource();
    this.translateService.onLangChange.subscribe((_: LangChangeEvent) => {
      this.loadDropDownLists();
    });
  }

  public getComponentName(): string {
    return 'PartNumberSearchComponent';
  }

  private setAttributeDTO() {
    this.attributesMap = new Map<number, boolean>();
    if (this.testable) {
      this.attributesMap.set(PartNumberSearchComponent.TESTABLE, this.testable);
    }
    if (this.minor) {
      this.attributesMap.set(PartNumberSearchComponent.MINOR, this.minor);
    }
    if (this.slave) {
      this.attributesMap.set(PartNumberSearchComponent.SLAVE, this.slave);
    }
    if (this.followed) {
      this.attributesMap.set(PartNumberSearchComponent.FOLLOWED, this.followed);
    }

    const attributesConvMap = {};

    if (this.attributesMap.size !== 0) {
      this.attributesMap.forEach((value: boolean, key: number) => {
        attributesConvMap[key] = value;
      });
      if (Object.keys(attributesConvMap).length > 0) {
        this.attributeMap = { ...attributesConvMap };
      }
    }
  }

  public ngOnInit() {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);

    this.loadDropDownLists();
  }

  public initPartNumberTableDataSource(): void {
    this.partNumberTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'pnCode', translateKey: this.getTranslateKey('pnCode') },
        { field: 'articleDesignation', translateKey: this.getTranslateKey('articleDesignation') },
        { field: 'manufacturerOtanCode', translateKey: this.getTranslateKey('manufacturerOtanCode') },
        { field: 'otanPnReference', translateKey: this.getTranslateKey('otanPnReference') },
        { field: 'pnType', translateKey: this.getTranslateKey('type') },
        { field: 'quantityUnit', translateKey: this.getTranslateKey('quantityUnit') },
        { field: 'statusState', translateKey: this.getTranslateKey('statusState') }
      ],
      data: []
    });
  }

  public deleteSelectedPN(): void {
    const partialMessageKey =
      this.partNumberTableDataSource.dataSelection.length > 1 ? 'confirmDeleteSelectedPNs' : 'confirmDeleteSelectedPN';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        const partsId: BirePnDTOId[] = [];
        this.partNumberTableDataSource.dataSelection.forEach((part) => {
          if (part && part.pnCode) {
            const partId: BirePnDTOId = {
              pnCode: part.pnCode
            };
            partsId.push(partId);
          }
        });
        this.partNumberSearchService.removeBirePn(partsId).subscribe(
          (result) => {
            if (result) {
              this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeletePN'));
              this.partNumberTableDataSource.deleteDataSelection();
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('errorOnDeletePN'));
            }
          },
          () => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnDeletePN'));
          }
        );
      }
    });
  }

  public openNewPN(): void {
    this.openPN(undefined, ComponentOpenMode.Create);
  }

  public openPartNumberScreen(pnCode: string): void {
    this.openPN(pnCode, ComponentOpenMode.Read);
  }

  public openSelectedPN(): void {
    this.partNumberTableDataSource.dataSelection.forEach((pn) => {
      if (pn && pn.pnCode) {
        this.openPN(pn.pnCode, ComponentOpenMode.Read);
      }
    });
  }

  public resetResultsTable(table: Table): void {
    table.reset();
    table.filters = {};
  }

  public resetSearchCriteria(): void {
    this.searchObject = {};
    this.searchObject.pnType = AWPropertiesConstants.PN_TYPE_PART_KEY;
    this.familyVariant = undefined;
    this.chapter = undefined;
    this.subject = undefined;
    this.sheet = undefined;
    this.mark = undefined;
    this.section = undefined;
    this.itemFamilyCode = undefined;
    this.initMhiaelData();
  }

  public search(): void {
    if (this.sessionService.isSpecificMHIAEL) {
      this.setAttributeDTO();
    }
    let familyCode;
    let structureType;
    let variantCode;
    this.isLoading = true;
    if (this.familyVariant) {
      let familyVariantDTO: FamilyVariantDTO = {};
      this.familyVariantMap.forEach((variantElement) => {
        if (!!variantElement.labelValueDTO && variantElement.labelValueDTO.value === this.familyVariant) {
          familyVariantDTO = variantElement;
        }
      });
      familyCode = familyVariantDTO.familyCode;
      structureType = familyVariantDTO.structureType;
      variantCode = familyVariantDTO.variantCode;
    }
    this.partNumberSearchService
      .findBirePnsBySearchCriteria(
        this.searchObject,
        familyCode,
        structureType,
        variantCode,
        this.chapter,
        this.section,
        this.subject,
        this.sheet,
        this.mark,
        this.pnType,
        this.itemFamilyCode,
        this.isSerialized,
        this.attributeMap
      )
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        (results) => {
          if (results && results.list) {
            results.list.forEach((birePn) => {
              LabelValueUtils.stringValueToLabel(birePn, 'pnType', this.pnTypes);
            });
            this.partNumberTableDataSource.setData(results.list);
          }
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetResults'));
        }
      );
  }

  private loadDropDownLists(): void {
    const familyVariantInput: FindFamilyVariantInput = {
      useCase: BidoFunctionTypeConstants.UC_MCH_BOM,
      module: BidoFunctionTypeConstants.MODULE_FAMILY
    };
    this.statusDictionary = {};
    this.partNumberSearchService.getFamilyVariant(familyVariantInput).subscribe(
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

    this.propertiesService.getValue(GenericPropertyConstants.ITEM_FAMILY_CODE_MAP).subscribe(
      (results) => {
        this.itemFamilyCodeList = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetFamilyVariant'));
      }
    );

    this.propertiesService.getValue(GenericPropertyConstants.ENGINEERING_PN_TYPES_MAP).subscribe(
      (results) => {
        this.pnTypes = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetFamilyVariant'));
      }
    );

    this.propertiesService.getValue(GenericPropertyConstants.FUNC_OBJECT_STATUS_MAP).subscribe(
      (results) => {
        this.propertyStatus = results;
        this.fillStatusDictionary(results);
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetFamilyVariant'));
      }
    );

    this.propertiesService.getValue(GenericPropertyConstants.OBJECT_STATUS_MAP).subscribe(
      (results) => {
        this.fillStatusDictionary(results);
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetFamilyVariant'));
      }
    );
  }

  private fillStatusDictionary(references: LabelValue<string>[]) {
    references.forEach((lv) => (this.statusDictionary[lv.value] = lv.label));
  }

  private openPN(objectId: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.PartNumberFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'PartNumberFormComponent',
      objectId,
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
    this.partNumberTableDataSource.dataSelection = [];
  }

  public save() {
    // TODO
  }

  public exportTable(): void {
    if (!!this.componentData) {
      const exportList: SearchResultsExport[] = this.partNumberTableDataSource.dataSrc.map((row) => ({
        pnCode: row.pnCode,
        articleDesignation: row.articleDesignation,
        manufacturerOtanCode: row.manufacturerOtanCode,
        otanPnReference: row.otanPnReference,
        quantityUnit: row.quantityUnit,
        statusState: row.statusState ? this.statusDictionary[row.statusState] : ''
      }));
      this.exportService.toExcel(exportList, this.resultsTableExportName, this.componentData.componentId);
    }
  }

  private initMhiaelData() {
    this.attributeMap = {};
    this.testable = false;
    this.minor = false;
    this.slave = false;
    this.followed = false;
    this.isSerialized = false;
  }
}
