import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { TableDataSource } from '../../../../shared/components/table/table-data-source';
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
import { BirePnDTOId } from '../../../../shared/types/api-types/bire-pn-dto-id.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';

import { MaterialSearchService } from './material-search.service';

interface MaterialRowExport {
  pnCode?: string;
  pnType?: string;
  articleDesignation?: string;
  traceability?: string;
  statusState?: string;
}

interface MaterialTableInterface extends BirePnDTO {
  pnTypeText?: string;
}

@Component({
  selector: 'aw-material-search',
  templateUrl: './material-search.component.html'
})
export class MaterialSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  private static readonly CUSTOMER_TABLE_EXPORT_NAME: string = 'material-list';

  public types: SelectItem[];
  public materialTable: MaterialRowExport[];
  public materialTableCols: TableColumn[];
  public traceability: SelectItem[];
  public searchObject: BirePnDTO;
  public selectedMaterials: MaterialTableInterface[];
  public propertyStatus: LabelValue<string>[];
  public statusDictionary: { [value: string]: string };

  public isLoading: boolean;
  public showAdvancedCriteria: boolean;
  public materialTableDataSource: TableDataSource<MaterialTableInterface>;

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
    private readonly materialSearchService: MaterialSearchService,
    private readonly confirmationService: ConfirmationService,
    private readonly exportService: ExportService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.types = [];
    this.traceability = [];
    this.materialTable = [];
    this.selectedMaterials = [];
    this.propertyStatus = [];
    this.statusDictionary = {};

    this.isLoading = false;
    this.showAdvancedCriteria = false;

    this.resetSearchCriteria();

    this.loadTraceability();
    this.loadTypes();
    this.loadStatus();
    this.initMaterialTableDataSource();
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_MATERIAL_SEARCH;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);
  }

  public deleteMaterials(): void {
    const confirmMessageKey =
      this.materialTableDataSource.dataSelection.length > 1
        ? 'confirmDeleteSelectedMaterials'
        : 'confirmDeleteSelectedMaterial';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(confirmMessageKey),
      accept: () => {
        const materialsId: BirePnDTOId[] = [];
        this.materialTableDataSource.dataSelection.forEach((materials) => {
          if (!!materials && !!materials.pnCode) {
            const pnCodeId: BirePnDTOId = {
              pnCode: materials.pnCode
            };
            materialsId.push(pnCodeId);
          }
        });
        this.materialSearchService.removeBireData(materialsId).subscribe(
          () => {
            this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteMaterial'));
            this.materialTableDataSource.deleteDataSelection();
          },
          (error) => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnDeleteMaterial'));
          }
        );
      }
    });
  }

  public exportTable(): void {
    const materialExportData: MaterialRowExport[] = this.materialTableDataSource.dataSrc.map((material) => {
      const materialRowExport: MaterialRowExport = {
        pnCode: material.pnCode,
        pnType: material.pnType,
        articleDesignation: material.articleDesignation,
        traceability: material.traceability,
        statusState: material.statusState ? this.statusDictionary[material.statusState] : ''
      };

      return materialRowExport;
    });
    this.exportService.toExcel(
      materialExportData,
      MaterialSearchComponent.CUSTOMER_TABLE_EXPORT_NAME,
      this.componentData.componentId
    );
  }

  public openNewMaterial(): void {
    this.openMaterial(undefined, ComponentOpenMode.Create);
  }

  public openSelectedMaterials(): void {
    this.materialTableDataSource.dataSelection.forEach((materials) => {
      if (!!materials) {
        if (StringUtils.isNullOrEmpty(materials.pnCode)) {
          this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingCode'));
        } else {
          this.openMaterial(materials, ComponentOpenMode.Read);
        }
      }
    });
  }

  public openMaterialFromLink(material: MaterialTableInterface): void {
    this.openMaterial(material, ComponentOpenMode.Read);
  }

  public resetSearchCriteria(): void {
    this.searchObject = {};
  }

  public search(): void {
    this.isLoading = true;
    super.scrollToAnchor(this.resultsContainerAnchor);
    const searchData: BirePnDTO = {
      pnCode: this.searchObject.pnCode ? this.searchObject.pnCode.trim() : '',
      articleDesignation: this.searchObject.articleDesignation ? this.searchObject.articleDesignation.trim() : '',
      traceability: this.searchObject.traceability,
      pnType: this.searchObject.pnType,
      statusState: this.searchObject.statusState,
      otanPnReference: this.searchObject.otanPnReference
    };

    this.materialSearchService.findProductsBySearchCriteria(searchData).subscribe(
      (result) => {
        if (result && result.list) {
          const resultsToAdd: MaterialTableInterface[] = [];
          result.list.forEach((element) => {
            const birePnObject: MaterialTableInterface = { ...element };
            birePnObject.traceability = this.getTraceabilityLabelByValue(birePnObject.traceability || '');
            birePnObject.pnTypeText = this.getPnType(element.pnType || '');
            resultsToAdd.push(birePnObject);
          });
          this.materialTableDataSource.setData(resultsToAdd);
          this.isLoading = false;
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetResults'));
      }
    );
  }

  private getPnType(pnTypeValue: string): string {
    let pnType = '';
    this.types.forEach((element: LabelValue<string>) => {
      if (pnTypeValue === element.value) {
        pnType = element.label;
      }
    });

    return pnType;
  }

  private getTraceabilityLabelByValue(value: string): string {
    const label = this.traceability ? this.traceability.filter((t) => t.value === value).map((t) => t.label)[0] : '';

    return label ? label : '';
  }

  public initMaterialTableDataSource(): void {
    this.materialTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'pnCode', translateKey: this.getTranslateKey('pnCode') },
        { field: 'articleDesignation', translateKey: this.getTranslateKey('articleDesignation') },
        { field: 'pnType', translateKey: this.getTranslateKey('pnType') },
        { field: 'traceability', translateKey: this.getTranslateKey('traceability') },
        { field: 'statusState', translateKey: this.getTranslateKey('statusState') }
      ],
      data: []
    });
  }

  private loadTraceability(): void {
    this.propertiesService.getValue('getPnTraceabilityMap').subscribe(
      (results) => {
        this.traceability = !!results ? SelectItemUtils.fromLabelValues(results) : [];
      },
      () => {
        this.messageService.showErrorMessage('errorOnLoadingTraceability');
      }
    );
  }

  private loadTypes(): void {
    this.propertiesService.getValue('getPnTypeMap').subscribe((results) => {
      this.types = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });
  }

  private loadStatus(): void {
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

  public openMaterial(objectId: MaterialTableInterface | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_MATERIAL_FORM,
      openMode
    };
    if (!!objectId) {
      const materialFormId: BirePnDTO = {
        pnCode: objectId.pnCode,
        pnType: objectId.pnType
      };
      data.objectId = this.serializationService.serialize(materialFormId);
    }
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
    this.materialTableDataSource.dataSelection = [];
  }
}
