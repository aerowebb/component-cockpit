import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';

import { ColumnAlignment, TableDataSource } from '../../../../shared/components/table/table-data-source';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { LangConstants } from '../../../../shared/constants/lang-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { BidtStorageBinDTO } from '../../../../shared/types/api-types/bidt-storage-bin-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { SaveWarehouseInput } from '../../../../shared/types/api-types/save-warehouse-input.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';

import { WarehouseFormService } from './warehouse-form.service';

interface AreaRow {
  sbNumber: string | undefined;
  sbDescription: string | undefined;
  sbType: string | undefined;
  storageBinDTO: BidtStorageBinDTO;
}

interface StorageBinRow {
  sbNumber: string | undefined;
  sbDescription: string | undefined;
  sbType: string | undefined;
  sbLocalisation: string | undefined;
  sbSurface: number | undefined;
  sbVolume: number | undefined;
  storageBinDTO: BidtStorageBinDTO;
}

@Component({
  selector: 'aw-warehouse-form',
  styleUrls: ['./warehouse-form.component.scss'],
  templateUrl: './warehouse-form.component.html'
})
export class WarehouseFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public bidtWarehouseDTO: BidtWarehouseDTO;
  private wareHouseId: number | undefined;
  public wareHouseTitleText: string;
  public types: LabelValue<string>[];
  public sites: LabelValue<number>[];
  public countries: LabelValue<string>[];
  public storageBinTypes: LabelValue<number>[];
  public areaBinTypes: LabelValue<number>[];
  public storageBinsTableDataSource: TableDataSource<StorageBinRow>;
  public areaTableDataSource: TableDataSource<AreaRow>;
  public filteredRowsNb: number;
  public deletedStorageBins: number[];
  public globalFilterTxt: string;
  private warehouseTypeMap: Map<string, string>;
  private binTypeMap: Map<number, string>;
  public currentStorageBin: BidtStorageBinDTO | undefined;
  public currentArea: BidtStorageBinDTO | undefined;
  public storageBinDialogOpenMode: ComponentOpenMode;
  public areaDialogOpenMode: ComponentOpenMode;
  public showStorageBinDialog: boolean;
  public showAreaDialog: boolean;
  public isLoading: boolean;
  public showSaveSpinner: boolean;
  public companies: LabelValue<number>[];
  public supplyingWarehouses: LabelValue<number>[];
  private currentStorageBinIndex: number;
  private currentAreaIndex: number;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly warehouseFormService: WarehouseFormService,
    private readonly confirmationService: ConfirmationService,
    private readonly translateService: TranslateService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.initStorageBinsTableDataSource();
    this.isLoading = false;
    this.init();
  }

  public getComponentName(): string {
    return 'WarehouseFormComponent';
  }

  private init(): void {
    this.filteredRowsNb = 0;
    this.types = [];
    this.sites = [];
    this.companies = [];
    this.supplyingWarehouses = [];
    this.countries = [];
    this.storageBinTypes = [];
    this.areaBinTypes = [];
    this.deletedStorageBins = [];
    this.bidtWarehouseDTO = {};
    this.warehouseTypeMap = new Map<string, string>();
    this.binTypeMap = new Map<number, string>();

    this.currentStorageBin = undefined;
    this.currentStorageBinIndex = -1;
    this.currentArea = undefined;
    this.currentAreaIndex = -1;
    this.storageBinDialogOpenMode = ComponentOpenMode.Read;
    this.areaDialogOpenMode = ComponentOpenMode.Read;
    this.showStorageBinDialog = false;
    this.showAreaDialog = false;
    this.loadCompanies();
    this.loadSites();
    this.loadSuppliyingWarehouses();
  }

  private initStorageBinsTableDataSource(): void {
    this.storageBinsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'sbNumber',
          translateKey: this.getTranslateKey('sbNumber'),
          alignment: ColumnAlignment.LEFT,
          width: '10%'
        },
        {
          field: 'sbDescription',
          translateKey: this.getTranslateKey('sbDescription'),
          alignment: ColumnAlignment.LEFT,
          width: '18%'
        },
        {
          field: 'sbType',
          translateKey: this.getTranslateKey('sbType'),
          alignment: ColumnAlignment.LEFT,
          width: '18%'
        },
        {
          field: 'sbLocalisation',
          translateKey: this.getTranslateKey('sbLocalisation'),
          alignment: ColumnAlignment.LEFT,
          width: '18%'
        },
        {
          field: 'sbSurface',
          translateKey: this.getTranslateKey('sbSurface'),
          alignment: ColumnAlignment.LEFT,
          width: '18%'
        },
        {
          field: 'sbVolume',
          translateKey: this.getTranslateKey('sbVolume'),
          alignment: ColumnAlignment.LEFT,
          width: '18%'
        }
      ],
      data: []
    });
    this.areaTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'sbNumber',
          translateKey: this.getTranslateKey('sbNumber'),
          alignment: ColumnAlignment.LEFT,
          width: '10%'
        },
        {
          field: 'sbDescription',
          translateKey: this.getTranslateKey('sbDescription'),
          alignment: ColumnAlignment.LEFT,
          width: '18%'
        },
        {
          field: 'sbType',
          translateKey: this.getTranslateKey('sbType'),
          alignment: ColumnAlignment.LEFT,
          width: '18%'
        }
      ],
      data: []
    });
  }

  public ngOnInit(): void {
    super.ngOnInit();

    // Load dropdowns
    // tslint:disable-next-line:no-any
    const observables = [
      this.propertiesService.getValue(GenericPropertyConstants.WAREHOUSE_TYPE_MAP),
      this.propertiesService.getCountries(),
      this.warehouseFormService.findWarehouseAreaType(),
      this.warehouseFormService.findStorageBinType()
    ];

    forkJoin(observables).subscribe((results) => {
      const types: LabelValue<string>[] = results['0'];
      const countries: LabelValue<string>[] = results['1'];

      types.forEach((element) => {
        this.warehouseTypeMap.set(element.value, element.label);
      });
      this.areaBinTypes = this.getBinTypeArray(results['2']);
      this.storageBinTypes = this.getBinTypeArray(results['3']);

      this.types = types;
      this.countries = countries;
      if (this.componentData) {
        this.updateOpenMode(this.componentData.openMode);
        let warehouseObj: BidtWarehouseDTO;
        if (this.componentData.objectId) {
          warehouseObj = this.serializationService.deserialize(this.componentData.objectId);
          this.wareHouseId = warehouseObj.wareHouseId;
          this.wareHouseTitleText = warehouseObj.whName
            ? `${warehouseObj.whCode}-${warehouseObj.whName}`
            : `${warehouseObj.whCode}`;
          this.loadWarehouse();
        }
        const context = this.isCreateOpenMode ? 'tab.createMode' : this.wareHouseTitleText;
        this.displayComponentContext(context, this.isCreateOpenMode);
      }
    });
  }

  private getBinTypeArray(binTypes: LabelValue<number>[]): LabelValue<number>[] {
    const binArray: LabelValue<number>[] = binTypes.map((element) => {
      const matches = element.label.match(/EN=(.*)FR=(.*)/);
      const label = matches
        ? this.translateService.currentLang === LangConstants.FRENCH_CODE
          ? matches[2]
          : matches[1]
        : element.label;

      this.binTypeMap.set(element.value, label);

      return {
        label,
        value: element.value
      };
    });

    return binArray;
  }

  public cancelWarehouse(): void {
    this.updateOpenMode(ComponentOpenMode.Read);
    this.reloadWarehouse();
  }

  public checkValidation(): boolean {
    return !!this.bidtWarehouseDTO.whCode && !!this.bidtWarehouseDTO.bidtSiteId;
  }

  public editWarehouse(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public reloadWarehouse(): void {
    this.init();
    this.ngOnInit();
  }

  public loadWarehouse(): void {
    this.areaTableDataSource.setData([]);
    this.areaTableDataSource.update();
    this.storageBinsTableDataSource.setData([]);
    this.storageBinsTableDataSource.update();
    if (!!this.wareHouseId) {
      this.warehouseFormService.findBidtWarehouseById(this.wareHouseId).subscribe((result) => {
        this.bidtWarehouseDTO = result;
        this.loadSites();
        this.loadAreas();
      });
    } else {
      super.throwUnboundLocalError('loadWarehouse', 'this.wareHouseId');
    }
  }

  private loadAreas(): void {
    if (this.bidtWarehouseDTO.bidtStorageBinDTOs) {
      const bins: AreaRow[] = [];
      this.isLoading = false;
      this.bidtWarehouseDTO.bidtStorageBinDTOs.forEach((element) => {
        if (!!element.bidtStorageBinTypeId) {
          const rowObj: AreaRow = {
            sbNumber: element.sbNumber,
            sbType: this.binTypeMap.get(element.bidtStorageBinTypeId),
            sbDescription: element.sbDescription,
            storageBinDTO: element
          };
          bins.push(rowObj);
        }
      });
      this.areaTableDataSource.setData(bins);
      this.areaTableDataSource.update();
      this.filteredRowsNb = this.areaTableDataSource.dataCount;
    }

    this.areaTableDataSource.dataSelection = [];
  }

  public onSelectOrDeselectedArea(): void {
    if (this.areaTableDataSource.dataSelectionCount === 1) {
      this.currentAreaIndex = this.areaTableDataSource.dataSrc.indexOf(this.areaTableDataSource.dataSelection[0]);
      const selectedBin = this.areaTableDataSource.dataSelection[0].storageBinDTO;
      this.currentArea = { ...selectedBin };
      this.setResultsTable(selectedBin.bins);
    } else {
      this.currentArea = undefined;
      this.setResultsTable([]);
    }
  }

  private setResultsTable(result: BidtStorageBinDTO[] | undefined): void {
    const bins: StorageBinRow[] = [];
    if (result) {
      this.isLoading = false;
      result.forEach((element) => {
        if (!!element.bidtStorageBinTypeId) {
          const rowObj: StorageBinRow = {
            sbNumber: element.sbNumber,
            sbType: this.binTypeMap.get(element.bidtStorageBinTypeId),
            sbDescription: element.sbDescription,
            sbLocalisation: element.sbLocalisation,
            sbSurface: element.sbSurface,
            sbVolume: element.sbVolume,
            storageBinDTO: element
          };
          bins.push(rowObj);
        }
      });
    }
    this.storageBinsTableDataSource.setData(bins);
    this.storageBinsTableDataSource.update();
    this.filteredRowsNb = this.storageBinsTableDataSource.dataCount;
    this.storageBinsTableDataSource.dataSelection = [];
  }

  public loadCompanies(): void {
    this.warehouseFormService.fillListCompanies().subscribe((result) => {
      this.companies = result;
      this.loadSites();
    });
  }

  public loadSites(): void {
    this.warehouseFormService.fillListSite(this.bidtWarehouseDTO.bidtCompanyId).subscribe((result) => {
      this.sites = result;
      this.loadSuppliyingWarehouses();
    });
  }

  public loadSuppliyingWarehouses(): void {
    this.supplyingWarehouses = [];
    if (!this.bidtWarehouseDTO.bidtSiteId) {
      return;
    }
    this.warehouseFormService.fillListSupplyingWarehouses(this.bidtWarehouseDTO.bidtSiteId).subscribe((result) => {
      if (result && result.length) {
        this.supplyingWarehouses = result.filter((item) => item.value !== this.bidtWarehouseDTO.wareHouseId);
      }
    });
  }

  public onSelectCompany(): void {
    this.bidtWarehouseDTO.bidtSiteId = undefined;
    this.bidtWarehouseDTO.bidtWarehouseId = undefined;
    this.loadSites();
  }

  public onSelectSite(): void {
    this.bidtWarehouseDTO.bidtWarehouseId = undefined;
    this.loadSuppliyingWarehouses();
  }

  public saveWarehouse(): void {
    if (!this.bidtWarehouseDTO.whCode || !this.bidtWarehouseDTO.bidtSiteId) {
      this.messageService.showErrorMessage('global.missingFields');

      return;
    }
    this.bidtWarehouseDTO.whCategory = AWPropertiesConstants.WAREHOUSE_CATEGORY_WAREHOUSE;
    const addedUpdatedStorageBin: BidtStorageBinDTO[] = [];
    this.areaTableDataSource.dataSrc.forEach((element) => {
      element.storageBinDTO.sbCategory = AWPropertiesConstants.STORAGE_BIN_CATEGORY_AREA;
      addedUpdatedStorageBin.push(element.storageBinDTO);
    });

    this.storageBinsTableDataSource.dataSrc.forEach((element) => {
      element.storageBinDTO.sbCategory = AWPropertiesConstants.STORAGE_BIN_CATEGORY_SB;
    });

    const saveObj: SaveWarehouseInput = {
      bidtWarehouseDTO: this.bidtWarehouseDTO,
      bidtStorageBinDTO: addedUpdatedStorageBin,
      deletedStorageBinIdList: this.deletedStorageBins
    };

    this.showSaveSpinner = true;
    this.warehouseFormService.saveWarehouse(saveObj).subscribe(
      (result) => {
        if (!!this.componentData && !this.bidtWarehouseDTO.wareHouseId && result) {
          this.bidtWarehouseDTO.wareHouseId = result;
          this.componentData.componentId = this.getComponentName();
          this.componentData.objectId = this.serializationService.serialize(this.bidtWarehouseDTO);
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnSaveWarehouse'));
          this.ngOnInit();
        } else {
          this.storageBinsTableDataSource.dataSelection = [];
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnUpdateWarehouse'));
        }
        this.updateOpenMode(ComponentOpenMode.Read);
        this.showSaveSpinner = false;
      },
      (error) => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnSaveWarehouse'));
        this.showSaveSpinner = false;
      }
    );
  }

  public createArea(): void {
    this.currentAreaIndex = -1;
    this.currentArea = undefined;
    this.areaDialogOpenMode = ComponentOpenMode.Create;
    this.showAreaDialog = true;
  }

  public createStorageBin(): void {
    this.currentStorageBinIndex = -1;
    this.currentStorageBin = undefined;
    this.storageBinDialogOpenMode = ComponentOpenMode.Create;
    this.showStorageBinDialog = true;
  }

  public editArea(): void {
    if (this.areaTableDataSource.dataSelectionCount === 1) {
      this.currentAreaIndex = this.areaTableDataSource.dataSrc.indexOf(this.areaTableDataSource.dataSelection[0]);
      const selectedBin = this.areaTableDataSource.dataSelection[0].storageBinDTO;
      this.currentArea = { ...selectedBin };
      this.areaDialogOpenMode = ComponentOpenMode.Write;
      this.showAreaDialog = true;
    }
  }

  public editStorageBin(): void {
    if (this.storageBinsTableDataSource.dataSelectionCount === 1) {
      this.currentStorageBinIndex = this.storageBinsTableDataSource.dataSrc.indexOf(
        this.storageBinsTableDataSource.dataSelection[0]
      );
      const selectedBin = this.storageBinsTableDataSource.dataSelection[0].storageBinDTO;
      this.currentStorageBin = { ...selectedBin };
      this.storageBinDialogOpenMode = ComponentOpenMode.Write;
      this.showStorageBinDialog = true;
    }
  }

  public openSelectedAreas(): void {
    if (this.areaTableDataSource.dataSelectionCount === 1) {
      const selectedBin = this.areaTableDataSource.dataSelection[0].storageBinDTO;
      this.currentArea = { ...selectedBin };
      this.areaDialogOpenMode = ComponentOpenMode.Read;
      this.showAreaDialog = true;
    }
  }

  public openSelectedStorageBins(): void {
    if (this.storageBinsTableDataSource.dataSelectionCount === 1) {
      const selectedBin = this.storageBinsTableDataSource.dataSelection[0].storageBinDTO;
      this.currentStorageBin = { ...selectedBin };
      this.storageBinDialogOpenMode = ComponentOpenMode.Read;
      this.showStorageBinDialog = true;
    }
  }

  public deleteSelectedAreas(): void {
    this.confirmationService.confirmDelete({
      messageKey: 'global.confirmSelectedDataDelete',
      accept: () => {
        this.areaTableDataSource.dataSelection.forEach((element) => {
          this.areaTableDataSource.setData(
            this.areaTableDataSource.data.filter((storage) => storage.sbNumber !== element.sbNumber)
          );
          if (element.storageBinDTO.id) {
            this.deletedStorageBins.push(element.storageBinDTO.id);
          }
          this.areaTableDataSource.update();
        });
        this.areaTableDataSource.deleteDataSelection();
      }
    });
  }

  public deleteSelectedStorageBins(): void {
    this.confirmationService.confirmDelete({
      messageKey: 'global.confirmSelectedDataDelete',
      accept: () => {
        this.storageBinsTableDataSource.dataSelection.forEach((element) => {
          this.storageBinsTableDataSource.setData(
            this.storageBinsTableDataSource.data.filter((storage) => storage.sbNumber !== element.sbNumber)
          );
          if (element.storageBinDTO.id) {
            this.deletedStorageBins.push(element.storageBinDTO.id);
          }
          this.storageBinsTableDataSource.update();
        });
        this.storageBinsTableDataSource.deleteDataSelection();
      }
    });
  }

  public onAddStorageBin(element: BidtStorageBinDTO): void {
    if (!!element && !!element.bidtStorageBinTypeId) {
      if (!this.areaTableDataSource.dataSelection[0].storageBinDTO.bins) {
        this.areaTableDataSource.dataSelection[0].storageBinDTO.bins = [];
      }
      this.areaTableDataSource.dataSelection[0].storageBinDTO.bins.push(element);
      const rowObj: StorageBinRow = {
        sbNumber: element.sbNumber,
        sbType: this.binTypeMap.get(element.bidtStorageBinTypeId),
        sbDescription: element.sbDescription,
        sbLocalisation: element.sbLocalisation,
        sbSurface: element.sbSurface,
        sbVolume: element.sbVolume,
        storageBinDTO: element
      };
      if (this.currentStorageBinIndex !== -1) {
        this.storageBinsTableDataSource.replaceData(
          this.storageBinsTableDataSource.dataSrc[this.currentStorageBinIndex],
          rowObj
        );
      } else {
        this.storageBinsTableDataSource.addData([rowObj]);
      }
      this.storageBinsTableDataSource.dataSelection = [];
    } else {
      super.throwUnboundLocalError('onAddStorageBin', 'element');
    }
  }

  public onAddArea(element: BidtStorageBinDTO): void {
    if (!!element && !!element.bidtStorageBinTypeId) {
      const rowObj: AreaRow = {
        sbNumber: element.sbNumber,
        sbType: this.binTypeMap.get(element.bidtStorageBinTypeId),
        sbDescription: element.sbDescription,
        storageBinDTO: element
      };
      if (this.currentAreaIndex !== -1) {
        this.areaTableDataSource.replaceData(this.areaTableDataSource.dataSrc[this.currentAreaIndex], rowObj);
      } else {
        this.areaTableDataSource.addData([rowObj]);
      }
      this.areaTableDataSource.dataSelection = [];
    } else {
      super.throwUnboundLocalError('onAddArea', 'element');
    }
  }
}
