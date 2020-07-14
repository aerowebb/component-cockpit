import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { forkJoin } from 'rxjs';

import { TableDataSource } from '../../../../shared/components/table/table-data-source';
import { AccessibleFunctionsConstants } from '../../../../shared/constants/accessible-functions-constants';
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
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { AttributeTransferDTO } from '../../../../shared/types/api-types/attribute-transfer-dto.interface';
import { BidoAttributeDTOId } from '../../../../shared/types/api-types/bido-attribute-dto-id.interface';
import { BidoAttributeDTO } from '../../../../shared/types/api-types/bido-attribute-dto.interface';
import { BireAttributeDTOId } from '../../../../shared/types/api-types/bire-attribute-dto-id.interface';
import { BireAttributeDTO } from '../../../../shared/types/api-types/bire-attribute-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { StringUtils } from '../../../../shared/utils/string-utils';

import { AttributesSearchService } from './attributes-search.service';

interface TableRow {
  attributeNameEn?: string;
  attributeDescriptionEn?: string;
  attributeType?: string;
  isStandard?: boolean;
}

enum PossibleTypes {
  All = 'all',
  Engineering = 'engineering',
  Fleet = 'fleet'
}

@Component({
  selector: 'aw-attributes-search',
  templateUrl: './attributes-search.component.html',
  styleUrls: ['./attributes-search.component.scss']
})
export class AttributesSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  private static readonly ENGINERRING_TABLE_EXPORT_NAME: string = 'engineering-attribute-list';
  private static readonly FLEET_TABLE_EXPORT_NAME: string = 'fleet-attribute-list';
  private static readonly ALL_TABLE_EXPORT_NAME: string = 'all-attribute-list';
  public static readonly ENGINEERING_TAB: string = 'ENGINEERING_TAB';
  public static readonly FLEET_TAB: string = 'FLEET_TAB';
  public static readonly TYPE_ALL = PossibleTypes.All;
  public static readonly TYPE_ENGINEERING = PossibleTypes.Engineering;
  public static readonly TYPE_FLEET = PossibleTypes.Fleet;
  public component: typeof AttributesSearchComponent;

  public types: SelectItem[];
  public selectedType: string;
  public engineeringCategoryList: LabelValue<string>[];
  public fleetCategoryList: LabelValue<string>[];
  public categoryEngineeringValue: string;
  public categoryFleetValue: string;

  public allTableDataSource: TableDataSource<BireAttributeDTO>;
  public engineeringTableDataSource: TableDataSource<BireAttributeDTO>;
  public fleetTableDataSource: TableDataSource<BidoAttributeDTO>;
  public attributeId: BireAttributeDTOId;
  public isLoading: boolean;
  public resultsTableColsAll: TableColumn[];
  public resultsTableColsEngineering: TableColumn[];
  public resultsTableColsFleet: TableColumn[];
  public filtersVisible: boolean;

  public allBireAttributes: BireAttributeDTO[];
  public allBidoAttributes: BidoAttributeDTO[];

  private accessibleCategories: string[] = [];

  @ViewChild('resultsContainerAnchor')
  public resultsContainerAnchor: ElementRef;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly attributesSearchService: AttributesSearchService,
    private readonly confirmationService: ConfirmationService,
    private readonly exportService: ExportService,
    private readonly propertiesService: PropertiesService,
    private readonly sessionService: SessionService
  ) {

    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.component = AttributesSearchComponent;
    // load categories dropdown
    this.initAllTableDataSource();
    this.initEngineeringTableDataSource();
    this.initFleetTableDataSource();
    this.engineeringCategoryList = [];
    this.propertiesService.getValue(GenericPropertyConstants.MCH_ATTRIBUTE_CATEGORY_MAP).subscribe((results) => {
      this.engineeringCategoryList = results;
    });
    this.fleetCategoryList = [];
    this.propertiesService.getValue(GenericPropertyConstants.ATTRIBUTE_CATEGORY_MAP).subscribe((results) => {
      this.fleetCategoryList = results;
    });
    this.isLoading = false;
  }

  public ngOnInit() {
    this.categoryEngineeringValue = '1-all';
    this.categoryFleetValue = '1-all';
    this.filtersVisible = false;
    super.ngOnInit();
    this.displayComponentContext('global.search', true);

    this.sessionService.getAccessibleFunctions([AccessibleFunctionsConstants.ATTRIBUTES_TRANSACTION]).subscribe(
      (results: { [entryComponent: string]: string[] }) => {
        this.accessibleCategories =
          results.accessibleFunctionsPerEntryComponent[AccessibleFunctionsConstants.ATTRIBUTES_TRANSACTION];
        this.types = [{ label: 'All', value: 'all' }];
        this.selectedType = 'all';

        if (this.accessibleCategories.includes(AttributesSearchComponent.ENGINEERING_TAB)) {
          this.types = this.types.concat({ label: 'Engineering', value: 'engineering' });
        }
        if (this.accessibleCategories.includes(AttributesSearchComponent.FLEET_TAB)) {
          this.types = this.types.concat({ label: 'Fleet', value: 'fleet' });
        }
        this.reloadAllAttributeList();
      });
    this.reloadEngineeringAttributeList();
    this.reloadFleetAttributeList();
  }

  private initEngineeringTableDataSource() {
    this.engineeringTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'attributeNameEn', translateKey: this.getTranslateKey('attributeNameEn'), width: '30%' },
        { field: 'attributeCategory', translateKey: this.getTranslateKey('attributeCategory'), width: '20%' },
        { field: 'attributeDescriptionEn', translateKey: this.getTranslateKey('attributeDescriptionEn'), width: '20%' },
        { field: 'attributeType', translateKey: this.getTranslateKey('attributeType'), width: '20%' },
        { field: 'isStandard', translateKey: this.getTranslateKey('isStandard'), width: '10%' }
      ],
      data: []
    });
  }

  private initFleetTableDataSource() {
    this.fleetTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'attributeNameEn', translateKey: this.getTranslateKey('attributeNameEn'), width: '30%' },
        { field: 'attributeCategory', translateKey: this.getTranslateKey('attributeCategory'), width: '20%' },
        { field: 'attributeDescriptionEn', translateKey: this.getTranslateKey('attributeDescriptionEn'), width: '20%' },
        { field: 'attributeType', translateKey: this.getTranslateKey('attributeType'), width: '20%' },
        { field: 'isStandard', translateKey: this.getTranslateKey('isStandard'), width: '10%' }
      ],
      data: []
    });
  }

  private initAllTableDataSource() {
    this.allTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'attributeNameEn', translateKey: this.getTranslateKey('attributeNameEn'), width: '30%' },
        { field: 'attributeCategory', translateKey: this.getTranslateKey('attributeCategory'), width: '20%' },
        { field: 'attributeDescriptionEn', translateKey: this.getTranslateKey('attributeDescriptionEn'), width: '20%' },
        { field: 'attributeType', translateKey: this.getTranslateKey('attributeType'), width: '20%' },
        { field: 'isStandard', translateKey: this.getTranslateKey('isStandard'), width: '10%' }
      ],
      data: []
    });
  }

  public reloadAllAttributeList(): void {
    this.initAllTableDataSource();
    if (this.accessibleCategories.includes(AttributesSearchComponent.ENGINEERING_TAB)) {
      this.attributesSearchService.getAllEngineeringAttributeList().subscribe(
        (resultsBire: BireAttributeDTO[]) => {

          if (resultsBire) {
            this.allTableDataSource.addData(resultsBire);
            this.allBireAttributes = resultsBire;
            this.allTableDataSource.dataSrc.forEach((attribute: BireAttributeDTO) => {
              this.engineeringCategoryList.forEach((value: LabelValue<string>) => {
                if (value.value === attribute.attributeCategory) {
                  attribute.attributeCategory = value.label;

                  return;
                }
              });
            });
            this.allTableDataSource.update();
          }
        }
      );
    }

    if (this.accessibleCategories.includes(AttributesSearchComponent.FLEET_TAB)) {
      this.attributesSearchService.getAllFleetAttributeList().subscribe((resultsBido) => {
        this.isLoading = false;
        if (resultsBido) {
          this.allTableDataSource.addData(resultsBido);
          this.allBidoAttributes = resultsBido;
          this.allTableDataSource.dataSrc.forEach((attribute: BireAttributeDTO) => {
            this.fleetCategoryList.forEach((value: LabelValue<string>) => {
              if (value.value === attribute.attributeCategory) {
                attribute.attributeCategory = value.label;

                return;
              }
            });
          });
          this.allTableDataSource.data.forEach((attribute: BireAttributeDTO) => {
            this.fleetCategoryList.forEach((value: LabelValue<string>) => {
              if (value.value === attribute.attributeCategory) {
                attribute.attributeCategory = value.label;

                return;
              }
            });
          });
          this.allTableDataSource.update();
        }
      });
    }

    this.allTableDataSource.dataSelection = [];
  }

  public toggleFilterVisibility(): void {
    this.filtersVisible = !this.filtersVisible;
  }


  public getComponentName(): string {
    return ComponentConstants.ADM_ATTRIBUTES_SEARCH;
  }

  public resetSearchCriteria() {
    this.categoryEngineeringValue = '1-all';
    this.categoryFleetValue = '1-all';
    this.reloadEngineeringAttributeList();
    this.reloadFleetAttributeList();
  }

  public reloadEngineeringAttributeList() {
    this.isLoading = true;
    super.scrollToAnchor(this.resultsContainerAnchor);
    this.attributesSearchService.getEngineeringAttributeList(this.categoryEngineeringValue).subscribe((results) => {
      this.isLoading = false;
      if (results) {
        this.engineeringTableDataSource.setData(results);
        this.engineeringTableDataSource.dataSrc.forEach((attribute: BireAttributeDTO) => {
          this.engineeringCategoryList.forEach((value: LabelValue<string>) => {
            if (value.value === attribute.attributeCategory) {
              attribute.attributeCategory = value.label;

              return;
            }
          });
        });
        this.engineeringTableDataSource.update();
      }

    });
  }

  public reloadFleetAttributeList() {
    this.isLoading = true;
    super.scrollToAnchor(this.resultsContainerAnchor);
    this.attributesSearchService.getFleetAttributeList(this.categoryFleetValue).subscribe((results) => {
      this.isLoading = false;
      if (results) {
        this.fleetTableDataSource.setData(results);
        this.fleetTableDataSource.dataSelection = [];
        this.fleetTableDataSource.dataSrc.forEach((attribute: BireAttributeDTO) => {
          this.fleetCategoryList.forEach((value: LabelValue<string>) => {
            if (value.value === attribute.attributeCategory) {
              attribute.attributeCategory = value.label;

              return;
            }
          });
        });
        this.fleetTableDataSource.update();
      }

    });
  }

  public openNewAttributeForm(): void {
    this.openEngineeringAttribute(undefined, ComponentOpenMode.Create);
  }

  public openSelectedAttribute() {
    if (this.selectedType === PossibleTypes.Fleet) {
      this.fleetTableDataSource.dataSelection.forEach((attribute) => {
        if (!!attribute) {
          if (StringUtils.isNullOrEmpty(attribute.attributeId)) {
            this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingAttributeId'));
          } else {
            this.openFleetAttribute(attribute.attributeId, ComponentOpenMode.Read);
          }
        }
      });
    }
    if (this.selectedType === PossibleTypes.Engineering) {
      this.engineeringTableDataSource.dataSelection.forEach((attribute) => {
        if (!!attribute) {
          if (StringUtils.isNullOrEmpty(attribute.attributeId)) {
            this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingAttributeId'));
          } else {
            this.openEngineeringAttribute(attribute.attributeId, ComponentOpenMode.Read);
          }
        }
      });
    }
    if (this.selectedType === PossibleTypes.All) {
      this.allTableDataSource.dataSelection.forEach((attribute) => {
        if (!!attribute) {
          if (StringUtils.isNullOrEmpty(attribute.attributeId)) {
            this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingAttributeId'));
          } else {
            if (!!attribute.bireAttributeValueDatas) {
              this.openEngineeringAttribute(attribute.attributeId, ComponentOpenMode.Read);
            } else {
              this.openFleetAttribute(attribute.attributeId, ComponentOpenMode.Read);
            }
          }
        }
      });
      this.allTableDataSource.dataSelection.forEach((attribute) => {
        if (!!attribute) {
          if (StringUtils.isNullOrEmpty(attribute.attributeId)) {
            this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingAttributeId'));
          } else {
            if (!!attribute.bireAttributeValueDatas) {
              this.openEngineeringAttribute(attribute.attributeId, ComponentOpenMode.Read);
            } else {
              this.openFleetAttribute(attribute.attributeId, ComponentOpenMode.Read);
            }
          }
        }
      });
    }
  }

  public openEngineeringAttribute(objectId: string | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ADM_ATTRIBUTES_FORM,
      openMode
    };
    if (!!objectId) {
      const attributeFormId: BireAttributeDTOId = {
        attributeId: objectId
      };
      const obj: AttributeTransferDTO = {
        isEngineering: true,
        engineeringAttributeId: attributeFormId,
      };
      data.objectId = this.serializationService.serialize(obj);
    }
    const labelKey = 'transaction.' + ComponentConstants.ADM_ATTRIBUTES_FORM;

    this.tabService.open(this.tabService.create(data, labelKey, true));

  }

  public openFleetAttribute(objectId: string | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ADM_ATTRIBUTES_FORM,
      openMode
    };
    if (!!objectId) {
      const attributeFormId: BidoAttributeDTOId = {
        attributeId: objectId
      };
      const obj: AttributeTransferDTO = {
        isEngineering: false,
        fleetAttributeId: attributeFormId,
      };
      data.objectId = this.serializationService.serialize(obj);
    }
    const labelKey = 'transaction.' + ComponentConstants.ADM_ATTRIBUTES_FORM;

    this.tabService.open(this.tabService.create(data, labelKey, true));

  }

  public deleteSelectedAllAttributeConfirm(): void {
    const deleteMessage =
      this.allTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedAttributes' : 'confirmDeleteSelectedAttribute';
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(deleteMessage),
      accept: () => {
        this.deleteSelectedAllAttribute();
      }
    });
  }

  public deleteSelectedAllAttribute(): void {
    const removeBireAttributeIdList: BireAttributeDTOId[] = [];
    const removeBidoAttributeIdList: BidoAttributeDTOId[] = [];
    this.allTableDataSource.dataSelection.forEach((attribute) => {
      // find among bire attributes
      this.allBireAttributes.forEach((bireAttribute: BireAttributeDTO) => {
        if (attribute.attributeId === bireAttribute.attributeId) {
          const attributeID: BireAttributeDTOId = {
            attributeId: attribute.attributeId
          };
          removeBireAttributeIdList.push(attributeID);
        }
      });
      // find among bido attributes
      this.allBidoAttributes.forEach((bidoAttribute: BidoAttributeDTO) => {
        if (attribute.attributeId === bidoAttribute.attributeId) {
          const attributeID: BidoAttributeDTOId = {
            attributeId: attribute.attributeId
          };
          removeBidoAttributeIdList.push(attributeID);
        }
      });
    });

    if (removeBireAttributeIdList.length === 0 && removeBidoAttributeIdList.length === 0) {

      return;
    }

    const bire$ = this.attributesSearchService.removeEngineeringAttributes(removeBireAttributeIdList);
    const bido$ = this.attributesSearchService.removeFleetAttributes(removeBidoAttributeIdList);

    forkJoin([bire$, bido$]).subscribe(
      () => {
        this.messageService.showSuccessMessage(this.getTranslateKey('onSuccessDeleteAttributes'));
        this.reloadEngineeringAttributeList();
        this.reloadFleetAttributeList();
        this.reloadAllAttributeList();
        this.allTableDataSource.dataSelection = [];
        this.fleetTableDataSource.dataSelection = [];
        this.engineeringTableDataSource.dataSelection = [];
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnDeleteAttributes'));
      }
    );
  }

  public deleteSelectedEngineeringAttribute() {
    const deleteMessage =
      this.engineeringTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedAttributes' : 'confirmDeleteSelectedAttribute';
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(deleteMessage),
      accept: () => {
        const removeAttributeIdList: BireAttributeDTOId[] = [];
        this.engineeringTableDataSource.dataSelection.forEach((attribute) => {
          if (!!attribute.attributeId && !!removeAttributeIdList) {
            const attributeID: BireAttributeDTOId = {
              attributeId: attribute.attributeId
            };
            removeAttributeIdList.push(attributeID);
          }
        });
        this.attributesSearchService.removeEngineeringAttributes(removeAttributeIdList).subscribe((results) => {
          this.messageService.showSuccessMessage(this.getTranslateKey('onSuccessDeleteAttributes'));
          this.reloadEngineeringAttributeList();
          this.reloadAllAttributeList();
        }, () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnDeleteAttributes'));
        });
        this.engineeringTableDataSource.dataSelection = [];
        this.allTableDataSource.dataSelection = [];
      }
    });
  }

  public deleteSelectedFleetAttribute() {
    const deleteMessage =
      this.fleetTableDataSource.dataSelectionCount > 1 ?
        'confirmDeleteSelectedAttributes' : 'confirmDeleteSelectedAttribute';
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(deleteMessage),
      accept: () => {
        const removeAttributeIdList: BidoAttributeDTOId[] = [];
        this.fleetTableDataSource.dataSelection.forEach((attribute) => {
          if (!!attribute.attributeId && !!removeAttributeIdList) {
            const attributeID: BidoAttributeDTOId = {
              attributeId: attribute.attributeId
            };
            removeAttributeIdList.push(attributeID);
          }
        });
        this.attributesSearchService.removeFleetAttributes(removeAttributeIdList).subscribe((results) => {
          this.messageService.showSuccessMessage(this.getTranslateKey('onSuccessDeleteAttributes'));
          this.reloadFleetAttributeList();
          this.reloadAllAttributeList();
        }, () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnDeleteAttributes'));
        });
        this.fleetTableDataSource.dataSelection = [];
        this.allTableDataSource.dataSelection = [];
      }
    });
  }

  public exportAllTable(): void {
    const temp: TableRow[] = [];
    this.allTableDataSource.dataSrc.forEach((data) => {
      const obj: TableRow = {
        attributeNameEn: data.attributeNameEn,
        attributeDescriptionEn: data.attributeDescriptionEn,
        attributeType: data.attributeType,
        isStandard: data.isStandard
      };
      temp.push(obj);
    });
    this.exportService.toExcel(
      temp,
      AttributesSearchComponent.ALL_TABLE_EXPORT_NAME,
      this.componentData.componentId
    );
  }

  public exportEngineeringTable(): void {
    const temp: TableRow[] = [];
    this.engineeringTableDataSource.dataSrc.forEach((data) => {
      const obj: TableRow = {
        attributeNameEn: data.attributeNameEn,
        attributeDescriptionEn: data.attributeDescriptionEn,
        attributeType: data.attributeType,
        isStandard: data.isStandard
      };
      temp.push(obj);
    });
    this.exportService.toExcel(
      temp,
      AttributesSearchComponent.ENGINERRING_TABLE_EXPORT_NAME,
      this.componentData.componentId
    );
  }

  public exportFleetTable(): void {
    const temp: TableRow[] = [];
    this.fleetTableDataSource.dataSrc.forEach((data) => {
      const obj: TableRow = {
        attributeNameEn: data.attributeNameEn,
        attributeDescriptionEn: data.attributeDescriptionEn,
        attributeType: data.attributeType,
        isStandard: data.isStandard
      };
      temp.push(obj);
    });
    this.exportService.toExcel(
      temp,
      AttributesSearchComponent.FLEET_TABLE_EXPORT_NAME,
      this.componentData.componentId
    );
  }

  public isStandardCheckEnginerring(): boolean {
    return this.engineeringTableDataSource.dataSelection.every((data) => {
      return !data.isStandard;
    }
    );
  }

  public isStandardCheckFleet(): boolean {
    return this.fleetTableDataSource.dataSelection.every((data) => {
      return !data.isStandard;
    }
    );
  }
}
