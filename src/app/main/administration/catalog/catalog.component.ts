import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

import { ColumnAlignment, TableDataSource } from '../../../shared/components/table/table-data-source';
import { AccessibleFunctionsConstants } from '../../../shared/constants/accessible-functions-constants';
import { AWPropertiesConstants } from '../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { SessionService } from '../../../shared/services/session.service';
import { TabService } from '../../../shared/services/tab.service';
import { CatalogPropertiesTableDTO } from '../../../shared/types/api-output-types/administration-catalog/catalog-properties-table-dto.interface';
import { BidoPropertiesDTO } from '../../../shared/types/api-types/bido-properties-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';

import { CatalogService } from './catalog.service';
import { CatalogConstantsService } from './constants/catalog-name-constants';
import { CatalogNameInterface } from './types/catalog-name-interface';

interface ValueInterface {
  value: string;
  isProperty: boolean;
}

interface CustomLabelValue {
  label: string;
  value: ValueInterface;
}

@Component({
  selector: 'aw-catalog',
  templateUrl: './catalog.component.html'
})
export class CatalogComponent extends PageComponent<PageComponentData> implements OnInit {
  private static readonly WAREHOUSE_AREA_TYPE: string = 'WAREHOUSE_AREA_TYPE';
  private static readonly WORKSHOP_AREA_TYPE: string = 'WORKSHOP_AREA_TYPE';

  @ViewChild('node', { read: ViewContainerRef })
  public node: ViewContainerRef;

  public showPropertyValuesTable: boolean;
  public showDynamicComponent: boolean;
  public showImportButton: boolean | undefined;
  public showCreateButton: boolean | undefined;

  // Property values table
  public propertyValuesTableDataSource: TableDataSource<CatalogPropertiesTableDTO>;
  public currentPropertyValue: CatalogPropertiesTableDTO | undefined;
  public currentPropertyValueIndex: number | undefined;

  // Property values popup
  public viewModePropertyValue: boolean;
  public isNewPropertyValue: boolean;
  public showPropertyValuePopup: boolean;

  public catalogArea: string;
  public catalogName: ValueInterface;

  public catalogAreaValues: LabelValue<string>[];
  public catalogNameValues: CustomLabelValue[];
  public accessibleCatalogName: string[];
  public catalogs: CatalogNameInterface[];

  public propertyCatalogIdNameMappingList: BidoPropertiesDTO[];

  public currentPropertyId: string | undefined;

  private customRefreshButton: (() => void) | undefined;
  private customSaveButton: (() => void) | undefined;
  private customCreateButton: (() => void) | undefined;
  private customImportButton: (() => void) | undefined;
  private customExportButton: (() => void) | undefined;
  public showSaveSpinner: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly catalogService: CatalogService,
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private readonly confirmationService: ConfirmationService,
    private readonly sessionService: SessionService,
    private readonly propertiesService: PropertiesService,
    private readonly catalogConstService: CatalogConstantsService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.showPropertyValuesTable = false;
    this.showDynamicComponent = false;

    this.showPropertyValuePopup = false;

    this.currentPropertyValue = undefined;
    this.currentPropertyValueIndex = undefined;

    this.catalogAreaValues = [];
    this.catalogNameValues = [];

    this.currentPropertyId = undefined;

    this.registerMainButtonObservables();

    this.resetMainButtons();
  }

  private resetComponentVisibility(): void {
    this.showPropertyValuesTable = false;
    this.showDynamicComponent = false;
    this.node.clear();
  }

  public getComponentName(): string {
    return ComponentConstants.ADM_CATALOG;
  }

  public ngOnInit() {
    super.ngOnInit();

    this.catalogService.getPropertyCatalogIdNameMapping().subscribe((results) => {
      this.propertyCatalogIdNameMappingList = results || [];
    });

    this.sessionService
      .getAccessibleFunctions([AccessibleFunctionsConstants.CATALOG_TRANSACTION])
      .subscribe((results: { [entryComponent: string]: string[] }) => {
        this.accessibleCatalogName =
          results.accessibleFunctionsPerEntryComponent[AccessibleFunctionsConstants.CATALOG_TRANSACTION];
        // Prepare visible area
        const accessibleArea: string[] = this.accessibleCatalogName.reduce<string[]>((accumulator, current) => {
          if (accumulator.indexOf(current) === -1) {
            accumulator.push(current);
          }

          return accumulator;
        }, []);

        this.catalogAreaValues = this.catalogConstService.fetchCatalogAreas().filter((value) => {
          const accessibleCatalogAreaValues: string[] = this.catalogConstService
            .fetchCatalogNames()
            .filter((catalogName) => {
              if (!!catalogName.accessRightName) {
                return accessibleArea.includes(catalogName.accessRightName);
              } else {
                return accessibleArea.includes(catalogName.catalogList.value);
              }
            })
            .reduce<string[]>((accumulator, current) => {
              if (accumulator.indexOf(current.catalogArea) === -1) {
                accumulator.push(current.catalogArea);
              }

              return accumulator;
            }, []);

          return accessibleCatalogAreaValues.indexOf(value.value) !== -1;
        });
      });

    this.displayComponentContext('global.search', true);
  }

  public defaultRefreshForPropertyCatalog(): void {
    if (!!this.propertyValuesTableDataSource) {
      this.propertyValuesTableDataSource.dataSelection = [];
    }
    const propertyIds = this.propertyCatalogIdNameMappingList.filter(
      (property) => property.propertiesName && property.propertiesName.toUpperCase() === this.catalogName.value
    );

    const id = propertyIds[0] && propertyIds[0].propertiesId;
    if (!!id) {
      this.loadPropertyValues(parseInt(id, 10));
    }
  }

  public defaultSaveForPropertyCatalog(): void {
    this.showSaveSpinner = true;
    this.catalogService.savePropertyCatalog(this.propertyValuesTableDataSource.dataSrc).subscribe(
      (_result) => {
        this.clearPropertyValueFromCache();

        this.defaultRefreshForPropertyCatalog();
        this.messageService.showSuccessMessage('global.successOnSave');
        this.showSaveSpinner = false;
      },
      () => {
        this.messageService.showErrorMessage('global.errorOnSave');
        this.showSaveSpinner = false;
      }
    );
  }

  public refreshPropertyCatalog(): void {
    if (this.customRefreshButton) {
      this.customRefreshButton();
    } else {
      this.defaultRefreshForPropertyCatalog();
    }
  }

  public savePropertyCatalog(): void {
    if (this.customSaveButton) {
      this.customSaveButton();
    } else {
      this.defaultSaveForPropertyCatalog();
    }
  }

  public createPropertyCatalog(): void {
    if (this.customCreateButton) {
      this.customCreateButton();
    }
  }

  public importPropertyCatalog(): void {
    if (this.customImportButton) {
      this.customImportButton();
    }
  }

  public exportPropertyCatalog(): void {
    if (this.customExportButton) {
      this.customExportButton();
    }
  }

  private registerMainButtonObservables(): void {
    this.catalogService.refreshButton$.pipe(takeUntil(this.unsubscribe)).subscribe((f) => {
      this.customRefreshButton = f;
    });

    this.catalogService.saveButton$.pipe(takeUntil(this.unsubscribe)).subscribe((f) => {
      this.customSaveButton = f;
    });

    this.catalogService.createButton$.pipe(takeUntil(this.unsubscribe)).subscribe((f) => {
      this.customCreateButton = f;
    });

    this.catalogService.importButton$.pipe(takeUntil(this.unsubscribe)).subscribe((f) => {
      this.customImportButton = f;
    });

    this.catalogService.exportButton$.pipe(takeUntil(this.unsubscribe)).subscribe((f) => {
      this.customExportButton = f;
    });
  }

  private resetMainButtons(): void {
    this.customRefreshButton = undefined;
    this.customSaveButton = undefined;
    this.customCreateButton = undefined;
    this.customImportButton = undefined;
    this.customExportButton = undefined;
  }

  // tslint:disable-next-line:no-any
  public onCatalogAreaChange(event: any): void {
    this.resetMainButtons();
    this.resetComponentVisibility();
    this.catalogNameValues = [];
    this.catalogs = [];

    const catalogConstants: CatalogNameInterface[] = this.catalogConstService
      .fetchCatalogNames()
      .filter((catArea) => catArea.catalogArea === event.value);
    this.catalogs = catalogConstants;
    catalogConstants.forEach((c) => {
      if (
        this.accessibleCatalogName.includes(c.catalogList.value) ||
        (!!c.accessRightName && this.accessibleCatalogName.includes(c.accessRightName))
      ) {
        this.catalogNameValues.push({
          label: c.catalogList.label,
          value: {
            isProperty: c.isProperty,
            value: c.catalogList.value
          }
        });
      }
    });

    if (this.catalogNameValues.length > 1) {
      this.catalogNameValues.sort((name1, name2): number => {
        if (name1.label > name2.label) {
          return 1;
        }

        if (name1.label < name2.label) {
          return -1;
        }

        return 0;
      });
    }
  }

  // tslint:disable-next-line:no-any
  public onCatalogNameChange(event: any): void {
    this.node.clear();
    this.resetMainButtons();
    this.resetComponentVisibility();
    if (!!this.propertyValuesTableDataSource) {
      this.propertyValuesTableDataSource.dataSelection = [];
    }

    const catalog: CatalogNameInterface = this.catalogs.filter((c) => {
      return (
        (c.catalogList.value === event.value.value || c.accessRightName === event.value.value) &&
        c.isProperty === event.value.isProperty
      );
    })[0];

    if (!catalog) {
      return;
    }

    if (catalog.isProperty) {
      this.showCreateButton = false;
      this.showImportButton = false;
      const propertyIds = this.propertyCatalogIdNameMappingList.filter(
        (property) => property.propertiesName && property.propertiesName.toUpperCase() === catalog.catalogList.value
      );
      this.currentPropertyId = propertyIds[0] && propertyIds[0].propertiesId;
      if (!!this.currentPropertyId) {
        this.loadPropertyValues(parseInt(this.currentPropertyId, 10));
      }
    } else {
      this.showDynamicComponent = true;
      this.loadDynamicComponent(catalog);
    }

    if (catalog && catalog.catalogList.value === CatalogConstantsService.CAT_NAME_QUALIFICATION) {
      // synchronize qualifications
      this.catalogService.synchronizeQualifications().subscribe();
    }
  }

  private loadPropertyValuesTableColumn(catalogs: CatalogPropertiesTableDTO[]): void {
    if (catalogs.length !== 0) {
      if (catalogs[0].locale) {
        this.propertyValuesTableDataSource = new TableDataSource({
          columns: [
            { field: 'propertiesKey', translateKey: this.getTranslateKey('propertiesKey') },
            {
              field: 'isStandard',
              translateKey: this.getTranslateKey('isStandard'),
              alignment: ColumnAlignment.CENTER
            },
            { field: 'enPropertiesValue', translateKey: this.getTranslateKey('enPropertiesValue') },
            { field: 'frPropertiesValue', translateKey: this.getTranslateKey('frPropertiesValue') }
          ],
          data: catalogs
        });
      } else {
        this.propertyValuesTableDataSource = new TableDataSource({
          columns: [
            { field: 'propertiesKey', translateKey: this.getTranslateKey('propertiesKey') },
            {
              field: 'isStandard',
              translateKey: this.getTranslateKey('isStandard'),
              alignment: ColumnAlignment.CENTER
            },
            { field: 'propertiesValue', translateKey: this.getTranslateKey('propertiesValue') }
          ],
          data: catalogs
        });
      }
    } else {
      this.propertyValuesTableDataSource = new TableDataSource({
        columns: [
          { field: 'propertiesKey', translateKey: this.getTranslateKey('propertiesKey') },
          {
            field: 'isStandard',
            translateKey: this.getTranslateKey('isStandard'),
            alignment: ColumnAlignment.CENTER
          },
          { field: 'propertiesValue', translateKey: this.getTranslateKey('propertiesValue') }
        ],
        data: catalogs
      });
    }
  }

  private loadPropertyValues(propertiesId: number): void {
    this.catalogService.fetchPropertyValuesTableData(propertiesId).subscribe((results) => {
      this.loadPropertyValuesTableColumn(results);
      this.showPropertyValuesTable = true;
    });
  }

  private loadDynamicComponent(catalog: CatalogNameInterface): void {
    if (!!catalog.componentName) {
      let componentFactory;
      let data: PageComponentData;
      this.node.clear();

      data = {
        id: 1,
        componentId: catalog.componentName.toString(),
        openMode: ComponentOpenMode.Create,
        objectId: this.getDynamicComponentData(catalog) ? this.getDynamicComponentData(catalog) : undefined
      };

      componentFactory = this.componentFactoryResolver.resolveComponentFactory(catalog.component);

      const componentRef: ComponentRef<PageComponent<PageComponentData>> = this.node.createComponent(componentFactory);

      componentRef.instance.componentData = data;
      this.showCreateButton = catalog.isCreateEnabled;
      this.showImportButton = catalog.isImportEnabled;
    } else {
      super.throwUnboundLocalError('loadDynamicComponent', 'catalog.componentName');
    }
  }

  /***********************
   * Property Values Popup
   ***********************/

  private getDynamicComponentData(catalog: CatalogNameInterface): string {
    let componentObjectData = '';
    if (catalog.catalogList && catalog.catalogList.value === CatalogComponent.WAREHOUSE_AREA_TYPE) {
      componentObjectData = AWPropertiesConstants.WAREHOUSE_CATEGORY_WAREHOUSE;
    } else if (catalog.catalogList && catalog.catalogList.value === CatalogComponent.WORKSHOP_AREA_TYPE) {
      componentObjectData = AWPropertiesConstants.WAREHOUSE_CATEGORY_WORKSHOP;
    }

    return componentObjectData;
  }

  public addPropertyValue(): void {
    this.isNewPropertyValue = true;
    this.viewModePropertyValue = false;
    const propertyValueWithThreeCols = 3;
    const propertyValueWithFourCols = 4;
    if (!!this.currentPropertyId) {
      this.currentPropertyValue = {
        propertiesId: parseInt(this.currentPropertyId, 10)
      };
      if (this.propertyValuesTableDataSource.columns.length === propertyValueWithThreeCols) {
        this.currentPropertyValue.locale = false;
      } else if (this.propertyValuesTableDataSource.columns.length === propertyValueWithFourCols) {
        this.currentPropertyValue.locale = true;
      }
      // this.currentPropertyValue = undefined;
      this.showPropertyValuePopup = true;
    } else {
      super.throwUnboundLocalError('addPropertyValue', 'this.currentPropertyId');
    }
  }

  public disablePropertyTypeDeleteButton(): boolean {
    let result: boolean;

    if (this.propertyValuesTableDataSource.dataSelectionCount === 0) {
      result = true;
    } else {
      const catalogs: CatalogPropertiesTableDTO[] = this.propertyValuesTableDataSource.dataSelection.filter(
        (value) => value.isStandard
      );
      result = catalogs.length !== 0;
    }

    return result;
  }

  public editSelectedPropertyValue(): void {
    this.isNewPropertyValue = false;
    this.viewModePropertyValue = false;
    this.currentPropertyValue = { ...this.propertyValuesTableDataSource.dataSelection[0] };
    this.showPropertyValuePopup = true;
    this.currentPropertyValueIndex = this.propertyValuesTableDataSource.dataSrc.findIndex(
      (value) => value === this.propertyValuesTableDataSource.dataSelection[0]
    );
  }

  public deleteSelectedPropertyValue(): void {
    const partialMessageKey = 'global.deleteConfirmationMsg';

    this.confirmationService.confirmDelete({
      messageKey: partialMessageKey,
      accept: () => {
        this.catalogService.deletePropertyCatalog(this.propertyValuesTableDataSource.dataSelection).subscribe(
          (result) => {
            this.defaultRefreshForPropertyCatalog();
            this.messageService.showSuccessMessage('global.deleteSuccessMsg');
          },
          () => {
            this.messageService.showErrorMessage('global.deleteErrorMsg');
          }
        );
        this.propertyValuesTableDataSource.dataSelection = [];
      }
    });
  }

  public createPropertyValue(event: CatalogPropertiesTableDTO) {
    if (event) {
      const propertyValueAlreadyExists = this.propertyValuesTableDataSource.dataSrc.filter(
        (value) => value.propertiesKey === event.propertiesKey
      );
      if (propertyValueAlreadyExists.length === 0) {
        this.propertyValuesTableDataSource.addData([event]);
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('propertyValueAlreadyExists'));
      }
    }
  }

  public updatePropertyValue(event: CatalogPropertiesTableDTO) {
    if (this.currentPropertyValueIndex !== null && this.currentPropertyValueIndex !== undefined) {
      this.propertyValuesTableDataSource.replaceData(
        this.propertyValuesTableDataSource.dataSrc[this.currentPropertyValueIndex],
        event
      );
      this.currentPropertyValueIndex = undefined;
      this.propertyValuesTableDataSource.dataSelection = [];
    } else {
      super.throwUnboundLocalError('updatePropertyValue', 'this.currentPropertyValueIndex');
    }
  }

  private clearPropertyValueFromCache(): void {
    const catalog: CatalogNameInterface = this.catalogs.filter((c) => {
      return c.catalogList.value === this.catalogName.value;
    })[0];

    if (!!catalog && catalog.isProperty && !!catalog.key) {
      this.propertiesService.resetCache(catalog.key);
    }
  }
}
